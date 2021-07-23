import React from 'react';
import CloudComplianceContent from '../../components/cloud-compliance';
import Layout from '../../components/layout/layout.js';

export default function CloudCompliance() {
    return (
        <Layout
            pageName='ComplianceAuditing'
            bannerTitle={`Compliance toolbox for cloud-native and cloud-first organizations`}
            bannerDescription={`Compliance toolbox for cloud-native and cloud-first organizations\n\nThe Cyscale Power Cloud Platform gives you full visibility across cloud and data repos, from app-level to your overall compliance posture. `}
            bannerBtn1Text='Try Cyscale for free'
            bannerBtn1Link='https://app.cyscale.com/'
            title="Cloud Security Compliance - Cyscale Power Cloud Platform"
            description="Manage, monitor, and prove cloud compliance with Cyscale. Automate checks for 500+ cloud controls & policies to comply with ISO 27001, PCI, SOC 2 & more."
         
       >
            <CloudComplianceContent />
        </Layout>
    );
}
