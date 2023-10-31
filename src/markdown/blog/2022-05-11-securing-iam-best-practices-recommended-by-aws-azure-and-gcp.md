---
templateKey: blog-post
title: Securing IAM - Best Practices Recommended by AWS, Azure, and Google Cloud
seoTitle: Securing IAM - Best Practices Recommended by AWS, Azure, and Google Cloud
authors: Sabrina Lupșan
permalink: iam-best-practices-from-aws-azure-gcp
categories:
  - CSPM
date: 2022-05-11T06:39:36.105Z
description: We look at best practices recommended by AWS, Azure and Google
  Cloud regarding securing IAM, like enabling MFA, rotating credentials and keys
  regularly, complying to the least privilege principle, implementing logging
  and monitoring, assigning permissions at group level. Examples of controls
  from the Cyscale application are shown.
seoDescription: We look at best practices recommended by AWS, Azure and Google
  Cloud regarding securing IAM, like enabling MFA, rotating credentials and keys
  regularly, complying to the least privilege principle, implementing logging
  and monitoring, assigning permissions at group level. Examples of controls
  from the Cyscale application are shown.
featuredpost: true
featuredimage: /img/securing-iam.webp
tags:
  - IAM
  - CSPM
  - misconfigurations
  - security
---
<!--StartFragment-->

After we've described the [IAM implementations for AWS, Google Cloud, and Azure](https://cyscale.com/blog/iam-services-in-aws-azure-gcp/), let's look at some of the security best practices they recommend and how to check if your cloud environment is implementing them. 

With Cyscale, you can efficiently scan your cloud infrastructure and verify whether it follows the IAM best practices that we're going to describe in this article. 

<div id="MFA">

### Enable Multi-Factor Authentication (MFA) 

Multi-Factor Authentication is a form of authenticating where the user needs to provide at least two different credentials of different types.  

They should be of the following: 

* What you know (example: a password) 
* What you have (example: a smart card) 
* What you are (example: a fingerprint) 

A prevalent scenario of MFA is using a password and a code received on your phone to log in. This example combines "What you know" with "What you have".  

Here are some of the controls implemented in Cyscale that check if MFA is configured for your cloud environment: 

* *Ensure multi-factor authentication (MFA) is enabled for all IAM users that have a console password* for AWS 
* *Ensure that multi-factor authentication is enabled for all privileged users* for Microsoft Azure 
* *Ensure that multi-factor authentication is enabled for all non-privileged users* for Microsoft Azure 

SSO (Single Sign-On) should also be integrated in the authentication scheme to grant access to individual users across multiple environments using just one set of credentials. 

</div>

### Rotate credentials and keys regularly 

This best practice is recommended across all vendors and should be implemented in your cloud infrastructure.  

This method helps minimize the impact if a key or a set of credentials is breached. 

In the case of user credentials, passwords should be changed with new, different ones. 

When rotating keys, the old ones should be retired, and new keys should be generated. 

We suggest that you rotate your keys and credentials at least every 90 days. 

Some examples of validation controls offered by Cyscale that check if credentials or keys are rotated regularly are: 

* *Ensure access keys are rotated every 90 days or less* for AWS (Amazon Web Services) 
* *Ensure API keys are rotated every 90 days* for Google Cloud
* *Ensure IAM password policy expires passwords within 90 days or less* for AWS 

Moreover, a strong password policy should be implemented to prevent individuals from using weak passwords. 

### Comply with The Principle of Least Privilege 

Conforming to The Principle of Lease Privilege is another essential best practice instilled in cloud security and recommended by the vendors we've discussed.  

In order to comply with this concept, you need to restrict user access to the least privileged access and eliminate all administrator and root user accounts that are not strictly necessary.  

AWS recommends that you start setting up your policies with a minimum of possible permissions and add more on the go, if necessary, to correctly manage access control.  

Make sure you're not missing anything when implementing the concept of least privilege by using controls offered by Cyscale that detect misconfigurations, like the ones below: 

* *Ensure that ServiceAccount has no Admin privileges* for Google Cloud
* *Eliminate use of the "root" user for administrative and daily tasks* for AWS 

### Assign permissions at group level  

Another best practice we recommend to ensure IAM Cloud Security is managing specific permissions at group level and not at the user level. 

Whenever you're adding a new user or trying to manage multiple users, assign them to a group with very well-defined rules and privileges. 

Here are some controls from Cyscale that check if you're implementing this IAM security best practice: 

* *Ensure IAM Users receive permissions only through Groups* for AWS Cloud 
* *Ensure IAM Policies are attached only to groups or roles* for AWS Cloud 

### Implement logging and monitoring 

AWS, Google Cloud, and Azure recommend that you implement logging and monitoring for your cloud environment. All three vendors provide these features.  

For AWS IAM, you can use one of the following IAM services: 

* AWS CloudTrail 
* Amazon CloudFront 
* Amazon CloudWatch 
* AWS Config 
* Amazon S3 

Google Cloud supplies Cloud Audit Logs, a service that audits your IAM policy, access to cloud service account keys, and other components of Google Cloud. 

For Azure, you can use Azure AD activity logs which can be supplemented by Azure Monitor logs to alert you on significant events. 

Examples of controls across all three cloud providers can be seen below: 

* *Ensure CloudTrail trails are integrated with CloudWatch Logs* for AWS 
* *Ensure that Diagnostic Logs are enabled for all services which support it* for Microsoft Azure 
* *Ensure that Cloud Audit Logging is configured properly across all services and all users from a project* for Google Cloud

Identity and Access Management is a crucial component of the cloud and should be adequately secured to prevent data breaches and other cybersecurity incidents. Reduce the attack surface by eliminating any vulnerabilities in the authentication process and keeping hackers away.

Use Cyscale to identify any [misconfigurations](https://cyscale.com/blog/common-cloud-misconfigurations-how-to-avoid-them/) or gaps in your cloud infrastructure and secure it with our over 400 controls. 

In the following article, we will look at [IAM best practices](https://cyscale.com/blog/iam-best-practices-identity/) described by these vendors and how to check if your cloud infrastructure is implementing them correctly.



<!--EndFragment-->