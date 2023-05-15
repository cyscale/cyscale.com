import React from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import GradientButton from '../../components/buttons/GradientButton';
import LightDarkButton from '../../components/buttons/LightDarkButton';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';

const topArticles = [
    {
        text: 'Securing IAM - Best Practices<br class="hidden lg:block" /> Recommended by AWS, Azure, and GCP',
        link: '/blog/iam-best-practices-from-aws-azure-gcp/',
        children: true
    },
    {
        text: 'IAM Services in AWS, Azure, and GCP -<br class="hidden lg:block" /> A Cloud Industry Overview',
        link: '/blog/iam-services-in-aws-azure-gcp/',
        children: true
    },
    {
        text: 'Okta Security Best Practices',
        link: '/blog/iam-okta-security-best-practices/'
    },
    {
        text: 'Providing Visibility Over Cloud Access –<br class="hidden lg:block" /> Okta Integration in Cyscale',
        link: '/blog/provide-visibility-in-cloud-okta-integration/',
        children: true
    }
];

const IAMSecurity = ({ location }) => {
    const data = useStaticQuery(graphql`
        query IAMSecurityQuery {
            identityDashboard: file(relativePath: { eq: "identity-dashboard.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            identityPage: file(relativePath: { eq: "identity-page.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='IAMSecurity'
            title='IAM Cloud Security | Detect and Mitigate Risk - Cyscale'
            description='Continuous multi-cloud monitoring for identity and access management (IAM) misconfigurations across all your cloud assets to meet strict IAM compliance directives and improve your cloud security posture.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /use-cases/iam-security
            </div>
            <div className='hidden' data-title>
                IAM Cloud Security | Detect and Mitigate Risk - Cyscale
            </div>
            <div className='hidden' data-description>
                Continuous multi-cloud monitoring for identity and access management (IAM) misconfigurations across all
                your cloud assets to meet strict IAM compliance directives and improve your cloud security posture.
            </div>
            <div className='hidden' data-category>
                solutions
            </div>
            <div className='bg-cloud' style={{ backgroundColor: '#eeeeee' }}>
                <Container>
                    <Section>
                        <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-xl pt-16 pb-4'>
                            <h1 className='font-semibold text-left text-4xl lg:text-5xl leading-normal lg:leading-normal text-primary mb-16 font-montserrat'>
                                Identity and Access Management Security
                                <br /> for Cloud
                            </h1>
                            <p className='text-left text-base lg:text-lg mb-2 leading-relaxed'>
                                <strong>Scan, monitor and prioritize cloud IAM risk.</strong>
                            </p>
                            <p className='text-left text-base lg:text-lg mb-24 leading-relaxed'>
                                Continuous multi-cloud monitoring for identity and access management (IAM)
                                misconfigurations across all your cloud resources to meet strict IAM compliance
                                directives and improve your cloud security posture.
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
            <Container>
                <Section id='start'>
                    <Row>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-xl'>
                                <GatsbyImage
                                    image={data.identityDashboard.childImageSharp.gatsbyImageData}
                                    className='shadow-xl'
                                    alt='Identity dashboard'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-5'>
                            <div className='mx-auto lg:mx-0  max-w-xl lg:max-w-none'>
                                <p className='text-base leading-normal my-12 text-gray'>
                                    <strong>
                                        Effectively manage user permissions and enforce privilege access for a robust
                                        cloud security posture.
                                    </strong>
                                </p>

                                <ul className='list-disc ml-4 text-gray'>
                                    <li className='mb-4'>
                                        A powerful Identity Dashboard helping you understand how access is provisioned
                                        in your organization on a per-person basis
                                    </li>
                                    <li className='mb-4'>
                                        Identity provider integration: Onboard your Okta account into Cyscale and get
                                        full visibility on cloud SSO (Single Sign-On) users and provisioning
                                    </li>
                                    <li className='mb-4'>
                                        User access misconfigurations are highlighted so that you can detect and
                                        mitigate cloud computing risk
                                    </li>
                                    <li className='mb-4'>
                                        Easy, granular filtering for: inactive users, highly privileged or high-risk
                                        users, and others
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                </Section>
            </Container>
            <Container id='user-assets'>
                <Section>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm'>
                                <h2 className='text-4xl font-semibold text-primary leading-normal border-title font-montserrat'>
                                    Deep dive into
                                    <br /> User assets
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl'>
                                <p className='leading-normal text-base text-gray mb-8'>
                                    An optimized page for cloud-based user assets helps you visualize and understand:
                                </p>
                                <ul className='list-disc ml-4 text-gray'>
                                    <li className='mb-2'>Access (groups and permissions)</li>
                                    <li className='mb-2'>Risk</li>
                                    <li className='mb-2'>Policy violations</li>
                                    <li className='mb-2'>User-related alerts</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <div className='max-w-xl lg:max-w-5xl mx-auto pt-12'>
                                <GatsbyImage
                                    image={data.identityPage.childImageSharp.gatsbyImageData}
                                    className='shadow-xl'
                                    alt='Identity asset view'
                                />
                            </div>
                        </div>
                    </div>
                </Section>
            </Container>
            <div className='bg-semicircle' id='confidence'>
                <Container>
                    <Section>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-md mb-20'>
                            <h2 className='text-4xl font-semibold text-primary leading-normal border-title font-montserrat'>
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
                                        organization. Cyscale automatically runs all critical compliance checks across
                                        multiple public cloud providers such as AWS (Amazon Web Services), Azure and
                                        GCP, and finds data at-risk.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>Built-in compliance templates</strong>
                                        <br />
                                        You can either use policy templates as a basis for your custom policies, or
                                        create them from scratch using a smart text editor. Your security team can
                                        control access through IAM policies, IAM roles and other IAM solutions to ensure
                                        a sound identity management program and reduce the attack surface.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>PCI-DSS, SOC 2, GDPR, and more.</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including: CIS,
                                        ISO27001, PCI-DSS, NIST, SOC2, GDPR, and helps you prepare for auditing.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong>500+ out-of-the-box security controls</strong>
                                        <br />
                                        Onboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box
                                        cybersecurity controls and a large set of policies and standards to prevent data
                                        breaches. From access control, to MFA (multi-factor authentication), and the
                                        principle of least privilege, we help you with regular access reviews for your
                                        cloud infrastructure.
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
                            <h2 className='text-white text-xl md:text-2xl font-semibold uppercase font-montserrat'>
                                IAM Cloud Security
                            </h2>
                            <p className='text-white text-lg md:text-2xl mb-20 font-montserrat'>
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
            <LinksAndWhitepaper
                topArticles={topArticles}
                data={data}
                title={'IAM'}
                titleCard={'The Complete Guide<br class="hidden lg:block" /> to Cloud Storage Misconfigurations'}
                textCard={
                    'This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data security breaches and the importance of a secure cloud storage infrastructure.'
                }
                linkCard={'/whitepaper/cloud-storage-misconfigurations/'}
                misconfigurationWhitepaper={true}
            />
        </Layout>
    );
};

export default IAMSecurity;
