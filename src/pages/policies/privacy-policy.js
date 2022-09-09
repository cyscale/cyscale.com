import React from 'react';

import Layout from '../../components/layout/layout.js';
import PrivacyPolicy from '../../components/policies/privacy-policy';

const PrivacyPolicyPage = ({ location }) => {
    return (
        <Layout
            location={location}
            pageName='privacyPolicy'
            title='Privacy Policy - Cyscale Cloud Platform'
            description='Privacy Policy for the Cyscale Cloud Platform for securing cloud-native apps and data in a cloud-first world. Prevent cloud data leakage.'
        >
            <PrivacyPolicy location={location} pageName='privacyPolicy' />
        </Layout>
    );
};

export default PrivacyPolicyPage;
