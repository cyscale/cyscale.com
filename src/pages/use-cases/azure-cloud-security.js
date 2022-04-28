import React from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import { useAppLink } from '../../common/links';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ScrollButton from '../../components/ScrollButton/ScrollButton';

const AzureCloudSecurity = ({ location }) => {
    const appLink = useAppLink({ location });

    const data = useStaticQuery(graphql`
        query AzureCloudSecurityQuery {
            dashboard: file(relativePath: { eq: "dashboard.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            azureGraph: file(relativePath: { eq: "azure-graph.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            automateCompliance: file(
                relativePath: { eq: "azure-cloud-overview.png" }
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
            pageName='AzureCloudSecurity'
            title='Azure Cloud Security and Compliance'
            description='Secure your Azure accounts, continuously scan for risks and monitor events for
            misconfigurations.'
        >
            <div className='bg-cloud' style={{ backgroundColor: '#eeeeee' }}>
                <Container>
                    <Section>
                        <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg pt-16 pb-4'>
                            <h1 className='font-semibold text-center sm:text-left text-4xl lg:text-5xl leading-normal text-primary mb-10'>
                                Azure Cloud Security
                                <br /> and Compliance
                            </h1>
                            <p className='text-center sm:text-left text-base lg:text-lg mb-6 leading-relaxed'>
                                Secure your Azure accounts, continuously scan for risks and monitor events for
                                misconfigurations.
                            </p>
                            <p className='text-center sm:text-left text-base lg:text-lg mb-20 leading-relaxed'>
                                Automatically create and maintain compliance reports for PCI, HIPAA and more.
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
                            <div className='mx-auto max-w-xl lg:max-w-lg'>
                                <h2 className='text-2xl mb-4 lg:mb-0 lg:text-4xl font-normal leading-normal mt-8'>
                                    <strong>Streamline posture management for Azure</strong>
                                    <br /> or your multi-cloud environments environments
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto max-w-xl ml-auto'>
                                <GatsbyImage image={data.azureGraph.childImageSharp.gatsbyImageData} />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0  max-w-xl lg:max-w-none'>
                                <ul className='list-disc ml-4 text-gray mt-8'>
                                    <li className='mb-4'>
                                        <strong>Detect & Eliminate Azure Misconfiguration</strong>, understand the
                                        impact of, and remediate infrastructure misconfigurations in real time.
                                    </li>
                                    <li className='mb-4'>
                                        <strong>Gain Visibility into Compliance violations</strong>, monitor your cloud
                                        assets for Azure compliance violations with predefined rules mapped to CIS Azure
                                        compliance controls.
                                    </li>
                                    <li className='mb-4'>
                                        <strong>Have a simple view of all your assets</strong> across all regions,
                                        subscriptions and resource groups
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0  max-w-xl lg:max-w-none'>
                                <ul className='list-disc ml-4 text-gray mt-8'>
                                    <li className='mb-4'>
                                        <strong>Onboard entire tenants at once</strong> and get visibility on multiple
                                        subscriptions
                                    </li>
                                    <li className='mb-4'>
                                        <strong>
                                            Use a powerful asset view to understand infrastructure and configurations
                                        </strong>
                                        , and see the impact on compliance
                                    </li>
                                    <li className='mb-4'>
                                        <strong>Discover unused Azure cloud resources</strong> and reduce attack surface
                                        while optimizing costs
                                    </li>
                                    <li className='mb-4'>
                                        <strong>Easily generate security and compliance reports</strong> for internal or
                                        external stakeholders
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
                                        <br />
                                        Protect sensitive data and comply with strict industry regulations in your
                                        Financial organisation Cyscale automatically runs all critical compliance checks
                                        and finds data at-risk.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>PCI-DSS, SOC 2, GDPR, and more.</strong>
                                        <br />
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including: CIS,
                                        ISO27001, PCI-DSS, NIST, SOC2, GDPR.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>Built-in compliance templates</strong>
                                        <br />
                                        <br />
                                        You can either use policy templates as a basis for your custom policies, or
                                        create them from scratch using a smart text editor.
                                    </p>
                                </div>

                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>500+ out-of-the-box security controls</strong>
                                        <br />
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
                                Secure your Azure Assets
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

export default AzureCloudSecurity;
