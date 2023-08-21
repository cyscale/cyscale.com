import React from 'react';
import RemoteWorkContent from '../../components/remote-work';
import Layout from '../../components/layout/layout.js';

const RemoteWorkSecurity = ({ location }) => {
    return (
        <Layout
            location={location}
            pageName='RemoteWork'
            bannerTitle={`Cloud security and visibility for remote work setups`}
            bannerDescription={`Changes in your company's WFH setup keep throwing you curveballs? Protect the backbone remote work depends on and keep your cloud entities secure and compliant.`}
            bannerBtn1Text='Start Free Trial'
            bannerBtn1Link={'/free-trial/'}
            bannerBtn1LinkInternal={true}
            bannerBtn2Text='Request demo'
            bannerBtn2Link='/request-demo/'
            title='Remote Work Cloud Security - Cyscale'
            description='Keep cloud-dependent remote work setups secure and compliant. Simplify cloud configurations for all your cloud accounts, SaaS platforms, and cloud assets.'
        >
            <RemoteWorkContent />
        </Layout>
    );
};

export default RemoteWorkSecurity;
