---
templateKey: blog-post
title: "CNAPP: The Key to Cloud-Native Applications Security"
seoTitle: "CNAPP: The Key to Cloud-Native Applications Security"
authors: Sabrina Lupșan
permalink: cnapp-secure-native-applications
categories:
  - CNAPP
date: 2023-02-21T08:00:33.696Z
description: "CNAPP is a security solution designed to protect cloud-native
  applications. A cloud-native application is an application that is intended
  for cloud, ran and hosted in the cloud. It has the following functionalities:
  CSPM, CWPP, CIEM, KSPM, Containers security. CNAPP solutions provide
  visibility, security controls and alerts, data security features, compliance
  capabilities, container image scanning, cloud workloads protection, Kubernetes
  Cluster inspection and IAM."
seoDescription: "CNAPP is a security solution designed to protect cloud-native
  applications. A cloud-native application is an application that is intended
  for cloud, ran and hosted in the cloud. It has the following functionalities:
  CSPM, CWPP, CIEM, KSPM, Containers security. CNAPP solutions provide
  visibility, security controls and alerts, data security features, compliance
  capabilities, container image scanning, cloud workloads protection, Kubernetes
  Cluster inspection and IAM."
featuredpost: true
featuredimage: /img/blog_34-cover.webp
tags:
  - cnapp
  - compliance
  - security
---
<!--StartFragment-->

## What is CNAPP? 

CNAPP (Cloud-Native Application Protection Platform) is a security solution designed to protect cloud-native apps. A [cloud-native application](https://cyscale.com/blog/cloud-native-security-guide/) is an application that is intended for cloud, ran and hosted in the cloud. 

A CNAPP combines multiple functionalities that are otherwise found in separate tools, including:  

* CSPM (Cloud Security Posture Management),  
* CWPP (Cloud Workload Protection Platform), 
* CIEM (Cloud Infrastructure Entitlements Management), 
* KSPM (Kubernetes Security Posture Management), and 
* Containers Security. 

In this article, we will understand what features a CNAPP has, and why it is a necessary tool for protecting cloud-native architectures. 

## Why is CNAPP needed?  

Since cloud-native applications are designed using a different architecture than non-native applications, it is essential to understand the key features cloud-native applications have and the security concerns that come with them. 

**How is the infrastructure different?** Cloud-native software is built in containerized environments, such as those managed with Kubernetes, which can increase scalability and flexibility in the cloud, but can also introduce new concerns in terms of security.  

These types of applications are composed of microservices, which are components that communicate with each other through APIs. 

Due to the differences between native and non-native cloud applications, a CNAPP solution is necessary to cover the specific security needs of applications developed for the cloud.  

Let’s understand some of the features CNAPP solutions provide to secure cloud-native applications. 

### 1. Visibility

Context-aware visibility is crucial for identifying vulnerabilities in cloud-native environments. Because of the complex nature of cloud-native applications, it can become challenging to understand issues regarding the underlying infrastructure. Visibility is ensured in CSPM platforms. 

For example, even though microservices communicate with each other and the application is functioning correctly, vulnerabilities may still exist. A misconfigured API gateway that controls access to microservices may permit unauthorized access.  

Therefore, visibility features in CNAPP are important to identify and fix vulnerabilities in the cloud-native infrastructure. 

[The Cyscale Security Knowledge Graph™](https://cyscale.com/products/security-knowledge-graph/) is an all-inclusive graph that provides correlations between cloud assets, applications and systems and automatically pinpoints security issues. [The graph](https://cyscale.com/blog/security-knowledge-graph-integrations/) uses context to identify relevant security vulnerabilities and provide visibility in your cloud environment. 

### 2. Security controls

Manually going through every cloud asset and configuration to check for vulnerabilities is not only a difficult task, but it can also become impossible in large public cloud environments in which thousands of assets are in use.

To solve this problem, security controls are used to check for misconfigurations and vulnerabilities, and provide guidance for remediating found issues. This mechanism saves time through automation and reduces the risk of human error, making it a crucial aspect of CNAPP. 

For example, you can see a control from the Cyscale security platform in the image below. 

<img src="/img/34_blog-1-control.webp" alt="Control in the Cyscale platform" title="Control in the Cyscale platform" class=" blog-image-shadow " style="width:auto;height:auto;"/>

In Cyscale, you can find a collection of over 300 controls that check cloud services across multiple vendors and provide remediation steps for findings. 

When an asset does not pass a control, an alert is generated in real time.  

Targeted alerts that highlight vulnerabilities and misconfigurations in a cloud environment are crucial; reacting to and fixing findings quickly to reduce the attack surface can save a company from a breach. 

However, alert fatigue is a real problem that security teams deal with; receiving too many alerts can lead to security professionals ignoring important alerts. A good CNAPP solution deals with all of these problems and provides a sound alert system.  

For example, in the image below, you can see an alert that has been triggered. Alerts can be Open or Resolved, to indicate if the issue that generated the alert has been fixed. 

<img src="/img/34_blog-2-alert.png" alt="Alert in the Cyscale platform" title="Alert in the Cyscale platform" class=" blog-image-shadow " style="width:auto;height:auto;"/>

### 3. Data security 

Due to the dynamic nature of cloud-native technologies, data security is a critical concern in companies administering them. By scaling up and down quickly, sensitive data may be exposed. 

Using a [CNAPP solution](https://cyscale.com/products/cnapp/), data security can be achieved for cloud-native applications. Security controls, as discussed in the previous section, enable organizations to identify misconfigurations or non-compliance with data security best practices in their cloud resources.

It is recommended that: 

* [At rest and in transit data are encrypted](https://cyscale.com/blog/types-of-encryption/),  
* Assets are not publicly accessible unless it is necessary, 
* Encryption keys are managed correctly in their entire lifecycle, and others. 

For each of these best practices and more, Cyscale offers a wide variety of controls that cover AWS, Microsoft Azure, Google Cloud, and Alibaba Cloud. Some examples of controls are: 

* *Ensure object containers don't have permissive access policies*, 
* *Ensure databases are not publicly accessible*, 
* *Ensure that Encryption key is rotated*. 

Moreover, in Cyscale, you can find a [Data Security Dashboard](https://cyscale.com/blog/data-security-dashboard/), which delivers a comprehensive view over data at rest storage assets and encryption keys, using DSPM (Data Security Posture Management) capabilities. 

### 4. Compliance 

CNAPP solutions help companies in their [compliance](https://cyscale.com/blog/cloud-security-and-compliance/) journey. The CSPM ([Cloud Security Posture Management](https://cyscale.com/blog/improve-cloud-security-posture/)) component of CNAPP provides reporting and policy management features that help companies meet various compliance frameworks.  

To become compliant, companies use CNAPP security tools to prepare for audits. Some of the most popular accredited standards are: 

* [ISO 27001](https://cyscale.com/blog/new-iso27001-2022-version/),  
* [SOC 2](https://cyscale.com/blog/soc-2-compliance-in-cloud/), 
* GDPR, 
* [PCI-DSS](https://cyscale.com/blog/pci-dss-compliance-in-cloud/), 
* [HIPAA](https://cyscale.com/blog/hipaa-compliance-in-cloud/), 
* [NIST](https://cyscale.com/blog/nist-compliance-in-the-cloud/). 

Cyscale supports all of them and more. You can view all supported standards on the Standards page, enable or disable frameworks, track progress with your compliance process, and view the cloud-focused requirements and associated controls for each of the standards.  

<img src="/img/34_blog-3-compliance.webp" alt="Compliance standards in the Cyscale platform" title="Compliance standards in the Cyscale platform" class=" blog-image-shadow " style="width:auto;height:auto;"/>

### 5. Container image scanning  

Part of the process of securing containers is image scanning. This is essential because it checks container images for misconfigurations and vulnerabilities and reduces the risk of deploying containers with security issues.  

For example, if a container image uses **an unpatched version of Log4J**, this could introduce a critical vulnerability in your cloud environment. It may allow an attacker to execute arbitrary code on the system running the container, compromising the data and applications running in that container. 

### 6. Cloud workloads protection 

CWPP helps companies discover vulnerabilities and correlate them with cloud misconfigurations. Using a CWPP, you mitigate risk across multi-cloud environments by identifying vulnerabilities documented in [CVEs](https://cve.mitre.org/) and pinpointing which misconfigurations have exposed your cloud infrastructure to them. 

To secure cloud-native applications, a CWPP tool analyzes: 

* VMs,  
* Containers,  
* Serverless functions, and others. 

### 7. Kubernetes Cluster inspection 

A cluster is a set of nodes (machines) that run applications in containers. It contains the nodes and a control plane, which is responsible for the maintenance of the nodes, determining, for example, which application is running in which container. 

Cluster inspection is a feature of Kubernetes Security Posture Management (KSPM) that provides visibility into the security posture of a Kubernetes cluster by inspecting its configuration and runtime behavior. 

Misconfigurations that can be found using cluster inspection are: 

* Unauthorized access,  
* Missing patches,  
* Insecure network configurations, and others. 

### 8. IAM

[IAM (Identity and Access Management)](https://cyscale.com/blog/iam-services-in-aws-azure-gcp/) is another essential component of cloud-native applications security, specific to a CIEM platform. With complex cloud environments, it can become challenging to keep track of users, their different access levels, what impact certain permissions have, and so on. 

For cloud-native applications, IAM can become a very complex aspect of cloud security due to the following aspects, but not limited to: 

1. Cloud-native applications are highly scalable, and identities and access levels may change rapidly, making it more difficult to manage IAM. 
2. Cloud-native software is built to run in cloud environments, in multi-cloud as well as on-premises. 
3. The microservices architecture can increase the difficulty of managing IAM identities at the service level. 

Companies can use a CNAPP solution to secure their cloud in terms of IAM and manage identities and the authentication workflow.   

Some best practices regarding IAM are: 

* **Implement multi-factor authentication for all users.** This measure adds an additional layer of security by requesting at least two forms of identification. 
* **Use role-based access control (RBAC)** to limit access to sensitive data to authorized users and obtain high granularity. 
* **Comply with the Least Privilege Principle** to restrict access to the lowest privilege necessary. 
* **Assign permissions at group level** and assign very well-defined rules and privileges to groups. This decreases the risk of data breaches. 

You can read more about securing IAM in the cloud [here](https://cyscale.com/blog/iam-services-in-aws-azure-gcp/). 

To ensure a deep understanding of user permissions and their impact, Cyscale provides an [Identity Dashboard](https://cyscale.com/blog/check-for-least-privilege/). 

<img src="/img/34_blog-4-iam.webp" alt="The Identity Dashboard in the Cyscale platform" title="The Identity Dashboard in the Cyscale platform" class=" blog-image-shadow " style="width:auto;height:auto;"/>

## Conclusion 

In conclusion, [CNAPP (Cloud-Native Application Protection Platform) solutions](https://cyscale.com/products/cnapp/) are a critical security component for cloud-native applications. Due to their dynamic nature, their high scalability, and different architecture, traditional security measures may not be sufficient. 

CNAPP solutions offer: 

* Visibility, 
* Compliance, 
* Data security, 
* Runtime protection, 
* Container image scanning, 
* Kubernetes cluster inspection, 
* IAM, and others. 

Use Cyscale to benefit from these features and secure your cloud environment across multiple cloud providers!

<!--EndFragment-->
