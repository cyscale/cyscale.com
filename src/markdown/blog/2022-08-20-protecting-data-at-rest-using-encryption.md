---
templateKey: blog-post
title: "Protecting Data at Rest Using Encryption  "
seoTitle: "Protecting Data at Rest Using Encryption  "
authors: Sabrina Lupșan
permalink: protecting-data-at-rest
categories:
  - Cloud Security
  - Encryption
date: 2022-08-20T07:06:54.032Z
description: >+
  Data at rest is data that is not currently used or transmitted between
  computer systems.  This state of data is usually the most sought-for by
  attackers. You need to encrypt data to keep it confidential. To encrypt data,
  use industry-recommended algorithms, manage your keys by storing them in key
  vaults and rotating them.

seoDescription: Data at rest is data that is not currently used or transmitted
  between computer systems.  This state of data is usually the most sought-for
  by attackers. You need to encrypt data to keep it confidential. To encrypt
  data, use industry-recommended algorithms, manage your keys by storing them in
  key vaults and rotating them.
featuredpost: true
featuredimage: /img/19_blog-cover-photo.webp
tags:
  - security
  - CSPM
  - encryption
  - data
---
<!--StartFragment-->

Data at rest is data that is not currently used or transmitted between computer systems.  

This state of data is usually the most sought-for by attackers. Data at rest can be stored in: 

* Storage cloud assets such as buckets, 
* Databases, 
* Files, and others. 

The most common method of protecting data at rest is through [encryption](https://cyscale.com/blog/types-of-encryption/). In this article, we will look at ways to perform encryption and understand its importance. 

## Why is it important to encrypt data at rest? 

There are three main risks regarding data at rest: 

* loss,  
* leakage,  
* theft. 

In all three cases, your data at rest will probably end up in somebody’s hands. You can forget your USB drive in a coffee shop, you can accidentally disclose your data to someone else or the public or it can be stolen by a malicious attacker. 

For these reasons, a safeguarding mechanism is encrypting your data. 

With this method, even if someone else gets ahold of your data, they will not be able to read it. 

## Client-side and server-side encryption 

Client-side encryption is done on a local device with the user's key. 

Server-side encryption is implemented in the cloud, and the cloud vendor usually takes care of the key. This method of encryption is easier to use, since the cloud provider takes care of the algorithm, the key management system, and other troubles you may have. 

In this article, we will look at best practices for client-side encryption, as well as solutions offered for server-side encryption.  

## How do you encrypt data at rest? 

There are a few best practices that need to be considered when undergoing the encryption process: 

### 1. Use an industry-recommended standard with an appropriate key length. 

For data at rest, symmetric encryption algorithms are usually used. An industry-recommended standard is AES-256 (Advanced Encryption Standard with a key of 256 bits). 

### 2. Classify data and decide what to encrypt. 

Make sure you don’t leave any sensitive data unencrypted. Use [data classification](https://cyscale.com/blog/data-classification/) to decide what data should be encrypted.  

Alternatively, perform full disk encryption to protect all data, especially in case you lose the hardware. 

## Key management 

Now that we’ve established how to encrypt data at rest, let’s talk keys.  

If your key management is poor, no matter how strong and well-done an encryption is, it can become totally useless. 

Follow the best practices we’re recommending to ensure textbook key management.  

### 1. Use a random key generation algorithm for your keys.  

Most random number generator algorithms are not truly random; they are called Pseudo-Random Number Generators (PRNGs).  

If you’re using programmatic functions such as random() or rand() from C++, Java, and other languages, you’re not generating random keys; they use a seed (which always gives the same result), can be predicted, and are not for cryptographic usage. 

For this reason, you need to use tools that utilize Cryptographically Secure Random Number Generators (CSRNGs). 

To generate a random, secure key, you can use: 

* [GenerateRandom](https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateRandom.html), a tool provided by AWS, 
* the [GenerateRandomBytes](https://cloud.google.com/kms/docs/generate-random) API from Google Cloud, 
* [SecureRandom](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html), a class from Java, and others. 

### 2. Store your keys separately from your ciphertext. 

Do not store your keys in the same place as encrypted data, and do not hardcode them in the source code. You can use: 

* dedicated hardware devices such as Hardware security modules (HSM), 
* key management systems such as Azure Key Vault and AWS KMS, 
* open source KMS such as HashiCorp Vault. 

### 3. Rotate the keys. 

Change the keys regularly (every 90 days or less). This process involves retiring an encryption key and generating a new one. 

Moreover, if a key is compromised, immediately replace it and assess which data is at risk. 

### 4. Implement access control for keys 

Ensure that access to keys is heavily restricted in the following ways: 

* [Implement the Least Privilege Principle.](https://cyscale.com/blog/check-for-least-privilege/) Only the individuals that need the keys should be able to access them. You can also implement time windows when keys can be accessed. 
* Only authorized personnel should be able to access keys. Ensure that, after you’ve granted access rights to people, only they can see and use the keys. 

###  5. Manage key deletion 

If a key is permanently deleted, all data encrypted with that key is lost. The key should be appropriately destroyed after all the encrypted data is decrypted and re-encrypted with a new key. 

Solutions from cloud vendors for safe key deletion are: 

* Soft delete in Azure Key Vault, 
* Key deletion scheduling in AWS. 

## Server-side encryption - cloud solutions 

AWS, Azure, and Google Cloud provide data at rest encryption and key management solutions. Let's look at the available options and how to make sure you're using them correctly. 

### Encryption in AWS 

The following services in AWS support data at rest encryption capabilities: 

* Amazon EBS, 
* Amazon S3,  
* Amazon RDS,  
* Amazon Redshift, 
* AWS Lambda, and many others. 

Key management is done using the AWS Key Management Service, which allows users to utilize their own keys or let AWS deal with them. 

### Encryption in Azure 

In Microsoft Azure, users have the following options: 

* Azure Disk Encryption, for Virtual Machines, 
* Azure Storage and Azure SQL Database, which encrypt all data at rest. 

For key management, Azure provides the following services: 

* Azure Key Vault, 
* Vault Managed Hardware Security Model (HSM). 

### Encryption in Google Cloud 

For key management, Google Cloud provides the Google Key Management Service. As an additional layer of security, the encryption key, named DEK (Data Encryption Key), is also encrypted using a KEK (Key-encryption key).  

## How do you check for encryption misconfigurations? 

As we’ve seen, there are many best practices to be considered, and therefore there is room for mistakes. 

You can quickly [check for misconfigurations](https://cyscale.com/use-cases/cloud-misconfigurations/) regarding data at rest encryption in the cloud using Cyscale’s controls. Here are a few examples of controls that check if you’re implementing the best practices described in this article: 

* *Ensure all S3 buckets employ encryption-at rest* for AWS 
* *Ensure storage for critical data are encrypted with Customer Managed Key* for Microsoft Azure, 
* *Ensure EBS encryption by default is enabled* for AWS, 
* *Ensure CloudTrail logs are encrypted at rest* for AWS. 

<!--EndFragment-->
