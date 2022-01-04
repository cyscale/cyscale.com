import React from 'react';
import RemoteWorkContent from '../../components/remote-work';
import Layout from '../../components/layout/layout.js';
import { useAppLink } from '../../common/links';

export default function RemoteWorkSecurity({ location }) {
    const appLink = useAppLink();

    return (
        <Layout
            location={location}
            pageName='RemoteWork'
            bannerTitle={`Cloud security and visibility for remote work setups`}
            bannerDescription={`Changes in your company's WFH setup keep throwing you curveballs? Protect the backbone remote work depends on and keep your cloud entities secure and compliant.`}
            bannerBtn1Text='Try Cyscale for free'
            bannerBtn1Link={appLink}
            title='Remote Work Cloud Security - Cyscale Cloud Platform'
            description='Keep cloud-dependent remote work setups secure and compliant. Simplify cloud configurations for all your cloud accounts, SaaS platforms, and cloud assets.'
        >
            <RemoteWorkContent />
        </Layout>
    );
}
