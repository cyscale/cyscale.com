import React from 'react';
import { Container, Row } from '../../atoms/Containers';
import LoaderContainer from '../../Loader/LoaderContainer/LoaderContainer';
import classnames from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import { animateScroll, Link as ScrollLink } from 'react-scroll';
import upsideDownTriangle from '../../../assets/images/upside-down-triangle.svg';
import cloudIcon from '../../../assets/images/cloud-icon.svg';
import AnimatedNavbarLayout from '../AnimatedNavbarLayout';
import useHSFormLoaded from '../../../hooks/useHSFormLoaded';
import HeroContent from './HeroContent';

const Original = ({ location, data }) => {
    const { pathname } = location;
    const { loadingForm } = useHSFormLoaded();

    return (
        <AnimatedNavbarLayout
            formId={'81943e73-3b0a-4e69-8c8d-92c747a10796'}
            formTargetId={'#request-cspm-demo'}
            location={location}
            title={'Comprehensive CSPM solution - Cyscale'}
            description={
                'Streamline posture management for multi-cloud environments, enable teams to continuously detect, prevent misconfigurations and control threats and ensure compliance for your cloud assets.'
            }
            pageName={'CSPMSolutionCampaign'}
            pathname={pathname}
        >
            <div className='bg-hero-campaigns-iam-security pb-8 pt-32 lg:pt-40 xl:pt-12'>
                <Container>
                    <div>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 '>
                                <HeroContent />
                            </div>
                            <div className='col-span-12 lg:col-span-6' id='apply-now'>
                                <div
                                    className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 lg:pt-12 pb-0 px-8 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                        backdropFilter: 'blur(5px)'
                                    }}
                                >
                                    <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0 montserrat-font'>
                                        Request a live demo
                                    </h2>
                                    {loadingForm && <LoaderContainer minHeight={450} />}
                                    <div
                                        style={{ minHeight: 450 }}
                                        id='request-cspm-demo'
                                        className={classnames('pb-4', { hidden: loadingForm })}
                                    />
                                </div>
                            </div>
                        </Row>
                    </div>
                    <div className='py-16 hidden sm:block '>
                        <div className='h-5'>
                            <ScrollLink
                                className='scroll-button-startups cursor-pointer'
                                to={'start'}
                                smooth={true}
                                duration={500}
                            >
                                <span>
                                    <img
                                        src={upsideDownTriangle}
                                        alt='down arrow icon'
                                        className='mx-auto'
                                        height={20}
                                        width={20}
                                        style={{ marginRight: '0.8rem', marginTop: '1.1rem' }}
                                    />
                                </span>
                            </ScrollLink>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                {' '}
                <Container className='mt-0 md:mt-12 lg:mt-0'>
                    <div className='pb-8 lg:pt-32 lg:pb-16' id='start'>
                        <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                            <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                                <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                    <GatsbyImage
                                        image={data.dashboard.childImageSharp.gatsbyImageData}
                                        alt='Dashboard view'
                                    />
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                                <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                    <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                        Prevent misconfigurations & mistakes
                                    </h2>
                                </div>
                                <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                    <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                        Cyscale automatically detects and reports violations of security controls and
                                        compliance risks.
                                    </p>
                                    <p className='leading-normal text-base text-gray py-2'>
                                        It's much easier to keep your cloud assets in check with ongoing change
                                        monitoring that bridges cloud providers.
                                    </p>
                                    <p className='leading-normal text-base text-gray py-2'>
                                        Single out misconfigured services and see how failed security controls impact
                                        compliance from a single, unified view. Plus, you get reliable remediation
                                        guidelines in the same place.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.dashboard.childImageSharp.gatsbyImageData}
                                    alt='Dashboard view'
                                />
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className='pb-8 lg:py-16'>
                        <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm'>
                                    <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                        Cut through
                                        <br /> the noise
                                    </h2>
                                </div>
                                <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                    <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                        Get relevant alerts when your cloud assets drift away from established security
                                        and compliance standards.
                                    </p>
                                    <p className='leading-normal text-base text-gray py-2'>
                                        Make Cyscale your single source of truth for Cloud Security Posture Management
                                        (CSPM) and never miss an important security event.
                                    </p>
                                    <p className='leading-normal text-base text-gray py-2'>
                                        Move beyond bulky, list-based management. Cyscale's Security Knowledge Graph™
                                        makes precise correlations between all your cloud assets and data repositories
                                        to automatically pinpoint critical security improvements.
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                                <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                    <GatsbyImage
                                        image={data.alerts.childImageSharp.gatsbyImageData}
                                        alt='Alerts view'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className='pt-8 lg:pt-16'>
                        <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                            <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                                <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                    <GatsbyImage
                                        image={data.policies.childImageSharp.gatsbyImageData}
                                        alt='Policies view'
                                    />
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                                <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                    <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                        Automate compliance checks
                                    </h2>
                                </div>
                                <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                    <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                        Use Cyscale for governance automation across cloud providers and internal teams
                                        to ensure consistent security and compliance.
                                    </p>
                                    <p className='leading-normal text-base text-gray py-2'>
                                        We keep your clouds under continuous assessment and provide in-app security
                                        consultancy so you make the most of your time and effort.
                                    </p>
                                    <p className='leading-normal text-base text-gray py-2'>
                                        Coming soon: create custom Controls that tap into our Security Knowledge Graph™
                                        and automate the security and compliance checks that matter the most for your
                                        organization.
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                                <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                    <GatsbyImage
                                        image={data.policies.childImageSharp.gatsbyImageData}
                                        alt='Policies view'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className='py-24 lg:py-32'>
                        <div className='flex h-48 flex-col items-center'>
                            <img src={cloudIcon} alt='' />
                            <h1 className='text-center px-2 mb-2'>
                                <strong> AGENTLESS, MULTI-CLOUD, PAINLESS CSPM</strong>
                            </h1>
                            <h1 className='text-center px-1'>Start seeing value & saving money in minutes.</h1>
                            <div className='mt-6 w-auto inline-block'>
                                <button
                                    className='gradientBgBtn w-full block text-base font-medium rounded text-white text-center py-3 px-12 hover:no-underline no-underline'
                                    onClick={() => animateScroll.scrollToTop()}
                                >
                                    Request Live Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </AnimatedNavbarLayout>
    );
};

export default Original;
