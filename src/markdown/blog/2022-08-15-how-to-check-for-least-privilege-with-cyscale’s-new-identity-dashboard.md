---
templateKey: blog-post
title: "How to Check for Least Privilege with Cyscale’s New Identity Dashboard "
seoTitle: "How to Check for Least Privilege with Cyscale’s New Identity Dashboard "
authors: Sabrina Lupșan
permalink: check-for-least-privilege
categories:
  - CSPM
  - Product
date: 2022-08-15T05:45:35.102Z
description: "The Least Privilege Principle states that no user should be given
  more permissions and for more time than they require for their day-to-day
  tasks. Compliance with the Principle of Least Privilege (PoLP) is a security
  best practice in cloud security that should be implemented in all cloud
  environments. In order to implement PoLP, you must use timed privileges, set
  up minimum permissions to add more on the go and remove or disable identities
  that haven’t been active in the last 30 days or more. "
seoDescription: "The Least Privilege Principle states that no user should be
  given more permissions and for more time than they require for their
  day-to-day tasks. Compliance with the Principle of Least Privilege (PoLP) is a
  security best practice in cloud security that should be implemented in all
  cloud environments. In order to implement PoLP, you must use timed privileges,
  set up minimum permissions to add more on the go and remove or disable
  identities that haven’t been active in the last 30 days or more. "
featuredpost: true
featuredimage: /img/blog_18-cover.png
tags:
  - security
  - CSPM
---
<!--StartFragment-->

The Least Privilege Principle states that no user should be given more permissions and for more time than they require for their day-to-day tasks. 

Compliance with the Principle of Least Privilege (PoLP) is a security best practice in cloud security that should be implemented in all cloud environments. 

## How do you implement Least Privilege? 

* Use timed privileges; only assign privileges in the moments they are needed and revoke them after. 
* Set up minimum permissions and add more on the go, if necessary. 
* Remove or disable identities that haven’t been active in the last 30 days or more. 

## Cyscale can help you implement the Principle of Least Privilege 

With a new, powerful identity dashboard, Cyscale helps you improve the visibility of your cloud identities and pinpoint vulnerabilities or misconfigurations. 

Using this page, you can see your organization's identities and their level of access. 

Entities that do not have permissions in the cloud but have an account are marked with the “No Access” tag on the right. 

![No access permissions in dashboard](/img/blog_18-1.png#shadow "No access permissions in dashboard")

Moreover, people who have left the organization are also visible on this dashboard. It is essential to know which entities have left to ensure you have a complete offboarding process and that they no longer have permissions. 

If we expand a card of an identity that no longer exists in the company, we see that their account is disabled because it is greyed out. 

![Disabled identity](/img/blog_18-2-disabled-identity.png#shadow "Disabled identity")

To understand an identity's impact on the entire organization's environment, you must have comprehensive visibility.  

The following image shows that the analyzed user has accounts in Alibaba, AWS, Azure, GCP, and Okta. Furthermore, we can see that they are part of the "**Admins**" group, as well as others, and as a result, are "**Highly Privileged**”. 

![Highly privileged identity](/img/blog_18-3-andrei-stefanie.png#shadow "Highly privileged identity")

If we expand each account’s card, we can see the environment they have access to. Besides tracking permissions, it is crucial to also track the actual environments each user has access to. In the cloud, this tends to quickly become hard to track because applications often span multiple accounts. 

<br/>

Being highly privileged is not necessarily an issue, however, combining it with the lack of MFA does become a problem. Cyscale highlights this situation. This can be seen immediately after expanding a person’s card, so the vulnerability is not missed. 

In this example, the user’s Okta account does not have MFA. [Okta is an identity and access management (IAM) service](https://cyscale.com/blog/provide-visibility-in-cloud-okta-integration/) where you can onboard your accounts, which helps you manage your organization’s access to other applications through SSO. 

In the image below, you can see the accounts assigned using Okta. Therefore, if there is a vulnerability in your Okta account, all those accounts may be compromised. 

![Okta identity](/img/blog_18-4-okta.png#shadow "Okta identity")

Another useful feature of the Identity Dashboard is the “Alerts” section. If an account has security alerts, the user can click on them and be redirected to the Alerts page. There, you can see failed controls along with: 

* Severity, 
* The asset involved, 
* The status, and others. 

You can immediately pinpoint any misconfigurations and vulnerabilities using these alerts and quickly solve them with the remediation steps provided. 

Besides visibility, Cyscale provides controls that automatically check for misconfigurations. 

There are over 400 controls currently available in Cyscale. A few examples of controls that verify you’re implementing the Least Privilege Principle correctly are: 

* *Eliminate use of the "root" user for administrative and daily tasks* for AWS 
* *Ensure that ServiceAccount has no Admin privileges* for Google Cloud Platform 
* *Ensure IAM policies that allow full "\*:\*" administrative privileges are not created* for AWS 
* *Ensure IAM Users that are inactive for 30 days or more are deactivated* for AWS 

<!--EndFragment-->