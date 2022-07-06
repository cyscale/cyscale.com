import React from 'react';

import Seo from '../Seo';
import Header from './header';
import Consent from '../consent';
import GlobalContext from '../../context/GlobalContext';
import useHubspotEvents from '../../common/hbspotEvents';
import loadable from '@loadable/component';
const Footer = loadable(() => import('./footer'))

const Layout = ({
    children,
    title,
    location,
    description,
    heroBG,
    bannerTitle,
    bannerDescription,
    bannerBtn1Text,
    bannerBtn1Link,
    bannerBtn2Text,
    bannerBtn2Link,
    pageName,
    banner,
    blogDataTitle
}) => {
    useHubspotEvents({ location, pageName });
    return (
        <div>
            <GlobalContext.Provider value={{ location }}>
                <Seo title={title} description={description} pageName={pageName} banner={banner} location={location} />
                {!!pageName && pageName === 'ContactUs' ? (
                    <></>
                ) : pageName === 'Pricing' ||
                  pageName === 'aboutUs' ||
                  pageName === 'termsOfUse' ||
                  pageName === 'privacyPolicy' ||
                  pageName === 'SecurityPolicy' ||
                  pageName === 'dataSecurity' ||
                  pageName === 'blog' ? (
                    <></>
                ) : (
                    <Header
                        heroBG={heroBG}
                        bannerTitle={bannerTitle}
                        bannerDescription={bannerDescription}
                        bannerBtn1Text={bannerBtn1Text}
                        bannerBtn1Link={bannerBtn1Link}
                        bannerBtn2Text={bannerBtn2Text}
                        bannerBtn2Link={bannerBtn2Link}
                        pageName={pageName}
                        blogDataTitle={blogDataTitle}
                    />
                )}

                <main>
                    <div>{children}</div>
                </main>
                <Footer />
                <Consent />
            </GlobalContext.Provider>
        </div>
    );
};

export default Layout;
