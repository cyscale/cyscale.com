---
templateKey: blog-post
title: "Secrets Management in Kubernetes: Essential Insights and Best Practices"
seoTitle: "Secrets Management in Kubernetes: Essential Insights and Best Practices"
authors: Sabrina Lupșan
permalink: secrets-management-kubernetes
categories:
  - Engineering
  - Cloud Native Security
date: 2024-03-08T12:22:26.016Z
description: >-
  Secrets Management is always a hot topic nowadays. Choosing the correct
  encryption algorithm, storing secrets in the right service, setting access to
  them; these are all actions that can make it or break it for your
  infrastructure.   


  In this article, we will not only discuss how you should manage secrets in Kubernetes, but also help you understand why all these protection measures are vital for your Kubernetes clusters.
seoDescription: "Secrets Management is always a hot topic nowadays. Choosing the
  correct encryption algorithm, storing secrets in the right service, setting
  access to them; these are all actions that can make it or break it for your
  infrastructure.     In this article, we will not only discuss how you should
  manage secrets in Kubernetes, but also help you understand why all these
  protection measures are vital for your Kubernetes clusters. "
featuredpost: true
featuredimage: /img/67_blog-kubernetes-secrets.png
tableOfContents: true
tags:
  - security
  - kubernetes
---
Secrets Management is always a hot topic nowadays. Choosing the correct encryption algorithm, storing secrets in the right service, setting access to them; these are all actions that can make it or break it for your infrastructure.   

In this article, we will not only discuss how you should manage secrets in Kubernetes, but also help you understand why all these protection measures are vital for your Kubernetes clusters. 

## Secrets in Kubernetes 

Secrets are objects that contain keys, passwords, tokens. We're talking API keys, SSH keys, OAuth tokens, and others. Hackers dream of these every day and they put all their efforts into stealing them, so why wouldn’t you do the same, but for protecting them? 

However, even if they are the crown jewel of your Kubernetes cluster, they are actually stored unencrypted on etcd. That’s right. Anyone with access to etcd, as well as anyone with API access can retrieve (or even modify) a Secret. Moreover, [according to CNCF](https://kubernetes.io/docs/concepts/configuration/secret/), anyone who is authorized to create a Pod in a namespace can also read any Secret in the namespace. So, we’ve already found two big problems: Secrets are stored unencrypted, and a lot of users can have access to them if you’re not implementing the Least Privilege Principle (which you can read more about [here](https://cyscale.com/blog/check-for-least-privilege/)). Let’s see how to solve these issues. 

## Secrets Management Checklist 

### At rest encryption 

Arguably the first step to securing secrets is encrypting them. At rest encryption ensures confidentiality. This means that if attackers get ahold of your secrets, they will not be able to read them unless they decrypt them. With [good key management and an appropriate cryptographic algorithm](https://cyscale.com/blog/protecting-data-at-rest/), you can keep attackers at bay. 

**Amazon EKS (Elastic Kubernetes Service)** 

To enable secret encryption at rest in EKS, you must: 

1. Navigate to the EKS console. You can click [here](https://console.aws.amazon.com/eks/home#/clusters). 
2. Select the cluster for which you want to enable secret encryption. 
3. Under **Overview**, navigate to **Secrets Encryption** and select **Enable**. 
4. Choose a key from the drop-down list and select **Enable**. If you don’t already have a key, you must create one and return to this window. 

You can also turn on secrets encryption for your Kubernetes clusters using this command: 

```html
aws eks associate-encryption-config --cluster-name <clusterName> --encryption-config '\[{"resources":["secrets"],"provider":{"keyArn":"arn:aws:kms:<regionCode>:<account>:key/<key>"}}]'
```

**AKS (Azure Kubernetes Service)** 

To turn on KMS etcd encryption for an existing cluster, you can use the following command: 

```html
az aks update --name <clusterName> --resource-group <resourceGroupName> --enable-azure-keyvault-kms --azure-keyvault-kms-key-vault-network-access "Public" --azure-keyvault-kms-key-id <keyID>
```

This enables secret encryption using a publicly reachable Azure Key Vault. It assumes you already have an encryption key and a managed identity configured to allow access to the key. [Our article](https://cyscale.com/blog/azure-key-vault-explained/) explains more about Azure Key Vault and its configuration options. 

**GKE (Google Kubernetes Engine)** 

In Google Cloud, Kubernetes secrets are encrypted at rest by default. However, you can turn on secrets encryption at the application layer. Here is how you can do it: 

1. Navigate to the Google Kubernetes Engine page in the Google Cloud console by clicking [here](https://console.cloud.google.com/kubernetes/list?_ga=2.113700551.1182343565.1709535826-1724752788.1707736657). 
2. Under **Security**, select the **Edit Application-layer Secrets Encryption** button. 
3. Select the **Enable Application-layer secrets encryption** checkbox and choose the key you want to use. 
4. Select **Save changes**. 

**Self-managed Kubernetes clusters** 

1. **To begin the process of encrypting your secrets at rest**, generate an encryption key. You can use a Key Vault or a KMS to do this. Then, you need to create a configuration file. Here is an example provided by CNCF: 

```html
apiVersion: apiserver.config.k8s.io/v1 

kind: EncryptionConfiguration 

resources: 

- resources: 

- secrets 

- configmaps 

- pandas.awesome.bears.example 

    providers: 

- aescbc: 

          keys: 

- name: key1 

              secret: <base64 encoded key> 

- identity: {}
```

After you base64-encode it, add the key as the secret value. 

2. Save the configuration file to /etc/kubernetes/enc/enc.yaml on the control plane node.  

Don’t forget that your configuration file contains your key. Base64 encoding adds no security, so restrict permissions over the file as much as possible. 

3. Edit the manifest for the kube-apiserver static pod (/etc/kubernetes/manifests/kube-apiserver.yaml) to contain the following command: *\--encryption-provider-config=/etc/kubernetes/enc/enc.yaml*. [Read more on the Kubernetes](https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#write-an-encryption-configuration-file) website to see how to do this. 

After this, restart your API server to apply changes. After ensuring that all secrets are encrypted, remove the last line of the config file; “identity” allows for plaintext retrieval of secrets. 

### Key rotation 

Key management is just as important as the process of performing cryptographic operations. It doesn’t matter that your data is encrypted with the best encryption algorithm out there; if your key is leaked or stolen, an attacker can immediately decrypt your secret. So make sure to rotate your keys regularly to prevent data breaches. Let’s see how key rotation is handled in Kubernetes managed services and in self-managed clusters. 

**Amazon EKS (Elastic Kubernetes Service)** 

If you followed the previous steps and enabled EKS secret encryption with a KMS key, rotation is very easy to setup. Navigate to the KMS service, and under **Customer managed keys**, select the key you used. Under **Key rotation**, check the checkbox and click Save. The key will now be automatically rotated every eyar. 

**AKS (Azure Kubernetes Service)** 

To rotate the key in a key vault, you can use the following command: 

```html
az aks update --name <clusterName> --resource-group <resourceGroupName> --enable-azure-keyvault-kms --azure-keyvault-kms-key-vault-network-access "Public" --azure-keyvault-kms-key-id <newKeyID>
```

Run the following command to re-encrypt secrets with the new key. 

```html
kubectl get secrets --all-namespaces -o json | kubectl replace -f -
```

**GKE (Google Kubernetes Engine)** 

When you use the Google Cloud console to create a key, Cloud KMS sets the rotation period and next rotation time automatically. You can choose to use the default values or specify different values. 

**Self-managed Kubernetes clusters** 

These are the steps to rotate your decryption key, according to [Kubernetes](https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/): 

1. Generate a new key securely and add it as the second entry for the current provider on all control plane nodes. Restart all kube-apiserver processes so that each server can decrypt data encrypted with the new key. 
2. Backup the new encryption key. If you lose it, you lose access to all data encrypted with it.  
3. Make the new key the first entry in the keys array and restart all kube-apiserver processes. 
4. Run *kubectl get secrets --all-namespaces -o json | kubectl replace -f -* to encrypt all secrets with the new key. 
5. Remove the old key from the configuration. 

### RBAC and the Least Privilege Principle 

Now that we’ve taken care of at-rest encryption, let’s see how to assign permissions to users securely.  

To manage permissions for secrets and for other Kubernetes objects, we recommend using RBAC (Role-Based Access Control). RBAC allows you to assign fine-grained permissions with which users or groups of users can perform certain operations (such as create, read, update, or delete) on Kubernetes resources like pods, deployments, services, etc. 

**Roles, ClusterRoles, RoleBindings, ClusterRoleBindings**  

Roles and ClusterRoles are two kinds of Kubernetes objects that describe the permissions users are given if they have that role. The basic Role sets the permissions over an object or a set of objects within a specific namespace, while the ClusterRole spans across all namespaces of the cluster. Below, you can see an example of a Role: 

```html
apiVersion: rbac.authorization.k8s.io/v1 

kind: Role 

metadata: 

  namespace: default 

  name: pod-reader 

rules: 

- apiGroups: [""]  

  resources: ["pods"] 

  verbs: ["get", "watch", "list"] 
```

A ClusterRole would simply have “kind: ClusterRole”, and no namespace specified. 

Notice how this is a role definition and not a policy; it’s not assigned to any user or group of users. Here come into play RoleBindings and ClusterRoleBindings. These objects form the relation between a role and a user or a group of users. RoleBindings grants the permissions defined in the Role object, and ClusterRoleBindings binds ClusterRoles to users or groups across the entire Kubernetes cluster. 

You can also reference a ClusterRole in a RoleBinding! This way lets you define a set of common rules across your entire cluster, ensuring consistency across namespaces. Be careful though to not grant users more permissions than necessary by using the ClusterRole. 

[This is an example](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#restrictions-on-role-creation-or-update) of a ClusterRole, assigned to the user “dave” in the “development” namespace using a RoleBinding. 

```html
apiVersion: rbac.authorization.k8s.io/v1 

kind: RoleBinding 

metadata: 

  name: read-secrets 

  namespace: development 

subjects: 

- kind: User 

  name: dave  

  apiGroup: rbac.authorization.k8s.io 

roleRef: 

  kind: ClusterRole 

  name: secret-reader 

  apiGroup: rbac.authorization.k8s.io
```

Always remember to assign the minimum permissions necessary. This minimizes the attack surface and prevents privilege escalation in case one of your pods or users is compromised. To follow the Least Privilege Principle and protect your secrets, keep in mind the following best practices for Kubernetes: 

* Assign only the specific permissions you want a user to have. Instead of using wildcard (*) permissions, which may result in overly privileged roles, specify the verbs of the actions they’re allowed to perform, 
* Assign roles at the namespace-level rather than at cluster-level, to give users privileges only for the namespaces they use, 
* Perform regular access reviews to ensure everything is functioning correctly and users are not accessing resources they shouldn’t, 
* Monitor your Kubernetes cluster constantly to identify suspicious behaviour. 

### **Centralized Secrets Store providers** 

By using a cloud Secrets Store solution, you can centralize secrets management and leave the storage, auditing, logging to the cloud provider. Moreover, if you integrate your Kubernetes cluster within the cloud using a managed solution (like EKS, AKS, GKE), you obtain a unified infrastructure. 

To understand how much better Secrets Stores are, let’s look at the available solutions on the market.  

**AWS Secrets Manager** is a centralized and secure solution for storing, managing, and rotating secrets. It offers fine-grained access control using AWS IAM, automatic rotation of secrets, secure storage, and monitoring capabilities. It is integrated with Kubernetes, allowing you to access secrets at runtime. AWS Secrets Manager keeps secrets encrypted at rest and sends them securely over SSL. 

By using a managed solution, the pressure on developers decreases, allowing them to focus on their tasks. 

**Azure Key Vault** is a Secrets Store for secrets, cryptographic keys and certificates. It has advanced safety and recovery options, two permission models, and data plane and control plane separation. You can read more about Azure Key Vault [here](https://cyscale.com/blog/azure-key-vault-explained/). Azure Key Vault integrates seamlessly with Azure Kubernetes Service (AKS) and other Azure services. 

**Google Cloud Secret Manager** is Google Cloud’s version for storing secrets securely. Google Cloud Secret Manager offers a fully managed solution for storing and managing secrets, such as API keys, passwords, and certificates. It provides versioning, access controls, and audit logging capabilities, ensuring the secure storage and retrieval of sensitive information. 

Using the [Secrets Store CSI Driver](https://kubernetes-csi.github.io/docs/) for Kubernetes secrets, Secrets stored in managed stores in the cloud can be treated as files mounted in Kubernetes pods, allowing for a seamless utilization of secrets with no added complexity but with maximum security. 

Managing secrets in Kubernetes is a critical aspect of securing your Kubernetes cluster. In this article, we’ve discussed secrets encryption at rest, RBAC, and managed Secrets Store solutions in the cloud. 

Implementing a comprehensive secrets management strategy is a difficult task, but one that you should not work on alone. Cyscale can detect if your Kubernetes secrets are at risk and provide remediation for any findings in no time.  

[Book a demo](https://cyscale.com/request-demo/) now to see actionable insights and make use of hundreds of our security controls that constantly assess your environment, such as the following for Kubernetes: 

* Minimize wildcard use in Roles and ClusterRoles 
* Minimize access to secrets 
* Prefer using secrets as files over secrets as environment variables  

Moreover, you can check out CIS Kubernetes Benchmark and CIS EKS Benchmark in our platform to see how secure your Kubernetes clusters are against attackers, with CIS AKS and CIS GKE Benchmarks arriving soon! 

<!--EndFragment-->