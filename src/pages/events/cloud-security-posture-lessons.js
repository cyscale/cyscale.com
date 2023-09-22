import React, { useState } from 'react';
import Layout from '../../components/layout/CleanLayout';
import { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import useScrollTrigger from '../../components/scrollTrigger';
import classnames from 'classnames';
import GradientButton from '../../components/buttons/GradientButton';
import FormModal from '../../components/FormModal/FormModal';
import CalendarIcon from '../../assets/images/calendar-icon-webinar.svg';
import LocationIcon from '../../assets/images/location-icon-webinar.svg';

const ctaTransition = css`
    transition: all 0.25s ease-in-out 0s;
`;

const ctaWhitepaperTextColor = css`
    color: #474747;
`;

const downloadWhitepaperLinkColor = css`
    color: #0f26aa;
`;

const hrStyle = css`
    color: #e3e3e3;
    width: 13.5rem;
`;

const CloudSecurityPostureLessons = ({ location }) => {
    const [formModal, setFormModal] = useState(false);

    const data = useStaticQuery(graphql`
        query Webinar {
            whitepaperCover: file(relativePath: { eq: "whitepaper-cover-blog.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 111, height: 162, layout: FIXED)
                }
            }
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

    const trigger = useScrollTrigger();
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
                            <div
                                className='mt-4'
                                onClick={() => setFormModal(!formModal)}
                                onKeyDown={() => {}}
                                tabIndex='0'
                                role='button'
                            >
                                <GradientButton text='REGISTER' alignLeft={true} />
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
                    <div className='flex mt-4 mb-20'>
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
                </div>
                <div className='flex flex-col self-stretch justify-between'>
                    <div
                        className={`hidden xl:block w-72 sticky pl-10 font-montserrat pb-16  ${
                            trigger ? 'top-0' : 'top-28'
                        }`}
                        css={ctaTransition}
                    >
                        <p
                            className={classnames({ 'text-xs font-semibold uppercase': true, 'mt-4': trigger })}
                            css={ctaWhitepaperTextColor}
                        >
                            Further reading
                        </p>
                        <p className='text-lg font-bold mt-2'>
                            Cloud Compliance in
                            <br /> 2023: An In-Depth Guide
                        </p>
                        <GatsbyImage
                            alt='White paper Cover'
                            className='rounded-md mt-2 shadow-2xl'
                            image={data.whitepaperCover.childImageSharp.gatsbyImageData}
                        />

                        <p className='text-xs mt-4 font-montserrat' css={ctaWhitepaperTextColor}>
                            The whitepaper talks about ISO 27001, SOC 2, PCI-DSS, GDPR, HIPAA.
                        </p>
                        <Link
                            className='text-xs underline'
                            css={downloadWhitepaperLinkColor}
                            to={'/whitepaper/the-complete-guide-to-cloud-compliance/'}
                        >
                            Download Whitepaper
                        </Link>
                        <hr className='mt-4' css={hrStyle} />
                        <p className='text-lg font-bold mt-4'>
                            Cloud Storage <br /> Misconfigurations
                        </p>
                        <p className='text-xs mt-4 font-montserrat' css={ctaWhitepaperTextColor}>
                            Build and maintain a strong <br /> Security Program from the start.
                        </p>
                        <Link
                            className='text-xs underline'
                            css={downloadWhitepaperLinkColor}
                            to={'/whitepaper/cloud-storage-misconfigurations/'}
                        >
                            Download Whitepaper
                        </Link>
                    </div>
                </div>
            </div>
            {formModal && (
                <div className='w-screen h-screen fixed top-0 left-0 right-0 bottom-0' style={{ zIndex: 102 }}>
                    <div
                        className='sm:flex sm:justify-center sm:items-center'
                        css={css`
                            height: 100vh;
                            background-color: rgba(0, 0, 0, 0.5);
                            backdrop-filter: blur(10px);
                        `}
                    >
                        <FormModal formModal={formModal} setFormModal={setFormModal} />
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default CloudSecurityPostureLessons;
