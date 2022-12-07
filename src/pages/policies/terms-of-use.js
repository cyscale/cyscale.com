import React from 'react';

import Layout from '../../components/layout/layout.js';
import TermsofUse from '../../components/policies/terms-of-use';

const TermsOfUsePage = ({ location }) => (
    <Layout
        location={location}
        pageName='termsOfUse'
        title='Term of use Policy - Cyscale'
        description='Terms of use Policy for the Cyscale Cloud Platform for protecting cloud-native apps and data in the cloud. Avoid cloud misconfigurations.'
    >
        <TermsofUse location={location} pageName='termsOfUse' />
    </Layout>
);

export default TermsOfUsePage;
