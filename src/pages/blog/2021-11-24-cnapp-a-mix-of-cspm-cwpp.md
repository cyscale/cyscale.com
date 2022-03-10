---
templateKey: blog-post
title: "CNAPP: A mix of CSPM & CWPP"
authors: Virginia Mitea
permalink: cnapp-a-mix-of-cspm-cwpp
category: Research
date: 2021-11-24T15:35:49.333Z
description: >-
  Gartner has defined a new category that is focused on securing cloud services
  and cloud-native applications, the so-called CNAPP- Cloud-Native Application
  Protection Platform.


  According to Gartner, “CNAPP is an integrated set of security and compliance capabilities designed to help secure and protect cloud-native applications across development and production.”


  The legitimate question would be: Why do I need another security tool?
featuredpost: true
featuredimage: /img/cspm-cwpp.png
---
<!--StartFragment-->

Even before the Covid-19 pandemic, it was clear that more and more companies were adopting a cloud-first strategy.

Over the last 2 years, the number of companies using the services of at least one public cloud provider continued to grow.

As a result, Gartner predicted that by the end of 2021 “public cloud deployments will outnumber private data center workloads”.

Once again, security specialists insist that cloud security is a complex subject that should be considered a high priority.

There already are a lot of tools to take into consideration when you're concerned with cloud security. Up until now, cloud professionals were talking about three main security solutions: [Cloud Security Posture Management (CSPM)](https://cyscale.com/blog/cloud-security-posture-management-cspm-guide/), Cloud Workload Protection Platform (CWPP), and Cloud Access Security Broker (CASB).

But recently, Gartner has defined a new category that is focused on securing cloud services and cloud-native applications, the so-called CNAPP- Cloud-Native Application Protection Platform.

According to Gartner, “CNAPP is an integrated set of security and compliance capabilities designed to help secure and protect cloud-native applications across development and production.”

The legitimate question would be: ***Why do I need another security tool?***

Well, the idea is to focus not only on your cloud infrastructure's security configurations but also on your applications that run in the cloud.

You could argue that your CWPP or your CSPM is already doing something about this - and you would be right!

If you dig deeper, CNAPP is basically a mix of 2 separate solutions:  Cloud Security Posture Management (CSPM) & Cloud Workload Protection Platform (CWPP)

What is CSPM?

[Cloud Security Posture Management solutions (CSPM)](https://cyscale.com/products/cloud-security-posture-management/) have as main purpose the [detection of misconfigurations](https://cyscale.com/use-cases/cloud-misconfigurations/). They will continuously monitor the cloud environment in order to provide visibility across multi-cloud and alert the company about compliance drift or risky behavior. CSPMs focus on cloud infrastructure.

What is CWPP?

Cloud Workload Protection Platforms (CWPPs) are designed to protect the workloads deployed in the cloud. They will perform vulnerability assessments and handle the security of the applications. Based on assessment results, you can implement security controls or you can remediate the threats. CWPPs focus on the applications running in the cloud.

## **Which is better? CNAPP vs CSPM+CWPP**

The increasing features overlap between these two solutions will make this "merge" inevitable.

 You can still use separate tools, or you can try a CNAPP, that's entirely up to you.

#### ***Advantages of using CNAPP:***

* better visibility and control of cloud-native application risk (when using separate tools, the identification and remediation actions can be fragmented, and not as efficient as having it all in one tool)
* better collaboration for development and operations teams
* simpler CI/CD pipelines (reduced complexity and cost since fewer tools are involved)
* it scans all the source code, containers, VM images, IaC scripts, API

#### ***Advantages of using separate tools:***

The most important one is the *maturity of the tools*.

You need to consider that Gartner expects this new category to have a high impact, but also predicts that it will take five to ten years before CNAPP is established in regular use.

Since this is a new category of products, the market for CNAPP has just started to evolve and vendors need time to integrate all these capabilities.

CWPP vendors have started to add new features capabilities, including IaC scanning.

Some CSPMs have cutting edge-technology in place and can already give you some of the features promised by the CNAPP.

This is the case of Cyscale Cloud Platform, the solution that offers advanced visibility, but more importantly, gives you context so you can better prioritize.\
The [Security Knowledge Graph](https://cyscale.com/products/security-knowledge-graph/)™ built within the platform may reveal, for example, that one of the resources usually reported to have a high-security risk, is not as vulnerable as it seems. (Let's think about a VM that has unencrypted disks attached, but is not being used in a production environment, or is not externally accessible from the internet).\
This type of approach can make you realize that you need a more advanced risk analysis and a look beyond the classic list of logs, where the vulnerable components are reported without taking into consideration the bigger picture.

Regardless of your choice of tool, just remember to give security posture the importance it deserves.

<!--EndFragment-->

<!--StartFragment-->

Photo by Markus Spiske

<!--EndFragment-->