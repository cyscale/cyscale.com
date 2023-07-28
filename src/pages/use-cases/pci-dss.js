import React from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import headerImage from '../../assets/images/remote-work-heading-image.png';
import GradientButton from '../../components/buttons/GradientButton';
import LightDarkButton from '../../components/buttons/LightDarkButton';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import { css } from 'twin.macro';

const topArticles = [
    {
        text: 'PCI-DSS Compliance in the Cloud',
        link: '/blog/pci-dss-compliance-in-cloud/'
    },
    {
        text: 'Bridging the Gap Between ISO 27001 and Cloud-Native Systems',
        link: '/blog/implementing-iso-27001-for-cloud-native-systems/',
        children: true
    },
    {
        text: 'SOC 2 vs ISO 27001:<br class="hidden lg:block"/> What every SaaS needs to know',
        link: '/blog/soc-2-vs-ISO-27001-SaaS/',
        children: true
    },
    {
        text: 'AWS SOC 2 Compliance Checklist:<br class="hidden lg:block"/> A Detailed Guide',
        link: '/blog/AWS-SOC-2-Compliance-Checklist-A-Detailed-Guide/',
        children: true
    },
    {
        text: 'Cloud Security and Compliance:<br class="hidden lg:block"/>A Guide for Your Cloud Infrastructure',
        link: '/blog/cloud-security-and-compliance/',
        children: true
    }
];

const PciDss = ({ location }) => {
    const data = useStaticQuery(graphql`
        query PSIteQuery {
            graph: file(relativePath: { eq: "graph.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            automateCompliance: file(relativePath: { eq: "standards-pci-dss.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "cc-whitepaper-bluebird.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='PCIDSS'
            title='PCI Cloud Security & Compliance | Automate PCI DSS Compliance - Cyscale'
            description='Strong cloud security process for payment card data that enables prevention, detection, and response to security incidents. Automate threat detection & gain advanced security controls. Learn more now!'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /use-cases/pci-dss
            </div>
            <div className='hidden' data-title>
                PCI Cloud Security & Compliance | Automate PCI DSS Compliance - Cyscale
            </div>
            <div className='hidden' data-description>
                Strong cloud security process for payment card data that enables prevention, detection, and response to
                security incidents. Automate threat detection & gain advanced security controls. Learn more now!
            </div>
            <div className='hidden' data-category>
                solutions
            </div>
            <div className='bg-cloud bg-lightGrey'>
                <Container>
                    <Section className='pb-3'>
                        <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-xl pt-16 pb-4'>
                            <h1 className='font-semibold font-montserrat text-left text-4xl lg:text-5xl leading-normal lg:leading-normal text-primary mb-16'>
                                PCI DSS
                                <br /> Compliance for Cloud
                            </h1>
                            <p className='text-left text-base lg:text-lg mb-6 leading-relaxed'>
                                Cyscale helps you develop a strong cloud security process for payment card data that
                                enables prevention, detection, and response to security incidents.
                            </p>
                            <p className='text-left text-base lg:text-lg mb-2 leading-relaxed'>
                                <strong>
                                    A robust compliance toolbox for cloud-native and cloud-first organizations.
                                </strong>
                            </p>
                            <div className='flex mt-8'>
                                <Link to='/free-trial'>
                                    <GradientButton text='Start Free Trial' />
                                </Link>
                                <Link to='/request-demo' className='ml-4'>
                                    <LightDarkButton text={'Request Demo'} />
                                </Link>
                            </div>
                        </div>
                    </Section>
                    <div className='pb-8'>
                        <ScrollButton to='start' />
                    </div>
                </Container>
            </div>
            <Container className='h-96 sm:h-96 md:h-80'>
                <div className='lg:pt-32 lg:pb-32'>
                    <Row>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <h2 className='text-2xl mb-4 lg:mb-0 lg:text-4xl font-normal font-montserrat leading-normal mt-8'>
                                    <strong>Automate cloud security</strong>
                                    <br /> <strong>and PCI DSS compliance</strong>
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto max-w-xl ml-auto'>
                                <GatsbyImage image={data.graph.childImageSharp.gatsbyImageData} alt='Inventory Graph' />
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
            <div className='bg-lightGrey sm:mt-0 md:mt-0 lg:mt-12'>
                <Container className='pt-0 sm:pt-10 md:pt-24 lg:pt-0'>
                    <div className='pt-12 sm:pt-24 pb-24 lg:pt-32 lg:pb-32 lg:grid lg:grid-cols-12' id='start'>
                        <div className='col-span-12 lg:col-start-1 col-end-6'>
                            <div className='mx-auto lg:mx-0  max-w-xl lg:max-w-none'>
                                <ul className='list-disc ml-4 text-gray mt-8'>
                                    <li className='mb-4 '>
                                        <strong>Protect cardholder data: </strong>
                                        Securing the storage and transmission of cardholder data, while always being
                                        prepared for security audits.
                                    </li>
                                    <li className='mb-4'>
                                        <strong>Policy-based security: </strong> Out-of-the-box assurance and
                                        enforcement policies that you can configure across workloads and cloud
                                        infrastructure.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-start-8 col-span-4'>
                            <div className='mx-auto lg:mx-0  max-w-xl lg:max-w-none'>
                                <ul className='list-disc ml-4 text-gray mt-8'>
                                    <li className='mb-4'>
                                        <strong>Strong access control: </strong> Restrict and monitor access to stored
                                        cardholder data
                                    </li>
                                    <li className='mb-4'>
                                        <strong>Real-time visibility with detection and response:</strong>
                                        &nbsp;Comprehensive visibility across the entire cloud native lifecycle from
                                        build, to infrastructure, to runtime
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container id='automate-compliance'>
                <Section>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 sm:px-3 lg:col-span-4'>
                            <div className='mx-auto lg:mx-0 max-w-xl'>
                                <h2 className='text-4xl font-semibold font-montserrat text-primary leading-normal border-title'>
                                    Automate compliance checks & security control audits
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12  mt-8 sm:mt-0 sm:px-3 lg:col-span-8'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-full'>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    Use Cyscale for governance automation across cloud service providers and internal
                                    teams to ensure consistent data security and compliance in cloud computing.
                                </p>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    We keep your cloud environments under continuous assessment and provide in-app
                                    security consultancy for your security systems so that you make the most of your
                                    time and effort and secure cloud resources.
                                </p>
                                <p className='leading-normal text-base text-gray'>
                                    Coming soon: create custom Controls that tap into our Security Knowledge Graph™ and
                                    automate the cybersecurity and compliance checks that matter most for your
                                    organization.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-xl lg:max-w-5xl mx-auto pt-12'>
                        <GatsbyImage
                            image={data.automateCompliance.childImageSharp.gatsbyImageData}
                            alt='Stadards view'
                        />
                    </div>
                </Section>
            </Container>
            <Container id='align-entities'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-center'>
                    <div>
                        <h2 className='font-semibold font-montserrat text-blue text-34px leading-normal lg:max-w-sm null sectionTitle new-line max-w-xl mx-auto'>
                            Align teams & tasks
                            <span key='ali123' className='block w-full font-normal'>
                                Govern all cloud entities from a single dashboard
                            </span>
                        </h2>
                        <img
                            src={headerImage}
                            alt='Govern all cloud entities from a single dashboard'
                            className='w-auto h-auto mt-8 mx-auto lg:mx-0'
                            loading='lazy'
                        />
                    </div>
                    <div className='hidden lg:block'></div>
                    <div className=' max-w-xl mx-auto mb-12'>
                        <p className='text-block text-16px leading-normal new-line mt-8'>
                            Consolidate all the key elements of cloud compliance in an easy-to-use dashboard. Replace
                            cloud portals with our Cloud Platform - the hub for a sweeping overview of your{' '}
                            <a
                                href='/products/cloud-security-posture-management/'
                                key='csp123'
                                className=' text-blue underline text-16px hover:no-underline hover:text-red'
                            >
                                cloud security posture
                            </a>
                            .
                        </p>
                        <p className='text-block text-16px leading-normal new-line mt-8'>
                            Implement, manage, and monitor security policies and controls for single cloud, multi-cloud,
                            and hybrid environments through reliable automation.
                        </p>
                        <p className='text-block text-16px leading-normal new-line mt-8'>
                            Demonstrate compliance for multiple projects with read-only dashboard access or reports
                            (CSV, PDF) you can share with internal stakeholders, prospects, or customers, and assessors.
                        </p>
                        <p className='text-block text-16px leading-normal new-line mt-8'>
                            Meet compliance requirements for credit cards and ensure information security in the public
                            cloud. Become PCI-DSS compliant with Cyscale.
                        </p>
                    </div>
                </div>
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
                                        Protect sensitive data and comply with strict industry standards in your
                                        financial organization. Cyscale automatically runs all critical compliance
                                        checks and finds data at-risk and generates compliance reports to help you
                                        prevent data breaches.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>PCI-DSS, SOC 2, GDPR, and more.</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including: CIS,
                                        ISO27001, PCI-DSS, NIST, SOC2, GDPR.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>Built-in compliance templates</strong>
                                        <br />
                                        You can either use policy templates as a basis for your custom policies, or
                                        create them from scratch to meet PCI-DSS standard requirements.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>500+ out-of-the-box security controls</strong>
                                        <br />
                                        Onboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box
                                        security controls and policies to meet business needs and ensure data
                                        protection. From firewalls to authentication, we help you meet security
                                        requirements and become compliant with the PCI-DSS standard.
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
                                PCI DSS COMPLIANCE AND CLOUD SECURITY
                            </h2>
                            <p className='text-white font-montserrat text-lg md:text-2xl mb-20'>
                                Start seeing value & saving money in minutes
                            </p>
                            <Link
                                to='/free-trial'
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

export default PciDss;
