import { useLocation } from '@reach/router'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import Headroom from 'react-headroom'
import styled from 'styled-components'

import logoWhite from '../img/logo.png'
import theme from '../utils/theme'
import { Link, ScrollLink } from './Anchor'

const Navbar = styled.div`
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
    const location = useLocation()
    const rootPath = `${__PATH_PREFIX__}/`

    const SmartLink = ({ children, linkTo, scrollTo }) =>
        location.pathname === rootPath ? (
            <ScrollLink to={scrollTo} menu smooth={true} duration={500} activeClass='active'>
                {children}
            </ScrollLink>
        ) : (
            <Link menu to={linkTo}>
                {children}
            </Link>
        )

    return (
        <header>
            <Headroom component='header'>
                <Navbar>
                    <Container>
                        <Row align='center'>
                            <Col md={4}>
                                <GatsbyLink to='/' aria-label='Cyscale - Automated Cloud Security'>
                                    <Logo src={logoWhite} alt='Cyscale - Automated Cloud Security' />
                                </GatsbyLink>
                            </Col>
                            <Col md={8}>
                                <Nav>
                                    <SmartLink scrollTo='section-1' linkTo='/'>
                                        Platform
                                    </SmartLink>
                                    <Link menu to='/compliance'>
                                        Compliance
                                    </Link>
                                    <Link menu to='/about'>
                                        About
                                    </Link>
                                    <Link menu to='/contact'>
                                        Contact
                                    </Link>
                                    <Link menu to='/support'>
                                        Support
                                    </Link>
                                    <Link menu border to='/demo'>
                                        Request Demo
                                    </Link>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </Headroom>
        </header>
    )
}
