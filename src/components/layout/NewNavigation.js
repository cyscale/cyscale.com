import React, { useState } from 'react';
import tw, { css } from 'twin.macro';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo.svg';
import loginIcon from '../../assets/images/login.svg';

import styled from '@emotion/styled';
import Platform from './components/Platform/Platform';
import Solutions from './components/Solutions/Solutions';
import Resources from './components/Resources/Resources';
import Company from './components/Company/Company';
import { logoStyle } from './style';
import useScrollTrigger from '../scrollTrigger';
import { isAnimatedNavbarPage } from '../../common/utils';

const MegaMenu = styled.div`
    left: ${({ animatedNavbarPages, left }) => (animatedNavbarPages ? left : '0')};
    position: absolute;
    text-align: left;
    width: 100%;
    z-index: -99;
    -ms-transform: translateY(-1.25rem);
    transform: translateY(-1.25rem);
    opacity: 0;
    visibility: hidden;
`;

const NavItem = styled.li`
    position: static;
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
    &:hover ${MegaMenu} {
        z-index: 99;
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
        -ms-transition: all 0.5s;
        transition: all 0.5s;
    }
`;

const hiddenMegaMenuOnScroll = css`
    display: none;
`;

const NavItemButton = styled.button`
    ${tw`relative block m-8 text-base hover:no-underline leading-normal`}
    font-weight: 500;
    box-sizing: border-box;
    outline: none;

    &:hover,
    &.active {
        font-weight: 600;
        color: #0f26aa;
    }

    & > span {
        position: relative;
        padding-bottom: 0.25rem;
    }

    & > span::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0.125rem;
        bottom: 0;
        left: 0;
        background-color: #0f26aa;
        visibility: hidden;
        -ms-transition: all 0.25s ease-in-out 0s;
        transition: all 0.25s ease-in-out 0s;
    }

    & > span::before {
        color: #0f26aa;
    }

    &:hover span::before,
    &.active span::before {
        visibility: visible;
        width: 100%;
    }
`;

const HeaderLogo = styled.img`
    ${logoStyle}
    ${tw`block`};
`;

const NewNavigation = ({ pageName, showLogo, appLink, location, isAnimation }) => {
    const { pathname } = location;
    const [activeLinks, setActiveLinks] = useState({
        platform: false,
        solutions: false,
        resources: false,
        company: false
    });
    const hideMegaMenu = useScrollTrigger();

    return (
        <nav
            css={[
                tw`relative block`,
                (pageName === 'Identity and Access Management Security for Cloud' ||
                    pageName === 'AWSCloudSecurityCampaign' ||
                    pageName === 'CSPMSolutionCampaign') &&
                    tw`container`,
                isAnimatedNavbarPage(pathname) && tw`pl-20`
            ]}
        >
            <div tw='mx-auto flex flex-row justify-between'>
                <div tw='relative flex block py-6 justify-start'>
                    {showLogo && (
                        <Link to='/' className='inline-flex'>
                            <HeaderLogo src={logo} alt='Cyscale' />
                        </Link>
                    )}
                </div>
                <ul className='flex flex-row'>
                    <NavItem disabled={isAnimation}>
                        <NavItemButton
                            type='button'
                            className={`${
                                ['SKGPage', 'CSPMPage', 'ComplianceAuditing', 'CNAPP'].includes(pageName) ||
                                activeLinks.platform
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <span>Platform</span>
                        </NavItemButton>
                        <MegaMenu css={[hideMegaMenu ? hiddenMegaMenuOnScroll : null]}>
                            <Platform pathname={pathname} activeLinks={activeLinks} setActiveLinks={setActiveLinks} />
                        </MegaMenu>
                    </NavItem>
                    <NavItem disabled={isAnimation}>
                        <NavItemButton
                            type='button'
                            className={`${
                                [
                                    'MisconfigurationsPage',
                                    'IAMSecurity',
                                    'Data_Security',
                                    'RemoteWork',
                                    'ISO27001Compliance',
                                    'PCIDSS',
                                    'SOC2',
                                    'NIST',
                                    'AWSCloudSecurity',
                                    'AzureCloudSecurity',
                                    'GCPCloudSecurity'
                                ].includes(pageName) || activeLinks.solutions
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <span>Solutions</span>
                        </NavItemButton>
                        <MegaMenu
                            css={[hideMegaMenu ? hiddenMegaMenuOnScroll : null]}
                            animatedNavbarPages={isAnimatedNavbarPage(pathname)}
                            left='-17rem'
                        >
                            <Solutions pathname={pathname} activeLinks={activeLinks} setActiveLinks={setActiveLinks} />
                        </MegaMenu>
                    </NavItem>
                    <NavItem>
                        <NavItemButton className={`${pageName === 'Pricing' ? 'active' : ''}`}>
                            <span>
                                <Link to='/pricing/' activeClassName='active' className='font-medium'>
                                    Pricing
                                </Link>
                            </span>
                        </NavItemButton>
                    </NavItem>
                    <NavItem disabled={isAnimation}>
                        <NavItemButton
                            type='button'
                            className={`${
                                pageName === 'blog' ||
                                pageName === 'blog-detail' ||
                                ['CloudComplianceWhitepaper', 'CloudStorageMisconfigurations', 'SmartFintech'].includes(pageName) ||
                                activeLinks.resources
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <span>Resources</span>
                        </NavItemButton>
                        <MegaMenu
                            css={[hideMegaMenu ? hiddenMegaMenuOnScroll : null]}
                            animatedNavbarPages={isAnimatedNavbarPage(pathname)}
                            left='-4rem'
                        >
                            <Resources pathname={pathname} activeLinks={activeLinks} setActiveLinks={setActiveLinks} />
                        </MegaMenu>
                    </NavItem>
                    <NavItem disabled={isAnimation}>
                        <NavItemButton
                            type='button'
                            className={`${
                                ['aboutUs', 'careers', 'jobDetails', 'ContactUs'].includes(pageName) ||
                                activeLinks.company
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <span>Company</span>
                        </NavItemButton>
                        <MegaMenu css={[hideMegaMenu ? hiddenMegaMenuOnScroll : null]}>
                            <Company pathname={pathname} activeLinks={activeLinks} setActiveLinks={setActiveLinks} />
                        </MegaMenu>
                    </NavItem>
                    <li className='py-6 pl-4'>
                        <a href='https://app.cyscale.com' target='_blank' rel='noopener noreferrer'>
                            <img src={loginIcon} className='py-2' alt='' />
                        </a>
                    </li>
                    <li className='py-6 pr-0 pl-7'>
                        <Link
                            className='bg-gradient-to-r from-blue to-red hover:from-red hover:to-blue w-auto text-sm px-4 border-transparent box-border rounded-md h-10 hidden xl:flex justify-center items-center uppercase leading-none text-white transition duration-500 hover:no-underline font-medium'
                            to='/free-trial'
                        >
                            Start Free Trial
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NewNavigation;
