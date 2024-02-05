---
templateKey: blog-post
title: "Types of Encryption for in Motion, in Use, at Rest Data "
seoTitle: "Types of Encryption for in Motion, in Use, at Rest Data "
authors: Sabrina Lupșan
permalink: types-of-encryption
categories:
  - Encryption
date: 2022-08-09T10:02:07.086Z
description: "Encryption is the process of altering data in order to hide its
  content and ensure confidentiality. Entities that do not have the decryption
  key in their possession cannot decrypt the data and, therefore, read its
  content. Encryption algorithms can be symmetric and asymmetric. When
  protecting data, you need to ensure you're taking in consideration all three
  states: in motion, in use, and at rest data."
seoDescription: "Encryption is the process of altering data in order to hide its
  content and ensure confidentiality. Entities that do not have the decryption
  key in their possession cannot decrypt the data and, therefore, read its
  content. Encryption algorithms can be symmetric and asymmetric. When
  protecting data, you need to ensure you're taking in consideration all three
  states: in motion, in use, and at rest data."
featuredpost: true
featuredimage: /img/blog_17-cover-image.webp
tags:
  - security
  - data
  - CSPM
---
<!--StartFragment-->

Encryption is the process of altering data in order to hide its content and ensure confidentiality. Entities that do not have the decryption key in their possession cannot decrypt the data and, therefore, read its content. 

## How does encryption work? 

Plaintext data is transformed, using an encryption algorithm and a secret key, to ciphertext, which is unreadable text.  

There are two types of encryption algorithms: 

* Symmetric,  
* Asymmetric. 

In symmetric algorithms, the key used to perform the encryption is the same as the one used to decrypt it and is, therefore, secret. 

Examples of symmetric algorithms are: 

* DES (Data Encryption Standard),  
* 3DES (Triple DES), 
* AES (Advanced Encryption Standard). 

The latter one is, in 2022, the industry standard and is recommended to be used with 128 bits keys. 

![Symmetric encryption](/img/blog_17-cisco_encryption.webp#shadow "Symmetric encryption")

Image source – cisco.com 

Asymmetric algorithms use two different keys: a public key for encryption and a private key for decryption. 

Asymmetric algorithm examples are: 

* RSA (Rivest-Shamir-Adleman), 
* ECC (Elliptic Curve Cryptography). 

Asymmetric algorithms are not commonly used for encryption because they are slower. For example, the RSA algorithm requires keys between 1024 and 4096 bits, which slows down the encryption and decryption process.  

These algorithms can be used, however, to encrypt symmetric algorithm keys when they are distributed. 

A more common usage of asymmetric algorithms is digital signatures. They are mathematical algorithms that are used to cryptographically validate the authenticity and integrity of a message or media on the internet. 

## What is encryption used for? 

Encryption ensures confidentiality of data. The unreadable ciphertext keeps the data private from all parties that do not possess the decryption key. 

Data has three states: 

* In motion, 
* In use, 
* At rest. 

It is essential to understand these states and ensure that the data is always encrypted. It is not enough to encrypt data only when it is stored if, when in transit, a malicious party can still read it.  

Therefore, we will look at encryption mechanisms for all three data states. 

### In Motion Encryption 

Data in motion, or in transit, is data that is moved from one location to another, for example, between: 

* computers,  
* services,  
* virtual machines,  
* applications, 
* networks.  

Examples of data in motion are: 

* emails, 
* files, 
* messages. 

Data in motion can be encrypted using SSL/TLS. TLS (Transport Layer Security) and SSL (Secure Sockets Layer) are transport layer protocols that protect the data in transit. TLS is a newer and improved version of SSL. 

SSL/TLS ensure confidentiality through encryption. Firstly, a session is created between the two parties exchanging a message using asymmetric encryption. Then, after the secure session is established, symmetric algorithms are used to encrypt the data in motion. 

Using one of the mentioned protocols prevents attackers from reading the data in motion. 

Websites should use HTTPS (Hypertext Transfer Protocol Secure) instead of HTTP to ensure encryption between websites and browsers. HTTPS uses SSL/TLS. 

**What is in motion data vulnerable to?** 

**Eavesdropping attacks.** In this situation, malicious entities can analyze traffic sent over the internet and read unencrypted data.   

### In Use Encryption 

Data currently accessed and used is considered in use.   

Examples of in use data are: 

* files that are currently open, 
* databases, 
* RAM data. 

Because data needs to be decrypted to become in use, it is essential that data security is taken care of before the actual use of data begins. 

To do this, you need to ensure a good authentication mechanism. Technologies like Single Sign-On (SSO) and Multi-Factor Authentication (MFA) can be implemented to increase security. 

Moreover, after a user authenticates, access management is necessary. Users should not be allowed to access any available resources, only the ones they need to, in order to perform their job.  

A method of encryption for data in use is Secure Encrypted Virtualization (SEV). It requires specialized hardware, and it encrypts RAM memory using an AES-128 encryption engine and an [AMD EPYC processor](https://developer.amd.com/sev/). Other hardware vendors are also offering memory encryption for data in use, but this area is still relatively new. 

**What is in use data vulnerable to?**  

In use data is vulnerable to **authentication attacks**. These types of attacks are used to gain access to the data by bypassing authentication, brute-forcing or obtaining credentials, and others. 

Another type of attack for data in use is a **cold boot attack**. Even though the RAM memory is considered volatile, after a computer is turned off, it takes a few minutes for that memory to be erased. If kept at low temperatures, RAM memory can be extracted, and, therefore, the last data loaded in the RAM memory can be read. 

<div class="pb-10 pt-20 lg:pb-10 lg:pt-20 flex flex-col items-center"><a href="/request-demo/"><button class="bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind" style="padding: 0.625rem 2.5rem;">BOOK A DEMO</button></a></div>

### At Rest Encryption 

Once data arrives at the destination and is not used, it becomes at rest.  

Examples of data at rest are: 

* databases, 
* cloud storage assets such as buckets, 
* files and file archives, 
* USB drives, and others. 

This data state is usually most targeted by attackers who attempt to read databases, steal files stored on the computer, obtain USB drives, and others. 

Encryption of data at rest is fairly simple and is usually done using symmetric algorithms. When you perform at rest data encryption, you need to ensure you’re following these best practices: 

* you're using an industry-standard algorithm such as AES, 
* you’re using the recommended key size, 
* you’re managing your cryptographic keys properly by not storing your key in the same place and changing it regularly, 
* the key-generating algorithms used to obtain the new key each time are random enough. 

For the examples of data given above, you can have the following encryption schemes: 

* full disk encryption, 
* database encryption, 
* file system encryption, 
* cloud assets encryption. 

One important aspect of encryption is cryptographic keys management. You must store your keys safely to ensure confidentiality of your data. 

You can store keys in Hardware Security Modules (HSM), which are dedicated hardware devices for key management. They are hardened against malware or other types of attacks. 

Another secure solution is storing keys in the cloud, using services such as: 

* Azure Key Vault, 
* AWS Key Management Service (AWS KMS),  
* Cloud Key Management Service in Google Cloud. 

**What is at rest data vulnerable to?** 

Although data at rest is the easiest to secure out of all three states, it is usually the point of focus for attackers. There are a few types of attacks data in transit is vulnerable to: 

* **Exfiltration attacks.** The most common way at rest data is compromised is through exfiltration attacks, which means that hackers try to steal that data. For this reason, implementing a very robust encryption scheme is important.  <br>Another essential thing to note is that, when data is exfiltrated, even if it is encrypted, attackers can try to brute-force cryptographic keys offline for a long period of time. Therefore a long, random encryption key should be used (and rotated regularly). 
* **Hardware attacks.** If a person loses their laptop, phone, or USB drive and the data stored on them is not encrypted (and the devices are not protected by passwords or have weak passwords), the individual who found the device can read its contents. 

## Are you protecting data in all states? 

Use Cyscale to ensure that you’re protecting data by taking advantage of over 400 controls. 

Here are just a few examples of controls that ensure data security through encryption across different cloud vendors: 

* *Ensure all S3 buckets employ encryption-at-rest* for AWS 
* *Ensure web app is using the latest version of TLS encryption* for Azure 
* *Ensure VM disks for critical VMs are encrypted with Customer-Supplied Encryption Keys (CSEK)* for Google Cloud 
* *Ensure server-side encryption is set to 'Encrypt with Service Key'* for Alibaba 

R﻿ead more about cloud security to understand how attackers can obtain access to your data.

<a href="https://cyscale.com/blog/contextual-security-google-cloud/"><img src="/img/blog_54-cover.png" alt="" title="" class=" blog-image-shadow " style="width:25rem;height:auto;"/></a>

<div class="pb-6 pt-2 lg:pb-6 lg:pt-2 flex flex-col items-center"><a href="https://cyscale.com/blog/contextual-security-google-cloud/"><button class="bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind" style="padding: 0.625rem 2.5rem;">Click to read</button></a></div>

<!--EndFragment-->