---
templateKey: blog-post
title: "AWS SOC 2 Compliance Checklist: A Detailed Guide"
seoTitle: "AWS SOC 2 Compliance Checklist: A Detailed Guide"
authors: Sabrina Lupșan
permalink: AWS-SOC-2-Compliance-Checklist-A-Detailed-Guide
categories:
  - Compliance
date: 2022-10-19T10:11:42.781Z
description: >-
  SOC 2 is a compliance standard that regulates the way data security is handled
  within B2B (business-to-business) organizations. SOC (Service and Organization
  Controls) 2 is an international standard developed by AICPA (The American
  Institute of Certified Public Accountants). 


  In this article, we will understand what requirements your company needs to fulfill to obtain the SOC 2 certifications and how to implement them correctly in your AWS environment. 
seoDescription: AWS SOC 2 Compliance
featuredpost: true
featuredimage: /img/26-cyscale-blog-min.webp
tags:
  - AWS
  - SOC 2
  - Compliance
  - Security
---
<!--StartFragment-->

SOC 2 is a compliance standard that regulates the way data security is handled within B2B (business-to-business) organizations. SOC (Service and Organization Controls) 2 is an international standard developed by AICPA (The American Institute of Certified Public Accountants). In the context of **[cloud compliance](https://cyscale.com/blog/cloud-compliance-101-basics-best-practices/)**, understanding SOC 2 requirements in your AWS environment is crucial for data security.

In this article, we will understand what requirements your company needs to fulfill to obtain the [SOC 2 certifications](https://cyscale.com/blog/soc-2-compliance-in-cloud/) and how to implement them correctly in your AWS environment. 

### The requirements 

Firstly, the rules within SOC 2 are grouped by 5 TSC (Trust Service Criteria): 

1. Security 
2. Availability 
3. Processing Integrity 
4. Confidentiality 
5. Privacy 

SOC 2 has 64 mandatory trust service criteria, based on these which the company creates controls to achieve compliance. In this article, we will look at a few of the criteria required, how to implement them in your AWS environment and how to check if your implementation is complete. 

##### A checklist 

### Requires Additional Authentication or Credentials 

MFA (Multi-Factor Authentication) is a mechanism that adds additional steps to the authentication flow and requests supplementary credentials. These credentials can be: 

* What you know (for example: a password) 
* What you have (for example: a smart card) 
* What you are (for example: a fingerprint) 

To fulfill this criteria, introduced under the “Security” section, you need to enable MFA when accessing the AWS Management Console. As a result, users will be prompted to enter their username and password (which is the first step, or the first factor of the authentication), and then an authentication code that is sent to their device. A biometrics-enabled device can be used instead as well. 

You can configure MFA for IAM users or the AWS account root user. 

Steps to enable MFA in your AWS environment, according to the [documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable.html). 

6. Install an authenticator app on your MFA device, use a FIDO2 device or specialized hardware devices such as TOTP tokens. 
7. Enable the MFA device from the AWS Management Console (if using an authenticator app, you can also use AWS CLI or AWS API). 

If your company is using an external identity provider, you have to ensure that MFA is configured for access to the AWS console. 

To check if users have MFA enabled, or to gain actionable insights regarding IAM, book a free assessment now.

<a href="https://cyscale.com/cloud-security-risk-assessment/"><img src="/img/56_blog-edited-screenshot-1.png" alt="" title="" class=" blog-image-shadow " style="width:auto;height:auto;"/></a>

<div class="pb-0 pt-4 lg:pb-0 lg:pt-4 flex flex-col items-center"><a href="https://cyscale.com/cloud-security-risk-assessment/"><button class="bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind" style="padding: 0.625rem 2.5rem;">Start assessment</button></a></div>

### Restricts Access 

This criteria, in the “Security” TSC refers to restricting traffic to and from any cloud services and assets hosted in the cloud. This includes: 

* Closing unnecessarily open ports, 
* Requiring authenticated access to services such as FTP, SMB, and others. 

To close an open port, follow these steps: 

1. Log in to the AWS Management Console. 
2. From the EC2 dashboard, on the left pane, click Security Groups. 
3. For each security group, click the Inbound Rules tab, and remove the rules that allow access to the ports you want to close. Repeat the same for the Outbound Rules. 
4. Remember to click save. 

### Implements Boundary Protection Systems 

The third requirement we will analyze under the "Security" section of SOC refers to the usage of firewalls, DMZs (Demilitarized Zones), IDS, IPS, and others.  

It is recommended that you secure your cloud infrastructure by using these utilities in order to limit traffic as much as possible and only allow access to resources when necessary. 

To quickly deploy a firewall: 

* Log in to the AWS Management Console, 
* Open the Amazon VPC console, create a firewall subnet, and update your VPC Route Tables. 
* Configure the firewall policy by accessing the Amazon VPC console navigation pane under Network Firewall. Choose Firewall policies and add any desired configurations. 

### Creates and Maintains Records of System Storage Activities 

This criteria, located under the “Processing Integrity” criteria, checks if logging is implemented in your cloud environment.  

By logging all user activities, you can: 

* Observe [misconfigurations](https://cyscale.com/blog/common-cloud-misconfigurations-how-to-avoid-them/), 
* Identify any suspicious behavior, 
* Detect malicious attacks. 

To enable logging in your AWS infrastructure, you can use Amazon CloudTrail. This solution tracks all actions performed in your cloud environment.  

Amazon CloudTrail can be used together with Amazon CloudWatch to extend monitoring to applications and cloud assets and to analyze their health. 

**Amazon CloudTrail is enabled by default in your AWS account.** 

### Protects Encryption Keys 

[Encryption](https://cyscale.com/blog/types-of-encryption/) is essential to ensure confidentiality of data. In the “Confidentiality” section of SOC 2, we have criteria for both encryption and key management.  

If key management is neglected, then encryption becomes useless. Keys must be generated, stored, used and destroyed safely to protect your data. 

Amazon offers a complete solution for proper key management. AWS KMS (AWS Key Management System) helps you properly deal with all of the processes in a cryptographic key’s lifecycle. 

According to AWS, this service can be used:  

* Through the AWS Management Console,  
* Using the AWS KMS APIs. 

### Finally, check your implementations 

Besides the criteria presented in this article, there are many more. 

Although so many requirements can quickly become overwhelming, Cyscale can help you easily keep track of what you’ve correctly implemented and what requires your attention on our [SOC 2](https://cyscale.com/blog/soc-2-vs-ISO-27001-SaaS/) compliance page. 

Many technical controls in Cyscale can be mapped to SOC 2 criteria to provide visibility in your cloud environment and prove compliance. 

A few examples of controls that apply to the presented requirements (and more) are: 

* Ensure all users have MFA configured. 
* Ensure CloudTrail is enabled in all regions. 
* Ensure no security groups allow ingress from 0.0.0.0/0 to port 22 (SSH). 

B﻿ook a demo now to use these controls and many more and assess your cloud security posture in AWS.

<div class="pb-12 pt-6 lg:pb-12 lg:pt-6 flex flex-col items-center"><a href="/request-demo/"><button class="bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind" style="padding: 0.625rem 2.5rem;">BOOK A DEMO</button></a></div>

<!--EndFragment-->