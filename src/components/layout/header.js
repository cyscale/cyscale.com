import React, { useState } from 'react';
import HeaderContext from './HeaderContext';
import ScrollButton from '../ScrollButton/ScrollButton';
import remoteWorkBannerImage from '../../assets/images/remote-work-banner-image.png';
import complianceBannerImage from '../../assets/images/compliance-banner-image2.png';
import {
    ISO27001Small,
    AicpaSoc2Small,
    CisBenchmarksSmall,
    EuEuropeanGdprSmall,
    USHipaaSmall,
    PciDssSmall,
    NistSmall
} from '../Home/images';
import NewTopNav from './NewTopNav';
import { Link } from 'gatsby';

const Header = ({
    heroBG,
    bannerTitle,
    bannerDescription,
    bannerBtn1Text,
    bannerBtn1Link,
    bannerBtn1LinkInternal,
    bannerBtn2Text,
    bannerBtn2Link,
    pageName,
    blogDataTitle,
    location
}) => {
    const [sticker, setSticker] = useState(false);

    const rootClasses = `
    heroBg
    top-0
    w-full
    bg-no-repeat
    relative
    pt-28
    ${pageName}
    ${sticker ? 'pt-105px' : ''}
    ${pageName === 'CSPMPage' ? 'pb-64px' : 'pb-20px'}
    ${
        pageName === 'SKGPage' ||
        pageName === 'jobDetails' ||
        pageName === 'RemoteWork' ||
        pageName === 'ComplianceAuditing'
            ? 'bg-lightGreyEEE'
            : 'bg-cover'
    }
    ${pageName === 'HomePage' ? 'heroBgHome' : ''}`;
    const rootStyle = heroBG ? { backgroundImage: `url(${heroBG})` } : null;

    return (
        <HeaderContext.Provider value={{ sticker, setSticker }}>
            <div className={rootClasses} style={rootStyle}>
                <NewTopNav pageName={pageName} location={location} />
                <div className='max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px '>
                    {pageName === 'blog-detail' || pageName === 'blogs' ? (
                        <div className='flex mt-44'>
                            <div className='mx-auto w-full xl:w-2/4'>
                                <h1 className='font-semibold text-34px text-blue leading-normal otherPages sectionTitle'>
                                    {blogDataTitle || 'Cyscale Blog'}
                                </h1>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div
                                className={`flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-6`}
                            >
                                <div
                                    className={`w-full lg:w-3/5 ${
                                        pageName === 'RemoteWork'
                                            ? 'order-2 lg:order-1'
                                            : pageName === 'ComplianceAuditing'
                                            ? null
                                            : pageName === 'HomePage'
                                            ? null
                                            : 'header-padding'
                                    }`}
                                >
                                    <h1 className='font-semibold text-blue text-38px sm:text-30px md:text-60px leading-normal sm:leading-normal sm:mt-20 new-line'>
                                        {pageName === 'SKGPage' ? (
                                            <span>
                                                Security <br />
                                                Knowledge Graph™
                                            </span>
                                        ) : (
                                            bannerTitle
                                        )}
                                    </h1>
                                    <div className='mt-24px sm:mt-64px'>
                                        <p
                                            className={`text-black text-16px new-line ${
                                                pageName === 'RemoteWork' || pageName === 'ComplianceAuditing'
                                                    ? null
                                                    : pageName === 'HomePage'
                                                    ? 'block'
                                                    : 'hidden sm:block'
                                            }`}
                                        >
                                            {pageName === 'SKGPage' ? (
                                                <span>
                                                    Many tools promise less data to deal with and stronger aggregation.
                                                    But even when they deliver, it's not enough to make your job easier.
                                                    <br />
                                                    <br />
                                                    That's why we built the Security Knowledge Graph™. Because you
                                                    deserve a cloud security platform that surfaces crucial issues based
                                                    on deep understanding of all your interlinked assets.
                                                    <br />
                                                    <br />
                                                    Go far beyond the limits of list-based inventories.
                                                </span>
                                            ) : (
                                                bannerDescription
                                            )}
                                        </p>
                                    </div>
                                    <div
                                        className={`flex flex-wrap flex-row justify-start space-x-0 md:space-x-4 ${
                                            pageName === 'ComplianceAuditing' ? 'sm:mt-40px' : 'mt-40px'
                                        }`}
                                    >
                                        {bannerBtn1Text &&
                                            bannerBtn1Link &&
                                            (pageName === 'jobDetails' ? (
                                                <ScrollButton
                                                    pageName='jobDetails'
                                                    btnText={bannerBtn1Text}
                                                    to='applyForm'
                                                />
                                            ) : (
                                                <div className='mt-24px w-full sm:w-auto'>
                                                    {pageName === 'ComplianceAuditing' && (
                                                        <div className='flex flex-row mb-4 items-center justify-between lg:hidden flex-wrap lg:space-x-2 mb-8 lg:mb-0'>
                                                            <ISO27001Small />
                                                            <AicpaSoc2Small />
                                                            <CisBenchmarksSmall />
                                                            <EuEuropeanGdprSmall />
                                                            <USHipaaSmall />
                                                            <PciDssSmall />
                                                            <NistSmall />
                                                        </div>
                                                    )}
                                                    {!bannerBtn1LinkInternal && (
                                                        <a
                                                            href={bannerBtn1Link}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className='gradientBgBtn w-full sm:min-w-232px block text-16px font-medium rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px hover:no-underline no-underline'
                                                        >
                                                            {bannerBtn1Text}
                                                        </a>
                                                    )}
                                                    {bannerBtn1LinkInternal && (
                                                        <Link
                                                            to={bannerBtn1Link}
                                                            className='gradientBgBtn w-full sm:min-w-232px block text-16px font-medium rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px hover:no-underline no-underline'
                                                        >
                                                            {bannerBtn1Text}
                                                        </Link>
                                                    )}
                                                </div>
                                            ))}
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
                                        {pageName === 'HomePage' ? (
                                            <p className={`text-14px text-black opacity-50 pt-15px text-left`}>
                                                Playground account populated with data
                                            </p>
                                        ) : null}
                                    </div>
                                </div>

                                {pageName === 'ComplianceAuditing' && (
                                    <div className={`lg:pt-14`}>
                                        <img
                                            src={complianceBannerImage}
                                            alt='Cloud security and visibility for remote work setups'
                                            className='lg:mx-auto w-36 lg:w-auto h-auto hidden lg:block'
                                        />
                                        <div className='hidden lg:flex flex-row items-center justify-between mt-28 flex-wrap space-y-4 lg:space-y-0 lg:space-x-2'>
                                            <ISO27001Small />
                                            <AicpaSoc2Small />
                                            <CisBenchmarksSmall />
                                            <EuEuropeanGdprSmall />
                                            <USHipaaSmall />
                                            <PciDssSmall />
                                            <NistSmall />
                                        </div>
                                    </div>
                                )}
                                {pageName === 'RemoteWork' && (
                                    <div className={`lg:pt-14 order-1 lg:order-2`}>
                                        <img
                                            src={remoteWorkBannerImage}
                                            alt='Cloud security and visibility for remote work setups'
                                            className='mx-auto w-40 lg:w-auto h-auto'
                                        />
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {pageName === 'blog-detail' ||
                    pageName === 'jobDetails' ||
                    pageName === 'blogs' ||
                    pageName === 'author-page' ? null : (
                        <div
                            className={`w-full text-center ${pageName === 'HomePage' ? 'mt-10 sm:mt-0' : ''} ${
                                pageName !== 'HomePage' ? 'hidden sm:' : ''
                            }inline-block relative py-2`}
                        >
                            <ScrollButton to='start' />
                        </div>
                    )}
                </div>
            </div>
        </HeaderContext.Provider>
    );
};

export default Header;
