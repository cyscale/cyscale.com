import React, { useEffect } from 'react';
import Layout from '../../components/layout/CleanLayout';
import { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import CalendarIcon from '../../assets/images/calendar-icon-webinar.svg';
import LocationIcon from '../../assets/images/location-icon-webinar.svg';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import { Helmet } from 'react-helmet';
import { Element, Link as ScrollLink } from 'react-scroll';
import classnames from 'classnames';
import FurtherReading from '../../components/landing-pages/FurtherReading';

const CloudSecurityPostureLessons = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query Webinar {
            cover: file(relativePath: { eq: "webinar-cover.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
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
                /events/cloud-security-posture-lessons/
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
            <div className='container max-w-7xl pt-28 sm:pt-32 mx-auto xl:flex xl:pl-12 xl:pr-16'>
                <div className='max-w-4xl mx-auto xl:mx-0 px-8'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 lg:col-span-6'>
                            <p
                                className='font-montserrat font-bold text-sm'
                                css={css`
                                    color: #38aff1;
                                `}
                            >
                                WEBINAR
                            </p>
                            <h1
                                className='font-montserrat font-bold mt-2 text-left'
                                css={css`
                                    font-size: 1.5rem;
                                    @media screen and (min-width: 1024px) {
                                        font-size: 1.75rem;
                                    }
                                `}
                            >
                                Improving Your Unique
                                <br className='hidden lg:block' /> Cloud Security Posture:
                                <br className='hidden lg:block' /> Lessons from 150
                                <br className='hidden lg:block' /> Organizations
                            </h1>
                            <div className='flex mt-4'>
                                <img src={CalendarIcon} alt='' />
                                <p className='font-montserrat text-base font-semibold ml-2'>
                                    October 26, 14:00 UK / 9:00 EST
                                </p>
                            </div>
                            <div className='flex mt-2'>
                                <img src={LocationIcon} alt='' />
                                <p className='font-montserrat text-base font-semibold ml-2'>Online</p>
                            </div>
                            <p className='text-xs font-hind mt-2'>
                                The webinar will be recorded and made available on demand{' '}
                            </p>
                            <div className='mt-4'>
                                <ScrollLink
                                    to='form-register'
                                    smooth={true}
                                    duration={500}
                                    className='bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] py-3 px-7 rounded-md text-white text-sm font-bold cursor-pointer'
                                    css={css`
                                        background-color: #d8deff;
                                    `}
                                >
                                    REGISTER
                                </ScrollLink>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <GatsbyImage
                                image={data.cover.childImageSharp.gatsbyImageData}
                                alt='Cover'
                                className='rounded-md'
                            />
                        </div>
                    </div>
                    <p className='font-hind font-base mt-6'>
                        Every company's cloud security posture is unique due to their specific cloud environment,
                        infrastructure, and technology stack. This makes it challenging to take a one-size-fits-all
                        approach to cloud security. We would know. In building a cloud security platform that aims to
                        deliver context - how one thing relates to another and whether that relationship creates risk -
                        we interviewed CTOs, CISOs, and developers at over 150 organizations of all sizes and sectors.
                        What we discovered was that no two needs were alike. From small startups to large enterprises,
                        from stringent regulatory environments to those focused on seamless product functionality, and
                        from cloud-native startups to enterprises considering cloud migration options, we've seen it
                        all.
                    </p>
                    <p className='font-hind font-base font-bold mt-6'>In this session, we'll explore:</p>
                    <p className='font-hind font-base'>· Real-world scenarios, challenges, and successes</p>
                    <p className='font-hind font-base'>
                        · Key topics, including identity management, compliance, container security, and safeguarding
                        your valuable data
                    </p>
                    <p className='font-hind font-base'>
                        · Actionable takeaways and practical solutions that you can apply to your own cloud security
                        journey
                    </p>
                    <p className='font-hind font-base mt-6'>
                        Although this session is targeted at startups, SaaS builders, and those in the earlier stages of
                        their cloud security initiative, we include lessons from mature companies with established
                        strategies to help you get ahead of the game.
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
                                <br /> and Cloud Engineer at Cyscale
                            </p>
                        </div>
                    </div>
                    <Element name='form-register' />
                    <div className='mt-12 mb-20'>
                        <div
                            className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 pt-12 pb-0 px-8 md:px-12 relative max-w-xl'
                            css={css`
                                background-color: #f8fbff;
                            `}
                        >
                            {loadingForm && <LoaderContainer minHeight={485} />}
                            <div
                                style={{ minHeight: 485 }}
                                id='register-form'
                                className={classnames('pb-4', { hidden: loadingForm })}
                                css={css`
                                    background-color: #f8fbff;
                                `}
                            />
                        </div>
                    </div>
                </div>
                <FurtherReading />
            </div>
        </Layout>
    );
};

export default CloudSecurityPostureLessons;
