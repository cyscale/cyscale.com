import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import CookiesModal from './cookies-modal/CookiesModal';
import { useCookies } from 'react-cookie';
import { cookieConsentKey } from '../../common/constants';
import PrivacyAndCookieInfo from './cookies-modal/PrivacyAndCookieInfo';
import { Container } from '../atoms/Containers';

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
    }, [cookiesOptions]);

    return (
        <CSSTransition in={cookiesBanner} timeout={300} classNames='banner' unmountOnExit>
            <div className='banner h-24 sm:h-56 md:h-44 lg:h-36'>
                <Container>
                    <div className='grid grid-rows-12 h-full  mt-4  sm:mt-2 xl:mt-4'>
                        <div className='col-span-12 md:col-start-1 md:col-end-6 lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl flex items-center px-3 lg:px-0'>
                            <div className='hidden sm:block'>
                                <PrivacyAndCookieInfo />
                            </div>
                        </div>
                        <div className='col-span-12 md:col-start-6 md:col-end-12 md:min-w-xl md:ml-6 md:max-x-xl h-full flex items-center justify-center md:flex-col lg:flex-row pb-4 sm:pb-0 mt-2 sm:mt-1 md:mt-0'>
                            <p className='text-primary md:mb-2 lg:mb-0 cursor-pointer'>
                                <button onClick={() => setCookiesModal(!cookiesModal)} onKeyUp={openModalOnKeyUp}>
                                    <strong>Cookies Settings</strong>
                                </button>
                            </p>
                            <button
                                className='inline-block font-medium rounded bg-red text-white text-center py-3 px-6 ml-4 cookies-button'
                                aria-label='Accept cookies'
                                onClick={() => {
                                    setCookie(
                                        cookieConsentKey,
                                        { performanceAndAnalytics: true },
                                        { ...cookiesOptions }
                                    );
                                    setCookiesBanner(!cookiesBanner);
                                }}
                            >
                                Accept Cookies
                            </button>
                        </div>
                    </div>
                    {cookiesModal && <div className='modal-overlay'></div>}
                    <CSSTransition in={cookiesModal} timeout={300} classNames='modal' unmountOnExit>
                        <div className='w-screen h-screen fixed top-0 left-0 right-0 bottom-0' style={{ zIndex: 102 }}>
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
                </Container>
            </div>
        </CSSTransition>
    );
};

export default CookiesBanner;
