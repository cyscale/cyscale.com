import React from 'react'

import Layout from '../../components/layout/layout.js'
import TermsofUse from '../../components/policies/terms-of-use'

const Index = () => (
  <Layout 
    pageName = "termsOfUse"
    title="Total cloud visibility & control | Cyscale Power Cloud Platform"
    description="Map all your cloud assets across providers in under 5 mins. Optimize costs, ensure cloud security, and prove compliance with the scalable Cyscale CSPM."
  >
    <TermsofUse />
    
  </Layout>
)

export default Index
