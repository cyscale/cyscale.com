---
templateKey: blog-post
title: PSD2 Requirements Through the Technical Lens
authors: Manuela Țicudean
permalink: PSD2-technical-requirements
category: Compliance
date: 2022-03-04T13:12:59.854Z
description: "A deeper look at the most important regulation for payment
  services in Europe (PSD2), surfacing any requirements for the technology at
  the core of these businesses, tech-governance included. "
featuredpost: true
featuredimage: /img/cyscale_psd2.png
tags:
  - PSD2
  - fintech
  - regulation
  - technical risk
  - ""
---
The fintech sector has known an impressive growth in funding over the past year. A recent Insider Intelligence report shows that the global funding for fintech in the first three quarters of 2021 reached $94.7 billion, which is shy of the total for 2019 and 2020 combined. In the UK alone, fintech funding nearly doubled in the mentioned timeframe, as compared to the year before (2020). 

Around the fintech businesses, entire ecosystems have emerged. There are national as well as international level organizations that collaborate and launch initiatives to drive the competition as well as innovation in the sector. Regulatory bodies are part of the ecosystems as well, making sure that businesses are doing the best they can to protect fintech consumers. 

The purpose of this article is to take a deeper look at the most important regulations for payment services (which is a large subset of fintech services) in Europe, trying to showcase the requirements for the technology at the core of these businesses, its governance included. 

We keep in mind that although the UK has left the European Union, they decided to adopt a great part of the regulation under their legislation as well.

## The PSD2 Directive

Probably the most important European regulation that impacts fintech is the PSD2 Directive. Developed by the European Parliament and the European Council, introduced in 2015, and enforced since 2018, it describes rules, rights and obligations of Payment Service Providers and the users of these services. In the next sections, we go through the structure of the document, emphasizing the articles that regulate the “tech” in “fintech”.

It starts with 113 points that set up the context for the regulation and then follows with 6 main sections (also called titles).

### Scope

**The first section** clarifies the subject matter (who is affected), and that is Payment Service Providers. As we’ll see below, this includes traditional financial services providers, for example banks, but also new providers, such as fintechs. There’s also an article regarding scope: it applies to payment services provided within the European Union.

Payment Service Providers are grouped under 6 distinct categories, but most fintechs fall under **payment institutions** and **electronic money institutions**.

Any institution that provides payment services (enumerated below) after being authorized to do so, becomes a **payment institution**.

The different types of **payment services**, as understood from Annex 1 of the Directive are: 

* operating a payment account for a user
* placing or withdrawing cash from a payment account
* payment transactions (i.e. transfers of funds) within the same provider, or to an external provider
* issuing of payment cards
* issuing sets of rules agreed between the issuer and the user that are then used to initiate a payment
* accepting and processing payment transactions
* money remittance, which is transfer of money without any payment accounts being created or used (think Western Union)
* payment initiation — initiate payment orders at user request, when the payment account is held at a different provider
* account information — provides information on payment accounts held by the user at a different provider

An **electronic money institution** is a legal entity that is authorized to issue electronic money. An electronic money institution can at the same time be a payment institution. There is a specific authorization license for each of these types of providers.

### Becoming a PSP

**The second section**, or title, adds further provisions for Payment Service Providers, including the procedure to become licensed as one.  

*Article 5*, titled “Applications for authorization”, contains the list of artefacts to be submitted when a fintech applies for authorization as a payment institution. Among these, the directive requires **a security policy document** that must contain a detailed risk assessment and a description of security control and mitigation measures taken to protect users against those risks, including the illegal use of sensitive and personal data. It is also explicitly states that the policy must indicate how the institution ensures a high level of **technical security and data protection**, including of the software and IT systems used by the applicant, and even when these are entirely or partly outsourced. 

As we can see, already during the application process, the fintech business must have technical security controls in-place, as well as ways to describe them and prove their enforcement. 

**The third section** (title) of the directive refers to the transparency of conditions, as well as information requirements for payment service providers (data regarding the payments which must be communicated to the service user at specific points in time). It does not contain any requirements for tech.

### Proper Security

**The fourth section** (title) details the rights and obligations in relation to the provision and use of payment services, for both the providers and users. This section is again relevant for those in charge of technology inside fintech companies.  

*Article 66* and *Article 67* describe the obligations of PISPs (payment initiation service providers) and AISPs (account information service providers), which are both types of payment service providers. Among others, they must: 

* Ensure that the personalized security credentials of the user are not accessible to other parties, and that they are transmitted through safe and efficient channels. 
* Ensure that any other info about the payment service user is only provided to the payee 
* Use common and secure open standards of communication with other services involved
* Not store sensitive payment data of the user 
* Not use, access, or store any user data for purposes other than provision of the service

*Article 70* states the obligations of a Payment Service Provider in relation to payment instruments (remember, these are payment cards, and also procedures agreed between the user and the service provider on how to initiate payment orders), one of which is to make sure that the personalized security credentials are not accessible to other parties.

*Article 74* states that when the Payment Service Provider doesn’t enforce strong customer authentication (**SCA**; think MFA), it is liable for any financial losses incurred by the payer because of that.

*Article 89* details the liability of Payment Service Providers in case they fail to correctly and in-time execute payment transactions. This part stresses out the importance of a solid **business continuity policy** and plan.

*Article 95* requires two things from the Payment Service Providers:

* mitigation measures and control mechanisms to manage operational and security risks
* to regularly provide operational and security risk assessments to competent authorities.

*Article 97* requires the implementation of strong customer authentication “that includes elements which dynamically link the transaction to a specific amount and a specific payee”. It also requires that “payment service providers have in place adequate security measures to protect the confidentiality and integrity of payment service users’ personalized security credentials”.

### Ending Notes

Finally, *Article 98* requires that, by July 2017, the Euro Bank Association (which is another EU institution) will have drafted regulatory technical standards to address the requirements from the previous article (strong customer authentication and protecting the users’ personalized security credentials).

The **last two sections** refer to user information rights, and final provisions, respectively, but neither of them contains additional technical requirements.

The Regulatory Technical Standards developed by the EBA in cooperation with other relevant bodies will be the subject of the next article in the series, where we will take a deeper dive into what they mean for a fintech.