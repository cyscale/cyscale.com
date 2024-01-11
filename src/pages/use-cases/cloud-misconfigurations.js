import React, { useState } from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Container, Row } from '../../components/atoms/Containers';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import GradientButton from '../../components/buttons/GradientButton';
import { css } from 'twin.macro';
import Carousel from '../../components/cloud-security-posture-management/Carousel';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import { animateScroll } from 'react-scroll';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import { MisconfigurationsTopArticles } from '../../common/links';
import AutomateIcon from '../../assets/images/automate-icon-misconfig.svg';
import PreventIcon from '../../assets/images/prevent-icon-misconfig.svg';
import AlertIcon from '../../assets/images/alerts-icon-misconfig.svg';
import ScrollDown from '../../components/ScrollButton/ScrollDown';

const imageTextRowSubtitle = css`
    font-size: 1.75rem;
    line-height: 2rem;
`;

const CloudMissConfiguration = ({ location }) => {
    const [currImage, setCurrImage] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    const data = useStaticQuery(graphql`
        query MisconfigurationsQuery {
            heroImage: file(relativePath: { eq: "graph-containers.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            continuosProtection: file(relativePath: { eq: "continuos-protection-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            cards: file(relativePath: { eq: "cards-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            graph: file(relativePath: { eq: "graph-misconfiguration.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            standards: file(relativePath: { eq: "standards-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            complianceHistory: file(relativePath: { eq: "compliance-history-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
        }
    `);

    const slides = [
        { image: data.cards.childImageSharp.gatsbyImageData, alt: 'Screenshots from cloud security platform' },
        { image: data.standards.childImageSharp.gatsbyImageData, alt: 'Standards view' },
        {
            image: data.complianceHistory.childImageSharp.gatsbyImageData,
            alt: 'Standard view with compliance history graphic'
        }
    ];

    return (
        <Layout
            location={location}
            pageName='MisconfigurationsPage'
            title='Identify and Fix Cloud Misconfigurations Automatically'
            description='Improve your cloud security posture in minutes. Detect and eliminate critical misconfigurations, policy violations, and mistakes.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /use-cases/cloud-misconfigurations
            </div>
            <div className='hidden' data-title>
                Identify and Fix Cloud Misconfigurations Automatically
            </div>
            <div className='hidden' data-description>
                Improve your cloud security posture in minutes. Detect and eliminate critical misconfigurations, policy
                violations, and mistakes.
            </div>
            <div className='hidden' data-category>
                solutions
            </div>
            <div className='bg-zircon sm:pb-0 pt-32 lg:pt-40 xl:pt-32 relative'>
                <Container>
                    <Row>
                        <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                            <div className='lg:mt-4 pt-2 lg:pt-4 max-w-2xl mx-auto lg:mx-0'>
                                <h1
                                    className='text-center lg:text-left mb-8 font-montserrat font-bold'
                                    css={css`
                                        font-size: 2rem;
                                        @media (min-width: 1024px) {
                                            &:after {
                                                content: '';
                                                display: block;
                                                width: 40%;
                                                height: 6px;
                                                margin-top: 16px;
                                                background-image: linear-gradient(to right, #0f26aa, #ff4a56);
                                            }
                                        }
                                    `}
                                >
                                    Eliminate Cloud <br />
                                    Misconfigurations with <br /> Security
                                    <span
                                        css={css`
                                            background-image: linear-gradient(89deg, #0f26aa 54.38%, #ff4a56 75.89%);
                                            color: transparent;
                                            -webkit-background-clip: text;
                                            background-clip: text;
                                            display: inline-block;
                                            padding: 2px 5px;
                                        `}
                                    >
                                        Automation
                                    </span>
                                </h1>
                                <p
                                    className='text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-hind'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    Improve your security posture in the cloud, a centralized view of all your assets
                                    and servers in one place. Detect and eliminate critical misconfigurations, policy
                                    violations, and mistakes.
                                </p>
                                <Link
                                    to='/request-demo/'
                                    className='mt-8 sm:mb-12 lg:mb-28 mx-auto lg:mx-0 block lg:inline-block'
                                >
                                    <GradientButton text='BOOK A DEMO' />
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 lg:flex lg:justify-end'>
                            <div className='pt-4 max-w-lg lg:max-w-xl mx-auto lg:mx-0'>
                                <GatsbyImage
                                    image={data.heroImage.childImageSharp.gatsbyImageData}
                                    alt='Graph and screenshots from cloud security platform'
                                />
                            </div>
                        </div>
                    </Row>
                    <div className='pb-16 sm:pb-0'>
                        <ScrollDown />
                    </div>
                </Container>
            </div>
            <Container>
                <div className='pt-20' id='start'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' />
                        <h2 className='text-center px-2 mt-4 mb-2 font-montserrat font-bold text-3xl lg:text-4xl'>
                            Cyscale has you{' '}
                            <span
                                css={css`
                                    background-image: linear-gradient(89deg, #0f26aa 54.38%, #ff4a56 75.89%);
                                    color: transparent;
                                    -webkit-background-clip: text;
                                    background-clip: text;
                                    display: inline-block;
                                    padding: 2px 5px;
                                `}
                            >
                                covered
                            </span>
                        </h2>
                    </div>
                </div>
            </Container>
            <Container className='py-8 md:py-12'>
                <div className='grid grid-cols-12 gap-x-5'>
                    <div className='col-span-12 lg:col-span-6'>
                        <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm'>
                            <img src={PreventIcon} alt='' className='lg:mt-12' />
                            <h2
                                className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                css={imageTextRowSubtitle}
                            >
                                Prevent misconfigurations & mistakes
                            </h2>
                        </div>
                        <div className='mx-auto lg:mx-0 max-w-xl'>
                            <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                A single misconfiguration can have a devastating impact on your cloud security.
                            </p>
                            <p className='leading-normal text-base text-gray py-2 font-hind'>
                                Cyscale automatically detects misconfigured services across identity, compute, storage,
                                networking, container services, managed Kubernetes, and many more.
                            </p>
                            <p className='leading-normal text-base text-gray py-2 font-hind'>
                                Get step-by-step remediation guidelines for any finding, so that you can act fast to
                                reduce your attack surface and prevent incidents.
                            </p>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl'>
                        <GatsbyImage
                            image={data.continuosProtection.childImageSharp.gatsbyImageData}
                            alt='Screenshots from cloud security platform'
                        />
                    </div>
                </div>
            </Container>
            <Container className='py-8 md:py-12'>
                <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                    <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0  hidden lg:block'>
                        <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                            <GatsbyImage
                                image={data.graph.childImageSharp.gatsbyImageData}
                                alt='Graph with alert and control details'
                            />
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6'>
                        <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm'>
                            <img src={AlertIcon} alt='' className='lg:mt-12' />
                            <h2
                                className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                css={imageTextRowSubtitle}
                            >
                                Cut through
                                <br /> the noise
                            </h2>
                        </div>
                        <div className='mx-auto lg:mx-0 max-w-xl'>
                            <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                Don't waste time chasing false positives. Get contextual alerts when your cloud assets
                                drift away from established security and compliance standards.
                            </p>
                            <p className='leading-normal text-base text-gray py-2 font-hind'>
                                Instead of overwhelming list-based management, Cyscale's Security Knowledge Graph™
                                makes precise correlations between all your cloud assets and data repositories to
                                automatically pinpoint critical security improvements.
                            </p>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                        <div className='mx-auto max-w-xl lg:mt-8 lg:mx-0 lg:max-w-2xl'>
                            <GatsbyImage
                                image={data.graph.childImageSharp.gatsbyImageData}
                                alt='Graph with alert and control details'
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <Container className='py-8 md:py-12'>
                <div className='grid grid-cols-12 gap-x-5'>
                    <div className='col-span-12 lg:col-span-6'>
                        <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm'>
                            <img src={AutomateIcon} alt='' className='lg:mt-8' />
                            <h2
                                className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                css={imageTextRowSubtitle}
                            >
                                Out-of-the-box actionable policies and standards
                            </h2>
                        </div>
                        <div className='mx-auto lg:mx-0 max-w-xl'>
                            <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                In-app security standards and organizational security policy templates for CIS Cloud
                                Benchmarks, ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST, and many more help your team
                                with internal or external audits.
                            </p>
                            <p className='leading-normal text-base text-gray py-2 font-hind'>
                                Automated and continuous assessment of your cloud compliance, with custom Controls that
                                tap into our Security Knowledge Graph to deliver the security and compliance checks that
                                matter most to your organization.
                            </p>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0'>
                        <div className='max-w-xl'>
                            <Carousel
                                autoSlide={autoSlide}
                                setAutoSlide={setAutoSlide}
                                cspmCarousel
                                curr={currImage}
                                setCurr={setCurrImage}
                            >
                                {slides.map((s, index) => {
                                    return (
                                        <div
                                            className='mt-12 block'
                                            css={css`
                                                width: 100%;
                                                height: 100%;
                                            `}
                                            onMouseEnter={() => setAutoSlide(false)}
                                            onMouseLeave={() => setAutoSlide(true)}
                                            role='button'
                                            tabIndex='-1'
                                            onClick={() => {}}
                                            onKeyDown={() => {}}
                                            key={index}
                                        >
                                            <GatsbyImage image={s.image} alt={s.alt} />
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-gradient-to-b from-selago to-white relative z-10' id='confidence'>
                <img
                    src={corner}
                    width={300}
                    className='hidden lg:block absolute top-0 right-0 m-0 z-20'
                    alt=''
                    loading='lazy'
                />
                <Container>
                    <div className='py-8 md:py-12 lg:py-20'>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-2xl mb-20'>
                            <h2
                                className='font-bold text-primary border-title-partly font-montserrat'
                                css={imageTextRowSubtitle}
                            >
                                Extensive cloud misconfiguration <br />
                                detection across all of your cloud assets
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Analyze cloud misconfigurations</strong>
                                        <br />
                                        Analyze misconfigurations against the most popular industry and regulatory
                                        frameworks, including a wide range of CIS control benchmarks, ISO 27001, and SOC
                                        2.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Ensure security and compliance</strong>
                                        <br />
                                        Prove alignment with the highest industry standards, enforce policies
                                        consistently across cloud providers and scale compliance efforts without
                                        overhead.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>400+ unique configuration controls</strong>
                                        <br />
                                        Unique and customizable controls, including authentication, data protection,
                                        logging and monitoring, network configurations, system integrity, and more.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Prioritize misconfiguration risk</strong>
                                        <br />
                                        Contextual prioritization and remediation through our Security Knowledge Graph,
                                        which surfaces crucial issues based on the correlation of insights from a deep
                                        understanding of all your interlinked assets.
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='md:pt-12 pb-12 md:pb-24'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' loading='lazy' />
                        <h2 className='text-center px-2 mt-4 mb-2 font-montserrat font-bold text-lg lg:text-2xl'>
                            Get peace of mind with automated cloud security
                        </h2>
                        <div className='mt-10 w-auto inline-block'>
                            <button
                                onClick={() => animateScroll.scrollToTop()}
                                css={css`
                                    padding: 0.625rem 2.5rem;
                                `}
                                className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind cursor-pointer'
                            >
                                BOOK YOUR DEMO
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
            <LinksAndWhitepaper
                topArticles={MisconfigurationsTopArticles}
                data={data}
                title={'Misconfigurations'}
                titleCard={'The Complete Guide<br class="hidden lg:block" /> to Cloud Storage Misconfigurations'}
                textCard={
                    'This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data security breaches and the importance of a secure cloud storage infrastructure.'
                }
                linkCard={'/whitepaper/cloud-storage-misconfigurations/'}
                misconfigurationWhitepaper={true}
            />
        </Layout>
    );
};

export default CloudMissConfiguration;
