---
templateKey: blog-post
title: "Best Practices for Securing Databases in the Cloud "
seoTitle: "Best Practices for Securing Databases in the Cloud "
authors: Sabrina Lupșan
permalink: best-practices-for-securing-databases
categories:
  - CSPM
date: 2022-08-26T07:19:11.434Z
description: "A database is one of the most important cloud assets. It usually
  stores sensitive information that should be well protected.  Best practices to
  protect a database are: filter inbound and outbound traffic, ensure
  availability through redundancy, encrypt your database, secure your database
  connection, keep your connection details secret, log connection attempts, and
  perform regular database backups. Keep RPO and RTO at a minimum to ensure high
  availability and protect your data."
seoDescription: "A database is one of the most important cloud assets. It
  usually stores sensitive information that should be well protected.  Best
  practices to protect a database are: filter inbound and outbound traffic,
  ensure availability through redundancy, encrypt your database, secure your
  database connection, keep your connection details secret, log connection
  attempts, and perform regular database backups. Keep RPO and RTO at a minimum
  to ensure high availability and protect your data."
featuredpost: true
featuredimage: /img/20_blog-cover-photo.png
---
<!--StartFragment-->

A database is one of the most important cloud assets. It usually stores sensitive information that should be well protected.  

When we’re discussing databases in the cloud, there are two options for users. They can: 

* manage their own database in the cloud, or 
* use a service provided by their cloud vendor. 

The latter is usually the easier choice since the cloud vendor takes care of security features.  

However, your database may be vulnerable in both cases if you don’t configure your environment correctly. 

In this article, we will look at best practices for securing databases in the cloud and how to identify any misconfigurations and vulnerabilities that may exist or appear in the future. 

## Best practices 

### 1. Filter inbound and outbound traffic. 

Managing traffic to and from the database is the first layer of database protection. Place databases behind firewalls and restrict the traffic allowed to reach them as much as possible. 

You can implement more granular rules by only allowing a list of known IPs to connect to a database (for example, the range of addresses specific to a known data center), or by filtering traffic based on other criteria. 

Moreover, you can apply conditional access for users when administering the database. You can ask for additional security checks like Multi-Factor Authentication to ensure the entities managing the database are legitimate. 

### 2. Ensure availability through redundancy 

When deploying a database in the public cloud, you have the option to ensure availability through redundancy. You can replicate a database in different data centers and even different geographical regions. 

If one data center or region fails, you can rely on a replication of the database located in a different data center to work. 

### 3. Encrypt your database 

Database [encryption](https://cyscale.com/blog/protecting-data-at-rest/) is important for protecting your data at rest.  

Ensure that only authorized entities can see the data you’re storing in the database by [encrypting it ](https://cyscale.com/blog/protecting-data-at-rest/)with a strong, recommended algorithm such as AES-256. Keep your encryption keys safe by storing them separately from the data, use strong generation algorithms and rotate them every 90 days or less. 

### 4. Secure your database connection 

Not only data at rest is vulnerable. When you're transferring data to and from the database, it is essential to encrypt your traffic.  

This is called encryption for data in transit and is implemented with the TLS/SSL protocols. 

### 5. Keep your connection details secret 

Do not disclose database connection strings, keys, certificates, and other secrets that may be used to breach your database. You can use cloud solutions to keep your cryptographic secrets safe: 

* [Azure](https://cyscale.com/use-cases/azure-cloud-security/) Key Vault, 
* [AWS ](https://cyscale.com/use-cases/aws-cloud-security/)Key Management Service (AWS KMS), 
* [Google Cloud ](https://cyscale.com/use-cases/gcp-cloud-security/)Secret Manager, 
* dedicated hardware devices such as Hardware Security Modules (HSM), and others. 

### 6. Log connection attempts 

Keep track of who is trying to connect to your database by logging any authentication attempts. In this way, you can see if: 

* someone unauthorized is trying to or is connecting to the database, 
* there is a brute-force attack taking place.  

### 7. Perform regular database backups 

Databases should be backed up regularly, to prevent loss of data, in the case of: 

* Data corruption, and 
* Ransomware attacks. 

Although ransomware attacks are less common in cloud environments at the moment, attackers could in time develop the proper tactics. 

![RPO and RTO](/img/20_blog-rpo-and-rto.png#shadow "RPO and RTO")

The time between the backups is known as RPO (Recovery Point Objective). It is measured as the time that passed between the last backup and the current one. If a disaster appears, the data written in that time is lost. 

RTO (Recovery Time Objective) is the time it takes for an application to go back online after a disaster and to restore its data.   

RTO and RPO should be kept in acceptable limits. 

 

It is difficult to ensure you’re implementing all the best practices we mentioned in this article. [Cyscale ](https://cyscale.com/)has over 400 controls that can help you secure your entire cloud environment. 

Here are some examples of controls that check for any misconfigurations and vulnerabilities regarding your database setup in the public cloud: 

* *Ensure encrypted storage is used for VMs that might host a database* for AWS 
* *Ensure no SQL Databases allow ingress 0.0.0.0/0 (ANY IP)* for Microsoft Azure 
* *Ensure that Cloud SQL database instances are configured with automated backups* for GCP 
* *Ensure that Cloud SQL database instances require all incoming connections to use SSL* for GCP 
* *Ensure parameter 'log_connections' is set to 'ON' for PostgreSQL Database* for Alibaba Cloud 

Along with these controls that alert you on any findings, you receive remediation steps to quickly eliminate any vulnerabilities and secure your database in the cloud. 

 

<!--EndFragment-->