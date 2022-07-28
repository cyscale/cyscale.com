import React, { useState, useEffect } from 'react';

import Seo from '../Seo';
import Footer from './footer';
import TopNav from './topNav';
import HeaderContext from './HeaderContext';
import GlobalContext from '../../context/GlobalContext';
import useHubspotEvents from '../../common/hbspotEvents';
import CookiesBanner from '../cookies-banner/CookiesBanner';
import { CookiesProvider, useCookies } from 'react-cookie';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

const Layout = ({ children, title, description, pageName, location, banner }) => {
    useHubspotEvents({ location, pageName });
    const [sticker, setSticker] = useState(false);
    const [cookiesBanner, setCookiesBanner] = useState(false);
    const [cookies] = useCookies();

    useEffect(() => {
        setCookiesBanner(true);
    }, []);

    return (
        <CookiesProvider>
            <GlobalContext.Provider value={{ location }}>
                <Seo title={title} description={description} pageName={pageName} location={location} banner={banner} />
                <HeaderContext.Provider value={{ sticker, setSticker }}>
                    <TopNav pageName={pageName} />
                </HeaderContext.Provider>
                <main>{children}</main>
                <Footer />
                {Boolean(cookies?.CookiesConsent) !== true && (
                    <CookiesBanner cookiesBanner={cookiesBanner} setCookiesBanner={setCookiesBanner} pageName={pageName}/>
                )}
                <ScrollToTopButton />
            </GlobalContext.Provider>
        </CookiesProvider>
    );
};

export default Layout;
