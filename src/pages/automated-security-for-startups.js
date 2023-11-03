import React, { useEffect } from 'react';
import { Container, Row } from '../components/atoms/Containers';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import cloudIcon from '../assets/images/cloud-icon.svg';
import ScrollButtonStartups from '../components/ScrollButton/ScrollButtonStartups';
import { animateScroll } from 'react-scroll';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../components/Loader/LoaderContainer/LoaderContainer';
import { css } from 'twin.macro';
import QuotesStartups from '../assets/images/quotes-startups.svg';
import { Helmet } from 'react-helmet';
import { hoverButtonColorStyle, widthFitStyle } from '../components/layout/style';
import RightArrow from '../components/sharedComponent/RightArrow';
import AnimatedNavbarLayout from '../components/campaigns/AnimatedNavbarLayout';

const blueGradientCard = css`
    background-image: linear-gradient(#e4edfc, #fff);
`;

const AutomatedSecurityForStartups = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query AutomatedStartupsSecurityQuery {
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

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms?.create({
                    portalId: '5413427',
                    formId: '65a11c92-0efd-489b-b2e7-671d77b43bc7',
                    target: '#startups-form'
                });
            }
        }, 600);
    }, []);

    return (
        <AnimatedNavbarLayout
            location={location}
            pageName='AutomatedSecurityStartups'
            title='Cyscale Pro for Startups - Cyscale'
            description='For a fast-growing SaaS company, cloud security shouldn’t hold you back. The Cyscale platform automates security for your apps and data in the cloud without the need for a big security team or a big budget.'
        >
            <Helmet>
                <script charSet='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /automated-security-for-startups
            </div>
            <div className='hidden' data-title>
                Cyscale Pro for Startups - Cyscale
            </div>
            <div className='hidden' data-description>
                For a fast-growing SaaS company, cloud security shouldn’t hold you back. The Cyscale platform automates
                security for your apps and data in the cloud without the need for a big security team or a big budget.
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div className='bg-pouring'>
                <Container>
                    <div className='pt-32 pb-24 lg:pt-12 lg:pb-16'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 lg:col-span-6 '>
                                <div className='lg:mt-16 pt-4 max-w-xl lg:max-w-4xl mx-auto lg:mx-0'>
                                    <h1 className='text-center lg:text-left text-blue text-4xl lg:text-5xl leading-normal mb-8 font-montserrat font-bold'>
                                        Cloud security for
                                        <br className='hidden md:block' /> SaaS companies
                                    </h1>
                                    <h2 className='text-center lg:text-left mb-8 text-blue font-bold text-2xl sm:text-3xl'>
                                        Simple cloud security. <br /> Instant peace of mind ✅
                                    </h2>
                                    <p
                                        className='text-center lg:text-left text-base lg:text-lg mb-8'
                                        css={css`
                                            color: #454545;
                                        `}
                                    >
                                        If you’re a fast-growing SaaS company, cloud security shouldn’t hold you back.
                                        The Cyscale platform automates security for your apps and data in the cloud
                                        without the need for a big security team or a big budget.
                                    </p>
                                    <p
                                        className='text-center lg:text-left text-base lg:text-lg mb-2 font-bold'
                                        css={css`
                                            color: #454545;
                                        `}
                                    >
                                        Easy to deploy, easy to use. Job done. Box checked.{' '}
                                        <br className='hidden lg:block' />
                                        Regulator satisfied.
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6' id='apply-now'>
                                <div
                                    className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 lg:pt-12 pb-0 px-8 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                        backdropFilter: 'blur(5px)'
                                    }}
                                >
                                    <h2
                                        className='font-bold leading-normal mb-8 mt-8 lg:mt-0 font-montserrat'
                                        css={css`
                                            @media (max-width: 1280px) {
                                                font-size: 1.5rem;
                                            }
                                            font-size: 2rem;
                                        `}
                                    >
                                        Apply now
                                    </h2>
                                    {loadingForm && <LoaderContainer minHeight={385} />}
                                    <div
                                        style={{ minHeight: 385 }}
                                        id='startups-form'
                                        className={classnames('pb-4', { hidden: loadingForm })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pb-16 hidden sm:block '>
                        <ScrollButtonStartups to='start' />
                    </div>
                </Container>
            </div>
            <Container className='mt-8'>
                <div className='py-12 md:py-24'>
                    <div id='start'>
                        <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-full'>
                            <h2 className='text-center lg:text-left mb-4 font-montserrat font-bold text-blue text-2xl'>
                                Is Cyscale Pro for me?
                            </h2>
                            <p
                                className='text-base font-hind mb-2'
                                css={css`
                                    color: #454545;
                                `}
                            >
                                If you’re purchasing your first cloud security solution or found you’ve outgrown cloud
                                native tools, Cyscale turns automated assessments into easy-to-follow actions to secure
                                your apps and data in the cloud.
                            </p>
                            <p
                                className='font-hind text-base mb-8'
                                css={css`
                                    color: #454545;
                                `}
                            >
                                If you’ve got better things to do with your time than clicking through reports and
                                fixing alerts without context, Cyscale is for you.
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-x-5'>
                        <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                            <div
                                className='mt-6 lg:mt-0 rounded-xl max-w-lg lg:max-w-2xl mx-auto flex items-center justify-center p-4 lg:p-4 h-48 sm:h-44 lg:h-40'
                                css={css`
                                    background: linear-gradient(48deg, #000 0%, #0f26aa 36.65%, #ff4a56 100%), #0f26aa;
                                `}
                            >
                                <p className='font-montserrat text-white text-left px-4 text-lg'>
                                    Our solution guides you to the 20% of most important fixes that{' '}
                                    <strong>will reduce 80%</strong> of your risk, giving you back time to focus on
                                    building your rocket ship.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                            <div
                                className='mt-6 lg:mt-0 rounded-xl max-w-lg lg:max-w-2xl mx-auto bg-selago px-8 py-4 sm:py-6 lg:py-7 h-52 sm:h-48 lg:h-40'
                                css={css`
                                    @media screen and (min-width: 1024px) and (max-width: 1131px) {
                                        padding-top: 1rem !important;
                                        padding-bottom: 0.2rem !important;
                                    }
                                    @media screen and (min-width: 1131px) and (max-width: 1251px) {
                                        padding-top: 1rem !important;
                                        padding-bottom: 0.2rem !important;
                                    }
                                `}
                            >
                                <p
                                    className='font-montserrat'
                                    css={css`
                                        color: #2d2d2d;
                                        font-size: 1.09rem;
                                    `}
                                >
                                    If you are a scaleup or mid-size company or your situation is different, let’s have
                                    a conversation and see what we can do.
                                </p>
                                <Link
                                    className='py-2 pl-4 pr-6 rounded cursor-pointer font-medium mt-2 sm:mt-4 lg:mt-1 xl:mt-3 flex bg-blue'
                                    to='/request-demo/'
                                    css={[
                                        hoverButtonColorStyle,
                                        widthFitStyle,
                                        css`
                                            color: #0f26aa;
                                            &:hover {
                                                color: white;
                                            }
                                            @media screen and (min-width: 1024px) and (max-width: 1131px) {
                                                margin-top: 0.2rem !important;
                                            }
                                        `
                                    ]}
                                >
                                    <RightArrow fillColor={'white'} marginTop='0.2rem' />
                                    <span className='text-md ml-2 text-white'>Get in Touch</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pt-2 pb-0 sm:pb-24'>
                    <div>
                        <h2 className='text-center lg:text-left mb-8 font-montserrat font-bold text-blue text-2xl'>
                            What do I get with Cyscale Pro?
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
                                        Cyscale is an Automated Cloud Security platform designed for fast-growing
                                        startups.
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
            </div>
            <div
                className='pt-24 pb-24 lg:pt-32 lg:pb-32'
                css={css`
                    background: linear-gradient(180deg, #fff 0%, #e4edfc 100%), #e5edfb;
                `}
            >
                <Container>
                    <Row>
                        <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0'>
                            <h2 className='text-center lg:text-left mb-8 font-montserrat font-bold text-blue text-2xl'>
                                How much does it cost?
                            </h2>
                            <div className='max-w-lg lg:max-w-3xl'>
                                <p
                                    className='font-hind text-lg'
                                    css={css`
                                        color: #454545;
                                    `}
                                >
                                    After a one-month free trial to demonstrate the value of the platform (we think
                                    you’ll love it!) Cyscale Pro for Startups gives coverage for up to 1,000 assets for
                                    $700 per month for continuous security for your data and apps in the cloud.
                                </p>
                                <p
                                    className='font-hind text-lg mt-4'
                                    css={css`
                                        color: #454545;
                                    `}
                                >
                                    We get it, your finance team is looking at the cost of security versus the cost of a
                                    breach. Let’s help you cover the former, so they don’t have to find out the latter.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-20 lg:mt-0 mx-auto lg:mx-0 flex justify-center items-center'>
                            <GatsbyImage
                                image={data.pricingIcon.childImageSharp.gatsbyImageData}
                                alt='Pricing Charts'
                            />
                        </div>
                    </Row>
                </Container>
            </div>
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
                                Open banking provider Smart Fintech needed an identity and access management solution
                                that would also help them achieve compliance and ensure their cloud environment is
                                secure. The team had an aim of ‘zero alerts’, which meant ensuring the cloud environment
                                was always in compliance with their policies.
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
                            <GatsbyImage alt='Smart Fintech Logo' image={data.logo.childImageSharp.gatsbyImageData} />
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
                                automating their ISO 27001 compliance is at the core of their business. Cyscale helped
                                Bays Consulting address their challenges and streamlined the access review process.
                            </p>
                            <img src={QuotesStartups} alt='' className='mt-4' />
                            <p className='mt-4 text-base font-semibold font-hind'>
                                Exceptionally helpful when doing access reviews; I’m using the platform monthly and it
                                simply automates my work!
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
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </AnimatedNavbarLayout>
    );
};

export default AutomatedSecurityForStartups;
