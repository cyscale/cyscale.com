import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout/CleanLayout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { css } from 'twin.macro';
import { Container } from '../components/atoms/Containers';
import GradientButton from '../components/buttons/GradientButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Element } from 'react-scroll';
import loadable from '@loadable/component';
import sal from 'sal.js';
import FixIcon from '../assets/images/fix-icon-home.svg';
import PrioritizeIcon from '../assets/images/prioritize-icon-home.svg';
import IdentifyIcon from '../assets/images/identity-icon-home.svg';
import IntegrationsIcons from '../components/Home/IntegrationsIcons';
import { CSSTransition } from 'react-transition-group';
import VideoCyscale from '../components/campaigns/cspm-solution/CyscaleVideo';
import useMediaQuery from '../hooks/useMediaQuery';
import StorylaneModal from '../components/full-platform-tour/StorylaneModal';

const CaseStudiesSection = loadable(() => import('../components/Home/CaseStudiesSection'));
const CardsSections = loadable(() => import('../components/Home/CardsSections'));
const CallToAction = loadable(() => import('../components/Home/CallToAction'));
const BlogCarousel = loadable(() => import('../components/Home/BlogSection'));
const MostReadArticles = loadable(() => import('../components/Home/MostReadArticles'));
const CalendarSection = loadable(() => import('../components/Home/CalendarSection'));

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

const onHoverMarginHr = css`
    &:hover hr {
        margin-top: 0px;
    }
`;

const workflowPhaseGradient = css`
    height: 4px;
    border: none;
    background: #0f26aa;
    background: linear-gradient(90deg, #0f26aa 11.63%, #ff4a56 95.75%) 0 / 70% no-repeat;
`;

const workflowPhaseHr = css`
    border: 0;
    margin-top: 40px;
    height: 1px;
    background: #d9d9d9;
`;

const HomePage = ({ location }) => {
    const isDesktop = useMediaQuery('(min-width: 1024px)');

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
            heroImage: file(relativePath: { eq: "hero-image-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
        }
    `);
    const [modal, setModal] = useState(false);
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
            title='Cyscale | Simple Cloud Security. Instant peace of mind'
            description='Contextual analysis of cloud misconfigurations, vulnerabilities, access, and data, providing an intuitive and actionable assessment of risk.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink></div>
            <div className='hidden' data-title>
                Cyscale | Simple Cloud Security. Instant peace of mind
            </div>
            <div className='hidden' data-description>
                Contextual analysis of cloud misconfigurations, vulnerabilities, access, and data, providing an
                intuitive and actionable assessment of risk.
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div className='pt-24 sm:pt-32'>
                <Container>
                    <div
                        className='py-6 lg:py-16 px-4 lg:px-8'
                        css={css`
                            border-radius: 1rem;
                            background: linear-gradient(0deg, #f5f9ff 0%, #f5f9ff 100%);
                        `}
                    >
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='sm:pt-4 max-w-lg mx-auto lg:mx-0'>
                                    <h1
                                        className='text-left text-blue text-4xl lg:text-5xl leading-normal lg:leading-normal font-montserrat font-bold'
                                        css={css`
                                            @media (max-width: 640px) {
                                                font-size: 2rem;
                                                line-height: 2.5rem;
                                                height: 8rem;
                                            }
                                            height: 10rem;
                                            @media screen and (min-width: 1024px) and (max-width: 1035px) {
                                                height: 14rem;
                                            }
                                        `}
                                    >
                                        Secure your cloud{' '}
                                        <br
                                            css={css`
                                                display: none;
                                                @media screen and (min-width: 497px) {
                                                    display: block;
                                                }
                                                @media screen and (min-width: 1024px) and (max-width: 1035px) {
                                                    display: none;
                                                }
                                            `}
                                        />{' '}
                                        quickly and easily
                                    </h1>
                                    <p className='text-left text-base lg:text-lg mb-4 leading-relaxed font-hind'>
                                        Get contextual analysis of cloud misconfigurations, vulnerabilities, access, and
                                        data for an accurate and actionable assessment of risk.
                                    </p>
                                    <div className='flex mt-4 justify-start'>
                                        <Link to='/request-demo/'>
                                            <GradientButton text='BOOK A DEMO' />
                                        </Link>
                                    </div>
                                </div>
                                <p
                                    className='font-hind text-base mt-6 hidden lg:block'
                                    css={css`
                                        color: #747474;
                                    `}
                                >
                                    Integrations
                                </p>
                                <div className='hidden lg:flex space-x-3 lg:mt-2'>
                                    <IntegrationsIcons />
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 mt-8 lg:mt-0'>
                                <div className='pt-4 max-w-lg lg:max-w-2xl mx-auto lg:mx-0'>
                                    <div
                                        onClick={() => {
                                            setModal(!modal);
                                        }}
                                        onKeyPress={() => {}}
                                        tabIndex='0'
                                        role='button'
                                    >
                                        <GatsbyImage
                                            image={data.heroImage.childImageSharp.gatsbyImageData}
                                            css={css`
                                                &:hover {
                                                    scale: 1.025;
                                                }
                                            `}
                                            imgStyle={{ borderRadius: '0.75rem' }}
                                            alt='Video Thumbnail'
                                        />
                                    </div>
                                    {modal && <div className='modal-overlay'></div>}
                                    <CSSTransition in={modal} timeout={300} classNames='video' unmountOnExit>
                                        {isDesktop ? (
                                            <StorylaneModal
                                                setModal={setModal}
                                                src='https://app.storylane.io/demo/xiaviyvpr3sd'
                                            />
                                        ) : (
                                            <VideoCyscale
                                                setModal={setModal}
                                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/Cyscale-explainer-video-2023-12-Dec.mp4'
                                                greyCloseButton
                                            />
                                        )}
                                    </CSSTransition>
                                </div>
                                <div className='max-w-lg mx-auto block lg:hidden'>
                                    <p
                                        className='font-hind text-base mt-4 block lg:hidden'
                                        css={css`
                                            color: #747474;
                                        `}
                                    >
                                        Integrations
                                    </p>
                                    <div className='flex lg:hidden space-x-3 lg:mt-2'>
                                        <IntegrationsIcons />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='container max-w-7xl sm:m-auto px-4 lg:px-8 mb-16 sm:my-16 lg:mt-32'>
                <div
                    className='grid grid-cols-12 gap-x-5 mt-20 sm:mt-12'
                    css={css`
                        overflow: hidden;
                    `}
                >
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 hidden lg:block'>
                        <GatsbyImage
                            image={data.graphContainers.childImageSharp.gatsbyImageData}
                            alt='Graph and screenshots from cloud security platform'
                        />
                    </div>
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl lg:max-w-xl lg:mt-4'>
                        <p className='font-montserrat text-base font-bold mt-0 lg:ml-5' css={sectionSubtitleColor}>
                            CLOUD SECURITY IN CONTEXT
                        </p>
                        <h2
                            className='text-blue font-bold font-montserrat mt-4 lg:ml-5'
                            css={css`
                                font-size: 2rem;
                                line-height: 2.5rem;
                            `}
                        >
                            We guide you to the 20% of most important fixes that will reduce 80% of your risk
                        </h2>
                        <p className='font-hind text-base mt-4 lg:ml-5' css={sectionTextColor}>
                            Cloud security shouldn't hold you back. If you’re purchasing your first cloud security
                            solution or you’ve outgrown tools from AWS, Azure, or Google Cloud, Cyscale reduces the
                            noise to keep you focused on what's urgent. Get peace of mind that your assets are
                            protected.
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
            </div>
            <Container>
                <div className='pt-24 pb-24'>
                    <h3 className='text-blue font-montserrat font-bold mb-12 text-3xl  sm:text-4xl'>
                        Don’t just assess, FIX
                    </h3>
                    <div className='grid grid-cols-12 gap-4 lg:gap-0'>
                        <div
                            className='col-span-12 sm:col-span-6 lg:col-span-4 mx-0 max-w-xl lg:max-w-full group'
                            css={onHoverMarginHr}
                        >
                            <img src={IdentifyIcon} alt='' className='mx-0 sm:mx-auto lg:mx-0' />
                            <p className='font-montserrat font-bold text-xl text-left sm:text-center lg:text-left mt-3'>
                                IDENTIFY
                            </p>
                            <div className='mt-9 group-hover:block hidden' css={workflowPhaseGradient}></div>
                            <hr css={workflowPhaseHr} />
                            <div className='mt-9 lg:pr-8'>
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    Continuous and automated monitoring of your AWS, Microsoft Azure, Google Cloud, and
                                    Alibaba Cloud environments. Each cloud asset is a node in the Security Knowledge
                                    Graph™ so it's easy to see how it interacts with other entities, enabling you to
                                    identify issues in a much richer context.
                                </p>
                            </div>
                        </div>
                        <div
                            className='col-span-12 sm:col-span-6 lg:col-span-4 mx-0 max-w-xl lg:max-w-full group mt-4 sm:mt-0'
                            css={onHoverMarginHr}
                        >
                            <img src={PrioritizeIcon} alt='' className='mx-0 sm:mx-auto lg:mx-0' />
                            <p className='font-montserrat font-bold text-xl text-left sm:text-center lg:text-left mt-3'>
                                PRIORITIZE
                            </p>
                            <div className='mt-9 group-hover:block hidden' css={workflowPhaseGradient}></div>
                            <hr css={workflowPhaseHr} />
                            <div className='mt-9 lg:pr-8'>
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    Context is important. Don't waste time chasing false positives or getting
                                    overwhelmed by rigid and complex tools. Configurable risk rules let you define your
                                    own thresholds to identify the highest security risk to act on.
                                </p>
                            </div>
                        </div>
                        <div
                            className='col-span-12 sm:col-span-6 lg:col-span-4 mx-0 max-w-xl lg:max-w-full group mt-4 lg:mt-0'
                            css={onHoverMarginHr}
                        >
                            <img src={FixIcon} alt='' className='mx-0 sm:mx-auto lg:mx-0' />
                            <p className='font-montserrat font-bold text-xl text-left sm:text-center lg:text-left mt-3'>
                                FIX
                            </p>
                            <div className='mt-9 group-hover:block hidden' css={workflowPhaseGradient}></div>
                            <hr css={workflowPhaseHr} />
                            <div className='mt-9 lg:pr-8'>
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    Cyscale guides you through the remediation process for each risk so you can quickly
                                    solve misconfigurations and vulnerabilities leading to compliance violations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <CaseStudiesSection />
            <div className='pt-24 pb-24 lg:pt-32 lg:pb-32' css={useCasesSectionBackground}>
                <Container>
                    <div className='grid grid-cols-12 gap-x-5'>
                        <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                            <p className='font-montserrat text-base font-bold text-white'>
                                A DEEPER UNDERSTANDING
                                <br className='block sm:hidden' /> OF YOUR UNIQUE CLOUD RISK
                            </p>
                            <h2 className='font-montserrat font-bold text-white mt-4' css={titleSection}>
                                Get contextual insights
                            </h2>
                            <p className='mt-4 text-white text-base font-hind font-normal'>
                                An unpatched virtual machine running an app with the devastating Log4j vulnerability is
                                close to harmless in a private network. However, a server running the same vulnerable
                                cloud app while being exposed to the internet, and having read or write access to a
                                production datastore presents an urgent risk.
                            </p>
                            <p className='mt-4 text-white text-base font-hind font-normal'>
                                Don't waste time chasing false positives. Context enables you to immediately see what
                                you need to prioritize on your cloud security roadmap.
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
                                CLOUD SECURITY IS CRITICAL <br className='block sm:hidden' /> BUT IT SHOULDN'T BE
                                COMPLEX
                            </p>
                            <h2 className='font-montserrat text-blue font-bold mt-3' css={titleSection}>
                                Peace of mind with <br className='hidden sm:block' /> automated cloud security
                            </h2>
                            <p className='text-base font-hind font-normal max-w-2xl mt-3' css={sectionTextColor}>
                                Cyscale is an <strong>agentless</strong> cloud-native application protection platform
                                (CNAPP) that helps protect your organization against data breaches and other types of
                                modern threats in the public cloud.
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
                            AUTOMATED CLOUD SECURITY
                        </p>
                        <h2 className='font-montserrat text-blue font-bold mt-3' css={titleSection}>
                            Secure your cloud apps and
                            <br className='hidden sm:block' /> data without being an expert
                        </h2>
                    </div>
                </div>

                <div
                    className='grid grid-cols-12 gap-x-5 mt-12'
                    css={css`
                        overflow: hidden;
                    `}
                >
                    <div className='col-span-12 lg:col-span-6' data-sal='slide-right'>
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
