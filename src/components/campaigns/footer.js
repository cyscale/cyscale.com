import React from 'react';
import { Container } from '../atoms/Containers';

const CampaignsFooter = () => {
    return (
        <footer className='bg-gray  bg-footer-texture'>
            <Container>
                <div className='flex-col lg:flex-row flex justify-between py-20 max-w-3xl lg:max-w-xl xl:max-w-3xl mx-auto'>
                    <div className='order-10 md:order-1'>
                        <small className='text-white text-sm font-hind py-3.5 inline-block'>
                            &copy; {new Date().getFullYear()} Cyscale Limited
                        </small>
                    </div>
                    <div className='order-1'>
                        <a
                            href='/policies/terms-of-use/'
                            className='font-light text-white no-underline hover:underline text-sm font-hind'
                        >
                            <span className='py-3.5 inline-block'>Terms of use</span>
                        </a>
                    </div>
                    <div className='order-1'>
                        <a
                            href='/policies/security-policy/'
                            className='font-light text-white no-underline hover:underline text-sm font-hind'
                        >
                            <span className='py-3.5 inline-block'>Security Policy</span>
                        </a>
                    </div>
                    <div className='order-1'>
                        <a
                            href='/policies/privacy-policy/'
                            className='font-light text-white no-underline hover:underline text-sm font-hind'
                        >
                            <span className='py-3.5 inline-block'>Privacy Policy</span>
                        </a>
                    </div>
                    <div className='order-1'>
                        <a
                            href='https://status.cyscale.com'
                            rel='noopener noreferrer'
                            target='_blank'
                            className='font-light text-white no-underline hover:underline text-sm font-hind'
                        >
                            <span className='py-3.5 inline-block'>Status</span>
                        </a>
                    </div>
                    <div className='order-1'>
                        <a
                            href='/sitemap/'
                            className='font-light text-white no-underline hover:underline text-sm font-hind'
                        >
                            <span className='py-3.5 inline-block'>Sitemap</span>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default CampaignsFooter;
