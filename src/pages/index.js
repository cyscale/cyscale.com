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
import AOS from 'aos';
import 'aos/dist/aos.css';
import loadable from '@loadable/component';

const BlogCarousel = loadable(() => import('../components/Home/BlogSection'));
const GradientCardsSection = loadable(() => import('../components/Home/GradientCardsSection'));
const CardsSections = loadable(() => import('../components/Home/CardsSections'));
const KeyFeaturesSection = loadable(() => import('../components/Home/KeyFeaturesSection'));
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
    background: linear-gradient(86.75deg, #1f1118 -17.76%, #0f26aa 44.32%, #ff4a56 148.58%);
`;

const servicesSectionStyle = css`
    background: #f5f9ff;
`;

const titleSection = css`
    font-size: 2rem;
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
        }
    `);
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        AOS.init({
            disable: function () {
                const windowWidth = document.documentElement.clientWidth;
                return windowWidth < 1280;
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(domRef.current);
                }
            });
        });

        observer.observe(domRef.current);

        return () => observer.unobserve(domRef.current);
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
                                        className='text-left text-blue  mb-8 font-montserrat font-semibold block lg:hidden font-bold'
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
                                        <Link to='/free-trial'>
                                            <GradientButton text='Start Free Trial' />
                                        </Link>
                                        <Link to='/request-demo' className='ml-4'>
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
                    <div
                        className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 hidden lg:block'
                        data-aos='fade-right'
                        data-aos-offset='-100'
                    >
                        <GatsbyImage
                            image={data.graphContainers.childImageSharp.gatsbyImageData}
                            alt='Graph and screenshots from cloud security platform'
                        />
                    </div>
                    <div
                        className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl lg:max-w-xl lg:mt-4'
                        data-aos='fade-left'
                        data-aos-offset='-140'
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

            <div ref={domRef}>
                {isVisible && (
                    <>
                        {' '}
                        <GradientCardsSection />
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
                                            An unpatched virtual machine running an app with the devastating Log4j
                                            vulnerability is close to harmless in a private network. However, a server
                                            running the same vulnerable cloud app while being exposed to the internet,
                                            and having read or write access to a production datastore presents a totally
                                            different risk.
                                        </p>
                                        <p className='mt-4 text-white text-base font-hind font-normal'>
                                            Understanding context allows you to immediately see what needs fixing and
                                            what can wait, and thus prioritize tasks on your cloud security roadmap.
                                        </p>
                                    </div>
                                    <div className='col-span-12 lg:col-span-6 mt-20 lg:mt-0 mx-auto lg:mx-0'>
                                        <GatsbyImage
                                            image={data.graphHomePage.childImageSharp.gatsbyImageData}
                                            alt='Graph'
                                        />
                                    </div>
                                </div>
                            </Container>
                        </div>
                        <div css={servicesSectionStyle} className='py-24 lg:py-32'>
                            <div className='container max-w-7xl m-auto px-4 lg:px-8'>
                                <div className='grid grid-cols-12 gap-x-5'>
                                    <div className='col-span-12 lg:col-span-8 mx-auto lg:mx-0 max-w-2xl'>
                                        <p
                                            className='text-left uppercase font-montserrat font-bold'
                                            css={sectionSubtitleColor}
                                        >
                                            CYSCALE CLOUD SECURITY PLATFORM
                                        </p>
                                        <h2 className='font-montserrat text-blue font-bold mt-3' css={titleSection}>
                                            Your ally for a solid security program
                                        </h2>
                                        <p
                                            className='text-base font-hind font-normal max-w-2xl mt-3'
                                            css={sectionTextColor}
                                        >
                                            Cyscale is an <strong>agentless</strong> cloud-native application protection
                                            platform (CNAPP) that helps
                                            <br className='hidden sm:block' /> your organization protect against data
                                            breaches and other types of modern attacks in the public cloud.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <CardsSections />
                        </div>
                        <KeyFeaturesSection />
                        <CallToAction />
                        <BlogCarousel />
                        <div
                            css={css`
                                background-color: #0a1a76;
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
                        <CalendarSection />
                    </>
                )}
            </div>
        </Layout>
    );
};

export default HomePage;
