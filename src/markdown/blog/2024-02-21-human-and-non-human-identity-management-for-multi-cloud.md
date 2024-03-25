---
templateKey: blog-post
title: Human and Non-Human Identity Management for Multi-Cloud
seoTitle: Human and Non-Human Identity Management for Multi-Cloud
authors: Ovidiu Cical
permalink: human-non-human-identity-management-multi-cloud
categories:
  - IAM
date: 2024-02-21T14:45:48.245Z
description: "To effectively use the cloud, you need to be able to trust
  non-human identities like service accounts used by applications, and
  third-parties. "
seoDescription: "To effectively use the cloud, you need to be able to trust
  non-human identities like service accounts used by applications, and
  third-parties. "
featuredpost: true
featuredimage: /img/human-non-human-identity-cloud.png
tableOfContents: false
---
So far, Cyscale has focused on making it easy to see **who** (colleagues, collaborators, guests, fellow humans) has access to your cloud environments. Now you can also see **what**.  

## Why is non-human identity management important? 

Nearly 90% of organizations routinely provide access privileges to non-humans, and 50% admit they have granted inappropriate access to non-humans*. But a similar number (54%) also revealed that inappropriate access granted to a non-employee or non-human has resulted in severe incidents, such as lost control of resources, data loss, and direct security breaches.    

## Non-humans run the cloud 

It’s become widely accepted that to effectively use the cloud, you need to trust non-human identities with access to resources and data in your environment. Such identities include service accounts used by applications, services, and third-party vendors. 

But we frequently encounter environments among our own customer base with a non-human identity attached to a machine that has high or inappropriate privileges, is publicly accessible from the internet, and has a vulnerability.  

Any attacker capable of exploiting that identity will be able to move laterally in the environment. 



## But humans use the cloud 

While it’s well established that [IAM (Identity and Access Management) plays an important role in a company’s security and compliance posture](https://cyscale.com/products/ciem/), and most organizations have specific policies in place so that the process of handling identities and access is well documented and manageable, the life of a CISO, CTO, or security analyst gets more difficult if they need to go into more depth. 

Let’s say you have an employee that’s leaving in a month, and you need to see a list of all the resources they have access to? Or you discover some unusual logs on one of your VMs and need to know who has access to it? These questions are not so easy to answer from your AWS, Azure, or Google Cloud console. 

<div class='grid grid-cols-12 mt-12 gap-2'>
  <div class='col-span-12 lg:col-span-6'>
    <img src="/img/inventory-permissions.png" alt="Inventory display of assets accessible to user" class="rounded-md" style="width: 100%; margin: 0;" />
  </div>
  <div class='col-span-12 lg:col-span-6'>
    <img src="/img/inventory-accessible.png" alt="Inventory view of database access control" class="rounded-md" style="width: 100%; margin: 0;" />
  </div>
</div>

<div class='mt-16 rounded-tl-2xl rounded-b-2xl grid grid-cols-12 gap-4 bg-zircon py-8 px-4 lg:py-4' style='borderTopRightRadius: 3rem'>
    <div class='col-span-12 lg:col-span-2'>
        <div class='flex justify-center'>
            <img src='/img/cloud-icon-widget.svg' alt='' id='img-text-button' />
        </div>
    </div>
    <div class='col-span-12 lg:col-span-6 flex items-center justify-center'>
         <p class='font-montserrat font-bold' id="paragraph-text-button">
            See How Cyscale Helps Protect <span id="font-gradient">Human and Non-Human</span> Identities
        </p>
    </div>
    <div class='col-span-12 lg:col-span-4 flex justify-center items-center'>
        <a class='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind' href='https://cyscale.com/products/ciem/'>
            <span style='padding: 0.625rem 2.5rem' class='text-white block'>
                Show me
            </span>
        </a>
    </div>
</div>

## Cloud identity management is hard 

Popular security tools offered by the public cloud providers suffer from two main problems:  

**1a)** They don’t really support comprehensive identity and access management functionality at all. They display users, roles, policies other IAM related entities, up to Permissions but that’s where they draw the line. The result is that you can’t state “User X has access to Resources A, B and C”.  

**1b)** Let’s not even get started with non-human identities where a resource can use a service identity to access another resource.  

 **2)** They’re not meant specifically for this use case and require mastering some tools and languages beforehand such as Azure Resource Graph.  

This particular challenge is compounded by multi-cloud environments because the tools and the skills to use them, are not cross compatible.  

Let’s say you’ve decided to go for the in-house tools from cloud providers and that you have an identity provider that helps you provision your users, groups and roles in your AWS and Azure environments. At this point, the users will receive access to both clouds.  

So, this means that managing identities will require two distinct sets of skills: both familiarity with the AWS IAM Access Analyzer and skills for easily getting from policies to resources AND knowledge of the query language used by Azure for exploring its Resource Graph.  

Of course, there’s the alternative of using CLI tools to perform this analysis. There are even some great open-source tools to help you achieve the goal. However, this approach has its own limitations, like any CLI tool, and, if you’d like to go more in depth and see how the accessibility of a resource can impact other parts of the infrastructure, your journey stops there. 

## Managing human and non-human identities in Cyscale 

Our updated Identity dashboard now gives you an overview of the identities of your workloads across compute services (VMs, serverless, containers) and deep dive options to better understand the permissions, both human and non-human, when necessary, so you can now see: 

* A simplified view for each asset in your inventory, which tells you: 
* Who / What can access that asset  
* What other resources can be accessed by that asset as a machine or non-human identity 

<img src="/img/identity-dashboard-service-accs.png" alt="The Cyscale Identity dashboard" title="" class=" blog-image-shadow " style="width:auto;height:auto;"/>

\*﻿\*SailPoint: <https://www.sailpoint.com/blog/survey-finds-non-employee-and-non-human-identities-leading-to-major-security-issues/>