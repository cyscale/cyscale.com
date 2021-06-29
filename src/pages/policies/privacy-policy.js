import React from 'react'

import Layout from '../../components/layout/layout.js'
import PrivacyPolicy from '../../components/policies/privacy-policy'

const Index = () => (
  <Layout
    pageName="privacyPolicy"
    title="Privacy Policy - Cyscale Power Cloud Platform"
    description="Privacy Policy for the Cyscale Power Cloud Platform for securing cloud-native apps and data in a cloud-first world. Prevent cloud data leakage."
  >
    <PrivacyPolicy />

  </Layout>
)

export default Index
