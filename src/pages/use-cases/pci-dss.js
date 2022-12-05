import React from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import headerImage from '../../assets/images/remote-work-heading-image.png';

const PciDss = ({ location }) => {
    const data = useStaticQuery(graphql`
        query PSIteQuery {
            graph: file(relativePath: { eq: "graph.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            automateCompliance: file(
                relativePath: { eq: "automate-compliance-as-code-iac-continuous-assessment-pci.png" }
            ) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='PCIDSS'
            title='PCI DSS Compliance for Cloud'
            description='Scan, monitor and prioritize cloud IAM risk'
        >
            <div className='bg-cloud bg-lightGrey'>
                <Container>
                    <Section className='pb-3'>
                        <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-xl pt-16 pb-4'>
                            <h1 className='font-semibold text-center sm:text-left text-4xl lg:text-5xl leading-normal text-primary mb-16'>
                                PCI DSS
                                <br /> Compliance for Cloud
                            </h1>
                            <p className='text-center sm:text-left text-base lg:text-lg mb-6 leading-relaxed'>
                                Cyscale helps you develop a strong cloud security process for payment card data that
                                enables prevention, detection, and response to security incidents.
                            </p>
                            <p className='text-center sm:text-left text-base lg:text-lg mb-2 leading-relaxed'>
                                <strong>
                                    A robust compliance toolbox for cloud-native and cloud-first organizations.
                                </strong>
                            </p>
                            <Link
                                to='/free-trial'
                                className='bg-gradient-to-r mx-auto sm:mx-0 from-blue to-red max-w-xs block font-medium rounded text-white uppercase text-center py-5 px-12 mt-8 no-underline hover:no-underline '
                            >
                                Try Cyscale for Free
                            </Link>
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
                                <h2 className='text-2xl mb-4 lg:mb-0 lg:text-4xl font-normal leading-normal mt-8'>
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
                                    <li className='mb-4'>
                                        <strong>Protect cardholder data: </strong>
                                        Securing the storage and transmission of cardholder data, while always being
                                        prepared for security audits.
                                    </li>
                                    <li className='mb-4'>
                                        <strong>Policy-based security: </strong> Out-of-the-box assurance and
                                        enforcement policies that you can configure across workloads and infrastructure.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-start-8 col-span-4'>
                            <div className='mx-auto lg:mx-0  max-w-xl lg:max-w-none'>
                                <ul className='list-disc ml-4 text-gray mt-8'>
                                    <li className='mb-4'>
                                        <strong>Strong access control: </strong> Restrict and monitor access to
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
                                <h2 className='text-4xl font-semibold text-primary leading-normal border-title'>
                                    Automate compliance checks & security control audits
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12  mt-8 sm:mt-0 sm:px-3 lg:col-span-8'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-full'>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    Use Cyscale for governance automation across cloud providers and internal teams to
                                    ensure consistent security and compliance.
                                </p>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    We keep your cloud environments under continuous assessment and provide in-app
                                    security consultancy so that you make the most of your time and effort.
                                </p>
                                <p className='leading-normal text-base text-gray'>
                                    Coming soon: create custom Controls that tap into our Security Knowledge Graph™ and
                                    automate the security and compliance checks that matter most for your organization.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-xl lg:max-w-5xl mx-auto pt-12'>
                        <GatsbyImage image={data.automateCompliance.childImageSharp.gatsbyImageData} alt='Connectors' />
                    </div>
                </Section>
            </Container>
            <Container id='align-entities'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-center'>
                    <div>
                        <h2 className='font-semibold text-blue text-34px leading-normal lg:max-w-sm null sectionTitle new-line max-w-xl mx-auto'>
                            Align teams & tasks
                            <span key='ali123' className='block w-full font-normal'>
                                Govern all cloud entities from a single dashboard
                            </span>
                        </h2>
                        <img
                            src={headerImage}
                            alt='Govern all cloud entities from a single dashboard'
                            className='w-auto h-auto mt-8 mx-auto lg:mx-0'
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
                            (CSV, PDF) you can share with internal stakeholders, prospects, or customers.
                        </p>
                    </div>
                </div>
            </Container>
            <div className='bg-semicircle' id='confidence'>
                <Container>
                    <Section>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-sm mb-20'>
                            <h2 className='text-4xl font-semibold text-primary leading-normal border-title'>
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
                                        checks and finds data at-risk.
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
                                        create them from scratch.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>500+ out-of-the-box security controls</strong>
                                        <br />
                                        Onboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box
                                        security controls and policies.
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
                            <h2 className='text-white text-xl md:text-2xl font-semibold uppercase'>
                                PCI DSS COMPLIANCE AND CLOUD SECURITY
                            </h2>
                            <p className='text-white text-lg md:text-2xl mb-20'>
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
        </Layout>
    );
};

export default PciDss;
