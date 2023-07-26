---
templateKey: blog-post
title: Creating a Security Knowledge Graph™ Through Integrations
seoTitle: Creating a Security Knowledge Graph™ Through Integrations
authors: Sabrina Lupșan
permalink: security-knowledge-graph-integrations
categories:
  - CSPM
  - Product
date: 2022-06-13T05:16:07.150Z
description: A knowledge graph is the perfect tool to analyze your cloud
  environment and observe employees' workflows and possible vulnerabilities.
  Integrations that would not be otherwise observed in a security context are
  source control applications like GitHub or Gitlab, project management tools
  like Jira, HR Tools like BambooHR or Workday, endpoint security products, and
  others.
seoDescription: A knowledge graph is the perfect tool to observe your cloud
  environment and observe employees' workflows and possible vulnerabilities.
  Integrations that would not be otherwise observed in a security context are
  source control applications like Github or Gitlab, project management tools
  like Jira, HR Tools like BambooHR or Workday, endpoint security products, and
  others. Manage misconfigurations with a CSPM and improve your cloud security
  posture.
featuredpost: true
featuredimage: /img/1-cover.webp
tags:
  - security
  - CSPM
---
<!--StartFragment-->

When securing a company’s cloud environment, it is easy to overlook applications, users, and connections between them. 

A modern company uses many applications and services for supporting the day-to-day tasks of employees, whether those are: 

* source control applications, 
* project management tools, 
* HR tools, 
* endpoint security products, or others. 

All of these additions in employees’ workflows become a part of the company’s digital footprint and need to be taken into consideration when assessing the robustness and [the cloud security posture](https://cyscale.com/blog/improve-cloud-security-posture/) of your infrastructure. 

A knowledge graph is the perfect tool to accomplish this. So, let's see how you can do it.

## What is the Security Knowledge Graph™? 

[The Cyscale Security Knowledge Graph™](https://cyscale.com/products/security-knowledge-graph/) is a data model based on deep understanding that maps cloud assets and their relationships, as well as information from adjacent data sources to provide context-aware security and deliver a comprehensive security analysis over an organization. 

**Google uses a Knowledge Graph** to power the results of its search engine by keeping a database of billions of records. 

That is how [Google](https://support.google.com/knowledgepanel/answer/9787176?hl=en) is able to answer questions accurately with context. 

The Cyscale Security Knowledge Graph™ is an all-inclusive graph that provides correlations between all of your cloud assets, as well as other apps and systems that may affect cloud security posture, and automatically pinpoints security issues.  

The graph is more than just a way to visualize assets and systems; it uses context to identify relevant vulnerabilities. 

## Why use a Security Knowledge Graph™? 

You could go through sets of configuration best practices and verify them against each cloud resource.  

However, when looked at in isolation, a resource may be misconfigured, but the relations it has with other assets, as well as its position in the network (for example, if it’s in a private network or if it is Internet-facing) may greatly influence the criticality of the situation. 

The Security Knowledge Graph™ is built on top of a graph database that contains nodes and relationships instead of rows and columns to create comprehensive graphs. 

Below, you can see an example of a Security Knowledge Graph™.  

Notice how a very complex system with intricate relationships and hidden vulnerabilities is so much easier to understand and observe when looking at it in a graph. 

![The Cyscale Security Knowledge Graph™](/img/2-general.webp#shadow "The Cyscale Security Knowledge Graph™")

## Are you unsure if you need the Security Knowledge Graph™? 

Let me show you why you do!  

Read the following scenarios to see if you can find your company in any of the situations described.  

### Scenario 1: HR and identity providers 

An employee joins the company and is onboarded using an HR management tool, such as BambooHR or Workday. 

An account is created for the employee using an identity provider such as [Okta](https://cyscale.com/blog/iam-okta-security-best-practices/), through which they receive access to a production [Azure](https://cyscale.com/use-cases/azure-cloud-security/) account, GitHub, and many other sensitive applications that may end up having an effect on the company's cloud infrastructure. 

When the employee leaves the company, they are offboarded from the HR portal, and the human resources department thinks the employee's accounts were completely deprovisioned.  

However, since the Okta administrator did not correctly deprovision his account, the former employee **still has access to production code**. 

![HR and identity providers scenario in a graph](/img/3-scenariu-1.webp#shadow "The Cyscale Security Knowledge Graph™")

### Scenario 2: Misconfigured permissions 

It is not uncommon to have employees with very similar names within the same company. For example, assume user John Smith, a software developer, and Jonathan Smith, an accountant, are both employees at the same company. 

They are mistaken for one another and instead of John, the software developer, it is Jonathan who receives the credentials instead, thus gaining access to a sensitive account.  

While trying to understand the reasoning behind this, Jonathan explores the account and accidentally **deletes a resource from the cloud**. 

![Misconfigured permissions in graph](/img/4-scenariu-2.webp#shadow "The Cyscale Security Knowledge Graph™")

### Scenario 3: False positives in vulnerability scans 

A company uses Tenable or CrowdStrike, endpoint vulnerability scanners.  

A virtual machine running an application with Log4J has the Log4Shell vulnerability. As a result, critical alerts are generated, and the software engineers will prioritize this issue over other current vulnerabilities. 

However, Log4J is only running in a private network, not accessible from the Internet. The issue still needs to be addressed, but the severity is high instead of critical. 

**Instead of securing Internet-facing applications and devices, engineers are distracted by less essential tasks** due to contextless alerts. 

![False positives in vulnerability scans](/img/5-scenariu-3.webp#shadow "The Cyscale Security Knowledge Graph™")

Keep in mind that these are some examples. There are plenty of other situations where contextual awareness is the best way to notice existing vulnerabilities before they become breaches. 

  

[Cyscale](https://cyscale.com/) is leading a continuous effort to integrate as many services and tools as possible and expand the Knowledge Graph to cover a great range of security scenarios. 

We currently integrate with: 

* AWS (Amazon Web Services), 
* Google Cloud, 
* Microsoft Azure, 
* Alibaba Cloud, 
* Okta, and others. 

There are many more integrations to come soon: AWS SSO, GitHub, Azure AD, Kubernetes, GSuite. 

![Integrations in Cyscale](/img/6-tabel.webp#shadow "Integrations in Cyscale")

<!--EndFragment-->
