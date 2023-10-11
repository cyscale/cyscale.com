import React from 'react';
import { Container } from '../atoms/Containers';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo-footer.svg';

const CampaignsFooter = () => {
    return (
        <footer className='bg-gray'>
            <Container>
                <div className='flex-col lg:flex-row flex justify-between py-10 lg:py-5 max-w-3xl lg:max-w-full mx-auto lg:mx-0'>
                    <div className='flex-col lg:flex-row flex lg:py-5'>
                        <div className='order-1'>
                            <Link to='/'>
                                <img src={logo} className='w-40 mt-1' alt='Cyscale Logo' />
                            </Link>
                        </div>
                        <div className='order-1 lg:ml-6'>
                            <Link to='/policies/terms-of-use/' className='font-light text-white text-sm font-hind'>
                                <span className='py-3.5 inline-block no-underline hover:underline'>Terms of use</span>
                            </Link>
                        </div>
                        <div className='order-1 lg:ml-6'>
                            <Link to='/policies/security-policy/' className='font-light text-white text-sm font-hind'>
                                <span className='py-3.5 inline-block no-underline hover:underline'>
                                    Security Policy
                                </span>
                            </Link>
                        </div>
                        <div className='order-1 lg:ml-6'>
                            <Link to='/policies/privacy-policy/' className='font-light text-white text-sm font-hind'>
                                <span className='py-3.5 inline-block no-underline hover:underline'>Privacy Policy</span>
                            </Link>
                        </div>
                        <div className='order-1 lg:ml-6'>
                            <a
                                href='https://status.cyscale.com'
                                rel='noopener noreferrer'
                                target='_blank'
                                className='font-light text-white text-sm font-hind'
                            >
                                <span className='py-3.5 inline-block no-underline hover:underline'>Status</span>
                            </a>
                        </div>
                        <div className='order-1 lg:ml-6'>
                            <Link to='/sitemap/' className='font-light text-white text-sm font-hind'>
                                <span className='py-3.5 inline-block no-underline hover:underline'>Sitemap</span>
                            </Link>
                        </div>
                    </div>
                    <div className='lg:py-5'>
                        <small className='text-white text-sm font-hind py-3.5 inline-block'>
                            &copy; {new Date().getFullYear()} Cyscale Limited
                        </small>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default CampaignsFooter;
