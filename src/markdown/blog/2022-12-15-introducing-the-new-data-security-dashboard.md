---
templateKey: blog-post
title: Introducing the New Data Security Dashboard!
seoTitle: Introducing the New Data Security Dashboard!
authors: Sabrina Lupșan
permalink: data-security-dashboard
categories:
  - Product
date: 2022-12-15T09:34:35.185Z
description: "We have released a new, powerful Data Security Dashboard to
  provide visibility in the cloud. The Dashboard displays information about
  encryption, the management of cryptographic keys, publicly accessible storage
  assets such as VMs, databases, buckets, and others, databases and
  misconfigurations related to them, containers such as blobs and buckets that
  may vulnerable, and others. These DSPM (Data Security Posture Management)
  capabilities enable users to detect attack paths for data storage assets and
  quickly mitigate them.   "
seoDescription: "We have released a new, powerful Data Security Dashboard to
  provide visibility in the cloud. The Dashboard displays information about
  encryption, the management of cryptographic keys, publicly accessible storage
  assets such as VMs, databases, buckets, and others, databases and
  misconfigurations related to them, containers such as blobs and buckets that
  may vulnerable, and others. These DSPM (Data Security Posture Management)
  capabilities enable users to detect attack paths for data storage assets and
  quickly mitigate them.   "
featuredpost: true
featuredimage: /img/blog_30-cover-2.webp
---
<!--StartFragment-->

We have released a new, powerful Data Security Dashboard to provide the visibility you need for your cloud. The Dashboard displays information about: 

* Encryption, 
* The management of cryptographic keys, 
* Publicly accessible storage assets such as VMs, databases, [buckets](https://cyscale.com/blog/s3-bucket-security/), and others, 
* Databases and misconfigurations related to them, 
* Containers such as blobs and buckets that may vulnerable, and others. 

These DSPM (Data Security Posture Management) capabilities enable users to detect attack paths for data storage assets and quickly mitigate them.  

The first section of the dashboard shows us the percentage of storage assets that are:  

* unencrypted,  
* encrypted with provider-managed-key, and  
* encrypted with CMK (Customer Managed Key).  

<img src="/img/32_blog-progress-card.webp" alt="Progress card for encryption status" title="Progress card for encryption status" class="" style="width:auto;height:auto;"/>

This card is a good indicator of progress, and, by clicking on each section of the status bar, we see which assets fit in each of those states. Using this feature, you are at a click away from finding out which of your storage cloud assets are unencrypted. 

The next section contains the Publicly Accessible card, which provides visibility over a multitude of assets, as you can see in the image below. When you click on each element, you see a list of affected assets, along with the associated risk. 

<img src="/img/32_blog-second-image.png" alt="Publicly accessible cloud assets" title="Publicly accessible cloud assets" class="" style="width:auto;height:auto;"/>

Let’s look at this feature in more detail to understand how this helps secure your cloud infrastructure. 

The “**Readable Object Containers**” and “**Writable Object Containers**” refer to storage assets such as [buckets](https://cyscale.com/blog/s3-bucket-security/) and blobs. Object containers should not be publicly accessible unless it is necessary, since individuals could then read or overwrite possibly sensitive data without having to perform any kind of authentication or authorization. 

The next item in this section highlights **database instances that have public IP addresses**. Databases should be configured with private IP addresses to reduce attack surface and increase security. 

The last items in this list are publicly accessible: 

* **queues**,  
* **encryption keys**, and  
* **disks**.  

[Cloud queues](https://cyscale.com/blog/cloud-queues-security-best-practices/) act like buffers to prevent data loss when services are too busy and cannot process incoming messages, and therefore should not be publicly accessible to prevent data leakage or data tampering. The control regarding encryption keys checks for attached policies that may allow public access to the key. The other control ensures there are no disks attached to VMs reachable from the internet. 

The next card on the Data Security Dashboard provides an overview of the [encryption keys](https://cyscale.com/blog/protecting-data-at-rest/) used in your cloud infrastructure. Cryptographic key management is a very important but sometimes overlooked aspect of the encryption process.  

<img src="/img/32_blog-encryption-keys.png" alt="Cryptographic key management in Cyscale" title="Cryptographic key management in Cyscale" class="" style="width:auto;height:auto;"/>

Cyscale checks if the encryption keys are stored on a vulnerable VM or if they have a permissive access policy to identify possible attack paths. Moreover, important information is highlighted, such as: 

* keys that are in use and are scheduled for deletion, 
* keys that haven’t been rotated in a long time, and 
* keys that will expire soon. 

The next two sections in this dashboard focus on object containers, such as buckets or blobs, and on [databases](https://cyscale.com/blog/best-practices-for-securing-databases/). Here, you can see some of the categories of vulnerabilities Cyscale has identified and checked your cloud environment against.  

The first card presents the state of your object containers. 

<img src="/img/32_blog-publicly-accessible-assets.png" alt="Object containers with issues" title="Object containers with issues" class="" style="width:auto;height:auto;"/>

Using this feature, we identify attack paths that may compromise your cloud assets and help you solve them. 

For example, a common attack is exploiting VMs that have open management ports. If you have a VM that has permissions on a bucket, and that VM is compromised, your bucket may be compromised as well.  

Using the [Cyscale Knowledge Graph](https://cyscale.com/blog/security-knowledge-graph-integrations/), you can see that the VM named "sql-instance" has an instance profile that gives it full access to the bucket on the far right, and the VM also has port 22 (SSH) open. The VM is thus connected to the internet and therefore puts the data stored in the bucket at risk. 

<img src="/img/cyscale-article-image-14-min.webp" alt="Cyscale Knowledge Graph highlighting an attack path" title="Cyscale Knowledge Graph" class="" style="width:auto;height:auto;"/>

Other critical issues highlighted for object containers include: 

* Enabling public access to storage assets, 
* Having an overly-permissive access policy,  
* Not enabling versioning, and others. 

Clicking on “Object containers with public access”, we get a list of misconfigured assets as well as details like: 

* Connectors, which represents the cloud or identity provider account, 
* Tags,  
* Risks. 

<img src="/img/blog_32-second-to-last.webp" alt="List of misconfigured assets" title="List of misconfigured assets" class="" style="width:auto;height:auto;"/>

Moving on to the databases card, using controls, Cyscale checks for the following misconfigurations: 

* **Databases with public IP addresses,** 
* **Databases with outdated engine versions,** 
* **Databases without deletion protection,** 
* **Databases with no encryption,** 
* **Databases with no/old TLS.** 

<img src="/img/blog_32-databases-last.webp" alt="Databases with issues in Cyscale" title="Databases with issues in Cyscale" class="" style="width:auto;height:auto;"/>

Use the multitude of features present in the Cyscale Data Security Dashboard to eliminate data exposure through [data storage misconfigurations](https://cyscale.com/whitepaper/cloud-storage-misconfigurations/). Check out our product in the [playground](https://cyscale.com/playground/) or [schedule a demo with us](https://cyscale.com/request-demo/) to start your cloud security journey! 

<!--EndFragment-->
