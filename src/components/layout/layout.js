import React from 'react';

import Seo from '../Seo';
import Header from './header';
import GlobalContext from '../../context/GlobalContext';
import useHubspotEvents from '../../common/hbspotEvents';
import CookiesBanner from '../cookies-banner/CookiesBanner';
import { CookiesProvider } from 'react-cookie';
import loadable from '@loadable/component';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import useSetCookieBanner from '../cookies-banner/useSetCookieBanner';
import { cookieConsentKey } from '../../common/constants';
const Footer = loadable(() => import('./footer'));

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
    const { cookies, cookiesBanner, setCookiesBanner } = useSetCookieBanner();

    return (
        <div>
            <CookiesProvider>
                <GlobalContext.Provider value={{ location }}>
                    <Seo
                        title={title}
                        description={description}
                        pageName={pageName}
                        banner={banner}
                        location={location}
                    />
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
                            location={location}
                        />
                    )}

                    <main>
                        <div>{children}</div>
                    </main>
                    <Footer pageUri={location?.pathname} pageName={pageName} />
                    {Boolean(cookies[cookieConsentKey]) !== true && (
                        <CookiesBanner
                            cookiesBanner={cookiesBanner}
                            setCookiesBanner={setCookiesBanner}
                            pageName={pageName}
                        />
                    )}
                    <ScrollToTopButton />
                </GlobalContext.Provider>
            </CookiesProvider>
        </div>
    );
};

export default Layout;
