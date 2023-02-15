import React, { useState } from 'react';

import Seo from '../Seo';
import Footer from './footer';
import HeaderContext from './HeaderContext';
import GlobalContext from '../../context/GlobalContext';
import useHubspotEvents from '../../common/hbspotEvents';
import CookiesBanner from '../cookies-banner/CookiesBanner';
import { CookiesProvider } from 'react-cookie';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import useSetCookieBanner from '../cookies-banner/useSetCookieBanner';
import { cookieConsentKey } from '../../common/constants';
import NewTopNav from './NewTopNav';

const Layout = ({ children, title, description, pageName, location, banner }) => {
    useHubspotEvents({ pageName });
    const [sticker, setSticker] = useState(false);
    const { cookies, cookiesBanner, setCookiesBanner } = useSetCookieBanner();

    return (
        <CookiesProvider>
            <GlobalContext.Provider value={{ location }}>
                <Seo title={title} description={description} pageName={pageName} location={location} banner={banner} />
                <HeaderContext.Provider value={{ sticker, setSticker }}>
                    <NewTopNav pageName={pageName} location={location} />
                </HeaderContext.Provider>
                <main>{children}</main>
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
    );
};

export default Layout;