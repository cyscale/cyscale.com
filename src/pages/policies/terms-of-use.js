import React from 'react'

import Layout from '../../components/layout/layout.js'
import TermsofUse from '../../components/policies/terms-of-use'

const Index = () => (
  <Layout
    pageName="termsOfUse"
    title="Term of use Policy - Cyscale Power Cloud Platform"
    description="Terms of use Policy for the Cyscale Power Cloud Platform for protecting cloud-native apps and data in the cloud. Avoid cloud misconfigurations."
  >
    <TermsofUse />

  </Layout>
)

export default Index
