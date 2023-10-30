import React from 'react';
import { Container, Row } from '../../components/atoms/Containers';
import { graphql, Link, useStaticQuery } from 'gatsby';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import { GatsbyImage } from 'gatsby-plugin-image';
import AnimatedNavbarLayout from '../../components/campaigns/AnimatedNavbarLayout';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';
import { css } from 'twin.macro';
import HeroImage from '../../assets/images/bg-image-misconfigurations-campaigns.svg';
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

const CloudSecurityMSSP = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query MSSPCampaignQuery {
            continuosProtection: file(relativePath: { eq: "continuos-protection-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            graph: file(relativePath: { eq: "graph-misconfiguration.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            cards: file(relativePath: { eq: "cards-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <AnimatedNavbarLayout
            formId={'9fa1b442-4540-4106-9e6a-3c1ad06ec295'}
            formTargetId={'#request-demo'}
            location={location}
            title={'Cyscale | Cloud Security for MSSPs'}
            description={'Unlock new revenue streams with a comprehensive managed cloud security solution.'}
            pageName={'CampaignMSSP'}
        >
            <div className='bg-zircon pb-8 sm:pb-0 pt-32 lg:pt-40 xl:pt-12 relative'>
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
                                    Unlock new revenue streams with a managed cloud security solution
                                </h1>
                                <p
                                    className='text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-hind'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    Enhance your existing cloud services portfolio or break into the lucrative managed
                                    cloud security services market with a cloud native security platform that brings
                                    your customers’ distributed cloud assets together in one place, with real-time
                                    security assessments, policy management, and configuration management.
                                </p>
                                <p
                                    className='text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-hind'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    The Cyscale cloud security platform for Managed Security Service Providers (MSSPs)
                                    will help you accelerate time-to-value by enhancing your cloud security portfolio.
                                </p>
                                <div className='max-w-lg sm:max-w-xl mx-auto lg:mx-0'>
                                    <ServiceHighlight>
                                        <span className='font-bold'>Fully automated cloud security assessments</span>
                                    </ServiceHighlight>
                                    <ServiceHighlight>
                                        <span className='font-bold'>Fully managed cloud security services</span>
                                    </ServiceHighlight>
                                    <ServiceHighlight>
                                        <span className='font-bold'>Drive incremental revenue with remediation</span>
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
                                    Let's talk
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
                                    Always-On Monitoring:
                                    <br
                                        css={css`
                                            display: none;
                                            @media screen and (min-width: 457px) and (max-width: 1023px) {
                                                display: block;
                                            }
                                        `}
                                    />{' '}
                                    Monitor customer assets 24/7
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Fully automated security assessments and cloud compliance assessments are carefully
                                    tailored to provide you with comprehensive insights into your clients’
                                    infrastructure vulnerabilities.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Improve your customers’ cloud security posture or use the insights to deliver
                                    auditing services.
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
            <Container>
                <div className='pb-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2 lg:mt-6'
                                    css={subtitle}
                                >
                                    Smart Alerts: Contextual{' '}
                                    <br
                                        css={css`
                                            display: none;
                                            @media screen and (min-width: 450px) and (max-width: 1023px) {
                                                display: block;
                                            }
                                        `}
                                    />{' '}
                                    <br className='hidden lg:block' />
                                    alerts for actionable insights
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Easily aggregate actionable security insights for complex multi cloud environments
                                    on behalf of dozens or hundreds of customers. Reduce click fatigue with a single,
                                    intuitive dashboard.
                                </p>
                                <p className='leading-normal text-base text-gray font-hind'>
                                    Expand your security portfolio or add cloud security to your existing managed cloud
                                    offering.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.cards.childImageSharp.gatsbyImageData}
                                    alt='Screenshots from cloud security platform'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pb-12 lg:pt-16 lg:pb-32'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.graph.childImageSharp.gatsbyImageData}
                                    alt='Graph with alert and control details'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2 lg:mt-6'
                                    css={subtitle}
                                >
                                    Quick Remediation:
                                    <br /> Step-by-step guides
                                    <br /> to instant fixes
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Your expert team of security professionals can continuously and automatically
                                    monitor clients’ cloud infrastructure, identify damaging misconfigurations in
                                    real-time, and ensure their sensitive data remains secure.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    These insights can be monetized with your own remediation services.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 my-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.graph.childImageSharp.gatsbyImageData}
                                    alt='Graph with alert and control details'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>{' '}
            <Container>
                <div className='md:pt-12 pb-48 sm:pb-32'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' loading='lazy' />
                        <h2 className='text-center px-2 mt-4 mb-2 font-montserrat font-bold text-lg lg:text-2xl'>
                            The path to profitable Cloud Security-as-a-Service solutions is through a managed service
                            solution. Cyscale is a true outcome-based solution that enables you to standardize what you
                            do in terms of cloud security to become scalable, repeatable, and profitable.
                        </h2>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='md:pt-12 pb-32'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' loading='lazy' />
                        <h2 className='text-center px-2 mt-4 mb-2 font-montserrat font-bold text-lg lg:text-2xl'>
                            Download our MSSP cloud security data sheet
                        </h2>
                        <div className='mt-10 w-auto inline-block'>
                            <Link
                                to='/resources/empowering-mssps.pdf'
                                css={css`
                                    padding: 0.625rem 2.5rem;
                                `}
                                className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind cursor-pointer'
                            >
                                DOWNLOAD
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
            <CaseStudiesSection
                subtitle={''}
                disableAnimation={true}
                backgroundColor={`linear-gradient(0deg, #fff 7.02%, #e4edfc 100%), #e4edfc`}
            />
        </AnimatedNavbarLayout>
    );
};

export default CloudSecurityMSSP;
