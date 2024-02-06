---
templateKey: blog-post
title: "The Next Era of Security Scoring: CVSS 4.0 vs CVSS 3.1 and What You Need
  to Know"
seoTitle: CVSS 4.0 vs CVSS 3.1 and What You Need to Know
authors: Sabrina Lupșan
permalink: security-scoring-cvss4-vs-cvss3-need-to-know
categories:
  - Cloud Security
date: 2023-11-20T10:55:36.862Z
description: "The Forum of Incident Response and Security Teams (FIRST)
  officially launched CVSS 4 in early November. Let’s see how CVSS 4
  revolutionizes how we look at vulnerabilities and how it compares to CVSS 3.1.
  "
seoDescription: "The Forum of Incident Response and Security Teams (FIRST) has
  launched CVSS 4. See how it compares to CVSS 3.1. "
featuredpost: true
featuredimage: /img/cvss4-vs-cvss3.png
tableOfContents: false
---
For years, security professionals have used the CVSS (Common Vulnerability Scoring System) to rank software vulnerabilities and assess their severity. It is probably the world’s most used scoring system for [vulnerabilities](https://cyscale.com/blog/critical-vulnerabilities-kubernetes-secrets-risk/), and, despite its updates over the years, it has had its shortcomings.  

CVSS 3.0, updated to CVSS 3.1 in 2019, was the most recent and popular version in use for the last eight years. But in early November the Forum of Incident Response and Security Teams (FIRST) [officially launched CVSS 4](https://www.first.org/cvss/v4-0/index.html) This version promises to address many of the shortcomings of its predecessors.  

Let’s see how CVSS 4 revolutionizes how we look at vulnerabilities and why it’s been a long time coming. 

## Timeline of CVSS updates 

* February 2005: CVSS Version 1 appears. This version received much criticism due to its ambiguous metric system 
* June 2007: CVSS version 2 is launched, this time with less inconsistencies. 
* June 2015: CVSS version 3.0 is published, introducing the concept of “Scope” to mark a difference between separate components of a system 
* June 2019: CVSS version 3.1 clarified concepts and introduced new metrics, making the new CVSS score easier to use 
* 2023: CVSS version 4.0 is released.  

Notice how it's been over eight years since CVSS version 3.0 appeared. And while it had a patch four years in with 3.1, it still had problems.   

## The shortcomings of CVSS 3.0 and 3.1 

Lack of granularity was a big challenge for CVSS 3.0 and 3.1. The flat scoring allowed for two vulnerabilities that impacted an IT system differently to be scored the same. For example, a vulnerability that allowed remote code execution without authentication could have been ranked the same as one that required local access with elevated privileges. While both can lead to disaster in a company, the former poses a higher risk due to its potential exploitation.  

[Temporal metrics](https://www.first.org/cvss/v3-1/cvss-v31-specification_r1.pdf) did not have a significant impact on the CVSS score. The three temporal metrics were: 

* Exploit code maturity, which refers to the stage of the exploit (whether it’s “functional” or “proof-of-concept”, for example), 
* Remediation level, which measures the quality of available patches or mitigation (some values included “unavailable”, “workaround”, and “official fix”), 
* Report confidence, or the degree of confidence in the existence of the vulnerability and the supplied technical details, with values like “reasonable” or “unknown”. 

The scoring accuracy was also debatable. Often, vulnerabilities were ranked over 7.0 (High or Critical), which meant people frequently saw high-severity vulnerabilities. And while the impact of such vulnerabilities can’t be denied, desensitization became a problem. An accurate score is more important than marking everything as critical, which meant better metrics were needed.  

## So what’s changed with CVSS 4? 

[According to FIRST](https://www.first.org/cvss/v4-0/index.html) (The Forum of Incident Response and Security Teams), the entity that manages CVSS, version 4.0 has a finer granularity, achieved by introducing new base metrics and values, which allow for a better scoring system: 

* The new Base metric, Attack Requirements (AT), measures the conditions that have to be met for an attack to be possible (basically, how many things need to go wrong before an attack is possible), 
* New Base metric values: User Interaction (UI), which captures if a human is needed (besides the [attacker](https://cyscale.com/blog/compromising-azure-cloud-as-guest/)) to compromise a vulnerable system. The possible values are None (N), Passive (P), and Active (A). For example, if a user needs to give permissions deliberately for the attack to be possible, the User Interaction is Active. 

As we can see, these important metrics allow for a better scoring system for vulnerabilities.  

Exploit Maturity (E) now measures more accurately the likelihood of the vulnerability to be exploited; it is a temporal metric based on the current state of the exploitation techniques. This temporal metric allows the CVSS score to reflect the severity of a vulnerability in real-time. Remediation Level and Report Confidence have been retired, and the new threat metrics are more accessible to follow and understand. 

Environmental metrics allow for more customized and specific vulnerability assessments because they take into consideration the conditions and setups of companies’ environments. This is a “feature” that the previous versions of CVSS lacked. Environmental metrics include: 

* Confidentiality, Integrity, and Availability Requirements (CR, IR, AR), which are metrics that allow companies to assign an adequate importance to each factor. For example, if the integrity of data is of utmost importance, they can rate IR as High and the others as Medium or Low, 
* Safety is a metric that shows the impact on human lives. For example, if a vulnerability were to cause a fintech organization business disruption and financial losses, the Safety of that vulnerability could be assessed as Negligible, in comparison to the same one affecting a healthcare organization where life is put in danger, in which case Catastrophic would be a much more appropriate score. 

Y﻿ou can book a free assessment to detect vulnerabilities in your cloud environment. 

<a href="#"><img src="/img/cve-screen.png" alt="" title="" class=" blog-image-shadow " style="width:31.25rem;height:auto;"/></a>

<div class="pb-12 pt-6 lg:pb-12 lg:pt-6 flex flex-col items-center"><a href="https://cyscale.com/cloud-security-risk-assessment/"><button class="bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind" style="padding: 0.625rem 2.5rem;">Start assessment</button></a></div>

## The relation between CVSS and EPSS: Brothers in arms 

Another scoring system - EPSS (Exploit Prediction Scoring System) - is designed to predict the likelihood of a vulnerability being exploited in the future. It aims to forecast the probability that a vulnerability will be used in a successful attack, helping security teams anticipate and prepare for potential threats.  

In conjunction with CVSS, EPSS can help prioritize the vulnerability remediation efforts. 

EPSS typically considers various factors, including: 

* the vulnerability's exploitability,  
* presence of known exploits,  
* trends in threat actor behavior, and  
* historical data to predict the likelihood of exploitation.  

## Benefits of CVSS 4.0

It is important to understand that CVSS version 4.0 does not apply retroactively. Only the vulnerabilities discovered after the release of CVSS 4.0 will receive the new scoring. 

The new CVSS version 4.0 will bring much sought after value to companies trying to assess their security posture. At Cyscale, we display the CVSS and the EPSS scores to help users better understand their cloud environment. We show the CVSS score of vulnerabilities to highlight which ones should be prioritized. By factoring in the CVSS value, which is now much more relevant, we can help organizations understand risks more accurately and highlight [cloud security infrastructure](https://cyscale.com/blog/cloud-infrastructure-security/) improvements with the highest impact and the lowest level of effort required. 

<img src="/img/cve-screen.png" alt="CVE vulnerability info card in Cyscale" title="" class=" blog-image-shadow " style="width:auto;height:auto;"/>

B﻿ook a demo now to understand how Cyscale can help you identify and fix vulnerabilities in your cloud.

<div class="pb-12 pt-6 lg:pb-12 lg:pt-6 flex flex-col items-center"><a href="/request-demo/"><button class="bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind" style="padding: 0.625rem 2.5rem;">BOOK A DEMO</button></a></div>