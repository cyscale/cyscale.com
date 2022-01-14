import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import heroBG from '../../assets/images/contact-hero.jpg';
import facebook from '../../assets/images/facebook.svg';
import linkedin from '../../assets/images/linkedin.svg';
import LocationIcon from '../../assets/images/location.svg';
import twitter from '../../assets/images/twitter.svg';
import TopNav from '../layout/topNav';

const Index = () => {
    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId: 'c29fe5d0-179d-4bff-a8ac-36790a48a6c2',
                    target: '#contact-form'
                });
            }
        }, 600);
    }, []);
    return (
        <>
            <Helmet>
                <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <div>
                <div
                    className={`w-full pb-20px ContactUs bg-lightGreyEEE bg-contain bg-no-repeat`}
                    style={{ backgroundImage: `url(${heroBG})` }}
                >
                    <TopNav pageName='contact_us' />
                    <div className='max-w-1366px mx-auto contactForm pt-72 pb-67px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
                            <div>
                                <h1 className='text-69px lg:text-80px font-proximaBold uppercase text-white'>
                                    CONTACT
                                </h1>
                                <div className='w-full contactAddress mt-272px hidden lg:flex flex-col'>
                                    <img src={LocationIcon} className='w-5' alt='location icon' />
                                    <p className='text-16px leading-normal text-black font-bold mb-30px'>&copy; {new Date().getFullYear()} Cyscale Limited</p>
                                    <p className='text-16px leading-normal text-black font-light mb-30px'>
                                        Registered in England and Wales
                                        <br />
                                        Company number: 13695269
                                        <br />
                                        The Broadgate Tower, 20 Primrose Street, London, EC2A 2RS
                                        <br />
                                    </p>
                                    <a
                                        href='https://www.google.com/maps/place/Cyscale/@51.5209922,-0.0811234,17z'
                                        className='uppercase text-blue underline text-16px hover:no-underline hover:text-red font-medium mb-30px'
                                    >
                                        View map
                                    </a>
                                    <div>
                                        <div className='flex flex-row flex-nowrap space-x-4 justify-start'>
                                            <a href='https://www.linkedin.com/company/cyscale'>
                                                <img src={linkedin} alt='linkedin' />
                                            </a>
                                            <a href='https://www.twitter.com/cyscale'>
                                                <img src={twitter} alt='twitter' />
                                            </a>
                                            <a href='https://www.facebook.com/cyscale'>
                                                <img src={facebook} alt='facebook' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-blue text-34px leading-normal sectionTitle'>
                                    Hello!
                                    <br />
                                    How can we help you?
                                </h2>
                                <p className='text-16px text-black leading-normal mt-57px'>
                                    We are always happy to assist with more information about us or product. Just fill
                                    out the form here and we will get back to you.{' '}
                                </p>
                                <div className='mt-55px lg:mb-200px block w-full'>
                                    <div id='contact-form' />
                                </div>
                                <div className='w-full contactAddress mt-100px flex lg:hidden flex-col'>
                                    <img src={LocationIcon} className='w-5' alt='location icon' />
                                    <p className='text-16px leading-normal text-black font-bold mb-30px'>&copy; {new Date().getFullYear()} Cyscale Limited</p>
                                    <p className='text-16px leading-normal text-black font-light mb-30px'>
                                        Registered in England and Wales
                                        <br />
                                        Company number: 13695269
                                        <br />
                                        The Broadgate Tower, 20 Primrose Street, London, EC2A 2RS
                                        <br />
                                    </p>
                                    <a
                                        href='https://www.google.com/maps/place/Cyscale/@51.5209922,-0.0811234,17z'
                                        className='uppercase text-blue underline text-16px hover:no-underline hover:text-red font-medium mb-30px'
                                    >
                                        View map
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
