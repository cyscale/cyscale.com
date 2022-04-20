---
templateKey: blog-post
title: Common Cloud Misconfigurations and How to Avoid Them
seoTitle: Common Cloud Misconfigurations and How to Avoid Them
authors: Sabrina Lupșan
permalink: common-cloud-misconfigurations-how-to-avoid-them
categories:
  - CSPM
date: 2022-04-20T07:01:46.443Z
description: Cloud misconfigurations are the number one reason for security
  breaches. The first step towards securing your environment and improving your
  cloud security posture is acknowledging and knowing how to avoid mistakes.
seoDescription: "5 of the most common cloud misconfigurations are: poor storage
  access configuration, broken access control, unrestricted inbound and outbound
  traffic, missing encryption, disabled or unconfigured logging and monitoring.
  Learn how to avoid them and improve your cloud security posture with Cyscale."
featuredpost: true
featuredimage: /img/common-cloud-misconfigurations.png
tags:
  - CSPM
  - misconfigurations
  - security
---
<!--StartFragment-->

Cloud misconfigurations are the number one reason for security breaches.  

The first step towards securing your environment and improving your cloud security posture is acknowledging and knowing how to avoid mistakes. 

According to [Gartner](https://www.gartner.com/smarterwithgartner/is-the-cloud-secure), 99% of cloud security failures will occur due to human error through 2025. 

5 of the most common [cloud misconfigurations](https://cyscale.com/use-cases/cloud-misconfigurations/) are: 

1. Poor storage access configuration 
2. Broken access control 
3. Unrestricted inbound and outbound traffic 
4. Missing encryption 
5. Disabled or unconfigured logging and monitoring 

This article will explain these misconfigurations and help you work them out.  

We will also give you some examples of the controls Cyscale implements to ensure foolproof configurations for your company’s cloud. 



<br/>



**1. Poor storage access configuration** 

Storage access misconfigurations usually make cloud assets open to the public view. 

We can take as an example Amazon S3 buckets. A significant security vulnerability is making an S3 bucket that contains sensitive data public. This means that everyone on the internet can access your data. 

There are two ways in which public access over a bucket can lead to cybersecurity incidents: 

* Public “READ” access 
* Public “WRITE” access 

Public “READ” access over a company’s buckets creates the risk of a data breach.  

“WRITE” access over a bucket is arguably worse – this means that entities from the internet can infiltrate malware such as 

* backdoors, 
* ransomware, 

or even crowd your bucket with their data in order to obtain free storage. 

<br/>

**Solution** 

Block public access using access lists and policies.  

An access control list (ACL) is a set of rules that limit access to buckets through permissions. It defines the access level an account has over a bucket (for example, READ or WRITE). 

Let’s look at some examples of controls offered by Cyscale that check if you have storage access misconfigurations: 

* *Ensure that S3 Buckets are configured with 'Block public access (bucket settings)' for AWS Cloud* 
* *Ensure network access rule for storage bucket is not set to publicly accessible for Alibaba Cloud* 

<br/>



**2. Broken access control** 

When talking about access control misconfigurations, we refer to overly permissive rights. 

The Principle of Least Privilege states that a user should not be given more permissions than they need to perform their job. 

Badly implemented access control can lead to cybersecurity incidents because: 

* an employee may accidentally misconfigure other assets because they are given the right to, even though they shouldn’t have it, 
* an attacker that gets ahold of an employee’s account may leverage the broad range of permissions they have to further penetrate the infrastructure or gain access to secrets. 

Administrator or root privileges should only be given to those users who absolutely require them. 

<br/>

**Solution** 

Restrict access to the lowest privilege every user needs and eliminate all administrator/root accounts that are not strictly necessary. 

Two examples of the many controls Cyscale has that regulate this issue are: 

* *Ensure that ServiceAccount has no Admin privileges for Google Cloud Platform* 
* *Eliminate use of the "root" user for administrative and daily tasks for AWS Cloud* 

Another best practice to mention is having groups with very well-defined rules and privileges. 

In this way, you can assign a user to the correct group and minimize the risk of making a mistake when adding permissions for a new user or when trying to manage multiple users. 

The implementation of this feature is checked by Cyscale using, for example, the following controls: 

* *Ensure IAM Users receive permissions only through Groups for AWS Cloud* 
* *Ensure RAM policies are attached only to groups or roles for Alibaba Cloud* 

<br/>

**3. Unrestricted inbound and outbound traffic** 

When we talk about cloud networking, we have two types of traffic: 

1. Inbound 
2. Outbound 

Each one involves a different type of risk. 

With inbound traffic, unnecessarily open ports may be a door inside for an attacker. 

On the other hand, outbound unrestricted traffic allows a perpetrator to: 

* exfiltrate data 
* pivot to other assets in your cloud environment (otherwise known as lateral movement) 
* scan your infrastructure and gather data about your company 

<br/>

**Solution** 

Make sure to close or restrict ports that are not necessary. Use access lists to restrict ranges of IPs and ports. 

Let’s look at two of the hundreds of controls implemented in Cyscale that restrict unnecessary traffic from your cloud.  

* *Ensure firewall rule does not allow all traffic for MySQL (port 3306) for Google Cloud Platform* 
* *Ensure firewall rule does not allow all traffic on all ports for Google Cloud Platform* 

<br/>



**4. Missing encryption** 

When we’re considering encryption in the cloud, there are numerous cloud assets we need to have in mind. For example: 

* S3 buckets, 
* virtual machine disks, 
* databases and others. 

Encryption assures confidentiality. If your sensitive data is accidentally exposed or someone gains access to it, strong encryption can still protect it. 

Therefore, it is important to make sure your data is encrypted in the cloud. 

<br/>

**Solution** 

Implement strong encryption and use industry-recommended cryptographic algorithms with strong keys.  

Some examples of controls implemented in Cyscale that check if encryption is correctly assured in your cloud environment are: 

* *Ensure all S3 buckets employ encryption-at-rest for AWS Cloud* 
* *Ensure that 'Data encryption' is set to 'On' on a SQL Database for Microsoft Azure* 
* *Ensure VM disks for critical VMs are encrypted with Customer-Supplied Encryption Keys (CSEK) for Google Cloud Platform* 

<br/>



**5. Disabled or unconfigured logging and monitoring**  

It is extremely important to log actions taken in your cloud environment. This can help you: 

* identify mistakes and other misconfigurations 
* provide accountability for employees’ actions 
* notice suspicious behavior 

Moreover, a key feature would be having targeted alerts alongside logging. This can help you cut through the noise of logs. 

Effectiveness can be increased in this way because you do not have to skim through all of the generated logs, since targeted alerts point out specific problems.

**Solution** 

Implement logging and monitoring with automated, targeted alerts. 

Some of the many controls provided by Cyscale that help you configure logging correctly are: 

* *Ensure that activity log alert exists for the Delete Network Security Group Rule for Microsoft Azure* 
* *Ensure S3 bucket access logging is enabled on the CloudTrail S3 bucket for AWS Cloud* 

<br/>

Now that we’ve looked at the most common cloud misconfigurations and showed you how to identify and fix them, make sure to check out [Cyscale](https://cyscale.com/) to solidify your cloud security posture.  

You will find: 

* controls that check for the misconfigurations presented in this article and more, 
* an explanation of what those misconfigurations are, 
* instructions on how to fix them. 

<!--EndFragment-->