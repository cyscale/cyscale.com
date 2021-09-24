import React, { useState } from 'react';

import Seo from '../Seo';
import Footer from './footer';
import Consent from '../consent';
import TopNav from './topNav';
import HeaderContext from './HeaderContext';
const Layout = ({ children, title, description, pageName }) => {
    const [sticker, setSticker] = useState(false);

    return (
        <div>
            <Seo title={title} description={description} pageName={pageName} />
            <HeaderContext.Provider value={{ sticker, setSticker }}>
                <TopNav pageName={pageName} />
            </HeaderContext.Provider>
            <main>{children}</main>
            <Footer />
            <Consent />
        </div>
    );
};

export default Layout;
