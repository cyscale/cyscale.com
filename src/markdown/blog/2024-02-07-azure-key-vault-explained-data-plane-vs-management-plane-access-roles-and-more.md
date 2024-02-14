---
templateKey: blog-post
title: "Azure Key Vault Explained: Data Plane vs. Management Plane, Access Roles
  and More"
seoTitle: "Azure Key Vault Explained: Access Roles and More"
authors: Sabrina Lupșan
permalink: azure-key-vault-explained
categories:
  - Cloud Security
  - Cloud Native Security
  - CNAPP
date: 2024-02-07T11:00:24.062Z
description: "Azure Key Vault securely stores secrets, certificates, and
  cryptographic keys and facilitates their usage by applications and services. "
seoDescription: "Azure Key Vault securely stores secrets, certificates, and
  cryptographic keys and facilitates their usage by applications and services. "
featuredpost: true
featuredimage: /img/azure-key-vault-explained.jpg
tableOfContents: false
tags:
  - security
  - keyvault
  - azure
---
<!--StartFragment-->

Azure Key Vault is a safe place for cloud security professionals who want to keep their secrets… well, secret! And while it’s your safest bet to keep your crypto keys, certificates, and other secrets safe, it can become your worst enemy if you don’t manage it correctly. 

## What is Azure Key Vault? 

Before we begin looking at best practices and security features of Key Vault, let’s go over the basics. 

Azure Key Vault is a Microsoft Azure product that securely stores secrets, certificates, and cryptographic keys and facilitates their usage by applications and services. It also allows users to manage a key's lifecycle, from key generation to destruction. 

*Did you know that if you create a key in a Key Vault, you can never actually see it? This is to safeguard against a human leaking the key. This also applies to imported keys.* 

Azure Key Vault has two service tiers: Standard and Premium. The only difference between them is that Premium allows HSM protection for keys. HSM (Hardware Security Module) provides hardware security on top of the software security supplied by Azure as a fully managed, single tenant, premium safeguard. This is the most stringent security measure that can be applied to crypto keys. 

## Access control management in Azure Key Vault 

Key Vault authorization is done on two different planes: 

* The management plane, which allows users to delete key vaults, update access policies, and see properties, and 
* The data plane, where Key Vault objects can be added, deleted and modified. 

Basically, if you have access to the management plane, you can modify the cloud resource but have no access to the actual data in it. The opposite goes for the data plane, where you can make operations on the secrets, keys, and certificates but cannot, for example, add or remove access policies. You can delete a key, but not the actual key vault. 

Now that we know the difference between the two planes, let's look at some of the most used built-in RBAC roles for Key Vaults. Remember that Role Base Access Controls (RBAC) are used to restrict access to the network based on the user’s role. 

*Authorization for the data plane can be done using Azure Key Vault access policies as well as RBAC roles, but for the management plane, only RBAC roles can be used. Access policies are now considered legacy, and we recommend using RBAC.* 

And while access control policies help you define fine-grained control over objects and resources, this is not the way to go anymore. Policies are not a centralized management solution, meaning that you can’t just see and change permissions in one place; you would have to check each policy to see what the effective permissions of a user are. Moreover, removing permissions can be difficult; the user no longer needs access to keys? Instead of going over one or more policies and unchecking the boxes that give them access, you can just remove their Key Vault Crypto Officer role and you’re done! And that way you don’t risk forgetting about a policy in the process. 

To transition from access policies to RBAC, assess current permissions for all users, change to an RBAC permission model, establish the correct roles for them (and follow the Least Privilege Principle), assign those roles and thoroughly test the setup. And to know which Key Vault Roles to use, keep reading this article! 

## Roles in Azure Key Vault 

Managing access control correctly and using the appropriate role for the job is good practice for cloud security. Following the Least Privilege Principle and only providing the necessary permissions are the keys to minimizing attack surfaces and giving your cloud environment the best chance against attackers. 

Let’s look at some of the available built-in Key Vault roles provided by Microsoft Azure. Remember that these roles only work if you've set Azure RBAC as the permission model (which is recommended). 

1. **Key Vault Reader**: This role provides the user with permission to read metadata of key vaults and their objects (certificates, keys, secrets). 
2. **Key Vault Administrator**: As an Administrator, you have all data plane permissions on all types of objects. 
3. **Key Vault Secrets Officer, Key Vault Certificates Officer, Key Vault Crypto Officer**: These three roles allow users to perform all actions on the type of Key Vault object the role is for, except managing permissions. So, a Key Vault Certificates Officer would have permissions on certificates, and so on. 
4. **Key Vault Secrets User, Key Vault Crypto User**: These roles are similar to the previous one but have fewer permissions. The Secrets user can see the secret contents. The Crypto user can perform cryptographic operations using the keys stored in the Key Vault. *Notice how there’s no Key Vault Certificates User? The Secrets user can also read the secret portion of a certificate with a private key, so apps use this role to retrieve certificates.* 

Keep in mind that users who can manage permissions over the Key Vault can grant themselves data plane permissions by modifying the access policies, so this plane segregation only goes so far. For this reason, I will once again remind you – follow the [Least Privilege Principle](https://cyscale.com/blog/check-for-least-privilege/)! Don't give users more permissions than the bare minimum they need to do their job.  

Excess privileges can be a gateway to disaster.  

## Safety and recovery features in Azure Key Vault 

Azure Key Vault has a very useful feature called **soft-delete**. This allows for Key Vaults and Key Vault objects to remain recoverable for a period of 7 to 90 days (if no period is specified, then the default is set to 90). So, if someone accidentally deletes something, it can still be recovered within that timeframe. 

*Soft-delete is set to Enabled by default for new Key Vaults, and if a Key Vault has soft-delete enabled, it can never be disabled.* By design, Azure Key Vault makes it hard for users to lose their keys! 

Besides soft-delete, there’s also **purge protection**. This is another safety feature that goes beyond soft-delete, by preventing accidental **permanent** deletion. If you want to protect your Azure Key Vault from deletion while it is in its soft-deleted state, it ensures that no-one can delete it before the soft-delete period is over. **Once purge protection is enabled, just like soft-delete, it cannot be disabled.**  

To purge a Key Vault or a Key Vault object, you must have special permissions that are not, by default, given to any role. *The argument –enable-purge-protection can also be set to true to prevent anyone from purging a resource.*  

If this sounds all complicated, we can sum it up easily: once you delete a soft-delete-enabled Key Vault resource, it goes into the soft-delete state for a set period. If you also have purge protection enabled, you can't force delete it before that period is up. It's a layered protection model; you must go through multiple steps to delete a resource, making it as fool-proof as possible.  

In terms of backup, Azure recommends that you only backup secrets that are business critical; due to the nature of Key Vaults, the objects stored in them are already ensured availability: “Key Vault maintains availability in disaster scenarios and will automatically failover requests to a paired region without any intervention from a user”.  

You also can't back up your vault. It can be an annoyance, but you must back up each object and then restore them one by one. To do this, you download a blob containing the secret in an encrypted form, which you can then upload back in your Azure Key Vault. You have to upload it back in the same subscription to be able to use it (and, of course, in Azure Key Vault, not somewhere else). 

## Logging and protection in Azure Key Vault 

Besides following the best practices described in this article, you can also enable **Microsoft Defender for Key Vault**. This enables: 

* threat detection,  
* threat intelligence,  
* anomaly detection, and  
* behavior analytics. 

Also, don't forget about logging! Ensure to log user activity to identify suspicious behavior and obtain an audit trail to identify who accessed Key Vaults and when. 

You can find all of these best practices and more in the Cyscale app, where we highlight misconfigurations and give you step-by-step instructions on configuring Azure Key Vaults correctly and keeping your secrets safe. 

<video width="auto" height="auto" controls="" tabindex="2"><source src="https://d3n52qn7viv754.cloudfront.net/videos/data-security-tour.mp4" type="video/mp4">Your browser does not support the video tag.</video>

<!--EndFragment-->