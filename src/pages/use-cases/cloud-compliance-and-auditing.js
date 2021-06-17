import React from 'react';

import heroBG from '../../assets/images/hero-home-bg.jpg';
import CloudComplianceContent from '../../components/cloud-compliance';
import Layout from '../../components/layout/layout.js';

export default function CloudCompliance() {
    return (
        <Layout
            heroBG={heroBG}
            pageName='ComplianceAuditing'
            bannerTitle={`Cloud Security Compliance and Auditing - \nCyscale Power Cloud Platform`}
            bannerDescription={`Manage, monitor, and prove cloud compliance with Cyscale. Automate checks for 500+ cloud controls & policies to comply with ISO 27001, PCI, SOC 2 & more.`}
            title='Cloud Security Compliance and Auditing - Cyscale Power Cloud Platform'
            description='Manage, monitor, and prove cloud compliance with Cyscale. Automate checks for 500+ cloud controls & policies to comply with ISO 27001, PCI, SOC 2 & more.'
        >
            <CloudComplianceContent />
        </Layout>
    );
}
