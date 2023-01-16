import React from 'react';

import heroBG from '../../assets/images/hero-CSPM-bg.svg';
import Cspm from '../../components/cloud-security-posture-management';
import Layout from '../../components/layout/layout.js';

const SecurityPosture = ({ location }) => {
    return (
        <>
            <Layout
                location={location}
                heroBG={heroBG}
                bannerTitle={`Cloud Security Posture\n Management Tool`}
                bannerDescription={`Continuous visibility of multi-cloud environments to identify cloud misconfiguration vulnerabilities, ultimately securing your cloud from data breaches and leaks. Scan, monitor, and remediate across AWS, Azure, Google Cloud, Alibaba Cloud.`}
                bannerBtn1Text='Start Free Trial'
                bannerBtn1Link={'/free-trial'}
                bannerBtn1LinkInternal={true}
                bannerBtn2Text='Request demo'
                bannerBtn2Link='/request-demo'
                pageName='CSPMPage'
                title='Cloud Security Posture Management - CSPM Tool - Cyscale'
                description='Continuous visibility of multi-cloud environments to identify cloud misconfiguration vulnerabilities. Scan, monitor, and remediate across AWS, Azure, Google Cloud, Alibaba Cloud'
            >
                <Cspm />
            </Layout>
        </>
    );
};

export default SecurityPosture;
