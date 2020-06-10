import { useLocation } from '@reach/router'
import { Link as GatsbyLink } from 'gatsby'
import React, { useState } from 'react'
import { Container, useScreenClass } from 'react-grid-system'
import HamburgerMenu from 'react-hamburger-menu'
import Headroom from 'react-headroom'
import styled from 'styled-components'

import logoWhite from '../img/logo.svg'
import theme from '../utils/theme'
import { Link, ScrollLink } from './Anchor'
import Login from './Login'

const Root = styled.div`
    padding-top: ${theme.spacing(2)};
    padding-bottom: ${theme.spacing(2)};
    background: ${theme.palette.deepOcean};
`

const Menu = styled.nav`
    display: flex;
    align-items: center;

    & > * {
        margin-right: ${theme.spacing(3)};
        &:last-child {
            margin-right: 0;
        }
    }
`

const MobileNav = styled.div`
    position: relative;
`

const Dropdown = styled.div`
    right: 0;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    top: ${theme.spacing(5)};
    backdrop-filter: blur(4px);
    padding: ${theme.spacing(2)};
    border-radius: ${theme.radius};
    background: rgba(0, 0, 0, 0.75);

    & > * {
        margin-bottom: ${theme.spacing(1 / 2)};
        margin-right: 0;
        width: fit-content;
        white-space: nowrap;
        &:last-child {
            margin-bottom: 0;
        }
    }
`

const Logo = styled(GatsbyLink)`
    margin-right: auto;
    align-items: center;
    display: inline-flex;
    & > img {
        height: ${theme.spacing(5)};
    }

    @media (max-width: ${theme.bp.md}) {
        & > img {
            height: ${theme.spacing(2.5)};
        }
    }
`
export default function Header() {
    const [open, setOpen] = useState(false)

    const location = useLocation()
    const rootPath = `${__PATH_PREFIX__}/`
    const screenClass = useScreenClass()

    const SmartLink = ({ children, linkTo, scrollTo, activeClassName }) =>
        location.pathname === rootPath ? (
            <ScrollLink to={scrollTo} menu smooth={true} duration={500} className='active'>
                {children}
            </ScrollLink>
        ) : (
            <Link menu to={linkTo} activeClassName='active'>
                {children}
            </Link>
        )

    return (
        <header>
            <Headroom component='header'>
                <Root>
                    <Container>
                        <Menu>
                            <Logo to='/' aria-label='Cyscale - Automated Cloud Security'>
                                <img src={logoWhite} alt='Cyscale - Automated Cloud Security' />
                            </Logo>

                            {['lg', 'xl'].includes(screenClass) && (
                                <>
                                    <SmartLink scrollTo='section-1' linkTo='/' activeClassName='active'>
                                        Platform
                                    </SmartLink>
                                    <Link menu to='/compliance' activeClassName='active'>
                                        Compliance
                                    </Link>
                                    <Link menu to='/about' activeClassName='active'>
                                        About
                                    </Link>
                                    <Link menu to='/contact' activeClassName='active'>
                                        Contact
                                    </Link>
                                    <Link menu to='/support' activeClassName='active'>
                                        Support
                                    </Link>
                                    <Link menu to='/demo' activeClassName='active'>
                                        Access Demo
                                    </Link>
                                </>
                            )}

                            <Login separator={['lg', 'xl'].includes(screenClass)} />

                            {!['lg', 'xl'].includes(screenClass) && (
                                <MobileNav>
                                    <HamburgerMenu
                                        width={24}
                                        rotate={0}
                                        height={20}
                                        color='white'
                                        isOpen={open}
                                        strokeWidth={1}
                                        borderRadius={0}
                                        menuClicked={() => setOpen(!open)}
                                        animationDuration={0.25}
                                    />
                                    {open && (
                                        <Dropdown>
                                            <SmartLink scrollTo='section-1' linkTo='/' activeClassName='active'>
                                                Platform
                                            </SmartLink>
                                            <Link menu to='/compliance' activeClassName='active'>
                                                Compliance
                                            </Link>
                                            <Link menu to='/about' activeClassName='active'>
                                                About
                                            </Link>
                                            <Link menu to='/contact' activeClassName='active'>
                                                Contact
                                            </Link>
                                            <Link menu to='/support' activeClassName='active'>
                                                Support
                                            </Link>
                                            <Link menu to='/demo' activeClassName='active'>
                                                Request Demo
                                            </Link>
                                        </Dropdown>
                                    )}
                                </MobileNav>
                            )}
                        </Menu>
                    </Container>
                </Root>
            </Headroom>
        </header>
    )
}
