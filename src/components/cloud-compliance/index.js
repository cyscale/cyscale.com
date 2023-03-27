import React from 'react';
import Services from './complianceServices';
import Sectionheader from '../layout/sectionheader';
import SecurityControlsandPolicies from './securityControlsAndPolicies';
import GetStarted from '../Home/getstarted';
import ComplianceCode from './complianceCode';
import MaintainThirdPartyData from './maintainThirdPartyData';
import CheckSquareIcon from '../../assets/images/check-square.svg';
import getStartedICon from '../../assets/images/getStartedICon.svg';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import LinksAndWhitepaper from '../products/LinksAndWhitepaper';

const topArticles = [
    {
        text: 'AWS SOC 2 Compliance Checklist:<br class="hidden lg:block"/> A Detailed Guide',
        link: '/blog/AWS-SOC-2-Compliance-Checklist-A-Detailed-Guide/',
        children: true
    },
    {
        text: 'Cloud Security and Compliance:<br class="hidden lg:block"/> A Guide for Your Cloud Infrastructure',
        link: '/blog/cloud-security-and-compliance/',
        children: true
    },
    {
        text: 'PCI-DSS Compliance in the Cloud',
        link: '/blog/pci-dss-compliance-in-cloud/'
    },
    {
        text: 'NIST Compliance in the Cloud',
        link: '/blog/nist-compliance-in-the-cloud/'
    },
    {
        text: 'HIPAA Compliance in the Cloud',
        link: '/blog/hipaa-compliance-in-cloud/'
    }
];

export default function CloudComplianceContent() {
    const data = useStaticQuery(graphql`
        query CloudCompliance {
            consistency: file(relativePath: { eq: "Achieve-clarity-consistency-image.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "cc-whitepaper-bluebird.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
        }
    `);

    const dataServices = [
        {
            icon: CheckSquareIcon,
            description: 'Set and forget compliance policies you only need to configure once '
        },
        {
            icon: CheckSquareIcon,
            description: 'Instant notifications for compliance drifts with built-in remediation advice '
        },
        {
            icon: CheckSquareIcon,
            description: 'Real-time evidence collection that keeps the organization audit-ready '
        },
        {
            icon: CheckSquareIcon,
            description: 'Automated, ongoing checks for all major security frameworks   '
        }
    ];
    return (
        <>
            <div id='start'>
                <Services
                    title='Cope with the growing complexity of your multi-cloud estate with:'
                    data={dataServices}
                />
            </div>
            <div className='complianceGetStartedGreyBg pt-12 lg:pt-28 pb-12 lg:pb-28'>
                <div className='max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px pb-20 sm:pb-0'>
                    <Sectionheader
                        headingText={[
                            'Achieve clarity & consistency',
                            <span key='acw123' className='block w-full font-normal'>
                                Set ongoing compliance checks on autopilot
                            </span>
                        ]}
                        description={[
                            'Get all the help you need to run regular tests on cybersecurity systems, policies, and processes.\n\nMake better use of your time while the cloud compliance checks continue to run in the background. Act on alerts when ',
                            <a
                                href='/use-cases/cloud-data-security/'
                                key='ds123'
                                className=' text-blue underline text-16px hover:no-underline hover:text-red'
                            >
                                information security
                            </a>,
                            ' risks emerge along and follow ready-to-use recommendations to avoid data breaches.\n\nTrim complexity from your workflow with automated evaluations for CIS Cloud Benchmarks, ISO 27001, SOC 2, GDPR (General Data Protection Regulation), HIPAA, PCI DSS (Payment Card Industry Data Security Standard), NIST, and many more security frameworks.'
                        ]}
                        pageName='cloudCompliance'
                    />
                </div>
                <div className='max-w-1366px mt-16 m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px flex justify-center'>
                    <GatsbyImage
                        image={data.consistency.childImageSharp.gatsbyImageData}
                        alt='Achieve clarity & consistency'
                    />
                </div>
            </div>
            <div
                className='max-w-1366px m-auto pt-6 pb-12 lg:pb-14 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'
                id='automate-updates'
            >
                <Sectionheader
                    headingText='Automate updates to Data Security & Privacy Policies'
                    description={[
                        'Keep website pages dedicated to cloud',
                        ' ',
                        <a
                            href='/use-cases/cloud-data-security/'
                            key='au123'
                            className=' text-blue underline text-16px hover:no-underline hover:text-red'
                        >
                            data security
                        </a>,
                        ' and data privacy policies up to date with zero manual work. Use the real-time data gathering built into the Cyscale Cloud Governance, Risk Management, and Compliance system and push cloud compliance information straight to them.\n\nConsolidate your reputation as a transparent, data-focused organization that proves to customers, auditors, and regulatory compliance bodies how robustly it protects Personally Identifiable information.'
                    ]}
                    pageName='cloudCompliance'
                    section='complianceAutoUpdates'
                />
            </div>
            <div
                className='max-w-1366px m-auto pt-12 lg:pt-32 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'
                id='minimize-overlap'
            >
                <Sectionheader
                    headingText='Minimize overlap between cloud compliance and security'
                    description={`Avoid duplicate work and solve two issues at the same time with the Cyscale Cloud Platform.\n\nOnboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box security controls and policies. Baked into the platform, they underpin key areas where you need to prove cloud compliance: `}
                />
            </div>
            <SecurityControlsandPolicies />
            <div className='gradientBG py-12 lg:py-20'>
                <GetStarted
                    description='Easier compliance is just a login away! Leave the heavy lifting to us'
                    btnText='START YOUR FREE TRIAL'
                    btnLink={'/free-trial'}
                    icon={getStartedICon}
                    sectionName='RemoteWork'
                />
            </div>
            <div
                className='max-w-1366px m-auto pt-12 lg:pt-32 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'
                id='compliance-govern'
            >
                <Sectionheader
                    headingText={[
                        'Align teams & tasks',
                        <span key='ali123' className='block w-full font-normal'>
                            Govern all cloud entities from a single dashboard
                        </span>
                    ]}
                    description={[
                        'Consolidate all the key elements of cloud compliance in an easy-to-use dashboard. Replace cloud portals with our Cloud Platform - the hub for a sweeping overview of your',
                        ' ',
                        <a
                            href='/products/cloud-security-posture-management/'
                            key='csp123'
                            className=' text-blue underline text-16px hover:no-underline hover:text-red'
                        >
                            cloud security posture
                        </a>,
                        '.\n\nImplement, manage, and monitor security policies and controls for single cloud, multi-cloud, and hybrid environments through reliable automation.\n\nDemonstrate compliance for multiple projects with read-only dashboard access or reports (CSV, PDF) you can share with internal stakeholders, prospects, or customers.'
                    ]}
                    section='complianceGovern'
                />
            </div>
            <ComplianceCode id='compliance-code' />
            <div
                className='max-w-1366px m-auto py-12 lg:py-24 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'
                id='maintain-third-party'
            >
                <Sectionheader headingText='Maintain a 3rd-party, fully auditable data trail' />
                <MaintainThirdPartyData />
            </div>
            <div className='gradientBG py-12 lg:py-20'>
                <GetStarted
                    description='Explore the full toolbox for your GRC system'
                    btnText='START YOUR FREE TRIAL'
                    btnLink={'/free-trial'}
                    icon={getStartedICon}
                    sectionName='RemoteWork'
                />
            </div>
            <LinksAndWhitepaper
                topArticles={topArticles}
                data={data}
                title={'Compliance'}
                titleCard={
                    'The In-Depth Guide <br class="hidden lg:block"/>to Cloud Compliance<br class="hidden lg:block" /> in 2023'
                }
                textCard={
                    'What standards exist on the market, and who are they destined for? <br /><br />Download the whitepaper to read about ISO 27001, SOC 2, PCI-DSS, GDPR, HIPAA.'
                }
                linkCard={'/whitepaper/the-complete-guide-to-cloud-compliance/'}
            />
        </>
    );
}
