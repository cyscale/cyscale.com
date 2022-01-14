import React from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo-footer.svg';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import CrunchbaseIcon from '../../assets/images/cib-crunchbase.svg';
import AngelIcon from '../../assets/images/angel.svg';
const Footer = () => {
    return (
        <div className=' bg-gray  bg-footer-texture'>
            <div className=' justify-between md:flex text-white pl-20px pr-20px md:pl-100px pt-68px md:pr-114px lg:pb-82px pb-20px max-w-1366px m-auto'>
                <div className='md:flex w-full md:w-6/12 lg:w-4/12 md:flex-col'>
                    <Link to='/'>
                        <img src={logo} className='w-162px footerLogo' alt='cyscale logo' />
                    </Link>
                    <div className='mt-20px text-14px font-light leading-normal text-white pr-20px'>
                        Cyscale helps companies embrace their digital future by protecting apps and data in the cloud.
                        With the innovative Security Knowledge Graph™ at its core, Cyscale helps you easily track
                        security and compliance across your multi-cloud environment.
                    </div>
                    <div className='items-center mt-20px md:mt-auto hidden lg:flex'>
                        <div className='mr-25px'>
                            <a
                                href='https://www.linkedin.com/company/cyscale'
                                className='text-white'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className='mr-25px'>
                            <a
                                href='https://www.twitter.com/cyscale'
                                className='text-white'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <FaTwitter />
                            </a>
                        </div>
                        <div className='mr-25px'>
                            <a
                                href='https://www.facebook.com/cyscale'
                                className='text-white'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <FaFacebook />
                            </a>
                        </div>
                        <div className='mr-25px'>
                            <a
                                href='https://www.crunchbase.com/organization/cyscale'
                                className='text-white'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <img src={CrunchbaseIcon} className='w-16px' alt='crunch base icon' />
                            </a>
                        </div>
                        <div className='mr-25px'>
                            <a
                                href=' https://angel.co/company/cyscale'
                                className='text-white'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <img src={AngelIcon} className='w-16px' alt='angel icon' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-6/12 lg:w-8/12 mt-20px md:mt-0'>
                    <div className='grid-cols-2 lg:grid-cols-4 justify-between hidden sm:grid'>
                        <div className=''>
                            <h3 className='text-14px font-bold leading-normal text-white pb-40px '>Platform</h3>
                            <ul>
                                <li className='text-12px leading-normal pb-7px'>
                                    <Link
                                        to='/products/cloud-security-posture-management/'
                                        className='font-light text-white no-underline hover:underline'
                                    >
                                        Cloud Security Posture Management
                                    </Link>
                                </li>
                                <li className='text-12px leading-normal pb-7px'>
                                    <Link
                                        to='/products/security-knowledge-graph/'
                                        className='font-light text-white no-underline hover:underline'
                                    >
                                        Security Knowledge Graph<sup>TM</sup>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h3 className='text-14px font-bold leading-normal  text-white pb-40px '>Use cases</h3>
                            <ul>
                                <li className='text-12px leading-normal pb-7px'>
                                    <Link
                                        to='/use-cases/cloud-data-security/'
                                        className='font-light text-white no-underline hover:underline'
                                    >
                                        Data Security
                                    </Link>
                                </li>
                                <li className='text-12px leading-normal pb-7px'>
                                    <Link
                                        to='/use-cases/remote-work-security/'
                                        className='font-light text-white no-underline hover:underline'
                                    >
                                        Remote Work
                                    </Link>
                                </li>
                                <li className='text-12px leading-normal pb-7px'>
                                    <Link
                                        to='/use-cases/cloud-compliance-and-auditing/'
                                        className='font-light text-white no-underline hover:underline'
                                    >
                                        Compliance and Auditing
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className=''>
                            <h3 className='text-14px font-bold leading-normal  text-white pb-40px '>Resources</h3>
                            <ul>
                                <li className='text-12px leading-normal pb-7px'>
                                    <Link to='/blog' className='font-light text-white no-underline hover:underline'>
                                        Blog
                                    </Link>
                                </li>
                                <li className='text-12px leading-normal pb-7px'>
                                    <a
                                        href='https://docs.cyscale.com'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='font-light text-white no-underline hover:underline'
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li className='text-12px leading-normal pb-7px'>
                                    <a
                                        href='/resources/cyscale-cloud-data-security-datasheet.pdf'
                                        download
                                        className='font-light text-white no-underline hover:underline'
                                    >
                                        Data Sheet
                                    </a>
                                </li>
                                <li className='text-12px leading-normal pb-7px'>
                                    <a
                                        href='https://docs.cyscale.com'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='font-light text-white no-underline hover:underline'
                                    >
                                        FAQ + Support
                                    </a>
                                </li>
                                <li className='text-12px leading-normal pb-7px'>
                                    <Link to='/pricing/' className='font-light text-white no-underline hover:underline'>
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className=''>
                            <h3 className='text-14px font-bold leading-normal  text-white pb-40px '>Company</h3>
                            <ul>
                                <li className='text-12px leading-normal pb-7px'>
                                    <Link
                                        to='/about-us/'
                                        className='font-light text-white no-underline hover:underline'
                                    >
                                        About us
                                    </Link>
                                </li>
                                <li className='text-12px leading-normal pb-7px'>
                                    <Link to='/careers/' className='font-light text-white no-underline hover:underline'>
                                        Careers
                                    </Link>
                                </li>
                                <li className='text-12px leading-normal pb-7px'>
                                    <Link
                                        to='/contact-us/'
                                        className='font-light text-white no-underline hover:underline'
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='lg:pt-102px'>
                        <ul className='lg:flex m-0'>
                            <li className='block lg:inline-block lg:mr-50px text-12px font-light leading-normal text-white '>
                                &copy; {new Date().getFullYear()} Cyscale Limited
                            </li>
                            <li className='inline-block mr-10px lg:mr-30px  text-12px leading-normal  '>
                                <Link
                                    to='/policies/terms-of-use/'
                                    className='font-light text-white no-underline hover:underline'
                                >
                                    Terms of use
                                </Link>
                            </li>
                            <li className='inline-block mr-10px lg:mr-30px text-12px leading-normal '>
                                <Link
                                    to='/policies/security-policy/'
                                    className='font-light text-white no-underline hover:underline'
                                >
                                    Security Policy
                                </Link>
                            </li>
                            <li className='inline-block mr-10px lg:mr-30px text-12px  leading-normal '>
                                <Link
                                    to='/policies/privacy-policy/'
                                    className='font-light text-white no-underline hover:underline'
                                >
                                    Privacy Policy{' '}
                                </Link>
                            </li>
                            <li className='inline-block mr-10px text-12px leading-normal '>
                                <a
                                    href='https://status.cyscale.com'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    className='font-light text-white no-underline hover:underline'
                                >
                                    Status
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-48 items-center md:mt-0 flex lg:hidden'>
                        <div className='mr-25px'>
                            <a
                                href='https://www.linkedin.com/company/cyscale'
                                rel='noopener noreferrer'
                                className='text-white'
                                target='_blank'
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className='mr-25px'>
                            <a
                                href='https://www.twitter.com/cyscale'
                                className='text-white'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <FaTwitter />
                            </a>
                        </div>
                        <div className='mr-25px'>
                            <a
                                href='https://www.facebook.com/cyscale'
                                className='text-white'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <FaFacebook />
                            </a>
                        </div>
                        <div className='mr-25px'>
                            <a
                                href='https://www.crunchbase.com/organization/cyscale'
                                className='text-white'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <img src={CrunchbaseIcon} className='w-16px' alt='crunch base icon' />
                            </a>
                        </div>
                        <div className='mr-25px'>
                            <a
                                href=' https://angel.co/company/cyscale'
                                className='text-white'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <img src={AngelIcon} className='w-16px' alt='angel icon' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
