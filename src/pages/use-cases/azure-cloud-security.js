import React from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import GradientButton from '../../components/buttons/GradientButton';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import { css } from 'twin.macro';

const topArticles = [
    {
        text: 'IAM Services in AWS, Azure, and <br class="hidden lg:block"/>  Google Cloud - A Cloud Industry Overview',
        link: '/blog/iam-services-in-aws-azure-gcp/',
        children: true
    },
    {
        text: 'Cloud Security and Compliance:<br class="hidden lg:block"/> A Guide for Your Cloud Infrastructure',
        link: '/blog/cloud-security-and-compliance/',
        children: true
    },
    {
        text: 'Securing IAM - Best Practices Recommended by AWS, Azure, and Google Cloud',
        link: '/blog/iam-best-practices-from-aws-azure-gcp/',
        children: true
    },
    {
        text: 'Understanding serverless computing:<br class="hidden lg:block"/> how you can use it and how to secure it',
        link: '/blog/what-is-serverless-computing/',
        children: true
    },
    {
        text: 'PCI-DSS Compliance in the Cloud',
        link: '/blog/pci-dss-compliance-in-cloud/'
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

const AzureCloudSecurity = ({ location }) => {
    const data = useStaticQuery(graphql`
        query AzureCloudSecurityQuery {
            dashboard: file(relativePath: { eq: "dashboard.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            azureGraph: file(relativePath: { eq: "graph.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            automateCompliance: file(relativePath: { eq: "azure-cloud-overview.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "cc-whitepaper-bluebird.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
            marketplace: file(relativePath: { eq: "azure-marketplace.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 250, layout: FIXED)
                }
            }
            heroImage: file(relativePath: { eq: "azure-cloud-security.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 500, layout: FIXED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='AzureCloudSecurity'
            title='Azure Cloud Security and Compliance Automation - Cyscale'
            description='Secure your Azure accounts, continuously scan for risks and monitor events for misconfigurations.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /use-cases/azure-cloud-security/
            </div>
            <div className='hidden' data-title>
                Azure Cloud Security and Compliance Automation - Cyscale
            </div>
            <div className='hidden' data-description>
                Secure your Azure accounts, continuously scan for risks and monitor events for misconfigurations.
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
                                    Azure Cloud Security
                                    <br /> and Compliance
                                </h1>
                                <p className='text-left text-base lg:text-lg mb-6 leading-relaxed'>
                                    Secure your Azure cloud subscriptions by continuously scanning for misconfigurations
                                    and surfacing risk.
                                </p>
                                <p className='text-left text-base lg:text-lg mb-20 leading-relaxed'>
                                    Automatically create and maintain compliance reports for PCI, HIPAA and more.
                                </p>
                                <div className='flex mt-8 justify-start'>
                                    <Link to='/request-demo/'>
                                        <GradientButton text='BOOK A DEMO' />
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
                            <div className='mx-auto max-w-xl'>
                                <h2 className='text-2xl mb-4 lg:mb-0 lg:text-4xl font-normal leading-normal mt-8 font-montserrat'>
                                    <strong>Streamline posture management for Azure cloud</strong>
                                    <br /> or for your multi-cloud environments
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
                                        <strong>Detect & Eliminate Azure Cloud Misconfigurations</strong>, understand
                                        the impact of, and remediate infrastructure misconfigurations in real time.
                                    </li>
                                    <li className='mb-4'>
                                        <strong>Gain Visibility into Compliance violations</strong>, monitor your cloud
                                        assets for Azure compliance violations with predefined controls mapped to the
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
                                    security consultancy so that you make the most of your time and effort.
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
            <Container>
                <div className='pt-24 md:pt-24 pb-96 sm:pb-64'>
                    <div className='flex h-48 flex-col items-center'>
                        <h3
                            className='text-center text-blue px-2 mt-4 mb-2 font-montserrat font-bold'
                            css={css`
                                font-size: 2.375rem;
                            `}
                        >
                            Secure your Azure Cloud Assets today
                        </h3>
                        <p className='font-hind text-xl max-w-2xl text-center mt-12'>
                            Get value & save money in minutes by starting for free. Alternatively, you can find Cyscale
                            on the Azure Marketplace.
                        </p>
                        <div className='mt-10 flex'>
                            <div className='w-auto inline-block'>
                                <Link to='/free-trial/'>
                                    <button
                                        css={css`
                                            padding: 0.625rem 2.5rem;
                                        `}
                                        className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind'
                                    >
                                        TRY CYSCALE FOR FREE
                                    </button>
                                </Link>
                            </div>
                            <div className='w-auto inline-block sm:ml-8'>
                                <a
                                    href='https://azuremarketplace.microsoft.com/en-us/marketplace/apps/cyscale.cyscale?tab=overview'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <button
                                        className='bg-white mx-auto md:mx-0 font-medium rounded text-blue uppercase text-center no-underline transition-all duration-100 hover:no-underline font-hind cursor-pointer'
                                        css={css`
                                            padding: 0.625rem 2.5rem;
                                            display: none;
                                            border: thin solid #0f26aa;

                                            &:hover {
                                                background-color: #e5edfa;
                                                border: thin solid #0f26aa;
                                            }

                                            @media (min-width: 641px) {
                                                display: inline-block;
                                            }
                                        `}
                                    >
                                        VIEW ON AZURE MARKETPLACE
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='mt-12'>
                            <GatsbyImage image={data.marketplace.childImageSharp.gatsbyImageData} alt='' />
                        </div>
                    </div>
                </div>
            </Container>
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

export default AzureCloudSecurity;
