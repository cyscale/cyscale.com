import React from 'react';
import { Container, Row } from '../../components/atoms/Containers';
import { graphql, useStaticQuery } from 'gatsby';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import { GatsbyImage } from 'gatsby-plugin-image';
import AnimatedNavbarLayout from '../../components/campaigns/AnimatedNavbarLayout';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import { css } from 'twin.macro';
import HeroImage from '../../assets/images/bg-image-misconfigurations-campaigns.svg';
import { animateScroll } from 'react-scroll';
import ScrollDown from '../../components/ScrollButton/ScrollDown';
import ServiceHighlight from '../../components/campaigns/ServiceHighlight';
const customFontSize = css`
    font-size: 1.75rem;

    @media (max-width: 1024px) {
        font-size: 1.625rem;
    }
`;
const subtitle = css`
    font-size: 1.625rem;
    line-height: 2rem;
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const KubernetesSecurity = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query KubernetesCampaignQuery {
            dashboard: file(relativePath: { eq: "k8s-dashboard.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1929, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <AnimatedNavbarLayout
            formId={'b2fb2675-0f1e-458e-b7ac-6d53162b1c2f'}
            formTargetId={'#request-demo'}
            location={location}
            title={'Kubernetes Security and Compliance Platform'}
            description={
                'Protect your K8s environments with a complete Kubernetes Security Posture Management (KSPM) solution'
            }
            pageName={'KubernetesCampaign'}
            noIndex={true}
        >
            <div className='bg-zircon pb-16 sm:pb-0 pt-32 lg:pt-40 xl:pt-12 relative'>
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
                                    Kubernetes Security and Compliance Platform
                                </h1>
                                <p
                                    className='text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-hind'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    Protect your K8s environments with a complete Kubernetes Security Posture Management
                                    (KSPM) and misconfiguration detection solution.
                                </p>{' '}
                                <p
                                    className='text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-hind mt-4'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    See where you have Kubernetes images with vulnerabilities and where those images are
                                    deployed
                                </p>
                                <div className='max-w-lg sm:max-w-xl mx-auto lg:mx-0'>
                                    <ServiceHighlight
                                        cssCheckMark={css`
                                            @media (max-width: 483px) {
                                                margin-top: -1.5rem;
                                            }
                                        `}
                                    >
                                        <span className='font-bold'> Always-On Monitoring</span>: Monitor your assets
                                        24/7
                                    </ServiceHighlight>
                                    <ServiceHighlight
                                        cssCheckMark={css`
                                            @media (max-width: 526px) {
                                                margin-top: -1.5rem;
                                            }
                                        `}
                                    >
                                        <span className='font-bold'>Smart Alerts</span>: Contextual alerts for
                                        actionable insights
                                    </ServiceHighlight>
                                    <ServiceHighlight
                                        cssCheckMark={css`
                                            @media (max-width: 639px) {
                                                margin-top: -1.5rem;
                                            }
                                        `}
                                    >
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
                    <div className='lg:mt-9'>
                        <ScrollDown />
                    </div>
                </Container>
                <div className='absolute bottom-0 right-0 '>
                    <div className='hidden lg:block lg:max-w-2xl'>
                        <img src={HeroImage} alt='' />
                    </div>
                </div>
            </div>
            <div className='pt-24 pb-24 lg:pt-32 lg:pb-0 hidden lg:block'>
                <Container>
                    <h2 className='text-center text-blue font-montserrat font-bold' css={customFontSize}>
                        Take the 2 minute tour
                    </h2>
                    <div className='max-w-xl lg:max-w-5xl mx-auto pt-12 relative mt-12'>
                        <div className='lg:h-[607px] w-full'>
                            <iframe
                                className='absolute top-0 left-0 w-full h-full'
                                src='https://app.storylane.io/demo/hucyibzvndsj'
                                name='sl-embed'
                                allow='fullscreen; camera; microphone'
                                style={{
                                    border: 'none'
                                }}
                                title='Cyscale'
                            ></iframe>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='pb-8 pt-16 lg:pt-32 lg:pb-16' id='start'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.dashboard.childImageSharp.gatsbyImageData}
                                    alt='Kubernetes Dashboard'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pb-2 font-hind font-bold'>
                                    Streamline posture management with Cyscale’s Kubernetes security platform. Get
                                    visibility into your K8s security and achieve continuous compliance.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Cloud-native cybersecurity across workloads, with Azure Kubernetes Service (AKS),
                                    Amazon Elastic Kubernetes Service (EKS), and Google Kubernetes Engine Service (GKE)
                                    management and monitoring.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Security controls for Kubernetes clusters, pods, containers and other services to
                                    ensure comprehensive misconfiguration coverage.
                                </p>{' '}
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Map components from your Kubernetes cluster to the actual infrastructure on which it
                                    is running. See where you have Kubernetes images with vulnerabilities and where
                                    those images are deployed.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Ensure least privilege access in Kubernetes with Identity and Access Management
                                    (IAM) assessments to continuously reduce the risk of over-provisioned roles and
                                    service accounts. Audit-ready PDF report with Asset Inventory across your Kubernetes
                                    estate.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 my-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.dashboard.childImageSharp.gatsbyImageData}
                                    alt='Kubernetes Dashboard'
                                />
                            </div>
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
                            <h2 className='font-bold text-primary border-title-partly font-montserrat' css={subtitle}>
                                100% Confidence with
                                <br className='hidden lg:block' /> your Cloud Compliance
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>
                                            See and respond to known Kubernetes threats
                                        </strong>
                                        <br />
                                        Find and prevent misconfigurations and threats in your Kubernetes environments,
                                        without dealing with false positives and overwhelming alerts.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Meet industry regulations</strong>
                                        <br />
                                        Protect sensitive data and comply with strict industry regulations in your
                                        organization. Cyscale automatically runs all critical compliance checks and
                                        finds data at-risk.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Built-in compliance templates</strong>
                                        <br />
                                        You can either use dozens of out-of-the-box policy templates as a basis to
                                        configure custom policies or import your own using a smart text editor.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>PCI-DSS, SOC 2, GDPR, and more</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including CIS,
                                        ISO27001, PCI-DSS, NIST, SOC2, GDPR, to help you obtain certifications.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>
                                            Dozens of out-of-the-box security controls
                                        </strong>
                                        <br />
                                        Onboard teams in 30 minutes and coordinate efforts to apply out-of-the-box
                                        security controls and a large set of policies and standards covering containers,
                                        access control, authentication, firewall configuration, permissions, network
                                        security, identity and others.
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='sm:pt-12 pb-32'>
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
        </AnimatedNavbarLayout>
    );
};

export default KubernetesSecurity;
