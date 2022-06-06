import React from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import { useAppLink } from '../../common/links';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import Sectionheader from '../../components/layout/sectionheader';

const IAMSecurity = ({ location }) => {
    const appLink = useAppLink({ location });

    const data = useStaticQuery(graphql`
        query PSIteQuery {
            graph: file(relativePath: { eq: "graph.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            automateCompliance: file(relativePath: { eq: "automate-compliance-as-code-iac-continuous-assessment.png" }) {
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
                                <strong>A robost compliance toolbox for cloud-native and cloud-first
                                    organizations.</strong>
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
            <Container className='sm:h-96'>
                <Section>
                    <Row>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto max-w-xl lg:max-w-lg'>
                                <h2 className='text-2xl mb-4 lg:mb-0 lg:text-4xl font-normal leading-normal mt-8'>
                                    <strong>Automate cloud security</strong>
                                    <br /> and PCI DSSx compliance
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto max-w-xl ml-auto'>
                                <GatsbyImage image={data.graph.childImageSharp.gatsbyImageData} alt='' />
                            </div>
                        </div>
                    </Row>
                </Section>
            </Container>
            <div className='bg-lightGrey sm:mt-28 md:mt-1 '>
                <Container className='pt-0 sm:pt-10 md:pt-48 lg:pt-0'>
                    <Section id="start">
                        <Row>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='mx-auto lg:mx-0  max-w-xl lg:max-w-none'>
                                    <ul className='list-disc ml-4 text-gray mt-8'>
                                        <li className='mb-4'>
                                            <strong>Detect & Eliminate Azure Cloud Misconfigurations</strong>,
                                            understand
                                            the impact of, and remediate infrastructure misconfigurations in real time.
                                        </li>
                                        <li className='mb-4'>
                                            <strong>Gain Visibility into Compliance violations</strong>, monitor your
                                            cloud
                                            assets for Azure compliance violations with predefined controls mapped to
                                            the
                                            CIS Azure Security and other benchmarks.
                                        </li>
                                        <li className='mb-4'>
                                            <strong>Have a simple view of your cloud assets</strong> across all regions,
                                            subscriptions and resource groups
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='mx-auto lg:mx-0  max-w-xl lg:max-w-none'>
                                    <ul className='list-disc ml-4 text-gray mt-8'>
                                        <li className='mb-4'>
                                            <strong>Onboard entire tenants at once</strong> and get visibility on
                                            multiple
                                            subscriptions
                                        </li>
                                        <li className='mb-4'>
                                            <strong>
                                                Use a powerful asset view to understand infrastructure and
                                                configurations
                                            </strong>
                                            , and see the impact on compliance
                                        </li>
                                        <li className='mb-4'>
                                            <strong>Discover unused Azure cloud resources</strong> and reduce attack
                                            surface
                                            while optimizing costs
                                        </li>
                                        <li className='mb-4'>
                                            <strong>Easily generate security and compliance reports</strong> for
                                            internal or
                                            external stakeholders
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Row>
                    </Section>
                </Container>
            </div>
            <Container>
                <Section>
                    <Row className='gap-12'>
                        <div className='hidden sm:block col-span-12 px-3 lg:col-span-4'>
                            <div className='mx-auto lg:mx-0 max-w-xl'>
                                <h2 className='text-4xl font-semibold text-primary leading-normal border-title'>
                                    Automate compliance checks & security control audits
                                </h2>
                            </div>
                        </div>
                        <div className='hidden sm:block col-span-12 px-3 lg:col-span-8'>
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
                    </Row>
                    <div className='mx-auto max-w-xl sm:hidden'>
                        <h2 className='text-4xl font-semibold text-primary leading-normal border-title'>
                            Automate compliance checks & security control audits
                        </h2>
                    </div>
                    <div className='mx-auto max-w-xl mt-12 sm:hidden'>
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
                    <div className='max-w-xl lg:max-w-5xl mx-auto pt-12'>
                        <GatsbyImage image={data.automateCompliance.childImageSharp.gatsbyImageData} alt='' />
                    </div>
                </Section>
            </Container>
            <Container>
                <Sectionheader
                    headingText={[
                        'Align teams & tasks',
                        <span key='ali123' className='block w-full font-normal'>
                            Govern all cloud entities from a single dashboard
                        </span>
                    ]}
                    description={[
                        'Consolidate all the key elements of cloud compliance in an easy-to-use dashboard. Replace cloud portals with our Cloud Platform - the hub for a sweeping overview of your',
                        ' ',
                        <a
                            href='/products/cloud-security-posture-management/'
                            key='csp123'
                            className=' text-blue underline text-16px hover:no-underline hover:text-red'
                        >
                            cloud security posture
                        </a>,
                        '.\n\nImplement, manage, and monitor security policies and controls for single cloud, multi-cloud, and hybrid environments through reliable automation.\n\nDemonstrate compliance for multiple projects with read-only dashboard access or reports (CSV, PDF) you can share with internal stakeholders, prospects, or customers.'
                    ]}
                    section='complianceGovern'
                    pageName="PCIDSS"
                />
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
                                        organization. Cyscale automatically runs all critical compliance checks and
                                        finds data at-risk.
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
                                        create them from scratch using a smart text editor.
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
                                PCI DSS COMPLIANCE AND CLOUD SECURITY
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

export default IAMSecurity;
