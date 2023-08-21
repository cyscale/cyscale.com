import React from 'react';
import CloudComplianceContent from '../../components/cloud-compliance';
import Layout from '../../components/layout/layout.js';

const CloudCompliance = ({ location }) => {
    return (
        <Layout
            location={location}
            pageName='ComplianceAuditing'
            bannerTitle={`Cloud Compliance Platform`}
            bannerDescription={`Compliance toolbox for cloud-native and cloud-first organizations\n\nThe Cyscale Cloud Platform gives you full visibility across cloud and data repos, from app-level to your overall compliance posture. `}
            bannerBtn1Text='Start Free Trial'
            bannerBtn1Link={'/free-trial/'}
            bannerBtn1LinkInternal={true}
            bannerBtn2Text='Request demo'
            bannerBtn2Link='/request-demo/'
            title='Cloud Security Compliance. Security & Compliance Checks - Cyscale'
            description='Manage, monitor, and prove cloud compliance with Cyscale. Automate checks for 500+ cloud controls & policies to comply with ISO 27001, PCI, SOC 2 & more.'
        >
            <CloudComplianceContent />
        </Layout>
    );
};

export default CloudCompliance;
