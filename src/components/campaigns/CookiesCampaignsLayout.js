import React from 'react';
import { CookiesProvider } from 'react-cookie';
import GlobalContext from '../../context/GlobalContext';
import Seo from '../Seo';
import Footer from './footer';
import CookiesBanner from '../cookies-banner/CookiesBanner';
import { Helmet } from 'react-helmet';
import { Container } from '../atoms/Containers';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo.svg';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import useSetCookieBanner from '../cookies-banner/useSetCookieBanner';

const CookiesCampaignsLayout = ({ location, title, description, pageName, children }) => {
    const { cookies, cookiesBanner, setCookiesBanner } = useSetCookieBanner();

    return (
        <CookiesProvider>
            <GlobalContext.Provider value={{ location }}>
                <Seo title={title} description={description} pageName={pageName} location={location} />
                <Helmet>
                    <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js' />
                    <meta name='robots' content='noindex' />
                    <meta name='robots' content='nofollow' />
                </Helmet>
                <header id='head' className='bg-lightGrey pt-3 pb-2'>
                    <Container>
                        <Link to='/' className='inline-flex'>
                            <img className='block h-10' src={logo} alt='Cyscale' />
                        </Link>
                    </Container>
                </header>
                <main>{children}</main>
                <Footer />
                {Boolean(cookies?.CookiesConsent) !== true && (
                    <CookiesBanner cookiesBanner={cookiesBanner} setCookiesBanner={setCookiesBanner} />
                )}
                <ScrollToTopButton />
            </GlobalContext.Provider>
        </CookiesProvider>
    );
};

export default CookiesCampaignsLayout;
