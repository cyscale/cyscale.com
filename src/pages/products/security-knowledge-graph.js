import React from 'react';

import heroBG from '../../assets/images/security-graph-bg.svg';
import Layout from '../../components/layout/layout.js';
import Skg from '../../components/security-knowledge-graph';

const SecurityKnowledge = ({ location }) => {
    return (
        <>
            <Layout
                location={location}
                heroBG={heroBG}
                bannerTitle={`Security \nKnowledge Graph™`}
                bannerDescription={`Many tools promise less data to deal with and stronger aggregation. But even when they deliver, it's not enough to make your job easier. \n\nThat's why we built the Security Knowledge Graph™. Because you deserve a cloud security platform that surfaces crucial issues based on deep understanding of all your interlinked assets.\n\n Go far beyond the limits of list-based inventories.`}
                bannerBtn1Text='Start Free Trial'
                bannerBtn1Link={'/free-trial'}
                bannerBtn1LinkInternal={true}
                bannerBtn2Text='Request demo'
                bannerBtn2Link='/request-demo'
                pageName='SKGPage'
                title='Security Knowledge Graph™ - Cyscale'
                description='Pinpoint cloud security issues created by cross-cloud interactions with the Cyscale Security Knowledge Graph™. Strengthen GRC with context-aware automation for digital assets.'
            >
                <Skg />
            </Layout>
        </>
    );
};

export default SecurityKnowledge;
