import React, { useContext, useState } from 'react';
import tw, { css } from 'twin.macro';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo.svg';
import loginIcon from '../../assets/images/login.svg';
import searchIcon from '../../assets/images/search-icon.svg';

import styled from '@emotion/styled';
import Platform from './components/Platform/Platform';
import Solutions from './components/Solutions/Solutions';
import Resources from './components/Resources/Resources';
import Company from './components/Company/Company';
import { logoStyle } from './style';
import useScrollTrigger from '../scrollTrigger';
import { isAnimatedNavbarPage, isPlaygroundBlogPage } from '../../common/utils';
import TopBarContext from '../../context/TopBarContext';

const MegaMenu = styled.div`
    left: ${({ animatedNavbarPages, left }) => (animatedNavbarPages ? left : '')};
    right: 0;
    position: absolute;
    text-align: left;
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
        z-index: ${({ searchBar }) => (searchBar ? 0 : 99)};
        visibility: ${({ searchBar }) => (searchBar ? 'hidden' : 'visible')};
        opacity: ${({ searchBar }) => (searchBar ? 0 : 1)};
        transform: ${({ searchBar }) => (searchBar ? 'translateY(-1.25rem)' : 'translateY(0)')};
        -ms-transform: ${({ searchBar }) => (searchBar ? 'translateY(-1.25rem)' : 'translateY(0)')};
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

    &:before {
        content: attr(data-text);
        font-weight: 600;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        color: transparent;
        visibility: hidden;
    }

    &:hover,
    &.active {
        color: transparent;
        background: none;

        &:before {
            color: #0f26aa;
            visibility: visible;
        }
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

const NewNavigation = ({
    pageName,
    showLogo,
    appLink,
    location,
    isAnimation,
    searchBar,
    setSearchBar,
    kModal,
    setKModal,
    platformModal,
    setPlatformModal
}) => {
    const { pathname } = location;
    const [activeLinks, setActiveLinks] = useState({
        platform: false,
        solutions: false,
        resources: false,
        company: false
    });
    const hideMegaMenu = useScrollTrigger();
    const [hoveredNavItem, setHoveredNavItem] = useState(null);
    const { topBar, topBarHeight } = useContext(TopBarContext);
    const isNavItemHovered = (navItemName) => hoveredNavItem === navItemName;

    return (
        <nav
            css={[
                tw`relative block`,
                (pageName === 'IAMCampaign' ||
                    pageName === 'AWSCloudSecurityCampaign' ||
                    pageName === 'CSPMSolutionCampaign') &&
                    tw`container`,
                isAnimatedNavbarPage(pathname) &&
                    css`
                        margin-top: ${topBar ? topBarHeight / 16 + 'rem' : '0rem'};
                        padding-left: 4.5rem;
                    `
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
                    <NavItem
                        disabled={isAnimation}
                        searchBar={searchBar}
                        onMouseEnter={() => setHoveredNavItem('platform')}
                        onMouseLeave={() => setHoveredNavItem(null)}
                    >
                        <NavItemButton
                            data-text='Platform'
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
                            {isNavItemHovered('platform') && (
                                <Platform
                                    pathname={pathname}
                                    activeLinks={activeLinks}
                                    setActiveLinks={setActiveLinks}
                                />
                            )}
                        </MegaMenu>
                    </NavItem>
                    <NavItem
                        disabled={isAnimation}
                        searchBar={searchBar}
                        onMouseEnter={() => setHoveredNavItem('solutions')}
                        onMouseLeave={() => setHoveredNavItem(null)}
                    >
                        <NavItemButton
                            data-text='Solutions'
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
                                    'GCPCloudSecurity',
                                    'OktaIntegration',
                                    'FintechUseCase',
                                    'MSSPPage',
                                    'KSPMPage'
                                ].includes(pageName) || activeLinks.solutions
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <span>Solutions</span>
                        </NavItemButton>
                        <MegaMenu
                            css={[hideMegaMenu ? hiddenMegaMenuOnScroll : null]}
                            animatedNavbarPages={isAnimatedNavbarPage(pathname) && !isPlaygroundBlogPage(pathname)}
                            left='-17rem'
                        >
                            {isNavItemHovered('solutions') && (
                                <Solutions
                                    pathname={pathname}
                                    activeLinks={activeLinks}
                                    setActiveLinks={setActiveLinks}
                                    kModal={kModal}
                                    setKModal={setKModal}
                                    platformModal={platformModal}
                                    setPlatformModal={setPlatformModal}
                                />
                            )}
                        </MegaMenu>
                    </NavItem>
                    <NavItem>
                        <NavItemButton data-text='Pricing' className={`${pageName === 'Pricing' ? 'active' : ''}`}>
                            <span>
                                <Link to='/pricing/' activeClassName='active' className='font-medium'>
                                    Pricing
                                </Link>
                            </span>
                        </NavItemButton>
                    </NavItem>
                    <NavItem
                        disabled={isAnimation}
                        searchBar={searchBar}
                        onMouseEnter={() => setHoveredNavItem('resources')}
                        onMouseLeave={() => setHoveredNavItem(null)}
                    >
                        <NavItemButton
                            data-text='Resources'
                            type='button'
                            className={`${
                                pageName === 'blog' ||
                                pageName === 'blog-detail' ||
                                [
                                    'CloudComplianceWhitepaper',
                                    'CloudStorageMisconfigurations',
                                    'SmartFintech',
                                    'BaysConsulting',
                                    'Resources'
                                ].includes(pageName) ||
                                activeLinks.resources
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <span>Resources</span>
                        </NavItemButton>
                        <MegaMenu
                            css={[hideMegaMenu ? hiddenMegaMenuOnScroll : null]}
                            animatedNavbarPages={isAnimatedNavbarPage(pathname) && !isPlaygroundBlogPage(pathname)}
                            left='-4rem'
                        >
                            {isNavItemHovered('resources') && (
                                <Resources
                                    pathname={pathname}
                                    activeLinks={activeLinks}
                                    setActiveLinks={setActiveLinks}
                                />
                            )}
                        </MegaMenu>
                    </NavItem>
                    <NavItem
                        disabled={isAnimation}
                        searchBar={searchBar}
                        onMouseEnter={() => setHoveredNavItem('company')}
                        onMouseLeave={() => setHoveredNavItem(null)}
                    >
                        <NavItemButton
                            data-text='Company'
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
                            {isNavItemHovered('company') && (
                                <Company
                                    pathname={pathname}
                                    activeLinks={activeLinks}
                                    setActiveLinks={setActiveLinks}
                                />
                            )}
                        </MegaMenu>
                    </NavItem>
                    <li className='py-6 pl-4'>
                        <span
                            tabIndex='0'
                            onClick={() => setSearchBar(!searchBar)}
                            role='button'
                            aria-label='Search'
                            onKeyDown={() => {}}
                        >
                            <img src={searchIcon} className='py-2 cursor-pointer' alt='' width={22} />
                        </span>
                    </li>
                    <li className='py-6 pl-4'>
                        <a href='https://app.cyscale.com' target='_blank' rel='noopener noreferrer'>
                            <img src={loginIcon} className='py-2' alt='' />
                        </a>
                    </li>
                    <li className='ml-auto py-6 pr-0 pl-7'>
                        <Link
                            className='bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] w-auto text-sm px-4 border-transparent box-border rounded-md h-10 hidden xl:flex justify-center items-center uppercase leading-none text-white transition duration-500 hover:no-underline font-medium'
                            to='/request-demo/'
                        >
                            Book a demo
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NewNavigation;
