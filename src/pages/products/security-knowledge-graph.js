import React from 'react';

import heroBG from '../../assets/images/security-graph-bg.svg';
import { useAppLink } from '../../common/links';
import Layout from '../../components/layout/layout.js';
import Skg from '../../components/security-knowledge-graph';
import { Helmet } from 'react-helmet';

const SecurityKnowledge = ({ location }) => {
    const appLink = useAppLink({ location });

    return (
        <>
            <Layout
                location={location}
                heroBG={heroBG}
                bannerTitle={`Security \nKnowledge Graph™`}
                bannerDescription={`Many tools promise less data to deal with and stronger aggregation. But even when they deliver, it's not enough to make your job easier. \n\nThat's why we built the Security Knowledge Graph™. Because you deserve a cloud security platform that surfaces crucial issues based on deep understanding of all your interlinked assets.\n\n Go far beyond the limits of list-based inventories.`}
                bannerBtn1Text='Try Cyscale for free '
                bannerBtn1Link={appLink}
                pageName='SKGPage'
                title='Security Knowledge Graph™ - Cyscale Cloud Platform'
                description='Pinpoint cloud security issues created by cross-cloud interactions with the Cyscale Security Knowledge Graph™. Strengthen GRC with context-aware automation for digital assets.'
            >
                <Helmet>
                    <script type="application/ld+json" data-rh="true">{`{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                    {
                        "@type": "Question",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Cyscale Security Knowledge Graph™ infers each digital asset's category based on a classification engine. While it is not a fully-fledged AI, we're building towards it.\n\nSince the knowledge graph is a data model extremely rich in applications and possibilities, we're constantly tapping into its potential to build features that deliver immense value for your organization. See how it works during the  - it speaks for itself!"
                    },
                        "name": "Do you use AI for your Knowledge Graph?"
                    },
                    {
                        "@type": "Question",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The Security Knowledge Graph™ we built at Cyscale shares many characteristics with other implementations you're familiar with (such as search engines).\n\nOur long-term roadmap includes developing the platform so you can use everyday language to interact with it and get what you need to do your best work. For example, imagine asking a bot on your Slack or Teams channel “What's my cloud security posture?” and getting a response with a Security Knowledge Graph™ providing you rich, deep insights.\n\nWe're building this feature and many more for specialists like you and the organizations they power through their expertise."
                    },
                        "name": "Does your implementation of the knowledge graph model work similarly to the one used by search engines? What's the difference?"
                    },
                    {
                        "@type": "Question",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Not a single node in our Security Knowledge Graph™ is created manually, to ensure you get a reliable experience every single time.\n\nThe Cyscale Cloud Platform feeds on the data you provide by connecting your cloud accounts, SaaS platforms and other cloud assets and uses that information to help you visualize how all of these entities work together (and cause security, compliance, and performance issues)."
                    },
                        "name": "How reliable is your implementation of the knowledge graph model?"
                    },
                    {
                        "@type": "Question",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Because helping our customers enjoy the full capabilities of knowledge graph technology is what drives us! This pursuit incorporates our know-how, skills, and experience. It's an engineering challenge that we're solving to both improve your work and life, as a Cyscale customer, and make a meaningful contribution to the field while solving a painful real-life problem.\n\nWe developed a better way to automate cloud security and compliance while supporting IT and security specialists to do more of the work they love and that is by putting our Security Knowledge Graph™ in your capable hands."
                    },
                        "name": "Why are you the best team to build the Security Knowledge Graph™?"
                    }
                        ]
                    }`}</script>
                </Helmet>
                <Skg />
            </Layout>
        </>
    );
};

export default SecurityKnowledge;
