import React from 'react';

import Layout from '../../components/layout/layout.js';
import SecurityPolicy from '../../components/policies/security-policy';

const SecurityPolicyPage = ({ location }) => (
    <Layout
        location={location}
        pageName='SecurityPolicy'
        title='Security Policy - Cyscale Cloud Platform'
        description='Security Policy for the Cyscale Cloud Platform for securing cloud-native apps and data in a cloud-first era. Avoid data loss.'
    >
        <SecurityPolicy location={location} pageName='SecurityPolicy' />
    </Layout>
);

export default SecurityPolicyPage;
