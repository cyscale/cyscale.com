import React from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo-footer.svg';
import SocialIcon from './SocialIcon';
import { Row } from '../atoms/Containers';
import footerNavigation from './footer-navigation.json';
import arrowRight from '../../assets/images/arrow-right-1-white.svg';
import useSubscribe from '../../hooks/useSubscribe';
import { css } from 'twin.macro';

const subscribeButtonGradient = css`
    background-image: linear-gradient(to right, #883980, #ff4a56);

    &:hover {
        background-image: linear-gradient(to left, #883980, #ff4a56);
    }
`;

const Footer = ({ pageUri, pageName }) => {
    const { emailInput, alert, onChange, onSubmit, onKeyDown } = useSubscribe(pageUri, pageName, true);

    return (
        <div className='bg-gray'>
            <div className='container max-w-7xl m-auto px-8 lg:px-8 text-white'>
                <div className='py-16'>
                    <div className='grid grid-cols-12 md:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='grid grid-cols-12  md:gap-12'>
                                <div className='col-span-12 md:col-span-6 lg:col-span-12'>
                                    <Link to='/'>
                                        <img src={logo} className='w-40' alt='Cyscale Logo' />
                                    </Link>
                                    <div className='mt-5 text-sm max-w-auto md:max-w-sm font-light leading-normal text-white'>
                                        Cyscale helps companies embrace their digital future by protecting apps and data
                                        in the cloud. With the innovative Security Knowledge Graph™ at its core, Cyscale
                                        helps you easily track security and compliance across your multi-cloud
                                        environment.
                                    </div>
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-12'>
                                    <p className='text-lg font-semibold mt-5 md:mt-0 lg:mt-10 max-w-xs sm:max-w-sm'>
                                        Stay connected
                                    </p>
                                    <p className='text-sm max-w-xs sm:max-w-sm'>
                                        Receive new blog posts and product updates from Cyscale
                                    </p>
                                    <div className='mx-auto sm:mx-0 max-w-xs sm:max-w-sm flex flex-col md:flex-row mt-6'>
                                        <input
                                            type='email'
                                            id='email'
                                            className={`bg-gray-50 border-element-modal text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 md:mb-0 lg:mb-0 text-black`}
                                            placeholder='Your email'
                                            onChange={onChange}
                                            value={emailInput}
                                            onKeyDown={onKeyDown}
                                        />
                                        <button
                                            type='submit'
                                            className='text-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full lg:w-20 ml-0 md:ml-3 pb-2.5 pt-3 w-auto md:w-20 lg:w-20'
                                            css={subscribeButtonGradient}
                                            onClick={onSubmit}
                                        >
                                            <span className='block uppercase md:hidden'>Subscribe</span>
                                            <img src={arrowRight} className='mx-auto w-5 h-auto hidden md:block' />
                                        </button>
                                        {!alert && (
                                            <p className='text-xs mt-4 text-grey2 block sm:hidden'>
                                                By clicking Subscribe, I agree to Cyscale’s{' '}
                                                <Link to='/policies/privacy-policy/' className='underline'>
                                                    Privacy Policy
                                                </Link>
                                            </p>
                                        )}
                                        {alert && (
                                            <p className={`${alert.alertClass} text-xs mt-4 block sm:hidden`}>
                                                {alert.message}
                                            </p>
                                        )}
                                    </div>
                                    {!alert && (
                                        <p className='text-xs mt-4 text-grey2 hidden sm:block'>
                                            By clicking Subscribe, I agree to Cyscale’s{' '}
                                            <Link to='/policies/privacy-policy/' className='underline'>
                                                Privacy Policy
                                            </Link>
                                        </p>
                                    )}
                                    {alert && (
                                        <p className={`${alert.alertClass} text-xs mt-4 hidden sm:block`}>
                                            {alert.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className='hidden md:block col-span-12 lg:col-span-6'>
                            <div className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12 md:col-span-4'>
                                    <h3 className='font-semibold text-sm leading-normal text-white pb-10'>Platform</h3>
                                    {footerNavigation.platform.map(({ text, link }, key) => {
                                        return (
                                            <Link
                                                key={key}
                                                to={link}
                                                className='font-light text-white no-underline hover:underline block text-xs pb-2'
                                            >
                                                {text}
                                            </Link>
                                        );
                                    })}
                                </div>
                                <div className='col-span-12 md:col-span-4'>
                                    <h3 className='font-semibold text-sm leading-normal text-white pb-10'>Resources</h3>
                                    {footerNavigation.resources.map(({ text, link }, key) => {
                                        return (
                                            <Link
                                                key={key}
                                                to={link}
                                                className='font-light text-white no-underline hover:underline block text-xs pb-2'
                                            >
                                                {text}
                                            </Link>
                                        );
                                    })}
                                </div>
                                <div className='col-span-12 md:col-span-4'>
                                    <h3 className='font-semibold text-sm leading-normal text-white pb-10'>Company</h3>
                                    {footerNavigation.company.map(({ text, link }, key) => {
                                        return (
                                            <Link
                                                key={key}
                                                to={link}
                                                className='font-light text-white no-underline hover:underline block text-xs pb-2'
                                            >
                                                {text}
                                            </Link>
                                        );
                                    })}
                                    <p className='font-light text-white block text-xs pb-2 mt-6'>+44 7401 208466</p>
                                    <p className='font-light text-white block text-xs pb-2'>sales@cyscale.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='mt-24 text-grey2' />
                    <Row className='mt-4'>
                        <div className='col-span-12 lg:col-span-6'>
                            <p className='text-xs block sm:hidden'>&copy; {new Date().getFullYear()} Cyscale Limited</p>
                            <div className='text-xs flex items-center justify-between pt-2'>
                                <p className='hidden sm:block text-xs'>
                                    &copy; {new Date().getFullYear()} Cyscale Limited
                                </p>
                                {footerNavigation.terms.map((item, key) => {
                                    if (item.external) {
                                        return (
                                            <a href={item.link} key={key} className='hover:underline text-xs'>
                                                {item.text}
                                            </a>
                                        );
                                    } else {
                                        return (
                                            <Link to={item.link} className='hover:underline text-xs'>
                                                {item.text}
                                            </Link>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='col-span-6'>
                                <div className='flex items-center justify-start lg:justify-end mt-4 lg:mt-1'>
                                    {footerNavigation.social.map((item, key) => {
                                        return (
                                            <div key={key} className='mr-6'>
                                                <a
                                                    href={item.link}
                                                    rel='noopener noreferrer'
                                                    className='text-white'
                                                    target='_blank'
                                                >
                                                    <SocialIcon icon={item.text} />
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Footer;
