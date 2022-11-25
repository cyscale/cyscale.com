import React from 'react';
import { Container, Row } from '../../components/atoms/Containers';
import { graphql, useStaticQuery } from 'gatsby';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import ScrollButtonStartups from '../../components/ScrollButton/ScrollButtonStartups';
import { GatsbyImage } from 'gatsby-plugin-image';
import { animateScroll } from 'react-scroll';
import AnimatedNavbarLayout from '../../components/campaigns/AnimatedNavbarLayout';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';

const AWSCloudSolution = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query AWSCloudSolutionCampaignQuery {
            dashboard: file(relativePath: { eq: "dashboard-aws-campaigns.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            connectorsAlerts: file(relativePath: { eq: "connectors-alerts-aws-campaings.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            connectors: file(relativePath: { eq: "connectors-aws-campaigns.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <AnimatedNavbarLayout
            formId={'e2610c67-1db7-4443-b551-784a12a3da64'}
            formTargetId={'#request-aws-demo'}
            location={location}
            title={'AWS Cloud Security and compliance'}
            description={'Map, secure, and monitor your AWS assets in minutes.'}
            pageName='AWSCloudSecurityCampaign'
        >
            <div className='bg-hero-campaigns-iam-security pb-8 pt-32 lg:pt-40 xl:pt-12'>
                <Container>
                    <div>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 '>
                                <div className='lg:mt-4 pt-2 md:pt-8 lg:pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1 className='text-center sm:text-left text-blue text-3xl md:text-4xl lg:text-5xl leading-normal mb-8 montserrat-font'>
                                        <strong> AWS Cloud Security</strong> and Compliance
                                    </h1>
                                    <p className='text-center sm:text-left text-base lg:text-lg leading-relaxed text-gray font-semibold'>
                                        Map, secure, and monitor your AWS assets in minutes
                                    </p>
                                    <ul className='list-disc pl-8 mb-8'>
                                        <li className='text-base lg:text-lg text-gray'>
                                            Have a simple view of all your assets across all regions and accounts
                                        </li>
                                        <li className='text-base lg:text-lg text-gray'>
                                            Detect, understand the impact of, and remediate infrastructure
                                            misconfigurations
                                        </li>
                                        <li className='text-base lg:text-lg text-gray'>
                                            Stay compliant with CIS benchmarks, industry standards, and your internal
                                            policies{' '}
                                        </li>
                                    </ul>
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
                                    <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0 montserrat-font'>
                                        Request a live demo
                                    </h2>
                                    {loadingForm && <LoaderContainer minHeight={450} />}
                                    <div
                                        style={{ minHeight: 450 }}
                                        id='request-aws-demo'
                                        className={classnames('pb-4', { hidden: loadingForm })}
                                    />
                                </div>
                            </div>
                        </Row>
                    </div>
                    <div className='py-16 hidden sm:block '>
                        <ScrollButtonStartups to='start' />
                    </div>
                </Container>
            </div>
            <Container className='mt-0 md:mt-12 lg:mt-0'>
                <div className='pb-8 lg:pt-32 lg:pb-16' id='start'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.dashboard.childImageSharp.gatsbyImageData}
                                    alt='Dashboard view with AWS information'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                    Prevent misconfigurations & mistakes
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                    Cyscale automatically detects and reports violations of security controls and
                                    compliance risks.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    It's much easier to keep your cloud assets in check with ongoing change monitoring
                                    that bridges cloud providers.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Single out misconfigured services and see how failed security controls impact
                                    compliance from a single, unified view. Plus, you get reliable remediation
                                    guidelines in the same place.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.dashboard.childImageSharp.gatsbyImageData}
                                    alt='Dashboard view with AWS information'
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
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm'>
                                <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                    Cut through
                                    <br /> the noise
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                    Get relevant alerts when your cloud assets drift away from established security and
                                    compliance standards.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Make Cyscale your single source of truth for Cloud Security Posture Management
                                    (CSPM) and never miss an important security event.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Move beyond bulky, list-based management. Cyscale's Security Knowledge Graph™ makes
                                    precise correlations between all your cloud assets and data repositories to
                                    automatically pinpoint critical security improvements.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.connectorsAlerts.childImageSharp.gatsbyImageData}
                                    alt='Connectors view with AWS alerts'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.connectors.childImageSharp.gatsbyImageData}
                                    alt='Connectors view with AWS compliance information'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                    Automate compliance checks
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                    Use Cyscale for governance automation across cloud providers and internal teams to
                                    ensure consistent security and compliance.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    We keep your clouds under continuous assessment and provide in-app security
                                    consultancy so you make the most of your time and effort.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Coming soon: create custom Controls that tap into our Security Knowledge Graph™ and
                                    automate the security and compliance checks that matter the most for your
                                    organization.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.connectors.childImageSharp.gatsbyImageData}
                                    alt='Connectors view with AWS compliance information'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-selago'>
                <Container>
                    <div className='py-24 lg:py-32'>
                        <div className='flex h-48 flex-col items-center'>
                            <img src={cloudIcon} alt='' />
                            <h1 className='text-center px-8'>Secure Your AWS Assets.</h1>
                            <div className='mt-6 w-auto inline-block'>
                                <button
                                    className='gradientBgBtn w-full block text-base font-medium rounded text-white text-center py-3 px-12 hover:no-underline no-underline'
                                    onClick={() => animateScroll.scrollToTop()}
                                >
                                    Request Live Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </AnimatedNavbarLayout>
    );
};

export default AWSCloudSolution;
