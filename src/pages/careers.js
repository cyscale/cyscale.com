import React from 'react'

import Careers from '../components/careers'
import Layout from '../components/layout/layout.js'
import banner from '../assets/images/careers-bg.svg';

const Index = () => (
  <Layout
    pageName="careers"
    heroBG={banner}
    bannerTitle='Join the Cyscale Team'
    title="Careers - Cyscale Power Cloud Platform"
    description='Together, we can make the world a safer place!'
  >
    <Careers />
  </Layout>
)

export default Index
