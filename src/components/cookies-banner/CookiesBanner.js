import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import FocusLock from 'react-focus-lock';
import { Link } from 'gatsby';
import CookiesModal from './cookies-modal/CookiesModal';
import { useCookies } from 'react-cookie';
import { cookieConsentKey } from '../../common/constants';

const CookiesBanner = ({ cookiesBanner, setCookiesBanner, pageName }) => {
    const [cookiesModal, setCookiesModal] = useState(false);
    const [performanceAndAnalytics, setPerformanceAndAnalytics] = useState(true);
    // The consent cookie should expire in 1 year - https://gdpr.eu/cookies/
    const [cookiesOptions, setCookiesOptions] = useState({ path: '/', maxAge: 31536000 });
    const [, setCookie] = useCookies();

    const openModalOnKeyUp = (e) => {
        if (e.key === 'Enter') {
            setCookiesModal(!cookiesModal);
            return null;
        }
        return null;
    };

    useEffect(() => {
        if (typeof window !== `undefined` && window.location.hostname !== 'localhost') {
            setCookiesOptions({ ...cookiesOptions, domain: window.location.hostname });
        }
    }, []);

    return (
        <div>
            {cookiesBanner && pageName !== 'privacyPolicy' && <div className='overlay'></div>}
            <FocusLock disabled={pageName === 'privacyPolicy'}>
                <CSSTransition in={cookiesBanner} timeout={300} classNames='banner' unmountOnExit>
                    <div className='banner h-96 sm:h-56 md:h-44 lg:h-36'>
                        <div className='grid grid-rows-12 h-full'>
                            <div className='col-span-12 md:col-start-1 md:col-end-6 lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl flex items-center px-3'>
                                <div>
                                    <p className='text-black'>
                                        This website <strong>stores cookies on your computer</strong>. These cookies are
                                        used to collect information about how you interact with our website and allow us
                                        to remember you. We use this information{' '}
                                        <strong>in order to improve and customize your browsing experience</strong> and
                                        for <strong>analytics and metrics about our visitors</strong> both on this
                                        website and other media.
                                    </p>
                                    <p className='text-black mt-4'>
                                        {' '}
                                        To find out more about the cookies we use, see our
                                        <Link className='text-primary' to='/policies/privacy-policy/'>
                                            <strong> Privacy Policy.</strong>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 md:col-start-6 md:col-end-12 md:min-w-xl md:mx-6 md:max-x-xl h-full flex items-center justify-center md:flex-col lg:flex-row pb-4 sm:pb-0'>
                                <p className='text-primary md:mb-2 lg:mb-0 cursor-pointer'>
                                    <button onClick={() => setCookiesModal(!cookiesModal)} onKeyUp={openModalOnKeyUp}>
                                        <strong>Cookies Settings</strong>
                                    </button>
                                </p>
                                <button
                                    className='inline-block font-medium rounded bg-red text-white text-center py-3 px-6 ml-4'
                                    aria-label='Accept cookies'
                                    id='confirm-button'
                                    onClick={() => {
                                        setCookie(
                                            cookieConsentKey,
                                            { performanceAndAnalytics: true },
                                            { ...cookiesOptions }
                                        );
                                        setCookiesBanner(!cookiesBanner);
                                        window.location.reload(false);
                                    }}
                                >
                                    Accept All Cookies
                                </button>
                            </div>
                        </div>
                        {cookiesModal && <div className='modal-overlay'></div>}
                        <CSSTransition in={cookiesModal} timeout={300} classNames='modal' unmountOnExit>
                            <div
                                className='w-screen h-screen fixed top-0 left-0 right-0 bottom-0'
                                style={{ zIndex: 102 }}
                            >
                                <div className='sm:flex sm:justify-center sm:items-center' style={{ height: '100vh' }}>
                                    <CookiesModal
                                        setCookiesModal={setCookiesModal}
                                        cookiesModal={cookiesModal}
                                        setCookiesBanner={setCookiesBanner}
                                        performanceAndAnalytics={performanceAndAnalytics}
                                        setPerformanceAndAnalytics={setPerformanceAndAnalytics}
                                        cookiesOptions={cookiesOptions}
                                    />
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </CSSTransition>
            </FocusLock>
        </div>
    );
};

export default CookiesBanner;
