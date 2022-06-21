import React, { useState, useEffect } from 'react';

import Seo from '../Seo';
import Footer from './footer';
import Consent from '../consent';
import TopNav from './topNav';
import HeaderContext from './HeaderContext';
import GlobalContext from '../../context/GlobalContext';
import useHubspotEvents from '../../common/hbspotEvents';
import CookiesBanner from '../cookies-banner/CookiesBanner';

const Layout = ({ children, title, description, pageName, location, banner }) => {
    useHubspotEvents({ location, pageName });
    const [sticker, setSticker] = useState(false);
    const [cookiesBanner, setCookiesBanner] = useState(false);

    useEffect(() => {
        setCookiesBanner(true);
    }, []);

    return (
        <GlobalContext.Provider value={{ location }}>
            <Seo title={title} description={description} pageName={pageName} location={location} banner={banner} />
            <HeaderContext.Provider value={{ sticker, setSticker }}>
                <TopNav pageName={pageName} />
            </HeaderContext.Provider>
            <main>{children}</main>
            <Footer />
            <Consent />
            <CookiesBanner cookiesBanner={cookiesBanner} setCookiesBanner={setCookiesBanner} />

        </GlobalContext.Provider>
    );
};

export default Layout;
