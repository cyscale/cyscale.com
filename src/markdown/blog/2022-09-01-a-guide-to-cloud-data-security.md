---
templateKey: blog-post
title: "A Guide to Cloud Data Security "
seoTitle: "A Guide to Cloud Data Security "
authors: Sabrina Lupșan
permalink: cloud-data-security-guide
categories:
  - CSPM
date: 2022-09-01T10:59:21.743Z
description: >
  Data security is one of the biggest concerns of cloud-based organizations.
  When you think about protecting data, you need to make sure you’re providing
  the following features: 
seoDescription: "Data security is one of the biggest concerns of cloud-based organizations. "
featuredpost: true
featuredimage: /img/21-cover-01-min.png
tags:
  - cspm
  - visibility
  - data security
  - access control
---
<!--StartFragment-->

Data security is one of the biggest concerns of cloud-based organizations. When you think about protecting data, you need to make sure you’re providing the following features: 

* Confidentiality, 
* Integrity, 
* Availability. 

Moreover, these three security principles need to be implemented for all three states of data, which are: 

* In motion, 
* In use, 
* At rest. 

This mission may seem daunting. Let’s break it down and understand every step of the process of securing data. In this article, you will find out: 

* The type of attacks that threaten your data, 
* Best practices for securing data, 
* Solutions on the market from cloud providers, 
* How to identify any gaps in your security implementations. 

**How do you ensure confidentiality?** 

Confidentiality is a security principle that states that only authorized users should be able to access the data. It should not be visible to unauthorized entities. 

**Best practices**   

1. **Encryption** 

[Encryption](https://cyscale.com/blog/types-of-encryption/) is the process of scrambling data to obtain unreadable ciphertext. The algorithm uses a key to encrypt it, and if you are not in possession of the decryption key, you cannot reverse it back to its original state. 

Encryption solutions for the three states of data are: 

* For in motion data: SSL/TLS. They are transport protocols that encrypt data in transit. 
* For in use data: memory encryption, called Secure Encrypted Virtualization (SEV). It requires specialized hardware, and it encrypts RAM memory. 
* [For at rest data:](https://cyscale.com/blog/protecting-data-at-rest/) industry-recommended symmetric algorithms such as AES-256 are used to perform full disk, database, file system, and cloud assets encryption. 

2. **Access control** 

A layered approach should be used when securing data in the cloud. This means that encryption of data at rest should only be considered as the last measure of protection if access control rules are bypassed. 

You must secure access to databases, buckets, and other storage assets by restricting it as much as possible. In doing this, you become compliant with the [Least Privilege Principle](https://cyscale.com/blog/check-for-least-privilege/). 

A few access control best practices for [database protection](https://cyscale.com/blog/best-practices-for-securing-databases/) are: 

* Filter inbound and outbound traffic, 
* Secure your database connection, 
* Keep your connection details secret. 

For [buckets that contain sensitive information](https://cyscale.com/blog/common-cloud-misconfigurations-how-to-avoid-them/#storage-access), do not allow public read/write access and use access control lists to define granular rules. 

3. **[Data classification](https://cyscale.com/blog/data-classification/)** 

Classifying data does not protect it on its own. However, this process can help you understand which is the most sensitive data in order to better focus your efforts to secure it.  

AWS, Azure, and GCP provide labels or tags for users to implement data classification. Labels/tags can be predefined by the public cloud vendor or can be user-defined according to the user’s specific needs.  

**How do you ensure integrity?** 

Ensuring integrity means that data must not be altered in transit or at rest. Integrity is usually accomplished using hashes and checksums.  

They are computed before the data is used or transferred and then again after. If the two values of hashes/checksums match, then the data was not altered in transit or at rest. Otherwise, that data was tampered with.  

Let’s look at public cloud vendors and how they provide data integrity services: 

* AWS S3 uses CRC32, CRC32C, SHA-1, and SHA-256 to check the data integrity after uploading/downloading, 
* GCP also uses CRC32C checksums to verify data integrity. 

**How do you ensure availability?** 

Data availability means that any user should be able at any point to access their data without disruptions. 

For data in the public cloud, vendors provide solutions to replicate and backup it in different data centers and regions. 

We need to look at **availability zones** to understand availability in the cloud. 

Availability zones are groups of data centers in the same region containing replicated data. If a data center fails, the other data center in the availability zone takes the responsibility, providing fault tolerance and increased availability. 

Moreover, public cloud vendors support region pairs. A region is paired with another region at a great distance (for example, at least 300km away for Azure). If a natural disaster, civil unrest, or any other unforeseen events occur, the secondary region becomes the main source of cloud service. 

Another service available in the public cloud that helps ensure availability is **DDOS protection**.  

DDOS (Distributed Denial of Service) is an attack designed to crash an application or a service by sending substantial amounts of traffic to it.  

A few examples of available DDOS services are: 

* AWS Shield, 
* Azure DDOS Protection, 
* Google Cloud Armor. 

**Implementing our recommendations** 

Ensuring data security in the cloud is not an easy task. There are many aspects to be considered, and a small mistake can leave a vulnerability in your environment.  

Cyscale provides powerful dashboards to ensure visibility of your assets, the identities in your cloud, and an overview of your data security.  

Moreover, 400+ controls ensure you have implemented the cybersecurity principles and best practices. Here are some examples of controls that can be used to ensure data security: 

* **In motion data encryption**: *Ensure web app is using the latest version of TLS encryption* for Microsoft Azure 
* **At rest data encryption**: *Ensure VM disks for critical VMs are encrypted with Customer*-Supplied Encryption Keys (CSEK) for GCP 
* **Access control**: *Ensure S3 bucket policy does not grant Allow permission to everyone* for AWS 
* **Data classification**: *Ensure Kubernetes Clusters are configured with Labels* for GCP 
* **DDOS Protection**: *Ensure Anti-DDoS access and security log service is enabled* for Alibaba Cloud 

<!--EndFragment-->