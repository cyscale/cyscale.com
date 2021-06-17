import React from 'react'

import heroBG from '../../assets/images/hero-CSPM-bg.svg'
import CSPM from '../../components/cloud-security-posture-management'
import Layout from '../../components/layout/layout.js'

const Index = () => (
  <Layout 
    heroBG = {heroBG}
    bannerTitle = {`Cloud Security\n Posture Management\n with instant gains\n for the entire company`}
    bannerDescription = {`Elevate and optimize your public cloud security with full, uninterrupted infrastructure \ncoverage across providers from a single dashboard. Reduce remediation costs and effort by\n using Cyscale to detect misconfigurations and errors that impact your security posture.`}
    bannerBtn1Text = "Try Cyscale for free"
    bannerBtn1Link = "https://app.cyscale.com"
    pageName = "CSPMPage"
    title="Cyscale Power Cloud - Cloud Security Posture Management"
    description="Discover all the features that make Cyscale Power Cloud Platform a cost-effective Cloud Security Posture Management solution. Free trial available!"
  >
      <CSPM />
  </Layout>
)

export default Index
