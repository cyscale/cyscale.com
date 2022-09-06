import React, { useEffect, useState } from 'react';
import navBars from '../../assets/images/navbars-campaigns.svg';
import { CookiesProvider } from 'react-cookie';
import { useAppLink } from '../../common/links';
import GlobalContext from '../../context/GlobalContext';
import Seo from '../Seo';
import { Helmet } from 'react-helmet';
import { Container } from '../atoms/Containers';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo.svg';
import { CSSTransition } from 'react-transition-group';
import Footer from './footer';
import CookiesBanner from '../cookies-banner/CookiesBanner';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import useSetCookieBanner from '../cookies-banner/useSetCookieBanner';
import { cookieConsentKey } from '../../common/constants';
import NewNavigation from '../layout/NewNavigation';
import NewTopNav from '../layout/NewTopNav';

const NewCookiesCampaignsLayout = ({ children, formId, formTargetId, location, title, description, pageName }) => {
    const { cookies, cookiesBanner, setCookiesBanner } = useSetCookieBanner();
    const [navOpen, setNavOpen] = useState(false);
    const appLink = useAppLink();

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId,
                    target: formTargetId
                });
            }
        }, 600);
    }, []);

    return (
        <CookiesProvider>
            <GlobalContext.Provider value={{ location }}>
                <Seo title={title} description={description} pageName={pageName} location={location} />
                <Helmet>
                    <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js' />
                    <meta name='robots' content='noindex' />
                    <meta name='robots' content='nofollow' />
                </Helmet>
                <Container className='hidden xl:block'>
                    <div className='flex justify-end'>
                        <p className='text-sm py-2'>
                            <strong>Call:</strong>
                            <span style={{ color: '#5E5E5E' }}> +44 7401 208466</span> &nbsp;&nbsp;&nbsp;
                            <strong>Email:</strong> <span style={{ color: '#5E5E5E' }}>sales@cyscale.com</span>
                        </p>
                    </div>
                </Container>
                <header id='head' className='bg-lightGrey pt-8 pb-2 hidden xl:block'>
                    <div className='container max-w-7xl m-auto px-4 lg:px-8 flex items-center'>
                        <Link to='/' className='inline-flex z-40'>
                            <img className='block h-10' src={logo} alt='Cyscale' />
                        </Link>
                        <img
                            className={`block h-5 ml-auto cursor-pointer ${!navOpen ? 'visible' : 'invisible'}`}
                            src={navBars}
                            onClick={() => setNavOpen(!navOpen)}
                            alt=''
                        />
                    </div>
                    <CSSTransition in={navOpen} timeout={300} classNames='navigation' unmountOnExit>
                        <div className='navigation'>
                            <NewNavigation pageName={pageName} showLogo={false} appLink={appLink} classes={true} />
                        </div>
                    </CSSTransition>
                </header>
                <div className='block xl:hidden m-auto px-8'>
                    <NewTopNav pageName={pageName} />
                </div>
                {children}
                <Footer />
                {Boolean(cookies[cookieConsentKey]) !== true && (
                    <CookiesBanner cookiesBanner={cookiesBanner} setCookiesBanner={setCookiesBanner} />
                )}
                <ScrollToTopButton />
            </GlobalContext.Provider>
        </CookiesProvider>
    );
};

export default NewCookiesCampaignsLayout;
