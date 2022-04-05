import React from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo-footer.svg';
import navigation from './navigation.json';
import SocialIcon from './SocialIcon';

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
                        {navigation.social.map(({ link, text }) => (
                            <div key={link} className='mr-25px'>
                                <a href={link} className='text-white' rel='noopener noreferrer' target='_blank'>
                                    <SocialIcon icon={text} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-6/12 lg:w-8/12 mt-20px md:mt-0'>
                    <div className='grid-cols-2 lg:grid-cols-4 justify-between hidden sm:grid'>
                        <div className=''>
                            <h3 className='font-semibold text-14pxleading-normal text-white pb-40px '>Platform</h3>
                            <ul>
                                {navigation.platform.map(({ link, text }) => (
                                    <li key={link} className='text-12px leading-normal pb-7px'>
                                        <Link to={link} className='font-light text-white no-underline hover:underline'>
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className=''>
                            <h3 className='font-semibold text-14pxleading-normal  text-white pb-40px '>Use cases</h3>
                            <ul>
                                {navigation.usecases.map(({ link, text }) => (
                                    <li key={link} className='text-12px leading-normal pb-7px'>
                                        <Link to={link} className='font-light text-white no-underline hover:underline'>
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className=''>
                            <h3 className='font-semibold text-14pxleading-normal  text-white pb-40px '>Resources</h3>
                            <ul>
                                {navigation.resources.map(({ link, text, blank }) =>
                                    blank ? (
                                        <li key={link} className='text-12px leading-normal pb-7px'>
                                            <a
                                                href={link}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='font-light text-white no-underline hover:underline'
                                            >
                                                {text}
                                            </a>
                                        </li>
                                    ) : (
                                        <li key={link} className='text-12px leading-normal pb-7px'>
                                            <Link
                                                to={link}
                                                className='font-light text-white no-underline hover:underline'
                                            >
                                                {text}
                                            </Link>
                                        </li>
                                    )
                                )}
                                <li className='text-12px leading-normal pb-7px'>
                                    <Link
                                        to={navigation.pricing[0].link}
                                        className='font-light text-white no-underline hover:underline'
                                    >
                                        {navigation.pricing[0].text}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className=''>
                            <h3 className='font-semibold text-14pxleading-normal  text-white pb-40px '>Company</h3>
                            <ul>
                                {navigation.company.map(({ link, text }) => (
                                    <li key={link} className='text-12px leading-normal pb-7px'>
                                        <Link to={link} className='font-light text-white no-underline hover:underline'>
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='lg:pt-102px'>
                        <ul className='lg:flex m-0'>
                            <li className='block lg:inline-block lg:mr-50px text-12px font-light leading-normal text-white '>
                                &copy; {new Date().getFullYear()} Cyscale Limited
                            </li>
                            {navigation.terms.map(({ link, text }) => (
                                <li key={link} className='inline-block mr-10px lg:mr-30px  text-12px leading-normal  '>
                                    <Link to={link} className='font-light text-white no-underline hover:underline'>
                                        {text}
                                    </Link>
                                </li>
                            ))}
                            <li className='inline-block mr-10px text-12px leading-normal '>
                                <a
                                    href={navigation.status[0].link}
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    className='font-light text-white no-underline hover:underline'
                                >
                                    {navigation.status[0].text}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-48 items-center md:mt-0 flex lg:hidden'>
                        {navigation.social.map(({ link, text }) => (
                            <div key={link} className='mr-25px'>
                                <a href={link} rel='noopener noreferrer' className='text-white' target='_blank'>
                                    <SocialIcon icon={text} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
