import React from 'react';

import heroBG from '../../assets/images/hero-CSPM-bg.svg';
import Layout from '../../components/layout/layout.js';
import iconTwo from '../../assets/images/elemente-vectoriale-07.png';
import iconThree from '../../assets/images/elemente-vectoriale-08.png';
import { Policies, Inventory, Alerts } from '../../components/cloud-security-posture-management/images';
import Fproducts from '../../components/cloud-security-posture-management/featuredProducts';
import GetStarted from '../../components/Home/getstarted';
import MisconfigCoverage from '../../components/cloud-security-posture-management/misconfigCoverage';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import { graphql, useStaticQuery } from 'gatsby';

const topArticles = [
    {
        text: 'Common Cloud Misconfigurations and <br class="hidden lg:block" /> How to Avoid Them',
        link: '/blog/common-cloud-misconfigurations-how-to-avoid-them/',
        children: true
    },
    {
        text: 'Understanding S3 Bucket Security – <br class="hidden lg:block" /> A Contextual Approach',
        link: '/blog/s3-bucket-security/',
        children: true
    },
    {
        text: '5 Steps to Improve Your Company’s Cloud Security Posture',
        link: '/blog/improve-cloud-security-posture/'
    },
    {
        text: 'CSPM: A Comprehensive Guide',
        link: '/blog/cloud-security-posture-management-cspm-guide/'
    }
];

const dataFeaturedProducts = [
    {
        tabTitle: 'Prevent misconfigurations, mismanagement and mistakes',
        sectionTitle: 'Prevent misconfigurations & mistakes',
        sectionDescription: `Cyscale automatically detects and reports violations of security controls and compliance risks. \n\nIt's much easier to keep your cloud assets in check with ongoing change monitoring that bridges cloud providers. \n\nSingle out misconfigured services and see how failed security controls impact compliance from a single, unified view. Plus, you get reliable remediation guidelines in the same place.`,
        featureImage: <Inventory />
    },
    {
        tabTitle: 'Cut through the noise with targeted alerts',
        sectionTitle: 'Cut through the noise',
        sectionDescription: [
            "Get relevant alerts when your cloud assets drift away from established security and compliance standards.\n\nMake Cyscale your single source of truth for CSPM and never miss an important security event. \n\nMove beyond bulky, list-based management. Cyscale's",
            ' ',
            <a
                href='/products/security-knowledge-graph/'
                key='1asd'
                className='text-blue underline text-16px hover:no-underline hover:text-red'
            >
                Security Knowledge Graph™
            </a>,
            ' ',
            'makes precise correlations between all your cloud assets and data repositories to automatically pinpoint critical security improvements.'
        ],
        featureImage: <Alerts />
    },
    {
        tabTitle: 'Automate compliance checks & security controls audits',
        sectionTitle: 'Automate compliance checks',
        sectionDescription: [
            'Use Cyscale for',
            ' ',
            <a
                href='/use-cases/cloud-compliance-and-auditing/'
                key='1as4d'
                className='text-blue underline text-16px hover:no-underline hover:text-red'
            >
                governance automation
            </a>,
            ' across cloud providers and internal teams to ensure consistent security and compliance.\n\nWe keep your clouds under continuous assessment and provide in-app security consultancy so you make the most of your time and effort.\n\n',
            <strong>Coming soon: </strong>,
            'create custom Controls that tap into our Security Knowledge Graph™ and automate the security and compliance checks that matter the most for your organization.'
        ],
        featureImage: <Policies />
    }
];

const CloudMissConfiguration = ({ location }) => {
    const data = useStaticQuery(graphql`
        query CloudMisconfigurationQuery {
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
        }
    `);

    return (
        <Layout
            heroBG={heroBG}
            location={location}
            bannerBtn1Text='BOOK A DEMO'
            bannerBtn1Link={'/request-demo/'}
            bannerBtn1LinkInternal={true}
            bannerBtn2Text='Request demo'
            bannerBtn2Link='/request-demo/'
            pageName='MisconfigurationsPage'
            title='Cloud Misconfiguration Security - Cyscale'
            bannerTitle='Eliminate Cloud Misconfigurations with Security Automation'
            bannerDescription='Improve your security posture in the cloud, a centralized view of all your assets and servers in one place. Detect and eliminate critical misconfigurations, policy violations, and mistakes.'
            description='Improve your security posture in the cloud, a centralized view of all your assets and servers in one place. Detect and eliminate critical misconfigurations, policy violations, and mistakes.'
        >
            <Fproducts sectionTitle='Cyscale has you covered' data={dataFeaturedProducts} id='start' />
            <MisconfigCoverage id='misconfiguration-coverage' />

            <div className='gradientBG'>
                <GetStarted
                    description='When did you last scan your cloud for misconfigurations?'
                    btnText='Start scanning for free'
                    btnLink={'/free-trial/'}
                    icon={iconTwo}
                    icon2={iconThree}
                    sectionName='getStartedFooter'
                />
            </div>
            <LinksAndWhitepaper
                topArticles={topArticles}
                data={data}
                title={'Misconfigurations'}
                titleCard={'The Complete Guide<br class="hidden lg:block" /> to Cloud Storage Misconfigurations'}
                textCard={
                    'This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data security breaches and the importance of a secure cloud storage infrastructure.'
                }
                linkCard={'/whitepaper/cloud-storage-misconfigurations/'}
                misconfigurationWhitepaper={true}
            />
        </Layout>
    );
};

export default CloudMissConfiguration;
