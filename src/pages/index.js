import React from 'react';

import Home from '../components/Home';
import Layout from '../components/layout/layout.js';

const HomePage = ({ location }) => {
    return (
        <Layout
            location={location}
            bannerTitle={`Complete cloud visibility \n& control platform`}
            bannerDescription={`Map, secure, and monitor your cloud assets across platforms in under 5 minutes.\n\nOptimize operations and costs with an agentless CSPM solution that uses our Security Knowledge Graph™ to ensure scalable, consistent protection and governance.`}
            bannerBtn1Text='Start Free Trial'
            bannerBtn1Link='/free-trial'
            bannerBtn1LinkInternal={true}
            bannerBtn2Text='Request demo'
            bannerBtn2Link='/request-demo'
            pageName='HomePage'
            title='Cyscale - Complete Cloud Visibility & Control Platform'
            description='Map all your cloud assets across providers in under 5 mins. Optimize costs, ensure cloud security, and prove compliance with the scalable Cyscale CSPM.'
        >
            <Home />
        </Layout>
    );
};

export default HomePage;
