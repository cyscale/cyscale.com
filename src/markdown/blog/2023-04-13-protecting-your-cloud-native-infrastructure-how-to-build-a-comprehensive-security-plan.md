---
templateKey: blog-post
title: "Cloud-Native Infrastructure: How to Build a Comprehensive Security Plan"
seoTitle: "Cloud-Native Infrastructure: How to Build a Comprehensive Security Plan"
authors: Sabrina Lupșan
permalink: cloud-native-infrastructure
categories:
  - CSPM
date: 2023-04-13T11:40:40.049Z
description: >-
  As more organizations adopt a cloud-native approach to support their business
  operations, security may sometimes be left out of their initial plans.
  Moreover, a cloud-native infrastructure requires a different methodology in
  terms of securing it, since it has unique characteristics such as
  microservices, containers, serverless computing, and others.

  To secure your cloud-native infrastructure, ensure you have good visibility over your environment, fix all findings and reach a robust cloud security posture, and continuously monitor your infrastructure.
seoDescription: As more organizations adopt a cloud-native approach to support
  their business operations, security may sometimes be left out of their initial
  plans. Moreover, a cloud-native infrastructure requires a different
  methodology in terms of securing it, since it has unique characteristics such
  as microservices, containers, serverless computing, and others. To secure your
  cloud-native infrastructure, ensure you have good visibility over your
  environment, fix all findings and reach a robust cloud security posture, and
  continuously monitor your infrastructure.
featuredpost: true
featuredimage: /img/blog_38-cover.webp
tags:
  - security
  - cloud-native
---
As more organizations adopt a cloud-native approach to support their business operations, security may sometimes be left out of their initial plans. Moreover, a [cloud-native infrastructure](https://cyscale.com/blog/cloud-native-security-guide/) requires a different methodology in terms of securing it, since it has unique characteristics such as: 

* A microservices architecture, 
* Containers, 
* Serverless computing, and others. 

These differences pose new security challenges, and in this article we will look at best practices for securing cloud-native environments across multiple cloud providers and how to remediate any cybersecurity drifts. 

## Understanding your cloud-native infrastructure 

The first step to building a comprehensive security plan is understanding every side of your cloud computing environment. This means that visibility is the first aspect we need to talk about.  

Visibility is the foundation on which security is built. Without visibility into your infrastructure, you cannot effectively secure your cloud apps, monitor for threats, detect anomalies, or respond to incidents. 

For example, with microservices and containers, it can be challenging to maintain visibility, as these components are constantly changing and evolving. 

To achieve visibility, you need to establish an inventory of all cloud resources, understand their relationships and how they are situated in relation to the Internet, as well as continuously monitor them to understand normal behavior. At the end of the article, we explain how this tedious process can be resolved very efficiently. 

## Assessing your infrastructure 

After gaining visibility into your infrastructure, it’s time to thoroughly check your resources for misconfigurations and vulnerabilities.  

We’ve comprised a list of common misconfigurations in cloud-native environments: 

### 1. Incorrect container configurations 

This is a broad category that includes: 

* overly permissive container privileges,  
* unpatched vulnerabilities,  
* poor access control, and others. 

Running containers with excessive permissions, such as root, can lead to compromising the entire VM (virtual machine) if the container is escaped. This misconfiguration is common because, by running a container as root, the administrator does not have to input their password for privileged actions. 

Failing to update and patch containers and their underlying operating systems can lead to critical attacks that expose your cloud infrastructure. 

Poor access control can result in unauthorized access to sensitive data, such as passwords and encryption keys, as well as privilege escalation risks. Privilege escalation occurs when an attacker gains access to a low-privileged user and pivots to a higher-privileged user, possibly obtaining access to more resources and further attack paths. 

### 2. Missing or inadequate encryption 

Encryption is a must-have in your cloud security plan for application development. Protect data in transit and at rest by encrypting it with industry-recommended cryptographic algorithms and by having a robust key management system for your cloud-native applications. Read more about encryption best practices [here](https://cyscale.com/blog/types-of-encryption/). 

### 3. Unsecured storage resources 

Unencrypted storage volumes, misconfigured database permissions, buckets with public access enabled… there are many storage resources, and it's easy to lose track of them and their configurations. It's enough to allow public access to one cloud asset to compromise your entire environment if, for example, you're storing keys there.  

Secure your storage resources by: 

* blocking public access to buckets using access lists and policies, 
* performing consistent backups and ensuring that those backups are stored in different geographical areas, 
* placing your databases in Virtual Private Clouds (VPCs) and only allowing whitelisted IPs to connect to databases, and many others. 

We have a [whitepaper about cloud storage misconfigurations](https://cyscale.com/whitepaper/cloud-storage-misconfigurations/) that goes into great detail on how to protect them. 

### 4. Improper network security 

Network security is a critical aspect of cloud-native security, as it helps to ensure that network traffic is appropriately filtered and secured. One of the key features of network security is Network Security Groups (NSGs).  

NSGs are virtual firewalls that allow you to filter inbound and outbound traffic to and from your resources. They can be used to: 

* restrict access to specific ports and protocols, such as blocking access to SSH, 
* blocking traffic originating from certain IPs, 
* monitoring traffic to detect suspicious activity. 

## Drawing conclusions and building an efficient plan 

It’s easy to fall short when securing your cloud environment; we know how difficult it is to obtain contextual visibility, check all of your resources, and implement remediation as fast as possible. But we've got you covered. 

If you have a robust security posture, DevOps teams can streamline the software development lifecycle of native apps and shift their attention to important aspects. 

These are the steps to secure your cloud-native infrastructure: 

* ensure you have good visibility over your environment, 
* fix all findings and reach a robust cloud security posture, 
* continuously monitor your infrastructure. 

Using the Cyscale cloud platform, you have access to several powerful dashboards that enable you to see, in real-time, your assets, their relationships, misconfigurations, as well as existing accounts and IAM permissions. Gain complete visibility using: 

* A general dashboard, with an overall view of the company’s cloud environments, as well as an asset inventory, 
* A [Data Security Dashboard](https://cyscale.com/blog/data-security-dashboard/), which delivers a comprehensive view over data at rest storage assets and keys, using DSPM (Data Security Posture Management) capabilities, 
* [An Identity Dashboard](https://cyscale.com/blog/check-for-least-privilege/), that helps users understand the impact of IAM permissions. 

Besides these dashboards, you have access to 400+ controls across multiple public cloud service providers such as AWS (Amazon Web Services), Microsoft Azure, and Google Cloud that check your entire infrastructure for misconfigurations. On top of this, you get remediation steps that help you adjust your settings in no time, even if you’re using multi-cloud workloads.
