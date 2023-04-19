import React from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Container, Row } from '../../components/atoms/Containers';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import GradientButton from '../../components/buttons/GradientButton';
import LightDarkButton from '../../components/buttons/LightDarkButton';
import { css } from 'twin.macro';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';

const titleSection = css`
    font-size: 1.625rem;
    line-height: 2rem;
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const topArticles = [
    {
        text: 'SOC 2 Compliance in The Cloud',
        link: '/blog/soc-2-compliance-in-cloud/'
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

const Soc2 = ({ location }) => {
    const data = useStaticQuery(graphql`
        query Soc2Query {
            inventory: file(relativePath: { eq: "inventory-soc-2.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            standards: file(relativePath: { eq: "standards-soc-2.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            standardsChecks: file(relativePath: { eq: "standards-checks-soc-2.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
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
            pageName='SOC2'
            title='SOC 2 Cloud Security and Compliance Automation - Cyscale'
            description='A powerful set of technical controls helping you prepare for a SOC 2 audit in areas such as security, availability, processing integrity, confidentiality and privacy'
        >
            <div className='bg-hero-soc2 pt-8'>
                <Container>
                    <div className='py-16 md:py-24 lg:pt-24 lg:pb-16'>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                                <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1 className='text-left text-blue text-4xl lg:text-5xl leading-normal lg:leading-normal mb-16 montserrat-font'>
                                        <strong>SOC 2 Compliance</strong> <br className='block md:hidden lg:block' />{' '}
                                        for Cloud
                                    </h1>
                                    <p className='text-left text-base lg:text-lg mb-8 leading-relaxed text-gray font-hind'>
                                        Cyscale offers a powerful set of technical controls helping you prepare for a
                                        SOC 2 audit in areas such as security, availability, processing integrity,
                                        confidentiality and privacy.
                                    </p>
                                    <p className='text-left text-base lg:text-lg mb-2 leading-relaxed text-gray font-hind'>
                                        Out-of-the-box policies that you can use for a solid data security program.
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
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='lg:mt-16 pt-4 max-w-lg lg:max-w-2xl mx-auto lg:mx-0'>
                                    <GatsbyImage
                                        image={data.inventory.childImageSharp.gatsbyImageData}
                                        alt='Inventory graph-view with violated standards and policies'
                                    />
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='py-8 md:py-12 lg:py-20'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-md'>
                                <h2
                                    className='font-bold text-primary border-title-partly montserrat-font'
                                    css={titleSection}
                                >
                                    Automate cloud security <br /> and SOC 2 compliance
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl'>
                                <p className='leading-normal text-base mt-8 mb-2 montserrat-font font-semibold font-hind'>
                                    Asset inventory
                                </p>
                                <p className='leading-normal text-base text-gray font-hind'>
                                    A multi-cloud asset inventory enables the management of information assets. Easily
                                    filter the asset table and generate relevant inventory reports.
                                </p>
                                <p className='leading-normal text-base mt-4 mb-2 montserrat-font font-semibold font-hind'>
                                    Identity and access management
                                </p>
                                <p className='leading-normal text-base text-gray font-hind'>
                                    Detect misconfigurations and vulnerabilities related to identities and access and
                                    ensure the implementation of Least Privilege and Separation of Duties. Get alerts on
                                    new findings in your cloud environments.
                                </p>
                                <p className='leading-normal text-base mt-4 mb-2 montserrat-font font-semibold font-hind'>
                                    Encryption
                                </p>
                                <p className='leading-normal text-base text-gray font-hind'>
                                    Ensure encryption with strong algorithms is used for data in-transit and at-rest to
                                    provide data protection from cyberattacks.
                                </p>
                                <p className='leading-normal text-base mt-4 mb-2 montserrat-font font-semibold font-hind'>
                                    Logging and monitoring
                                </p>
                                <p className='leading-normal text-base text-gray font-hind'>
                                    Make sure that your systems have logs activated and in place, to allow for the
                                    detection of anomalies and security incidents in real-time.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mt-8 lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.standards.childImageSharp.gatsbyImageData}
                                    alt='SOC 2 Standard detailed view'
                                />
                                <p className='leading-normal text-xs text-grey2 mx-auto max-w-xl lg:max-w-lg font-hind'>
                                    SOC 2 (Service and Organization Controls 2) is a security standard developed by
                                    AICPA (The American Institute of Certified Public Accountants). The standard has 5
                                    Trust Service Criteria (TSC) categories and 64 Trust Service Criteria.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-8 md:py-12 lg:py-20'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0  hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mt-8 lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.standardsChecks.childImageSharp.gatsbyImageData}
                                    alt='Standards inventory view with focus on SOC 2'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <h2
                                    className='text-3xl font-bold text-primary border-title-partly montserrat-font'
                                    css={titleSection}
                                >
                                    Automate compliance checks & security control audits
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Use Cyscale for governance automation across cloud service providers and internal
                                    security teams to ensure consistent information security and compliance.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    We keep your cloud infrastructure under continuous assessment and provide in-app
                                    security consultancy so that you make the most of your time and effort.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Ensure SOC 2 compliance in your cloud computing environment across multiple cloud
                                    service providers such as AWS, Azure, GCP (Google Cloud Platform).
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Coming soon: create custom Controls that tap into our Security Knowledge Graph™ to
                                    automate and optimize the cybersecurity and compliance checks that matter most for
                                    your organization.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mt-8 lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.standardsChecks.childImageSharp.gatsbyImageData}
                                    alt='Standards inventory view with focus on SOC 2'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-gradient-to-b from-selago to-white relative z-10' id='confidence'>
                <img src={corner} width={300} className='hidden md:block absolute top-0 right-0 m-0 z-20' alt='' />
                <Container>
                    <div className='py-8 md:py-12 lg:py-20'>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-md mb-20'>
                            <h2
                                className='font-bold text-primary border-title-partly montserrat-font'
                                css={titleSection}
                            >
                                100% Confidence with <br /> your Cloud Compliance
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='montserrat-font'>Meet industry regulations</strong>
                                        <br />
                                        Protect sensitive data and comply with strict industry regulations in your
                                        organisation. Cyscale automatically runs all critical compliance checks and
                                        finds data at-risk to help you avoid data breaches.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='montserrat-font'>PCI-DSS, SOC 2, GDPR, and more</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including: CIS,
                                        ISO27001, PCI-DSS, NIST,
                                        <br className='hidden lg:block' /> SOC 2, GDPR.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='montserrat-font'>Built-in compliance templates</strong>
                                        <br />
                                        You can either use policy templates as a basis for your custom policies, or
                                        create them from scratch.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='montserrat-font'>
                                            500+ out-of-the-box security controls
                                        </strong>
                                        <br />
                                        Onboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box
                                        security controls.
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='md:pt-12 pb-12 md:pb-24'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' />
                        <h2 className='text-center px-2 mt-4 mb-2 montserrat-font font-bold font-hind text-lg lg:text-2xl'>
                            SOC COMPLIANCE AND CLOUD SECURITY
                        </h2>
                        <p className='font-hind text-base sm:text-lg lg:text-xl'>
                            Start seeing value & saving money in minutes
                        </p>
                        <div className='mt-10 w-auto inline-block'>
                            <Link
                                className='gradientBgBtn w-full block text-sm font-medium rounded text-white text-center py-4 px-12 hover:no-underline no-underline font-hind'
                                to='/request-demo'
                            >
                                REQUEST LIVE DEMO
                            </Link>
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

export default Soc2;
