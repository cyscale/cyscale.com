---
templateKey: blog-post
title: Cloud Security Assessment as a Vital Part of the M&A Process
seoTitle: Cloud Security Assessment as a Vital Part of the M&A Process
authors: Sabrina Lupșan
permalink: cloud-security-assessment-vital-part-mergers-acquisitions
categories:
  - Cloud Security
date: 2023-11-30T14:31:42.286Z
description: "Mergers and acquisitions (M&A) that involve the consolidation of
  cloud assets open all parties up to financial, regulatory, and reputational
  risk.  "
seoDescription: Mergers and acquisitions (M&A) that involve the consolidation of
  cloud assets open all parties up to financial, regulatory, and reputational
  risk.
featuredpost: true
featuredimage: /img/mandaprocess.png
tableOfContents: true
---
Although 2023 began with a cautious outlook on M&A activity, analysts predict that the ongoing focus on digital transformation, including innovation around generative AI, is creating dynamic market conditions that could create transformation opportunities for more buoyant merger and acquisitions activity in the near term.   

But mergers and acquisitions (M&A) are complex processes that involve the consolidation of assets, operations, and cultures, and open all parties up to financial, regulatory, and reputational risk.  

From a technology perspective, you not only acquire a company, but also its cybersecurity risks. This is why effective cyber due diligence is essential for all involved, including situations where there will not be a merging or integration of systems, such as with the acquisition of a firm by private equity (PE) for example.  

## Technology: Opportunity or risk? 

In recent years mindsets have shifted, and companies no longer see technology as a cost of doing business as part of the M&A process, but instead as a way of accelerating growth or getting ahead in a market.  

[PWC notes that technology is empowering CEOs to digitalise and transform businesses,](https://www.pwc.com/gx/en/services/deals/trends.html) and AI has changed the game, with a disruptive impact that will create M&A opportunities as both corporates and private equity firms move to acquire new businesses or potentially exit them to monetize returns.  

“We’ve been seeing for some time the growing skills challenge faced by organisations driving acquisition strategies. AI has upped the game here too, with AI talent being one of the scarcest resources to find,” PWC said in its 2023 mid-year update on Global M&A Industry Trends. 

[According to Accenture,](https://www.accenture.com/us-en/insights/strategy/mapping-dna-mergers-acquisitions-value) 74% of CEOs see tech integration in M&A as a growth enabler or source of competitive advantage, but only 21% say tech due diligence was conducted for most of their deals over the past three years (to 2022).  

The obvious issue here becomes even more clear when the same report finds that 96% of CIOs have seen tech due diligence uncover issues or opportunities that made a material impact on the deal.  

## Cybersecurity due diligence in M&A 

It seems to be the case that one aspect that's often overlooked, yet fundamentally critical in the M&A process, is comprehensive planning for the integration of IT systems, including cloud environments.  

It’s possible that lack of education plays a role here, especially in cases where a company is being acquired for its technology by a more established acquirer built on legacy systems looking to keep pace with the market.  

While it may not look complicated from the outside, it is not the case that merging two cloud-based organizations, even when both are using the same cloud provider, will ease the integration.  

The same is true when the merger will create a hybrid environment mixing on-premises infrastructure with the cloud.  

Either way, integrating a new cloud environment can introduce a lot of new misconfigurations and vulnerabilities in both directions. This article intends to explore why the M&A process needs to be addressed as a cloud security challenge just as much, if not more, as an operational challenge. 

## Approaching cybersecurity proactively during M&A  

Ideally, a full cybersecurity audit, including cloud security, will be carried out as part of the due diligence phase of a merger or acquisition. And in cases where there is to be a merging of infrastructure, an audit should again be carried out on day zero of the integration. 

The negative consequences of failing to comprehensively assess your cloud security include: 

* Reputational risks and damage to brand 
* Increased costs down the road, either from the integration itself, lost revenue, or fines for compliance failings or security breaches 
* Failure to comply with existing or newly acquired compliance overheads, regional laws and regulations, resulting in fines or increased spend  
* Overlooked or lost intellectual property, especially relevant due to the boom in AI and associated tech IP 
* Customer impact including increased friction and churn due to broken or problematic systems 

## Common misconceptions when integrating a new cloud environment  

* **We both use the same cloud platform so the integration will be easy:** Unique configurations, architectures, and approaches mean that no two cloud environments are alike, even on the same platform. 
* **We’re mostly on-prem so it’s just adding a new technology:** The cloud is a wildly different environment to anything that has come before and even now there is a significant shortage of experience and expertise in the market. Many security problems arise from a lack of education about how to operate safely in the cloud.  
* **We will audit the cloud environment at a later date:** Due to its public nature, security incidents in the cloud happen in real time. A new zero-day vulnerability in a common software package can be exploited on a mass scale hours after being revealed. A DevOps team spinning up a new instance with a misconfiguration can open your entire infrastructure up to risk. Cloud security posture has to be monitored constantly.  
* **We can rely on our existing toolset or expertise:** The difference from one cloud platform to another is considerable. They even use different terminology. An expert in AWS is not necessarily an expert in Azure, and security tools may not comprehensively cover multiple environments. The introduction of another cloud is the introduction of another risk, and another visibility challenge.  

## Cloud security risks that come with an M&A event: Real examples 

### Data leakage 

When moving data from one cloud service provider to another, mistakes are bound to happen. In one case a company was moving some sensitive files from AWS S3 buckets to an Azure Storage Account.  

During the migration, the team utilized Shared Access Signatures (SAS) in Azure to control access to the stored data. However, due to time constraints and the complexity of the migration process, the team hastily generated SAS tokens with overly broad permissions. 

Instead of applying fine-grained access controls to specific resources or limiting access to authorized personnel, the tokens granted broader read and write permissions across a wider range of containers or blobs within the Azure Storage Account. 

This misconfiguration inadvertently exposed sensitive data, including financial records and proprietary algorithms. 

**Solution:** Even though a migration can be daunting, take it step by step and understand the best practices of cloud resources you’re using so you can make informed decisions. For example, in the case of storage accounts in Azure, a recommendation is to use RBAC (Role-based access control), rather than SAS signatures.  

It’s not enough to understand the technology you’ve been using to date, you also need to have a good grasp of the new cloud provider you’re integrating with as every cloud’s approach is different.  

<br class="" />

<a href="#data">
  <img src="/img/data-dash.png" alt="" title="" class="link" style="width:38.0625rem;height:auto;"/>
</a>

### Attempting integration of incompatible systems 

Harmonizing disparate IT systems, particularly cloud environments, is a formidable challenge in M&A events. Incompatible technologies can create vulnerabilities that malicious actors may exploit.  

In one case two companies performed encryption for PII differently, and when they ultimately had to merge the sensitive data from two different repositories, the data had to be decrypted and then re-encrypted in a unified manner. This opened up the possibility of several risks – what happens to the data while it’s unencrypted? And where is it stored?  

**Solution:** When it comes to sensitive data, such as PII, time is of the essence but it’s more important to do the work properly, so don’t rush to process it and skip steps. 

Minimize the time data is unencrypted. Decrypt the data only when necessary for the merge and re-encrypt it promptly after the process is complete. Moreover, perform the decryption and re-encryption within a secure, controlled environment with restricted access. Use encrypted communication channels and isolated systems to prevent unauthorized access to the unencrypted data. 

<br class="" />

<a href="#data">
  <img src="/img/encryption-dash.png" alt="" title="" class="link" style="width:22.0625rem;height:auto;"/>
    <br>
    See how Cyscale solved this challenge by revealing encryption status for data <br class="hidden lg:block">
    and identifying misconfigurations in data stores
</a>

### Lack of visibility into the extended cloud estate 

One of the big problems that often appears during or after a merger or an acquisition is the lack of visibility into the new or extended cloud estate. When you have to deal with complex infrastructures and unknown environments, security issues can creep in without you noticing. Roles or permissions that should be onboarded or offboarded, redundant VMs that have to be deprovisioned, storage resources that have to be deleted, these are just some examples of cloud resources that may change during an M&A.  

Without great visibility into a changing environment, mistakes are bound to happen. 

**Solution:** To gain much-needed visibility in the cloud, have an active inventory of all your cloud resources and assets, and ideally, the context of how they all interconnect. There are tools which will automatically scan your estate and build an inventory, and some use dashboards to help visualize your cloud infrastructure even across multiple clouds. 

Furthermore, perform access reviews to thoroughly understand the permissions users have and whether they are overprovisioned or even redundant.  

<br class="" />

<a href="#inventory">
    <img src="/img/inventory-dash.png" alt="" title="" class="link" style="width:38.0625rem;height:auto;"/>
    <br>
    See how Cyscale gives you full visibility of your cloud estate by revealing all assets <br class="hidden lg:block">
    and their issues in minutes
</a>

### [](#inventory)Expanding compliance and regulatory challenges 

M&A events can often cross multiple geographic or legal jurisdictions, each with its own set of compliance requirements. Ensuring alignment with these diverse regulatory landscapes can be a daunting task, and failure to meet compliance standards can lead to severe penalties and legal consequences. 

For example, for some companies, data sovereignty is an important aspect. This means that some companies, due to compliance requirements, have to store all data related to a specific geography on that country’s territory. If one organization acquired another to get access to a new market, they must ensure continued compliance with data sovereignty requirements in the event of merging of infrastructure or face possible legal battles and substantial fines.  

Common examples include the applicability of US State Privacy Laws, such as the California Consumer Privacy Act, or other state-specific laws. Or the applicability of EU/UK GDPR and other international laws, all of which highlight the necessity for a comprehensive understanding of regulatory environments and meticulous due diligence in M&A scenarios. 

**Solution:** When an M&A event happens, ensure that you understand the compliance requirements related to all parties and create a detailed plan to minimize any disruption from the merger or integration process.  

In terms of data sovereignty, this means understanding how to store data in the country where it’s supposed to be stored.  

<br class="" />

<a href="#compliance">
    <img src="/img/compliance-dash.png" alt="" title="" class="link" style="width:28.563rem;height:auto;"/>
    <br>
    See how Cyscale helps you comply with dozens of standards out of the box <br class='hidden lg:block'>
    and offers support for custom controls
</a>

## Approaching cloud security in M&A holistically  

Although the considerations set out in this article make an M&A event seem daunting, going into the process with an understanding of what to look out for is half the battle. Proper planning and a comprehensive assessment of your cloud infrastructure(s) during both the due diligence process and day zero of the merge will ensure the process runs smoothly and safely. 

The Cyscale platform is designed to help close these security gaps by providing continuous visibility, security controls, and a single dashboard through which to assess your security posture across multiple clouds, including policies and compliance.  

### Preparing for M&A with a cloud security assessment 

The Cyscale cloud security platform is an agentless cloud-native application protection platform (CNAPP) that can help you assess risk during both the due diligence process and day zero of the merger and integration.  

<strong id="inventory">Inventory</strong>

To start with, a fully automated security assessment across AWS, Azure, Google Cloud, Alibaba, and Kubernetes assets will provide you with comprehensive insights into your partner’s cloud estate, including all vulnerabilities and misconfigurations, in a matter of minutes.  

This will give you a full asset inventory and flag any urgent issues that need to be addressed. The Cyscale Graph View means that misconfigurations are analyzed in context, automatically correlating issues that affect compute, data storage and identity assets, determining their real impact on data security and helping prioritize remediation efforts. 

<strong id="data">Data</strong>

The assessment will also identify all data stores and give you valuable information about encryption status for data at rest, encryption keys, as well as identifying any object containers and databases with issues, such as public access, permissive access policies, or lack of deletion protection.  

This can help ensure your crown jewels are protected, prevent data leakage, and ensure solid foundations for tasks like merging encrypted databases.  

<strong id="compliance">Compliance</strong>

In terms of both planning the integration work and having ongoing proof of compliance, Cyscale has in-app support for dozens of compliance standards, including CIS Cloud Benchmarks, ISO 27001, SOC 2, GDPR (General Data Protection Regulation), HIPAA, PCI DSS (Payment Card Industry Data Security Standard), NIST and more. 

All these compliance standards and controls are analyzed within the Cyscale app, taking into account the unique cloud infrastructures and their related vulnerabilities and misconfigurations.  

This consolidates your reputation as a transparent, data-focused organization that proves to customers, auditors, and regulatory compliance bodies how robustly it protects Personally Identifiable Information (PII). 

An easy-to-understand report can then be used to make the case for additional funding or remediation requirements, for both technical stakeholders such as CTOs, CISOs, and security engineers, as well as more business-minded executives such as CFOs, CEOs or the Board.  

### See how we build an asset inventory in this video

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/OQj8Yo71DvQ?si=C4n-svhf206ClYSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>

<br class="" />

<br class="" />

<a href="https://cyscale.com/request-demo/">
  <img src="/img/assessment-cta.png" alt="" title="" class="link" style="width:25rem;height:12.5rem;"/>
</a>
