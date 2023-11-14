---
templateKey: blog-post
title: "IAM Best Practices: Proven Strategies for Bulletproof Identity and
  Access Control"
seoTitle: "IAM Best Practices: Proven Strategies for Bulletproof Identity and
  Access Control"
authors: Sabrina Lupșan
permalink: iam-best-practices-identity
categories:
  - IAM
date: 2023-10-20T13:33:59.643Z
description: "In traditional infrastructures, the first line of defense is the
  network layer. Network administrators in legacy systems invest significant
  effort into securing routers, adding firewalls and ensuring that all network
  devices function correctly. In the cloud, under the shared responsibility
  model, the customer does not deal with physical devices anymore, and security
  is shifted to identity and access control, known as IAM (Identity and Access
  Management), which focuses on the prevention of unauthorized users and devices
  from accessing cloud assets. "
seoDescription: Discover proven strategies for bulletproof access control with
  our in-depth guide on IAM best practices. Ideal for CISOs, DevOps, and Cloud
  Security experts.
featuredpost: true
featuredimage: /img/56_blog-cover-image.png
tableOfContents: true
tags:
  - CSPM
  - security
  - IAM
---
In traditional infrastructures, the first line of defense is the network layer. Network administrators in legacy systems invest significant effort into securing routers, adding firewalls and ensuring that all network devices function correctly. In the cloud, under the shared responsibility model, the customer does not deal with physical devices anymore, and security is shifted to identity and access control, known as [IAM (Identity and Access Management)](https://cyscale.com/blog/iam-best-practices-from-aws-azure-gcp/), which focuses on the prevention of unauthorized users and devices from accessing cloud assets.  

## Why is IAM important? 

If a user with high privileges is compromised in the cloud, a situation can escalate to critical levels quickly leaving vulnerable apps and data exposed; this is why IAM is the first and most important line of defense against attackers.  

## How do you manage IAM in the cloud? 

Nowadays, every employee has multiple accounts for different tools they use, such as HR applications, a CRM or ERP solution, various cloud platforms, and more. We do not live in a world where one person equals one account to manage, meaning the process of securing access is complicated from the start.  

A single developer or other IT employee might need to have access to multiple cloud environments, a version control system, a deployment platform, and a ticket management system, and if you multiply that by 10 or 100 employees the number of accounts or users you need to manage is quickly getting into the hundreds or thousands.  

It’s impossible to manually handle so many accounts and ensure that they’re all properly secured, granted appropriate permissions, and correctly deprovisioned when employees leave.  

### Key IAM processes: The access management lifecycle   

Let’s take a look at the key stages in the access management lifecycle, keeping in mind that these processes need to apply to the individual and all the user accounts they are associated with: 

* **Onboarding:** the first stage involves creating a new user, assigning roles to it and providing permissions over resources. 
* **Role management:** in this stage, roles are already defined and configured for users. New roles and permissions may be added based on needs. 
* **Access review:** these are periodic evaluations of permissions assigned to users, groups, or roles. This stage involves reviewing and validating that individuals or entities have appropriate access levels based on their current roles and responsibilities. 
* **Offboarding:** This stage is crucial and involves removing users from the company's systems, revoking permissions and disabling accounts, thus preventing unauthorized access after an individual leaves the organization. 

### Centralizing IAM processes in the cloud 

In order to handle an impossible workload and ensure due process is followed each and every time, centralization has become key. Let’s look at best practices to secure [IAM in the cloud](https://cyscale.com/blog/iam-services-in-aws-azure-gcp/) throughout the identity lifecycle. 

### SSO (Single Sign-On) 

Often, companies will deploy multiple cloud accounts, and the best practice is to organize these using provider specific mechanisms (ie. Organizations and Folders in AWS, Management Groups in Azure, etc.). Managing identities at cloud account level would quickly become unmanageable and it’s best to keep those at a minimum. 

A cloud company should use an identity provider (whether that’s one built-in into the cloud service provider, such as Azure AD, or an external SSO provider, like [Okta](https://cyscale.com/blog/iam-okta-security-best-practices/)) to manage cloud access, as opposed to having multiple users defined within individual cloud accounts. 

Managing identities in a central location, as well as using SSO, are key elements of ensuring IAM security in the cloud. These are the risks of not using SSO in your company: 

1. **Password fatigue leading to security issues.** Having users input their passwords multiple times a day and for different applications can and probably will lead to them re-using the same password across multiple platforms or using very simple, easy to remember passwords. No-one wants to pull out the password manager 20 times a day. Password fatigue can lead to credentials leak and may put a company in danger.  
2. **Long-term credentials accidentally disclosed or stolen.** Managing cloud access at individual account level implies creating long-term credentials such as passwords or access keys. Through SSO, temporary credentials are used and they expire after the user's session. This helps mitigate the risk of long-term credential exposure, because even if these temporary credentials were to be leaked, they would only be valid for a short period.
3. **It’s overall a better user experience.**  

### MFA (Multi-Factor Authentication) 

This is considered essential. To clarify the point: your employees should not have any accounts without MFA. Whether they’re using a passwordless solution, or still using passwords, MFA should be enabled for everyone, but especially for high-privilege users.  

We can’t labor this point enough. There are so many breaches that could have been prevented with MFA! For example, [Deloitte suffered an incident in 2017](https://www.theguardian.com/business/2017/sep/25/deloitte-hit-by-cyber-attack-revealing-clients-secret-emails) where the company’s clients were affected just because an administrative account did not have MFA. Emails, IP addresses, usernames, passwords, and even health data were at risk. 

In 2014, Home Depot had an estimated 56 million payment cards exposed after a third-party vendor’s stolen login details were used to breach the company. Again, MFA could have prevented such a breach. 

If you’re already using SSO in your company, you should enforce an MFA policy at the identity provider level and better manage this setting for all your users. 

We even demonstrated how MFA can prevent an attack from spreading in an Azure cloud environment, you can read that article [here](https://cyscale.com/blog/compromising-azure-cloud-as-guest/). 

Beware however that threat actors are innovating in this space too. A newish social engineering type approach known as an MFA Fatigue attack sees hackers relentlessly pushing MFA access requests to users’ endpoint devices and combining this with stolen logins to try and wear down a user to the point where they accidently allow access.  

### Get full visibility of users and accounts 

You can’t secure what you can’t see (or you don’t know about). So, it’s impossible to have a good security posture in the cloud without full visibility of all your assets, your people and their respective user accounts, role assignments, groups, and so on. 

This is why a centralized solution for access review is the best approach to managing this challenge: having all permissions, roles, and user accounts visible via one single dashboard is very attractive for security professionals trying to manage access in the cloud. 

In the image below we notice how one single person has permissions over Microsoft Azure, Google Cloud, AWS, GitHub, and other environments. Besides this, we see the effective permissions assigned to each cloud account or application, security information such as the password’s lifetime and whether MFA is activated; this information would normally be spread out across multiple consoles and hard to follow. 

<img src="/img/56_blog-edited-screenshot-1.png" alt="The Cyscale IAM dashboard." title="The Cyscale IAM dashboard." class=" blog-image-shadow " style="width:auto;height:auto;"/>

Using this dashboard, you can review users’ access in a timely manner, without missing important information. You can go through users one by one and review the permissions they have, instead of circling through groups and permissions trying to figure out what users inherit based on their group assignment. 

After configuring your cloud environment and assigning roles and permissions, an IAM dashboard like the one in the image above can help you to identify any gaps left in your cloud user management and should be treated as best practice.  

### Finding and resolving excessive permissions 

Identifying users with excessive permissions can help prevent an attacker from escalating privileges in a cloud environment. You can use PIM (Privileged Identity Management) to assign high privileges for a limited amount of time to users and therefore limit the attack surface.  

Follow the [Least Privilege Principle](https://cyscale.com/blog/check-for-least-privilege/) when configuring users’ roles and permissions to ensure that they do not have access to resources they don’t need to use. 

In the previous section, we looked at an IAM dashboard and identified how many user accounts a single person has. On the right-hand side of the dashboard, we can see a “Highly privileged” tag next to the Azure account.  

<img src="/img/56_blog-edited-screenshot-2.png" alt="A “Highly privileged” tag next to the Azure account." title="A “Highly privileged” tag next to the Azure account." class=" blog-image-shadow " style="width:auto;height:auto;"/>

The user ‘John’ has a Contributor role over the second subscription in Azure, revealing a wide range of permissions. This user has full access to manage all resources, meaning he can modify and delete resources. Alarm bells should start ringing here because if this user were to be compromised, the entire Azure environment would be at risk.

### Best practices for identity and access control  

Effective IAM is crucial in today's cloud security landscape. From getting full visibility over assets, people, user accounts and permissions from the start, to good hygiene at every stage of the identity lifecycle, the guidance above will help you establish a strong strategy.  

Use this checklist below to tick off the key elements that can, together with a centralized identity and access management approach, help improve your cloud security: 

* Deploy an effective onboarding and role management process 
* Review permissions frequently 
* Enforce a strong password policy 
* Adopt SSO 
* Enforce MFA 
* Achieve full visibility of assets, people and users 
* Apply the Least Privilege Principle 
* Deploy an effective offboarding process 
* Centralize IAM