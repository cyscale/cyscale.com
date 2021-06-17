import React from 'react'

import About from '../components/about'
import Layout from '../components/layout/layout.js'

const Index = () => (
  <Layout 
    pageName = "aboutUs"
    title="Total cloud visibility & control | Cyscale Power Cloud Platform"
    description="Map all your cloud assets across providers in under 5 mins. Optimize costs, ensure cloud security, and prove compliance with the scalable Cyscale CSPM."
  >
    <About />
  </Layout>
)

export default Index
