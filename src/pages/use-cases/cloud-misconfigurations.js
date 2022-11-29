import React from 'react';

import heroBG from '../../assets/images/hero-CSPM-bg.svg';
import { useAppLink } from '../../common/links';
import Layout from '../../components/layout/layout.js';
import iconTwo from '../../assets/images/elemente-vectoriale-07.png';
import iconThree from '../../assets/images/elemente-vectoriale-08.png';
import {
    DetectPreventMisconfigurations,
    CutNoise,
    AutomateCompliance
} from '../../components/cloud-security-posture-management/images';
import Fproducts from '../../components/cloud-security-posture-management/featuredProducts';
import GetStarted from '../../components/Home/getstarted';
import MisconfigCoverage from '../../components/cloud-security-posture-management/misconfigCoverage';

const dataFeaturedProducts = [
    {
        tabTitle: 'Prevent misconfigurations, mismanagement and mistakes',
        sectionTitle: 'Prevent misconfigurations & mistakes',
        sectionDescription: `Cyscale automatically detects and reports violations of security controls and compliance risks. \n\nIt's much easier to keep your cloud assets in check with ongoing change monitoring that bridges cloud providers. \n\nSingle out misconfigured services and see how failed security controls impact compliance from a single, unified view. Plus, you get reliable remediation guidelines in the same place.`,
        featureImage: <DetectPreventMisconfigurations />
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
        featureImage: <CutNoise />
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
        featureImage: <AutomateCompliance />
    }
];

const CloudMissConfiguration = ({ location }) => {
    const appLink = useAppLink({ location });
    return (
        <Layout
            heroBG={heroBG}
            location={location}
            bannerBtn1Link={appLink}
            pageName='MisconfigurationsPage'
            bannerBtn1Text='Try Cyscale for free'
            title='Cloud Misconfiguration Security - Cyscale'
            bannerTitle='Cloud Misconfiguration Security'
            bannerDescription='Improve your security posture in the cloud, a centralized view of all your assets and servers in one place. Detect and eliminate critical misconfigurations, policy violations, and mistakes.'
            description='Improve your security posture in the cloud, a centralized view of all your assets and servers in one place. Detect and eliminate critical misconfigurations, policy violations, and mistakes.'
        >
            <Fproducts sectionTitle='Cyscale has you covered' data={dataFeaturedProducts} id="start"/>
            <MisconfigCoverage id="misconfiguration-coverage"/>

            <div className='gradientBG'>
                <GetStarted
                    description='When did you last scan your cloud for misconfigurations?'
                    btnText='Start scanning for free'
                    btnLink={appLink}
                    ExternalLink
                    icon={iconTwo}
                    icon2={iconThree}
                    sectionName='getStartedFooter'
                />
            </div>
        </Layout>
    );
};

export default CloudMissConfiguration;
