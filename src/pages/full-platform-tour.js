import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/CleanLayout';
import { Container, Row } from '../components/atoms/Containers';
import { css } from 'twin.macro';
import GradientButton from '../components/buttons/GradientButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import ScrollDown from '../components/ScrollButton/ScrollDown';
import { CSSTransition } from 'react-transition-group';
import CalendarSection from '../components/Home/CalendarSection';
import VideoFullTour from '../components/full-platform-tour/VideoFullTour';
import StorylaneModal from '../components/full-platform-tour/StorylaneModal';

const subtitle = css`
    font-size: 1.625rem;
    line-height: 2rem;
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const cartTitleSize = css`
    font-size: 1.375rem;
`;

const cardTextColor = css`
    color: #4f5765;
`;

const FullPlatformTour = ({ location }) => {
    const [modal, setModal] = useState(false);
    const [platformModal, setPlatformModal] = useState(false);
    const [kModal, setKModal] = useState(false);

    const data = useStaticQuery(graphql`
        query FullTourQuery {
            heroImage: file(relativePath: { eq: "hero-image-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            inventory: file(relativePath: { eq: "inventory-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            scopes: file(relativePath: { eq: "scopes-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            graph: file(relativePath: { eq: "graph-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            alerts: file(relativePath: { eq: "alerts-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            data: file(relativePath: { eq: "data-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            iam: file(relativePath: { eq: "iam-video.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            compliance: file(relativePath: { eq: "compliance-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            ai: file(relativePath: { eq: "ai-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            platform: file(relativePath: { eq: "cyscale-tour-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            k8s: file(relativePath: { eq: "kubernetes-tour-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='FullTourPage'
            title='Cyscale Cloud Security Platform interactive product tours'
            description='Get a comprehensive overview of the features and capabilities of the Cyscale Platform as interactive product tours.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /full-platform-tour
            </div>
            <div className='hidden' data-title>
                Cyscale Cloud Security Platform interactive product tours
            </div>
            <div className='hidden' data-description>
                Get a comprehensive overview of the features and capabilities of the Cyscale platform as interactive product tours.
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div className='bg-zircon sm:pb-0 pt-32 lg:pt-40 xl:pt-28 relative'>
                <Container>
                    <Row>
                        <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                            <div className='lg:mt-4 max-w-2xl mx-auto lg:mx-0'>
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
                                    Cyscale Cloud <br /> Security Platform <br />
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
                                        tours
                                    </span>
                                </h1>
                                <p
                                    className='text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-hind'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    Get a comprehensive overview of the features and capabilities of the Cyscale
                                    platform as interactive product tours. Scroll down to see a breakdown in easily understandable
                                    sections.
                                </p>
                                <Link
                                    to='/request-demo/'
                                    className='mt-8 mb-12 lg:mb-16 mx-auto lg:mx-0 block lg:inline-block'
                                >
                                    <GradientButton text='BOOK A DEMO' />
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 '>
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
                                            &:hover {
                                                scale: 1.025;
                                            }
                                        `}
                                        alt='Video Thumbnail'
                                        imgStyle={{ borderRadius: '0.75rem' }}
                                    />
                                </div>
                                {modal && <div className='modal-overlay'></div>}
                                <CSSTransition in={modal} timeout={300} classNames='video' unmountOnExit>
                                    <StorylaneModal
                                        setModal={setModal}
                                        src='https://app.storylane.io/demo/xiaviyvpr3sd'
                                    />
                                </CSSTransition>
                            </div>
                        </div>
                    </Row>

                    <h3 className='font-montserrat text-blue font-bold text-xl text-center'>
                        Explore the Cyscale Platform
                    </h3>
                    <p className='font-montserrat text-blue font-medium text-lg text-center'>
                        Great for small security teams, security leads, CISOs, and CTOs.
                    </p>
                    <Row className='mt-8'>
                        <div className='col-span-12 lg:col-span-2'></div>
                        <div className='col-span-12 lg:col-span-4 py-6 px-7 bg-white rounded-2xl mx-auto lg:mx-0 max-w-xl'>
                            <div
                                onClick={() => {
                                    setPlatformModal(!platformModal);
                                }}
                                onKeyPress={() => {}}
                                tabIndex='0'
                                role='button'
                            >
                                <GatsbyImage
                                    image={data.platform.childImageSharp.gatsbyImageData}
                                    css={css`
                                        &:hover {
                                            scale: 1.05;
                                        }
                                    `}
                                    alt='Video Thumbnail'
                                    imgStyle={{ borderRadius: '0.75rem' }}
                                />
                            </div>
                            {platformModal && <div className='modal-overlay'></div>}
                            <CSSTransition in={platformModal} timeout={300} classNames='video' unmountOnExit>
                                <StorylaneModal
                                    setModal={setPlatformModal}
                                    src='https://app.storylane.io/demo/xiaviyvpr3sd'
                                />
                            </CSSTransition>

                            <p className='font-montserrat font-semibold text-blue text-sm mt-3' css={cardTextColor}>
                                PRODUCT TOUR
                            </p>
                            <h3 className='font-montserrat font-bold text-blue mt-1' css={cartTitleSize}>
                                Cloud Security Platform
                            </h3>
                            <p className='font-hind text-base mt-4' css={cardTextColor}>
                                A single-pane-of-glass view and security for AWS, Azure, Google Cloud, Kubernetes, Okta,
                                containers, and more
                            </p>
                        </div>
                        <div className='col-span-12 lg:col-span-4 py-6 px-7 bg-white rounded-2xl mx-auto lg:mx-0 max-w-xl lg:max-w-xl'>
                            <div
                                onClick={() => {
                                    setKModal(!kModal);
                                }}
                                onKeyPress={() => {}}
                                tabIndex='0'
                                role='button'
                            >
                                <GatsbyImage
                                    image={data.k8s.childImageSharp.gatsbyImageData}
                                    css={css`
                                        &:hover {
                                            scale: 1.05;
                                        }
                                    `}
                                    alt='Video Thumbnail'
                                    imgStyle={{ borderRadius: '0.75rem' }}
                                />
                            </div>
                            {kModal && <div className='modal-overlay'></div>}
                            <CSSTransition in={kModal} timeout={300} classNames='video' unmountOnExit>
                                <StorylaneModal setModal={setKModal} src='https://app.storylane.io/demo/hucyibzvndsj' />
                            </CSSTransition>
                            <p className='font-montserrat font-semibold text-blue text-sm mt-3' css={cardTextColor}>
                                PRODUCT TOUR
                            </p>
                            <h3 className='font-montserrat font-bold text-blue mt-1' css={cartTitleSize}>
                                Kubernetes Security
                            </h3>
                            <p className='font-hind text-base mt-4' css={cardTextColor}>
                                Understand at a glance the security posture for your K8s clusters
                            </p>
                        </div>
                        <div className='col-span-12 lg:col-span-2'></div>
                    </Row>
                    <div className='pb-16 sm:pb-0'>
                        <ScrollDown />
                    </div>
                </Container>
            </div>
            <Container>
                <div className='pb-8 pt-16 lg:pt-32 lg:pb-16' id='start'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <VideoFullTour
                                image={data.inventory}
                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/inventory-tour.mp4'
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                    css={subtitle}
                                >
                                    Your Cloud Asset Inventory
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Get full visibility of your cloud estate, locate shadow infrastructure, and manage
                                    all your resources from one pane of glass. Comprehensive support for AWS, Azure,
                                    Google Cloud, Alibaba, Kubernetes, containers and more.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 my-8 sm:mt-0 block lg:hidden'>
                            <VideoFullTour
                                image={data.inventory}
                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/inventory-tour.mp4'
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pb-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:mt-6'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                    css={subtitle}
                                >
                                    Scopes and Groups
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Organize cloud security your own way. Group infrastructure in a way that makes sense
                                    for your unique business. Create Scopes based on applications, regional assets,
                                    compliance requirements, or anything you can think of.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <VideoFullTour
                                image={data.scopes}
                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/scopes-tour.mp4'
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-8 lg:pt-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <VideoFullTour
                                image={data.graph}
                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/graph-view-tour.mp4'
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg lg:pl-16'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                    css={subtitle}
                                >
                                    Graph View
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Understand the context around misconfigurations, vulnerabilities, and other risks.
                                    See attack paths and how one vulnerable asset impacts another. Prioritize work to be
                                    done and speed remediation.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 my-8 sm:mt-0 block lg:hidden'>
                            <VideoFullTour
                                image={data.graph}
                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/graph-view-tour.mp4'
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pb-8 lg:py-16 lg:pt-24'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:mt-6'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                    css={subtitle}
                                >
                                    Alerts
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Make cloud security more manageable. Eliminate endless lists of tasks and false
                                    positives. No more alert fatigue. When Cyscale says it’s urgent, it’s actually
                                    urgent, based on your unique business needs.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <VideoFullTour
                                image={data.alerts}
                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/alerts-tour.mp4'
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <VideoFullTour
                                image={data.data}
                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/data-security-tour.mp4'
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg lg:pl-16'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                    css={subtitle}
                                >
                                    Data
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Identify and secure your crown jewels, sensitive data repositories, PII, and
                                    customer info. Quickly locate publicly accessible data stores. Keep track of
                                    encryption keys and status.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 my-8 sm:mt-0 block lg:hidden'>
                            <VideoFullTour
                                image={data.data}
                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/data-security-tour.mp4'
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pb-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:mt-6'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                    css={subtitle}
                                >
                                    Identity and Access Management
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Significantly reduce the time it takes to perform access reviews. Understand
                                    permissions at-a-glance, identify accounts without MFA enabled and never miss an
                                    offboarding again. Simple integration with identity providers like Okta.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <VideoFullTour
                                image={data.iam}
                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/identity-dashboard.mp4'
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <VideoFullTour
                                image={data.compliance}
                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/compliance-tour.mp4'
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg lg:pl-16'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                    css={subtitle}
                                >
                                    Compliance and Policies
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Out of the box support for dozens of compliance standards and frameworks, including
                                    CIS Cloud Benchmarks, ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST, and many more to
                                    help your team with internal or external audits. Import and activate your own
                                    policies.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 my-8 sm:mt-0 block lg:hidden'>
                            <VideoFullTour
                                image={data.compliance}
                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/compliance-tour.mp4'
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pb-16 lg:pt-16 lg:pb-32'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:mt-6'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                    css={subtitle}
                                >
                                    AI-Powered Security Assistant
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    AI-powered insights into your cloud security posture and remediation suggestions.
                                    Interrogate the platform using natural language to demystify the implications and
                                    actions around CVSS scores
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <VideoFullTour
                                image={data.ai}
                                videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/ai-assistant-tour.mp4'
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <CalendarSection />
        </Layout>
    );
};

export default FullPlatformTour;
