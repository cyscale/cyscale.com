import React from 'react'

import About from '../components/about'
import Layout from '../components/layout/layout.js'

const Index = () => (
  <Layout
    pageName="aboutUs"
    title="About us - Cyscale Power Cloud Platform"
    description="Together, we draw broad industry expertise to create powerful cybersecurity solutions for our customers that automate and mitigate cloud security issues."
  >
    <About />
  </Layout>
)

export default Index
