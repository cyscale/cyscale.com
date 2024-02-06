---
templateKey: blog-post
title: High-severity Vulnerabilities Put Kubernetes Secrets at Risk
seoTitle: Critical NGINX Ingress Vulnerabilities Put Kubernetes Secrets at Risk
authors: Sabrina Lupșan
permalink: critical-vulnerabilities-kubernetes-secrets-risk
categories:
  - Cloud Security
date: 2023-11-06T15:15:20.627Z
description: "Three high-severity security vulnerabilities have been disclosed
  in the NGINX Ingress controller for Kubernetes, which could put credentials
  and other secrets at risk of theft by threat actors. "
seoDescription: "Three critical vulnerabilities disclosed in the NGINX Ingress
  controller for Kubernetes could put credentials and other secrets at risk of
  theft. "
featuredpost: true
featuredimage: /img/kubernetes-critical-vulns.png
tableOfContents: false
---
Three high-severity security vulnerabilities have been disclosed in the NGINX Ingress controller for Kubernetes, which could put credentials and other secrets at risk of theft by threat actors. 

## What are the NGINX Ingress controller vulnerabilities? 

On October 27, 2023, three critical vulnerabilities were disclosed and assigned the following CVE numbers: 

* [CVE-2023-5043](https://nvd.nist.gov/vuln/detail/CVE-2023-5043),  
* [CVE-2023-5044](https://nvd.nist.gov/vuln/detail/CVE-2023-5044), and  
* [CVE-2022-4886.](https://nvd.nist.gov/vuln/detail/CVE-2022-4886) 

All three vulnerabilities allow an attacker to execute arbitrary command execution and obtain the ingress-NGINX controller credentials. These vulnerabilities have been assigned a CVSS score of 7.6 (the first two) and 8.6 (the third one), ranked HIGH. 

To better understand how the vulnerabilities can be exploited, what the impact is on your cloud infrastructure and how they can be patched, let’s dive deeper: 

### What is an NGINX Ingress controller? 

The ingress-NGINX controller is a [specialized load balancer](https://www.nginx.com/resources/glossary/kubernetes-ingress-controller/) for Kubernetes and other containerized environments that accepts incoming traffic and routes it to Kubernetes pods. The NGINX Ingress controller is designed to be a central point of entry into a Kubernetes cluster adding a layer of abstraction to reduce routing complexity.  

To put it simply, it’s like a traffic policeman that tells all vehicles on a road where they are and are not allowed to go. 

An ingress-NGINX controller is a specific implementation of an Ingress controller that uses the NGINX web server, which is known for its speed and efficiency.   

### The 3 NGINX Ingress controller vulnerabilities in detail 

**CVE-2023-5043** 

Annotations are key/value pairs that can be attached to Kubernetes objects in order to add additional information to those objects. 

Due to poor input sanitization, the annotation nginx.ingress.kubernetes.io/configuration-snippet can be used to inject command execution. 

The “configuration-snippet” annotation, or metadata, allows users to inject custom configuration code into the NGINX configuration file. 

**CVE-2023-5044** 

This vulnerability occurs for the nginx.ingress.kubernetes.io/permanent-redirect annotation. This annotation allows you to establish a permanent HTTP redirect (Return Code 301) by injecting arbitrary code via the annotation. As a result, the controller will redirect traffic to that path. 

**CVE-2022-4886** 

This issue can be exploited by someone with create or update permissions on ingress API objects.   

The field spec.rules\[].http.paths\[].path allows you to specify where incoming requests to your applications should be routed based on the path in the URL. Since the input is not correctly sanitized, the attacker can specify an internal file as the path, obtaining the credentials of the controller. Thus, by exploiting the poor sanitization, the attacker gains access to sensitive data. 

To prepare for these threats and any upcoming ones, book a free cloud security health assessment with Cyscale.

<a href="https://cyscale.com/cloud-security-risk-assessment/"><img src="/img/assessment-cta.png" alt="" title="" class=" blog-image-shadow " style="width:21.875rem;height:auto;"/></a>

<div class="pb-0 pt-4 lg:pb-0 lg:pt-4 flex flex-col items-center"><a href="https://cyscale.com/cloud-security-risk-assessment/"><button class="bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind" style="padding: 0.625rem 2.5rem;">Start assessment</button></a></div>

### Impact of the NGINX Ingress controller vulnerabilities 

Ingress controllers run with high privileges. By default, having access to the credentials of the ingress controller means you have access to all secrets in the cluster. As you can imagine, the impact of these vulnerabilities left unchecked can create significant risk for your data. So, it’s no surprise that the vulnerabilities described have been assigned such high CVSS scores.  

### Mitigation of the NGINX Ingress controller vulnerabilities 

To protect your cloud environment from these vulnerabilities, follow these steps: 

* for CVE-2023-5043 and CVE-2023-5044, update NGINX to version 1.19 and set the --enable-annotation-validation flag, 
* for CVE-2022-4886, change the pathType attribute of the controller to Exact or Prefix. This will allow only paths that start with “/” and contain alphanumeric characters, “-“, “_”, and additional “/”.  

### The impact of NGINX Ingress controller vulnerabilities on cloud environments  

The next question is, are cloud environments impacted by these vulnerabilities? Yes! Many cloud environments run Kubernetes clusters with NGINX-ingress controllers. For a cloud-native company building software that heavily relies on Kubernetes and employs ingress-controllers, there are significant risks involved. If exploited, these bugs can lead to unauthorized access to sensitive information stored in the cluster. 

Moreover, the ingress controller manages incoming traffic, so the disruption of such a critical component of an infrastructure can cause availability issues leading to downtime and possible financial losses. 

Cyscale customers are already protected, as the [Cyscale cloud security platform](https://cyscale.com/products/cloud-security-posture-management/) surfaces assets affected by the NGINX Ingress controller bugs as long as their vulnerability scanner of choice has been updated.

Y﻿ou can also be protected from these vulnerabilities and any emerging threats, with Cyscale. Book a demo now.

<div class="pb-12 pt-6 lg:pb-12 lg:pt-6 flex flex-col items-center"><a href="/request-demo/"><button class="bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind" style="padding: 0.625rem 2.5rem;">BOOK A DEMO</button></a></div>