import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/CleanLayout';
import { Container, Row } from '../components/atoms/Containers';
import classNames from 'classnames';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import expand from '../assets/images/expand-startups.svg';
import collapse from '../assets/images/collapse-startups.svg';
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

const q1 = (useReactComponent) => {
    return [
        {
            question: 'What is Cyscale for Startups?',
            answer: (
                <>
                    <p className='mb-4'>
                        Automated Cloud Security designed for fast-growing startups. Enterprise-focused security
                        offerings come with a hefty price tag and an overly complex array of features and functions that
                        are overkill for smaller, more agile companies. We believe cloud security is critical for your
                        business and shouldn’t hold you back.
                    </p>
                    <p>Good security should enable growth through trust and credibility!</p>
                </>
            )
        },
        {
            question: 'What are the eligibility requirements?',
            answer: (
                <>
                    <p>
                        The Cyscale for Startups program is aimed at early-stage companies that have raised $10m or
                        less.
                    </p>
                    <p>If your situation is different let’s have a conversation and see what we can do.</p>
                    {useReactComponent ? (
                        <Link className='underline mb-4' to='/contact-us/'>
                            <br />
                            Get in touch.
                        </Link>
                    ) : (
                        <a href='https://cyscale.com/contact-us/'>Get in touch.</a>
                    )}
                </>
            )
        }
    ];
};

const q2 = (useReactComponent) => {
    return [
        {
            question: 'How do I apply?',
            answer: (
                <>
                    <p className='mb-4'>
                        Submit your application using the form on our webpage and we’ll respond within 24 hours, usually
                        faster.
                    </p>
                </>
            )
        },
        {
            question: 'What are the terms of the contract?',
            answer: (
                <p className='mb-4'>
                    The Cyscale for Startups program gives you 75% off the list price for 12 months and coverage for up
                    to 1,000 assets. This works out at just over $200 per month for continuous security for your data
                    and apps in the cloud.
                </p>
            )
        }
    ];
};

const blueGradientCard = css`
    background-image: linear-gradient(#e4edfc, #fff);
`;

const SecurityForStartups = ({ location }) => {
    const [active, setActive] = useState(-1);

    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query StartupsSecurityQuery {
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
        <>
            <Layout
                location={location}
                pageName='SecurityStartups'
                title='Cyscale for Startups - Cyscale'
                description='Automated Cloud Security designed for fast-growing startups'
                noIndex={true}
            >
                <Helmet>
                    <script charSet='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
                </Helmet>
                <div className='hidden' data-template-key>
                    hardcoded-pages
                </div>
                <div className='hidden' data-permalink>
                    /security-for-startups/
                </div>
                <div className='hidden' data-title>
                    Cyscale for Startups - Cyscale
                </div>
                <div className='hidden' data-description>
                    Automated Cloud Security designed for fast-growing startups
                </div>
                <div className='hidden' data-category>
                    website
                </div>
                <div className='bg-pouring pt-8'>
                    <Container>
                        <div className='py-24 lg:pt-32 lg:pb-16'>
                            <Row>
                                <div className='col-span-12 lg:col-span-6 '>
                                    <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                        <h1 className='text-center sm:text-left text-blue text-4xl lg:text-5xl leading-normal mb-8 font-montserrat font-bold'>
                                            Cyscale for Startups
                                        </h1>
                                        <h2
                                            className='text-center sm:text-left mb-8 text-blue font-bold'
                                            css={css`
                                                font-size: 1.5rem;
                                                line-height: 2rem;
                                                @media (min-width: 640px) {
                                                    font-size: 2rem;
                                                    line-height: 2.25rem;
                                                }
                                            `}
                                        >
                                            Your cloud apps and data, secured ✅
                                        </h2>
                                        <p
                                            className='text-center sm:text-left text-base lg:text-2xl mb-8'
                                            css={css`
                                                color: #454545;
                                            `}
                                        >
                                            If you’re a fast-growing SaaS company, cloud security shouldn’t hold you
                                            back. The Cyscale platform automates security for your apps and data in the
                                            cloud without the need for a big security team or a big budget.
                                        </p>
                                        <p
                                            className='text-center sm:text-left text-base lg:text-2xl mb-2 font-bold'
                                            css={css`
                                                color: #454545;
                                            `}
                                        >
                                            Easy to deploy, easy to use. Job done. Box checked.{' '}
                                            <br className='hidden lg:block' /> Regulator satisfied.
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
                                        {loadingForm && <LoaderContainer minHeight={515} />}
                                        <div
                                            style={{ minHeight: 515 }}
                                            id='startups-form'
                                            className={classnames('pb-4', { hidden: loadingForm })}
                                        />
                                    </div>
                                </div>
                            </Row>
                        </div>
                        <div className='pb-16 hidden sm:block '>
                            <ScrollButtonStartups to='start' />
                        </div>
                    </Container>
                </div>
                <Container className='mt-8'>
                    <div className='py-12 md:py-24'>
                        <div id='start'>
                            <div className='mx-auto lg:mx-0 '>
                                <h2
                                    className='text-center lg:text-left mb-4 font-montserrat font-bold text-blue'
                                    css={css`
                                        font-size: 2rem;
                                    `}
                                >
                                    How do I qualify?
                                </h2>
                                <h1
                                    className='text-center lg:text-left text-lg lg:text-2xl mb-8'
                                    css={css`
                                        color: #454545;
                                    `}
                                >
                                    If your startup has received $10m or less in funding and you‘re building a startup
                                    rocketship 🚀
                                </h1>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-x-5'>
                            <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                                <div
                                    className='mt-6 lg:mt-0 rounded-xl max-w-lg lg:max-w-2xl mx-auto flex items-center justify-center p-4 lg:p-0 h-36 lg:h-40'
                                    css={css`
                                        background: linear-gradient(48deg, #000 0%, #0f26aa 36.65%, #ff4a56 100%),
                                            #0f26aa;
                                    `}
                                >
                                    <p
                                        className='font-montserrat text-white text-center font-bold'
                                        css={css`
                                            font-size: 1.5rem;
                                            @media (min-width: 1024px) {
                                                font-size: 2rem;
                                            }
                                        `}
                                    >
                                        You get 75% off first year and protection for up to 1000 assets.
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                                <div className='mt-6 lg:mt-0 rounded-xl max-w-lg lg:max-w-2xl mx-auto bg-selago px-8 py-4 sm:py-5 h-48 lg:h-40'>
                                    <p
                                        className='font-hind text-lg'
                                        css={css`
                                            color: #2d2d2d;
                                        `}
                                    >
                                        If you are a scaleup or mid-seize company or your situation is different, let’s
                                        have a conversation and see what we can do.
                                    </p>
                                    <Link
                                        className='py-2 pl-4 pr-6 rounded cursor-pointer font-medium mt-2 sm:mt-4 lg:mt-2 xl:mt-6 flex bg-blue'
                                        to='/request-demo/'
                                        css={[
                                            hoverButtonColorStyle,
                                            widthFitStyle,
                                            css`
                                                color: #0f26aa;
                                                &:hover {
                                                    color: white;
                                                }
                                            `
                                        ]}
                                    >
                                        <RightArrow fillColor={'white'} marginTop='0.2rem' />
                                        <span className='text-md ml-2 text-white'>Get in touch</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className='pt-2 pb-0 sm:pb-24'>
                        <div>
                            <h2
                                className='text-center lg:text-left mb-8 font-montserrat font-bold text-blue'
                                css={css`
                                    font-size: 2rem;
                                `}
                            >
                                What do I get?
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
                                    <h1 className='text-2xl font-montserrat font-bold'>
                                        Access to the full Cyscale Automated Cloud Security Platform with Powerful
                                        Analytics & Dashboards
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
                                    <h1 className='text-2xl font-montserrat font-bold px-4 lg:px-8 text-center'>
                                        Asset inventory
                                    </h1>
                                    <p className='text-lg font-hind mt-4 text-center'>Up to 1000 protected assets.</p>
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
                                    <h1 className='text-2xl font-montserrat font-bold '>Integrations</h1>
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
                                        Customizable alerts and easy to follow remediation instructions in case of
                                        security drifts.
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
                <div style={{ backgroundImage: 'linear-gradient(#fff, #E4EDFC)' }}>
                    <Container className='mt-8'>
                        <div className='py-12 md:py-24'>
                            <div>
                                <h2
                                    className='text-center lg:text-left mb-8 font-montserrat font-bold text-blue'
                                    css={css`
                                        font-size: 2rem;
                                    `}
                                >
                                    FAQs
                                </h2>
                            </div>
                            <div className='grid grid-cols-12 gap-x-5'>
                                <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                                    {q1(true).map((q, key) => (
                                        <div
                                            className='mx-auto mb-0 p-4 max-w-lg lg:max-w-2xl mb-4 rounded-xl relative bg-white'
                                            key={key}
                                        >
                                            <div className='flex'>
                                                <h3
                                                    className='font-bold font-hind text-lg mb-0 pl-2 leading-snug cursor-pointer select-none'
                                                    role='presentation'
                                                    tabIndex={-1}
                                                    onClick={() => setActive((s) => (s === key ? null : key))}
                                                    onKeyDown={() => {}}
                                                >
                                                    {q.question}
                                                </h3>

                                                <button
                                                    onClick={() => setActive((s) => (s === key ? null : key))}
                                                    className='rounded-full w-6 h-6 pt-px flex items-center justify-center hover:opacity-80 transition-opacity ml-auto'
                                                    tabIndex='0'
                                                    onKeyDown={() => {}}
                                                >
                                                    <img
                                                        className={classNames('transform transition-all', {
                                                            '-rotate-90': active !== key,
                                                            'rotate-270': active === key
                                                        })}
                                                        src={active === key ? collapse : expand}
                                                        alt='decoration'
                                                        width={12}
                                                        height={12}
                                                    />
                                                </button>
                                            </div>

                                            <p
                                                className={classNames('mt-4 pl-2 font-hind text-lg', {
                                                    block: active === key,
                                                    hidden: active !== key
                                                })}
                                                css={css`
                                                    color: #454545;
                                                `}
                                            >
                                                {q.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                                    {q2(true).map((q, key) => (
                                        <div
                                            className='mx-auto mb-0 p-4 max-w-lg lg:max-w-2xl mb-4 rounded-xl relative bg-white'
                                            key={key}
                                        >
                                            <div className='flex'>
                                                <h3
                                                    className='font-bold font-hind text-lg mb-0 pl-2 leading-snug cursor-pointer select-none'
                                                    role='presentation'
                                                    tabIndex={-1}
                                                    onClick={() => setActive((s) => (s === key + 3 ? null : key + 3))}
                                                    onKeyDown={() => {}}
                                                >
                                                    {q.question}
                                                </h3>

                                                <button
                                                    onClick={() => setActive((s) => (s === key + 3 ? null : key + 3))}
                                                    className='rounded-full w-6 h-6 pt-px flex items-center justify-center hover:opacity-80 transition-opacity ml-auto'
                                                    tabIndex='0'
                                                    onKeyDown={() => {}}
                                                >
                                                    <img
                                                        className={classNames('transform transition-all', {
                                                            '-rotate-90': active !== key + 3,
                                                            'rotate-270': active === key + 3
                                                        })}
                                                        src={active === key + 3 ? collapse : expand}
                                                        alt='decoration'
                                                        width={12}
                                                        height={12}
                                                    />
                                                </button>
                                            </div>

                                            <p
                                                className={classNames('mt-4 pl-2 text-lg', {
                                                    block: active === key + 3,
                                                    hidden: active !== key + 3
                                                })}
                                                css={css`
                                                    color: #454545;
                                                `}
                                            >
                                                {q.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                <Container className='mt-8'>
                    <div className='py-12'>
                        <div>
                            <h2
                                className='text-center lg:text-left mb-8 font-montserrat font-bold text-blue'
                                css={css`
                                    font-size: 2rem;
                                `}
                            >
                                Case Study
                            </h2>
                        </div>
                        <div className='grid grid-cols-12 gap-x-5 mt-4'>
                            <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 lg:mt-0 max-w-lg lg:max-w-full'>
                                <p
                                    className='font-montserrat font-bold'
                                    css={css`
                                        font-size: 1.375rem;
                                    `}
                                >
                                    Access management in Fintech
                                </p>
                                <p
                                    className='font-hind text-lg mt-2'
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
                                <p className='mt-4 text-lg font-semibold font-hind'>
                                    Cyscale is eliminating the need to ask the team for tedious configuration reports,
                                    greatly improving our visibility and helping us understand things we didn’t know.
                                </p>
                                <p className='font-hind text-lg mt-2'>
                                    <strong>Alex Cociu,</strong>
                                    <br /> Risk and Compliance Officer at Smart Fintech
                                </p>
                                <GatsbyImage
                                    alt='Smart Fintech Logo'
                                    image={data.logo.childImageSharp.gatsbyImageData}
                                />
                            </div>
                            <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 mt-20 lg:mt-0 max-w-lg lg:max-w-full'>
                                <p
                                    className='font-montserrat font-bold'
                                    css={css`
                                        font-size: 1.375rem;
                                    `}
                                >
                                    Increased productivity with automated security
                                </p>
                                <p
                                    className='font-hind text-lg mt-2'
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
                                <p className='mt-4 text-lg font-semibold font-hind'>
                                    Exceptionally helpful when doing access reviews; I’m using the platform monthly and
                                    it simply automates my work!
                                </p>
                                <p className='font-hind text-lg mt-9'>
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
                                <br /> without the enterprise-grade price tag.
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
            </Layout>
        </>
    );
};

export default SecurityForStartups;
