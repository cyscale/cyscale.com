---
templateKey: blog-post
title: MAS TRM Compliance in the Cloud
seoTitle: MAS TRM Compliance in the Cloud
authors: Sabrina Lupșan
permalink: mas-trm-compliance-in-cloud
categories:
  - Compliance
date: 2023-01-31T09:47:07.869Z
description: The Monetary Authority of Singapore (MAS) Technology Risk
  Management (TRM) Guidelines is a set of principles and best practices destined
  for financial institutions, meant to regulate risk management and assessment,
  access control, incident management, software application development, and
  others. In this article, we look at requirements that affect the cloud, such
  as IT resilience, access control, cryptography, data and infrastructure
  security, cyber security operations, and cyber security assessment.
seoDescription: The Monetary Authority of Singapore (MAS) Technology Risk
  Management (TRM) Guidelines is a set of principles and best practices destined
  for financial institutions, meant to regulate risk management and assessment,
  access control, incident management, software application development, and
  others. In this article, we look at requirements that affect the cloud, such
  as IT resilience, access control, cryptography, data and infrastructure
  security, cyber security operations, and cyber security assessment.
featuredpost: true
featuredimage: /img/blog-cover-image-mas-trm.png
tags:
  - mas
  - compliance
---
<!--StartFragment-->

The Monetary Authority of Singapore (MAS) Technology Risk Management (TRM) Guidelines is a set of principles and best practices destined for financial institutions, meant to regulate various aspects of technology such as: 

* Risk management and assessment,  
* Access control, 
* Incident management,  
* Software application development, and many others. 

MAS TRM Guidelines contains the following 13 sections: 

1. Technology Risk Governance and Oversight 
2. Technology Risk Management Framework 
3. IT Project Management and Security-by-Design 
4. Software Application Development and Management 
5. IT Service Management 
6. IT Resilience 
7. Access Control 
8. Cryptography 
9. Data and Infrastructure Security 
10. Cyber Security Operations 
11. Cyber Security Assessment 
12. Online Financial Services 
13. IT Audit 

These sections contain subsections that describe in detail the best practices that should be followed for each area covered by that section.  

It is important to note that MAS TRM Guidelines does not contain any specific controls, and it is up to the organization to create and tailor controls to fulfill each section's recommendations. 

In this article, we will look in detail at the sections that may apply for cloud environments and understand the requirements. 

## IT Resilience  

This section describes the importance of: 

* Availability,  
* Recoverability, 
* Disaster recovery, 
* Backups,  
* Data centre resilience. 

**Availability** ensures users can access data without interruption. High availability is an essential feature, and having disruptions of even a few minutes per week can cost organizations a lot. 

**Recoverability** is the ability of an organization to quickly restore its systems after an incident. **Disaster recovery** is an aspect of recoverability that specifically refers to the way systems and data are restored after a disaster.  

**System backup** is the process of storing copies of data in different data centers. Backup goes hand-in-hand with **data center resilience**, enforcing that data backups should be stored in data centers that are in different regions. In this way, if a natural disaster or civil unrest occurs, the destructions of all backups may be avoided by storing them apart.  

## Access control 

The following section in MAS TRM Guidelines is access control. It is a component of IAM (Identity and Access Management) that describes what users can access and how. Parts of this section include: 

* User access management, 
* Privileged access management. 

**User access management** refers to what resource can each user access. [The principles of least privilege](https://cyscale.com/blog/check-for-least-privilege/) and segregation of duties are recommended best practices. 

**Privileged Access Management (PAM)**, on the other hand, is an essential aspect of access control that strictly regulates the access of authorized users to privileged resources. Moreover, the access granted can be restricted: the user may only access important resources for a limited amount of time or perform only a small set of actions, according to their needs. 

## Cryptography 

[Cryptography](https://cyscale.com/blog/types-of-encryption/) protects the confidentiality, integrity, and authenticity of mostly at-rest and in-transit data.  

In MAS TRM Guidelines, two aspects of cryptography are considered: 

* Cryptographic Algorithm and Protocol, 
* Cryptographic Key Management. 

**Cryptographic Algorithm and Protocol** refers to the usage of industry-recommended cryptographic algorithms, such as: 

* SSL/TLS (Transport Layer Security) and SSL (Secure Sockets Layer) for in transit data encryption, and  
* AES (Advanced Encryption Standard) for [at rest data](https://cyscale.com/blog/protecting-data-at-rest/) encryption. 

**Key management** is also an important aspect of cryptography; if the key is not generated, stored, transmitted, or destroyed safely, it may compromise the encryption. Best practices that we recommend include: 

* generating the keys randomly,  
* rotating them regularly,  
* storing them separately from ciphertext. 

## Data and Infrastructure Security 

This section refers to the following concepts: 

* Data Security, 
* Network Security, 
* System security, 
* Virtualization security. 

To ensure **data security**, data should be protected in all its states: at rest, in transit, and in use. Unauthorized access, modification, copying, or destruction of data should be avoided by: 

* Encrypting data when possible, 
* Disabling public access to assets that should not be publicly accessible, 
* Restricting access through strict policies, and others. 

To implement **network security**, firewalls, intrusion detection systems (IDSs), network access control lists (ACLs), and other network devices or protection mechanisms should be used. 

To ensure a strong **system security**, recommendations from MAS TRM Guidelines include both software and hardware components in their best practices: 

* using anti-virus programs for endpoint protection,  
* defining procedures to check if security measures are effective and up to date, 
* using a white-list approach, which means that only authorized software should be trusted, and others. 

Lastly, best practices suggested by MAS TRM Guidelines in the context of virtualization security are: 

* Implement a strong access control to administrative privileges that may affect the hypervisor or the operating system of a virtual machine (VM),  
* Ensure the images used for VMs are secure, and others. 

## Cyber Security Operations 

The “**Cyber Event Monitoring and Detection**” component refers to continuous logging and monitoring of cloud processes to identify suspicious behavior and anomalies, as well as procedures that should be implemented to efficiently react to findings. 

## Cyber Security Assessment 

The last section that can be applied to cloud environments is "Cyber Security Assessment", more specifically, **Vulnerability assessment**.  

To identify vulnerabilities in the cloud, regular vulnerability assessments should be conducted.  

## Achieving MAS TRM Compliance in the Cloud 

MAS TRM Guidelines is a comprehensive compliance standard that specifies best practices for financial institutions. We've looked at aspects that affect cloud environments. 

Cyscale provides a dedicated page for standards and compliance laws, that can be used to track progress in the compliance process and ensure that you’re ready for audits. MAS TRM Guidelines is one of the compliance frameworks that can be found here. 

In the image below, you can see that, for the standard, there have been 268 controls checked, which are available across four cloud vendors (Microsoft Azure, AWS, GCP Cloud, Alibaba Cloud). 

<img src="/img/33_blog-mas-standard.png" alt="MAS TRM in the Cyscale platform" title="MAS TRM in the Cyscale platform" class=" blog-image-shadow " style="width:autorem;height:autorem;"/>

Let’s look at examples of controls for some of the key components we've described in this article to see how Cyscale checks cloud configurations and helps you understand which requirements you’re fulfilling and which not. 

### IT Resilience 

* Availability: *Ensure databases have deletion protection enabled.* 
* Backups: *Ensure soft delete is enabled for Azure Storage.* 

### Access control 

* User access management: *Ensure IAM policies that allow full "\*:\*" administrative privileges are not created.* 
* Privileged access management: *Ensure a log metric filter and alarm exist for usage of "root" account.* 

### Cryptography 

* Cryptographic Algorithm and Protocol: *Ensure web app is using the latest version of TLS encryption.* 
* Cryptographic Key Management: *Ensure Azure Key Vaults are used to store secrets.* 

### Data and Infrastructure Security 

* Data security: *Ensure databases are encrypted.* 
* Network security: *Ensure firewall rule does not allow all traffic on port 80.* 
* System Security: *Ensure Kubernetes Engine uses HTTP load balancing ID.* 
* Virtualization security: *Ensure AMIs Are Private.* This control limits data exposure by disabling public access to AMIs (Amazon Machine Images). 

### Cyber Security Operations 

* Cyber Event Monitoring and Detection: *Ensure CloudTrail is enabled in all regions.* 

### Cyber Security Assessment 

* Vulnerability assessment: *Ensure AWS Inspector is configured for EC2 Instances.* 

<!--EndFragment-->