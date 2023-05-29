import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout/CleanLayout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { css } from 'twin.macro';
import { Container, Row } from '../components/atoms/Containers';
import GradientButton from '../components/buttons/GradientButton';
import LightDarkButton from '../components/buttons/LightDarkButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link as ScrollLink, Element } from 'react-scroll';
import CSPMIcon from '../assets/images/cspm-cnapp-icon.svg';
import VisibilityIcon from '../assets/images/visibility-cnapp-icon.svg';
import ComplianceIcon from '../assets/images/compliance-cnapp-icon.svg';
import DataSecurityIcon from '../assets/images/data-security-cnapp-icon.svg';
import CIEMIcon from '../assets/images/ciem-cnapp-icon.svg';
import CWPPIcon from '../assets/images/cwpp-cnapp-icon.svg';
import CISCOIcon from '../assets/images/ciso-icon.svg';
import ShieldSettingsIcon from '../assets/images/shield-settings-icon.svg';
import ShieldCloudIcon from '../assets/images/shield-cloud-icon.svg';
import ContainerSecurityIcon from '../assets/images/container-security-cnapp-icon.svg';
import KubernetesIcon from '../assets/images/kubernetes-cnapp-icon.svg';
import cloudIcon from '../assets/images/cloud-icon.svg';
import CyscaleBird from '../assets/images/cyscale-bird-homepage.svg';
import useLoadHSMeetingsScript from '../hooks/useLoadHSMeetingsScript';
import classnames from 'classnames';
import useHSMeetingsLoaded from '../hooks/useHSMeetingsLoaded';
import Carousel from '../components/Home/Carousel';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useMediaQuery from '../hooks/useMediaQuery';
import BgHeroMobile from '../assets/images/bg-homepage-mobile.png';
import BgHero from '../assets/images/bg-homepage.png';
import GradientCard from '../components/Home/GradientCard';
import Card from '../components/Home/Card';
import BlogLink from '../components/Home/BlogLink';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from '../components/Home/Typewriter';
import RightArrow from '../components/sharedComponent/RightArrow';

const heroBackground = css`
    height: 44rem;
    background-image: url(${BgHeroMobile});
    background-position: right 40% bottom 38%;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (min-width: 500px) {
        height: 42rem;
        background-image: url(${BgHeroMobile});
        background-position: right 40% bottom 0%;
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media screen and (min-width: 640px) {
        height: 50rem;
        background-position: 70% 95%;
        background-image: url(${BgHeroMobile});
    }

    @media screen and (min-width: 1024px) {
        height: auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 35%;
        background-image: url(${BgHero});
    }
    @media screen and (min-width: 1536px) {
        height: 48rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 35%;
        background-image: url(${BgHero});
    }
    @media screen and (min-width: 2000px) {
        height: 54rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 30%;
        background-image: url(${BgHero});
    }
    @media screen and (min-width: 2560px) {
        height: 60rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 25%;
        background-image: url(${BgHero});
    }
`;

const sectionSubtitleColor = css`
    color: #38aff1;
`;

const sectionTextColor = css`
    color: #0d1d3d;
`;

const blogSectionStyle = css`
    background-color: #f5f9ff;
    height: 55rem;
    @media (min-width: 1024px) {
        height: 44rem;
    }
`;

const useCasesSectionBackground = css`
    background: linear-gradient(86.75deg, #1f1118 -17.76%, #0f26aa 44.32%, #ff4a56 148.58%);
`;

const servicesSectionStyle = css`
    background: #f5f9ff;
`;

const titleSection = css`
    font-size: 2rem;
`;

const featureTitle = css`
    font-size: 1.35rem;
`;

const featureStyle = css`
    background-image: linear-gradient(#e4edfc, #fff);
    height: 32rem;
    @media screen and (min-width: 440px) and (max-width: 1023px) {
        height: 45rem !important;
    }
    @media screen and (min-width: 1024px) {
        height: 32rem;
    }
`;

const HomePage = ({ location }) => {
    const data = useStaticQuery(graphql`
        query HomeQuery {
            dashboardHomePage: file(relativePath: { eq: "dashboard-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            graphHomePage: file(relativePath: { eq: "graph-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            dashboard: file(relativePath: { eq: "dashboard-home.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            assetInventory: file(relativePath: { eq: "asset-inventory.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            cardIntegrations: file(relativePath: { eq: "card-integrations-home.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            cardMisconfiguration: file(relativePath: { eq: "card-misconfiguration-home.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            cardStandards: file(relativePath: { eq: "card-standards-home.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            virginiaAndBarry: file(relativePath: { eq: "virginia-barry.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 180, layout: CONSTRAINED)
                }
            }
            cloudIcon: file(relativePath: { eq: "cloud-security-icon.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
                }
            }
            dataSecurityIcon: file(relativePath: { eq: "data-security-home-icon.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
                }
            }
            isoIcon: file(relativePath: { eq: "iso-27001-home-icon.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
                }
            }
            complianceIcon: file(relativePath: { eq: "compliance-home-icon.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
                }
            }
            hybridCloudIcon: file(relativePath: { eq: "hybrid-cloud-home-icon.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
                }
            }
            safeBoxIcon: file(relativePath: { eq: "safe-box-home-icon.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
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
        }
    `);
    const [isHover, setIsHover] = useState(false);
    const containerRef = useRef(null);

    const isDesktop = useMediaQuery('(max-width: 1024px)');

    const scrollLeft = () => {
        containerRef.current.scrollLeft -= isDesktop ? 320 : 420;
    };
    const scrollRight = () => {
        containerRef.current.scrollLeft += isDesktop ? 320 : 420;
    };

    const { loadingMeetings } = useHSMeetingsLoaded();

    useLoadHSMeetingsScript();
    useEffect(() => {
        AOS.init({
            disable: function () {
                const windowWidth = document.documentElement.clientWidth;
                return windowWidth < 1280;
            }
        });
    }, []);

    return (
        <Layout
            location={location}
            pageName='HomePage'
            title='Robust Cloud Security Platform - Cyscale'
            description='Map all your cloud assets across providers in under 5 mins. Optimize costs, ensure cloud security, and prove compliance with the scalable Cyscale CSPM.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /
            </div>
            <div className='hidden' data-title>
                Robust Cloud Security Platform - Cyscale
            </div>
            <div className='hidden' data-description>
                Map all your cloud assets across providers in under 5 mins. Optimize costs, ensure cloud security, and
                prove compliance with the scalable Cyscale CSPM.
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div className='pt-8' css={heroBackground}>
                <Container>
                    <div className='py-16 md:py-24 lg:pt-24 lg:pb-36'>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                                <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1 className='text-left text-blue text-4xl lg:text-5xl leading-normal lg:leading-normal mb-8 font-montserrat font-semibold h-40 md:h-28 lg:h-40'>
                                        <Typewriter
                                            text='Leverage the Cloud with Confidence'
                                            speed={250}
                                            delay={2000}
                                        />
                                    </h1>
                                    <p className='text-left text-base lg:text-lg mb-8 leading-relaxed font-hind'>
                                        Cyscale automates cloud security analysis helping you identify and reduce risk
                                        from misconfigurations, vulnerabilities, improper access control, and data
                                        exposure.
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
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='lg:mt-16 pt-4 max-w-lg lg:max-w-2xl mx-auto lg:mx-0'></div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
            <Container className='my-16 lg:my-32'>
                <div
                    className='grid grid-cols-12 gap-x-5 mt-12'
                    css={css`
                        overflow: hidden;
                    `}
                >
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 hidden lg:block' data-aos='fade-right'>
                        <GatsbyImage
                            image={data.dashboardHomePage.childImageSharp.gatsbyImageData}
                            alt='Dashboard view'
                        />
                    </div>
                    <div
                        className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl lg:max-w-xl'
                        data-aos='fade-left'
                    >
                        <p className='font-montserrat text-base font-bold mt-0 lg:ml-5' css={sectionSubtitleColor}>
                            EMPOWER YOUR TEAM
                        </p>
                        <h2
                            className='text-blue font-bold font-montserrat mt-4 lg:ml-5'
                            css={css`
                                font-size: 2rem;
                                line-height: 2.5rem;
                            `}
                        >
                            Stay ahead of cloud threats, optimize risk analysis,
                            <br className='hidden lg:block' />
                            <spam className='lg:hidden'>&nbsp;</spam>and ensure compliance with industry regulations
                        </h2>
                        <p className='font-hind text-base mt-12 lg:ml-5' css={sectionTextColor}>
                            Cybersecurity specialists across industries rely on Cyscale to eliminate cloud security
                            blindspots, understand the attack surface in their cloud environments and prevent data loss.
                            We help you see through application and cloud infrastructure layers and scale your efforts
                            to organization-wide impact.
                        </p>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 block lg:hidden mt-12'>
                        <GatsbyImage
                            image={data.dashboardHomePage.childImageSharp.gatsbyImageData}
                            alt='Dashboard view'
                            className='w-auto md:max-w-2xl lg:w-auto'
                        />
                    </div>
                </div>
            </Container>
            <Container className='mb-16 lg:mb-24'>
                <div
                    className='grid grid-cols-12 gap-x-5 mt-12'
                    css={css`
                        overflow: hidden;
                    `}
                >
                    <div className='col-span-12 lg:col-span-4' data-aos='fade-right'>
                        <GradientCard
                            icon={CISCOIcon}
                            title={'CISO'}
                            text={
                                'Keep technological risk in check for the organization, track cloud security posture and remediation activities and generate reports for business stakeholders.'
                            }
                            link={'/products/cloud-security-posture-management/'}
                        />
                    </div>
                    <div className='col-span-12 lg:col-span-4' data-aos='fade-up'>
                        <GradientCard
                            icon={ShieldSettingsIcon}
                            title={'CLOUD INFRASTRUCTURE'}
                            text={
                                'Get visibility on the security posture of your multi-cloud environments from high-level to detail and ensure the productivity of your cloud team.'
                            }
                            link={'/products/cloud-security-posture-management/'}
                        />
                    </div>
                    <div className='col-span-12 lg:col-span-4' data-aos='fade-left'>
                        <GradientCard
                            icon={ShieldCloudIcon}
                            title={'CLOUD SECURITY'}
                            text={
                                'Identify the highest security risk with the help of our Security Knowledge Graph™ technology, capturing relationships between cloud resources, identities, and data.'
                            }
                            link={'/products/security-knowledge-graph/'}
                        />
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
                    <div
                        className='grid grid-cols-12 gap-x-5'
                        css={css`
                            overflow: hidden;
                        `}
                    >
                        <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 lg:mt-8' data-aos='fade-right'>
                            <Link to={'/case-studies/smart-fintech'}>
                                <GatsbyImage
                                    image={data.smartFintech.childImageSharp.gatsbyImageData}
                                    className='max-w-xl'
                                    alt='Mobile Payment Smart Fintech'
                                />
                            </Link>
                        </div>
                        <div
                            className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl mt-8 lg:mt-0'
                            data-aos='fade-left'
                        >
                            <p className='font-montserrat text-base font-bold mt-4' css={sectionSubtitleColor}>
                                CASE STUDY
                            </p>
                            <Link to={'/case-studies/smart-fintech'}>
                                {' '}
                                <h2
                                    className='font-montserrat text-blue font-bold mt-2 hover:underline'
                                    css={titleSection}
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
                            <Link
                                to={'/case-studies/smart-fintech'}
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                                className='font-hind text-base font-bold mt-6 hover:underline block'
                                css={css`
                                    color: #0f26aa;
                                    &:hover {
                                        color: #0b175a;
                                    }
                                `}
                            >
                                <RightArrow fillColor={isHover ? '#0b175a' : '#0F26AA'} marginTop={'-0.1rem'} />
                                Read the case study
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='pt-24 pb-24 lg:pt-32 lg:pb-32' css={useCasesSectionBackground}>
                <Container>
                    <div className='grid grid-cols-12 gap-x-5'>
                        <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                            <p className='font-montserrat text-base font-bold text-white'>USE CASE</p>
                            <h2 className='font-montserrat font-bold text-white mt-4' css={titleSection}>
                                Get contextual insights
                            </h2>
                            <p className='mt-4 text-white text-base font-hind font-normal'>
                                An unpatched virtual machine running an app with the devastating Log4j vulnerability is
                                close to harmless in a private network. However, a server running the same vulnerable
                                cloud app while being exposed to the internet, and having read or write access to a
                                production datastore presents a totally different risk.
                            </p>
                            <p className='mt-4 text-white text-base font-hind font-normal'>
                                Understanding context allows you to immediately see what needs fixing and what can wait,
                                and thus prioritize tasks on your cloud security roadmap.
                            </p>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-20 lg:mt-0 mx-auto lg:mx-0'>
                            <GatsbyImage image={data.graphHomePage.childImageSharp.gatsbyImageData} alt='Graph' />
                        </div>
                    </div>
                </Container>
            </div>
            <div css={servicesSectionStyle} className='py-24 lg:py-32'>
                <div className='container max-w-7xl m-auto px-4 lg:px-8'>
                    <div className='grid grid-cols-12 gap-x-5'>
                        <div className='col-span-12 lg:col-span-8 mx-auto lg:mx-0 max-w-2xl'>
                            <p className='text-left uppercase font-montserrat font-bold' css={sectionSubtitleColor}>
                                CYSCALE CLOUD SECURITY PLATFORM
                            </p>
                            <h2 className='font-montserrat text-blue font-bold mt-3' css={titleSection}>
                                Your ally for a solid security program
                            </h2>
                            <p className='text-base font-hind font-normal max-w-2xl mt-3' css={sectionTextColor}>
                                Cyscale is an <strong>agentless</strong> cloud-native application protection platform
                                (CNAPP) that helps
                                <br className='hidden sm:block' /> your organization protect against data breaches and
                                other types of modern attacks in the public cloud.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container max-w-7xl m-auto px-4 lg:px-8'>
                    <Row className='mt-12 gap-0 lg:gap-8'>
                        <Card
                            icon={CSPMIcon}
                            title={'CSPM'}
                            text={
                                'Continuous visibility over multi-cloud environments to identify cloud misconfigurations. Scan, monitor, and remediate across multiple cloud service providers such as AWS, Microsoft Azure, Google Cloud, Alibaba Cloud.'
                            }
                            link={'/products/cloud-security-posture-management/'}
                            cardHeight={72}
                            cardHeightLg={80}
                        />
                        <Card
                            icon={VisibilityIcon}
                            title={'Contextual Analysis'}
                            text={
                                'Automated correlations between issues that affect cloud assets, cloud workloads and access control help to determine their real impact on data security and data protection.'
                            }
                            link={'/products/security-knowledge-graph/'}
                            cardHeight={72}
                            cardHeightLg={80}
                        />
                        <Card
                            icon={ComplianceIcon}
                            title={'Compliance and Governance'}
                            text={
                                'In-app security standards and organizational security policy templates provided by the Cyscale platform help your team with internal or external audits.'
                            }
                            link={'/use-cases/cloud-compliance-and-auditing/'}
                            cardHeight={72}
                            cardHeightLg={80}
                        />
                        <Card
                            icon={CIEMIcon}
                            title={'IAM Security'}
                            text={
                                'A powerful Identity Dashboard to help you understand how effective are your access controls. Visualize cloud privileges and permissions and easily perform access reviews to prevent data loss.'
                            }
                            link={'/use-cases/iam-security/'}
                            cardHeight={72}
                            cardHeightLg={80}
                        />
                    </Row>
                    <Row className='mt-8 lg:mt-16 gap-0 lg:gap-8'>
                        <Card
                            icon={DataSecurityIcon}
                            title={'Data Security'}
                            text={
                                'Protect sensitive data and keep track of your organization’s data security posture with an inventory of cloud data stores, complete with their security analysis.'
                            }
                            link={'/use-cases/cloud-data-security/'}
                            cardHeight={64}
                            cardHeightLg={72}
                        />
                        <Card
                            icon={CWPPIcon}
                            title={'Workload Protection'}
                            text={
                                'A contextual analysis of vulnerabilities in instances, containers and serverless, along with cloud misconfigurations helps security teams prioritize remediation.'
                            }
                            cardHeight={64}
                            cardHeightLg={72}
                        />
                        <Card
                            icon={ContainerSecurityIcon}
                            title={'Container Security'}
                            text={
                                'Know where container images are running, complete with a contextual security analysis of vulnerabilities, misconfigurations, networking and access.'
                            }
                            cardHeight={64}
                            cardHeightLg={72}
                        />
                        <Card
                            icon={KubernetesIcon}
                            title={'Kubernetes Security'}
                            text={
                                'A complete inventory for your Kubernetes clusters, either managed or unmanaged, and continuous analysis of vulnerabilities in the cluster to ensure data protection.'
                            }
                            cardHeight={64}
                            cardHeightLg={72}
                        />
                    </Row>
                </div>
            </div>
            <Container className='my-16 lg:my-32'>
                <div className='grid grid-cols-12 gap-x-5'>
                    <div className='col-span-12 lg:col-span-8 mx-auto lg:mx-0 max-w-2xl'>
                        <p className='uppercase font-montserrat font-bold' css={sectionSubtitleColor}>
                            CYSCALE KEY FEATURES
                        </p>
                        <h2 className='font-montserrat text-blue font-bold mt-3' css={titleSection}>
                            Protect your business with Cyscale
                        </h2>
                    </div>
                </div>

                <div
                    className='grid grid-cols-12 gap-x-5 mt-12'
                    css={css`
                        overflow: hidden;
                    `}
                >
                    <div className='col-span-12 lg:col-span-6'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl pt-12 px-9 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative'
                            css={featureStyle}
                        >
                            <h3 className='font-montserrat font-bold' css={featureTitle}>
                                Complete Cloud Security Platform <br /> with Powerful Analytics & Dashboards
                            </h3>
                            <p className='font-hind text-base font-normal mt-4'>
                                Cloud security posture management with identity and data centric views.
                            </p>
                            <GatsbyImage
                                image={data.dashboard.childImageSharp.gatsbyImageData}
                                alt='Dashboard'
                                className='mt-4'
                            />
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-3' data-aos='fade-up'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl pt-12 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative mb-20 lg:mb-0'
                            css={featureStyle}
                        >
                            <h3 className='font-montserrat font-bold px-10' css={featureTitle}>
                                Cloud Asset <br />
                                Inventory
                            </h3>
                            <p className='font-hind text-base font-normal mt-4 px-10'>Unlimited protected assets.</p>
                            <GatsbyImage
                                image={data.assetInventory.childImageSharp.gatsbyImageData}
                                alt='Asset inventory'
                                className='mt-5 lg:px-10 lg:px-2'
                                css={css`
                                    @media screen and (min-width: 440px) and (max-width: 1023px) {
                                        height: 44.5rem;
                                    }
                                    @media screen and (min-width: 1024px) and (max-width: 1060px) {
                                        height: 18rem;
                                    }
                                    @media screen and (min-width: 1061px) {
                                        height: 22.75rem;
                                    }
                                `}
                            />
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-3 mt-12 lg:mt-0' data-aos='fade-left'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl pt-12 px-12 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative'
                            css={css`
                                background-image: linear-gradient(#e4edfc, #fff);
                                height: 34rem;
                                @media screen and (min-width: 380px) and (max-width: 440px) {
                                    height: 40rem !important;
                                }
                                @media screen and (min-width: 441px) and (max-width: 525px) {
                                    height: 44rem !important;
                                }
                                @media screen and (min-width: 526px) and (max-width: 1023px) {
                                    height: 52rem !important;
                                }
                                @media screen and (min-width: 1024px) {
                                    height: 32rem;
                                }
                            `}
                        >
                            <h3 className='font-montserrat font-bold' css={featureTitle}>
                                Integrations
                            </h3>
                            <p className='font-hind text-base font-normal mt-4'>
                                Amazon Web Services, Google Cloud, Microsoft Azure, Alibaba Cloud, Okta, Github and
                                more...
                            </p>
                            <GatsbyImage
                                image={data.cardIntegrations.childImageSharp.gatsbyImageData}
                                alt='Integrations'
                                className='mt-8'
                            />
                        </div>
                    </div>
                </div>
                <div
                    className='grid grid-cols-12 gap-x-5 mt-24'
                    css={css`
                        overflow: hidden;
                    `}
                >
                    <div className='col-span-12 lg:col-span-3' data-aos='fade-right'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl pt-8 pb-72 sm:pb-0 px-8 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-72 bg-black'
                            css={css`
                                @media screen and (min-width: 1023px) and (max-width: 1072px) {
                                    padding-left: 1.2rem;
                                    padding-right: 1.2rem;
                                }
                                @media screen and (min-width: 440px) and (max-width: 1023px) {
                                    height: 24rem;
                                }
                            `}
                        >
                            <h3 className='font-montserrat font-bold text-white' css={featureTitle}>
                                Contextual misconfiguration analysis
                            </h3>
                            <GatsbyImage
                                image={data.cardMisconfiguration.childImageSharp.gatsbyImageData}
                                alt='Misconfiguration'
                                className='mt-2'
                            />
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-3' data-aos='fade-up'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl pt-8 px-8 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-40 lg:h-72'
                            css={css`
                                background-image: linear-gradient(
                                    to bottom,
                                    #e7474b,
                                    #ee3d53,
                                    #f3305b,
                                    #f92065,
                                    #fd0070
                                );
                            `}
                        >
                            <h3 className='font-montserrat font-bold text-white' css={featureTitle}>
                                Alerts and remediation instructions
                            </h3>
                            <p className='text-base text-white mt-1 font-hind'>to detect cloud security drifts</p>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6' data-aos='fade-left'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl pt-8 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-72'
                            css={css`
                                background-image: linear-gradient(
                                    to bottom,
                                    #4a85eb,
                                    #326fe3,
                                    #1b58d8,
                                    #073fcc,
                                    #0623be
                                );
                            `}
                        >
                            <h3 className='font-montserrat font-bold text-white px-8' css={featureTitle}>
                                Built-in frameworks for ISO27001, <br /> PCI-DSS, SOC2, GDPR, and others
                            </h3>
                            <GatsbyImage
                                image={data.cardStandards.childImageSharp.gatsbyImageData}
                                alt='Standards'
                                className='mt-6'
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='md:pt-12 pb-36 sm:pb-52'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' />
                        <h3 className='text-center text-lg lg:text-2xl px-2 mt-4 mb-2 font-montserrat font-bold'>
                            Contextual security for the cloud-native stack
                        </h3>
                        <p className='font-hind text-base sm:text-lg lg:text-xl'>
                            Start seeing value & saving money in minutes
                        </p>
                        <div className='mt-10 w-auto inline-block'>
                            <ScrollLink
                                className='gradientBgBtn w-full block text-sm font-medium rounded text-white text-center py-4 px-12 hover:no-underline no-underline cursor-pointer uppercase'
                                to='meetings-calendar'
                                smooth={true}
                                duration={500}
                            >
                                Request Demo
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </Container>
            <div css={blogSectionStyle} className='py-16 relative'>
                <Container>
                    <div className='grid grid-cols-12 gap-x-5 mt-12'>
                        <div className='col-span-12 lg:col-span-4  mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                            {' '}
                            <p className='font-montserrat text-base font-bold' css={sectionSubtitleColor}>
                                LATEST ARTICLES
                            </p>{' '}
                            <h2 className='font-montserrat text-blue font-bold mt-3' css={titleSection}>
                                What we’re up to
                            </h2>
                            <p className='text-base font-hind mt-5' css={sectionTextColor}>
                                Cyscale is an agentless CNAPP solution that
                                <br className='hidden lg:block' /> helps your organization map, secure and
                                <br className='hidden lg:block' />
                                monitor cloud assets across multiple public cloud providers.
                            </p>
                            <Link
                                to={'/blog/'}
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                                className='font-hind text-base font-bold mt-6 hover:underline block'
                                css={css`
                                    color: #0f26aa;
                                    &:hover {
                                        color: #0b175a;
                                    }
                                `}
                            >
                                <RightArrow fillColor={isHover ? '#0b175a' : '#0F26AA'} marginTop={'-0.1rem'} />
                                Read more about cloud security
                            </Link>
                        </div>
                        <div
                            className='col-span-12 lg:col-span-8'
                            css={css`
                                overflow: hidden;
                            `}
                        >
                            <Carousel ref={containerRef} />
                        </div>
                        <div className='col-span-12 w-full h-72 lg:h-80 relative'>
                            <div className='absolute -bottom-56 lg:-bottom-2 right-0'>
                                <button onClick={scrollLeft} className='p-2 m-2 rounded-full bg-white'>
                                    <FiChevronLeft />
                                </button>
                                <button onClick={scrollRight} className='p-2 m-2 rounded-full bg-white'>
                                    <FiChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div
                css={css`
                    background-color: #0a1a76;
                `}
                className='py-16 lg:py-32'
            >
                <Container>
                    <div className='grid grid-cols-12 gap-x-5'>
                        <div className='col-span-12 lg:col-span-8 mx-auto lg:mx-0 max-w-2xl'>
                            <p className='uppercase font-montserrat font-bold' css={sectionSubtitleColor}>
                                OUR BLOG
                            </p>
                            <h2 className='font-montserrat text-white font-bold mt-3' css={titleSection}>
                                The most read articles
                            </h2>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-x-5 mt-12'>
                        <BlogLink
                            link={'/blog/cloud-security-and-compliance'}
                            categories={['cspm', 'compliance']}
                            text={[
                                'Cloud Security and',
                                <br />,
                                'Compliance: A Guide for',
                                <br />,
                                'Your Cloud Infrastructure'
                            ]}
                            image={data.cloudIcon.childImageSharp.gatsbyImageData}
                        />
                        <BlogLink
                            link={'/blog/data-security-dashboard'}
                            categories={['news', 'product']}
                            text={['Introducing the New', <br />, 'Data Security Dashboard!']}
                            image={data.dataSecurityIcon.childImageSharp.gatsbyImageData}
                            classNames={'mt-10 md:mt-0'}
                        />
                        <BlogLink
                            link={'/blog/new-iso27001-2022-version'}
                            categories={['news', 'compliance', 'cspm']}
                            text={['The New ISO 27001', <br />, '2022 Version, Explained', <br />, 'for the Cloud']}
                            image={data.isoIcon.childImageSharp.gatsbyImageData}
                            classNames={'mt-10 lg:mt-0'}
                        />
                        <BlogLink
                            link={'/whitepaper/the-complete-guide-to-cloud-compliance/'}
                            categories={['compliance']}
                            text={['Cloud Compliance in 2023:', <br />, 'An In-Depth Guide']}
                            image={data.complianceIcon.childImageSharp.gatsbyImageData}
                            classNames={'mt-10'}
                        />
                        <BlogLink
                            link={'/blog/hybrid-cloud-best-practices'}
                            categories={['cspm']}
                            text={['5 Hybrid Cloud Best', <br />, 'Practices']}
                            image={data.hybridCloudIcon.childImageSharp.gatsbyImageData}
                            classNames={'mt-10 hidden lg:block'}
                        />
                        <BlogLink
                            link={'/blog/cloud-data-security-guide'}
                            categories={['cspm']}
                            text={['A Guide to Cloud Data', <br />, 'Security']}
                            image={data.safeBoxIcon.childImageSharp.gatsbyImageData}
                            classNames={'mt-10 hidden lg:block'}
                        />
                    </div>
                </Container>
            </div>
            <Element name='meetings-calendar' />
            <div
                className='relative py-0 lg:py-16'
                css={css`
                    @media (min-width: 1280px) {
                        height: 55.25rem;
                    }
                `}
            >
                <Container className='my-16'>
                    <div className='grid grid-cols-12 lg:gap-x-2 xl:gap-x-0'>
                        <div className='col-span-12 lg:col-span-4 mx-auto lg:mx-0 max-w-xl lg:max-w-lg '>
                            <p className='font-montserrat text-base font-bold' css={sectionSubtitleColor}>
                                GET IN TOUCH
                            </p>{' '}
                            <h2 className='font-montserrat text-blue font-bold mt-3' css={titleSection}>
                                Request Demo
                            </h2>
                            <p className='text-base font-hind mt-5' css={sectionTextColor}>
                                We are happy to schedule a product demo with you.
                                <br />
                                Use the calendar to select an appropriate time slot.
                            </p>{' '}
                            <GatsbyImage
                                image={data.virginiaAndBarry.childImageSharp.gatsbyImageData}
                                className='mt-6'
                                alt='Virginia and Barry'
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-8 mx-auto lg:mx-0 max-w-7xl'>
                            <div
                                className={classnames({
                                    hidden: loadingMeetings,
                                    'meetings-iframe-container': true
                                })}
                                data-src='https://meetings.hubspot.com/virginia-mitea/demo-for-cyscale-cloud-platform?embed=true'
                            ></div>
                        </div>
                    </div>
                </Container>
                <img
                    src={CyscaleBird}
                    className='absolute hidden xl:block'
                    alt=''
                    css={css`
                        width: 25rem;
                        left: -1rem;
                        bottom: 7.3rem;
                    `}
                />
            </div>
        </Layout>
    );
};

export default HomePage;
