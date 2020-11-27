import { useLocation } from '@reach/router'
import { Link as GatsbyLink } from 'gatsby'
import { map, size } from 'lodash'
import React, { useState } from 'react'
import { Col, Container, Row, useScreenClass } from 'react-grid-system'
import HamburgerMenu from 'react-hamburger-menu'
import Headroom from 'react-headroom'
import styled from 'styled-components'

import siteMap from '../../site-map.json'
import logoWhite from '../img/logo.svg'
import theme from '../utils/theme'
import { Anchor, Link, ScrollLink } from './Anchor'
import Dropdown from './Dropdown'
import Login from './Login'

const Wrapper = styled.header`
    position: relative;
    z-index: 2;
`

const Root = styled.div`
    padding-top: ${theme.spacing(2)};
    padding-bottom: ${theme.spacing(2)};
    background: ${theme.palette.deepOcean};
`

const GroupName = styled.span`
    position: relative;
    letter-spacing: 1px;
    color: ${theme.palette.white};
    font-size: ${theme.fontSize(16)};
    padding-right: ${theme.spacing(1.5)};

    ${({ noDropdown }) =>
        noDropdown &&
        `
        padding-right: 0;

        & > a {
            letter-spacing: 1px;
            color: ${theme.palette.white};
            font-size: ${theme.fontSize(16)};

            &:before {
                top: calc(100% + 4px);
            }
        }
        `}
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

const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > * {
        margin-bottom: ${theme.spacing(1 / 2)};
        margin-left: ${theme.spacing(1)};
        &:first-child {
            margin-left: 0;
            font-weight: bold;
            margin-top: ${theme.spacing(2)};
        }
    }
`

const Arrow = styled.span`
    width: 0;
    height: 0;
    top: 45%;
    right: 0;
    position: absolute;
    border-left: ${theme.spacing(1 / 2)} solid transparent;
    border-right: ${theme.spacing(1 / 2)} solid transparent;
    border-top: ${theme.spacing(1 / 2)} solid ${theme.palette.white};
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
            height: ${theme.spacing(4)};
        }
    }
`
const LoginIntoDropdown = styled(Col)`
    padding-bottom: ${theme.spacing(2)};
    border-bottom: 1px solid ${theme.palette.white};
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

    const ChosenLink = ({ item }) => {
        if (item.extern) {
            return (
                <Anchor menu target='_blank' href={item.link} rel='noopener noreferrer'>
                    {item.label}
                </Anchor>
            )
        }
        if (item.scrollTo) {
            return (
                <SmartLink linkTo={item.link} scrollTo={item.scrollTo} activeClassName='active'>
                    {item.label}
                </SmartLink>
            )
        }
        return (
            <Link menu to={item.link} activeClassName='active'>
                {item.label}
            </Link>
        )
    }

    return (
        <Wrapper>
            <Headroom>
                <Root>
                    <Container>
                        <Menu>
                            <Logo to='/' aria-label='Cyscale - Automated Cloud Security'>
                                <img src={logoWhite} alt='Cyscale - Automated Cloud Security' />
                            </Logo>

                            {['lg', 'xl'].includes(screenClass) && (
                                <>
                                    {map(siteMap, (group, name) => {
                                        if (size(group) < 2) {
                                            return (
                                                <GroupName noDropdown key={name}>
                                                    <ChosenLink item={group[0]} />
                                                </GroupName>
                                            )
                                        }
                                        return (
                                            <Dropdown
                                                button={
                                                    <GroupName>
                                                        {name}
                                                        <Arrow />
                                                    </GroupName>
                                                }
                                                key={name}
                                            >
                                                {map(group, (item, key) => (
                                                    <ChosenLink item={item} key={key} />
                                                ))}
                                            </Dropdown>
                                        )
                                    })}
                                </>
                            )}
                            {['lg', 'xl'].includes(screenClass) && (
                                <Login separator={['lg', 'xl'].includes(screenClass)} />
                            )}
                            {!['lg', 'xl'].includes(screenClass) && (
                                <div>
                                    <Dropdown
                                        isOpen={open}
                                        onClick={(value) => setOpen(value)}
                                        onClose={(value) => setOpen(value)}
                                        button={
                                            <HamburgerMenu
                                                width={24}
                                                rotate={0}
                                                height={20}
                                                color='white'
                                                isOpen={open}
                                                strokeWidth={1}
                                                borderRadius={0}
                                                menuClicked={() => {}}
                                                animationDuration={0.25}
                                            />
                                        }
                                    >
                                        <Row style={{ width: 345 }}>
                                            <LoginIntoDropdown xs={12}>
                                                <Login largeLabel={true} />
                                            </LoginIntoDropdown>
                                            {map(siteMap, (group, name) => {
                                                if (size(group) < 2) {
                                                    return (
                                                        <Col xs={6} key={name} style={{ order: 1 }}>
                                                            <Group>
                                                                <GroupName noDropdown>
                                                                    <ChosenLink item={group[0]} />
                                                                </GroupName>
                                                            </Group>
                                                        </Col>
                                                    )
                                                }
                                                return (
                                                    <Col xs={6} key={name}>
                                                        <Group>
                                                            <GroupName>{name}</GroupName>
                                                            {map(group, (item, key) => (
                                                                <ChosenLink item={item} key={key} />
                                                            ))}
                                                        </Group>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </Dropdown>
                                </div>
                            )}
                        </Menu>
                    </Container>
                </Root>
            </Headroom>
        </Wrapper>
    )
}
