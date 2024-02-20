---
templateKey: blog-post
title: "Multi-Cloud Security: What CISOs & CTOs Need to Know "
seoTitle: "Multi-Cloud Security: What CISOs & CTOs Need to Know "
authors: Sabrina Lupșan
permalink: multi-cloud-security-what-ciso-cto-needs-to-know
categories:
  - Cloud Security
  - Cloud Native Security
date: 2024-02-19T11:40:03.512Z
description: "While multi-cloud gives several advantages, be careful not to
  compromise on security and visibility, giving the CISO or CTO sleepless
  nights. "
seoDescription: While multi-cloud gives several advantages, be careful not to
  compromise on security and visibility, giving the CISO or CTO sleepless
  nights.
featuredpost: true
featuredimage: /img/multicloud-security-ciso-cto.png
tableOfContents: true
---
## Why go multi-cloud? It’s not always by choice 

A multi-cloud strategy can combine the best of two (or more!) worlds, allowing cloud-native organizations to choose best-of-breed options for building apps and storing data in the cloud. At least this is true when the multi-cloud approach is by design.  

It’s not unheard of for a multi-cloud approach to happen by accident. Along with [mergers and acquisitions that force two IT estates together](https://cyscale.com/blog/cloud-security-assessment-vital-part-mergers-acquisitions/), so-called ‘shadow IT’ is a significant problem – where teams make use of an unapproved solution resulting in a complex cloud infrastructure that spans across different cloud vendors.  

While [multi-cloud](https://cyscale.com/blog/cloud-native-tools-multi-cloud/) companies can gain numerous advantages - each public cloud has its own strengths - the downsides should not be disregarded, especially if they mean compromising on security and visibility and giving the CISO or CTO sleepless nights. 

## Advantages and disadvantages of multi-cloud 

CTOs in cloud-native businesses typically choose multiple cloud providers, such as AWS, Azure, Google Cloud, Alibaba, and others, to maximize the potential of their tech stack and access a broader range of features. Azure is known for its tight integration with other Microsoft products, AWS has strong support for general enterprise compute and storage, while Google Cloud has sought to differentiate with a focus on Machine Learning. The latest battleground is on AI and LLM support.  

But companies with legacy infrastructure, or those in highly regulated industries such as finance and healthcare, may also have on-premises assets as well, resulting in a hybrid mix of private and public cloud infrastructure. 

### Key reasons to consider a multi-cloud approach: 

* **Flexibility:** Since you have access to multiple cloud providers, you can choose the service that best suits your needs out of a pool of options. For example, if you want to store data in a storage asset, you don’t necessarily have to go with a bucket from AWS; you can also consider a storage account in Azure or weigh out your options based on integration with other software, pricing variables, or even geography.  
* **Optimizing costs:** Although broadly speaking, different clouds stack up in a like-for-like comparison, there are subtle but important differences in how each provider does things and charges for them. So, the flexibility of choosing services from different providers allows organizations to optimize costs effectively, avoiding unnecessary expenses and ensuring that resources are allocated efficiently. 
* **Redundancy and high availability:** Distributing data across multiple cloud platforms ensures high availability and redundancy. If one provider experiences downtime or disruptions, data remains accessible from alternative sources, minimizing the risk of service interruptions. 
* **Geo-location options:** By distributing data across vendors, you can be closer to end-users from all around the world, reducing latency and improving overall user experience. Moreover, for data sovereignty reasons, you can also ensure compliance with various standards that may require that data stays inside a particular country or geographical location. This is a particularly important consideration in regulated sectors but can just as easily apply to any company that deals with customer data – which is pretty much every company. The EU’s GDPR privacy regulation is a prime compliance example, and the US is catching up now with state-specific considerations, like California’s CCPA.  

## Risks and downsides of multi-cloud 

* **Added complexity:** An infrastructure that spans across cloud vendors is inherently more complex and more challenging to manage and secure. This is a daunting task for any CTO and engineering team. Each cloud provider has its own naming conventions, service structures, deployment models, API endpoints, and more, meaning both engineering and security professionals often forget best practices for each specific service, which can and will introduce security gaps in the company. 
* **Reduced visibility:** This is a big one. There is no security without [visibility](https://cyscale.com/blog/provide-visibility-in-cloud-okta-integration/) in the cloud, after all, you can’t secure what you can’t see. And something that’s less obvious but even more important in the cloud is context. When you can’t see all your assets, you can’t understand the relations between them and how a misconfiguration on one asset affects another. This also goes for users (both human and non-human identities) and their permissions. Without comprehensive visibility and inventory, you cannot identify vulnerabilities and gaps in your security.  
* **The need for cloud-specific skills:** Being an expert in Azure does not directly translate to AWS and vice-versa. Same with any other cloud. All vendors have different assets, each with their own technologies, settings, security best practices, even naming conventions

<!-- Start of Text Image Widget -->
<div class='mt-16 rounded-tl-2xl rounded-b-2xl grid grid-cols-12 gap-4 bg-zircon py-8 px-4 lg:py-4' style='borderTopRightRadius: 3rem'>
    <div class='col-span-12 lg:col-span-2'>
        <div class='flex justify-center'>
            <img src='/img/cloud-icon-widget.svg' alt='' id='img-text-button' />
        </div>
    </div>
    <div class='col-span-12 lg:col-span-6 flex items-center justify-center'>
         <p class='font-montserrat font-bold' id="paragraph-text-button">
            Take a Tour of<span id="font-gradient">Cyscale's CNAPP</span>Today
        </p>
    </div>
    <div class='col-span-12 lg:col-span-4 flex justify-center items-center'>
        <a class='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind' href='/full-platform-tour/'>
            <span style='padding: 0.625rem 2.5rem' class='text-white block'>
                Start now
            </span>
        </a>
    </div>
</div>
<!-- End of Text Image Widget -->