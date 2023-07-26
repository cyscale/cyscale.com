---
templateKey: blog-post
title: IAM Services in AWS, Azure, and Google Cloud - A Cloud Industry Overview
seoTitle: IAM Services in AWS, Azure, and Google Cloud - a Cloud Industry Overview
authors: Sabrina Lupșan
permalink: iam-services-in-aws-azure-gcp
categories:
  - CSPM
date: 2022-05-06T05:44:34.049Z
description: An industry overview of the IAM Services. We look at AWS, Azure and
  Google Cloud and understand what identity and management is. The components of IAM are
  described for all three vendors.
seoDescription: An industry overview of the IAM Services. We look at AWS, Azure
  and Google Cloud and understand what identity and management is. The components of IAM
  are described for all three vendors. Authentication methods are described,
  such as Single Sign-On (SSO) and Multi-Factor Authentication (MFA).
featuredpost: true
featuredimage: /img/iam-services-in-aws-azure-and-gcp-a-cloud-industry-overview.webp
tags:
  - CSPM
  - IAM
  - security
---
<!--StartFragment-->  

Identity and Access Management (IAM) refers to all the good practices and rules that must be followed when establishing authentication and authorization for a user to an organization’s systems and applications. 

In the past, different measures were implemented to assure security in an organization by only allowing users to access company resources through company devices on premises. 

However, as companies adopt the remote working model, this is no longer an option. For the cloud, IAM is the solution to ensure security. 

Users can nowadays [connect to the cloud from all around the world](https://cyscale.com/use-cases/remote-work-security/) with their personal devices. 

Moreover, access is not restricted to human users; applications and other types of identities also require access to different types of resources. 

Therefore, strong IAM policies need to be implemented. 

Let’s first clarify some important concepts. Then, we will look into IAM policies and what different cloud vendors offer for their IAM infrastructure.

### Identity 

Identity refers to who can authenticate (sign in) into a cloud account.  

In order to allow someone to access cloud resources, you need to ensure that the user trying to authenticate is who they claim to be. 

Authentication should be implemented using technologies like Single Sign-On (SSO) and Multi-Factor Authentication (MFA) to increase security.  

After a user authenticates, access management is needed.  

Just because a user successfully authenticated doesn’t mean that they should have full access to all the available resources. 

### Access management 

To regulate access inside the cloud environment, strong access control policies need to be implemented. 

Having groups with well-defined rules and privileges at different granularity levels is an excellent solution to manage access to cloud resources. 

In this way, you do not have to assign permissions to each new user but rather add them to the appropriate group that already has the correct permissions. 

Access management also refers to keeping track of users’ actions. Therefore, logging and monitoring are essential parts of IAM and should be implemented. 

Now that we’ve understood the purpose of IAM, let’s look at three big vendors in the cloud industry and their approach to access management: AWS Cloud, Google Cloud Platform, and Microsoft Azure. 

### IAM implementations - An industry overview 

### Amazon Web Services (AWS) 

For access management, the IAM service provided by AWS has three types of assets: user, role and policy.  

Along with the creation of an account, an AWS account root user is created. 

When looking at [AWS Cloud](https://cyscale.com/use-cases/aws-cloud-security/), we can identify 6 concepts in IAM: 

1. **Principal**, which represents the entity (user or application) that is trying to authenticate using an AWS account root user, an IAM user, or an IAM role. 
2. **Request**, which is made by a principal to AWS and holds information about the operation they want to perform. 
3. **Authentication**, which refers to the credentials you need, such as an access key or a username and password. 
4. **Authorization**, which refers to the permissions and policies that define what a principal can do in an account. 
5. **Actions and operations**, which must be included in policies in order to allow a principal to execute them. 
6. **Resources**, which define the objects that exist within a service and to which the principal requires access; they can be, for example, Amazon S3 buckets, IAM users, and Amazon EC2 instances. 

 Policies define permissions and can be attached to: 

* users.
* groups of users, 
* roles,
* resources. 

There are multiple types of policies that can be applied in AWS. A user can create their own custom policies or can use the ones offered by AWS.  

You can see below the different types of AWS policies, ordered from the most frequently used to the least: 

1. Identity-based (attached to IAM identities) 
2. Resource-based (attached to resources) 
3. Permissions boundaries (they define the highest level of permissions an identity-based policy can apply) 
4. Organization Service Control Policies (used to define the highest level of permissions an identity-based or resource-based policy can apply for account members of an organization) 
5. Access Control Lists or ACLs (are similar to resource-based policies and define which principals can access a resource) 
6. Session policies (they limit the permissions granted by identity-based policies in an AWS CLI or API session)

### Google Cloud Platform

In Google Cloud, permissions to access resources are organized into roles. To understand how IAM works in Google, we must look at the 3 IAM asset types: 

* **Roles**, which represent a collection of permissions 
* **Principals**, who are assigned to roles and can be: 

  * a Google Account, 
  * a Service Account, 
  * a Google group, 
  * a Google Workspace account, 
  * a Cloud Identity domain, 
  * all authenticated users, 
  * all users.
* **Policies**, which define associations of principals and roles  
* **Resources**, which are physical assets, such as computers and hard disk drives, and virtual assets, for example virtual machines. 

In Google Cloud, permissions cannot be applied to principals directly. Instead, principals must be assigned to roles and thus receive all the permissions allowed for that role. 

Below, you can see a diagram of the IAM components found in Google Cloud. 

![Google Cloud IAM Components](/img/gcp-iam.webp#shadow "Google Cloud IAM Components")

Image source – [Google Cloud Platform](https://cloud.google.com/iam/docs/overview) 

### Microsoft Azure 

[Azure Active Directory](https://cyscale.com/use-cases/azure-cloud-security/) (Azure AD) is an IAM service provided by Microsoft for the cloud. Azure AD is the identity system used to connect to Microsoft 365, the Azure portal, and other SaaS applications. 

Let’s look at components of Azure AD: 

**1. Identity** 

An identity is an entity that can be authenticated.  

Identities can be of the following types: 

* Users,
* Groups,  
* Applications. 

**2. Role** 

A role is a collection of permissions. 

Access to Azure resources is managed by **RBAC (Role-based Access Control)**. 

Azure RBAC provides high granularity with four built-in roles: 

1. Owner (can perform all actions on all resource types) 
2. Contributor (can perform any action an owner can except managing RBAC) 
3. Reader (can perform all read actions on all resource types) 
4. User Access Administrator (can manage user access to Azure resources) 

Other roles are also provided for granular management of access. Moreover, custom roles can be created to cater to every organization’s needs. 

**3. Scope** 

Scopes are sets of resources that define what an identity can access.  

They are important because, when you assign a role, it is crucial to only grant a principal the access they need. 

Scopes can be: 

* subscriptions, 
* resource groups, 
* resources. 

**4. Resource** 

Resources are manageable items available through Azure, such as virtual machines, databases, web applications and others. 

Access to resources is granted by assigning: 

* a user, 
* a group, or 
* a Service Principal (process or application) 

to a specific role and a specific scope. 

Cyscale integrates with AWS, Azure, Google Cloud and other vendors to check for vulnerabilities and [improve its customers‘ cloud security posture](https://cyscale.com/blog/improve-cloud-security-posture/). 

[In the following article](https://cyscale.com/blog/iam-best-practices-from-aws-azure-gcp/), we will look at best practices described by these vendors and how to check if your cloud infrastructure is implementing them correctly. 

<!--EndFragment-->
