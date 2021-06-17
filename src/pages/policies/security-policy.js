import React from 'react'

import Layout from '../../components/layout/layout.js'
import SecurityPolicy from '../../components/policies/security-policy'

const Index = () => (
  <Layout 
    pageName = "SecurityPolicy"
    title="Total cloud visibility & control | Cyscale Power Cloud Platform"
    description="Map all your cloud assets across providers in under 5 mins. Optimize costs, ensure cloud security, and prove compliance with the scalable Cyscale CSPM."
  >
    <SecurityPolicy />
    
  </Layout>
)

export default Index
