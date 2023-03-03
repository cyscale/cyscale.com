---
templateKey: blog-post
title: NIST Compliance in the Cloud
seoTitle: NIST Compliance in the Cloud
authors: Sabrina Lupșan
permalink: nist-compliance-in-the-cloud
categories:
  - Compliance
date: 2023-01-11T09:15:32.900Z
description: "NIST (The National Institute of Standards and Technology) is a
  compliance standard that develops best practices and security standards for
  government organizations or contractors. There are three NIST frameworks
  available: NIST Cybersecurity Framework, NIST 800-53, NIST 800-171. Cyscale
  can help you ease the process of becoming NIST compliant. Using our Standards
  page, you can track your progress and speed up the process in terms of your
  cloud-specific needs. "
seoDescription: "NIST (The National Institute of Standards and Technology) is a
  compliance standard that develops best practices and security standards for
  government organizations or contractors. There are three NIST frameworks
  available: NIST Cybersecurity Framework, NIST 800-53, NIST 800-171. Cyscale
  can help you ease the process of becoming NIST compliant. Using our Standards
  page, you can track your progress and speed up the process in terms of your
  cloud-specific needs. "
featuredpost: true
featuredimage: /img/32_blog-cover.png
---
<!--StartFragment-->

The National Institute of Standards and Technology (NIST) is a non-regulatory US government agency that develops best practices and security standards for government organizations or contractors.  

NIST compliance is mandatory for government contractors handling government data. Still, companies outside this range also choose to become NIST compliant due to the excellent reputation and benefits of the standard. 

Three NIST frameworks can be used when establishing NIST compliance: 

* NIST Cybersecurity Framework, 
* NIST 800-53, 
* NIST 800-171. 

Let’s look at them in detail to understand the differences. 

## NIST Cybersecurity Framework 

The NIST Cybersecurity Framework (CSF) gathers best practices and standards to help companies build a robust cybersecurity program and manage risk.  

The framework contains 5 core functions, which contain 23 categories, which in turn are divided into 108 subcategories formulated as outcomes. Organizations can formulate their own controls or use the suggested ones corresponding to NIST SP 800-53.  

The core functions are: 

* Identify, 
* Protect, 
* Detect, 
* Respond, 
* Recovery. 

The **Identify** function focuses on the company’s efforts to assess and understand: 

* Risk, 
* The business environment,  
* Assets, 
* The supply chain, and others. 

Identify is the first step to securing your cloud environment; having a good grasp of your assets and their relations can provide you the visibility you need to secure them and fix misconfigurations properly. 

The **Protect** function introduces requirements regarding: 

* [identity management](https://cyscale.com/blog/iam-services-in-aws-azure-gcp/),  
* access control,  
* data security, and others. 

We can translate to the cloud this function’s scope through the following examples: 

* Assets [encryption](https://cyscale.com/blog/types-of-encryption/), 
* Strong [IAM policies](https://cyscale.com/blog/iam-best-practices-from-aws-azure-gcp/), 
* Compliance with the [Least Privilege Principle](https://cyscale.com/blog/check-for-least-privilege/), and others. 

The third function in the NIST Cybersecurity Framework, **Detect**, refers to the logging and monitoring of processes and events. Suspicious behavior and anomalies can be identified through careful examination of logs. 

The **Respond** function involves incident management and incident response and ensures that the impact of a cybersecurity incident is minimized. 

The last step to ensuring NIST CSF compliance is **Recovery**. Availability is crucial, and incidents that keep systems down can be catastrophic. To fulfill this function in the cloud, one of the solutions is to replicate and back up data in different data centers and regions to safeguard data and maintain high availability in the case of incidents. 

## NIST 800-53 

The NIST Special Publication (SP) 800-53 is a comprehensive framework designed for governmental agencies that implement information security systems, except for those related to national security, where they can be used to complement the national security systems guidelines. 

SP 800-53 has over 1000 security controls, categorized into the following 20 control families: 

1. Access control, 
2. Awareness and training, 
3. Audit and accountability, 
4. Assessment, authorization, and monitoring, 
5. Configuration management, 
6. Contingency planning, 
7. Identification and authentication, 
8. Incident response, 
9. Maintenance, 
10. Media protection, 
11. Physical and environmental protection, 
12. Planning, 
13. Program management, 
14. Personnel security, 
15. [PII](https://cyscale.com/blog/protecting-pii-in-the-cloud/) processing and transparency, 
16. Risk assessment, 
17. System and services acquisition, 
18. System and communications protection, 
19. System and information integrity, 
20. Supply chain risk management. 

For this framework, the following steps are recommended: 

1. **Analyze.** This stage involves understanding what data the company stores and the risk associated with it, as well as possible threats. 
2. **Tailor controls.** This process involves inspecting all of the controls and establishing how each of them applies to your company, as well as adjusting them to fit your company's needs.  
3. **Assess.** A continuous analysis of the efficacy is an essential process. 

For example, the first control family described in NIST SP 800-53, “Access control”, can be comprised of several cloud-specific requirements, such as: 

* Assigning permissions in the cloud at group level with well-defined rules, 
* Using role-based access control (RBAC) and complying with the Least Privilege Principle, 
* Enabling [multi-factor authentication (MFA)](https://cyscale.com/blog/iam-best-practices-from-aws-azure-gcp/#MFA) for all users, and others. 

## NIST 800-171 

The NIST SP 800-171 is a framework designed for non-federal companies that work with federal agencies. This framework is intended to protect controlled unclassified information (CUI). 

CUI is information related to the government that is unclassified, but sensitive. For example, [PII](https://cyscale.com/blog/protecting-pii-in-the-cloud/) and [PHI](https://cyscale.com/blog/hipaa-compliance-in-cloud/) may fall under this category. 

This framework contains 14 out of the 20 categories listed for NIST 800-53 and is less complex than SP 800-53. Many of the 110 controls are best practices and are easier to understand, compared to the 1000 controls existent in NIST SP 800-53. 

## Here’s how we can help 

Choosing which framework is suitable for you and becoming compliant is not an easy task.  

Cyscale can help you ease the process of becoming NIST compliant. Using our Standards page, you can track your progress and speed up the process in terms of your cloud-specific needs. 

<img src="/img/32_blog-standards.png" alt="The NIST Standard in Cyscale" title="The NIST Standard in Cyscale" class=" blog-image-shadow " style="width:auto;height:autorem;"/>

<!--EndFragment-->