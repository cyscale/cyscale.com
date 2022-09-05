import React from 'react';
import tw, { css } from 'twin.macro';
import { Link } from 'gatsby';
import logo from '../../../assets/images/logo.svg';

import styled from '@emotion/styled';
import Platform from './NavItems/Platform';
import Solutions from './NavItems/Solutions';
import Resources from './NavItems/Resources';
import Company from './NavItems/Company';
import { logoStyle } from './Mobile/HomeMobile';

const MegaMenu = styled.div`
    left: ${({ campaignsPages }) => (campaignsPages ? '-17rem' : '0')};
    position: absolute;
    text-align: left;
    width: 100%;
    z-index: -99;
    -ms-transition: all 0.5s;
    transition: all 0.5s;
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
    }
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

export const montserratFont = css`
    font-family: 'Montserrat', sans-serif;
`;

export const sectionTitleColor = css`
    color: #079bee;
`;

export const fontNavLink = css`
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 400;
    transition: 0.2s;
    &:hover {
        font-weight: 500;
        color: #0f26aa;
        background-color: rgb(232, 238, 248, 0.3);
        border-left: 0.188rem solid #0f26aa;
    }
`;

const NewNavigation = ({ pageName, showLogo, appLink, classes }) => {
    return (
        <nav css={[tw`relative block`, classes && tw`container`]}>
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
                            className={`${pageName === 'SKGPage' || pageName === 'CSPMPage' ? 'active' : ''}`}
                        >
                            <span>Platform</span>
                        </NavItemButton>
                        <MegaMenu>
                            <Platform />
                        </MegaMenu>
                    </NavItem>
                    <NavItem>
                        <NavItemButton
                            type='button'
                            className={`${
                                pageName === 'MisconfigurationsPage' ||
                                pageName === 'IAMSecurity' ||
                                pageName === 'Data_Security' ||
                                pageName === 'RemoteWork' ||
                                pageName === 'ISO27001Compliance' ||
                                pageName === 'PCIDSS' ||
                                pageName === 'SOC2' ||
                                pageName === 'AWSCloudSecurity' ||
                                pageName === 'AzureCloudSecurity' ||
                                pageName === 'GCPCloudSecurity' ||
                                pageName === 'ComplianceAuditing'
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <span>Solutions</span>
                        </NavItemButton>
                        <MegaMenu
                            campaignsPages={
                                pageName === 'Identity and Access Management Security for Cloud' ||
                                pageName === 'AWSCloudSecurityCampaign' ||
                                pageName === 'CSPMSolutionCampaign'
                            }
                        >
                            <Solutions />
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
                            className={`${pageName === 'blog' || pageName === 'blog-detail' ? 'active' : ''}`}
                        >
                            <span>Resources</span>
                        </NavItemButton>
                        <MegaMenu>
                            <Resources />
                        </MegaMenu>
                    </NavItem>
                    <NavItem>
                        <NavItemButton
                            type='button'
                            className={`${
                                pageName === 'aboutUs' ||
                                pageName === 'careers' ||
                                pageName === 'jobDetails' ||
                                pageName === 'ContactUs'
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <span>Company</span>
                        </NavItemButton>
                        <MegaMenu>
                            <Company />
                        </MegaMenu>
                    </NavItem>
                    <li className='py-6 pr-0 pl-7'>
                        <a
                            className='bg-gradient-to-r from-blue to-red hover:from-red hover:to-blue w-153px text-14px border-transparent box-border rounded-md h-10 hidden xl:flex justify-center items-center uppercase leading-none text-white transition duration-500  hover:no-underline font-medium'
                            href={appLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Start Free Trial
                        </a>
                    </li>
                    <li className='py-6 px-4'>
                        <a
                            className='loginBtn text-black hover:text-black mt-0px lg:mt-0 text-14px uppercase w-84px greyBorder flex h-10 justify-center items-center rounded-md leading-none transition-all duration-500 hover:bg-grey3 hover:no-underline font-medium'
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
