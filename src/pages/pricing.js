import React from 'react'

import Layout from '../components/layout/layout.js'
import Pricing from '../components/pricing'

const Index = () => (
  <Layout 
    pageName = "Pricing"
    title="Total cloud visibility & control | Cyscale Power Cloud Platform"
    description="Map all your cloud assets across providers in under 5 mins. Optimize costs, ensure cloud security, and prove compliance with the scalable Cyscale CSPM."
  >
    <Pricing />
  </Layout>
)

export default Index
