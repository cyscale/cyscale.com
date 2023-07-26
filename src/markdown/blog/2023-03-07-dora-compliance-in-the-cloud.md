---
templateKey: blog-post
title: DORA Compliance in the Cloud
seoTitle: DORA Compliance in the Cloud
authors: Sabrina Lupșan
permalink: dora-compliance-in-the-cloud
categories:
  - Compliance
  - News
date: 2023-03-07T10:12:38.643Z
description: >-
  DORA (Digital Operational Resilience Act) is a compliance standard destined
  for financial institutions that regulates operational risk management.
  Companies have less than 2 years left to become DORA compliant and
  successfully manage operational risk.

  The ICT risk management is the chapter that contains technical requirements. Availability, authenticity, integrity, confidentiality, continuous logging and monitoring, physically and logically separated backups and others are among the requirements. 

  Cyscale has started preparing for DORA. Kickstart your compliance journey with us now and ensure a smooth process for DORA compliance. 
seoDescription: "DORA (Digital Operational Resilience Act) is a compliance
  standard destined for financial institutions that regulates operational risk
  management. Companies have less than 2 years left to become DORA compliant and
  successfully manage operational risk. The ICT risk management is the chapter
  that contains technical requirements. Availability, authenticity, integrity,
  confidentiality, continuous logging and monitoring, physically and logically
  separated backups and others are among the requirements.  Cyscale has started
  preparing for DORA. Kickstart your compliance journey with us now and ensure a
  smooth process for DORA compliance. "
featuredpost: true
featuredimage: /img/35_dora-cover.webp
tags:
  - DORA
  - compliance
  - security
---
<!--StartFragment-->

DORA (Digital Operational Resilience Act) is a compliance standard destined for financial institutions that regulates operational risk management.  

DORA was published by the European Parliament in December of 2022 and will come into effect on the 17th of January 2025. This means that **financial companies have less than 2 years left to become compliant with DORA** and successfully manage operational risk. 

The usage of cloud computing is witnessing a steady rise in 2023, and the financial sector is embracing this trend with open arms. 

To understand DORA and its implication for cloud infrastructures in financial companies, let's look at the requirements and how an organization can become compliant with it. 

## Structure 

DORA has nine chapters that include general provisions, ICT risk management, digital operational resilience testing, and others.  

The chapter that contains technical requirements that apply to cloud environments is the second one, **ICT risk management**. In this article, we will focus on that chapter to understand its impact on financial companies. 

Moreover, we will look at examples of security controls from the Cyscale platform that ensure cloud assets meet DORA compliance conditions. 

The ICT risk management chapter has 12 articles, ranging from Article 5 to Article 16. 

### Article 5, Governance and organization 

This article oversees that companies ensure: 

* availability,  
* authenticity,  
* integrity, and  
* confidentiality of data. 

Some controls in Cyscale that ensure data security: 

* *Ensure that multi-factor authentication is enabled for all non-privileged users.* 
* *Ensure all S3 buckets employ encryption-at-rest.* 
* *Ensure object containers don't have permissive access policies.* 

Besides these requirements, roles, responsibilities, budgets, and other operational aspects are regulated in this article.  

### Article 6, ICT risk management framework 

In this article, [DORA requirements](https://www.digital-operational-resilience-act.com/Article_6.html) include any strategies, policies, protocols, and tools that can be used to protect and secure computer software, hardware, servers, as well as physical components. 

Some examples of cloud-related features that can be added to meet this requirement are: 

1. [Bucket policies](https://cyscale.com/blog/s3-bucket-security/) that prevent unwanted read or write access,  
2. Cryptographic protocols that encrypt data to ensure confidentiality,  
3. RDS instances that are not publicly reachable, and others. 

Other conditions are also specified in this article, such as how often implementations should be documented and reviewed, how audits should be performed, and others. 

### Article 7, ICT systems, protocols and tools 

This section in DORA is related to ICT systems, protocols, and tools and how they should be regularly updated, resilient, reliable, and performant enough. 

Frequently updating the applications, operating systems, and technologies cloud security teams use is essential in keeping the cloud secure.  

Cyscale helps you ensure you’re compliant with Article 7. An example of control is *Ensure that the latest OS Patches for all Virtual Machines are applied.* 

### Article 9, Protection and prevention 

Continuous logging and monitoring are an essential component of every cloud security program, and it’s not neglected in DORA. Observing anomalies and identifying suspicious behavior early can save a company’s systems from malicious attacks. 

Besides logging, this article reiterates the importance of availability, [authenticity](https://cyscale.com/blog/iam-services-in-aws-azure-gcp/), integrity, and confidentiality of data in all of its states.  

Moreover, DORA requires that: 

* You minimize the risk of corruption or loss of data. 
* You prevent unauthorized access, 
* You ensure that data is protected from human error or poor administration. 

[The Least Privilege Principle](https://cyscale.com/blog/check-for-least-privilege/) is a starting point to ensure these three conditions. Users should only have the necessary privileges for a limited amount of time. 

### Article 10, Detection 

This article reinforces the importance of logging and monitoring.  

Cyscale provides cloud-focused controls for [AWS, Microsoft Azure, GCP, and Alibaba](https://cyscale.com/use-cases/cloud-data-security/) that check if you have logging enabled in your cloud infrastructure. Some examples of controls are: 

* *Ensure CloudTrail is enabled in all regions* for AWS, 
* *Ensure that Activity Log Alert exists for Create or Update Network Security Group* for Microsoft Azure, 
* *Ensure log metric filter and alerts exist for Cloud Storage IAM permission changes* for GCP, 
* *Ensure Log Service is enabled for Container Service for Kubernetes* for Alibaba. 

### Article 12, Backup policies and procedures, restoration and recovery procedures and methods 

Backups that are logically and physically separated from your systems are required by DORA in the 12th article. 

A solution for backups in the cloud is availability zones. An availability zone is a geographical area where data centers are grouped. Storing your data in multiple availability zones provides redundancy and ensures that assets are protected in the case of disasters. 

If, for example, electrical power was to fail in a large area, availability zones would protect you since they are physically separated.  

Backup your cloud data often to ensure a quick restoration and recovery process in the case of disasters. 

Cyscale helps you check if you have automated backups implemented with controls such as Ensure that Cloud SQL database instances are configured with automated backups. 

### Article 16, Simplified ICT risk management framework 

Some institutions are exempted from articles 5-15: 

* Small and non-interconnected investment firms,  
* Payment institutions exempted pursuant to Directive (EU) 2015/2366, 
* Institutions exempted pursuant to Directive 2013/36/EU in respect of which Member States have decided not to apply the option referred to in Article 2(4) of this Regulation, 
* Electronic money institutions exempted pursuant to Directive 2009/110/EC, 
* Small institutions for occupational retirement provision. 

According to [Article 16](https://www.digital-operational-resilience-act.com/Article_16.html), if your company fits in the previous list, this is the only article you should worry about. It defines the requirements you should follow when complying to DORA. The other articles should be disregarded. 

However, if you are in one of the mentioned categories, the same basic security principles still apply to your organization, such as: 

* [Ensuring availability, authenticity, and integrity of data,](https://cyscale.com/blog/cloud-data-security-guide/) 
* Continuously monitoring systems,  
* Implementing backup and restoration procedures, and others. 

### Article 25, Testing of ICT tools and systems 

To ensure that your cloud infrastructure is secure, it is recommended that you execute various tests, such as: 

* Vulnerability assessments and scans, 
* Network Security assessments,  
* Software scans, and others. 

Cyscale helps you provide proof of compliance with DORA for this article by scanning your system for misconfigurations and pinpointing which cloud assets are at fault.  

Moreover, we provide remediation steps for findings to aid you in quickly solving any security issues your cloud environment may have.  

Cyscale has started preparing for DORA. Kickstart your compliance journey with us now and ensure a smooth process for DORA compliance. 

<!--EndFragment-->
