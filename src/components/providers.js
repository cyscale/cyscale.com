import Image from 'gatsby-image'
import React from 'react'
import { Col, Row } from 'react-grid-system'
import styled from 'styled-components'

import theme from '../utils/theme'

const Root = styled(Row)`
  padding-top: ${theme.spacing(4)};
  padding-bottom: ${theme.spacing(4)};
`

const Logo = styled(Image)`
  display: block;
  margin: auto;
`

export default function Providers({ providers }) {
  const { gcp, aws, azure, oracle } = providers

  return (
    <Root>
      <Col>
        <Logo fluid={aws.childImageSharp.fluid} />
      </Col>
      <Col>
        <Logo fluid={gcp.childImageSharp.fluid} />
      </Col>
      <Col>
        <Logo fluid={azure.childImageSharp.fluid} />
      </Col>
      <Col>
        <Logo fluid={oracle.childImageSharp.fluid} />
      </Col>
      <Col>
        <Logo fluid={oracle.childImageSharp.fluid} />
      </Col>
    </Root>
  )
}
