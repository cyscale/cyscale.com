---
templateKey: blog-post
title: Cyber Safety Review Board Rings Alarm Bells for Shared Responsibility in
  the Cloud
seoTitle: Cyber Safety Review Board Rings Alarm Bells for Shared Responsibility
  in the Cloud
authors: Sabrina Lupșan
permalink: cyber-safety-review-board-on-cloud-security
categories:
  - News
date: 2023-09-07T09:02:20.333Z
description: >-
  The Cyber Safety Review Board (CSRB) of the Department of Homeland Security is
  now embarking on its third cyber vulnerability review since the body was
  created in February 2022. During August, when lots of people were on summer
  vacation, a critical vulnerability in the authentication process for Azure
  Active Directory was exposed.

  As with the two vulnerabilities the CSRB reviewed previously - Log4J in July of 2022 and Lapsus$ also in August of 2023 – the Azure Active Directory vulnerability highlights significant challenges in terms of remediation, due to the sprawling nature of cloud resources and their direct and indirect dependencies on assets that might, or might not, be affected.  
seoDescription: The Cyber Safety Review Board (CSRB) of the Department of
  Homeland Security is now embarking on its third cyber vulnerability review
  since the body was created in February 2022. During August, when lots of
  people were on summer vacation, a critical vulnerability in the authentication
  process for Azure Active Directory was exposed. As with the two
  vulnerabilities the CSRB reviewed previously - Log4J in July of 2022 and
  Lapsus$ also in August of 2023 – the Azure Active Directory vulnerability
  highlights significant challenges in terms of remediation, due to the
  sprawling nature of cloud resources and their direct and indirect dependencies
  on assets that might, or might not, be affected.
featuredpost: true
featuredimage: /img/53_blog-csrb.jpeg
tableOfContents: false
tags:
  - CSPM
  - security
---
The Cyber Safety Review Board (CSRB) of the Department of Homeland Security is now embarking on its third cyber vulnerability review since the body was created in February 2022. During August, when lots of people were on summer vacation, a critical vulnerability in the authentication process for Azure Active Directory was exposed.  

As with the two vulnerabilities the CSRB reviewed previously - Log4J in July of 2022 and Lapsus$ also in August of 2023 – the Azure Active Directory vulnerability highlights significant challenges in terms of remediation, due to the sprawling nature of cloud resources and their direct and indirect dependencies on assets that might, or might not, be affected.  

Even for large organizations with sizeable security teams, navigating a complex dependency graph to understand which resources have dependencies on affected assets is a challenge. For SaaS startups with perhaps a handful of people building out their technology stack, such investigations are impossible.  

As a result, the findings of the CSRB’s reports and its recommendations for best practice build a strong case for contextually aware cloud security practices.  

## How does this affect you (and everyone else)? 

In its most recent announcement, the CSRB made it clear that identity access management (IAM) and authentication are in focus due to being one of the most vulnerable areas in a cloud environment. Identity management vulnerabilities are a key entry point for hackers, and SaaS companies and large enterprises are falling victim repeatedly. From IAM misconfigurations that CTOs and developers miss when setting up and managing their environment, to cloud service provider bugs, this area needs critical attention to ensure safe and secure cloud environments. 

## Did I just say cloud service provider bugs?  

Yes, I did. The incident in question that kicked off this latest review less than two months ago, was the discovery of a critical vulnerability in the authentication process for Azure Active Directory (soon to be renamed Microsoft Entra ID) that was allowing hackers to fabricate authentication tokens. Around 25 organizations including US government entities were impacted by this bug before it was discovered, with attackers stealing mailbox data and obtaining access to sensitive emails.  

For cloud native organizations building their entire business on public cloud platforms, this shared responsibility model is one of the most misunderstood (or ignored) aspects.  

When the terms & conditions say that the cloud is a ‘shared responsibility’, it really is. It’s the cloud service provider’s job to secure the platform or infrastructure, and your job to secure the apps and data, and if one party fails (in this case, the cloud service provider – Microsoft Azure), your company, and potentially your customers and partners, are left exposed. 

The CSRB’s previous two reports on [Log4j](https://www.cisa.gov/resources-tools/resources/csrb-log4j-key-findings-and-recommendations-summary) and [Lapsus$](https://www.cisa.gov/resources-tools/resources/review-attacks-associated-lapsus-and-related-threat-groups-executive-summary) have been very thorough and made some great recommendations that we hope will advance cybersecurity practices, which is why we’re eagerly waiting for CSRB’s report on cloud security. It not only promises a thorough set of recommendations for CISOs, CTOs, and developers, but it will also sound the alarm for cloud service providers.  

Although the Cyber Safety Review Board has no regulatory power, its findings are transmitted to US President Biden and used to develop Executive Orders, so we can expect to see its influence in regulations such as [HIPAA](https://cyscale.com/blog/hipaa-compliance-in-cloud/), and perhaps best practices adopted into SOC 2, ISO 27001, and others. 

## The importance of contextual security 

What’s become evident is that simply informing businesses and cloud providers of the discovery of far-reaching misconfigurations and vulnerabilities is not enough. In fact, the potential workload created by responding to these challenges can be just as dangerous in that it can consume all an organization’s security resources.  

Context is important and [contextual security](https://cyscale.com/blog/security-knowledge-graph-integrations/) is the most significant development in cloud infrastructure security in recent years. Identifying that a VM has the Log4J vulnerability is not the same as saying that an Internet-facing VM has the same vulnerability. Of course, they are both just as vulnerable, but if the first VM is running in a private network, the severity is not as high as for the one accessible from the Internet. The risk is not the same, but the alert will be, and we all know alert fatigue is a very real problem.  

Wrong prioritization, or no prioritization at all, can make all the difference between a secure cloud environment and a breach.