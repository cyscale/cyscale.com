import React from 'react'

import Layout from '../../components/layout/layout.js'
import PrivacyPolicy from '../../components/policies/privacy-policy'

const Index = () => (
  <Layout 
    pageName = "privacyPolicy"
    title="Total cloud visibility & control | Cyscale Power Cloud Platform"
    description="Map all your cloud assets across providers in under 5 mins. Optimize costs, ensure cloud security, and prove compliance with the scalable Cyscale CSPM."
  >
    <PrivacyPolicy />
    
  </Layout>
)

export default Index
