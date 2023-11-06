---
templateKey: blog-post
title: A Word on Cloud Security
seoTitle: A Word on Cloud Security
authors: Andrei Ștefănie
permalink: a-word-on-cloud-security
categories:
  - News
  - CSPM
  - CNAPP
date: 2022-10-25T14:41:49.426Z
description: >
  Given all this complexity and the pace at which we are trying to deliver our
  products, it’s no surprise that breaches still happen. However, we can go fast
  and build secure systems. It’s not a zero-sum game. You probably have people
  in your organization that are naturally passionate about security. Give them
  the responsibility, the training, and the tools. You probably don’t need that
  many people to do security full-time since the tools are getting increasingly
  powerful.
seoDescription: Given all this complexity and the pace at which we are trying to
  deliver our products, it’s no surprise that breaches still happen. However, we
  can go fast and build secure systems. It’s not a zero-sum game. You probably
  have people in your organization that are naturally passionate about security.
  Give them the responsibility, the training, and the tools. You probably don’t
  need that many people to do security full-time since the tools are getting
  more and more powerful.
featuredpost: true
featuredimage: /img/microsoftteams-image-3-.webp
tags:
  - networking
  - IAM
---
## Security is Foundational

Why care about cloud security? Or about security at all? Let’s zoom out even more and talk about the virtues we, as people, often desire for ourselves and look for in others. These include courage, compassion, generosity, temperance, persistence, and friendliness. As Brian Tracy points out in his excellent book, “No Excuses!: The Power of Self-Discipline”, all these virtues depend on and are guaranteed by one of them: **integrity**. Just like this, our software products have multiple requirements including functional (it must solve specific problems) and non-functional (performance, availability, efficiency, etc.). All these depend on the trust our users have in our systems to keep their data safe; they depend on **security**.

In theory, the most secure software is the one that doesn’t exist. If you have nothing, there is nothing to worry about. In practice, you will probably want to achieve certain things, to deliver certain features within a reasonable timeframe and budget. Luckily for us, the cloud providers offer a sizeable suite of services that might help us. In the era of data-driven, microservices-based, global-scale systems, we end up using some of them for compute (e.g. EC2, AKS, GKE, Lambda, Cloud Run), storage (S3), business intelligence (Redshift, Power BI), integration (Pub/Sub, Kinesis, API Gateway, SQS, SNS, Azure Service Bus), and so on. AWS even offers a service that lets you make use of their (satellite) ground stations. If you are competing with Elon’s Starlink or you are building a weather forecasting system, you might find it useful

## Great Power, Great Responsibility

Naturally, you must understand how to configure each cloud service you end up using and make them work together. One fundamental concept provided by the cloud is the way you manage access. You have control over both the network (so the service is actually reachable or not) and IAM (whether the clients must have identities and sufficient permissions). On one end of the spectrum, you can leave everything open and hope everyone expects that you have it properly set up. On the other end, you can choose a very restrictive configuration that might slow down your team. This is often known as the tradeoff between security and usability (for your dev team in this case). Over the past few years, the industry started shifting more toward security introducing concepts such as zero trust security and SSO (please make use of it whenever possible; also, it’s a shame that some companies still provide SSO only with their enterprise plans).

Classically, you had a number of VMs (on-premises, VPS), installed and configured UFW, set up SSH access, and sent the SSH keys to your colleagues. Now, you can configure public and **private** (sub)networks, connect your cloud networks to your on-premises networks, deploy load balancers, define firewall rules without ever SSH-ing into the VMs, and assign identities and permissions to the VMs (and any other compute service). If previously your team didn’t interact too much with the infrastructure side, **now the infrastructure is part of the application**.

## Network Access

Starting with configuring the network access, here you have multiple options to control it. Perhaps the simplest concept is making the resources public or private. Your VM might have a vulnerable OS version, but if nothing can reach it and it cannot reach the internet, the risk is considerably lower. Not only can you run most compute and database services in a private network, but you can also configure fully managed services to be accessible through the provider's internal network (without traversing the internet) by leveraging services such as [AWS PrivateLink](https://aws.amazon.com/privatelink/) and [Azure Private Link](https://learn.microsoft.com/en-us/azure/private-link/private-link-overview).

Furthermore, you can (have to) configure firewalls. Here the services vary a bit. Google Cloud calls them [VPC firewall rules](https://cloud.google.com/vpc/docs/firewalls). You define them at the VPC level and can optionally choose to which instances they should apply based on tags (they are not equivalent to AWS/Azure tags. In Google Cloud, the equivalent would be the resource labels) or service accounts (almost every resource can have an identity, which in Google Cloud, is given by service accounts). In AWS, you work with security groups that are assigned to virtual machines. Besides allowing traffic (by default everything is denied) from certain IP addresses or CIDRs, you can also choose based on the security group of the source (please make use of this). You can also achieve this in Azure, but you have to combine two types of resources: network security groups (these are the actual firewalls) and application security groups (you can associate these with the network tags from Google Cloud). In fact, here are the sources you can configure for each provider:

* AWS: CIDRs, IP addresses, security groups, prefix lists (if you want to allow traffic coming only from certain AWS services)
* Azure: CIDRs, IP addresses, application security groups, service tags (e.g. \`AzureLoadBalancer\`, \`Internet\`)
* Google Cloud: CIDRs, IP addresses, network tags (defined on each instance), service accounts

Of course, this is not all. You also have network access control lists (NACLs), firewalls specific to each service (especially managed databases from Azure), NAT gateways, VPC peering, VPNs, virtual appliances, traffic splitting, firewalls that you install on the VMs, and a lot more. All these bring considerable complexity and make it extra difficult to configure the optimal **effective network access**.

Additionally, while there are tools that check the traffic in real-time, these are often dealing with network paths that you defined and are aware of. There might be paths you did not intend to leave open that an attacker might make us for **lateral movement**.

## IAM Access

Not only can every member of your organization have a user (or multiple) with access to certain parts of your infrastructure, but so does almost every compute resource. Just like you provide John with permission to read data from a bucket, so you assign a role to a VM achieving the same access. The difference is that anything that runs on the VM and everyone who can access it (i.e. SSH into it) now can do everything the VM can do.

Fundamentally, this mechanism of assigning roles to resources is excellent. You have clear visibility of the principals (users, resources) that can access a given service, you can grant or revoke access at any moment, and you have a meaningful trail of access logs. The alternative is often based on keys/secrets and is almost impossible to trace properly because anyone that has the key can access the resource (it’s easy to lose track of who has the key) (secret scanners help a bit here but are limited to the resources they run on).

We just have to understand its implications. If attackers manage to break into a VM and if that VM has high (excessive?) permissions, the attackers will not only be able to access our data, but they will also be able to spin up additional instances (crypto mining?) and delete existing resources (service disruption and data loss).

Again, here it’s important to understand the effective permissions each resource has. There are multiple factors that contribute to the effective permissions such as the role assigned to the resource, permissions inherited from group memberships or from assignments at a higher level (the VM might be an owner at the subscription level in Azure thus having access to everything in that subscription), and policies configured on the target resources such as [resource policies in AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html) and [access policies for Azure Key Vaults](https://learn.microsoft.com/en-us/azure/key-vault/general/security-features).

Another important aspect about effective permissions in the context of data access is encryption, especially encryption with customer-managed keys. For example, if you store data on S3 and encrypt it with a key managed by AWS KMS, you must have access to both the S3 bucket/object and the encryption key from KMS. Managing encryption keys deserves an article on its own.

## The Human Factor

Even if you have pristine infrastructure security, you still must provide access to someone (at least two admins so one doesn’t lock himself out by mistake - aka admin redundancy) to maintain the infrastructure and manage access for everyone else. This is an example of a highly privileged user. This in itself is not a major risk. However, if highly privileged users don’t have strong authentication mechanisms in place (MFA, preferably with strong factors), they can become liabilities. We are all subject to social engineering and phishing attacks.

When you find out that an attacker managed to gain access to a highly privileged user, after revoking the sessions and rotating the credentials, you will want to find out the impact. For this, you need to know the systems to which the user has access. This can be quite challenging since the permissions are often spread across multiple systems.

For example, if you have Okta as the identity provider and AWS for the cloud infrastructure, you have to check both systems and link the results in order to determine what a person actually has access to. In Okta you just provide access to an application, but in AWS that application is often an AWS Organization with multiple accounts.

## Ending Notes

Given all this complexity and the pace at which we are trying to deliver our products, it’s no surprise that breaches still happen. However, we can go fast and build secure systems. It’s not a zero-sum game. You probably have people in your organization that are naturally passionate about security. Give them the responsibility, the training, and the tools. You probably don’t need that many people to do security full-time since the tools are getting increasingly powerful.
