---
templateKey: blog-post
title: "Compliance Countdown: Navigating the Transition to PCI DSS Version 4"
seoTitle: "Compliance Countdown: Navigating the Transition to PCI DSS Version 4"
authors: Sabrina Lupșan
permalink: pci-dss-version-4
categories:
  - News
  - Compliance
date: 2023-07-20T09:21:54.388Z
description: >
  The new PCI DSS version has been released, and the old PCI DSS standard will
  be deprecated as of the 31st of March, 2024. In this article, we will discuss
  all the deadlines by which you have to become compliant, details about the new
  requirements, and everything else you need to know about PCI DSS version 4.
seoDescription: The new PCI DSS version has been released, and the old PCI DSS
  standard will be deprecated as of the 31st of March, 2024. In this article, we
  will discuss all the deadlines by which you have to become compliant, details
  about the new requirements, and everything else you need to know about PCI DSS
  version 4.
featuredpost: true
featuredimage: /img/45_blog-pci-v4.webp
tableOfContents: true
tags:
  - pci-dss
  - compliance
---
The new [PCI DSS](https://cyscale.com/blog/pci-dss-compliance-in-cloud) version has been released, and the old PCI DSS standard will be deprecated as of the 31st of March, 2024. In this article, we will discuss all the deadlines by which you have to become compliant, details about the new requirements, and everything else you need to know about PCI DSS version 4.

## Timeline and deadlines

PCI DSS version 4 appeared at the end of March 2022 and its requirements will become mandatory in two phases: the first one is March of 2024, and the final one is March of 2025.

The new version brings considerable changes, but most of the new requirements will not be mandatory until 2025. However, companies that manage to fulfill them before 2025 can audit them.

The old version, PCI DSS 3.2.0., will remain active until the 31st of March, 2024, to allow companies enough time to recertify with the new version.

## Changes in PCI DSS version 4, explained

New requirements have been added to all of the categories to better reflect the current cybersecurity landscape. Some examples of areas covered by the new requirements include the authentication process, logging and monitoring, vulnerability scanning, and others.

Most of the sections have been revised or contain new requirements.

PCI DSS is structured into twelve requirements, and each contains its own sections. The requirements are:

### 1. Install and maintain network security controls

This requirement now specifies “network security controls” instead of “firewalls”, to cover more network security technologies. All of the sections in this category have been changed to the following:

* 1.1 Processes and mechanisms for installing and maintaining network security controls are defined and understood.
* 1.2 Network security controls (NSCs) are configured and maintained.
* 1.3 Network access to and from the cardholder data environment is restricted.
* 1.4 Network connections between trusted and untrusted networks are controlled.
* 1.5 Risks to the CDE from computing devices that are able to connect to both untrusted networks and the CDE are mitigated.

### 2. Apply Secure Configurations to All System Components

This requirement was initially named “Do not use vendor-supplied defaults for system passwords and other security parameters.”. Now, it refers to all of the company’s configurations, and not only to using vendor-supplied defaults. The sections in this category are the following:

* 2.1 Processes and mechanisms for applying secure configurations to all system components are defined and understood.
* 2.2 System components are configured and managed securely.
* 2.3 Wireless environments are configured and managed securely.

### 3. Protect Stored Account Data

With the third requirement, the focus is switched to account data, compared to the old version, where “cardholder data" was mentioned instead. New sections are added in relation to PAN (Primary Account Number) and SAD (Sensitive Authentication Data) which cover the storage, encryption and hashing of this data.

* 3.1 Processes and mechanisms for protecting stored account data are defined and understood.
* 3.2 Storage of account data is kept to a minimum.
* 3.3 Sensitive authentication data (SAD) is not stored after authorization.
* 3.4 Access to displays of full PAN and ability to copy cardholder data are restricted.
* 3.5 Primary account number (PAN) is secured wherever it is stored.
* 3.6 Cryptographic keys used to protect stored account data are secured.
* 3.7 Where cryptography is used to protect stored account data, key management processes and procedures covering all aspects of the key lifecycle are defined and implemented.

### 4. Protect Cardholder Data with Strong Cryptography During Transmission Over Open, Public Networks

“Strong cryptography” is now part of the 4th requirement name, to highlight the importance of using appropriate algorithms. The new sections introduce rules regarding the storage and usage of keys and certificates. 

* 4.1 Processes and mechanisms for protecting cardholder data with strong cryptography during transmission over open, public networks are defined and documented.  
* 4.2 PAN is protected with strong cryptography during transmission. 

### 5. Protect All Systems and Networks from Malicious Software 

This requirement has been renamed, replacing “anti-virus” with “malicious” software to cover a broader range of technologies. Moreover, sections in this category now regulate the frequency of scans and checks, as well as other aspects.

* 5.1 Processes and mechanisms for protecting all systems and networks from malicious software are defined and understood.
* 5.2 Malicious software (malware) is prevented, or detected and addressed.
* 5.3 Anti-malware mechanisms and processes are active, maintained, and monitored.
* 5.4 Anti-phishing mechanisms protect users against phishing attacks.

### 6. Develop and Maintain Secure Systems and Software

In this requirement, one of the new sections added (6.4) refers to automating the detection and prevention of attacks over public-facing web apps. Sections 6.1 and 6.3 also contain new requirements.

* 6.1 Processes and mechanisms for developing and maintaining secure systems and software are defined and understood.
* 6.2 Bespoke and custom software are developed securely.
* 6.3 Security vulnerabilities are identified and addressed.
* 6.4 Public-facing web applications are protected against attacks.
* 6.5 Changes to all system components are managed securely.

### 7. Restrict Access to System Components and Cardholder Data by Business Need to Know

This requirement includes new rules regarding the review of user accounts and their privileges, as well as the management and privileges of applications and system accounts.

* 7.1 Processes and mechanisms for restricting access to system components and cardholder data by business need to know are defined and understood.
* 7.2 Access to system components and data is appropriately defined and assigned.
* 7.3 Access to system components and data is managed via an access control system(s).

### 8. Identify Users and Authenticate Access to System Components 

Many new sections regarding MFA, credentials and the entire authentication process have been added in this requirement. Two examples of changes that companies compliant with PCI DSS have to implement now are: the minimum length of a user account password has increased from 7 to 12 characters, and companies are not allowed to store passwords/passphrases in scripts or files.

* 8.1 Processes and mechanisms for identifying users and authenticating access to system components are defined and understood.
* 8.2 User identification and related accounts for users and administrators are strictly managed throughout an account’s lifecycle.
* 8.3 Strong authentication for users and administrators is established and managed.
* 8.4 Multi-factor authentication (MFA) is implemented to secure access into the CDE.
* 8.5 Multi-factor authentication (MFA) systems are configured to prevent misuse.
* 8.6 Use of application and system accounts and associated authentication factors is strictly managed.

### 9. Restrict Physical Access to Cardholder Data 

This requirement does not have many changes. Some sections that refer to roles and responsibilities, as well as the frequency of device inspections have been added.

* 9.1 Processes and mechanisms for restricting physical access to cardholder data are defined and understood.
* 9.2 Physical access controls manage entry into facilities and systems containing cardholder data.
* 9.3 Physical access for personnel and visitors is authorized and managed.
* 9.4 Media with cardholder data is securely stored, accessed, distributed, and destroyed.
* 9.5 Point of interaction (POI) devices are protected from tampering and unauthorized substitution.

### 10. Log and Monitor All Access to System Components and Cardholder Data 

New sections in this requirement regulate the automation of logging, prompt response to failed security controls, as well as how often logs should be reviewed:

* 10.1 Processes and mechanisms for logging and monitoring all access to system components and cardholder data are defined and documented.
* 10.2 Audit logs are implemented to support the detection of anomalies and suspicious activity, and the forensic analysis of events.
* 10.3 Audit logs are protected from destruction and unauthorized modifications.
* 10.4 Audit logs are reviewed to identify anomalies or suspicious activity.
* 10.5 Audit log history is retained and available for analysis.
* 10.6 Time-synchronization mechanisms support consistent time settings across all systems.
* 10.7 Failures of critical security control systems are detected, reported, and responded to promptly.

### 11. Test Security of Systems and Networks Regularly

This category includes the following:

* a new requirement to manage all applicable vulnerabilities,
* a new requirement to perform internal vulnerability scans via authenticated scanning,
* a new requirement to deploy a change-and-tamper-detection mechanism to alert for unauthorized modifications to the HTTP headers and contents of payment pages as received by the consumer browser, [according to PCI SSC](https://listings.pcisecuritystandards.org/documents/PCI-DSS-v3-2-1-to-v4-0-Summary-of-Changes-r1.pdf).

The full list of the sections included in this requirement is:

* 11.1 Processes and mechanisms for regularly testing security of systems and networks are defined and understood.
* 11.2 Wireless access points are identified and monitored, and unauthorized wireless access points are addressed.
* 11.3 External and internal vulnerabilities are regularly identified, prioritized, and addressed.
* 11.4 External and internal penetration testing is regularly performed, and exploitable vulnerabilities and security weaknesses are corrected.
* 11.5 Network intrusions and unexpected file changes are detected and responded to.
* 11.6 Unauthorized changes on payment pages are detected and responded to.

### 12. Support Information Security with Organizational Policies and Programs

The title modification reflects that the focus is on organizational policies and programs. In PCI DSS version 4, requirements specify that the audited company should, at least every 12 months:

* document and review cryptographic cipher suites and protocols,
* review hardware and software components,
* document the PCI DSS scope,
* review and update the security awareness program, among other requirements, which are presented below.

 

* 12.1 A comprehensive information security policy that governs and provides direction for protection of the entity’s information assets is known and current.
* 12.2 Acceptable use policies for end-user technologies are defined and implemented.
* 12.3 Risks to the cardholder data environment are formally identified, evaluated, and managed.
* 12.4 PCI DSS compliance is managed.
* 12.5 PCI DSS scope is documented and validated.
* 12.6 Security awareness education is an ongoing activity.
* 12.7 Personnel are screened to reduce risks from insider threats.
* 12.8 Risk to information assets associated with third-party service provider (TPSP) relationships is managed.
* 12.9 Third-party service providers (TPSPs) support their customers’ PCI DSS compliance.
* 12.10 Suspected and confirmed security incidents that could impact the CDE are responded to immediately.

## What do you have to do now? 

You have to become PCI-DSS version 4 certified until the 31st of March 2024. There are two possible paths for your company:

1. Your company is already PCI-DSS certified, so until the first deadline you must cover some of the new requirements and until the last deadline all of them, or
2. Your company is not PCI-DSS certified, so you have to start from the beginning with the new PCI-DSS version and fulfill all requirements according to the specified deadlines.

This new version of PCI DSS brings considerable changes, and the process of achieving compliance with PCI DSS can be long and cumbersome.

Cyscale helps companies accelerate their cloud compliance process and ace audits by providing:

* security controls that check if you’re implementing the requirements correctly, and
* a page for each standard where you can track your progress and history.
