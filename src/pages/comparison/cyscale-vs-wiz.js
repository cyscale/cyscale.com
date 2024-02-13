import React, { useState } from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Container, Row, Section } from '../../components/atoms/Containers';
import { css } from 'twin.macro';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import { graphql, Link, useStaticQuery } from 'gatsby';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import { CapabilityCheckRow, FeatureComparisonRow } from '../../components/competitors/table';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CSSTransition } from 'react-transition-group';
import StorylaneModal from '../../components/full-platform-tour/StorylaneModal';
import VideoCyscale from '../../components/campaigns/cspm-solution/CyscaleVideo';
import useMediaQuery from '../../hooks/useMediaQuery';

const border = css`
    border-bottom: 1px solid #bed0e7;
`;

const fontSizeHeadings = css`
    font-size: 28px;
    line-height: 34px;
`;

const CyscaleVsWiz = ({ location }) => {
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const [modal, setModal] = useState(false);

    const data = useStaticQuery(graphql`
        query CyscaleVsWizQuery {
            heroImage: file(relativePath: { eq: "hero-image-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            title='Cyscale vs Wiz Cloud Security Comparison'
            description='See how Cyscale compares to Wiz as a cloud security platform designed for small to medium cloud-native companies.'
            pageName='CyscaleVsWiz'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /comparison/cyscale-vs-wiz
            </div>
            <div className='hidden' data-title>
                Cyscale vs Wiz Cloud Security Comparison
            </div>
            <div className='hidden' data-description>
                See how Cyscale compares to Wiz as a cloud security platform designed for small to medium cloud-native
                companies.
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div className='bg-zircon pb-16 pt-32 relative lg:pb-20'>
                <Container>
                    <div className='max-w-2xl lg:mt-12'>
                        <p
                            className='font-montserrat font-bold'
                            css={css`
                                color: #079bee;
                            `}
                        >
                            Cyscale vs Wiz
                        </p>
                        <h1
                            className='font-montserrat text-5xl text-blue font-bold'
                            css={css`
                                @media (max-width: 1024px) {
                                    font-size: 2rem;
                                    line-height: 3rem;
                                }
                                font-size: 2.625rem;
                                line-height: 3.25rem;
                                @media (max-width: 1280px) {
                                    font-size: 2rem;
                                    line-height: 2.5rem;
                                }
                                &::after {
                                    content: '';
                                    display: block;
                                    width: 35%;
                                    height: 6px;
                                    margin-top: 16px;
                                    background-image: linear-gradient(to right, #0f26aa, #ff4a56);
                                }
                            `}
                        >
                            Compare Cloud Security
                            <br className="hidden sm:block" /> Solution Capabilities
                        </h1>
                    </div>
                </Container>
                <Container>
                    <div className='grid grid-cols-12 mt-20'>
                        <div className='hidden lg:block lg:col-span-4 min-h-32' css={border}>
                            <p className='font-montserrat font-bold pl-4 py-6 text-blueZodiac' css={fontSizeHeadings}>
                                Capability
                            </p>
                        </div>
                        <div
                            className='col-span-9 lg:col-span-4 min-h-32 lg:bg-white rounded-t-md pb-2 lg:pb-0'
                            css={border}
                        >
                            <p
                                className='font-montserrat font-bold pl-3 lg:pl-4 py-6 text-blueZodiac bg-white rounded-md'
                                css={fontSizeHeadings}
                            >
                                Cyscale
                            </p>
                        </div>
                        <div className='col-span-3 lg:col-span-4 min-h-32' css={border}>
                            <p
                                className='font-montserrat font-bold pl-6 lg:pl-8 py-6 text-blueZodiac'
                                css={fontSizeHeadings}
                            >
                                Wiz
                            </p>
                        </div>
                    </div>
                    <CapabilityCheckRow
                        capability={<>CSPM (Cloud Security Posture Management)</>}
                        cyscaleStatus={
                            <>
                                Detect critical cloud <br className='hidden lg:block' /> misconfigurations
                            </>
                        }
                    />
                    <CapabilityCheckRow
                        capability={<>CNAPP</>}
                        cyscaleStatus={
                            <>
                                Total visibility, risk prioritization, <br className='hidden lg:block' /> and
                                remediation in one
                                <br className='hidden lg:block' /> platform
                            </>
                        }
                    />
                    <CapabilityCheckRow
                        capability={<>Kubernetes & Container security</>}
                        cyscaleStatus={
                            <>
                                Identify and resolve risks across
                                <br className='hidden lg:block' /> K8s & containerized
                                <br className='hidden lg:block' /> environments
                            </>
                        }
                    />
                    <CapabilityCheckRow
                        capability={<>CDR (Cloud Detection and Response)</>}
                        cyscaleStatus={
                            <>
                                Proactive defense and
                                <br className='hidden lg:block' /> mitigation of attacks{' '}
                                <br className='block sm:hidden' /> that target
                                <br className='hidden lg:block' /> cloud infrastructure and data
                            </>
                        }
                    />
                    <CapabilityCheckRow
                        capability={<>CIEM</>}
                        cyscaleStatus={
                            <>
                                Enforce least privilege, secure
                                <br className='hidden lg:block' /> cloud access
                            </>
                        }
                    />
                    <CapabilityCheckRow
                        capability={<>Ensure compliance</>}
                        cyscaleStatus={
                            <>
                                Automate compliance and
                                <br className='hidden lg:block' /> generate executive reports
                            </>
                        }
                    />
                    <CapabilityCheckRow
                        capability={<>DSPM (Data Security Posture Management)</>}
                        cyscaleStatus={
                            <>
                                Protect your most sensitive data
                                <br className='hidden lg:block' /> in the cloud
                            </>
                        }
                    />
                    <CapabilityCheckRow
                        capability={<>AI automation & assistance</>}
                        cyscaleStatus={
                            <>
                                Do more with less. Turn your
                                <br className='hidden lg:block' /> team into multi-cloud experts
                            </>
                        }
                    />
                    <CapabilityCheckRow
                        capability={<>Vulnerability management</>}
                        cyscaleStatus={
                            <>
                                Find and fix vulnerabilities at
                                <br className='hidden lg:block' /> cloud scale
                            </>
                        }
                    />
                    <div className='grid grid-cols-12'>
                        <div className='hidden lg:block col-span-4 h-12'></div>
                        <div className='hidden lg:block col-span-4 h-12 rounded-b-md bg-white'></div>
                        <div className='hidden lg:block col-span-4 h-12'></div>
                    </div>
                </Container>
            </div>
            <div className='pt-24 pb-24 lg:pb-0 lg:pt-32 relative'>
                <Container>
                    <Row>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='lg:mt-4 pt-2 md:pt-8 lg:pt-4 max-w-2xl mx-auto lg:mx-0 lg:mb-48'>
                                <h1
                                    className='text-center lg:text-left mb-8 font-montserrat font-bold text-blue'
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
                                    Why customers choose Cyscale over Wiz for ease of use
                                </h1>
                                <p
                                    className='text-center lg:text-left text-base max-w-xl mx-auto lg:mx-0 font-hind'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    With Cyscale, a simple, three-step process gets you up and running quickly.
                                    <br />
                                    <strong>
                                        Our active scanning approach ensures that all your assets and applications in
                                        the cloud are discovered without having to deploy agents.
                                    </strong>
                                </p>
                                <p
                                    className='text-center lg:text-left text-base max-w-xl mx-auto lg:mx-0 font-hind mt-12'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    Within minutes, you have visibility that goes broad and deep while providing context
                                    that shows the attack paths that matter and explains how a threat actor might
                                    connect disparate resources in your infrastructure to expose critical data.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='pt-4 max-w-lg lg:max-w-2xl mx-auto lg:mx-0'>
                                <div
                                    onClick={() => {
                                        setModal(!modal);
                                    }}
                                    onKeyPress={() => {}}
                                    tabIndex='0'
                                    role='button'
                                >
                                    <GatsbyImage
                                        image={data.heroImage.childImageSharp.gatsbyImageData}
                                        css={css`
                                            z-index: 10;
                                            &:hover {
                                                scale: 1.025;
                                            }
                                        `}
                                        imgStyle={{ borderRadius: '0.75rem' }}
                                        alt='Video Thumbnail'
                                    />
                                </div>
                                {modal && <div className='modal -overlay'></div>}
                                <CSSTransition in={modal} timeout={300} classNames='video' unmountOnExit>
                                    {isDesktop ? (
                                        <StorylaneModal
                                            setModal={setModal}
                                            src='https://app.storylane.io/demo/xiaviyvpr3sd'
                                        />
                                    ) : (
                                        <VideoCyscale
                                            setModal={setModal}
                                            videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/Cyscale-explainer-video-2023-12-Dec.mp4'
                                            greyCloseButton
                                        />
                                    )}
                                </CSSTransition>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className='pt-16 bg-zircon'>
                <Container>
                    <div className='max-w-xl'>
                        <h2
                            className='font-montserrat text-blue font-bold'
                            css={css`
                                font-size: 2rem;
                                &::after {
                                    content: '';
                                    display: block;
                                    width: 35%;
                                    height: 6px;
                                    margin-top: 16px;
                                    background-image: linear-gradient(to right, #0f26aa, #ff4a56);
                                }
                            `}
                        >
                            Key considerations
                        </h2>
                    </div>
                </Container>
                <Container>
                    <div className='grid grid-cols-12 mt-16'>
                        <div className='hidden lg:block lg:col-span-4 min-h-32' css={border}>
                            <p className='font-montserrat font-bold pl-4 py-6 text-blueZodiac' css={fontSizeHeadings}>
                                Feature/Aspect
                            </p>
                        </div>
                        <div
                            className='col-span-8 lg:col-span-4 min-h-32 lg:bg-white rounded-t-md pb-2 lg:pb-0'
                            css={border}
                        >
                            <p
                                className='font-montserrat font-bold pl-3 lg:pl-4 py-6 text-blueZodiac bg-white rounded-md'
                                css={fontSizeHeadings}
                            >
                                Cyscale
                            </p>
                        </div>
                        <div className='col-span-4 lg:col-span-4 min-h-32' css={border}>
                            <p
                                className='font-montserrat font-bold pl-6 lg:pl-8 py-6 text-blueZodiac'
                                css={fontSizeHeadings}
                            >
                                Wiz
                            </p>
                        </div>
                    </div>
                    <FeatureComparisonRow
                        feature={<>Ideal Customer</>}
                        cyscaleFeatureDetail={
                            <>
                                Small to medium cloud-native companies. Great for small security teams, security leads,
                                CISOs, and CTOs
                            </>
                        }
                        wizFeatureDetail={<>Broad range but mainly large enterprises</>}
                    />
                    <FeatureComparisonRow
                        feature={<>Ease of Deployment</>}
                        cyscaleFeatureDetail={<>Quick and simple setup, ideal for smaller teams</>}
                        wizFeatureDetail={<>Requires more setup time and management resources</>}
                    />
                    <FeatureComparisonRow
                        feature={<>User Interface and Usability</>}
                        cyscaleFeatureDetail={<>Intuitive and user-friendly for smaller teams</>}
                        wizFeatureDetail={<>Complex with advanced features for larger teams</>}
                    />
                    <FeatureComparisonRow
                        feature={<>Customization and Flexibility</>}
                        cyscaleFeatureDetail={
                            <>Bring your own controls and policies, customizable for specific needs</>
                        }
                        wizFeatureDetail={<>Standardized, less flexible</>}
                    />
                    <FeatureComparisonRow
                        feature={<>Pricing Structure</>}
                        cyscaleFeatureDetail={
                            <>
                                Cost-effective, scaled to deliver more value <br className='hidden lg:block' /> for
                                under-resourced teams
                            </>
                        }
                        wizFeatureDetail={
                            <>Higher cost, geared towards larger enterprises. Similar functionality costs 3x more</>
                        }
                    />
                    <FeatureComparisonRow
                        feature={<>Security Capabilities</>}
                        cyscaleFeatureDetail={<>Comprehensive, designed for cloud-native systems</>}
                        wizFeatureDetail={<>Broad, may include unnecessary features for small organizations</>}
                    />
                    <FeatureComparisonRow
                        feature={<>Compliance Support</>}
                        cyscaleFeatureDetail={<>Comprehensive, customizable</>}
                        wizFeatureDetail={<>Wide range of compliance standards</>}
                    />
                    <FeatureComparisonRow
                        feature={<>Customer Support</>}
                        cyscaleFeatureDetail={<>Personalized, responsive support</>}
                        wizFeatureDetail={<>Standard support with priority for larger accounts</>}
                    />
                    <FeatureComparisonRow
                        feature={<>Scalability</>}
                        cyscaleFeatureDetail={<>Scales effectively and cost-efficiently with customer growth</>}
                        wizFeatureDetail={<>Designed for larger scale from the outset</>}
                    />
                    <FeatureComparisonRow
                        feature={<>Innovation and Future-proofing</>}
                        cyscaleFeatureDetail={
                            <>Agile development, quick adaptation to new needs, responsive to customer demands</>
                        }
                        wizFeatureDetail={<>Steady development, focused on broad market trends</>}
                    />
                    <div className='grid grid-cols-12'>
                        <div className='hidden lg:block lg:col-span-4 h-12'></div>
                        <div className='col-span-12 lg:col-span-4 rounded-b-md bg-white pt-8 pb-20'>
                            <div className='flex flex-col items-center'>
                                <img src={cloudIcon} alt='' loading='lazy' className='mx-auto' />
                                <p className='text-center px-2 font-montserrat font-bold text-lg lg:text-2xl'>
                                    See for yourself
                                </p>
                                <div className='mt-5 w-auto inline-block mx-auto'>
                                    <Link
                                        css={css`
                                            padding: 0.625rem 2.5rem;
                                        `}
                                        className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind uppercase'
                                        to='/request-demo/'
                                    >
                                        Book A Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:block lg: lg:col-span-4 h-12'></div>
                    </div>
                </Container>
            </div>
            <div className='bg-gradient-to-b from-zircon to-white relative z-10' id='confidence'>
                <img
                    src={corner}
                    width={300}
                    className='hidden lg:block absolute bottom-0 right-0 m-0 z-20'
                    alt=''
                    loading='lazy'
                />
                <Container>
                    <div className='py-8 md:py-12 lg:py-20'>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-lg mb-20'>
                            <p
                                className='font-montserrat font-bold'
                                css={css`
                                    color: #079bee;
                                `}
                            >
                                Overview{' '}
                            </p>
                            <h2
                                className='font-montserrat text-blue font-bold'
                                css={css`
                                    font-size: 1.75rem;
                                    &::after {
                                        content: '';
                                        display: block;
                                        width: 35%;
                                        height: 6px;
                                        margin-top: 16px;
                                        background-image: linear-gradient(to right, #0f26aa, #ff4a56);
                                    }
                                `}
                            >
                                Cyscale Cloud <br className='block sm:hidden' /> Security Platform
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-full'>
                            <Row className='lg:gap-10'>
                                <div className='col-span-12 lg:col-span-8'>
                                    <Row className='lg:gap-10'>
                                        <div className='col-span-12 lg:col-span-6'>
                                            <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                                <strong className='montserrat-font'>Best for:</strong>
                                                <br />
                                                Small to medium cloud-native companies.
                                            </p>
                                        </div>
                                        <div className='col-span-12 lg:col-span-6 font-hind'>
                                            <p className='leading-normal text-base text-gray mb-6'>
                                                <strong className='montserrat-font'>Pricing:</strong>
                                                <br />
                                                Tailored to deliver more value for under-resourced teams. Flexible
                                                pricing that better supports MSSPs and MSPs.
                                            </p>
                                        </div>
                                        <div className='col-span-12 lg:col-span-6'>
                                            <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                                <strong className='montserrat-font'>Deployment:</strong>
                                                <br />
                                                Agentless, cloud-native application protection platform (CNAPP). Replace
                                                multiple point solutions.
                                            </p>
                                        </div>
                                        <div className='col-span-12 lg:col-span-6'>
                                            <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                                <strong className='montserrat-font'>
                                                    Contextual misconfiguration analysis:
                                                </strong>
                                                <br />
                                                Alerts and remediation instructions for cloud security drifts.
                                                <br />
                                                <br />
                                                Best-in-class Identity and Access management.
                                            </p>
                                        </div>
                                        <div className='col-span-12 lg:col-span-6'>
                                            <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                                <strong className='montserrat-font'>Security Capabilities::</strong>
                                                <br />
                                                Continuous and automated monitoring for AWS, Azure, Google Cloud,
                                                Alibaba Cloud, Kubernetes.
                                            </p>
                                        </div>
                                        <div className='col-span-12 lg:col-span-6'>
                                            <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                                <strong className='montserrat-font'>Compliance Support:</strong>
                                                <br />
                                                Built-in frameworks for ISO27001, PCI-DSS, SOC2, GDPR, and others. Bring
                                                your own policies.
                                            </p>
                                        </div>
                                    </Row>
                                </div>
                                <div className='col-span-12 lg:col-span-4'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='montserrat-font'>Unique Features:</strong>
                                        <br />
                                        Contextual insights with graph view of attack paths.
                                        <br />
                                        <br />
                                        Identity and data-centric security posture views.
                                        <br />
                                        <br />
                                        Cloud Asset Inventory for unlimited protected assets.
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <Section>
                    <Row className='mt-8'>
                        <div className='col-span-12 lg:col-span-6 py-6 px-7 rounded-md mx-auto lg:mx-0 max-w-xl bg-zircon'>
                            <h3
                                className='font-montserrat font-bold text-blue'
                                css={css`
                                    font-size: 1.75rem;
                                `}
                            >
                                Key Differentiators for Cyscale
                            </h3>
                            <ul className='font-hind text-base mt-6 list-disc ml-5'>
                                <li>
                                    <strong>Focused on smaller cloud-native companies</strong>, making it more aligned
                                    with their specific needs and constraints.
                                </li>
                                <li className='mt-4'>
                                    <strong>
                                        Provides a unique approach to identity, access management and reviews, and
                                        entitlements
                                    </strong>
                                    , for richer contextual analysis (CIEM).
                                </li>
                                <li className='mt-4'>
                                    <strong>Intuitive and actionable risk assessment</strong> that can reduce noise and
                                    direct focus on urgent issues, particularly beneficial for smaller teams.
                                </li>
                                <li className='font-bold mt-4'>
                                    Enables less experienced security practitioners to operate as multi-cloud experts.
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-12 lg:col-span-6 py-6 px-7 rounded-md mx-auto lg:mx-0 max-w-xl lg:max-w-xl bg-lightGrey'>
                            <h3
                                className='font-montserrat font-bold'
                                css={css`
                                    font-size: 1.75rem;
                                    color: #4f5765;
                                `}
                            >
                                Key Differentiators for Wiz
                            </h3>
                            <ul
                                className='font-hind text-base mt-6 list-disc ml-5'
                                css={css`
                                    color: #4f5765;
                                `}
                            >
                                <li>
                                    <strong>Broad market appeal</strong>, but mainly focused on larger enterprises, as
                                    reflected in pricing.
                                </li>
                                <li className='mt-4'>
                                    Combines multiple security aspects (CSPM, vulnerability scanning, container
                                    security, CIEM), but may prove overpowered for small teams.
                                </li>
                                <li className='mt-4'>
                                    Provides a comprehensive solution that covers the entire cloud stack but needs
                                    extensive resources to manage and operate.
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Section>
            </Container>
            <Container>
                <div className='md:pt-0 pb-32 md:pb-32'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' loading='lazy' />
                        <h1 className='text-center px-2 mt-4 mb-2 font-montserrat font-bold text-lg lg:text-2xl'>
                            See how Cyscale can be a better fit than Wiz
                        </h1>
                        <div className='mt-10 w-auto inline-block'>
                            <Link
                                css={css`
                                    padding: 0.625rem 2.5rem;
                                `}
                                className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind'
                                to='/request-demo/'
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default CyscaleVsWiz;
