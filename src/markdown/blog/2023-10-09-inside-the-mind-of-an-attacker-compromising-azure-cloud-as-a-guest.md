---
templateKey: blog-post
title: "Inside the Mind of an Attacker: Compromising Azure Cloud as a Guest"
seoTitle: "Inside the Mind of an Attacker: Compromising Azure Cloud as a Guest"
authors: Sabrina Lupșan
permalink: compromising-azure-cloud-as-guest
categories:
  - IAM
  - CSPM
  - Misconfigurations
date: 2023-10-09T12:24:24.858Z
description: >-
  Identity and Access Management (IAM) is the first line of defense against
  attackers in the cloud. In the realm of cloud security, IAM represents all of
  the measures and good practices implemented to prevent intruders from
  accessing cloud resources. 


  An organization's cloud environment may be in danger if authentication and authorization are not handled correctly. 


  IAM, coupled with contextual security, is the recipe for success. Understanding the level of access for each user – as well as how that access impacts other assets – is vital. It may not seem like much if a user has read permissions over a storage account, but if that storage account contains sensitive data, such as credentials for another account, then the magnitude of the impact will surpass your initial assessment. 
seoDescription: "Identity and Access Management (IAM) is the first line of
  defense against attackers in the cloud. In the realm of cloud security, IAM
  represents all of the measures and good practices implemented to prevent
  intruders from accessing cloud resources.   An organization's cloud
  environment may be in danger if authentication and authorization are not
  handled correctly.   IAM, coupled with contextual security, is the recipe for
  success. Understanding the level of access for each user – as well as how that
  access impacts other assets – is vital. It may not seem like much if a user
  has read permissions over a storage account, but if that storage account
  contains sensitive data, such as credentials for another account, then the
  magnitude of the impact will surpass your initial assessment. "
featuredpost: true
featuredimage: /img/55_blog-cover.png
tableOfContents: false
tags:
  - CSPM
  - security
---
Identity and Access Management (IAM) is the first line of defense against attackers in the cloud. In the realm of cloud security, IAM represents all of the measures and good practices implemented to prevent intruders from accessing cloud resources. 

An organization's cloud environment may be in danger if authentication and authorization are not handled correctly. 

IAM, coupled with contextual security, is the recipe for success. Understanding the level of access for each user – as well as how that access impacts other assets – is vital. It may not seem like much if a user has read permissions over a storage account, but if that storage account contains sensitive data, such as credentials for another account, then the magnitude of the impact will surpass your initial assessment. 

In this article, I will show you how human mistakes can lead to a complex attack path, where a malicious user gains access to a storage account, compromises a user, and ultimately gains access to a key vault that contains cryptographic keys and secrets used by the company’s apps. 

I’ve chosen a scenario where gross mistakes are made to highlight that you should not underestimate human error and the blast radius it can have.  

## Case Study

Fintech Inc. is a financial technology startup developing a new banking application. A few customers already use the new app to access their banking data in real-time and manage their accounts. Fintech Inc. uses Microsoft Azure to develop and host their app. 

The company must invite an external consultant, Anita, to collaborate in the cloud. Any user is allowed by default to invite guests in Microsoft Entra ID (former Azure Active Directory), so John, a member of the IT department, invites Anita as a guest. 

However, he makes a mistake; because he’s trying to accomplish many things in a short period of time, instead of inviting anita@fintechinc.com, he invites anita@fintech.com. The new guest user accepts the invitation and becomes a guest in Microsoft Entra ID. 

As a guest, the "fake" Anita cannot do much. She can only access some resources that guests can access, she can manage her profile and collaborate with other users in Office 365 apps.  

But, looking closely, she discovers that she is now part of the ITAdmins group. How did that happen?! On a closer look, ITAdmins has a dynamic membership rule that states that all users whose department is "IT" become part of the group. The IT department wanted to make things easy for them and allow all employees in IT to join this group automatically. 



As we dissect these vulnerabilities and missteps, it's vital to also turn our attention towards the realm of **non-human identity management**. Just as human identities can be compromised or mismanaged leading to security breaches, non-human identities, such as automated service accounts, APIs, and machine identities, present their own set of challenges in cloud security. 

These non-human entities often have permissions and access that, if not properly managed, could be exploited in similar or more complex attack vectors. Managing these identities requires specialized strategies to ensure they are as secure as human identities. For a comprehensive understanding of how to manage both human and non-human identities effectively in multi-cloud environments, our in-depth guide on **[non-human identity management](https://cyscale.com/blog/human-non-human-identity-management-multi-cloud/)** offers valuable insights and best practices.

<img src="/img/55_blog-dynamic-membership-rule.png" alt="Dynamic membership rule for ITAdmins group" title="Dynamic membership rule for ITAdmins group" class=" blog-image-shadow " style="width:auto;height:auto;"/>

However, this rule is very broad and opens up the possibility for mistakes. In this case, Anita was assigned the “IT” department, and she immediately joined the ITAdmins group, since Azure checks the attributes for a user whenever they are changed or a new user joins the cloud.  

Upon further investigation, Anita discovers that the ITAdmins group has a very highly privileged role over the “rg-management" resource group – the Contributor role. This role allows Anita to view, modify, and delete any resources within the resource group. Here comes the importance of the Least Privilege Principle – granting users too many permissions can do more harm than good. 

<img src="/img/55_blog-it-admins-contributor-rg-management.png" alt="ITAdmins is Contributor over the rg-management resource group" title="ITAdmins is Contributor over the rg-management resource group" class=" blog-image-shadow " style="width:auto;height:auto;"/>

If we take a look at this resource group, we will see it contains an interesting storage account – “backups”, a database, and a VM. 

We can see this relation in the graph below. Tracing the attack path, we immediately realize how Anita is able to access the cloud assets, from the rg-management resource group through the new role she gained by joining ITAdmins, and therefore compromise them. By looking at context in the cloud, we become aware of the risk imposed by the ITAdmins groups, which has broad permissions over a multitude of important resources. 

<img src="/img/55_blog-first-graph.png" alt="Graph showing the attack path" title="Graph showing the attack path" class=" blog-image-shadow " style="width:auto;height:auto;"/>

The storage account has a "backups" container with a "diskBackup.vhd" file inside. This contains the files and data an ex-employee used before leaving the company. While in a rush, an IT admin has decided to back up the disk and look at it at some other time, later forgetting about it. 

<img src="/img/55_blog-backups-container.png" alt="The contents of the 'backups' container" title="The contents of the 'backups' container" class=" blog-image-shadow " style="width:auto;height:auto;"/>

Upon restoring this file as a computer disk, Anita discovers a set of credentials. She knows she should not log in using those credentials, but she does it anyway – after all, this is not the first questionable action she’s done -, because she is curious.  

The set of credentials – an email and a password – are for a test user that was created in the past to test features of the application, the removal of which was forgotten. The user cannot log in to the portal due to a Conditional Access policy that denies access to the Microsoft Azure Management resource (Portal included).  

<img src="/img/55_blog-access-to-portal-denied.png" alt="Portal access denied for user" title="Portal access denied for user" class=" blog-image-shadow " style="width:auto;height:auto;"/>

Fortunately, Anita can still log in using the credentials – through the CLI. This is a common "bypass" of this barrier, and, fortunately, she's good with command lines, so she can investigate what permissions her new user has. 

She checks her new role assignments in the current subscription using the commandlet *Get-AzRoleAssignment* only to find, among other roles, that she’s a Key Vault Administrator. 

<img src="/img/55_blog-key-vault-administrator-role.png" alt="The new user has the Key Vault Administrator role" title="The new user has the Key Vault Administrator role" class=" blog-image-shadow " style="width:auto;height:auto;"/>

With the Key Vault Administrator role, Anita can [perform all data plane operations](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide?tabs=azure-cli) on the Credentials2 key vault that we can see in the image above, and all objects in it. 

A key vault is a huge discovery for Anita, who can investigate further. Using the commandlet *Get-AzKeyVaultSecret*, Anita can see that there are a few keys and secrets in the key vault. She can now read them, delete them or add new versions of those secrets. 

<img src="/img/55_blog-contents-of-the-key-vault.png" alt="The contents of the Credentials2 Key Vault" title="The contents of the Credentials2 Key Vault" class=" blog-image-shadow " style="width:auto;height:auto;"/>

<img src="/img/55_blog-second-graph.png" alt="The attack path for the new user" title="The attack path for the new user" class=" blog-image-shadow " style="width:auto;height:auto;"/>

Anita can now further discover other assets available on Fintech Inc.’s Azure cloud environment and possibly make use of the secrets stored in the “Credentials2” Key Vault. For example, we know that, as a best practice, [databases are encrypted](https://cyscale.com/blog/best-practices-for-securing-databases/), so a leaked decryption cryptographic key, for example, can lead to total compromise of the company’s data. 

To understand everything that happened here, we need to look at all the bad practices and vulnerabilities that we have uncovered, in chronological order: 

1. Due to being in a rush, an employee invited the wrong person to collaborate in Azure, and no one picked up on it. 
2. The dynamic membership rule for the ITAdmins group is very broad and may accept unintended cases. 
3. The ITAdmins group has a highly privileged role over a resource group with many resources that may contain sensitive information, such as databases, and storage accounts. 
4. A disk backup that can be restored is held unencrypted in a storage account, containing a cleartext password for an active Azure account. 
5. A test user that was intended to be temporary is still active. 
6. A test user has access to a very high-value resource. 

As you can see, each mistake allowed the intruder to advance more and more and compromise additional resources. 

This is why contextual security and proper IAM security are necessary. Contextual security allows cloud professionals to understand what assets are impacted by others, while IAM best practices protect the cloud environment from intruders and represent the first barrier of entry.