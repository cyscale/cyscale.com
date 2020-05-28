import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'

import theme from '../utils/theme'
import { Anchor, Link } from './Anchor'

const Root = styled.footer`
  margin-top: ${theme.spacing(8)};
  padding-top: ${theme.spacing(2)};
  padding-bottom: ${theme.spacing(2)};
  background: ${theme.palette.deepOcean};
`

const Small = styled.small`
  display: block;
  width: fit-content;
  color: ${theme.palette.white};
  margin-top: ${theme.spacing(2)};
  font-size: ${theme.fontSize(12)};

  ${({ right }) => right && `margin-left: auto`}
`

const Nav = styled.nav`
  width: fit-content;
  ${({ right }) => right && `margin-left: auto`}
`

export default function Footer() {
  const { site } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          company
          social {
            twitter
            linkedin
            facebook
          }
        }
      }
    }
  `)

  const company = site.siteMetadata.company
  const social = site.siteMetadata.social

  return (
    <Root>
      <Container>
        <Row>
          <Col>
            <Nav>
              <Link footer to="/terms-of-use">
                Terms of use
              </Link>
              <Link footer to="/security-policy">
                Security policy
              </Link>
              <Link footer to="/privacy-policy">
                Privacy policy
              </Link>
            </Nav>
          </Col>
          <Col>
            <Nav right>
              <Anchor
                footer
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.linkedin.com/company/${social.facebook}`}
              >
                LinkedIn
              </Anchor>
              <Anchor
                footer
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.twitter.com/${social.twitter}`}
              >
                Twitter
              </Anchor>
              <Anchor
                footer
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.facebook.com/${social.facebook}`}
              >
                Facebook
              </Anchor>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col>
            <Small>
              <strong>{company}</strong> © 2018 - {new Date().getFullYear()}.
              All rights reserved.
            </Small>
          </Col>
          <Col>
            <Small right>
              Made in <strong>Cluj-Napoca, Romania</strong>
            </Small>
          </Col>
        </Row>
      </Container>
    </Root>
  )
}
