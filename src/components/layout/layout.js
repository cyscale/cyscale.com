import React, { useEffect, useState } from 'react';

import Seo from '../Seo';
import Header from './header';
import GlobalContext from '../../context/GlobalContext';
import useHubspotEvents from '../../common/hbspotEvents';
import CookiesBanner from '../cookies-banner/CookiesBanner';
import { CookiesProvider, useCookies } from 'react-cookie';
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
    const [cookiesBanner, setCookiesBanner] = useState(false);
    const [cookies] = useCookies();

    useEffect(() => {
        setCookiesBanner(true);
    }, []);

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
                        />
                    )}

                    <main>
                        <div>{children}</div>
                    </main>
                    <Footer />
                    {Boolean(cookies?.CookiesConsent) !== true && location.pathname !== '/policies/privacy-policy/' && (
                        <CookiesBanner cookiesBanner={cookiesBanner} setCookiesBanner={setCookiesBanner} />
                    )}
                </GlobalContext.Provider>
            </CookiesProvider>
        </div>
    );
};

export default Layout;
