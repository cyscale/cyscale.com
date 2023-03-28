import React from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import GradientButton from '../../components/buttons/GradientButton';
import LightDarkButton from '../../components/buttons/LightDarkButton';

const AWSCloudSecurity = ({ location }) => {
    const data = useStaticQuery(graphql`
        query AWSCloudSecurityQuery {
            dashboard: file(relativePath: { eq: "dashboard-environments.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            automateCompliance: file(relativePath: { eq: "aws-cloud-overview.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='AWSCloudSecurity'
            title='AWS Cloud Security and Compliance - Cyscale'
            description='Protect AWS environments with a complete Cloud Security Posture Management (CSPM) solution'
        >
            <div className='bg-cloud' style={{ backgroundColor: '#eeeeee' }}>
                <Container>
                    <Section>
                        <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg pt-16 pb-4'>
                            <h1 className='font-semibold font-montserrat text-left text-4xl lg:text-5xl leading-normal lg:leading-normal text-primary mb-10'>
                                AWS Cloud Security
                                <br /> and Compliance
                            </h1>
                            <p className='text-left text-base lg:text-lg mb-6 leading-relaxed'>
                                Protect AWS environments with a complete Cloud Security Posture Management (CSPM)
                                solution - including support for the CIS AWS Foundations Benchmark.
                            </p>
                            <p className='text-left text-base lg:text-lg mb-20 leading-relaxed'>
                                Map, secure, and monitor your AWS assets in minutes.
                            </p>
                            <div className='flex'>
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
                                    <strong>Streamline posture management for AWS (Amazon Web Services)</strong> or your
                                    multi-cloud environments, enable teams to continuously detect misconfigurations and
                                    control threats, and ensure compliance for your cloud assets.
                                </p>
                                <ul className='list-disc ml-4 text-gray'>
                                    <li className='mb-4'>
                                        Have a simple view of all your AWS resources across all regions and accounts
                                    </li>
                                    <li className='mb-4'>
                                        Detect, understand the impact of, and remediate cloud infrastructure
                                        misconfigurations
                                    </li>
                                    <li className='mb-4'>
                                        Stay compliant with CIS benchmarks, industry standards, and your internal
                                        policies to ensure data protection
                                    </li>{' '}
                                    <li className='mb-4'>
                                        Check AWS services for misconfigurations and ensure that AWS CloudTrail, AWS
                                        Config, AWS Security Hub, and other cloud services are correctly configured
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                </Section>
            </Container>
            <Container id='automate-compliance'>
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
                                    We keep your cloud computing environments under continuous assessment and provide
                                    in-app cybersecurity consultancy so you make the most of your time and effort.
                                </p>
                                <p className='leading-normal text-base text-gray'>
                                    Coming soon: create custom Controls that tap into our Security Knowledge Graph™ and
                                    automate the security and compliance requirements checks that matter most for your
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
                                        organization. Cyscale automatically runs all critical security compliance checks
                                        and finds data at-risk in your AWS infrastructure.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>Built-in compliance templates</strong>
                                        <br />
                                        You can either use policy templates as a basis for your custom policies, or
                                        create them from scratch using a smart text editor.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>PCI-DSS, SOC 2, GDPR, and more.</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including: CIS,
                                        ISO27001, PCI-DSS, NIST, SOC2, GDPR, HIPAA. Generate compliance reports and
                                        build compliance programs to secure services and your AWS accounts.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>500+ out-of-the-box security controls</strong>
                                        <br />
                                        Onboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box
                                        compliance controls and a large set of policies and standards. From checking IAM
                                        permissions, related to access control, access management, authentication, to
                                        verifying your firewall settings, Cyscale helps you become compliant with
                                        security standards and ensures you don’t introduce security issues in your
                                        configurations.
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
                                Secure your AWS Assets
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
        </Layout>
    );
};

export default AWSCloudSecurity;
