import React from 'react';
import { Container, Row } from '../../components/atoms/Containers';
import { graphql, useStaticQuery } from 'gatsby';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import { GatsbyImage } from 'gatsby-plugin-image';
import AnimatedNavbarLayout from '../../components/campaigns/AnimatedNavbarLayout';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';
import { css } from 'twin.macro';
import HeroImage from '../../assets/images/bg-image-misconfigurations-campaigns.svg';
import { animateScroll } from 'react-scroll';
import ScrollDown from '../../components/ScrollButton/ScrollDown';
import ServiceHighlight from '../../components/campaigns/ServiceHighlight';
import CaseStudiesSection from '../../components/Home/CaseStudiesSection';

const subtitle = css`
    font-size: 1.625rem;
    line-height: 2rem;
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const SecureCloudQuickEasy = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query SecureCloudCampaignQuery {
            graphContainers: file(relativePath: { eq: "graph-containers.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            dashboard: file(relativePath: { eq: "dashboard-cnapp.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            continuosProtection: file(relativePath: { eq: "continuos-protection-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <AnimatedNavbarLayout
            formId={'6eecfd34-71c8-43c9-bc71-647ac0f7a9f0'}
            formTargetId={'#request-demo'}
            location={location}
            title={'Cyscale | Simple Cloud Security. Instant peace of mind.'}
            description={
                'Contextual analysis of cloud misconfigurations, vulnerabilities, access, and data, providing an intuitive and actionable assessment of risk.'
            }
            pageName={'SecureCloudCampaign'}
            noIndex={true}
        >
            <div className='bg-zircon pb-16 sm:pb-0 pt-32 lg:pt-40 xl:pt-12 relative'>
                <Container>
                    <Row>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='lg:mt-4 pt-2 md:pt-8 lg:pt-4 max-w-2xl mx-auto lg:mx-0'>
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
                                    Secure your
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
                                        cloud
                                    </span>
                                    <br />
                                    quickly and easily
                                </h1>
                                <p
                                    className='text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-hind'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    Get contextual analysis of cloud misconfigurations, vulnerabilities, access, and
                                    data for an accurate and actionable assessment of risk.
                                </p>
                                <div className='max-w-lg sm:max-w-xl mx-auto lg:mx-0'>
                                    <p className='font-hind text-base mt-8 text-center lg:text-left font-bold'>
                                        Get a demo and see Cyscale in action:
                                    </p>
                                    <ServiceHighlight>
                                        <span className='font-bold'>Automated visibility of cloud inventory</span>:
                                        Monitor assets 24/7
                                    </ServiceHighlight>
                                    <ServiceHighlight>
                                        <span className='font-bold'>Smart Alerts</span>: Contextual alerts for
                                        actionable insights
                                    </ServiceHighlight>
                                    <ServiceHighlight>
                                        <span className='font-bold'>Quick Remediation</span>: Step-by-step guides to
                                        instant fixes
                                    </ServiceHighlight>
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
                                {loadingForm && <LoaderContainer minHeight={310} />}
                                <div
                                    style={{ minHeight: 310 }}
                                    id='request-demo'
                                    className={classnames('pb-4', { hidden: loadingForm })}
                                />
                            </div>
                        </div>
                    </Row>
                    <ScrollDown />
                </Container>
                <div className='absolute bottom-0 xl:top-0 right-0 '>
                    <div className='hidden lg:block lg:max-w-2xl'>
                        <img src={HeroImage} alt='' />
                    </div>
                </div>
            </div>
            <Container className='mt-0 md:mt-12 lg:mt-0'>
                <div className='pb-8 lg:pt-32 lg:pb-16' id='start'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.graphContainers.childImageSharp.gatsbyImageData}
                                    alt='Graph and screenshots from cloud security platform'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2 lg:mt-12'
                                    css={subtitle}
                                >
                                    The 20% of most important fixes
                                    <br className='hidden sm:block lg:hidden' /> that will reduce 80% of your risk
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Cloud security shouldn't hold you back. If you’re purchasing your first cloud
                                    security solution or you’ve outgrown tools from AWS, Azure, or Google Cloud, Cyscale
                                    reduces the noise to keep you focused on what's urgent.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Get peace of mind that your assets are protected.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 my-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.graphContainers.childImageSharp.gatsbyImageData}
                                    alt='Graph and screenshots from cloud security platform'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pb-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2 lg:mt-6'
                                    css={subtitle}
                                >
                                    Achieve true cloud-native
                                    <br className='hidden sm:block lg:hidden' /> transformation with CNAPP
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Get maximum cloud native security with robust Cloud-Native Application Protection
                                    (CNAPP). Protect your entire stack, VMs (virtual machines), containers, and
                                    serverless, on any cloud environment and confidently accelerate innovation.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.dashboard.childImageSharp.gatsbyImageData}
                                    alt='Dashboard view'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-8 lg:pt-16 lg:pb-32'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.continuosProtection.childImageSharp.gatsbyImageData}
                                    alt='Screenshots from cloud security platform'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2 lg:mt-12'
                                    css={subtitle}
                                >
                                    Identify, prioritize, and fix
                                    <br className='hidden sm:block lg:hidden' /> misconfigurations and vulnerabilities
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Continuous and automated monitoring of your cloud environments. Each cloud asset is
                                    a node in the Security Knowledge Graph™ so it's easy to see how it interacts with
                                    other entities, enabling you to identify issues in a much richer context.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Don't waste time chasing false positives or getting overwhelmed by rigid and complex
                                    tools. Cyscale guides you through the remediation process for each risk so you can
                                    quickly solve misconfigurations and vulnerabilities leading to compliance
                                    violations.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 my-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.continuosProtection.childImageSharp.gatsbyImageData}
                                    alt='Screenshots from cloud security platform'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <CaseStudiesSection
                subtitle={''}
                disableAnimation={true}
                backgroundColor={`linear-gradient(0deg, #fff 7.02%, #e4edfc 100%), #e4edfc`}
            />
            <Container>
                <div className='md:pt-12 pb-32'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' loading='lazy' />
                        <h2 className='text-center px-2 mt-4 mb-2 font-montserrat font-bold text-lg lg:text-2xl'>
                            Simple and effective cloud security
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
        </AnimatedNavbarLayout>
    );
};

export default SecureCloudQuickEasy;
