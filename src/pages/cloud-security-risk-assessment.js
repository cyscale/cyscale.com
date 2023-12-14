import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import useHSFormDisplayAndSubmit from '../hooks/useHSFormDisplayAndSubmit';
import AnimatedNavbarLayout from '../components/campaigns/AnimatedNavbarLayout';
import { Container, Row } from '../components/atoms/Containers';
import ManFreeTrial from '../assets/images/man-free-trial.svg';
import TimerFreeTrial from '../assets/images/timer-free-trial.svg';
import CloudFreeTrail from '../assets/images/cloud-free-trial.svg';
import LoaderContainer from '../components/Loader/LoaderContainer/LoaderContainer';
import classnames from 'classnames';
import ThankYou from '../components/thank-you/ThankYou';
import { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { animateScroll } from 'react-scroll';
import QuotesStartups from '../assets/images/quotes-startups.svg';
import cloudIcon from '../assets/images/cloud-icon.svg';
import TourVideo from '../components/video/TourVideo';

const blueGradientCard = css`
    background-image: linear-gradient(#e4edfc, #fff);
`;

const CloudSecurityRiskAssessment = ({ location }) => {
    const data = useStaticQuery(graphql`
        query CloudSecurityRiskQuery {
            dashboard: file(relativePath: { eq: "dashboard-startups.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            assetInventory: file(relativePath: { eq: "asset-inventory.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            cardIntegrations: file(relativePath: { eq: "card-integrations.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            cardMisconfiguration: file(relativePath: { eq: "card-misconfiguration.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            cardStandards: file(relativePath: { eq: "card-standards-home.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            logo: file(relativePath: { eq: "smart-fintech-logo.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 206, layout: CONSTRAINED)
                }
            }
            baysLogo: file(relativePath: { eq: "bays-logo.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 48, layout: FIXED)
                }
            }
            pricingIcon: file(relativePath: { eq: "pricing-icon.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 420, layout: CONSTRAINED)
                }
            }
        }
    `);

    const { loadingForm } = useHSFormLoaded();
    const { formSubmitted } = useHSFormDisplayAndSubmit({
        formId: '6bcc9259-6eab-4b6c-8218-203a1481f228',
        target: '#free-trial-form'
    });

    return (
        <AnimatedNavbarLayout
            location={location}
            pageName='FreeTrialRiskAssessment'
            title='Start Your Free Cloud Security Risk Assessment | Cyscale'
            description='Sign up for a free automated Cloud Security Risk Assessment to assess your cloud security posture and expose, understand, and prioritize any threats'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /cloud-security-risk-assessment
            </div>
            <div className='hidden' data-title>
                Start Your Free Cloud Security Risk Assessment | Cyscale
            </div>
            <div className='hidden' data-description>
                Sign up for a free automated Cloud Security Risk Assessment to assess your cloud security posture and
                expose, understand, and prioritize any threats
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div className='bg-hero-campaigns-iam-security'>
                <div className='py-28 lg:py-32'>
                    <div className='container max-w-7xl m-auto px-8'>
                        <Row>
                            {!formSubmitted && (
                                <div className='col-span-12 lg:col-span-6 '>
                                    {
                                        <div className='max-w-lg lg:max-w-xl mx-auto lg:mx-0'>
                                            <h2 className='text-3xl lg:text-5xl text-left text-blue font-bold mt-8 lg:mt-0 font-montserrat'>
                                                Book Your Free
                                                <br className='block sm:hidden lg:block' /> Cloud
                                                <br className='hidden sm:block lg:hidden' /> Security
                                                <br className='hidden lg:block' /> Risk Assessment
                                            </h2>
                                            <p className='text-lg text-left text-base font-medium max-w-md lg:max-w-xl mt-8 font-montserrat'>
                                                Sign up for a free automated Cloud Security Risk Assessment to assess
                                                your cloud security posture and expose, understand, and prioritize any
                                                threats.
                                            </p>
                                            <p className='text-lg text-left text-base font-medium max-w-md lg:max-w-xl mt-2 font-montserrat'>
                                                Get complete visibility of your entire cloud estate in minutes.
                                            </p>
                                            <div className='flex mt-6 items-center'>
                                                <img src={ManFreeTrial} alt='' />{' '}
                                                <h4 className='ml-2 text-lg font-montserrat font-semibold'>
                                                    1x1 with a Cloud Security expert{' '}
                                                </h4>
                                            </div>
                                            <div className='pl-12 max-w-md'>
                                                <p className='text-sm font-montserrat font-medium'>
                                                    An initial call with us to understand your goals and set you up with
                                                    access to the platform.
                                                </p>
                                            </div>
                                            <div className='flex mt-2 items-center'>
                                                <img src={TimerFreeTrial} alt='' />{' '}
                                                <h4 className='ml-2 text-lg font-montserrat font-semibold'>
                                                    Deploy and onboard in under 15 minutes{' '}
                                                </h4>
                                            </div>
                                            <div className='pl-12 max-w-md'>
                                                <p className='text-sm font-montserrat font-medium'>
                                                    Onboarding a connector in the Cyscale platform is quick and easy.
                                                </p>
                                            </div>
                                            <div className='flex mt-2 items-center'>
                                                <img src={CloudFreeTrail} alt='' />{' '}
                                                <h4 className='ml-2 text-lg font-montserrat font-semibold'>
                                                    Get immediate visibility & reporting
                                                </h4>
                                            </div>
                                            <div className='pl-12 max-w-md'>
                                                <p className='text-sm font-montserrat font-medium'>
                                                    As soon as you onboard connectors, the platform starts the security
                                                    analysis providing you with results in no time.
                                                </p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )}
                            {!formSubmitted ? (
                                <div className='col-span-12 lg:col-span-6'>
                                    <div
                                        className='bg-white rounded-lg mt-6 lg:mt-0 lg:rounded-xl shadow-lg pt-6 lg:pt-8 pb-0 px-4 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                            backdropFilter: 'blur(5px)'
                                        }}
                                    >
                                        <h2 className='font-bold text-xl lg:text-2xl leading-normal mb-6 font-montserrat'>
                                            Start your risk assessment
                                        </h2>
                                        {loadingForm && <LoaderContainer minHeight={310} />}
                                        <div
                                            style={{ minHeight: 310 }}
                                            id='free-trial-form'
                                            className={classnames({ hidden: loadingForm })}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <ThankYou />
                            )}
                        </Row>
                    </div>
                </div>
            </div>
            <TourVideo />
            <Container className='lg:mt-8 lg:pt-24'>
                <div className='pt-2 pb-0 sm:pb-24'>
                    <div>
                        <h2 className='text-center lg:text-left mb-8 font-montserrat font-bold text-blue text-2xl'>
                            Get full access to the Cyscale cloud security platform
                        </h2>
                    </div>
                    <div className='grid grid-cols-12 gap-x-5'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div
                                className='mt-6 lg:mt-0 rounded-xl max-w-lg lg:max-w-full pt-12 px-12 mx-auto lg:mx-0'
                                css={[
                                    blueGradientCard,
                                    css`
                                        height: 32rem;
                                    `
                                ]}
                            >
                                <h1
                                    className='font-montserrat font-bold'
                                    css={css`
                                        font-size: 1.375rem;
                                    `}
                                >
                                    Access to the full Cyscale Automated Cloud Security Platform with Powerful Analytics
                                    & Dashboards
                                </h1>
                                <GatsbyImage
                                    image={data.dashboard.childImageSharp.gatsbyImageData}
                                    alt='Dashboard'
                                    className='mt-9'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-3'>
                            <div
                                className='mt-6 lg:mt-0 rounded-xl pt-12 px-8 lg:px-2 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative sm:mb-6 md:mb-6 lg:mb-0'
                                css={[
                                    blueGradientCard,
                                    css`
                                        @media screen and (min-width: 440px) and (max-width: 1023px) {
                                            height: 42rem !important;
                                        }
                                    `
                                ]}
                            >
                                <h1
                                    className='font-montserrat font-bold px-4 lg:px-8 text-center'
                                    css={css`
                                        font-size: 1.375rem;
                                    `}
                                >
                                    Asset inventory
                                </h1>
                                <p className='text-lg font-hind mt-4 text-center'>Up to 1000 protected assets</p>
                                <GatsbyImage
                                    image={data.assetInventory.childImageSharp.gatsbyImageData}
                                    alt='Asset inventory'
                                    className='mt-4 lg:mt-6'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-3'>
                            <div
                                className='mt-6 lg:mt-0 rounded-xl pt-12 px-12 max-w-lg  mx-auto lg:mr-0 lg:ml-auto relative'
                                css={[
                                    blueGradientCard,
                                    css`
                                        height: 32rem;
                                        @media screen and (min-width: 440px) and (max-width: 1023px) {
                                            height: 40rem;
                                        }
                                    `
                                ]}
                            >
                                <h1
                                    className='font-montserrat font-bold'
                                    css={css`
                                        font-size: 1.375rem;
                                    `}
                                >
                                    Integrations
                                </h1>
                                <p className='text-lg font-hind mt-4'>AWS, Google Cloud, Azure and Alibaba Cloud</p>
                                <GatsbyImage
                                    image={data.cardIntegrations.childImageSharp.gatsbyImageData}
                                    alt='Integrations'
                                    className='mt-8 lg:mt-16'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-x-5 mt-8 sm:mt-24'>
                        <div className='col-span-12 lg:col-span-3'>
                            <div
                                className='mt-6 lg:mt-0 rounded-xl pt-8 pb-60 sm:pb-0 px-6 max-w-lg lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto bg-black'
                                css={css`
                                    height: 25rem;
                                    @media screen and (min-width: 437px) and (max-width: 1023px) {
                                        height: 28rem !important;
                                    }
                                    @media (min-width: 640px) {
                                        height: 22rem;
                                    }
                                    @media screen and (min-width: 1028px) and (max-width: 1280px) {
                                        height: 25.5rem;
                                    }
                                `}
                            >
                                <h2
                                    className='text-white font-bold font-montserrat'
                                    css={css`
                                        font-size: 1.375rem;
                                    `}
                                >
                                    Continuous visibility
                                </h2>
                                <p className='text-lg text-white font-hind mt-1'>
                                    of your cloud environments to identify cloud misconfiguration vulnerabilities
                                </p>
                                <GatsbyImage
                                    image={data.cardMisconfiguration.childImageSharp.gatsbyImageData}
                                    alt='Misconfiguration'
                                    className='mt-8'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-3'>
                            <div
                                className='mt-6 lg:mt-0 rounded-xl pt-8 px-6 max-w-lg lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto'
                                css={css`
                                    background: linear-gradient(180deg, #ff4a56 0%, #cd0365 100%);
                                    height: 22rem;
                                    @media screen and (min-width: 1028px) and (max-width: 1280px) {
                                        height: 25.5rem;
                                    }
                                `}
                            >
                                <h2
                                    className='text-white font-bold font-montserrat'
                                    css={css`
                                        font-size: 1.375rem;
                                    `}
                                >
                                    Customizable alerts and easy to follow remediation instructions in case of security
                                    drifts.
                                </h2>
                                <p className='text-lg text-white mt-1'>Don’t waste time on false positives</p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div
                                className='mt-6 lg:mt-0 rounded-xl pt-8 max-w-lg lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto'
                                css={css`
                                    background: linear-gradient(180deg, #079bee 0%, #122ba3 100%);
                                    height: 25rem;
                                    @media (min-width: 640px) {
                                        height: 22rem;
                                    }
                                    @media screen and (min-width: 1028px) and (max-width: 1280px) {
                                        height: 25.5rem;
                                    }
                                `}
                            >
                                <h2
                                    className='text-white font-bold font-montserrat px-8'
                                    css={css`
                                        font-size: 1.375rem;
                                    `}
                                >
                                    Built-in frameworks for CIS Cloud Benchmarks, ISO 27001, SOC 2, GDPR, HIPAA, PCI
                                    DSS, NIST, and many more
                                </h2>
                                <p className='text-lg text-white mt-1 px-8 font-hind'>
                                    with streamlined compliance score tracking and monitoring
                                </p>
                                <GatsbyImage
                                    image={data.cardStandards.childImageSharp.gatsbyImageData}
                                    alt='Standards'
                                    className='mt-4'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='flex justify-center mt-16 sm:mt-0'>
                <button
                    onClick={() => animateScroll.scrollToTop()}
                    className='bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind'
                    css={[
                        css`
                            padding: 0.625rem 2.5rem;
                        `
                    ]}
                >
                    Let's get started
                </button>
            </div>
            <div>
                <Container>
                    <div className='py-12 md:py-24'>
                        <div>
                            <h2 className='text-center lg:text-left mb-8 font-montserrat font-bold text-blue text-2xl'>
                                Stress-free security for small businesses
                                <br className='hidden sm:block' /> building apps in the cloud
                            </h2>
                        </div>
                        <div className='grid grid-cols-12 gap-x-5'>
                            <div className='col-span-12 lg:col-span-6'>
                                <div
                                    className='mt-6 lg:mt-0 rounded-xl max-w-lg lg:max-w-full p-6 mx-auto lg:mx-0'
                                    css={css`
                                        @media (max-width: 545px) {
                                            height: 31.5rem;
                                        }
                                        @media screen and (min-width: 545px) and (max-width: 1024px) {
                                            height: 20.5rem;
                                        }

                                        background: linear-gradient(0deg, #e4edfc 0%, #e4edfc 100%),
                                            linear-gradient(180deg, #e4edfc 0%, rgba(217, 217, 217, 0) 100%);
                                        @media screen and (min-width: 1024px) and (max-width: 1165px) {
                                            height: 26.5rem;
                                        }
                                        @media (min-width: 1165px) {
                                            height: 20.5rem;
                                        }
                                    `}
                                >
                                    <h3
                                        className='font-montserrat font-bold'
                                        css={css`
                                            font-size: 1.375rem;
                                        `}
                                    >
                                        Cyscale is an Automated Cloud Security platform designed for cloud-natives.
                                    </h3>
                                    <p className='font-hind text-lg mt-4'>
                                        Enterprise-focused security offerings come with a hefty price tag and an overly
                                        complex array of features and functions that are overkill for smaller, more
                                        agile companies. We believe cloud security is critical and shouldn’t hold you
                                        back. Good security should enable growth through trust and credibility!
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-3'>
                                <div
                                    className='mt-6 lg:mt-0 rounded-xl p-6 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative sm:mb-6 md:mb-6 lg:mb-0'
                                    css={css`
                                        height: 16.5rem;
                                        @media screen and (min-width: 545px) and (max-width: 1024px) {
                                            height: 10rem;
                                        }
                                        background: linear-gradient(0deg, #e4edfc 0%, #e4edfc 100%),
                                            linear-gradient(180deg, #e4edfc 0%, rgba(217, 217, 217, 0) 100%);
                                        @media screen and (min-width: 1024px) and (max-width: 1165px) {
                                            height: 26.5rem;
                                        }
                                        @media (min-width: 1165px) {
                                            height: 20.5rem;
                                        }
                                    `}
                                >
                                    <p className='font-hind text-lg'>
                                        Don’t get overwhelmed with alerts and complex toolkits. Cyscale continuously
                                        monitors for vulnerabilities and misconfigurations in your cloud environment,
                                        then guides you through the actions you need to take to fix them.
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-3'>
                                <div
                                    className='mt-6 sm:mt-0 rounded-xl p-6 max-w-lg  mx-auto lg:mr-0 lg:ml-auto relative'
                                    css={css`
                                        height: 17rem;
                                        @media screen and (min-width: 545px) and (max-width: 1024px) {
                                            height: 11.5rem;
                                        }
                                        background: linear-gradient(0deg, #e4edfc 0%, #e4edfc 100%),
                                            linear-gradient(180deg, #e4edfc 0%, rgba(217, 217, 217, 0) 100%);
                                        @media screen and (min-width: 1024px) and (max-width: 1165px) {
                                            height: 26.5rem;
                                        }
                                        @media (min-width: 1165px) {
                                            height: 20.5rem;
                                        }
                                    `}
                                >
                                    <p className='font-hind text-lg'>
                                        Easy compliance reporting. Don’t stress about audits. Understand your evolving
                                        cloud infrastructure and check your security posture against compliance
                                        frameworks including CIS Cloud Benchmarks, ISO 27001, SOC 2, GDPR, HIPAA, PCI
                                        DSS, NIST, and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className='mt-8'>
                    <div className='py-12'>
                        <div>
                            <h2 className='text-center lg:text-left mb-8 font-montserrat font-bold text-blue text-2xl'>
                                Cyscale in action
                            </h2>
                        </div>
                        <div className='grid grid-cols-12 gap-x-5 mt-4'>
                            <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 lg:mt-0 max-w-lg lg:max-w-full'>
                                <p className='font-montserrat font-bold text-xl'>Access management in Fintech</p>
                                <p
                                    className='font-hind text-base mt-2'
                                    css={css`
                                        color: #454545;
                                    `}
                                >
                                    Open banking provider Smart Fintech needed an identity and access management
                                    solution that would also help them achieve compliance and ensure their cloud
                                    environment is secure. The team had an aim of ‘zero alerts’, which meant ensuring
                                    the cloud environment was always in compliance with their policies.
                                </p>
                                <img src={QuotesStartups} alt='' className='mt-4' />
                                <p className='mt-4 text-base font-semibold font-hind'>
                                    Cyscale is eliminating the need to ask the team for tedious configuration reports,
                                    greatly improving our visibility and helping us understand things we didn’t know.
                                </p>
                                <p className='font-hind text-base mt-2'>
                                    <strong>Alex Cociu,</strong>
                                    <br /> Risk and Compliance Officer at Smart Fintech
                                </p>
                                <GatsbyImage
                                    alt='Smart Fintech Logo'
                                    image={data.logo.childImageSharp.gatsbyImageData}
                                />
                            </div>
                            <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 mt-20 lg:mt-0 max-w-lg lg:max-w-full'>
                                <p className='font-montserrat font-bold text-xl'>
                                    Increased productivity with automated security
                                </p>
                                <p
                                    className='font-hind text-base mt-2'
                                    css={css`
                                        color: #454545;
                                    `}
                                >
                                    Bays Consulting is a data analytics and consulting company who uses AWS to deliver
                                    innovative data solutions and insights to businesses. Securing client data and
                                    automating their ISO 27001 compliance is at the core of their business. Cyscale
                                    helped Bays Consulting address their challenges and streamlined the access review
                                    process.
                                </p>
                                <img src={QuotesStartups} alt='' className='mt-4' />
                                <p className='mt-4 text-base font-semibold font-hind'>
                                    Exceptionally helpful when doing access reviews; I’m using the platform monthly and
                                    it simply automates my work!
                                </p>
                                <p className='font-hind text-base mt-2'>
                                    <strong>James Hawkes,</strong>
                                    <br /> Head of Delivery at Bays Consulting
                                </p>
                                <GatsbyImage
                                    image={data.baysLogo.childImageSharp.gatsbyImageData}
                                    alt='Bays Consulting Logo'
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='pt-12 pb-32 lg:pt-32'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='Cloud Icon' />
                        <h2 className='text-center px-2 mb-2 text-lg lg:text-2xl font-hind'>
                            Get enterprise-grade security
                            <br /> without the enterprise-grade price tag
                        </h2>
                        <div className='mt-6 w-auto inline-block'>
                            <button
                                css={css`
                                    padding: 0.625rem 2.5rem;
                                `}
                                className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind'
                                onClick={() => animateScroll.scrollToTop()}
                                tabIndex='0'
                                onKeyDown={() => {}}
                            >
                                Start your assessment
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </AnimatedNavbarLayout>
    );
};

export default CloudSecurityRiskAssessment;
