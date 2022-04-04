---
templateKey: blog-post
title: Bridging the Gap Between ISO 27001 and Cloud-Native Systems
authors: Andrei Ștefănie
permalink: implementing-iso-27001-for-cloud-native-systems
categories: 
  - Compliance
date: 2021-08-31T12:54:05.925Z
description: Being compliant is a huge selling point and many well-established
  customers will even require this from their service providers. One missing
  product feature will probably not make or break the deal, but missing
  compliance will.
featuredpost: true
featuredimage: /img/romain-dancre-doplsdelx7e-unsplash.jpg
tags:
  - compliance
  - iso27001
  - standards
  - policies
---
<!--StartFragment-->

<sub><sup>Photo by [Romain Dancre](https://unsplash.com/@romaindancre?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)</sup></sub>

<!--EndFragment-->

<!--StartFragment-->

And no, unfortunately, ISO/IEC 270**17** - which focuses on cloud services - doesn't fill in the gap. Or at least not entirely.

The trend over the past few years has been clear: shift left. The idea is to identify and prevent issues (not only security-related) as soon as possible. This implies more collaboration during the day-to-day development and even mixed teams that handle all the aspects of the product (there is no limit to how many words we can fit between “Dev” and “Ops”).

While some might be inclined to believe organizations are doing this just to cut down costs (of course this is one of the reasons and it should be), the reality is that the team that builds the product also knows the product best. A virtual machine that can theoretically be accessed on port 22 (SSH) from any IP might mean a security hazard to someone that sees the system for the first time. On the other hand, the team will probably have more context and will be able to provide a more accurate risk assessment - maybe the VM is not actually accessible over the internet because it's deployed in a private subnet. Context matters.

And the truth is that most teams will happily take on more responsibility and/or collaborate closely with their colleagues. Actually, the best teams want and demand this. They want to contribute to the architecture of the product, be involved in the risk assessments, and help with sales. They will gladly do this as long as the **purpose is clear** and **the job involves actually building something** (this is what software engineers refer to as fun).

On the other hand, pursuing something like compliance with ISO 27001 which involves reading and writing a lot, might be met with some resistance. While some might get “fooled” when being told they will **build** an Information Security Management **System** (**ISMS** from now on), most people will stop listening when they hear compliance (are you still reading this?). But it doesn't have to be like this.

Being compliant is a huge selling point and many well-established customers will even require this from their service providers. One missing product feature will probably not make or break the deal, but missing compliance will.

## The Standard

The ISO/IEC 27001:2013 standard is targeted towards information security. It guides us in the process of building an ISMS that takes a holistic approach (i.e. look at the facts from multiple perspectives) to achieve better **confidentiality, integrity, and availability of our assets (i.e. reduce risks)**.

Since it can be applied in a wide range of industries and companies, ISO 27001 provides general recommendations and approaches. It doesn't tell us how to do anything and there is no recipe for success. **Looking through a simplified view, ISO 27001 guides us through our journey of discovering our assets, identifying risks, and devising strategies for eliminating, mitigating, and remediating the relevant risks.** These can go from ensuring we use encryption to having a designated responsible for contacting authorities when bad things happen (and they will happen).

So basically it helps us document how we protect our assets. Now, these assets can be anything from physical devices (e.g. laptops) to data stored in an S3 bucket. The standard covers all kinds of assets and situations such as a new employee joining the company (how are they assigned access? have we performed the relevant background checks?) or segregating our networks based on users and services.

In fact, ISO 27001 provides 114 controls structured in 14 sections (called clauses), each covering a specific area. For example, clause A.13 refers to communications security and has two objectives:

* Network security management
* Information transfer

Both objectives contain several so-called **controls** that aim to help us **reduce the risk** when applicable. One of the controls, A.13.2.3, refers to *Electronic messaging* and says the following:

*Information involved in electronic messaging shall be appropriately protected.*

The control tells us what should be achieved, but doesn't tell us how. This is where the compliance team and the development team (usually represented by the architect) start gathering information. Their duty is to research the options and possibilities they have and to find out how the system/application handles it currently.

### Translating ISO controls to the cloud

Assuming they are building their software on top of a hyperscaler (AWS, Azure, Google Cloud), they might start by enforcing HTTPS traffic through security groups/firewalls and leveraging private subnets. This should be good enough for virtual machines, but their applications might use more services such as object storage (S3, Azure Blob Storage, GCS), load balancers, managed databases (RDS, Cloud SQL, the Azure SQL suite of services), integration services such as queueing and pub/sub systems, and the list goes on and on (and probably got longer while you were reading this article).

After 6 days of research, they might have identified the following options, let's say on AWS:

1. Since they have been using AWS for the past 9 years, they have to make sure all their EC2 instances are migrated and deployed in a VPC, as opposed to EC2-Classic.
2. The security groups attached to the load balancers should allow traffic only on port 443.
3. The load balancers should have TLS listeners set up and accept only safe cipher suites - e.g. it shouldn't accept TLS 1.0 or older SSL protocols that are considered unsafe.
4. The security groups attached to virtual machines running the application should only accept traffic from the load balancer.
5. Self-hosted databases such as Elasticsearch should only accept traffic from the EC2 instances running the application.
6. RDS instances should not be publicly accessible and should only accept traffic from the same EC2 instances.
7. S3 buckets should have a bucket policy that enforces HTTPS.
8. S3 buckets should not allow public access through the bucket policy or the ACL (some buckets are pretty old so they heavily rely on ACLs).
9. And finally, since they leverage AMIs, they would like to ensure that these are private.

Covering all these should provide a great starting point to ensure electronic messaging security. The compliance team adds them to the policy (remember, the output of ISO 27001 is an ISMS which is a set of policies), the development team configures the infrastructure, and the target is achieved. Or is it?

### If it hurts, do it more often

**Adopting a standard means setting a new bar**. It means that all changes from now on must respect the new rules. Of course, the development team is unlikely to print the security policies and attach them to their wall so the product owner creates tasks with checklists as part of their stories. Everything is great now. Every time they add a new cloud resource all they have to do is to go through a 235 items checklist. And also they have to add the resource to their asset inventory.

Being smart engineers, the development team decides to use AWS Config and implement custom rules to perform these checks whenever a resource is changed. They plan to implement this over the next 4 months and try to keep the compliance team in the loop because they don't want to deal with a stack of Word documents (even though they represent the heart and soul of the compliance team).

Now, if your organization is at this point, you adopted the DevOps culture at this level and you have all these resources, you will probably be fine. Of course, you will have to:

1. practically spam all your employees with presentations about the policies
2. train and retrain everyone involved including every new employee
3. wonder whether anyone has actually ever read the policies
4. wonder whether your research was comprehensive enough
5. oppose adopting any new cloud provider because it would mean implementing and mapping all the controls again and again



**However, if this sounds like a lot of work to do and/or you want to take your [ISO 27001 Compliance & Cloud Security](https://cyscale.com/use-cases/iso-27001-compliance/) to the next level by giving power to your policies and ultimately to your people, check out [cyscale.com](https://app.cyscale.com/ "https\://app.cyscale.com/").**

<!--EndFragment-->