import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import IconUser from '../../../../assets/images/icon-user.svg';
import { Link } from 'gatsby';
import IconTag from '../../../../assets/images/icon-tag.svg';
import { platform } from '../../nav';
import { montserratFontStyle, descriptionColorStyle, hoverButtonColorStyle } from '../../style';

const PlatformLinkTitle = styled.h1`
    ${tw`ml-4 text-lg`}
    font-weight: 500;
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
        background-color: rgb(232, 238, 248, 0.3);
        border-left: 0.188rem solid #0f26aa;
    }
`;

const Platform = () => {
    return (
        <div className='max-w-5xl grid grid-cols-12 gap-2 ml-auto justify-end shadow-2xl bg-white'>
            <div className='col-span-5 bg-selago p-6'>
                <h1 css={montserratFontStyle} className='text-2xl font-semibold mb-6'>
                    Platform Overview
                </h1>
                <p className='mb-6'>
                    Cloud visibility, security and compliance. Map, secure and monitor cloud assets across multiple
                    providers.{' '}
                </p>
                <p className='mb-4'>Explore the knowledge graph in our playground account populated with data.</p>
                <a
                    className='bg-blue text-white py-2 px-4 rounded cursor-pointer font-medium'
                    href='https://app.cyscale.com/playground'
                    css={hoverButtonColorStyle}
                >
                    <span className='text-xl'>></span>
                    <span className='text-md ml-2'>Try Cyscale Platform</span>
                </a>
                <div className='flex mt-12'>
                    <img src={IconUser} alt='' />
                    <Link className='ml-2 font-medium' to='/request-demo/'>
                        Request Demo
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
                        <PlatformLink key={key}>
                            <Link className='mb-4' to={item.link}>
                                <div className='flex mb-1'>
                                    <img src={item.icon} alt='' />
                                    <PlatformLinkTitle>{item.title}</PlatformLinkTitle>
                                </div>
                                <p className='ml-9 text-base font-light' css={descriptionColorStyle}>
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
