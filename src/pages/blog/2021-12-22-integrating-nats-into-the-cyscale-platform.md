---
templateKey: blog-post
title: Integrating NATS Into the Cyscale Platform
authors: Andrei Stefanie
permalink: integrating-nats-into-the-cyscale-platform
category: Tech
date: 2021-12-22T10:11:16.968Z
description: Some concepts and techniques we leveraged to switch to a
  cloud-native message broker.
featuredpost: true
featuredimage: /img/nats-horizontal-color.png
tags:
  - publish-subscribe
  - messaging
  - cloud-native
  - kubernetes
  - helm
---
<!--StartFragment-->

## Backstory

Cyscale helps you secure your cloud infrastructure. To achieve this, the platform must be able to read (sync) the cloud resources, perform assessments against a set of controls (security and architecture guidelines and best practices), send notifications, generate reports, perform scheduled tasks, and so on. Given the highly distributed and segregated nature of the platform, we chose a microservices architecture on top of Kubernetes. Also, by design, these processes are mostly asynchronous, happening in the background as a result of a certain event or trigger.

Besides direct HTTP communication (REST mostly for the account/user management and GraphQL for everything cloud-related), we make heavy use of message-based communication.

Up until recently, Redis served as our backbone for sending messages. We used Redis Lists to simulate queues (e.g., for sending emails) and Redis Pub/Sub for, well, implementing the publish-subscribe pattern (e.g., for triggering the synchronization of the cloud resources). We knew since the beginning that Redis will not serve as the messaging middleware forever, but we started with it since it was already there for caching and tasks (through [Go Celery](https://github.com/gocelery/gocelery)).

Due to a mix of accumulated technical debt and a desire for simplicity, we decided to invest in integrating a purpose-built technology for handling messages. After a good amount of research covering topics such as operational simplicity, community, and documentation, we decided to go with [NATS](https://nats.io/). As a side note, we continue to love Redis and there are plenty of well-established companies using it as their messaging middleware with great success.

The rest of the article will cover the main steps we took to integrate NATS into our platform such as understanding the NATS ecosystem, deploying the relevant tools on our Kubernetes cluster using Helm - this will form the main part since this is where we faced the most challenges, and, of course, sending and consuming messages.

<!--EndFragment-->

<!--StartFragment-->

**The NATS Ecosystem**

![The NATS ecosystem encompassing the core NATS server, JetStream, the NATS clients and CLI, and the NATS resources for Kubernetes](/img/cyscale-nats-1-.png "The NATS ecosystem")

### Core NATS

At its core, **the NATS server** is a **publish/subscribe** message broker. It offers **at most once delivery** and works based on **subjects**. These can have a hierarchical structure such as `sync.aws` and `sync.gcp`. Services concerned with messages related to syncing operations for AWS will only subscribe to `sync.aws` while other services might listen for all sync-related messages on `sync.*` (which covers both subjects) or even `sync.>` (which will also cover `sync.aws.ec2` - a separate subject).

Another feature that provides us with great value is called **queue groups**. This helps us horizontally scale our consumers while making sure that only one instance of a service receives a certain message. If you have experience with Kafka, it resembles consumer groups. What’s nice about queue groups is that they are automatically created when consumers subscribe to a subject and provide the queue group parameter (a simple string that, just like subjects, can have a hierarchical structure). For example, we use the name of the service (e.g. notifier) as the queue group.

While the core functionality is great and simple, plain old pub/sub with at most once delivery will not cover all use cases. Subscribers might be under heavy load or even down, there might be a network partition or we might even want to keep messages and follow an approach based on event sourcing (you can find more examples in the [NATS docs](https://docs.nats.io/using-nats/developer/develop_jetstream)). In other words, as soon as we need **temporal decoupling** between publishers and subscribers, we need **persistence**, which for NATS is provided by JetStream.

### JetStream

JetStream adds the concept of **streams** on top of the core NATS subjects. Basically, if you want your messages to be persisted, you can enable JetStream on the NATS server and create a stream that will actually store the messages sent to a subject (or multiple subjects - this is mostly to optimize resource utilization; for example, we have one stream called sync that stores all messages sent to any sync subject - i.e. sync.>).

If your system takes full advantage of JetStream, at most once delivery transforms into **at least once** and even **exactly once** by leveraging [message deduplication](https://docs.nats.io/using-nats/developer/develop_jetstream/model_deep_dive#message-deduplication) (NATS will discard a message if another message with the same publisher-provided ID exists in the stream over a window of a certain time - 2 minutes by default).

One confusion we had at the beginning was whether we actually had to do anything to take advantage of JetStream besides enabling it. Again, bringing the simplicity up front, publishers will not require any modification unless you are looking for exactly-once delivery (you will have to add the message ID). They still send messages on a certain subject and, behind the scenes, JetStream will persist them in the configured stream.

On the other hand, **you do have to create the actual streams** (we will talk about this below) and **adjust the subscribers to use the JetStream API** (part of the client NATS library). Note that you can still use the core NATS API, but your subscribers will not receive messages sent before they started listening (even though they are stored in the stream). The reason behind this is that JetStream actually creates consumers that handle the delivery of messages for each subscriber. You will have to manually create the consumer when using the CLI, but the client libraries will handle this automatically when subscribing to a subject through the JetStream API.

Having the messages persisted also enables us to take different approaches based on what we want to achieve. We might still follow a pub/sub approach for certain subscribers (these are known as **push consumers**) (e.g. we use this approach for generating user-requested reports) or we might want to have more control over how messages are retrieved in which case we will use a **pull consumer**. This enables us to batch messages (e.g. we do this for sending notifications). Here is how we handle the messages in our notifier service:

```typescript
export type MessageHandler = (data: NotificationDto[]) => Promise<void>;

export const handleNotificationMessages = async (handler: MessageHandler) => {
  try {
    const nc = await getNatsClient();

    if (!process.env.NOTIFICATIONS_SUBJECT) {
      throw Error('NOTIFICATIONS_SUBJECT not set');
    }

    const jc = JSONCodec<NotificationDto>();

    const psub = await nc
      .jetstream()
      .pullSubscribe(process.env.NOTIFICATIONS_SUBJECT, {
        queue: 'notifier',
        config: { durable_name: 'notifier' },
      });

    const done = (async () => {
      let notifications: NotificationDto[] = [];
      for await (const m of psub) {
        try {
          notifications.push(jc.decode(m.data));
          m.ack();
          // Wait to gather all messages from the current batch
          if (m.info.pending === 0) {
            await handler(notifications);
            logger.info(`Processing ${notifications.length} messages`);
            notifications = [];
          }
        } catch (error) {
          logger.error(error);
        }
      }
    })();

    setInterval(() => {
      psub.pull({ batch: 30, expires: 1000 });
    }, 1000 * 30);

    logger.info(
      `Listening for messages on ${process.env.NOTIFICATIONS_SUBJECT}`
    );

    await done;
    await psub.destroy();
  } catch (e) {
    logger.error(`Failed to initiate message listening ${e}`);
  }
};
```

(yes, most of our services are actually written in Go, hence the naming of some variables)

Another dilemma we faced was regarding **stream creation**. Who/what is responsible for creating the streams? One option is using the client libraries which expose a method to **idempotently** create streams. While this can work just fine, we didn’t want our services to bother with the technical details of NATS. Also, streams felt more like being part of the infrastructure than part of the actual services. So we continued our research and found [NACK](https://github.com/nats-io/nack) which we cover below.

As a side note regarding persistence/streaming with NATS, the precursor of JetStream is called STAN, which is now deprecated. We are mentioning this because there are still plenty of tutorials that focus on STAN, but JetStream is the way forward.

<!--EndFragment-->

<!--StartFragment-->

## NATS on Kubernetes with Helm

Being part of the CNCF, we can expect NATS to have first-class support for Kubernetes. And it does.

Since the entire Cyscale platform is specified as a Helm chart we just needed to add the [NATS](https://github.com/nats-io/k8s/tree/main/helm/charts/nats) subchart as a dependency and configure the values. You can check the [values file](https://github.com/nats-io/k8s/blob/main/helm/charts/nats/values.yaml) from the chart repo for reference. One small detail that cost us a few hours was how we were specifying the values for NATS. If you look at [the documentation](https://docs.nats.io/running-a-nats-service/introduction/running/nats-kubernetes/helm-charts#jetstream), you will notice the `nats` object. However, since we are deploying NATS as a subchart, we will need an additional parent `nats` object to instruct Helm to pass the values down to the nats subchart. Here are our values for NATS on the dev cluster:

```yaml
nats:
  nats:
    image: nats:alpine
    resources:
      requests:
        cpu: 100m
        memory: 100Mi
      limits:
        cpu: 200m
        memory: 200Mi
    jetstream:
      enabled: true
      memStorage:
        enabled: true
        size: 80Mi
      fileStorage:
        enabled: true
        size: 1Gi
        storageDirectory: /data/
        storageClassName: default
```

(notice the two `nats`)

Besides the actual NATS server (which is a container running in the NATS pod along with the monitoring and config reloader containers), we also have a **NATS Box** pod (comes with the NATS Helm chart) that helps us with testing and administrative tasks - basically its a **preconfigured NATS CLI**. We access it using the command `kubectl exec -it <nats-box-container> -- /bin/sh -l`. The other alternative would have been to install the NATS CLI on our machines and port forward the NATS server from the cluster.

### Creating the Streams with NACK

Besides NATS, we also added the [NACK subchart](https://github.com/nats-io/k8s/tree/main/helm/charts/nack) which requires the NACK **CRDs** (install using `kubectl apply -f <https://raw.githubusercontent.com/nats-io/nack/v0.6.0/deploy/crds.yml>`). That’s because it enables us to treat JetStream streams as Kubernetes resources deployed as part of the rest of the platform.

Instead of having our services handle the stream creation or manually creating them from the NATS box, we specify them declaratively as follows (`templates/nats-streams.yaml`):

```yaml
# See https://github.com/nats-io/nack/blob/main/deploy/crds.yml for more properties
{{- range .Values.nack.streams }}
apiVersion: jetstream.nats.io/v1beta2
kind: Stream
metadata:
  name: {{ .name | quote }}
spec:
  name: {{ .name }}
  subjects: {{ .subjects }}
  storage: {{ .storage | quote | default "file" }}
  retention: {{ .retention | quote | default "limits" }}
---
{{- end }}
```

We also declare the streams as a list in the values file (notice the `range`).

Once these are deployed, you can inspect the streams just like any other k8s resource using `kubectl get streams`. One issue we faced was that the streams were not actually created in JetStream (`nats stream ls` from the nats box) even though the k8s resources existed. We simply manually deleted them from the cluster (`kubectl delete streams.jetstream.nats.io --all`) and re-deployed the helm chart.

There is another alternative we considered - the [jetstream Terraform provider](https://registry.terraform.io/providers/nats-io/jetstream/latest/docs). While we do use Terraform to declare our infrastructure on top of which the Kubernetes cluster is running, we chose NACK because it fit our abstraction layers best and because the terraform provider, running locally or in our pipelines, has to somehow reach the NATS server. In our case, the NATS server is not exposed outside of the cluster (again, port-forwarding is an option).

### Ending Notes

While there are more subjects to cover such as [authentication](https://docs.nats.io/running-a-nats-service/configuration/securing_nats/auth_intro) and [authorization](https://docs.nats.io/running-a-nats-service/configuration/securing_nats/authorization), clustering (and [super-clusters](https://docs.nats.io/running-a-nats-service/configuration/gateways)), and multi-tenancy using [accounts](https://docs.nats.io/running-a-nats-service/configuration/securing_nats/accounts), we hope this article helps you better understand how NATS works and how to deploy it. This is our way of giving back to a growing community and expressing our appreciation for getting to work with such great technologies.

<!--EndFragment-->