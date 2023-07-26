---
templateKey: blog-post
title: PCI-DSS Compliance in the Cloud
seoTitle: PCI-DSS Compliance in the Cloud
authors: Sabrina Lupșan
permalink: pci-dss-compliance-in-cloud
categories:
  - Compliance
date: 2022-07-08T10:37:03.230Z
description: PCI-DSS (Payment Card Industry Data Security Standard) is the
  standard provides the PCI-DSS certification and regulates credit and debit
  card transactions. It has 12 requirements regarding processing, storing and
  transmitting cardholder information. In this article, we describe compliance
  levels and audit requirements, the 12 conditions to obtain the certification
  along with best practices and how can Cyscale can help you become PCI-DSS
  compliant.
seoDescription: PCI-DSS (Payment Card Industry Data Security Standard) is the
  standard provides the PCI-DSS certification and regulates credit and debit
  card transactions. It has 12 requirements regarding processing, storing and
  transmitting cardholder information. In this article, we describe compliance
  levels and audit requirements, the 12 conditions to obtain the certification
  along with best practices and how can Cyscale can help you become PCI-DSS
  compliant.
featuredpost: true
featuredimage: /img/pci-dss-compliance.webp
tags:
  - PCI-DSS
  - compliance
  - security
---
<!--StartFragment-->

PCI-DSS (Payment Card Industry Data Security Standard) is a framework related to information security that regulates credit and debit card transactions performed by a company. 

Implementing the standard provides the [PCI-DSS certification](https://cyscale.com/use-cases/pci-dss/) which enforces best practices and controls to ensure the security of financial transactions and prevent fraud and theft. 

The requirements within PCI-DSS refer to the following credit or debit card actions: 

* processing, 
* storing, 
* transmitting card information. 

All companies managing and storing sensitive customer card information should be PCI-DSS compliant. 

According to the [PCI-DSS Guide](https://www.pcidssguide.com/what-are-the-pci-compliance-fines-and-penalties/), if a company fails to demonstrate compliance and does not implement the failed requirements, the consequences below may follow: 

* fines between $5,000 and $100,000 a month, 
* reputation damage, 
* increased transaction fees, 
* additional legal costs from settlements and judgments, and others. 

## Cloud requirements from PCI-DSS, explained 

PCI-DSS is comprised of twelve main requirements. In the following section, we will explain and map them to Cyscale controls to show you how to achieve a robust [cloud security posture](https://cyscale.com/blog/improve-cloud-security-posture/). Here are the 12 conditions: 

#### 1. Install and maintain a firewall configuration to protect cardholder data. 

Traffic to and from sensitive environments should be heavily filtered and restricted. Some examples of controls in Cyscale that ensure proper implementation are:  

* *Ensure 'Enable connecting to serial ports' is not enabled for VM Instance* for Google Cloud 
* *Ensure no SQL Databases allow ingress 0.0.0.0/0 (ANY IP)* for Microsoft Azure 

#### 2. Do not use vendor-supplied defaults for system passwords and other security parameters. 

The first set of credentials attackers try when attempting to gain access to an account is the default one. You should always change the default passwords immediately after installing a feature.  

Another aspect to look out for is allowing default access configuration on cloud assets. 

Examples of controls that check if you’ve done this for the applications in your infrastructure are: 

* *Do not setup access keys during initial user setup for all IAM users that have a console password* for AWS 
* *Ensure that Cloud Storage buckets are not anonymously or publicly accessible* for Google Cloud 

#### 3. Protect stored cardholder data. 

This requirement covers encryption, hashing, masking of customer’s debit or credit card data, as well as other techniques. It is an essential step because, when implemented correctly, even if an attacker gains access to sensitive data, they will not be able to read it.  

Some examples of controls that ensure you’re not storing unprotected data are: 

* *Ensure all S3 buckets employ encryption-at-rest* for AWS 
* *Ensure that ‘Data encryption’ is set to ‘On’ on a SQL Database* for Azure 

#### 4. Encrypt transmission of cardholder data across open, public networks. 

All cardholder data transmitted over the Internet should be encrypted, to prevent malicious entities from reading it while it is in transit. You can find below examples of controls that ensure this implementation: 

* *Ensure that 'Secure transfer required' is set to 'Enabled'* for Microsoft Azure 
* *Ensure S3 Bucket Policy allows HTTPS requests* for AWS 

#### 5. Protect all systems against malware and regularly update anti-virus software or programs. 

Make sure security [best practices](https://cyscale.com/blog/iam-best-practices-from-aws-azure-gcp/) are enforced in the workplace, and anti-virus software, applications, and operating systems are up to date. 

#### 6. Develop and maintain secure systems and applications. 

The following devices and systems should be continuously secured and patched when dealing with cardholder data and transactions: 

* operating systems on virtual machines, 
* databases, 
* networking devices, 
* applications. 

Examples of controls in Cyscale that ensure this recommendation is attained are: 

* *Ensure Kubernetes web UI / Dashboard is disabled* for Google Cloud 
* *Ensure that App Engine applications enforce HTTPS connections* for Google Cloud 

#### 7. Restrict access to cardholder data by business need to know. 

Make sure only authorized personnel has access to customer’s card information and implement the Least Privilege Principle with the following controls: 

* *Ensure IAM policies that allow full "\*:\*" administrative privileges are not created* for AWS 
* *Ensure that instances are not configured to use the default service account with full access to all Cloud APIs* for Google Cloud 

#### 8. Identify and authenticate access to system components. 

Implement a robust authentication system that does not allow weak password usage and ensures regular rotation of keys and credentials.  

Just two of the many controls Cyscale uses to ensure this requirement is implemented are: 

* *Ensure API keys are rotated every 90 days* for Google Cloud 
* *Ensure IAM password policy requires at least one symbol* for AWS 

#### 9. Restrict physical access to cardholder data. 

Access to databases, computers, servers and other devices should be heavily restricted. Cloud providers are in charge of physical access to these systems. 

Make sure your cloud provider is PCI-DSS compliant and follows this requirement. AWS, Microsoft Azure and Google Cloud are all PCI-DSS compliant and ensure that the physical medium is protected.   

#### 10. Track and monitor all access to network resources and cardholder data. 

Implement logging and monitoring and track the logs in order to identify any suspicious behavior. Some examples of controls that ensure you have logging implemented are: 

* *Ensure AWS Config is enabled in all regions* for AWS 
* *Ensure that 'Auditing' is set to 'On'* for Microsoft Azure 

#### 11. Regularly test security systems and processes. 

Use applications and scanners to find vulnerabilities, malware, and other abnormalities in your systems. In addition, PCI-DSS guidelines recommend performing penetration testing on the infrastructure and applications. 

#### 12. Maintain a policy that addresses information security for all personnel. 

Ensure that your staff is aware of security best practices and is regularly trained.  

Implement strong policies to keep malicious entities away from your company and your customer’s data. 

Some controls that help you implement this requirement are: 

* *Ensure no "root" user account access key exists* for AWS 
* *Ensure that 'Notify about alerts with the following severity' is set to 'High'* for Microsoft Azure 

 

These requirements can be implemented in no time using Cyscale controls and the steps described in them. 

Below, you can see a small part of the PCI-DSS standard page from the Cyscale platform, along with the first two requirements from the list we’ve discussed. 

![The PCI-DSS page in Cyscale](/img/1.webp#shadow "The PCI-DSS page in Cyscale")

We see a description and the controls necessary to ensure compliance by expanding the first requirement. The controls also contain steps on how to implement them. 

![The first requirement in PCI-DSS in Cyscale](/img/2.png#shadow "The first requirement in PCI-DSS in Cyscale")

## Compliance levels 

According to [IT Governance](https://www.itgovernance.eu/blog/en/a-guide-to-the-4-pci-dss-compliance-levels), PCI-DSS has 4 levels of compliance, corresponding to the number of transactions processed by a company.  

The following [compliance](https://cyscale.com/use-cases/cloud-compliance-and-auditing/) levels apply: 

* **Level 1:** over 6 million transactions annually, 
* **Level 2:** between 1 – 6 million transactions annually, 
* **Level 3:** between 20.000 – 1 million transactions annually, 
* **Level 4:** less than 20.000 transactions annually. 

Based on these levels, reporting and auditing differ.  

An audit is required once a year for all levels of PCI-DSS compliance, with different requirements: 

* a level 1 audit is performed by a Qualified Security Assessor (QSA) or Internal Security Assessor (ISA), 
* an audit for levels 2, 3, and 4 can be completed with a Self-Assessment Questionnaire (QSA), 
* for level 1 and level 2 compliance, a Report of Compliance (RoC) must also be submitted to the acquiring bank. 

## Make this process easier for yourself 

Considering the requirements presented in this article, it is not an easy task to become PCI-DSS compliant and obtain the certification. 

Use Cyscale in order to make sure you: 

* are correctly implementing technical requirements, 
* can demonstrate that your company is compliant. 

In Cyscale, you can find over 100 controls that will ensure PCI-DSS compliance and over 400 controls that will help you secure your cloud infrastructure and achieve compliance with other international standards, like GDPR, [ISO 27001, SOC 2](https://cyscale.com/blog/soc-2-vs-ISO-27001-SaaS/), and many others. 

<!--EndFragment-->
