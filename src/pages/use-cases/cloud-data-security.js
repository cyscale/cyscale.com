import React from 'react';

import DataSecurity from '../../components/cloud-data-security';
import Layout from '../../components/layout/layout.js';

const CloudDataSecurity = ({ location }) => (
    <Layout
        location={location}
        pageName='dataSecurity'
        title='Multi-Cloud Data Security - Cyscale Cloud Platform'
        description='Get efficient data security for your multi-cloud environment and DBaaS. Explore rich, flexible features and automation: asset mapping, data classification and more.'
    >
        <DataSecurity location={location} pageName={'dataSecurity'} />
    </Layout>
);

export default CloudDataSecurity;
