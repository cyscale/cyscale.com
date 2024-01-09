import React, { useState } from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import GradientButton from '../../components/buttons/GradientButton';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import { css } from 'twin.macro';
import ScrollDown from '../../components/ScrollButton/ScrollDown';
import LightDarkButton from '../../components/buttons/LightDarkButton';
import { CSSTransition } from 'react-transition-group';
import StorylaneModal from '../../components/full-platform-tour/StorylaneModal';

const topArticles = [
    {
        text: 'IAM Services in AWS, Azure, and <br class="hidden lg:block"/>  Google Cloud - A Cloud Industry Overview',
        link: '/blog/iam-services-in-aws-azure-gcp/',
        children: true
    },
    {
        text: 'Securing IAM - Best Practices Recommended by AWS, Azure, and Google Cloud',
        link: '/blog/iam-best-practices-from-aws-azure-gcp/',
        children: true
    },
    {
        text: 'Cloud Security and Compliance:<br class="hidden lg:block"/>A Guide for Your Cloud Infrastructure',
        link: '/blog/cloud-security-and-compliance/',
        children: true
    },
    {
        text: 'Understanding serverless computing:<br class="hidden lg:block"/> how you can use it and how to secure it',
        link: '/blog/what-is-serverless-computing/',
        children: true
    },
    {
        text: 'What Is Data Classification And<br class="hidden lg:block"/> Why Is It Important?',
        link: '/blog/data-classification/',
        children: true
    },
    {
        text: (
            <>
                Cloud Compliance 101:
                <br /> From Basics to Best Practices
            </>
        ),
        link: '/blog/cloud-compliance-101-basics-best-practices/'
    }
];

const KubernetesSecurity = ({ location }) => {
    const [modal, setModal] = useState(false);

    const data = useStaticQuery(graphql`
        query KubernetesSecurityQuery {
            dashboard: file(relativePath: { eq: "k8s-dashboard.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "cc-whitepaper-bluebird.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
            heroImage: file(relativePath: { eq: "k8s-hero.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 500, layout: FIXED)
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
            pageName='KSPMPage'
            title='Kubernetes Security Platform'
            description='Protect your K8s environments with a complete Kubernetes Security Posture Management (KSPM) solution'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /use-cases/kubernetes-security-platform
            </div>
            <div className='hidden' data-title>
                Kubernetes Security Platform
            </div>
            <div className='hidden' data-description>
                Protect your K8s environments with a complete Kubernetes Security Posture Management (KSPM) solution
            </div>
            <div className='hidden' data-category>
                solutions
            </div>
            <div style={{ backgroundColor: '#eeeeee' }}>
                <Container>
                    <Row>
                        <div className='col-span-12 lg:col-span-6 order-last lg:order-first mt-36 lg:mt-28'>
                            <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                <h1 className='font-semibold font-montserrat text-left text-4xl lg:text-5xl leading-normal lg:leading-normal text-primary mb-10'>
                                    Kubernetes Security
                                    <br /> and Compliance Platform
                                </h1>
                                <p className='text-left text-base lg:text-lg mb-6 leading-relaxed'>
                                    Protect your K8s environments with a complete Kubernetes Security Posture Management
                                    (KSPM) and misconfiguration detection solution. See where you have Kubernetes images
                                    with vulnerabilities and where those images are deployed.
                                </p>
                                <p className='text-left text-base lg:text-lg mb-20 leading-relaxed'>
                                    Map, secure, and monitor your Kubernetes environment in minutes.
                                </p>
                                <div className='flex'>
                                    <div className='flex justify-start'>
                                        <Link to='/request-demo/'>
                                            <GradientButton text='BOOK A DEMO' />
                                        </Link>
                                    </div>
                                    <div className='flex justify-start ml-6'>
                                        <div>
                                            <div
                                                onClick={() => {
                                                    setModal(!modal);
                                                }}
                                                onKeyPress={() => {}}
                                                tabIndex='0'
                                                role='button'
                                            >
                                                <LightDarkButton text='TAKE A TOUR' />
                                            </div>
                                            {modal && <div className='modal-overlay'></div>}
                                            <CSSTransition in={modal} timeout={300} classNames='video' unmountOnExit>
                                                <StorylaneModal
                                                    setModal={setModal}
                                                    src='https://app.storylane.io/demo/hucyibzvndsj'
                                                />
                                            </CSSTransition>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 hidden lg:block'>
                            <div className='relative'>
                                <div className='mt-48 xl:ml-24'>
                                    <div className='hidden lg:block lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl'>
                                        <GatsbyImage image={data.heroImage.childImageSharp.gatsbyImageData} alt='' />
                                    </div>
                                </div>
                            </div>
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
                                    image={data.dashboard.childImageSharp.gatsbyImageData}
                                    alt='Kubernetes Dashboard'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-5'>
                            <div className='mx-auto lg:mx-0  max-w-xl lg:max-w-none'>
                                <p className='text-base leading-normal text-gray font-bold'>
                                    Streamline posture management with Cyscale’s Kubernetes security platform. Get
                                    visibility into your K8s security and achieve continuous compliance.
                                </p>
                                <ul className='list-disc ml-4 text-gray'>
                                    <li className='mb-4'>
                                        Cloud-native cybersecurity across workloads, with Azure Kubernetes Service
                                        (AKS), Amazon Elastic Kubernetes Service (EKS), and Google Kubernetes Engine
                                        Service (GKE) management and monitoring.
                                    </li>
                                    <li className='mb-4'>
                                        Understand Kubernetes application behavior and detect any suspicious activity.
                                    </li>
                                    <li className='mb-4'>
                                        Security controls for Kubernetes clusters, pods, containers and other services
                                        to ensure comprehensive misconfiguration coverage.
                                    </li>
                                    <li className='mb-4'>
                                        Map components from your Kubernetes cluster to the actual infrastructure on
                                        which it is running. See where you have Kubernetes images with vulnerabilities
                                        and where those images are deployed.
                                    </li>
                                    <li className='mb-4'>
                                        Ensure least privilege access in Kubernetes with Identity and Access Management
                                        (IAM) assessments to continuously reduce the risk of over-provisioned roles and
                                        service accounts.
                                    </li>
                                    <li className='mb-4'>
                                        Audit-ready PDF report with Asset Inventory across your Kubernetes estate.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                </Section>
            </Container>
            <Container>
                <div className='pt-0 pb-24 lg:pb-32'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-md'>
                                <h2 className='text-4xl font-semibold font-montserrat text-primary leading-normal border-title'>
                                    Automate Kubernetes compliance checks & security control audits
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 lg:flex lg:items-center'>
                            <div className='mx-auto lg:mx-0 max-w-xl'>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    Automate compliance checks of your managed and unmanaged K8s environments. Cyscale
                                    covers all the AWS, Google Cloud, Azure, and general CIS Kubernetes Benchmarks, with
                                    100+ security controls checked.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 hidden lg:block lg:mt-6'>
                            <div className='max-w-xl lg:max-w-5xl mx-auto pt-12 relative'>
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
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-semicircle' id='confidence'>
                <Container>
                    <Section>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-md mb-20'>
                            <h2 className='text-4xl font-semibold font-montserrat text-primary leading-normal border-title'>
                                100% Confidence in your Kubernetes Compliance
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>See and respond to known Kubernetes threats</strong>
                                        <br />
                                        Find and prevent misconfigurations and threats in your Kubernetes environments,
                                        without dealing with false positives and overwhelming alerts.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>Meet industry regulations</strong>
                                        <br />
                                        Protect sensitive data and comply with strict industry regulations in your
                                        organization. Cyscale automatically runs all critical compliance checks and
                                        finds data at-risk.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>Built-in compliance templates</strong>
                                        <br />
                                        You can either use dozens of out-of-the-box policy templates as a basis to
                                        configure custom policies or import your own using a smart text editor.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>PCI-DSS, SOC 2, GDPR, and more</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including CIS,
                                        ISO27001, PCI-DSS, NIST, SOC2, GDPR, to help you obtain certifications.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>Dozens of out-of-the-box security controls</strong>
                                        <br />
                                        Onboard teams in 30 minutes and coordinate efforts to apply out-of-the-box
                                        security controls and a large set of policies and standards covering containers,
                                        access control, authentication, firewall configuration, permissions, network
                                        security, identity and others.
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
                            <h2 className='text-white text-xl md:text-2xl font-semibold font-montserrat uppercase'>
                                Secure your KUBERNETES Resources
                            </h2>
                            <p className='text-white font-montserrat text-lg md:text-2xl mb-20'>
                                Time to value in less than 30 minutes
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
                                Get a demo
                            </Link>
                        </div>
                    </Container>
                </Section>
            </div>
            <LinksAndWhitepaper
                topArticles={topArticles}
                data={data}
                title={'Compliance'}
                titleCard={
                    'The In-Depth Guide <br class="hidden lg:block"/>to Cloud Compliance<br class="hidden lg:block" /> in 2023'
                }
                textCard={
                    'What standards exist on the market, and who are they destined for? <br /><br />Download the whitepaper to read about ISO 27001, SOC 2, PCI-DSS, GDPR, HIPAA.'
                }
                linkCard={'/whitepaper/the-complete-guide-to-cloud-compliance/'}
            />
        </Layout>
    );
};

export default KubernetesSecurity;
