import React from 'react';

import DataSecurity from '../../components/cloud-data-security';
import Layout from '../../components/layout/layout.js';

const CloudDataSecurity = ({ location }) => (
    <Layout
        location={location}
        pageName='dataSecurity'
        title='Multi-Cloud Data Security - Cyscale'
        description='Get efficient data security for your multi-cloud environment and DBaaS. Explore rich, flexible features and automation: asset mapping, data classification and more.'
    >
        <div className='hidden' data-template-key>
            hardcoded-pages
        </div>
        <div className='hidden' data-permalink>
            /use-cases/cloud-data-security
        </div>
        <div className='hidden' data-title>
            Multi-Cloud Data Security - Cyscale
        </div>
        <div className='hidden' data-description>
            Get efficient data security for your multi-cloud environment and DBaaS. Explore rich, flexible features and
            automation: asset mapping, data classification and more.
        </div>
        <div className='hidden' data-category>
            solutions
        </div>
        <DataSecurity location={location} pageName={'dataSecurity'} />
    </Layout>
);

export default CloudDataSecurity;
