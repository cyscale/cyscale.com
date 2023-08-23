---
templateKey: blog-post
title: "Securing VMs in Google Cloud: Shielded VM and Other Features You Never
  Knew Existed "
seoTitle: "Securing VMs in Google Cloud: Shielded VM"
authors: Sabrina Lupșan
permalink: securing-google-cloud-compute-shielded-vm
categories:
  - CSPM
date: 2023-08-22T15:16:04.584Z
description: Best practices for securing VMs in Google Cloud, including the
  Shielded VM feature description and practical steps to enable it.
seoDescription: Best practices for securing VMs in Google Cloud, including the
  Shielded VM feature description and practical steps to enable it.
featuredpost: true
featuredimage: /img/51-cyscale-blog-min.jpg
tableOfContents: false
---
While assessing the controls suggested by the CIS Benchmark 2.0.0 for Google Cloud, I stumbled upon an interesting recommendation: to launch compute instances with Shielded VM enabled. When you think of VM security, you think of open management ports, outdated OS versions, unencrypted VM disks and so on. So what is Shielded VM and why do you need to enable it ASAP? 

## Shielded VM 

Shielded VM, in a cloud computing context, is a security solution that hardens VMs deployed in Google Cloud. This measure protects them against rootkits and bootkits, which are essentially malware that infect and obtain persistence in VMs, allowing attackers to infiltrate in the cloud environment through the Compute Instances. It’s like a magical portal into your entire cloud infrastructure, which, if created, opens on command for the hackers.    

The advantage of this setting is that, with just a few clicks, you significantly increase the protection of your [Google Cloud](https://cyscale.com/use-cases/gcp-cloud-security/) VM by providing it with: 

* Secure Boot, 
* vTPM, 
* Integrity monitoring. 

**Secure Boot** is a feature that verifies the digital signature of all boot components of a virtual machine. In this way, if any signature verification fails, that boot process is halted, thus ensuring that only authentic software is run on the system. This means that you cannot use any custom drivers on the machine, because if you do, it will cause the VM to not boot anymore. If a failure occurs, the user receives two errors:

* **UEFI: Failed to load image, and** 
* **Status: Security Violation.** 

**vTPM, or Virtual Trusted Platform Module,** is a computer chip specialized in protecting secrets. To understand what vTPM is, let’s break it down. TPM, or Trusted Platform Module, is a hardware component that stores cryptographic keys, passwords, and other sensitive data securely. By virtualizing it, the same result is achieved, but on a software level, meaning that VMs in the cloud can also be protected using a TPM, even though at hardware-level they may share components with other VMs. 

vTPM also introduces **Measure Boot**, a mechanism that checks the integrity of the VM’s components. When the VM first boots, Measure Boot establishes an **integrity policy** baseline by calculating hashes of the components, concatenating them and rehashing them into a final hash to guarantee a sound integrity monitoring. Then, every time the VM boots up, the hash is recalculated and checked against the initial one, thus being able to tell if there are any changes in the boot process. 

The integrity policy baseline needs to be updated if changes appear, such as a system update. 

Through the process described, **integrity monitoring** is achieved using Shielded VM and the Measure Boot mechanism. 

### How to enable Shielded VM 

To enable Shielded VM, you can do it through the Google Cloud console, or using the Cloud shell.  

**Using the Google Cloud console** 

1. Log in to your Google Cloud console and navigate to Compute Instances (or click [here](https://console.cloud.google.com/compute/instances)). 
2. For each VM on which you want to enable the feature, follow these steps: 

   1. Click on the VM name to go to its details page.
   2. On the upper right area of the page, select EDIT. 
   3. Scroll down to “Security and access” and check boxes accordingly to your desired settings. Please note that you cannot select “Integrity Monitoring” without checking “Turn on vTPM”, as Integrity monitoring is a feature provided by vTPM. 

**Using the Cloud shell** 

1. Stop the instance: 

`gcloud compute instances stop <instanceName> `

2. Turn on vTPM and Integrity Monitoring: 

`gcloud compute instances update <instanceName> --shielded-vtpm --shieldedvm-integrity-monitoring `

3. To also turn on Secure Boot (if you have no custom or unsigned drivers on the instance), add the *\--shielded-vm-secure-boot* parameter to the previous command or execute the following command separately: 

`gcloud compute instances update <instanceName> --shielded-vm-secure-boot` 

4. After applying the changes, restart the instance: 

`gcloud compute instances start <instanceName> `

Note that Shielded VM is not enabled by default on a VM. However, you can set an organizational policy that will cause all the future VMs to have Shielded VM enabled. To do that, click [here](https://console.cloud.google.com/iam-admin/orgpolicies/compute-requireShieldedVm).  

**Other configurations that you should consider for your Google Cloud VMs** 

There are some settings you should always check when assessing the security of a virtual machine. Here are just a few examples: 

* Use **confidential computing** to [encrypt in-use data](https://cyscale.com/blog/types-of-encryption/). In this way, your data that is processed, trained on, used, queried on your VMs remains encrypted and is not at risk. 
* **Close management ports** if not needed: RDP (3389), SSH (21), WINRM (5985), these are all open gateways for hackers to intrude in your VMs and further down your cloud environment. 
* **Apply patches, OS updates** and any other available updates on your VMs to keep them up to date with the current versions of software and ensure that you’re not leaving them vulnerable to found exploits. 
* **Do not use public IP addresses** for your Compute instances, if possible. Public IP addresses introduce the same vulnerability in your environment as management ports: you increase your attack surface and expose the VM to the Internet. Instead, use load balancers to “hide” your VMs. 

Although there are many aspects you should consider when setting up your cloud [infrastructure](https://cyscale.com/blog/cloud-infrastructure-security/) securely, use this article as a checklist to tick off some of the most important security configurations.