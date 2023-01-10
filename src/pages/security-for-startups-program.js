import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/CleanLayout';
import { Container, Row } from '../components/atoms/Containers';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import expand from '../assets/images/expand-startups.svg';
import collapse from '../assets/images/collapse-startups.svg';
import cloudIcon from '../assets/images/cloud-icon.svg';
import ScrollButtonStartups from '../components/ScrollButton/ScrollButtonStartups';
import { animateScroll } from 'react-scroll';
import ReactDOMServer from 'react-dom/server';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../components/Loader/LoaderContainer/LoaderContainer';

const q1 = () => {
    return [
        {
            question: 'What is Cyscale for Startups?',
            answer: (
                <p className='mb-4'>
                    It is a program designed for fast-growing startups. The purpose is to raise awareness about the
                    importance of cloud security and support early-stage companies that cannot afford the purchase of
                    security tools.
                </p>
            )
        },
        {
            question: 'What are the eligibility requirements?',
            answer: (
                <>
                    <p>
                        If the startup has raised under $2 million in funding, it is eligible for the 6 months free + 6
                        months at a discounted price (75% discount) program.
                    </p>
                    <p className='mb-4'>In addition, the startup should not be older than five years.</p>
                </>
            )
        },
        {
            question: 'What if you raised more than $2 million in funding?',
            answer: (
                <>
                    <p className='mb-4'>
                        In this case, you will be eligible for a contract of 3 months free + 9 months at a discounted
                        price (75% discount).
                    </p>
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
                    <p className='mb-4'>You can submit your application directly on our webpage.</p>
                </>
            )
        },
        {
            question: 'What is the duration of the contract?',
            answer: (
                <p className='mb-4'>
                    The{' '}
                    {useReactComponent ? (
                        <Link className='underline' to='/security-for-startups-program'>
                            Cyscale for Startups{' '}
                        </Link>
                    ) : (
                        <a href='https://cyscale.com/security-for-startups-program'>Cyscale for Startups</a>
                    )}
                    Program contract has an annual duration. (6 months free + 6 months at a discounted price)
                </p>
            )
        },
        {
            question: 'Can I terminate the contract earlier than one year?',
            answer: <p className='mb-4'>Yes, you can. You need to contact our team about this.</p>
        }
    ];
};

const SecurityForStartupsProgram = ({ location }) => {
    const [active, setActive] = useState(-1);

    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query StartupsQuery {
            dashboard: file(relativePath: { eq: "dashboard-startups.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            assetInventory: file(relativePath: { eq: "asset-inventory.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            cardIntegrations: file(relativePath: { eq: "card-integrations.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            cardMisconfiguration: file(relativePath: { eq: "card-misconfiguration.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            cardStandards: file(relativePath: { eq: "card-standards.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId: '65a11c92-0efd-489b-b2e7-671d77b43bc7',
                    target: '#startups-form'
                });
            }
        }, 600);
    }, []);

    return (
        <>
            <Layout location={location} pageName='Startups' title='Startups Program - Cyscale' description='Startups Program'>
                <Helmet>
                    <script charSet='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
                    <script type='application/ld+json' data-rh='true'>{`{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": ${JSON.stringify(ReactDOMServer.renderToStaticMarkup(q1()[0].answer))}
                                },
                                "name": "${q1()[0].question}"
                            },
                            {
                                "@type": "Question",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": ${JSON.stringify(ReactDOMServer.renderToStaticMarkup(q1()[1].answer))}
                                },
                                "name": "${q1()[1].question}"
                            },
                            {
                                "@type": "Question",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": ${JSON.stringify(ReactDOMServer.renderToStaticMarkup(q1()[2].answer))}
                                },
                                "name": "${q1()[2].question}"
                            },
                            {
                                "@type": "Question",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": ${JSON.stringify(ReactDOMServer.renderToStaticMarkup(q2(false)[0].answer))}
                                },
                                "name": "${q2(false)[0].question}"
                            },
                            {
                                "@type": "Question",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": ${JSON.stringify(ReactDOMServer.renderToStaticMarkup(q2(false)[1].answer))}
                                },
                                "name": "${q2(false)[1].question}"
                            },
                            {
                                "@type": "Question",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": ${JSON.stringify(ReactDOMServer.renderToStaticMarkup(q2(false)[2].answer))}
                                },
                                "name": "${q2(false)[2].question}"
                            }
                        ]
                    }`}</script>
                </Helmet>
                <div className='bg-pouring pt-8'>
                    <Container>
                        <div className='py-24 lg:pt-32 lg:pb-16'>
                            <Row>
                                <div className='col-span-12 lg:col-span-6 '>
                                    <div className='lg:mt-16 pt-4 max-w-lg mx-auto lg:mx-0'>
                                        <h1 className='text-center sm:text-left text-blue text-4xl lg:text-5xl leading-normal mb-16 font-montserrat'>
                                            <strong>Cyscale for Startups</strong> <br className='hidden lg:block' />{' '}
                                            Program
                                        </h1>
                                        <h1 className='text-center sm:text-left text-2xl sm:text-3xl leading-normal mb-8'>
                                            <strong>
                                                Build and maintain a strong
                                                <br />
                                                Security Program from the start{' '}
                                            </strong>
                                        </h1>
                                        <p className='text-center sm:text-left text-base lg:text-lg mb-8 leading-relaxed text-gray'>
                                            This is a program <strong>designed for fast-growing Startups</strong>. The
                                            purpose is to raise awareness about the importance of security and
                                            compliance in the cloud.
                                        </p>
                                        <p className='text-center sm:text-left text-base lg:text-lg mb-2 leading-relaxed text-gray'>
                                            Let us help you grow and enjoy success with a well-implemented security
                                            posture!
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
                                        <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0'>
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
                        <div className='grid grid-cols-12' id='start'>
                            <div className='col-span-12'>
                                <div className='mx-auto lg:mx-0 max-w-lg '>
                                    <h2 className='text-center sm:text-left text-2xl leading-normal mb-4 font-montserrat'>
                                        <strong>Qualification</strong> criteria
                                    </h2>
                                    <h1 className='text-center sm:text-left text-base leading-normal text-grey2 mb-8'>
                                        Your startup was founded less than five years ago and has raised:
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-x-5'>
                            <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                                <div className='mt-6 lg:mt-0 rounded-xl  max-w-lg lg:max-w-2xl mx-auto relative gradientBG h-64 flex flex-col justify-center items-center'>
                                    <h3 className='text-white text-3xl sm:text-4xl mb-6 font-semibold'>
                                        Up to $2M in funding
                                    </h3>
                                    <p className='text-white text-xl sm:text-2xl mb-1 font-semibold'>6 months FREE</p>
                                    <p className='text-white mb-1 text-7xl font-semibold'>+</p>
                                    <p className='text-white text-xl sm:text-2xl font-semibold'>
                                        75% off for the next 6 months
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                                <div
                                    className='mt-6 lg:mt-0 rounded-xl  max-w-lg lg:max-w-2xl mx-auto relative h-64 flex flex-col justify-center items-center'
                                    style={{ backgroundImage: 'linear-gradient(#E4EDFC,#f9f9f9)' }}
                                >
                                    <h3 className='text-3xl sm:text-4xl mb-6 font-semibold'>Over $2M in funding</h3>
                                    <p className='text-xl sm:text-2xl mb-1 font-semibold'>3 months FREE</p>
                                    <p className='mb-1 text-7xl font-semibold'>+</p>
                                    <p className='text-xl sm:text-2xl font-semibold'>75% off for the next 9 months</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className='pt-2 pb-0 sm:pb-24'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12'>
                                <div className='mx-auto lg:mx-0 max-w-lg '>
                                    <h2 className='text-center sm:text-left text-3xl lg:text-2xl leading-normal mb-2 sm:mb-16 font-montserrat'>
                                        Advantages
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-x-5'>
                            <div className='col-span-12 lg:col-span-6'>
                                <div
                                    className='mt-6 lg:mt-0 rounded-xl pt-12 px-12 max-w-lg lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-advantages'
                                    style={{ backgroundImage: 'linear-gradient(#E4EDFC,#fff)' }}
                                >
                                    <h1 className='text-2xl font-medium'>
                                        Access the entire Cyscale Cloud Platform with <br /> Powerful Analytics &
                                        Dashboards
                                    </h1>
                                    <p className='text-xl mt-4'>Up to 1000 protected assets.</p>
                                    <GatsbyImage
                                        image={data.dashboard.childImageSharp.gatsbyImageData}
                                        alt='Dashboard'
                                    />
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-3'>
                                <div
                                    className='mt-6 lg:mt-0 rounded-xl pt-12 px-8 lg:px-2 max-w-lg lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-advantages h-asset-inventory sm:mb-6 md:mb-6 lg:mb-0'
                                    style={{ backgroundImage: 'linear-gradient(#E4EDFC,#fff)' }}
                                >
                                    <h1 className='text-2xl font-medium px-4 lg:px-12 text-center sm:text-left'>
                                        Asset inventory
                                    </h1>
                                    <GatsbyImage
                                        image={data.assetInventory.childImageSharp.gatsbyImageData}
                                        alt='Asset inventory'
                                        className='mt-4 lg:mt-16'
                                    />
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-3'>
                                <div
                                    className='mt-6 lg:mt-0 rounded-xl pt-12 px-12 max-w-lg lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-advantages h-asset-inventory'
                                    style={{ backgroundImage: 'linear-gradient(#E4EDFC,#fff)' }}
                                >
                                    <h1 className='text-2xl font-medium'>Integrations</h1>
                                    <p className='text-xl mt-4'>AWS, GCP, Azure and Alibaba Cloud</p>
                                    <GatsbyImage
                                        image={data.cardIntegrations.childImageSharp.gatsbyImageData}
                                        alt='Integrations'
                                        className='mt-8 lg:mt-16'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-x-5 mt-24'>
                            <div className='col-span-12 lg:col-span-3'>
                                <div className='mt-6 lg:mt-0 rounded-xl pt-8 pb-60 sm:pb-0 px-8 max-w-lg lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-64 bg-black h-misconfiguration'>
                                    <h1 className='text-2xl text-white font-medium'>Misconfiguration detection</h1>
                                    <GatsbyImage
                                        image={data.cardMisconfiguration.childImageSharp.gatsbyImageData}
                                        alt='Misconfiguration'
                                        className='mt-2'
                                    />
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-3'>
                                <div
                                    className='mt-6 lg:mt-0 rounded-xl pt-8 px-8 max-w-lg lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-64'
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(to bottom, #e7474b, #ee3d53, #f3305b, #f92065, #fd0070)'
                                    }}
                                >
                                    <h1 className='text-2xl text-white font-medium'>
                                        Alerts and remediation instructions
                                    </h1>
                                    <p className='text-lg text-white mt-1'>in case of security drifts</p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div
                                    className='mt-6 lg:mt-0 rounded-xl pt-8 max-w-lg lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-64'
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(to bottom, #4a85eb, #326fe3, #1b58d8, #073fcc, #0623be)'
                                    }}
                                >
                                    <h1 className='text-2xl text-white font-medium px-8'>
                                        Built-in frameworks for ISO27001, <br /> PCI-DSS, SOC2, GDPR, and others
                                    </h1>
                                    <GatsbyImage
                                        image={data.cardStandards.childImageSharp.gatsbyImageData}
                                        alt='Standards'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <div style={{ backgroundImage: 'linear-gradient(#fff, #E4EDFC)' }}>
                    <Container className='mt-8'>
                        <div className='py-12 md:py-24'>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-12'>
                                    <div className='mx-auto lg:mx-0 max-w-lg '>
                                        <h2 className='text-center sm:text-left text-2xl leading-normal mb-4 font-montserrat'>FAQ</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-12 gap-x-5'>
                                <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                                    {q1().map((q, key) => (
                                        <div
                                            className='mx-auto mb-0 p-4 max-w-lg lg:max-w-2xl mb-4 rounded-xl relative bg-white'
                                            key={key}
                                        >
                                            <div className='flex'>
                                                <h3
                                                    className='font-medium  text-base sm:text-lg mb-0 pl-2 leading-snug cursor-pointer select-none'
                                                    role="presentation"
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
                                                className={classNames('mt-4 pl-2', {
                                                    block: active === key,
                                                    hidden: active !== key
                                                })}
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
                                                    className='font-medium  text-base sm:text-lg mb-0 pl-2 leading-snug cursor-pointer select-none'
                                                    role="presentation"
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
                                                className={classNames('mt-4 pl-2', {
                                                    block: active === key + 3,
                                                    hidden: active !== key + 3
                                                })}
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
                <Container>
                    <div className='pt-12 pb-24 lg:pt-32 lg:pb-32'>
                        <div className='flex h-48 flex-col items-center'>
                            <img src={cloudIcon} alt='Cloud Icon' />
                            <h1 className='text-center px-2 mb-2'>
                                Do not postpone the implementation of your Security Program.
                            </h1>
                            <h1 className='text-center px-1'>
                                <strong>Let us help you now so that you can reach your potential!</strong>
                            </h1>
                            <div className='mt-6 w-auto inline-block'>
                                <button
                                    className='gradientBgBtn w-full block text-base font-medium rounded text-white uppercase text-center py-5 px-24 hover:no-underline no-underline'
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

export default SecurityForStartupsProgram;
