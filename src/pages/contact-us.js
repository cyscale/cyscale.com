import React from 'react'

import Contact from '../components/Contact'
import Layout from '../components/layout/layout.js'

const Index = () => (
  <Layout
    pageName="ContactUs"
    title="Contact us - Cyscale Power Cloud Platform"
    description="We are always happy to assist with more information about us or our product which covers cloud security, kubernetes security and hybrid multi-cloud environments."
  >
    <Contact />
  </Layout>
)

export default Index
