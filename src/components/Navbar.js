import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import Headroom from 'react-headroom'
import styled from 'styled-components'

import logoWhite from '../img/logo.png'
import theme from '../utils/theme'
import { Anchor, Link } from './Anchor'

const Root = styled.header`
  padding-top: ${theme.spacing(2)};
  padding-bottom: ${theme.spacing(2)};
  background: ${theme.palette.deepOcean};
`
const Logo = styled.img`
  height: ${theme.spacing(4)};
`

const Nav = styled.nav`
  width: fit-content;
  margin-left: auto;
`

export default function Header() {
  return (
    <Headroom>
      <Root>
        <Container>
          <Row align="center">
            <Col md={4}>
              <GatsbyLink to="/">
                <Logo src={logoWhite} />
              </GatsbyLink>
            </Col>
            <Col md={8}>
              <Nav>
                <Link to="#" menu>Platform</Link>
                <Link to="#" menu>Compliance</Link>
                <Link to="#" menu>About</Link>
                <Link to="#" menu>Contact</Link>

                <Anchor
                  menu
                  border
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Demo
                </Anchor>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Root>
    </Headroom>
  )
}
