import React from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Container, Row } from '../../components/atoms/Containers';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import GradientButton from '../../components/buttons/GradientButton';
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
        text: 'NIST Compliance in the Cloud',
        link: '/blog/nist-compliance-in-the-cloud/'
    },
    {
        text: 'Protecting PII in the Cloud',
        link: '/blog/protecting-pii-in-the-cloud/'
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

const NISTCompliance = ({ location }) => {
    const data = useStaticQuery(graphql`
        query NISTComplianceQuery {
            inventory: file(relativePath: { eq: "nist-inventory.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            standards: file(relativePath: { eq: "standards-nist.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            standardsChecks: file(relativePath: { eq: "standards-checks-nist.png" }) {
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
            pageName='NIST'
            title='NIST Cloud Compliance & Security - Cyscale'
            description='A powerful set of technical controls helping you with NIST compliance in areas such as security, availability, processing integrity, confidentiality and privacy'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /use-cases/nist-compliance
            </div>
            <div className='hidden' data-title>
                NIST Cloud Compliance & Security - Cyscale
            </div>
            <div className='hidden' data-description>
                A powerful set of technical controls helping you with NIST compliance in areas such as security,
                availability, processing integrity, confidentiality and privacy
            </div>
            <div className='hidden' data-category>
                solutions
            </div>
            <div className='bg-hero-nist pt-8'>
                <Container>
                    <div className='py-16 md:py-24 lg:pt-24 lg:pb-16'>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                                <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1 className='text-left text-blue text-4xl lg:text-5xl leading-normal lg:leading-normal mb-16 font-montserrat'>
                                        <strong>NIST Compliance</strong> <br className='block md:hidden lg:block' /> for
                                        Cloud
                                    </h1>
                                    <p className='text-left text-base lg:text-lg mb-8 leading-relaxed text-gray font-hind'>
                                        Enforce regulatory compliance controls for NIST and beyond.
                                    </p>
                                    <p className='text-left text-base lg:text-lg mb-2 leading-relaxed text-gray font-hind'>
                                        Cyscale continuously evaluates your multi-cloud environments for compliance
                                        violations with predefined rules mapped to NIST 800-53 compliance controls.
                                    </p>
                                    <div className='flex mt-8 justify-start'>
                                        <Link to='/request-demo/'>
                                            <GradientButton text='BOOK A DEMO' />
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
                                    className='font-bold text-primary border-title-partly font-montserrat lg:mt-3'
                                    css={titleSection}
                                >
                                    Automate cloud security
                                    <br /> and NIST compliance
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='text-base mt-4 font-hind'>
                                    The 800-53 catalog of controls is a significant companion of the framework and
                                    Cyscale Platforms has a large set of technical controls to help your organization
                                    track compliance.
                                </p>
                                <p className='text-base text-gray mt-4 font-semibold font-hind'>
                                    Get notified as soon as your cloud environments drift away from selected 800-53
                                    controls across:
                                </p>
                                <ul className='text-base text-gray list-disc font-hind'>
                                    <li className='ml-6'>Access Control</li>
                                    <li className='ml-6'> Audit and Accountability</li>{' '}
                                    <li className='ml-6'> Identity and Authentication</li>
                                    <li className='ml-6'> System and Information Integrity</li>
                                    <li className='ml-6'> … and many others</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 lg:mt-0 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.standards.childImageSharp.gatsbyImageData}
                                    alt='NIST Standard detailed view'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-8 md:py-12 lg:py-20'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0  hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.standardsChecks.childImageSharp.gatsbyImageData}
                                    alt='Standards inventory view with focus on NIST'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat lg:mt-3'
                                    css={titleSection}
                                >
                                    Automate compliance checks & security control audits
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='text-base text-gray pt-12 pb-2 font-hind'>
                                    Use Cyscale for governance automation across cloud providers and internal teams to
                                    ensure consistent security and compliance.
                                </p>
                                <p className='text-base text-gray py-2 font-hind'>
                                    We keep your cloud environments under continuous assessment and provide in-app
                                    security consultancy so that you make the most of your time and effort.
                                </p>
                                <p className='text-base text-gray py-2 font-hind'>
                                    Coming soon: create custom Controls that tap into our Security Knowledge Graph™ and
                                    automate the security and compliance checks that matter most for your organization.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mt-8 lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.standardsChecks.childImageSharp.gatsbyImageData}
                                    alt='Standards inventory view with focus on NIST'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-gradient-to-b from-selago to-white relative z-10' id='confidence'>
                <img
                    src={corner}
                    width={300}
                    className='hidden md:block absolute top-0 right-0 m-0 z-20'
                    alt=''
                    loading='lazy'
                />
                <Container>
                    <div className='py-8 md:py-12 lg:py-20'>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-md mb-20'>
                            <h2
                                className='font-bold text-primary border-title-partly font-montserrat'
                                css={titleSection}
                            >
                                100% Confidence with
                                <br className='block lg:hidden' /> your Cloud Compliance
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
                                        finds data at-risk.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6 font-hind'>
                                    <p className='leading-normal text-base text-gray mb-6'>
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
                        <img src={cloudIcon} alt='' loading='lazy' />
                        <h1 className='text-center px-2 mt-4 mb-2 font-montserrat font-bold font-hind text-lg lg:text-2xl'>
                            NIST COMPLIANCE AND CLOUD SECURITY
                        </h1>
                        <p className='font-hind text-base sm:text-lg lg:text-xl'>
                            Start seeing value & saving money in minutes
                        </p>
                        <div className='mt-10 w-auto inline-block'>
                            <Link
                                css={css`
                                    padding: 0.625rem 2.5rem;
                                `}
                                className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind'
                                to='/request-demo/'
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

export default NISTCompliance;
