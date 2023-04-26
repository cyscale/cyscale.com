import React from 'react';
import { Container } from '../atoms/Containers';

const CampaignsFooter = () => {
    return (
        <footer className=' bg-gray  bg-footer-texture'>
            <Container>
                <div className='flex-col md:flex-row flex justify-between py-20 max-w-3xl mx-auto'>
                    <div className='order-10 md:order-1'>
                        <small className='text-white text-sm font-hind'>&copy; {new Date().getFullYear()} Cyscale Limited</small>
                    </div>
                    <div className='order-1'>
                        <a
                            href='/policies/terms-of-use/'
                            className='font-light text-white no-underline hover:underline text-sm font-hind'
                        >
                            Terms of use
                        </a>
                    </div>
                    <div className='order-1'>
                        <a
                            href='/policies/security-policy/'
                            className='font-light text-white no-underline hover:underline text-sm font-hind'
                        >
                            Security Policy
                        </a>
                    </div>
                    <div className='order-1'>
                        <a
                            href='/policies/privacy-policy/'
                            className='font-light text-white no-underline hover:underline text-sm font-hind'
                        >
                            Privacy Policy{' '}
                        </a>
                    </div>
                    <div className='order-1'>
                        <a
                            href='https://status.cyscale.com'
                            rel='noopener noreferrer'
                            target='_blank'
                            className='font-light text-white no-underline hover:underline text-sm font-hind'
                        >
                            Status
                        </a>
                    </div>
                    <div className='order-1'>
                        <a href='/sitemap/' className='font-light text-white no-underline hover:underline text-sm font-hind'>
                            Sitemap
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default CampaignsFooter;
