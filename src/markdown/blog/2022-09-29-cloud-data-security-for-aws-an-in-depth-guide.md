---
templateKey: blog-post
title: "Cloud Data Security For AWS: An In-Depth Guide"
seoTitle: "Cloud Data Security For AWS: An In-Depth Guide "
authors: Sabrina Lupșan
permalink: cloud-security-for-aws
categories:
  - CSPM
date: 2022-09-29T06:25:58.261Z
description: "Understanding and managing all your assets and services in the
  cloud are demanding tasks. It is easy to overlook even the smallest
  configuration and introduce a vulnerability in your cloud infrastructure. To
  secure your cloud environment, you need to perform: data classification using
  labels, encryption, access control through policies. You also need to use DLP
  mechanisms to identify sensitive data and store it redundantly using
  availability zones. Secure your AWS environment using Cyscale!"
seoDescription: "Understanding and managing all your assets and services in the
  cloud are demanding tasks. It is easy to overlook even the smallest
  configuration and introduce a vulnerability in your cloud infrastructure. To
  secure your cloud environment, you need to perform: data classification using
  labels, encryption, access control through policies. You also need to use DLP
  mechanisms to identify sensitive data and store it redundantly using
  availability zones. Secure your AWS environment using Cyscale!"
featuredpost: true
featuredimage: /img/24_blog-cover-photo.png
tags:
  - security
  - CSPM
---
<!--StartFragment-->  

Understanding and managing all your assets and services in the cloud are demanding tasks. It is easy to overlook even the smallest configuration and introduce a vulnerability in your cloud infrastructure. 

In this article, you will find a comprehensive guide that will help you understand possible misconfigurations in your AWS cloud infrastructure and how to remediate them.  

## Steps to secure your cloud environment 

### 1. Data classification 

[Classifying your cloud data](https://cyscale.com/blog/data-classification/) can help you easily sort, retrieve, and prioritize it. This is done using a tag (sometimes called a label), which is applied to cloud storage assets. In this way, that data is placed into one or more categories and can be identified more easily. 

Benefits of data classification include: 

* Risk management, 
* Compliance,  
* Security. 

In AWS, tags are key-value pairs that add metadata to your data. 

The AWS documentation recommends using a three-tiered approach, with the following tags: 

* Unclassified, 
* Official,  
* Secret. 

However, users can tailor data classification to their needs and use their own tags. In addition, **tag policies** can be used to standardize their creation and ensure consistency across all assets. 

To accomplish classification using tags in your AWS environment, you have the following options: 

* Using the Amazon console, at resource level, where tags can be added either at creation or after, 
* Programmatically, using the Amazon API, AWS CLI, or AWS SDK. 

According to the AWS documentation, restrictions regarding tags include: 

* There cannot be more than 50 tags per resource, 
* Each tag key must be unique for each resource, 
* The maximum key length is 128 Unicode characters in UTF-8, 
* The maximum value length is 256 Unicode characters in UTF-8. 

### 2. Encryption 

Encryption is the process of altering data in order to hide its content and ensure confidentiality because entities that do not have the decryption key cannot decrypt the data and, therefore, cannot read its content. 

The two types of encryption mechanisms are: 

* **Symmetric encryption**, where the encryption and the decryption key are the same, and 
* **Asymmetric encryption**, where the two keys are different; one is called public key and the other private key. 

Encryption can be done in all three states of data: 

* [At rest,](https://cyscale.com/blog/protecting-data-at-rest/) 
* In transit, 
* In use. 

In this article, we will discuss data encryption in the first two states, but [a more detailed article](https://cyscale.com/blog/types-of-encryption/) regarding encryption also describes encryption in the last state of data. 

For data in transit, AWS provides the following solution: 

1. Encrypt the data using SSL/TLS. TLS (Transport Layer Security) and SSL (Secure Sockets Layer) are transport layer protocols that protect the data in transit. TLS is a newer and improved version of SSL. 
2. Perform client-side encryption. This solution requires the user to encrypt the data before uploading it to the cloud, but it is more difficult since the client has to deal with the encryption process, key management, and other services. 

For data at rest, AWS provides encryption for the following services:  

* Amazon EBS,  
* Amazon S3,  
* Amazon RDS,  
* Amazon Redshift,  
* AWS Lambda, and many others. 

AWS uses the 256-bit Advanced Encryption Standard (AES-256) encryption algorithm, an industry-recommended standard and one of the strongest algorithms for symmetric encryption. 

Key management is also a very important element of data encryption. If your keys are not stored safely, then no matter how strong the encryption algorithm is, a malicious party may be able to read your data. 

A few best practices regarding encryption keys are: 

* Do not store your keys in the same place as your data or in the source code, 
* Rotate and retire keys regularly to minimize the impact of a breach, 
* Manage key deletion, 
* Use Cryptographically Secure Random Number Generators (CSRNGs) to generate your keys. 

AWS KMS (AWS Key Management System) is a comprehensive solution that helps users deal with all the trouble that comes with cryptographic keys. 

AWS KMS helps you: 

* Create cryptographic keys, 
* Define policies and control how the keys are used, 
* Audit the keys usage to ensure they are used legitimately. 

According to AWS, this service can be used: 

1. Through the AWS Management Console, 
2. Using the AWS KMS APIs. 

### 3. Access control 

Regulating access control is an essential step to your [cloud data security](https://cyscale.com/blog/cloud-data-security-guide/) program.  

To manage access control in AWS, you can use policies, which can be assigned at the following levels: 

* Users, 
* Groups of users, 
* Roles, 
* Resources. 

Policies define permissions. To correctly implement them, use the [Least Privilege Principle](https://cyscale.com/blog/check-for-least-privilege/) to only allow access rights to the necessary users for the minimum amount of time possible.  

Let’s look at an example where a policy is applied to a resource.  

An AWS S3 bucket is a type of asset used to store object-like data such as files, databases, and other unstructured data. 

A bucket policy contains rules based on which access is allowed or denied and is written in JSON.  

```json
{
    "Version": "2012-10-17",
    "Id": "S3PolicyId1",
    "Statement": [
        {
            "Sid": "IPAllow",
            "Effect": "Deny",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::DOC-EXAMPLE-BUCKET",
                "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*"
            ],
            "Condition": {
                "NotIpAddress": {
                    "aws:SourceIp": "54.240.143.0/24"
                }
            }
        }
    ]
}
```

*Policy source – docs.aws.amazon.com* 

Analyzing the image above, we understand that the policy is applied to a bucket resource, the rule for the permission is “Deny”, and the result of the bucket policy is denying access to the objects stored in the specified bucket unless the requests are made with source IPs in the subnet 54.240.143.0/24. 

### 4. Data loss prevention 

Data loss prevention (DLP) is a protection mechanism for sensitive data that ensures that no unintentional or malicious disclosures occur. DLP prevents data breaches by ensuring no confidential data is accidentally leaked, lost, or stolen. 

**Amazon Macie** is a data security and privacy service that protects users’ sensitive data using machine learning technologies and pattern matching. 

This tool identifies sensitive data using **sensitive data discovery jobs**, which analyze S3 buckets. Sensitive data discovery jobs use pre-defined or user-defined lists (or a combination of both) to single out confidential data by matching patterns to the lists. 

A passport number is an example of sensitive data that Amazon Macie could match. This is because it has a set number of digits, some corresponding to the owner's region or country. 

After identifying sensitive data, Amazon Macie can: 

* use IAM policies to filter traffic to it,  
* encrypt and decrypt data,  
* perform logging and monitoring through AWS CloudTrail integration, and others.  

### 4. Availability 

Availability means that users should be able to access their data without disruptions at any point. 

A solution for availability in the cloud is **availability zones**. 

An availability zone is a geographical area where groups of data centers are located. These data centers contain replicated data and provide redundancy regarding electrical power, networking, and connectivity. 

An AWS region contains multiple AWS availability zones, all within 100km of each other, which are independent and provide redundancy. 

Some AWS regions around the globe are: 

* North America,  
* South America, 
* Europe,  
* China,  
* South Africa, and others. 

These regions provide high availability. 

Another solution for availability is DDoS Protection. DDoS (Distributed Denial of Service) attacks are attempts to bring down a service or a resource by sending a large amount of traffic to them using controlled machines. 

AWS Shield is the AWS DDoS Protection service that protects applications hosted in the cloud. 

AWS Shield has two tiers: 

* Standard, 
* Advanced. 

Besides the features that come with the Standard plan, which are at network and transport layer, the Advanced tier of AWS Shield provides: 

* integration with AWS WAF (Web Application Firewall), 
* real-time visibility into attacks,  
* additional detection and mitigation of sophisticated DDOS attacks, and others. 

## Secure your cloud environment 

After understanding the security demands required for the cloud, implementing them seems like a daunting task. However, using Cyscale, you can easily check if you’re lacking any of the mentioned implementations and remediate any findings. 

Cyscale has over 400 controls that cover a large variety of misconfigurations and vulnerabilities and offer support not only for AWS, but for Azure, GCP Cloud, Alibaba Cloud as well. 

<!--EndFragment-->