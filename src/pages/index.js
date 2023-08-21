import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout/CleanLayout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { css } from 'twin.macro';
import { Container, Row } from '../components/atoms/Containers';
import GradientButton from '../components/buttons/GradientButton';
import LightDarkButton from '../components/buttons/LightDarkButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Element } from 'react-scroll';
import BgHeroMobile from '../assets/images/bg-homepage-mobile.webp';
import BgHero from '../assets/images/bg-homepage.webp';
import loadable from '@loadable/component';
import GradientCard from '../components/Home/GradientCard';
import CISCOIcon from '../assets/images/ciso-icon.svg';
import ShieldSettingsIcon from '../assets/images/shield-settings-icon.svg';
import ShieldCloudIcon from '../assets/images/shield-cloud-icon.svg';
import sal from 'sal.js';

const BlogCarousel = loadable(() => import('../components/Home/BlogSection'));
const CardsSections = loadable(() => import('../components/Home/CardsSections'));
const CalendarSection = loadable(() => import('../components/Home/CalendarSection'));
const MostReadArticles = loadable(() => import('../components/Home/MostReadArticles'));
const CaseStudiesSection = loadable(() => import('../components/Home/CaseStudiesSection'));
const CallToAction = loadable(() => import('../components/Home/CallToAction'));

const heroBackground = css`
    height: 44rem;
    background-image: url(${BgHeroMobile});
    background-position: right 40% bottom 38%;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (min-width: 500px) {
        height: 42rem;
        background-image: url(${BgHeroMobile});
        background-position: right 40% bottom 0%;
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media screen and (min-width: 640px) {
        height: 50rem;
        background-position: 70% 95%;
        background-image: url(${BgHeroMobile});
    }

    @media screen and (min-width: 1024px) {
        height: auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 35%;
        background-image: url(${BgHero});
    }
    @media screen and (min-width: 1536px) {
        height: 48rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 35%;
        background-image: url(${BgHero});
    }
    @media screen and (min-width: 2000px) {
        height: 54rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 30%;
        background-image: url(${BgHero});
    }
    @media screen and (min-width: 2560px) {
        height: 60rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 25%;
        background-image: url(${BgHero});
    }
`;

const sectionSubtitleColor = css`
    color: #38aff1;
`;

const sectionTextColor = css`
    color: #0d1d3d;
`;

const useCasesSectionBackground = css`
    background: linear-gradient(90deg, #071042, #0f26aa, #ff4a56);
`;

const servicesSectionStyle = css`
    background: #f5f9ff;
`;

const titleSection = css`
    font-size: 2rem;
`;

const featureTitle = css`
    font-size: 1.35rem;
`;

const featureStyle = css`
    background-image: linear-gradient(#e4edfc, #fff);
    height: 32rem;
    @media screen and (min-width: 440px) and (max-width: 1023px) {
        height: 45rem !important;
    }
    @media screen and (min-width: 1024px) {
        height: 32rem;
    }
`;

const HomePage = ({ location }) => {
    const data = useStaticQuery(graphql`
        query HomeQuery {
            graphContainers: file(relativePath: { eq: "graph-containers.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            graphHomePage: file(relativePath: { eq: "graph-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            dashboard: file(relativePath: { eq: "dashboard-home.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            assetInventory: file(relativePath: { eq: "asset-inventory.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            cardIntegrations: file(relativePath: { eq: "card-integrations-home.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            cardMisconfiguration: file(relativePath: { eq: "card-misconfiguration-home.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            cardStandards: file(relativePath: { eq: "card-standards-home.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        sal({
            once: false
        });

        const currentRef = domRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target === currentRef) {
                        setIsVisible(true);
                        observer.unobserve(currentRef);
                    }
                });
            },
            { rootMargin: '350px' }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <Layout
            location={location}
            pageName='HomePage'
            title='Robust Cloud Security Platform - Cyscale'
            description='Map all your cloud assets across providers in under 5 mins. Optimize costs, ensure cloud security, and prove compliance with the scalable Cyscale CSPM.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /
            </div>
            <div className='hidden' data-title>
                Robust Cloud Security Platform - Cyscale
            </div>
            <div className='hidden' data-description>
                Map all your cloud assets across providers in under 5 mins. Optimize costs, ensure cloud security, and
                prove compliance with the scalable Cyscale CSPM.
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div className='pt-8' css={heroBackground}>
                <Container>
                    <div className='py-16 md:py-24 lg:pt-24 lg:pb-36'>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                                <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1
                                        className='text-left text-blue text-3xl sm:text-4xl lg:text-5xl leading-normal lg:leading-normal mb-8 font-montserrat font-semibold hidden lg:block'
                                        css={css`
                                            height: 10rem;
                                            @media (min-width: 464px) {
                                                height: 7rem;
                                            }
                                            @media (min-width: 1024px) and (max-width: 1036px) {
                                                height: 22rem;
                                            }
                                            @media (min-width: 1037px) and (max-width: 1053px) {
                                                height: 20rem;
                                            }
                                            @media (min-width: 1054px) {
                                                height: 14rem;
                                            }
                                        `}
                                    >
                                        Improve your cloud security team’s productivity by 65%
                                    </h1>
                                    <h1
                                        className='text-left text-blue mb-8 font-montserrat block lg:hidden font-bold'
                                        css={css`
                                            font-size: 2rem;
                                            line-height: 2.5rem;
                                            height: 10rem;
                                            @media (min-width: 464px) {
                                                height: 7rem;
                                            }
                                            @media (min-width: 1024px) and (max-width: 1036px) {
                                                height: 22rem;
                                            }
                                            @media (min-width: 1037px) and (max-width: 1053px) {
                                                height: 20rem;
                                            }
                                            @media (min-width: 1054px) {
                                                height: 14rem;
                                            }
                                        `}
                                    >
                                        Improve your cloud security team’s productivity by 65%
                                    </h1>
                                    <p className='text-left text-base lg:text-lg mb-8 leading-relaxed font-hind'>
                                        Our cloud security platform automates the contextual analysis of cloud
                                        misconfigurations, vulnerabilities, access, and data, to provide an accurate and
                                        actionable assessment of risk.
                                    </p>
                                    <div className='flex mt-8 justify-start'>
                                        <Link to='/free-trial/'>
                                            <GradientButton text='Start Free Trial' />
                                        </Link>
                                        <Link to='/request-demo/' className='ml-4'>
                                            <LightDarkButton text={'Request Demo'} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='lg:mt-16 pt-4 max-w-lg lg:max-w-2xl mx-auto lg:mx-0'></div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
            <Container className='my-16 lg:my-32'>
                <div
                    className='grid grid-cols-12 gap-x-5 mt-12'
                    css={css`
                        overflow: hidden;
                    `}
                >
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 hidden lg:block' data-sal='slide-right'>
                        <GatsbyImage
                            image={data.graphContainers.childImageSharp.gatsbyImageData}
                            alt='Graph and screenshots from cloud security platform'
                        />
                    </div>
                    <div
                        className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl lg:max-w-xl lg:mt-4'
                        data-sal='slide-left'
                    >
                        <p className='font-montserrat text-base font-bold mt-0 lg:ml-5' css={sectionSubtitleColor}>
                            EMPOWER YOUR TEAM
                        </p>
                        <h2
                            className='text-blue font-bold font-montserrat mt-4 lg:ml-5'
                            css={css`
                                font-size: 2rem;
                                line-height: 2.5rem;
                            `}
                        >
                            Uncover the most toxic combinations of risk that <br className='hidden lg:block' />
                            expose your company's crown jewels
                        </h2>
                        <p className='font-hind text-base mt-4 lg:ml-5' css={sectionTextColor}>
                            Our solution goes beyond traditional security approaches by suggesting the 20% of most
                            important fixes that help reduce 80% of your risk, allowing you to prioritize your resources
                            and focus on what truly matters. With our cloud security solution, you can be confident that
                            your assets are protected, and your business is secure.
                        </p>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 block lg:hidden mt-12'>
                        <GatsbyImage
                            image={data.graphContainers.childImageSharp.gatsbyImageData}
                            alt='Graph and screenshots from cloud security platform'
                            className='w-auto md:max-w-2xl lg:w-auto'
                        />
                    </div>
                </div>
            </Container>
            <Container className='mb-16 lg:mb-24'>
                <div
                    className='grid grid-cols-12 gap-x-5 mt-12'
                    css={css`
                        overflow: hidden;
                    `}
                >
                    <div className='col-span-12 lg:col-span-4' data-sal='slide-right'>
                        <GradientCard
                            icon={CISCOIcon}
                            title={'CISO'}
                            text={
                                'Keep technological risk in check for the organization, track cloud security posture and remediation activities and generate reports for business stakeholders.'
                            }
                            link={'/products/cloud-security-posture-management/'}
                        />
                    </div>
                    <div className='col-span-12 lg:col-span-4' data-sal='slide-up'>
                        <GradientCard
                            icon={ShieldSettingsIcon}
                            title={'CLOUD INFRASTRUCTURE'}
                            text={
                                'Get visibility on the security posture of your multi-cloud environments from high-level to detail and ensure the productivity of your cloud team.'
                            }
                            link={'/products/cloud-security-posture-management/'}
                        />
                    </div>
                    <div className='col-span-12 lg:col-span-4' data-sal='slide-left'>
                        <GradientCard
                            icon={ShieldCloudIcon}
                            title={'CLOUD SECURITY'}
                            text={
                                'Identify the highest security risk with the help of our Security Knowledge Graph™ technology, capturing relationships between cloud resources, identities, and data.'
                            }
                            link={'/products/security-knowledge-graph/'}
                        />
                    </div>
                </div>
            </Container>
            <CaseStudiesSection />
            <div className='pt-24 pb-24 lg:pt-32 lg:pb-32' css={useCasesSectionBackground}>
                <Container>
                    <div className='grid grid-cols-12 gap-x-5'>
                        <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                            <p className='font-montserrat text-base font-bold text-white'>USE CASE</p>
                            <h2 className='font-montserrat font-bold text-white mt-4' css={titleSection}>
                                Get contextual insights
                            </h2>
                            <p className='mt-4 text-white text-base font-hind font-normal'>
                                An unpatched virtual machine running an app with the devastating Log4j vulnerability is
                                close to harmless in a private network. However, a server running the same vulnerable
                                cloud app while being exposed to the internet, and having read or write access to a
                                production datastore presents a totally different risk.
                            </p>
                            <p className='mt-4 text-white text-base font-hind font-normal'>
                                Understanding context allows you to immediately see what needs fixing and what can wait,
                                and thus prioritize tasks on your cloud security roadmap.
                            </p>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-20 lg:mt-0 mx-auto lg:mx-0'>
                            <GatsbyImage image={data.graphHomePage.childImageSharp.gatsbyImageData} alt='Graph' />
                        </div>
                    </div>
                </Container>
            </div>
            <div css={servicesSectionStyle} className='py-24 lg:py-32'>
                <div className='container max-w-7xl m-auto px-4 lg:px-8'>
                    <div className='grid grid-cols-12 gap-x-5'>
                        <div className='col-span-12 lg:col-span-8 mx-auto lg:mx-0 max-w-2xl'>
                            <p className='text-left uppercase font-montserrat font-bold' css={sectionSubtitleColor}>
                                CYSCALE CLOUD SECURITY PLATFORM
                            </p>
                            <h2 className='font-montserrat text-blue font-bold mt-3' css={titleSection}>
                                Your ally for a solid security program
                            </h2>
                            <p className='text-base font-hind font-normal max-w-2xl mt-3' css={sectionTextColor}>
                                Cyscale is an <strong>agentless</strong> cloud-native application protection platform
                                (CNAPP) that helps
                                <br className='hidden sm:block' /> your organization protect against data breaches and
                                other types of modern attacks in the public cloud.
                            </p>
                        </div>
                    </div>
                </div>
                <CardsSections />
            </div>
            <Container className='my-16 lg:my-32'>
                <div className='grid grid-cols-12 gap-x-5'>
                    <div className='col-span-12 lg:col-span-8 mx-auto lg:mx-0 max-w-2xl'>
                        <p className='uppercase font-montserrat font-bold' css={sectionSubtitleColor}>
                            CYSCALE KEY FEATURES
                        </p>
                        <h2 className='font-montserrat text-blue font-bold mt-3' css={titleSection}>
                            Protect your business with Cyscale
                        </h2>
                    </div>
                </div>

                <div
                    className='grid grid-cols-12 gap-x-5 mt-12'
                    css={css`
                        overflow: hidden;
                    `}
                >
                    <div
                        className='col-span-12 lg:col-span-6'
                        data-sal='slide-right'
                    >
                        <div
                            className='mt-6 lg:mt-0 rounded-xl pt-12 px-9 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative'
                            css={featureStyle}
                        >
                            <h3 className='font-montserrat font-bold' css={featureTitle}>
                                Complete Cloud Security Platform <br /> with Powerful Analytics & Dashboards
                            </h3>
                            <p className='font-hind text-base font-normal mt-4'>
                                Cloud security posture management with identity and data centric views.
                            </p>
                            <GatsbyImage
                                image={data.dashboard.childImageSharp.gatsbyImageData}
                                alt='Dashboard'
                                className='mt-4'
                            />
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-3' data-sal='slide-up'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl pt-12 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative mb-20 lg:mb-0'
                            css={featureStyle}
                        >
                            <h3 className='font-montserrat font-bold px-10' css={featureTitle}>
                                Cloud Asset <br />
                                Inventory
                            </h3>
                            <p className='font-hind text-base font-normal mt-4 px-10'>Unlimited protected assets.</p>
                            <GatsbyImage
                                image={data.assetInventory.childImageSharp.gatsbyImageData}
                                alt='Asset inventory'
                                className='mt-5 lg:px-10 lg:px-2'
                                css={css`
                                    @media screen and (min-width: 440px) and (max-width: 1023px) {
                                        height: 44.5rem;
                                    }
                                    @media screen and (min-width: 1024px) and (max-width: 1060px) {
                                        height: 18rem;
                                    }
                                    @media screen and (min-width: 1061px) {
                                        height: 22.75rem;
                                    }
                                `}
                            />
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-3 mt-12 lg:mt-0' data-sal='slide-left'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl pt-12 px-12 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative'
                            css={css`
                                background-image: linear-gradient(#e4edfc, #fff);
                                height: 34rem;
                                @media screen and (min-width: 380px) and (max-width: 440px) {
                                    height: 40rem !important;
                                }
                                @media screen and (min-width: 441px) and (max-width: 525px) {
                                    height: 44rem !important;
                                }
                                @media screen and (min-width: 526px) and (max-width: 1023px) {
                                    height: 52rem !important;
                                }
                                @media screen and (min-width: 1024px) {
                                    height: 32rem;
                                }
                            `}
                        >
                            <h3 className='font-montserrat font-bold' css={featureTitle}>
                                Integrations
                            </h3>
                            <p className='font-hind text-base font-normal mt-4'>
                                Amazon Web Services, Google Cloud, Microsoft Azure, Alibaba Cloud, Okta, Github and
                                more...
                            </p>
                            <GatsbyImage
                                image={data.cardIntegrations.childImageSharp.gatsbyImageData}
                                alt='Integrations'
                                className='mt-8'
                            />
                        </div>
                    </div>
                </div>
                <div
                    className='grid grid-cols-12 gap-x-5 mt-24'
                    css={css`
                        overflow: hidden;
                    `}
                >
                    <div className='col-span-12 lg:col-span-3' data-sal='slide-right'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl pt-8 pb-72 sm:pb-0 px-8 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-72 bg-black'
                            css={css`
                                @media screen and (min-width: 1023px) and (max-width: 1072px) {
                                    padding-left: 1.2rem;
                                    padding-right: 1.2rem;
                                }
                                @media screen and (min-width: 440px) and (max-width: 1023px) {
                                    height: 24rem;
                                }
                            `}
                        >
                            <h3 className='font-montserrat font-bold text-white' css={featureTitle}>
                                Contextual misconfiguration analysis
                            </h3>
                            <GatsbyImage
                                image={data.cardMisconfiguration.childImageSharp.gatsbyImageData}
                                alt='Misconfiguration'
                                className='mt-2'
                            />
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-3' data-sal='slide-up'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl pt-8 px-8 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-40 lg:h-72'
                            css={css`
                                background-image: linear-gradient(
                                    to bottom,
                                    #e7474b,
                                    #ee3d53,
                                    #f3305b,
                                    #f92065,
                                    #fd0070
                                );
                            `}
                        >
                            <h3 className='font-montserrat font-bold text-white' css={featureTitle}>
                                Alerts and remediation instructions
                            </h3>
                            <p className='text-base text-white mt-1 font-hind'>to detect cloud security drifts</p>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6' data-sal='slide-left'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl pt-8 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-72'
                            css={css`
                                background-image: linear-gradient(
                                    to bottom,
                                    #4a85eb,
                                    #326fe3,
                                    #1b58d8,
                                    #073fcc,
                                    #0623be
                                );
                            `}
                        >
                            <h3 className='font-montserrat font-bold text-white px-8' css={featureTitle}>
                                Built-in frameworks for ISO27001, <br /> PCI-DSS, SOC2, GDPR, and others
                            </h3>
                            <GatsbyImage
                                image={data.cardStandards.childImageSharp.gatsbyImageData}
                                alt='Standards'
                                className='mt-6'
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <CallToAction />
            <BlogCarousel />
            <div
                css={css`
                    background: linear-gradient(90deg, #071042, #0f26aa, #ff4a56);
                `}
                className='py-16 lg:py-32'
            >
                <Container>
                    <div className='grid grid-cols-12 gap-x-5'>
                        <div className='col-span-12 lg:col-span-8 mx-auto lg:mx-0 max-w-2xl'>
                            <p className='uppercase font-montserrat font-bold' css={sectionSubtitleColor}>
                                OUR BLOG
                            </p>
                            <h2 className='font-montserrat text-white font-bold mt-3' css={titleSection}>
                                The most read articles
                            </h2>
                        </div>
                    </div>
                    <MostReadArticles />
                </Container>
            </div>
            <Element name='meetings-calendar' />
            <div ref={domRef}>{isVisible && <CalendarSection />}</div>
        </Layout>
    );
};

export default HomePage;
