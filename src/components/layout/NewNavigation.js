import React, { useState } from 'react';
import tw, { css } from 'twin.macro';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo.svg';

import styled from '@emotion/styled';
import Platform from './components/Platform/Platform';
import Solutions from './components/Solutions/Solutions';
import Resources from './components/Resources/Resources';
import Company from './components/Company/Company';
import { logoStyle } from './style';
import useScrollTrigger from '../scrollTrigger';

const MegaMenu = styled.div`
    left: ${({ campaignsPages }) => (campaignsPages ? '-17rem' : '0')};
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

const NewNavigation = ({ pageName, showLogo, appLink, location }) => {
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
                    tw`container`
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
                    <NavItem>
                        <NavItemButton
                            type='button'
                            className={`${
                                ['SKGPage', 'CSPMPage'].includes(pageName) || activeLinks.platform ? 'active' : ''
                            }`}
                        >
                            <span>Platform</span>
                        </NavItemButton>
                        <MegaMenu css={[hideMegaMenu ? hiddenMegaMenuOnScroll : null]}>
                            <Platform pathname={pathname} activeLinks={activeLinks} setActiveLinks={setActiveLinks} />
                        </MegaMenu>
                    </NavItem>
                    <NavItem>
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
                                    'AWSCloudSecurity',
                                    'AzureCloudSecurity',
                                    'GCPCloudSecurity',
                                    'ComplianceAuditing'
                                ].includes(pageName) || activeLinks.solutions
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <span>Solutions</span>
                        </NavItemButton>
                        <MegaMenu
                            css={[hideMegaMenu ? hiddenMegaMenuOnScroll : null]}
                            campaignsPages={[
                                'Identity and Access Management Security for Cloud',
                                'AWSCloudSecurityCampaign',
                                'CSPMSolutionCampaign'
                            ].includes(pageName)}
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
                    <NavItem>
                        <NavItemButton
                            type='button'
                            className={`${
                                pageName === 'blog' || pageName === 'blog-detail' || activeLinks.resources
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <span>Resources</span>
                        </NavItemButton>
                        <MegaMenu css={[hideMegaMenu ? hiddenMegaMenuOnScroll : null]}>
                            <Resources pathname={pathname} activeLinks={activeLinks} setActiveLinks={setActiveLinks} />
                        </MegaMenu>
                    </NavItem>
                    <NavItem>
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
                    <li className='py-6 pr-0 pl-7'>
                        <a
                            className='bg-gradient-to-r from-blue to-red hover:from-red hover:to-blue w-auto text-sm px-4 border-transparent box-border rounded-md h-10 hidden xl:flex justify-center items-center uppercase leading-none text-white transition duration-500 hover:no-underline font-medium'
                            href={appLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Start Free Trial
                        </a>
                    </li>
                    <li className='py-6 pl-4'>
                        <a
                            className='text-black hover:text-black mt-0 text-sm px-4 uppercase w-84px greyBorder flex h-10 justify-center items-center rounded-md leading-none transition-all duration-500 hover:bg-grey3 hover:no-underline font-medium'
                            href='https://app.cyscale.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Log in
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NewNavigation;
