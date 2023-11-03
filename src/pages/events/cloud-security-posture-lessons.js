import React, { useEffect } from 'react';
import Layout from '../../components/layout/CleanLayout';
import { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import { Helmet } from 'react-helmet';
import { Container, Row } from '../../components/atoms/Containers';
import { heroTitleFontSize } from '../../assets/css/styles';
import CalendarIcon from '../../assets/images/calendar-icon-webinar.svg';
import LocationIcon from '../../assets/images/location-icon-webinar.svg';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';
import classnames from 'classnames';

const CloudSecurityPostureLessons = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query Webinar {
            heroImage: file(relativePath: { eq: "webinar-bg-image.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            andrei: file(relativePath: { eq: "andrei-s-webinar.jpeg" }) {
                childImageSharp {
                    gatsbyImageData(width: 80, layout: CONSTRAINED)
                }
            }
        }
    `);

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms?.create({
                    portalId: '5413427',
                    formId: '8fbb1e17-23c0-40da-9540-c4be82ea0ae3',
                    target: '#register-form'
                });
            }
        }, 600);
    }, []);

    return (
        <Layout
            location={location}
            pageName='Webinar'
            title='Improving Your Cloud Security Posture: Lessons for Startups | Webinar'
            description={`With lessons from 150 orgs on identity management, compliance, container security, and safeguarding data, with actionable takeaways.`}
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /events/cloud-security-posture-lessons
            </div>
            <div className='hidden' data-title>
                Improving Your Cloud Security Posture: Lessons for Startups | Webinar
            </div>
            <div className='hidden' data-description>
                With lessons from 150 orgs on identity management, compliance, container security, and safeguarding
                data, with actionable takeaways.
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <Helmet>
                <script charSet='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <div
                className='pt-8 relative'
                css={css`
                    background-image: linear-gradient(#eeeeee, #e4edfc);
                `}
            >
                <Container>
                    <div className='py-16 md:py-24 lg:pt-24 lg:pb-16'>
                        <Row className='lg:gap-x-10'>
                            <div className='col-span-12 lg:col-span-7'>
                                <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <p
                                        className='font-montserrat text-base font-bold'
                                        css={css`
                                            color: #079bee;
                                        `}
                                    >
                                        WEBINAR
                                    </p>
                                    <h1
                                        className='text-left text-black font-montserrat font-bold mt-4'
                                        css={[
                                            heroTitleFontSize,
                                            css`
                                                line-height: normal;
                                            `
                                        ]}
                                    >
                                        Improving Your Unique <br className='hidden sm:block' /> Cloud Security Posture:
                                        <br className='hidden sm:block' /> Lessons from 150{' '}
                                        <br className='hidden lg:block' /> Organizations
                                    </h1>
                                    <div className='flex mt-4'>
                                        <img src={CalendarIcon} alt='' />
                                        <p className='font-montserrat text-base font-semibold ml-2 lg:ml-4'>
                                            October 26, 14:00 UK / 9:00 EST
                                        </p>
                                    </div>
                                    <div className='flex mt-2'>
                                        <img src={LocationIcon} alt='' />
                                        <p className='font-montserrat text-base font-semibold ml-2 lg:ml-4'>Online</p>
                                    </div>
                                    <p className='text-xs font-hind mt-2 mb-12'>
                                        The webinar will be recorded and made available on demand{' '}
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-5 lg:mt-20'>
                                <div
                                    className='rounded-xl shadow-lg py-4 pt-12 pb-0 px-8 md:px-12 mx-auto lg:mx-0 relative max-w-xl z-10'
                                    css={css`
                                        background-color: rgba(255, 255, 255, 0.6);
                                        backdrop-filter: blur(5px);
                                    `}
                                >
                                    <div className='max-w-xl'>{loadingForm && <LoaderContainer minHeight={545} />}</div>
                                    <div
                                        style={{ minHeight: 545 }}
                                        id='register-form'
                                        className={classnames('pb-4', { hidden: loadingForm })}
                                    />
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div
                                className='col-span-12 lg:col-span-7 z-10'
                                css={css`
                                    @media (min-width: 1024px) {
                                        margin-top: -300px;
                                    }
                                `}
                            >
                                <div className='max-w-xl lg:max-w-full mx-auto lg:mx-0 mt-8 lg:mt-0'>
                                    <p className='font-hind font-base mt-6'>
                                        Every company's cloud security posture is unique due to their specific cloud
                                        environment, infrastructure, and technology stack. This makes it challenging to
                                        take a one-size-fits-all approach to cloud security. We would know. In building
                                        a cloud security platform that aims to deliver context - how one thing relates
                                        to another and whether that relationship creates risk - we interviewed CTOs,
                                        CISOs, and developers at over 150 organizations of all sizes and sectors.
                                    </p>{' '}
                                    <p className='font-hind font-base'>
                                        What we discovered was that no two needs were alike. From small startups to
                                        large enterprises, from stringent regulatory environments to those focused on
                                        seamless product functionality, and from cloud-native startups to enterprises
                                        considering cloud migration options, we've seen it all.
                                    </p>
                                    <p className='font-hind font-base font-bold mt-6'>
                                        In this session, we'll explore:
                                    </p>
                                    <p className='font-hind font-base'>
                                        · Real-world scenarios, challenges, and successes
                                    </p>
                                    <p className='font-hind font-base'>
                                        · Key topics, including identity management, compliance, container security, and
                                        safeguarding your valuable data
                                    </p>
                                    <p className='font-hind font-base'>
                                        · Actionable takeaways and practical solutions that you can apply to your own
                                        cloud security journey
                                    </p>
                                    <p className='font-hind font-base mt-6'>
                                        Although this session is targeted at startups, SaaS builders, and those in the
                                        earlier stages of their cloud security initiative, we include lessons from
                                        mature companies with established strategies to help you get ahead of the game.
                                    </p>
                                    <h3
                                        className='font-montserrat font-bold mt-12'
                                        css={css`
                                            font-size: 1.375rem;
                                        `}
                                    >
                                        Speakers
                                    </h3>
                                    <div className='flex mt-4'>
                                        <GatsbyImage
                                            image={data.andrei.childImageSharp.gatsbyImageData}
                                            alt=''
                                            className='rounded-full'
                                        />
                                        <div className='ml-4 mt-1'>
                                            <p className='font-hind text-lg font-bold'>Andrei Stefanie</p>
                                            <p
                                                className='font-hind text-base'
                                                css={css`
                                                    color: #818791;
                                                `}
                                            >
                                                Cloud Security Analyst
                                                <br /> and Cloud Architect at Cyscale
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
                <div className='absolute bottom-0 right-0 '>
                    <div className='hidden lg:block lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl'>
                        <GatsbyImage image={data.heroImage.childImageSharp.gatsbyImageData} alt='' />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CloudSecurityPostureLessons;
