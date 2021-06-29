import React from 'react'

import Layout from '../../components/layout/layout.js'
import SecurityPolicy from '../../components/policies/security-policy'

const Index = () => (
  <Layout
    pageName="SecurityPolicy"
    title="Security Policy - Cyscale Power Cloud Platform"
    description="Security Policy for the Cyscale Power Cloud Platform for securing cloud-native apps and data in a cloud-first era. Avoid data loss."
  >
    <SecurityPolicy />

  </Layout>
)

export default Index
