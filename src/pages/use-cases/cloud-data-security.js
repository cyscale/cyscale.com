import React from 'react'

import DataSecurity from '../../components/cloud-data-security'
import Layout from '../../components/layout/layout.js'

const Index = () => (
  <Layout
    pageName="dataSecurity"
    title="Multi-Cloud Data Security - Cyscale Power Cloud Platform"
    description="Get efficient data security for your multi-cloud environment and DBaaS. Explore rich, flexible features and automation: asset mapping, data classification and more."
  >
    <DataSecurity />
  </Layout>
);

export default Index;
