import React from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Container, Row, Section } from '../../components/atoms/Containers';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useAppLink } from '../../common/links';

const Soc2 = ({ location }) => {
    const appLink = useAppLink({ location });

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
        }
    `);

    return (
        <Layout location={location} pageName='SOC2' title='SOC2' description='SOC2'>
            <div className='bg-hero-soc2 pt-8'>
                <Container>
                    <div className='py-24 lg:pt-24 lg:pb-16'>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                                <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1 className='text-center lg:text-left text-blue text-4xl lg:text-5xl leading-normal mb-16 montserrat-font'>
                                        <strong>SOC2 Compliance</strong> <br className='hidden lg:block' /> for Cloud
                                    </h1>
                                    <p className='text-center lg:text-left text-base lg:text-lg mb-8 leading-relaxed text-gray'>
                                        Cyscale offers a powerful set of technical controls helping you prepare for a
                                        SOC2 audit in areas such as security, availability, processing integrity,
                                        confidentiality and privacy
                                    </p>
                                    <p className='text-center lg:text-left text-base lg:text-lg mb-2 leading-relaxed text-gray'>
                                        Out-of-the-box policies that you can use for a solid security program.
                                    </p>
                                    <a
                                        href={appLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='bg-gradient-to-r mx-auto lg:mx-0 from-blue to-red block font-medium rounded text-white uppercase text-center py-4 px-8 mt-8 no-underline hover:no-underline max-w-sm lg:inline-block'
                                    >
                                        Try Cyscale for Free
                                    </a>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='lg:mt-16 pt-4 max-w-lg lg:max-w-2xl mx-auto lg:mx-0'>
                                    <GatsbyImage image={data.inventory.childImageSharp.gatsbyImageData} />
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='py-16 md:py-24 lg:py-32'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-md'>
                                <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                    Automate cloud security <br /> and SOC2 compliance
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-md'>
                                <p className='leading-normal text-base mt-8 mb-2 montserrat-font font-semibold'>
                                    Asset inventory
                                </p>
                                <p className='leading-normal text-base text-gray'>
                                    A multi-cloud asset inventory enables the management of information assets. Easily
                                    filter the asset table and generate relevant inventory reports.
                                </p>
                                <p className='leading-normal text-base mt-4 mb-2 montserrat-font font-semibold'>
                                    Identity and access management
                                </p>
                                <p className='leading-normal text-base text-gray'>
                                    Detect misconfigurations related to identities and access and ensure the
                                    implementation of Least Privilege and Separation of Duties. Get alerts on new
                                    findings.
                                </p>
                                <p className='leading-normal text-base mt-4 mb-2 montserrat-font font-semibold'>
                                    Encryption
                                </p>
                                <p className='leading-normal text-base text-gray'>
                                    Ensure encryption with strong algorithms is used for data in-transit and at-rest.
                                </p>
                                <p className='leading-normal text-base mt-4 mb-2 montserrat-font font-semibold'>
                                    Logging and monitoring
                                </p>
                                <p className='leading-normal text-base text-gray'>
                                    Make sure that your systems have logs activated and in place, to allow for the
                                    detection of anomalies.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mt-8 lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage image={data.standards.childImageSharp.gatsbyImageData} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-16 md:py-24 lg:py-32'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0  hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mt-8 lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage image={data.standardsChecks.childImageSharp.gatsbyImageData} />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                    Automate compliance checks & security control audits
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                    Use Cyscale for governance automation across cloud providers and internal teams to
                                    ensure consistent security and compliance.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    We keep your cloud environments under continuous assessment and provide in-app
                                    security consultancy so that you make the most of your time and effort.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Coming soon: create custom Controls that tap into our Security Knowledge Graph™ and
                                    automate the security and compliance checks that matter most for your organization.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mt-8 lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage image={data.standardsChecks.childImageSharp.gatsbyImageData} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-blue-gradient' id='confidence' style={{ position: 'relative', zIndex: 1 }}>
                <img
                    src={corner}
                    style={{ position: 'absolute', top: 0, right: 0, margin: 0, zIndex: -1 }}
                    width={300}
                    className='hidden md:block'
                />
                <Container>
                    <Section>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-sm mb-20'>
                            <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                100% Confidence with <br /> your IAM Compliance
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong className='montserrat-font'>Meet industry regulations</strong>
                                        <br />
                                        Protect sensitive data and comply with strict industry in your Financial
                                        organisation. Cyscale automatically runs all critical compliance checks and
                                        finds data at-risk.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong className='montserrat-font'>PCI-DSS, SOC 2, GDPR, and more</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including: CIS,
                                        ISO27001, PCI-DSS, NIST, SOC2, GDPR.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong className='montserrat-font'>Built-in compliance templates</strong>
                                        <br />
                                        You can either use policy templates as a basis for your custom policies, or
                                        create them from scratch.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong className='montserrat-font'>
                                            500+ out-of-the-box security controls
                                        </strong>
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
            <Container>
                <div className='pt-12 pb-24 lg:pt-32 lg:pb-32'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='Cloud Icon' />
                        <h1 className='text-center px-2 mt-4 mb-2 montserrat-font font-semibold'>
                            SOC COMPLIANCE AND CLOUD SECURITY
                        </h1>
                        <p>Start seeing value & saving money in minutes</p>
                        <div className='mt-10 w-auto inline-block'>
                            <Link
                                className='gradientBgBtn w-full block text-sm font-medium rounded text-white text-center py-4 px-12 hover:no-underline no-underline'
                                to='/request-demo'
                            >
                                Request Live Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Soc2;
