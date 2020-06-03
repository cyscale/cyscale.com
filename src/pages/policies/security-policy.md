---
templateKey: policy-page
title: Security Policy
date: 2020-01-20T15:04:10.000Z
---

# This Security Policy applies only to your data on **Cyscale** Platform.

## Data Safety

All **Cyscale** Platform data is hosted on Google Cloud Platform (GCP). We take advantage of all the security and privacy features GCP provides, plus our team takes additional pro-active measures to maintain a secure infrastructure and make sure there are always multiple backups for infrastructure disaster recovery purposes (though we can't offer backup in case of user made errors on a per account basis). For more specific details regarding how GCP keeps data secure, please refer to [https://cloud.google.com/security](https://cloud.google.com/security). We don't publicize exactly what features, services, and data center we use for security reasons, but we can give you a brief overview of how we make sure your data is safe. We recommend you also review our Terms of Use and Privacy Policy.

## Data center Security

GCP maintains an impressive list of reports, certifications, and independent assessments to ensure complete and ongoing state-of-the-art data center security. They have many years of experience in designing, constructing, and operating large-scale data centers, which makes them the industry standard when it comes to security. The exact physical location of the data center that stores **Cyscale** Platform's data is private. Only those within Google who have a legitimate business know the actual location of Google’s data centers. Additionally, data centers are secured with a variety of physical controls to prevent unauthorized access.

## Infrastructure Security

All **Cyscale** Platform servers are run from own virtual private clouds (VPCs), with rules that prevent unauthorized requests from entering our network. **Cyscale** Platform infrastructure is hosted in a fully redundant, secure VPN environment, with access restricted to operations support staff only. This way we can leverage complete firewall protection, private IP addresses, and other security features. The whole system on which **Cyscale** Platform runs is behind a firewall and only the necessary ports are open to the outside network. Also, only authorized personnel, using SSH keys, have access to the system. Access is enabled only over a VPN connection.

## Application Security

All data to and from **Cyscale** Platform is sent securely over HTTPS. The initial connection is established over 2048 bit TLS, and the rest of the communication happens over 256 bit SSL. This is the standard technology for keeping an internet connection secure and prevents anyone from reading and modifying any information. Any data transferred between a user and **Cyscale** Platform is impossible to read or modify. We use the same level of encryption as do banks and financial institutions. All data is encrypted using SHA256withRSA algorithms, which scramble data in transit, preventing hackers from reading it. Your company-specific data inside **Cyscale** Platform is kept separate through a logical separation at the data tier, based on application-level access permissions and roles you set up in your workspaces. Passwords are encrypted so the database doesn't store actual values. Other data is not encrypted at rest.

## Operations Security

Our system is constantly monitored. We get reports in real time so we can instantly react in case a potential issue arises. All actions taken on production consoles are logged. We constantly monitor security, performance, and availability 24/7. We run automated security testing on an ongoing basis. We prioritize, resolve, and deploy discovered security issues quickly after discovery. Because we follow Continuous Delivery and Deployment (CI/CD) best practices, we can update **Cyscale** Platform on a daily basis and fix things as soon as we see them. We never access your data in **Cyscale** Platform, unless required for support reasons and with your explicit permission.
