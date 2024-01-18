import React, { useState } from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import GradientButton from '../../components/buttons/GradientButton';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import { css } from 'twin.macro';
import VideoCyscale from '../../components/campaigns/cspm-solution/CyscaleVideo';
import { CSSTransition } from 'react-transition-group';
import { IAMTopArticles } from '../../common/links';
import ScrollDown from '../../components/ScrollButton/ScrollDown';
import LightDarkButton from '../../components/buttons/LightDarkButton';

const CIEM = ({ location }) => {
    const [modal, setModal] = useState(false);

    const data = useStaticQuery(graphql`
        query CIEMQuery {
            identityDashboard: file(relativePath: { eq: "identity-dashboard.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            identityPage: file(relativePath: { eq: "identity-page.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
            iamVideo: file(relativePath: { eq: "iam-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='CIEMPage'
            title='Cloud Infrastructure Entitlement Management (CIEM)'
            description='Multi-cloud monitoring for entitlement, identity and access management (IAM) misconfigurations across all cloud resources to enforce least privilege policies.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /products/ciem
            </div>
            <div className='hidden' data-title>
                Cloud Infrastructure Entitlement Management (CIEM)
            </div>
            <div className='hidden' data-description>
                Multi-cloud monitoring for entitlement, identity and access management (IAM) misconfigurations across
                all cloud resources to enforce least privilege policies.
            </div>
            <div className='hidden' data-category>
                products
            </div>
            <div
                css={css`
                    background-image: linear-gradient(#eeeeee, #e4edfc);
                `}
            >
                <Container>
                    <Row>
                        <div className='col-span-12 lg:col-span-6'>
                            {' '}
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-xl pt-10 lg:pt-16 pb-4 mt-32'>
                                <h1 className='font-semibold text-left text-4xl lg:text-5xl leading-normal lg:leading-normal text-primary mb-16 font-montserrat'>
                                    Better Identity and Access Management <br />
                                    for Your Cloud
                                </h1>
                                <p className='text-left text-base lg:text-lg mb-2 leading-relaxed'>
                                    <strong>
                                        Scan, monitor and mitigate identity-based risk with{' '}
                                        <br className='hidden lg:block' /> Cloud Infrastructure Entitlement Management
                                        (CIEM).
                                    </strong>
                                </p>
                                <p className='text-left text-base lg:text-lg mb-5 leading-relaxed'>
                                    Continuous multi-cloud monitoring for{' '}
                                    <Link to='/use-cases/iam-security/' className='underline'>
                                        identity and access management (IAM)
                                    </Link>{' '}
                                    misconfigurations across all your cloud resources, to meet strict entitlement
                                    compliance directives and enforce least privilege policies.
                                </p>
                                <p className='mb-20 text-base lg:text-lg text-left leading-relaxed'>
                                    Onboard your{' '}
                                    <Link to='/use-cases/okta-cyscale-integration/' className='underline'>
                                        Okta account
                                    </Link>{' '}
                                    into Cyscale and get full visibility over identities and permissions.
                                </p>
                                <div className='flex mt-8'>
                                    <div className='flex justify-start'>
                                        <Link to='/request-demo/'>
                                            <GradientButton text='BOOK A DEMO' />
                                        </Link>
                                    </div>
                                    <div className='flex justify-start ml-6'>
                                        <Link to='/full-platform-tour/'>
                                            <LightDarkButton text='TAKE A TOUR' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 flex justify-center items-center lg:pt-20'>
                            <div
                                onClick={() => {
                                    setModal(!modal);
                                }}
                                onKeyPress={() => {}}
                                tabIndex='0'
                                role='button'
                            >
                                <GatsbyImage
                                    image={data.iamVideo.childImageSharp.gatsbyImageData}
                                    alt=''
                                    className='max-w-xl'
                                    imgStyle={{ borderRadius: '0.75rem' }}
                                    css={css`
                                        &:hover {
                                            scale: 1.1;
                                        }
                                    `}
                                />
                            </div>
                            {modal && <div className='modal-overlay'></div>}
                            <CSSTransition in={modal} timeout={300} classNames='video' unmountOnExit>
                                <VideoCyscale
                                    setModal={setModal}
                                    videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/iam.mp4'
                                />
                            </CSSTransition>
                        </div>
                    </Row>
                    <div className='pb-16 sm:pb-0'>
                        <ScrollDown />
                    </div>
                </Container>
            </div>
            <Container>
                <Section id='start'>
                    <Row>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-xl'>
                                <GatsbyImage
                                    image={data.identityDashboard.childImageSharp.gatsbyImageData}
                                    className='shadow-xl'
                                    alt='Identity dashboard'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-5'>
                            <div className='mx-auto lg:mx-0  max-w-xl lg:max-w-none'>
                                <p className='text-base leading-normal mt-12 lg:mt-0 mb-12 text-gray'>
                                    <strong>
                                        Monitor human and service identities in context of your entire cloud
                                        infrastructure
                                    </strong>
                                </p>

                                <ul className='list-disc ml-4 text-gray'>
                                    <li className='mb-4'>
                                        Effectively manage user entitlements and enforce least privilege access for a
                                        robust cloud security posture
                                    </li>
                                    <li className='mb-4'>
                                        A powerful Identity Dashboard helps you understand at-a-glance how user and
                                        service access is provisioned in your organization
                                    </li>
                                    <li className='mb-4'>
                                        Identity provider integration: Onboard Okta (including SSO -Single Sign-On),
                                        Google Workspace, Entra ID and more to get full visibility of cloud users and
                                        provisioning
                                    </li>
                                    <li className='mb-4'>
                                        User access misconfigurations are automatically highlighted to help you detect
                                        and mitigate risk
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                </Section>
            </Container>
            <Container id='user-assets'>
                <Section>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm'>
                                <h2 className='text-4xl font-semibold text-primary leading-normal border-title font-montserrat'>
                                    Take the pain out
                                    <br /> of access reviews
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl'>
                                <p className='leading-normal text-base text-gray mb-8'>
                                    A single pane of glass view into all cloud-based user assets, help you understand:
                                </p>
                                <ul className='list-disc ml-4 text-gray'>
                                    <li className='mb-2'>SSO status</li>
                                    <li className='mb-2'>MFA adoption</li>
                                    <li className='mb-2'>Access (groups and permissions)</li>
                                    <li className='mb-2'>Risk</li>
                                    <li className='mb-2'>Policy violations</li>
                                    <li className='mb-2'>User-related alerts</li>
                                    <li className='mb-2'>Where to enforce least privilege access</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <div className='max-w-xl lg:max-w-5xl mx-auto pt-12'>
                                <GatsbyImage
                                    image={data.identityPage.childImageSharp.gatsbyImageData}
                                    className='shadow-xl'
                                    alt='Identity asset view'
                                />
                            </div>
                        </div>
                    </div>
                </Section>
            </Container>
            <div className='bg-semicircle' id='confidence'>
                <Container>
                    <Section>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-md mb-20'>
                            <h2 className='text-4xl font-semibold text-primary leading-normal border-title font-montserrat'>
                                100% Confidence in your Cloud Compliance
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>Meet industry regulations</strong>
                                        <br />
                                        Protect sensitive data and comply with strict industry regulations. Cyscale
                                        automatically runs all critical compliance checks across multiple public cloud
                                        providers such as AWS, Azure and Google Cloud, as well as Kubernetes, and finds
                                        data at-risk.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>Built-in compliance templates</strong>
                                        <br />
                                        You can either use policy templates as a basis for your custom policies or
                                        create them from scratch. Control access through IAM policies, IAM roles and
                                        other IAM solutions to ensure a comprehensive identity management program and
                                        reduce the attack surface.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>PCI-DSS, SOC 2, GDPR, and more.</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including: CIS,
                                        ISO27001, PCI-DSS, NIST, SOC2, GDPR, and helps you prepare for auditing.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>500+ out-of-the-box security controls</strong>
                                        <br />
                                        Onboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box
                                        cybersecurity controls and a large set of policies and standards to prevent data
                                        breaches. From access control to MFA (multi-factor authentication), and the
                                        principle of least privilege, we help make regular access reviews for your cloud
                                        infrastructure quick and painless.
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </Section>
                </Container>
            </div>
            <div className='bg-mesh-logo py-24'>
                <Section>
                    <Container>
                        <div className='mx-auto text-center lg:text-left lg:mx-0 max-w-sm lg:max-w-none'>
                            <h2 className='text-white text-xl md:text-2xl font-semibold uppercase font-montserrat'>
                                Cloud Infrastructure Entitlement Management
                            </h2>
                            <p className='text-white text-lg md:text-2xl mb-20 font-montserrat'>
                                See how Cyscale’s Cloud Native Application Protection Platform (CNAPP)
                                <br className='hidden lg:block' /> can secure your identities and entitlements
                            </p>
                            <Link
                                to='/request-demo/'
                                className='bg-white text-base uppercase font-medium rounded mt-8 hover:bg-transparent font-hind'
                                css={css`
                                    padding: 0.625rem 2.5rem;
                                    border: thin solid #ffffff;
                                    color: #0f26aa;

                                    &:hover {
                                        color: #ffffff;
                                    }
                                `}
                            >
                                BOOK A DEMO
                            </Link>
                        </div>
                    </Container>
                </Section>
            </div>
            <LinksAndWhitepaper
                topArticles={IAMTopArticles}
                data={data}
                title={'IAM'}
                titleCard={'The Complete Guide<br class="hidden lg:block" /> to Cloud Storage Misconfigurations'}
                textCard={
                    'This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data security breaches and the importance of a secure cloud storage infrastructure.'
                }
                linkCard={'/whitepaper/cloud-storage-misconfigurations/'}
                misconfigurationWhitepaper={true}
            />
        </Layout>
    );
};

export default CIEM;
