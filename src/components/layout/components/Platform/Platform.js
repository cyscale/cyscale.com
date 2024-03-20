import React from 'react';
import styled from '@emotion/styled';
import tw, { css } from 'twin.macro';
import IconUser from '../../icons/icon-user.svg';
import { Link } from 'gatsby';
import IconTag from '../../icons/icon-tag.svg';
import { platform } from '../../nav';
import {
    montserratFontStyle,
    descriptionColorStyle,
    hoverButtonColorStyle,
    widthFitStyle,
    caretMenuSelegoStyle
} from '../../style';
import { isAnimatedNavbarPage, isPlaygroundBlogPage } from '../../../../common/utils';
import RightArrow from '../../../sharedComponent/RightArrow';

const PlatformLinkTitle = styled.h1`
    ${tw`ml-4 text-lg`}
    font-weight: 500;
`;

const activePlatformLink = css`
    background-color: rgb(232, 238, 248, 0.3);
    border-left: 0.188rem solid #0f26aa;
`;

const PlatformLink = styled.div`
    ${tw`mb-4 pr-1 pl-1.5`}
    transition: 0.16s;
    border-left: 0.188rem solid transparent;

    &:hover ${PlatformLinkTitle} {
        font-weight: 500;
        color: #0f26aa;
    }

    &:hover {
        ${activePlatformLink}
    }
`;

const caretPlatform = (isAnimatedNavbarPage) => css`
    :before {
        ${caretMenuSelegoStyle};
        left: ${isAnimatedNavbarPage ? '8.4rem' : '15.9rem'};
    }
`;
const Platform = ({ pathname, activeLinks, setActiveLinks }) => {
    return (
        <div
            className='max-w-5xl grid grid-cols-12 gap-2 ml-auto justify-end shadow-2xl bg-white'
            css={caretPlatform(isAnimatedNavbarPage(pathname) && !isPlaygroundBlogPage(pathname))}
            onMouseEnter={() => setActiveLinks({ ...activeLinks, platform: true })}
            onMouseLeave={() => setActiveLinks({ ...activeLinks, platform: false })}
            tabIndex='-1'
            onClick={() => {}}
            onKeyPress={() => {}}
            role='presentation'
        >
            <div className='col-span-5 bg-selago p-6'>
                <h1 css={montserratFontStyle} className='text-2xl font-semibold mb-3'>
                    Platform Overview
                </h1>
                <p
                    className='mb-3 text-grey2'
                    css={css`
                        font-size: 0.9rem;
                    `}
                >
                    Cloud visibility, security and compliance. Map, secure and monitor cloud assets across multiple
                    providers, including AWS, Azure, Google Cloud, and Alibaba.
                </p>
                <p
                    className='mb-3 text-grey2'
                    css={css`
                        font-size: 0.9rem;
                    `}
                >
                    Book a demo or start a trial to see our cloud security platform in action and get detailed insights
                    from your own data.
                </p>
                <Link
                    className='bg-blue text-white py-2 px-4 rounded cursor-pointer font-medium flex mt-24'
                    to='/request-demo/'
                    css={[hoverButtonColorStyle, widthFitStyle]}
                >
                    <RightArrow fillColor={'white'} marginTop='0.2rem' />
                    <span className='text-md ml-2'>Book a demo</span>
                </Link>
                <div className='flex mt-6'>
                    <img src={IconUser} alt='' />
                    <Link className='ml-2 font-medium' to='/free-trial/'>
                        Start a Trial
                    </Link>
                </div>
                <div className='flex mt-2'>
                    <img src={IconTag} alt='' />
                    <Link className='ml-2 font-medium' to='/pricing/'>
                        Pricing
                    </Link>
                </div>
            </div>
            <div className='col-span-7 p-6'>
                {platform.map((item, key) => {
                    return (
                        <PlatformLink key={key} css={pathname === item.link ? activePlatformLink : null}>
                            <Link className='mb-6' to={item.link}>
                                <div className='flex mb-1'>
                                    <img src={item.icon} alt='' />
                                    <PlatformLinkTitle>{item.title}</PlatformLinkTitle>
                                </div>
                                <p
                                    className='ml-9 font-light'
                                    css={[
                                        descriptionColorStyle,
                                        css`
                                            font-size: 0.9rem;
                                        `
                                    ]}
                                >
                                    {item.description}
                                </p>
                            </Link>
                        </PlatformLink>
                    );
                })}
            </div>
        </div>
    );
};

export default Platform;
