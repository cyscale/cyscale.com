import React, { useEffect } from 'react';
import { Container, Row } from '../../components/atoms/Containers';
import Seo from '../../components/Seo';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo.svg';
import cloudIcon from '../../assets/images/cloud-icon-for-cspm.svg';
import { Link as ScrollLink } from 'react-scroll';
import { Helmet } from 'react-helmet';
import arrow from '../../assets/images/arrow.svg';
import Consent from '../../components/consent';
import GlobalContext from '../../context/GlobalContext';
import MisconfigurationTabs from '../../components/cloud-security-posture-management/MisconfigurationTabs';

const CSPMSolution = ({ location }) => {
    useEffect(() => {
        setTimeout(() => {
            if (typeof window !== 'undefined' && window['hbspt']) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId: '81943e73-3b0a-4e69-8c8d-92c747a10796',
                    target: '#request-cspm-demo'
                });
            }
        }, 600);
    }, []);
    return (
        <GlobalContext.Provider value={{ location }}>
            <Seo
                title='Comprehensive CSPM solution'
                description='Streamline posture management for multi-cloud environments, enable teams to continuously detect, prevent misconfigurations and control threats and ensure compliance for your cloud assets.'
                pageName='CSPMSolutionCampaign'
                location={location}
            />
            <Consent />
            <Helmet>
                <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js' />
                <meta name='robots' content='noindex' />
                <meta name='robots' content='nofollow' />
            </Helmet>
            <header id='head' className='bg-lightGrey pt-3 pb-2'>
                <Container>
                    <Link to='/' className='inline-flex'>
                        <img className='block ' src={logo} alt='Cyscale' />
                    </Link>
                </Container>
            </header>
            <main>
                <section>
                    <div className='bg-gradient-secondary py-8'>
                        <Container>
                            <Row className='items-center'>
                                <div className='col-span-12 lg:col-span-5 text-white'>
                                    <div className='max-w-lg mx-auto lg:ml-0 lg:mr-auto'>
                                        <h1 style={{ lineHeight: 1.5 }} className='text-3xl lg:text-5xl mb-10'>
                                            Comprehensive
                                            <br /> CSPM solution
                                        </h1>
                                        <p className='mb-6'>
                                            Streamline posture management for multi-cloud environments, enable teams to
                                            continuously detect, prevent misconfigurations and control threats and
                                            ensure compliance for your cloud assets.
                                        </p>
                                        <ul className='list-disc pl-4 ml-4'>
                                            <li className='mb-2'>
                                                A comprehensive Asset Inventory and Asset Management
                                            </li>
                                            <li className='mb-2'>
                                                Continuous Security and Compliance for AWS, Azure, GCP & more
                                            </li>
                                            <li className='mb-2'>
                                                Automatic remediations by learning your cloud infrastructure
                                            </li>
                                            <li className='mb-2'>Detect change and eliminate misconfigurations</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-span-12 lg:col-span-7'>
                                    <div className='bg-white rounded-xl shadow-lg  pt-4 pb-0 px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'>
                                        <img
                                            src={arrow}
                                            className='absolute left-0 top-0 -mt-1 -ml-8'
                                            width={70}
                                            alt='arrow'
                                        />
                                        <h2 className='text-2xl leading-normal text-primary mb-1'>
                                            Request a live demo
                                        </h2>
                                        <div id='request-cspm-demo' style={{ minHeight: 510 }}></div>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </section>
                <MisconfigurationTabs />
                <div className='bg-gradient-footer pt-60px pb-60px'>
                    <Container>
                        <div className='mx-auto max-w-md text-center py-20'>
                            <img className='mx-auto mb-12 w-32' src={cloudIcon} alt='decoration' />
                            <h3 className='text-white text-xl uppercase '>AGENTLESS, MULTI-CLOUD, PAINLESS CSPM</h3>
                            <p className='text-white text-base mt-1 mb-12'>
                                Start seeing value & saving money in minutes
                            </p>
                            <ScrollLink
                                className='bg-white text-black font-medium transition-all cursor-pointer duration-300 border uppercase border-black py-5 px-16 rounded inline-block hover:bg-black hover:text-white'
                                smooth={true}
                                duration={500}
                                to='head'
                            >
                                Request Live Demo
                            </ScrollLink>
                        </div>
                    </Container>
                </div>
            </main>
            <footer className=' bg-gray  bg-footer-texture'>
                <Container>
                    <div className='flex-col md:flex-row flex justify-between py-20 max-w-3xl mx-auto'>
                        <div className='order-10 md:order-1'>
                            <small className='text-white text-sm'>
                                &copy; {new Date().getFullYear()} Cyscale Limited
                            </small>
                        </div>
                        <div className='order-1'>
                            <a
                                href='/policies/terms-of-use'
                                className='font-light text-white no-underline hover:underline text-sm'
                            >
                                Terms of use
                            </a>
                        </div>
                        <div className='order-1'>
                            <a
                                href='/policies/security-policy'
                                className='font-light text-white no-underline hover:underline text-sm'
                            >
                                Security Policy
                            </a>
                        </div>
                        <div className='order-1'>
                            <a
                                href='/policies/privacy-policy'
                                className='font-light text-white no-underline hover:underline text-sm'
                            >
                                Privacy Policy{' '}
                            </a>
                        </div>
                        <div className='order-1'>
                            <a
                                href='https://status.cyscale.com'
                                rel='noopener noreferrer'
                                target='_blank'
                                className='font-light text-white no-underline hover:underline text-sm'
                            >
                                Status
                            </a>
                        </div>
                    </div>
                </Container>
            </footer>
        </GlobalContext.Provider>
    );
};

export default CSPMSolution;
