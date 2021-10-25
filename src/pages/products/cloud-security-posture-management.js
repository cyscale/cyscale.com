import React from 'react'

import heroBG from '../../assets/images/hero-CSPM-bg.svg'
import Cspm from '../../components/cloud-security-posture-management'
import Layout from '../../components/layout/layout.js'

const Index = () => (
  <Layout
    heroBG={heroBG}
    bannerTitle={`Cloud Security Posture\n Management Tool`}
    bannerDescription={`Continuous visibility of multi-cloud environments to identify cloud misconfiguration vulnerabilities. Scan, monitor, and remediate across AWS, Azure, Google Cloud, Oracle Cloud.`}
    bannerBtn1Text="Try Cyscale for free"
    bannerBtn1Link="https://app.cyscale.com"
    pageName="CSPMPage"
    title="Cloud Security Posture Management - CSPM Tool - Cyscale"
    description="Continuous visibility of multi-cloud environments to identify cloud misconfiguration vulnerabilities. Scan, monitor, and remediate across AWS, Azure, Google Cloud, Oracle Cloud"
  >
    <Cspm />
  </Layout>
)

export default Index
