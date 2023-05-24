import React, { useState } from 'react';
import Layout from '../../components/layout/CleanLayout';
import { css } from 'twin.macro';
import { Container, Row, Section } from '../../components/atoms/Containers';
import { heroTitleFontSize } from '../../assets/css/styles';
import GradientButton from '../../components/buttons/GradientButton';
import LightDarkButton from '../../components/buttons/LightDarkButton';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import IconConfig from '../../assets/images/config-icon-cspm.svg';
import IconInfinite from '../../assets/images/infinite-icon-cspm.svg';
import IconMonitor from '../../assets/images/monitor-icon-cspm.svg';
import corner from '../../assets/images/pricing-banner-image.svg';
import Faqs from '../../components/cloud-security-posture-management/Faqs';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import birdIcon from '../../assets/images/bird-icon-cspm.svg';
import reportingIcon from '../../assets/images/reporting-icon-cspm.svg';
import onboardingIcon from '../../assets/images/onboarding-icon-cspm.svg';
import Carousel from '../../components/cloud-security-posture-management/Carousel';

const topArticles = [
    {
        text: 'CNAPP: A mix of CSPM & CWPP',
        link: '/blog/cnapp-a-mix-of-cspm-cwpp/'
    },
    {
        text: 'CSPM: A Comprehensive Guide',
        link: '/blog/cloud-security-posture-management-cspm-guide/'
    },
    {
        text: 'What to Look for in a CSPM?',
        link: '/blog/what-to-look-for-in-a-cspm/'
    },
    {
        text: (
            <>
                What is a CSPM and
                <br className='hidden lg:block' /> why should you consider using one?
            </>
        ),
        link: '/blog/cspm-visibility-compliance-security/'
    }
];

const qas = (useReactComponent) => {
    return [
        {
            question: 'What is a Cloud Security Posture Management (CSPM) tool?',
            answer: (
                <>
                    <p className='mb-4'>
                        CSPM is a group of security tools and technologies that empower security users to identify and
                        remediate risk and misconfigurations in their cloud environments.
                    </p>
                    {useReactComponent ? (
                        <Link className='underline' to='/blog/cloud-security-posture-management-cspm-guide/'>
                            Read more in our guide
                        </Link>
                    ) : (
                        <a href='https://cyscale.com/blog/cloud-security-posture-management-cspm-guide/'>
                            Read more in our guide
                        </a>
                    )}
                    .
                </>
            )
        },
        {
            question: 'What are some key capabilities of a CSPM solution?',
            answer: (
                <ul className='list-disc ml-3 pl-3'>
                    <li className='mb-4'>
                        Continuous compliance monitoring of your cloud resources, so you can identify and remediate risk
                        in areas such as storage, encryption, and permissions
                    </li>
                    <li className='mb-4'>
                        Technical security controls and visibility over IAM (Identity and Access Management)
                        configuration, to help provide risk assessment and ensure that compliance standards are met
                    </li>
                    <li className='mb-4'>
                        Easily identify risks that could compromise your cloud network across cloud providers, such as
                        GCP (Google Cloud), AWS and Microsoft Azure
                    </li>

                    <li>
                        Remediation guidance, to quickly solve misconfigurations leading to compliance violations for
                        Saas (Software as a Service), Iaas (Infrastructure as a Service) and Paas (Platform as a
                        Service)
                    </li>
                </ul>
            )
        },
        {
            question: 'What are some benefits of utilizing a CSPM tool?',
            answer: (
                <>
                    <p className='mb-4'>
                        <strong className='text-base'>
                            Visibility into your company's cloud infrastructure and security configurations.
                        </strong>
                        <br />
                        Security teams can assess posture across multiple cloud environments and accounts through a
                        centralized dashboard that can give actionable metrics.
                    </p>
                    <p className='mb-4'>
                        <strong className='text-base'>Evidence.</strong>
                        <br />
                        Violations in your cloud infrastructure are mapped to regulatory standards, security frameworks,
                        as well as internal security policies, resulting in evidence collection that enables audits.
                    </p>
                    <p className='mb-4'>
                        <strong className='text-base'>Reporting and alerting.</strong>
                        Insights on your cloud's risk posture, as well as alerts and notifications bring risk to your
                        attention, enabling investigation and in-time remediation.
                    </p>
                    <p className='mb-4'>
                        <strong className='text-base'>Automation.</strong>
                        One of the most important features of a CSPM tool. Automated remediation, helps security teams
                        reduce the time and effort required by manual remediation, at the same time enabling evidence
                        collection.
                    </p>
                    {useReactComponent ? (
                        <Link className='underline' to='/blog/cloud-security-posture-management-cspm-guide/'>
                            Read more in our guide
                        </Link>
                    ) : (
                        <a href='https://cyscale.com/blog/cloud-security-posture-management-cspm-guide/'>
                            Read more in our guide
                        </a>
                    )}
                    .
                </>
            )
        }
    ];
};

const subtitleColor = css`
    color: #079bee;
`;

const imageTextRowSubtitle = css`
    font-size: 1.75rem;
    line-height: 2rem;
`;

const titleSize = css`
    font-size: 2rem;
`;

const cartTitleSize = css`
    font-size: 1.375rem;
`;

const cardTextColor = css`
    color: #4f5765;
`;

const onHoverMarginHr = css`
    &:hover hr {
        margin-top: 0px;
    }
`;

const workflowPhaseSize = css`
    font-size: 3.75rem;
    color: #ebeced;
`;

const workflowPhaseGradient = css`
    height: 4px;
    border: none;
    background: #0f26aa;
    background: linear-gradient(90deg, #0f26aa 11.63%, #ff4a56 95.75%) 0 / 70% no-repeat;
`;

const workflowPhaseHr = css`
    border: 0;
    margin-top: 60px;
    height: 1px;
    background: #d9d9d9;
`;

const subtitleFontSize = css`
    font-size: 1.625rem;
    line-height: 2rem;
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const CSPM = ({ location }) => {
    const [autoSlide, setAutoSlide] = useState(true);

    const data = useStaticQuery(graphql`
        query anotherQuery {
            heroImage: file(relativePath: { eq: "hero-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            visibility: file(relativePath: { eq: "visibility-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            continuosProtection: file(relativePath: { eq: "continuos-protection-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            smartFintech: file(relativePath: { eq: "smart-fintech-home.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1980, layout: CONSTRAINED)
                }
            }
            alex: file(relativePath: { eq: "alex-cociu.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 70, layout: FIXED)
                }
            }
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
            cards: file(relativePath: { eq: "cards-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            standards: file(relativePath: { eq: "standards-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            complianceHistory: file(relativePath: { eq: "compliance-history-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
        }
    `);

    const slides = [
        { image: data.cards.childImageSharp.gatsbyImageData, alt: 'Screenshots from cloud security platform' },
        { image: data.standards.childImageSharp.gatsbyImageData, alt: 'Standards view' },
        {
            image: data.complianceHistory.childImageSharp.gatsbyImageData,
            alt: 'Standard view with compliance history graphic'
        }
    ];

    return (
        <Layout
            location={location}
            pageName='CSPMPage'
            title='Cloud Security Posture Management - CSPM Tool - Cyscale'
            description='Continuous visibility of multi-cloud environments to identify cloud misconfiguration vulnerabilities, ultimately securing your cloud from security risk and data breaches. Scan, monitor, and remediate across AWS, Azure, Google Cloud, Alibaba Cloud.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /products/cloud-security-posture-management/
            </div>
            <div className='hidden' data-title>
                Cloud Security Posture Management - CSPM Tool - Cyscale
            </div>
            <div className='hidden' data-description>
                Continuous visibility of multi-cloud environments to identify cloud misconfiguration vulnerabilities,
                ultimately securing your cloud from security risk and data breaches. Scan, monitor, and remediate across
                AWS, Azure, Google Cloud, Alibaba Cloud.
            </div>
            <div className='hidden' data-category>
                products
            </div>
            <div
                className='pt-8 relative'
                css={css`
                    background-image: linear-gradient(#eeeeee, #e4edfc);
                `}
            >
                <Container>
                    <div className='py-16 md:py-24 lg:pt-24 lg:pb-16'>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                                <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <p className='font-montserrat text-base font-bold mb-8' css={subtitleColor}>
                                        CSPM SOLUTION{' '}
                                    </p>
                                    <h1
                                        className='text-left text-blue leading-normal lg:leading-normal mb-16 font-montserrat font-bold'
                                        css={heroTitleFontSize}
                                    >
                                        Contextual Cloud Security Posture Management
                                    </h1>
                                    <p className='text-left text-base lg:text-lg mb-2 leading-relaxed font-hind'>
                                        Continuous visibility of multi-cloud environments to identify cloud
                                        misconfiguration vulnerabilities, ultimately securing your cloud from data
                                        breaches and leaks. Scan, monitor, and remediate across AWS, Microsoft Azure,
                                        Google Cloud, Alibaba Cloud.
                                    </p>
                                    <div className='flex mt-8 justify-start'>
                                        <Link to='/free-trial'>
                                            <GradientButton text='Start Free Trial' />
                                        </Link>
                                        <Link to='/request-demo' className='ml-4'>
                                            <LightDarkButton text={'Request Demo'} />
                                        </Link>
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
            <Container>
                <Section>
                    <div className='grid grid-cols-12 gap-4 lg:gap-0'>
                        <div
                            className='col-span-12 sm:col-span-6 lg:col-span-3 mx-0 max-w-xl lg:max-w-full group'
                            css={onHoverMarginHr}
                        >
                            <p
                                className='font-montserrat font-bold text-left sm:text-center lg:text-left'
                                css={workflowPhaseSize}
                            >
                                01
                            </p>
                            <p className='font-montserrat font-bold text-xl text-left sm:text-center lg:text-left'>
                                ONBOARDING
                            </p>
                            <div className='mt-14 group-hover:block hidden' css={workflowPhaseGradient}></div>
                            <hr css={workflowPhaseHr} />
                            <div className='mt-4 lg:pr-8'>
                                <img src={onboardingIcon} alt='' className='mx-0 sm:mx-auto lg:mx-0' />
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    Time to value: 5 minutes
                                </p>
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    Agentless deployment
                                </p>
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    No-hassle onboarding
                                </p>
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    Full map of cloud assets & security score
                                </p>
                            </div>
                        </div>
                        <div
                            className='col-span-12 sm:col-span-6 lg:col-span-3 mx-0 max-w-xl lg:max-w-full group'
                            css={onHoverMarginHr}
                        >
                            <p
                                className='font-montserrat font-bold text-left sm:text-center lg:text-left'
                                css={workflowPhaseSize}
                            >
                                02
                            </p>
                            <p className='font-montserrat font-bold text-xl text-left sm:text-center lg:text-left'>
                                CONFIGURATION
                            </p>
                            <div className='mt-14 group-hover:block hidden' css={workflowPhaseGradient}></div>
                            <hr css={workflowPhaseHr} />
                            <div className='mt-4 lg:pr-8'>
                                <img src={IconConfig} alt='' className='mx-0 sm:mx-auto lg:mx-0' />
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    Customize your setup in 60 mins
                                </p>
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    Expand cloud infrastructure securely
                                </p>
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    500+ ready to use security controls and policies
                                </p>
                            </div>
                        </div>
                        <div
                            className='col-span-12 sm:col-span-6 lg:col-span-3 mx-0 max-w-xl lg:max-w-full group'
                            css={onHoverMarginHr}
                        >
                            <p
                                className='font-montserrat font-bold text-left sm:text-center lg:text-left'
                                css={workflowPhaseSize}
                            >
                                03
                            </p>
                            <p className='font-montserrat font-bold text-xl text-left sm:text-center lg:text-left'>
                                CONTINUOUS <br className='hidden lg:block' /> MONITORING
                            </p>
                            <div
                                className='group-hover:block hidden'
                                css={[
                                    workflowPhaseGradient,
                                    css`
                                        margin-top: 28px;
                                        @media (max-width: 1024px) {
                                            margin-top: 56px;
                                        }
                                    `
                                ]}
                            ></div>
                            <hr
                                css={[
                                    workflowPhaseHr,
                                    css`
                                        margin-top: 32px;
                                        @media (max-width: 1024px) {
                                            margin-top: 60px;
                                        }
                                    `
                                ]}
                            />
                            <div className='mt-4 lg:pr-8'>
                                <img src={birdIcon} alt='' className='mx-0 sm:mx-auto lg:mx-0' />
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    Easily surface and manage cloud assets that fail security policies
                                </p>
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    In-app security consultancy & remediation steps
                                </p>
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    Onboard teams in 30 mins
                                </p>
                            </div>
                        </div>
                        <div
                            className='col-span-12 sm:col-span-6 lg:col-span-3 mx-0 max-w-xl lg:max-w-full group'
                            css={onHoverMarginHr}
                        >
                            <p
                                className='font-montserrat font-bold text-left sm:text-center lg:text-left'
                                css={workflowPhaseSize}
                            >
                                04
                            </p>
                            <p className='font-montserrat font-bold text-xl text-left sm:text-center lg:text-left'>
                                REPORTING
                            </p>
                            <div className='mt-14 group-hover:block hidden' css={workflowPhaseGradient}></div>
                            <hr css={workflowPhaseHr} />
                            <div className='mt-4 lg:pr-8'>
                                <img src={reportingIcon} alt='' className='mx-0 sm:mx-auto lg:mx-0' />
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    See compliance with regulatory frameworks and policies at a glance
                                </p>
                                <p className='font-hind text-base mt-4 sm:text-center lg:text-left'>
                                    Up to 1-year data retention Data Exports (CSV, PDF)
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>
            </Container>
            <div
                css={css`
                    background-color: #e9eef6;
                `}
            >
                <Container>
                    <Section>
                        <p className='font-montserrat font-bold text-center' css={subtitleColor}>
                            LEVERAGE THE BEST SECURITY TOOLS FOR
                            <br /> CLOUD-NATIVE APPLICATIONS
                        </p>
                        <h2 className='font-montserrat font-bold text-blue text-center mt-8' css={subtitleFontSize}>
                            Demonstrate your cybersecurity posture to auditors and
                            <br /> customers to enable the business and scale securely
                        </h2>
                        <p className='font-hind text-base text-center mt-8'>
                            A single misconfiguration can compromise your efforts with devastating impact. Use Cyscale
                            and leverage <br /> public cloud infrastructure with confidence and peace-of-mind.
                        </p>
                        <Row className='mt-8'>
                            <div className='col-span-12 lg:col-span-6 py-6 px-7 bg-white rounded-2xl mx-auto lg:mx-0 max-w-xl'>
                                <img src={IconInfinite} alt='' width={76} />
                                <h3 className='font-montserrat font-bold text-blue mt-7' css={cartTitleSize}>
                                    Automate cloud misconfiguration
                                    <br /> checks and eliminate manual efforts
                                </h3>
                                <p className='font-hind text-base mt-6' css={cardTextColor}>
                                    Cyscale provides continuous and automated detection of cloud misconfigurations
                                    across multiple cloud providers. Based on contextual analysis that uses graph
                                    technology, the platform ensures there are no blind spots in the effectiveness of
                                    your cloud security policies. Cyscale assesses impact and highlights top risks,
                                    making it easy to leverage your cloud environment with confidence.
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-6 py-6 px-7 bg-white rounded-2xl mx-auto lg:mx-0 max-w-xl lg:max-w-xl'>
                                {' '}
                                <img src={IconMonitor} alt='' width={76} />
                                <h3 className='font-montserrat font-bold text-blue mt-4' css={cartTitleSize}>
                                    Reduce tedious compliance tasks and
                                    <br /> streamline audits
                                </h3>
                                <p className='font-hind text-base mt-6' css={cardTextColor}>
                                    Compliance with industry frameworks and regulations such as ISO27001, SOC2 and
                                    PCI-DSS has never been easier. Mappings of cloud security controls to standards and
                                    policies generate compliance scores, guiding you when preparing for audits. When
                                    security posture falls behind a customizable threshold, you get notifications so
                                    that you can react quickly.
                                </p>
                            </div>
                        </Row>
                    </Section>
                </Container>
            </div>
            <Container>
                <Section>
                    <div
                        className='py-24 flex flex-col items-center rounded-2xl'
                        css={css`
                            background-image: linear-gradient(90deg, #0f26aa -1.79%, #ff4a56 165.6%);
                        `}
                    >
                        <h2 className='text-white font-hind text-base text-center'>
                            Discover the most flexible cloud security posture management
                            <br /> solution in the cloud security industry
                        </h2>

                        <Link
                            to={'/request-demo/'}
                            className='bg-white text-blue rounded-md font-bold py-2 px-8 mt-8 hover:bg-grey3'
                        >
                            Request Demo
                        </Link>
                    </div>
                </Section>
            </Container>
            <Container className='mb-16'>
                <div className='grid grid-cols-12 gap-x-5'>
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl lg:max-w-xl'>
                        <p className='font-montserrat text-base font-bold mt-0' css={subtitleColor}>
                            KEY CSPM FEATURES
                        </p>
                        <h2
                            className='text-blue font-bold font-montserrat mt-4 border-title-partly'
                            css={imageTextRowSubtitle}
                        >
                            Achieve visibility over your cloud estate to prevent security incidents
                        </h2>
                        <p className='font-hind font-bold text-xl mt-6'>
                            Effective risk assessment with no blind spots
                        </p>
                        <ul className='list-disc ml-4'>
                            <li className='font-hind text-sm mt-2'>
                                Track cloud resources with a searchable, easy to use, exportable{' '}
                                <strong>Cloud Asset Inventory.</strong> Cyscale integrates with AWS, Microsoft Azure,
                                Google Cloud, Alibaba and identity providers such as Okta, Azure AD, Google Workspaces.
                            </li>
                            <li className='font-hind text-sm mt-2'>
                                Easy cloud security posture management with <strong>powerful dashboards</strong>{' '}
                                highlighting top cloud security risks across IaaS, PaaS, identity and data. Eliminate
                                lack of visibility and make sure you're always working on what matters most.
                            </li>
                            <li className='font-hind text-sm mt-2'>
                                Dive deep into cloud configurations and enable teams to build common understanding with
                                graph-based infrastructure diagrams that contain risk information. Easily visualize{' '}
                                <strong>access to S3 buckets</strong>, misconfigured ports that provide{' '}
                                <strong>unintended internet exposure</strong>, and so on.
                            </li>
                            <li className='font-hind text-sm mt-2'>
                                Enhanced visibility for the entire cloud is complemented with custom defined views based
                                on <strong>scopes</strong>: cloud account, application, environment, end-customer, and
                                many others.
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl'>
                        <GatsbyImage
                            image={data.visibility.childImageSharp.gatsbyImageData}
                            alt='Screenshots from cloud security platform'
                            className='mt-20'
                        />
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-8 md:py-12'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0  hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.continuosProtection.childImageSharp.gatsbyImageData}
                                    alt='Screenshots from cloud security platform'
                                    className='mt-28'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat lg:mt-3'
                                    css={imageTextRowSubtitle}
                                >
                                    Harden your cloud and enable continuous protection
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='font-hind font-bold text-xl mt-6'>
                                    Drift detection reduces the risk of a data breach
                                </p>
                                <ul className='list-disc ml-4'>
                                    <li className='font-hind text-sm mt-2'>
                                        Benefit from a large <strong>library of security controls</strong> drawing from
                                        industry benchmarks such as CIS, as well as our security expertise. Cyscale
                                        controls cover cloud services including identity, storage, networking, container
                                        services, and managed Kubernetes.
                                    </li>
                                    <li className='font-hind text-sm mt-2'>
                                        Eliminate false positives with exemptions, complete with an{' '}
                                        <strong>exemption approval process</strong> and adequate reporting.
                                    </li>
                                    <li className='font-hind text-sm mt-2'>
                                        Enable productivity for team members of all skill levels through detailed{' '}
                                        <strong>remediation steps.</strong>
                                    </li>
                                    <li className='font-hind text-sm mt-2'>
                                        The Platform leverages the Security Knowledge Graph to perform{' '}
                                        <strong>contextual analysis of misconfigurations</strong>, by automatically
                                        correlating them with exploitable vulnerabilities, identities and paths to
                                        sensitive data.
                                    </li>
                                    <li className='font-hind text-sm mt-2'>
                                        React quickly to new vulnerabilities with the help of continuous monitoring and{' '}
                                        <strong>configurable alerts</strong>. Use integrations to route alerts to
                                        relevant teams, on their preferred communication channel.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mt-8 lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.continuosProtection.childImageSharp.gatsbyImageData}
                                    alt='Screenshots from cloud security platform'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className='my-16'>
                <div className='grid grid-cols-12 gap-x-5 mt-12'>
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl lg:max-w-xl'>
                        <h2
                            className='text-blue font-bold font-montserrat mt-4 border-title-partly'
                            css={imageTextRowSubtitle}
                        >
                            Automate compliance and gain back time for your team
                        </h2>
                        <p className='font-hind font-bold text-xl mt-6'>
                            Out-of-the-box actionable policies and standards
                        </p>
                        <ul className='list-disc ml-4'>
                            <li className='font-hind text-sm mt-2'>
                                Continuous compliance monitoring for industry standards and regulations such as{' '}
                                <strong>ISO27001, SOC2, PCI-DSS, GDPR, HIPAA, NIST</strong>, and many others.
                            </li>
                            <li className='font-hind text-sm mt-2'>
                                In-app policy templates such as Data Protection, Identity and Access Management,
                                Incident Response etc, and the ability to <strong>define your own</strong>.
                            </li>
                            <li className='font-hind text-sm mt-2'>Requirement-based automated evidence collection.</li>
                            <li className='font-hind text-sm mt-2'>
                                Get notified whenever policy violations occur and your compliance score falls beneath a{' '}
                                <strong>customizable threshold</strong>. This helps you prevent security risks while
                                maintaining compliance.
                            </li>
                            <li className='font-hind text-sm mt-2'>
                                Enhanced visualization with comprehensive <strong>pdf reports</strong> for auditors,
                                customers, or other stakeholders. A powerful scoping mechanism allows for{' '}
                                <stron>granular reporting</stron>.
                            </li>{' '}
                            <li className='font-hind text-sm mt-2'>
                                Look at your cloud estate through the data lens with the help of a{' '}
                                <strong>Data Security Dashboard</strong> that highlights data exposure and toxic
                                combinations of risks that jeopardize your crown jewels.
                            </li>{' '}
                            <li className='font-hind text-sm mt-2'>
                                Easily perform regular access and permissions reviews with the help of an{' '}
                                <strong>Identity Dashboard</strong> that highlights least privilege violations and other
                                security issues in IAM.
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0'>
                        <div className='max-w-xl'>
                            <Carousel autoSlide={autoSlide} setAutoSlide={setAutoSlide}>
                                {slides.map((s, index) => {
                                    return (
                                        <div
                                            className='mt-12 block'
                                            css={css`
                                                width: 100%;
                                                height: 100%;
                                            `}
                                            onMouseEnter={() => setAutoSlide(false)}
                                            onMouseLeave={() => setAutoSlide(true)}
                                        >
                                            <GatsbyImage image={s.image} alt={s.alt} key={index} />
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </Container>
            <div
                className='pt-24 pb-24 lg:pt-32 lg:pb-32'
                css={css`
                    background-color: #f5f9ff;
                `}
            >
                <Container>
                    <div className='grid grid-cols-12 gap-x-5'>
                        <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 '>
                            <Link to={'/case-studies/smart-fintech/'}>
                                <GatsbyImage
                                    image={data.smartFintech.childImageSharp.gatsbyImageData}
                                    className='max-w-xl'
                                    alt='Mobile Payment Smart Fintech'
                                />
                            </Link>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl mt-8 lg:mt-0'>
                            <p className='font-montserrat text-base font-bold mt-4' css={subtitleColor}>
                                CASE STUDY
                            </p>
                            <Link to={'/case-studies/smart-fintech/'}>
                                {' '}
                                <h2
                                    className='font-montserrat text-blue font-bold mt-2 hover:underline'
                                    css={titleSize}
                                >
                                    Smart Fintech uses Cyscale to gain IAM visibility and ensure cloud security and
                                    compliance
                                </h2>
                            </Link>
                            <p className='mt-3 text-base font-hind font-normal'>
                                “The platform helps me with IAM visibility a lot: I can understand who has access and
                                why. When a person leaves the company, I can detect if their permissions remain hanging.
                                ”
                            </p>
                            <div className='flex mt-3 px-2'>
                                <GatsbyImage image={data.alex.childImageSharp.gatsbyImageData} alt='Alex Cociu' />
                                <div className='ml-4 mt-1'>
                                    <p className='font-hind text-base font-bold'>Alex Cociu</p>
                                    <p className='font-hind text-base'>
                                        Risk and Compliance Officer at
                                        <br className='block md:hidden' /> Smart Fintech
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <Container>
                    <div className='py-8 md:py-12 lg:py-20'>
                        <div className='max-w-xl mx-auto lg:mx-0  mb-20'>
                            <h2
                                className='font-bold text-primary border-title-partly font-montserrat'
                                css={subtitleFontSize}
                            >
                                Explore other Cyscale security solutions
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <Link className='block font-hind tex-lg hover:underline' to='/products/cnapp/'>
                                        CNAPP
                                    </Link>
                                    <Link
                                        className='block font-hind tex-lg hover:underline mt-2'
                                        to='/use-cases/cloud-native-security/'
                                    >
                                        Cloud-Native Security
                                    </Link>
                                    <Link
                                        className='block font-hind tex-lg hover:underline mt-2'
                                        to='/products/security-knowledge-graph/'
                                    >
                                        Security Knowledge Graph
                                    </Link>
                                    <Link
                                        className='block font-hind tex-lg hover:underline mt-2'
                                        to='/use-cases/cloud-compliance-and-auditing/'
                                    >
                                        Cloud Compliance
                                    </Link>
                                </div>
                                <div className='col-span-12 lg:col-span-6 font-hind'>
                                    <Link
                                        className='block font-hind tex-lg hover:underline'
                                        to='/use-cases/cloud-misconfigurations/'
                                    >
                                        Cloud Misconfigurations
                                    </Link>
                                    <Link
                                        className='block font-hind tex-lg hover:underline mt-2'
                                        to='/use-cases/aws-cloud-security/'
                                    >
                                        AWS Cloud Security
                                    </Link>
                                    <Link
                                        className='block font-hind tex-lg hover:underline mt-2'
                                        to='/use-cases/gcp-cloud-security/'
                                    >
                                        Google Cloud Security
                                    </Link>
                                    <Link
                                        className='block font-hind tex-lg hover:underline mt-2'
                                        to='/use-cases/azure-cloud-security/'
                                    >
                                        Microsoft Azure Cloud Security
                                    </Link>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='bg-gradient-to-b from-selago to-white relative z-10 overflow-x-hidden'>
                <img src={corner} width={500} className='hidden lg:block absolute top-12 -right-12 m-0 z-20' alt='' />
                <Container>
                    <Section>
                        <Faqs qas={qas} />
                    </Section>
                </Container>
            </div>
            <LinksAndWhitepaper
                topArticles={topArticles}
                data={data}
                title={'CSPM'}
                titleCard={'The Complete Guide<br class="hidden lg:block" /> to Cloud Storage Misconfigurations'}
                textCard={
                    'This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data security breaches and the importance of a secure cloud storage infrastructure.'
                }
                linkCard={'/whitepaper/cloud-storage-misconfigurations/'}
                misconfigurationWhitepaper={true}
            />
            <Container>
                <div className='md:pt-12 pb-36 sm:pb-52'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' />
                        <h3 className='text-center text-lg lg:text-2xl px-2 mt-4 mb-2 font-montserrat font-bold'>
                            AGENTLESS, MULTI-CLOUD, PAINLESS CSPM
                        </h3>
                        <p className='font-hind text-base sm:text-lg lg:text-xl'>
                            Start seeing value & saving money in minutes
                        </p>
                        <div className='mt-10 w-auto inline-block'>
                            <Link
                                className='gradientBgBtn w-full block text-sm font-medium rounded text-white text-center py-4 px-12 hover:no-underline no-underline cursor-pointer uppercase'
                                to='/request-demo/'
                                smooth={true}
                                duration={500}
                            >
                                Request Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default CSPM;
