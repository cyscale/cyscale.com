import React from 'react';
import { useAppLink } from '../../common/links';
import CloudComplianceContent from '../../components/cloud-compliance';
import Layout from '../../components/layout/layout.js';

const CloudCompliance = ({ location }) => {
    const appLink = useAppLink({ location });

    return (
        <Layout
            location={location}
            pageName='ComplianceAuditing'
            bannerTitle={`Cloud Compliance Platform`}
            bannerDescription={`Compliance toolbox for cloud-native and cloud-first organizations\n\nThe Cyscale Cloud Platform gives you full visibility across cloud and data repos, from app-level to your overall compliance posture. `}
            bannerBtn1Text='Try Cyscale for free'
            bannerBtn1Link={appLink}
            title='Cloud Compliance Platform - Automation and Multi-Cloud Security | Cyscale'
            description='Manage, monitor, and prove cloud compliance with Cyscale. Automate checks for 500+ cloud controls & policies to comply with ISO 27001, PCI, SOC 2 & more.'
        >
            <CloudComplianceContent />
        </Layout>
    );
};

export default CloudCompliance
