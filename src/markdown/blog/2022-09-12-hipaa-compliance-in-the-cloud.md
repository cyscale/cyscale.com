---
templateKey: blog-post
title: "HIPAA Compliance in the Cloud "
seoTitle: "HIPAA Compliance in the Cloud "
authors: Sabrina Lupșan
permalink: hipaa-compliance-in-coud
categories:
  - Compliance
  - CSPM
date: 2022-09-12T05:54:58.803Z
description: >+
  The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a
  United States federal law that defines rules regarding medical records and
  individuals’ personal health information (PHI). There are three rules that
  define how PHI should be stored, accessed, and managed: the privacy rule, the
  security rule, and the breach notification rule. Use Cyscale to achieve
  compliance with HIPAA and other international standards. 

seoDescription: "The Health Insurance Portability and Accountability Act of 1996
  (HIPAA) is a United States federal law that defines rules regarding medical
  records and individuals’ personal health information (PHI). There are three
  rules that define how PHI should be stored, accessed, and managed: the privacy
  rule, the security rule, and the breach notification rule. Use Cyscale to
  achieve compliance with HIPAA and other international standards. "
featuredpost: true
featuredimage: /img/22_blog-cover-photo.png
tags:
  - HIPAA
  - compliance
  - security
---
<!--StartFragment-->

The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a United States federal law that defines rules regarding medical records and individuals’ personal health information (PHI). 

Some examples of PHI are: 

* Some of the [PII](https://cyscale.com/blog/protecting-pii-in-the-cloud/), such as name, address, date of birth, 
* Physical and mental health information of an individual,  
* The medical care an individual has received, 
* Payment information of a patient. 

When referring to the HIPAA compliance section, we can find three rules that define how PHI should be stored, accessed, and managed. According to the [Medicare Learning Network](https://www.cms.gov/Outreach-and-Education/Medicare-Learning-Network-MLN/MLNProducts/Downloads/HIPAAPrivacyandSecurity.pdf), the three rules are: 

* The Privacy Rule, 
* The Security Rule, 
* The Breach Notification Rule. 

We will look at each in detail to understand how compliance with HIPAA can be achieved in the cloud. 

## The Privacy Rule 

The Privacy Rule contains standards that regulate the usage and disclosure of PHI. This section of HIPAA includes a wide range of rules that protect an individual's rights to: 

* Access and obtain digital copies of their medical records, 
* Request corrections regarding their medical records, 
* Restrict access to some of their information. 

The Privacy Rule also contains instructions for the medical provider. A medical professional must: 

1. Keep PHI secure and disable access to it unless the person requesting access is authorized to access it, 
2. Inform patients about their privacy rights and others. 

## The Security Rule 

This rule refers to electronic PHI (ePHI). It requires that ePHI data is stored, accessed, and transferred under the three cybersecurity principles: 

1. Confidentiality,  
2. Availability, 
3. Integrity. 

Let’s understand what these three principles require: 

* **Confidentiality**: Make sure no unauthorized individual can access or read the ePHI. 
* **Availability**: Authorized persons should be able at all times to access the ePHI, as needed. 
* **Integrity**: ePHI should not be altered or deleted by unauthorized entities. 

## The Breach Notification Rule 

The third rule in HIPAA refers to how a medical professional should respond to a PHI breach.  

The parties that should always be notified of a breach are: 

* The affected individual or individuals, and 
* The United States Department of Health and Human Services (HHS). 

## Consequences of HIPAA violations 

Since HIPAA is a federal law, there are two types of penalties that can be applied: 

* Financial penalties, 
* Criminal penalties. 

These repercussions depend on the gravity of the violation. According to [HIPAA Answers](https://www.hipaanswers.com/hipaa-violation-penalties/), there are four violation categories: 

1. A violation that was not known and could not have been realistically avoided. 
2. A violation that the responsible parties should have been aware of but could not have been avoided. 
3. A violation due to negligence, where correction attempts were made to correct it. 
4. A violation due to negligence, with no attempts made to correct it. 

The **financial penalties** are also split into four categories: 

1. Minimum fine of $128 per violation up to $63,973, 
2. Minimum fine of $1,280 per violation up to $63,973, 
3. Minimum fine of $12,794 per violation up to $63,973, 
4. Minimum fine of $63,973 per violation up to $1,919,173. 

**Criminal penalties** are divided into three categories: 

* For reasonable cause or no knowledge of the violation: up to one year in jail, 
* For obtaining PHI under false pretenses: up to five years in jail, 
* For obtaining PHI for personal gain or malicious attempt: up to ten years in jail. 

## HIPAA Compliance In the Cloud: A Checklist 

After we've understood the importance of compliance with HIPAA, let's see the requirements that need to be fulfilled. They are grouped into three categories: 

* Technical Safeguards, 
* Administrative Safeguards, 
* Physical Safeguards.  

Let’s look at them more in detail and understand how Cyscale can help you become compliant with HIPAA. 

### 1. Technical Safeguards 

Technical Safeguards are split into four categories. We will also show you examples of controls in Cyscale to help you understand how easy it is to implement them and streamline the process of becoming compliant. 

* Access control – only authorized entities should access ePHI. 
* Audit control – access to ePHI should be recorded and examined. 
* Integrity – ePHI should not be altered or destroyed by unauthorized individuals. 
* Transmission security – ePHI should be safely transmitted over the network. 

Examples of controls for some of these safeguards are: 

* **Access control:** *Ensure network access rule for storage bucket is not set to publicly accessible* for Alibaba Cloud. 
* **Audit control:** *Ensure that Object-level logging for write events is enabled for S3 bucket* for AWS. 
* **Transmission security:** *Ensure 'Enforce SSL connection' is set to 'ENABLED' for MySQL Database Server* for Azure. 

### 2. Administrative Safeguards 

* **Security Management Process** – analyze potential risks and take protective measures, 
* **Security Personnel** – a security officer should be responsible for security policies and procedures, 
* **Information Access Management** – limit access to PHI to [the minimum necessary](https://cyscale.com/blog/check-for-least-privilege/), 
* **Workforce Training and Management** – employees should receive training in PHI management and be supervised, 
* **Evaluation** – a periodic assessment of security policies should be performed. 

Two examples of controls for the “Information Access Management” Safeguard are: 

* *Ensure IAM policies that allow full "\*:\*" administrative privileges are not created* for AWS 
* *Eliminate use of the "root" user for administrative and daily tasks* for AWS 

### 3. Physical Safeguards 

* **Facility Access and Control** – access to a covered entity's facilities should be limited to authorized personnel, 
* **Workstation and Device Security** – policies and procedures should be implemented to regulate the usage and access to workstations and devices.  

 

Use Cyscale to achieve compliance with HIPAA and other international standards. 

 

<!--EndFragment-->