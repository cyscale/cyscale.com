import React, { useState } from 'react';
import TopNav from './topNav';
import downDoubleArrow from '../../assets/images/banner-arrow-down.svg';
import HeaderContext from './HeaderContext';
import ScrollButton from '../ScrollButton/ScrollButton';

const Header = ({
    heroBG,
    bannerTitle,
    bannerDescription,
    bannerBtn1Text,
    bannerBtn1Link,
    bannerBtn2Text,
    bannerBtn2Link,
    pageName
}) => {
    const [sticker, setSticker] = useState(false);

    const rootClasses = `
    heroBg
    top-0
    w-full
    bg-no-repeat
    relative
    ${pageName}
    ${sticker ? 'pt-105px' : ''}
    ${pageName === 'CSPMPage' ? 'pb-64px' : 'pb-20px'}
    ${pageName === 'SKGPage' ? 'bg-lightGreyEEE' : 'bg-cover'}`;

    return (
        <HeaderContext.Provider value={{ sticker, setSticker }}>
            <div className={rootClasses} style={{ backgroundImage: `url(${heroBG})  ` }}>
                <TopNav pageName={pageName} />
                <div className='max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px mt-87px'>
                    <div className='w-full lg:w-3/5 header-padding'>
                        <h1
                            className={`${
                                pageName === 'SKGPage' ? 'sm:mt-28' : ''
                            } text-blue text-38px sm:text-30px md:text-60px leading-40px sm:leading-60px font-semibold new-line`}
                        >
                            {pageName === 'SKGPage' ? (
                                <span>
                                    Security <br />
                                    Knowledge Graph<sup>TM</sup>
                                </span>
                            ) : (
                                bannerTitle
                            )}
                        </h1>
                        <div className='mt-64px'>
                            <p className='text-black text-16px new-line hidden sm:block'>
                                {pageName === 'SKGPage' ? (
                                    <span>
                                        Many tools promise less data to deal with and stronger aggregation. But even
                                        when they deliver, it’s not enough to make your job easier.
                                        <br />
                                        <br />
                                        That’s why we built the Security Knowledge Graph<sup>TM</sup>. Because you
                                        deserve a cloud security platform that surfaces crucial issues based on deep
                                        understanding of all your interlinked assets.
                                        <br />
                                        <br />
                                        Go far beyond the limits of list-based inventories.
                                    </span>
                                ) : (
                                    bannerDescription
                                )}
                            </p>
                        </div>
                        <div className='flex flex-wrap flex-row space-x-0 md:space-x-4 mt-40px'>
                            {bannerBtn1Text && bannerBtn1Link && (
                                <div className='mt-24px w-full sm:w-auto'>
                                    <a
                                        href={bannerBtn1Link}
                                        className='gradientBgBtn w-full sm:min-w-232px block text-16px font-medium rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px hover:no-underline no-underline'
                                    >
                                        {bannerBtn1Text}
                                    </a>
                                </div>
                            )}
                            {!!pageName && pageName === 'HomePage' && (
                                <div className='mt-24px w-full sm:w-auto hidden sm:inline-block'>
                                    <a
                                        href={bannerBtn2Link}
                                        className='blackBorder w-full sm:min-w-232px block text-16px font-medium rounded text-black uppercase text-center pt-20px pb-20px pl-49px pr-49px no-underline transition-all duration-300 hover:border-black hover:bg-black hover:text-white blackBorder hover:no-underline'
                                    >
                                        {bannerBtn2Text}
                                    </a>
                                </div>
                            )}
                        </div>
                        <div>
                            {!!pageName && pageName === 'HomePage' && (
                                <p className='text-14px text-black opacity-50 text-center pt-15px sm:text-left'>
                                    Unlimited free trial for 14 days
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='w-full text-center hidden sm:inline-block relative py-10'>
                        <ScrollButton to='start' />
                    </div>
                    {pageName == 'blog-detail' && (
                        <div className='max-w-588px sm:w-588px  md:w-588px  lg:w-588px xl:w-588px 2xl:w-588px  m-auto custon-blog-heading '>
                            <div>
                                <h2
                                    className={`${
                                        pageName === 'SKGPage' ? 'sm:mt-28' : ''
                                    } w-315px text-blue text-34px pt-140px sm:text-30px md:text-34px leading-40px sm:leading-40px font-semibold new-line`}
                                >
                                    Ut wisi enim ad minim veniam, quis nostrud exerci.
                                </h2>
                            </div>
                            <div className='bg-gradient-to-r from-blue to-red h-8px mt-39px'></div>
                        </div>
                    )}
                </div>
            </div>
        </HeaderContext.Provider>
    );
};

export default Header;
