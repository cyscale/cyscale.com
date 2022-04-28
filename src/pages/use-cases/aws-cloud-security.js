import React from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import { useAppLink } from '../../common/links';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ScrollButton from '../../components/ScrollButton/ScrollButton';

const AWSCloudSecurity = ({ location }) => {
    const appLink = useAppLink({ location });

    const data = useStaticQuery(graphql`
        query AWSCloudSecurityQuery {
            dashboard: file(relativePath: { eq: "dashboard.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            automateCompliance: file(
                relativePath: { eq: "aws-cloud-overview.png" }
            ) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
        }
    `);
    console.log(data);
    return (
        <Layout
            location={location}
            pageName='AWSCloudSecurity'
            title='AWS Cloud Security and Compliance'
            description='Protect AWS environments with a complete Cloud Security Posture Management (CSPM) solution'
        >
            <div className='bg-cloud' style={{ backgroundColor: '#eeeeee' }}>
                <Container>
                    <Section>
                        <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg pt-16 pb-4'>
                            <h1 className='font-semibold text-center sm:text-left text-4xl lg:text-5xl leading-normal text-primary mb-10'>
                                AWS Cloud Security
                                <br /> and Compliance
                            </h1>
                            <p className='text-center sm:text-left text-base lg:text-lg mb-6 leading-relaxed'>
                                Protect AWS environments with a complete Cloud Security Posture Management (CSPM)
                                solution - including support for the CIS AWS Foundations Benchmark.
                            </p>
                            <p className='text-center sm:text-left text-base lg:text-lg mb-20 leading-relaxed'>
                                Map, secure, and monitor your AWS assets in minutes
                            </p>
                            <a
                                href={appLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-gradient-to-r mx-auto sm:mx-0 from-blue to-red max-w-xs block font-medium rounded text-white uppercase text-center py-5 px-12 mt-8 no-underline hover:no-underline '
                            >
                                Try Cyscale for Free
                            </a>
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
                                    <strong>Streamline posture management for AWS</strong> or your multi-cloud
                                    environments, enable teams to continuously detect misconfigurations and control
                                    threats, and ensure compliance for your cloud assets.
                                </p>
                                <ul className='list-disc ml-4 text-gray'>
                                    <li className='mb-4'>
                                        Have a simple view of all your assets across all regions and accounts
                                    </li>
                                    <li className='mb-4'>
                                        Detect, understand the impact of, and remediate infrastructure misconfigurations
                                    </li>
                                    <li className='mb-4'>
                                        Stay compliant with CIS benchmarks, industry standards, and your internal
                                        policies
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                </Section>
            </Container>
            <Container>
                <Section>
                    <Row className='gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm'>
                                <h2 className='text-4xl font-semibold text-primary leading-normal border-title'>
                                    Automate compliance checks & security control audits
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl'>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    Use Cyscale for governance automation across cloud providers and internal teams to
                                    ensure consistent sacurity and compliance.
                                </p>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    We keep your cloud environments under continuous assessment and provide in-app
                                    security consultancy so you make tI most of your time and effort.
                                </p>
                                <p className='leading-normal text-base text-gray'>
                                    Coming soon: create custom Controls that tap into our Security Knowledge Graph™ and
                                    automate the security and compliance checks that matter most for your organization.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <div className='max-w-xl lg:max-w-5xl mx-auto pt-12'>
                                <GatsbyImage image={data.automateCompliance.childImageSharp.gatsbyImageData} />
                            </div>
                        </div>
                    </Row>
                </Section>
            </Container>
            <div className='bg-semicircle'>
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
                                        Protect sensitive data and comply with strict industry regulations in your
                                        Financial organisation Cyscale automatically runs all critical compliance checks
                                        and finds data at-risk.
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
                                        ISO27001, PCI-DSS, NIST, SOC2, GDPR.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>500+ out-of-the-box security controls</strong>
                                        <br />
                                        Onboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box
                                        security controls and a large set of policies and standards.
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
                                Secure your AWS Assets
                            </h2>
                            <p className='text-white text-lg md:text-2xl mb-20'>
                                Start seeing value & saving money in minutes
                            </p>
                            <a
                                href={appLink}
                                className='bg-white text-black font-medium transition-all cursor-pointer duration-300 border uppercase border-black py-5 px-16 rounded inline-block hover:bg-black hover:text-white'
                            >
                                Try Cyscale for Free
                            </a>
                        </div>
                    </Container>
                </Section>
            </div>
        </Layout>
    );
};

export default AWSCloudSecurity;
