import React, { useEffect, useState } from 'react';
import AnimatedNavbarLayout from '../components/campaigns/AnimatedNavbarLayout';
import { css } from 'twin.macro';
import classnames from 'classnames';
import RequestDemoModal from '../components/contact/RequestDemoModal';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import LoaderContainer from '../components/Loader/LoaderContainer/LoaderContainer';
import CaseStudiesSection from '../components/Home/CaseStudiesSection';
import { Container, Row } from '../components/atoms/Containers';
import HeroImage from '../assets/images/bg-image-misconfigurations-campaigns.svg';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const ModalTest = ({ location }) => {
    const [calendarModal, setCalendarModal] = useState(false);

    const data = useStaticQuery(graphql`
        query RequestDemoQuery {
            aws: file(relativePath: { eq: "aws-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 40, layout: CONSTRAINED)
                }
            }
            azure: file(relativePath: { eq: "azure-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 40, layout: CONSTRAINED)
                }
            }
            gc: file(relativePath: { eq: "gc-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 40, layout: CONSTRAINED)
                }
            }
            alibaba: file(relativePath: { eq: "alibaba-cloud-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 40, layout: CONSTRAINED)
                }
            }
            okta: file(relativePath: { eq: "okta-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 55, layout: CONSTRAINED)
                }
            }
            googleCloud: file(relativePath: { eq: "google-cloud-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 33, layout: CONSTRAINED)
                }
            }
            azureAD: file(relativePath: { eq: "azure-ad-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 34, layout: CONSTRAINED)
                }
            }
        }
    `);

    const { loadingForm } = useHSFormLoaded();

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms?.create({
                    portalId: '5413427',
                    formId: 'c2d8e2e6-6edb-43d2-9052-350e7f00d1f6',
                    target: '#meeting-form'
                });
            }
        }, 600);
    }, []);

    return (
        <AnimatedNavbarLayout
            location={location}
            pageName='RequestDemo'
            title='See Cyscale Automated Cloud Security in Action'
            description="Cloud infrastructure security can be complex, but we can show you that it doesn't have to be!"
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /request-demo/
            </div>
            <div className='hidden' data-title>
                See Cyscale Automated Cloud Security in Action
            </div>
            <div className='hidden' data-description>
                Cloud infrastructure security can be complex, but we can show you that it doesn't have to be!
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div className='bg-zircon pt-32 lg:pt-0 pb-10 relative'>
                <Container>
                    <Row>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='lg:mt-4 pt-2 md:pt-8 lg:pt-4 max-w-2xl mx-auto lg:mx-0'>
                                <h1
                                    className='text-center lg:text-left text-blue mb-8 font-montserrat font-bold'
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
                                    Get a Demo
                                </h1>
                                <p
                                    className='text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-hind'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    We know cloud security can be complex, but if you give us a few minutes we can show
                                    you that it doesn't have to be!
                                </p>{' '}
                                <p
                                    className='text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mt-4 font-hind'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    Leave your details here and we'll get back to you today,
                                    <br className='hidden sm:block' /> or if you have a preferred time you can{' '}
                                    <span
                                        className='underline cursor-pointer text-blue'
                                        onClick={() => setCalendarModal(!calendarModal)}
                                        onKeyDown={() => {}}
                                        tabIndex='0'
                                        role='button'
                                    >
                                        book directly into our calendar
                                    </span>
                                    .
                                </p>
                                <p
                                    className='font-hind text-base mt-12 text-left sm:text-center lg:text-left'
                                    css={css`
                                        color: #747474;
                                    `}
                                >
                                    Integrations
                                </p>
                                <div className='mt-2 mx-0 sm:mx-auto lg:mx-0 max-w-sm'>
                                    <div className='flex space-x-3'>
                                        <GatsbyImage alt='' image={data.aws.childImageSharp.gatsbyImageData} />
                                        <GatsbyImage alt='' image={data.azure.childImageSharp.gatsbyImageData} />
                                        <GatsbyImage alt='' image={data.gc.childImageSharp.gatsbyImageData} />
                                        <GatsbyImage alt='' image={data.alibaba.childImageSharp.gatsbyImageData} />{' '}
                                        <GatsbyImage alt='' image={data.okta.childImageSharp.gatsbyImageData} />
                                        <GatsbyImage alt='' image={data.googleCloud.childImageSharp.gatsbyImageData} />
                                        <GatsbyImage alt='' image={data.azureAD.childImageSharp.gatsbyImageData} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6' id='apply-now'>
                            <div
                                className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 lg:pt-12 pb-0 px-8 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                css={css`
                                    background-color: rgba(255, 255, 255, 0.6);
                                    backdrop-filter: blur(5px);
                                    z-index: 1;
                                `}
                                id='form'
                            >
                                <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0 font-montserrat'>
                                    Book a live demo
                                </h2>
                                {loadingForm && <LoaderContainer minHeight={480} />}
                                <div
                                    style={{ minHeight: 480 }}
                                    id='meeting-form'
                                    className={classnames('pb-4', { hidden: loadingForm })}
                                />
                            </div>
                        </div>
                    </Row>
                </Container>
                <div className='absolute bottom-0 right-0 '>
                    <div className='hidden lg:block lg:max-w-2xl'>
                        <img src={HeroImage} alt='' />
                    </div>
                </div>
            </div>
            <CaseStudiesSection disableAnimation={true} subtitle="You’re in good company" backgroundColor={'#fff'} />
            {calendarModal && (
                <div className='w-screen h-screen fixed top-0 left-0 right-0 bottom-0' style={{ zIndex: 102 }}>
                    <div
                        className='sm:flex sm:justify-center sm:items-center'
                        css={css`
                            height: 100vh;
                            background-color: rgba(0, 0, 0, 0.5);
                            backdrop-filter: blur(10px);
                        `}
                    >
                        <RequestDemoModal setCalendarModal={setCalendarModal} calendarModal={calendarModal} />
                    </div>
                </div>
            )}
        </AnimatedNavbarLayout>
    );
};

export default ModalTest;
