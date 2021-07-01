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
       >
            <CloudComplianceContent />
        </Layout>
    );
}
