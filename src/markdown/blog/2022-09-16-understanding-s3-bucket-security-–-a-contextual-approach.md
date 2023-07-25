---
templateKey: blog-post
title: Understanding S3 Bucket Security – A Contextual Approach
seoTitle: Understanding S3 Bucket Security – A Contextual Approach
authors: Sabrina Lupșan
permalink: s3-bucket-security
categories:
  - CSPM
date: 2022-09-16T08:07:20.546Z
description: An Amazon S3 bucket is a storage cloud asset that acts as a
  container for data stored in the public cloud. Buckets are object storage
  services and are similar to folders; this type of storage is flexible and
  scalable and is ideal for large files and unstructured data. To secure a
  bucket, restrict public access to it, perform at rest and in transit
  encryption, log user actions, and perform regular backups.
seoDescription: An Amazon S3 bucket is a storage cloud asset that acts as a
  container for data stored in the public cloud. Buckets are object storage
  services and are similar to folders; this type of storage is flexible and
  scalable and is ideal for large files and unstructured data. To secure a
  bucket, restrict public access to it, perform at rest and in transit
  encryption, log user actions, and perform regular backups.
featuredpost: true
featuredimage: /img/23_blog-cover-photo.webp
tags:
  - security
  - CSPM
  - bucket
---
<!--StartFragment-->  

In 2017, 4 million records with customer information, login credentials, and source code were made publicly available due to 2 unsecured AWS S3 storage buckets owned by Time Warner Cable. 

The consequences of this attack were disastrous, and this event showed the entire cloud industry how important security is. 



In this article, we will learn more about Amazon S3 buckets, misconfigurations and vulnerabilities, and how to secure them.

## What is an Amazon S3 bucket?  

An Amazon S3 bucket is a storage cloud asset that acts as a container for data stored in the public cloud. Buckets are object storage services and are similar to folders; this type of storage is flexible and scalable and is ideal for large files and unstructured data. 

## Common S3 Bucket Misconfigurations 

### 1. Public access to a bucket is allowed. 

Sometimes, Amazon S3 buckets are required to be publicly accessible. For example, this use case occurs when the owner intends to make data accessible to the internet.  

However, breaches occur when a bucket that has sensitive information such [as PII (Personal Identifiable Information)](https://cyscale.com/blog/protecting-pii-in-the-cloud/) allows: 

* Public “READ” access, 
* Public “WRITE” access.  

You can grant and deny access to a bucket using **access lists** and **bucket policies**.  

An access control list (ACL) is a set of rules that limit access to buckets through permissions. It defines an account's access level over a bucket (for example, READ or WRITE).  

A bucket policy also contains rules based on which access is allowed or denied, but it is a more modern solution because it can enable more complex filtering. It is a JSON-based access policy language. 

Amazon recommends that you no longer use ACLs beside special cases, in which you need to filter access to objects individually.  

### 2. No at rest encryption is performed. 

[Data at rest](https://cyscale.com/blog/protecting-data-at-rest/) should always be encrypted to ensure confidentiality and improve your cloud data security.  

Performing encryption on the objects inside a bucket ensures that, even if a malicious entity gains access to your data, they cannot read it.  

AWS provides multiple encryption options to protect data at rest. For example, you can enable default encryption and set it, so it automatically encrypts any new objects added to the bucket.  

Encryption should be done using industry-recommended algorithms and strong cryptographic keys. A strong encryption algorithm is AES-256 (Advanced Encryption Standard with a key of 256 bits). 

### 3. In transit encryption is not enabled. 

Besides the data that is already stored, you should also encrypt the data that travels to and from the S3 bucket.  

This step prevents eavesdropping attacks. It is not enough to store your data encrypted. Your efforts are wasted if it travels in plain text and attackers can read it. 

Data in motion can be encrypted using SSL/TLS. TLS (Transport Layer Security) and SSL (Secure Sockets Layer) are transport layer protocols that protect the data in transit. TLS is a newer and improved version of SSL. 

Another solution for in motion encryption is preparing the data that is to be transported by encrypting it on the client-side. 

### 4. Logging is disabled. 

Logging an S3 bucket is an essential step in securing your data. With logging, you can record actions taken by users, keep log files for compliance purposes and understand what roles have permission to access data inside a bucket. 

There are two solutions for AWS bucket logging: 

* Server access logging, and 
* AWS CloudTrail. 

With server access logging, you obtain detailed records regarding requests that are made to a bucket. 

AWS CloudTrail is a comprehensive service that tracks user activity and API calls. It can be used to keep a record of who sends requests to a bucket.  

It is important to keep in mind that AWS CloudTrail does not log failed authentication attempts through incorrect credentials. However, it does track requests made by anonymous or unauthorized users. 

### 5. No regular backups are performed 

Attackers may not only try to steal your sensitive data, but they can also delete it. Therefore, ensuring regular and consistent backups is essential to configuring your buckets and providing availability. 

Using AWS Backup, you can perform S3 bucket backups. Amazon supports the following types of backups: 

* **Continuous backups**, which allow data restoration from any moment in the last 35 days, 
* **Periodic backups**, which can be performed every 1 hour, 12 hours, or less often. 

An important feature of AWS Backup is that [tags](https://cyscale.com/blog/data-classification/), access control lists, and other metadata are also saved along with your data. 

An additional layer of security can be added by using the MFA delete feature in AWS. This option requires a successful MFA before allowing a user to delete an object or bucket. 

Moreover, you can keep multiple versions of an object inside a bucket. This process is called versioning and can be used to recover objects from accidental deletion. 

## Do you have a complete cloud security program? 

In this article, we’ve discussed many possible misconfigurations, along with best practices. However, in order to fully understand your public cloud infrastructure and find vulnerabilities, you need to have good visibility over your cloud environment.  

Using a new feature in Cyscale, the bucket graph, you can put in context all of your knowledge and grasp a better understanding of your infrastructure. 

Below, you can see an example of a bucket graph. 

![Bucket Graph in Cyscale](/img/23_blog-graph-bucket.webp#shadow "Bucket Graph in Cyscale")

Although the bucket (shown on the right) has only two IAM policies attached, we can see that these have a significant impact on the infrastructure: the AmazonS3FullAccess policy gives full access rights to a specific user and to a VM that can assume an associated IAMRole.  

In addition, there's a lambda function that has a role which gives it permissions to perform actions on the bucket 

Without context, we would not be able to understand a policy's impact and the associated risk. 

Moreover, the icon on the right shows us that the bucket violates three policies. Cyscale users can click on the icon and obtain more details regarding this alert. 

This feature helps you quickly understand and fix any misconfigurations and vulnerabilities introduced in the cloud environment due to the bucket’s settings. 

  

Besides the graph, you can also use controls to check your cloud configurations easily. Find any gaps in your buckets' configurations using Cyscale controls! Here are a few examples that can help you instantly check the most common misconfigurations regarding S3 buckets: 

* *Ensure S3 bucket ACL grants permissions only to specific AWS accounts* 
* *Ensure all S3 buckets employ encryption-at-rest* 
* *Ensure a log metric filter and alarm exist for S3 bucket policy changes* 
* *Ensure that there are no publicly accessible objects in storage buckets* 

 

<!--EndFragment-->
