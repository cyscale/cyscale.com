import React from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import GradientButton from '../../components/buttons/GradientButton';
import LightDarkButton from '../../components/buttons/LightDarkButton';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';

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
    }
];

const GCPCloudSecurity = ({ location }) => {
    const data = useStaticQuery(graphql`
        query GCPCloudSecurityQuery {
            dashboard: file(relativePath: { eq: "dashboard-environments.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            automateCompliance: file(relativePath: { eq: "gcp-cloud-overview.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "cc-whitepaper-bluebird.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
            heroImage: file(relativePath: { eq: "google-cloud-security.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 500, layout: FIXED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='GCPCloudSecurity'
            title='Google Cloud Security | Google Cloud Security and Compliance - Cyscale'
            description='Protect Google  environments with a complete Cloud Security Posture Management (CSPM) solution'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /use-cases/gcp-cloud-security
            </div>
            <div className='hidden' data-title>
                Google Cloud Security | Google Cloud Security and Compliance - Cyscale
            </div>
            <div className='hidden' data-description>
                Protect Google environments with a complete Cloud Security Posture Management (CSPM) solution
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
                                    Google Cloud Security
                                    <br /> and Compliance
                                </h1>
                                <p className='text-left text-base lg:text-lg mb-6 leading-relaxed'>
                                    Protect Google Cloud environments with a complete Cloud Security Posture Management
                                    (CSPM) solution - including support for the CIS Google Cloud Foundations Benchmark.
                                </p>
                                <p className='text-left text-base lg:text-lg mb-20 leading-relaxed'>
                                    Map, secure, and monitor your Google Cloud environment in minutes.
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
                    <div className='mt-24 pb-8'>
                        <ScrollButton to='start' />
                    </div>
                </Container>
            </div>
            <Container>
                <Section id='start'>
                    <Row>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-xl'>
                                <GatsbyImage image={data.dashboard.childImageSharp.gatsbyImageData} />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-5'>
                            <div className='mx-auto lg:mx-0  max-w-xl lg:max-w-none'>
                                <p className='text-base leading-normal my-12 text-gray'>
                                    <strong>Streamline posture management for Google Cloud</strong> services and your
                                    multi-cloud environments. Get visibility into your cloud security and achieve
                                    continuous compliance.
                                </p>
                                <ul className='list-disc ml-4 text-gray'>
                                    <li className='mb-4'>
                                        Security controls for Storage, Compute, Containers, cloud IAM (Identity and
                                        Access Management), Cloud SQL and many other cloud services to ensure
                                        misconfiguration coverage
                                    </li>
                                    <li className='mb-4'>
                                        CIS Google Cloud Platform benchmark available in-app to get guidance on and to
                                        help you follow security best practices
                                    </li>
                                    <li className='mb-4'>
                                        Alerts to help you stay in control of dynamic cloud infrastructures and avoid
                                        cyber threats
                                    </li>
                                    <li className='mb-4'>
                                        Improve team workflows by configuring prefered notification channels and audit
                                        logging
                                    </li>
                                    <li className='mb-4'>
                                        Audit-ready PDF report with Asset Inventory across multiple Google Projects
                                    </li>{' '}
                                    <li className='mb-4'>
                                        Cloud-native cybersecurity across workloads with Google Kubernetes Engine
                                        Service (GKE) management and monitoring
                                    </li>
                                </ul>
                                <p className='text-base leading-normal mt-4 text-gray'>
                                    Moreover, secure your multi-cloud infrastructure that comprises AWS and Azure cloud
                                    computing, as well as single and public cloud environments.{' '}
                                </p>
                            </div>
                        </div>
                    </Row>
                </Section>
            </Container>
            <Container>
                <Section>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-md'>
                                <h2 className='text-4xl font-semibold font-montserrat text-primary leading-normal border-title'>
                                    Automate compliance checks & security control audits
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl'>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    Use Cyscale for governance automation across cloud providers and internal teams to
                                    ensure consistent security and compliance.
                                </p>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    We keep your cloud environments under continuous assessment and provide in-app
                                    security consultancy so you make the most of your time and effort.
                                </p>
                                <p className='leading-normal text-base text-gray'>
                                    Coming soon: create custom Controls that tap into our Security Knowledge Graph™ and
                                    automate the Google Cloud security and compliance checks that matter most for your
                                    organization.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <div className='max-w-xl lg:max-w-5xl mx-auto pt-12'>
                                <GatsbyImage image={data.automateCompliance.childImageSharp.gatsbyImageData} />
                            </div>
                        </div>
                    </div>
                </Section>
            </Container>
            <div className='bg-semicircle' id='confidence'>
                <Container>
                    <Section>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-md mb-20'>
                            <h2 className='text-4xl font-semibold font-montserrat text-primary leading-normal border-title'>
                                100% Confidence in your Cloud Compliance
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
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
                                        You can either use policy templates as a basis to configure custom policies, or
                                        create them from scratch using a smart text editor.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>PCI-DSS, SOC 2, GDPR, and more.</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including: CIS,
                                        ISO27001, PCI-DSS, NIST, SOC2, GDPR, to help you obtain certifications.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>500+ out-of-the-box security controls</strong>
                                        <br />
                                        Onboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box
                                        security controls and a large set of policies and standards covering VMs
                                        (virtual machines), access control, authentication, firewall configuration,
                                        permissions, network security, cloud identity and others.
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
                                Secure your Google Cloud Resources
                            </h2>
                            <p className='text-white font-montserrat text-lg md:text-2xl mb-20'>
                                Start seeing value & saving money in minutes
                            </p>
                            <Link
                                to='/free-trial'
                                className='bg-white text-black font-medium transition-all cursor-pointer duration-300 border uppercase border-black py-5 px-16 rounded inline-block hover:bg-black hover:text-white'
                            >
                                Try Cyscale for Free
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

export default GCPCloudSecurity;
