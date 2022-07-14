---
templateKey: blog-post
title: Providing Visibility Over Cloud Access – Okta Integration in Cyscale
seoTitle: Providing Visibility Over Cloud Access – Okta Integration in Cyscale
authors: Sabrina Lupșan
permalink: provide-visibility-in-cloud-okta-integration
categories:
  - CSPM
  - Product
date: 2022-05-27T06:52:44.138Z
description: "Okta is an identity and access management (IAM) service built for
  the cloud that connects persons with applications through SSO, AD, LDAP MFA,
  B2B Integration, Mobile Identity Management, User Management etc. Controls in
  Cyscale check your Okta configurations for the following: if there are at
  least two Okta admins configured, if application assignments are configured
  through groups, if MFA is configured and it has strong factors, if there are
  no weak password policies."
seoDescription: Okta is an identity and access management (IAM) service built
  for the cloud that connects persons with applications through SSO, AD, LDAP
  MFA, B2B Integration, Mobile Identity Management, User Management etc. It is
  important to integrate an identity provider with a CSPM to monitor security
  posture in one single place and see all of your IAM users in context. Some
  controls in Cyscale check if there are at least two Okta admins configured, if
  application assignments are configured through groups, if MFA is configured
  and it has strong factors, if there are no weak password policies.
featuredpost: true
featuredimage: /img/okta-integration-in-cyscale.png
tags:
  - CSPM
  - security
  - AWS
---
<!--StartFragment-->

### What is Okta? 

Okta is an [identity and access management (IAM) service](https://cyscale.com/blog/iam-services-in-aws-azure-gcp/) built for the cloud.  

It can connect a person with an application securely through its features, such as:  

* Single Sign-On (SSO),  
* Active Directory (AD) and LDAP Integration,  
* Multi-Factor Authentication (MFA),  
* User Management,  
* B2B Integration for 3rd party access,  
* Mobile Identity Management, and others.  

### Why integrate with Okta? 

There are some benefits in integrating your CSPM solution with an identity provider. 

[A CSPM tool](https://cyscale.com/products/cloud-security-posture-management/) is a cloud security product that: 

* offers visibility and discovery for your cloud assets, 
* detects misconfigurations and vulnerabilities, 
* sends targeted alerts, 
* helps you become compliant with international standards, and others. 

However, if you are using an external provider for user management, like Okta, unless the CSPM has an integration with that identity service, it is not possible for the CSPM to fully accomplish the actions mentioned above. 

Moreover, if you have users in Okta and IAM users in the cloud, you will have to assess their configurations in two different systems, resulting in more work and more room for mistakes. 

Checking for common configurations, for example, whether MFA is enabled for all users, can result in steps that need to be completed in two different places. 

However, when using Cyscale, all you need to do is to perform the onboarding once for both the cloud account and the Okta account.  

You will be able to monitor security posture for access management in one single place. 

This will reduce the risk of mistakes and make your work more efficient. 

### Okta controls – what are they, and how can they help you?

Once you have integrated your [Okta](https://www.okta.com/) account in Cyscale, a broad range of controls automatically check your configurations and alert you if there are any findings. 

Let’s look at some of these controls and what they do: 

#### 1. Ensure at least two Okta admins are configured.  

This control is based on the Principle of Separation of Duties; it checks that there is more than one user with administrative privileges in order to eliminate a single point of failure.  

#### 2. Ensure application assignments are configured through groups 

Access to applications configured with Okta can be assigned directly or through groups. It is recommended that access is assigned through groups because it ensures that: 

* no users are mistakenly given access to applications, and  
* managing multiple users is more efficient. 

#### 3. Ensure all users have MFA configured.  

[Multi-Factor Authentication](https://cyscale.com/blog/iam-best-practices-from-aws-azure-gcp/#MFA) is an essential security feature and should not be overlooked when implementing authentication. 

#### 4. Ensure MFA is configured with strong factors.  

Moderate to strong MFA factors include: 

* SMS/Voice/Email 
* Push notifications, 
* WebAuthn, 
* YubiKey OTP. 

Weak factors, which are not recommended for MFA implementation, are: 

* Passwords 
* Security questions 

#### 5. Ensure there are no weak password policies.  

Applying strict policies on passwords by establishing rules that cover all corner cases, such as: 

* the minimum password length, 
* the type of characters allowed, 
* the usage of both upper-case and lower-case characters, 

is an essential configuration. 

### More context with Okta 

Let’s look at the following **scenario**: an Okta administrator provisions an [AWS](https://cyscale.com/use-cases/aws-cloud-security/) SSO user with administrator privileges.  

The administrator from Okta does not have MFA activated, or they may have a weak password if the Okta password policy is not strong enough.  

Cyscale provides a broader context for access management provisioning, emphasizing risks.  

The scenario described above can easily go unacknowledged if a CSPM does not have integration with Okta. 

### The identity page – a unified view to see everything in one place 

Cyscale offers a powerful Identity Dashboard where you can see in one combined view all of the identities from your organization and the level of access they have in multiple systems. 

You can check out a preview of the Identity Dashboard in the image below: 

![The identity page in Cyscale](/img/1_blurred.png#shadow "The identity page in Cyscale")

After expanding any of the identity rows from the illustration, we can now see the accounts an entity has access to, along with their level of privilege and other important information that you should not miss. 

By integrating with an identity provider, Cyscale offers more context and a better understanding of configurations and risks. 

For example, in the view below, it is easy to take note of identities in your organization that present the most risk. 

![The identity page in Cyscale](/img/2_blurred.png#shadow "The identity page in Cyscale")

The Okta integration is very well rounded for AWS, and more support will be available soon for other providers as well.  

### What is next? 

We know how important visibility is in the cloud. Having all users in one place and being able to visualize access in a unified view can significantly improve discovery and visibility. After Okta, there are more identity providers to come in [Cyscale](https://cyscale.com/), for example: 

* Azure AD, 
* JumpCloud, 
* G-suite, and others. 

 

<!--EndFragment-->