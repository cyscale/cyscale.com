import React from 'react';

import heroBG from '../../assets/images/hero-CSPM-bg.svg';
import { useAppLink } from '../../common/links';
import Cspm from '../../components/cloud-security-posture-management';
import Layout from '../../components/layout/layout.js';
import { Helmet } from 'react-helmet';

const SecurityPosture = ({ location }) => {
    const appLink = useAppLink({ location });
    return (
        <>
            <Layout
                location={location}
                heroBG={heroBG}
                bannerTitle={`Cloud Security Posture\n Management Tool`}
                bannerDescription={`Continuous visibility of multi-cloud environments to identify cloud misconfiguration vulnerabilities. Scan, monitor, and remediate across AWS, Azure, Google Cloud, Oracle Cloud.`}
                bannerBtn1Text='Try Cyscale for free'
                bannerBtn1Link={appLink}
                pageName='CSPMPage'
                title='Cloud Security Posture Management - CSPM Tool - Cyscale'
                description='Continuous visibility of multi-cloud environments to identify cloud misconfiguration vulnerabilities. Scan, monitor, and remediate across AWS, Azure, Google Cloud, Oracle Cloud'
            >
                <Helmet>
                    <script type='application/ld+json' data-rh='true'>{`{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "CSPM is a group of security tools and technologies that empower security users to identify and remediate risk and misconfigurations in their cloud environments."
                                },
                                "name": "What is a Cloud Security Posture Management (CSPM) tool?"
                            },
                            {
                                "@type": "Question",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "\n                    <ul>\n                        <li>Continuous compliance monitoring of your cloud resources, so you can identify and remediate risk in\n                        areas such as storage, encryption, and permissions</li>\n                        <li>\n                        Technical security controls and visibility over access configuration, to help reduce risk and ensure that compliance standards are met</li>\n                        <li>Easily identify risks that could compromise your cloud network</li>\n                        <li>Remediation guidance, to quickly solve misconfigurations leading to compliance violations</li>\n                    </ul>\n                "
                                },
                                "name": "What are some key capabilities of a CSPM solution?"
                            },
                            {
                                "@type": "Question",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "\n                    <p>Visibility into your company's cloud infrastructure and security configurations.</p>\n                    <p>Security teams can assess posture across multiple cloud environments and accounts through a centralized dashboard that can give actionable metrics.</p>\n                    <p>Evidence.</p>\n                    <p>Violations in your cloud infrastructure are mapped to regulatory standards, security frameworks,\n                    as well as internal policies, resulting in evidence collection that enables audits.</p>\n                    <p>\n                    <strong>Reporting and alerting.</strong>\n                    Insights on your cloud's risk posture, as well as alerts and notifications bring risk to your attention, enabling investigation and in-time remediation.</p>\n                "
                                },
                                "name": "What are some benefits of utilizing a CSPM tool?"
                            }
                        ]
                    }`}</script>
                </Helmet>
                <Cspm />
            </Layout>
        </>
    );
};

export default SecurityPosture;
