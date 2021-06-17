import React from 'react';

import heroBG from '../../assets/images/hero-home-bg.jpg';
import RemoteWorkContent from '../../components/remote-work';
import Layout from '../../components/layout/layout.js';

export default function RemoteWorkSecurity() {
    return (
        <Layout
            heroBG={heroBG}
            pageName='RemoteWork'
            bannerTitle={`Remote Work Cloud Security - \nCyscale Power Cloud Platform`}
            bannerDescription={`Keep cloud-dependent remote work setups secure and compliant. Simplify cloud configurations for all your cloud accounts, SaaS platforms, and cloud assets`}
            title='Remote Work Cloud Security - Cyscale Power Cloud Platform'
            description='Keep cloud-dependent remote work setups secure and compliant. Simplify cloud configurations for all your cloud accounts, SaaS platforms, and cloud assets'
        >
            <RemoteWorkContent />
        </Layout>
    );
}
