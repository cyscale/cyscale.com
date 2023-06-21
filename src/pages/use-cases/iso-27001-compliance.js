import React from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import getStartedICon from '../../assets/images/getStartedIconCPSM.svg';
import GetStarted from '../../components/Home/getstarted';
import { graphql, Link, useStaticQuery } from 'gatsby';
import GradientButton from '../../components/buttons/GradientButton';
import LightDarkButton from '../../components/buttons/LightDarkButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';

const topArticles = [
    {
        text: 'Bridging the Gap Between ISO 27001 and Cloud-Native Systems',
        link: '/blog/implementing-iso-27001-for-cloud-native-systems/'
    },
    {
        text: 'The ISO 27001 certification, policy by policy',
        link: '/blog/ISO-27001-certification-standard-policies-procedures/'
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

const StepCard = ({ groups, list, order }) => {
    return (
        <div className='shadow-lg p-4 rounded-lg col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 relative'>
            <div className='absolute  bottom-0 right-0 rounded-tl-lg rounded-br-lg flex items-center justify-center bg-primary w-8 h-8'>
                <span className='font-bold text-xl text-white'>{order}</span>
            </div>
            {groups.map((g, key) => (
                <div key={key} className='py-4'>
                    <p className='text-sm'>{g.main}</p>
                    {g.list && (
                        <ul className='list-disc pl-4'>
                            {React.Children.map(g.list, (item, key) => (
                                <li key={key} className='text-xs leading-snug mt-2'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

const CloudCompliance = ({ location }) => {
    const data = useStaticQuery(graphql`
        query ISOQuery {
            isoHero: file(relativePath: { eq: "iso-27001-hero-image.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            assetInventory: file(relativePath: { eq: "asset-inventory-iso.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            actionablePolicies: file(relativePath: { eq: "actionable-policies-iso.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            controls: file(relativePath: { eq: "controls-iso.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            policies: file(relativePath: { eq: "policies-iso.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
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
            pageName='ISO27001Compliance'
            title='ISO 27001 Cloud Security | Compliance & Security - Cyscale'
            description='Easy & continuous compliance for ISO 27001, with a set of battle-tested policies to jumpstart your ISMS. Secure your assets with cutting-edge controls & policies.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /use-cases/iso-27001-compliance
            </div>
            <div className='hidden' data-title>
                ISO 27001 Cloud Security | Compliance & Security - Cyscale
            </div>
            <div className='hidden' data-description>
                Easy & continuous compliance for ISO 27001, with a set of battle-tested policies to jumpstart your ISMS.
                Secure your assets with cutting-edge controls & policies.
            </div>
            <div className='hidden' data-category>
                solutions
            </div>
            <div className='bg-lightGrey'>
                <Container>
                    <div className='pt-20 max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                        <Section>
                            <Row>
                                <div className='col-span-12 lg:col-span-6 order-2 lg:order-1'>
                                    <h1 className='font-semibold font-montserrat text-3xl lg:text-5xl leading-normal lg:leading-normal text-primary'>
                                        ISO 27001 Compliance & Security for Cloud Environment
                                    </h1>
                                    <p className='text-base lg:text-lg mt-8 leading-relaxed'>
                                        Easy & continuous compliance for ISO 27001, with a set of battle-tested policies
                                        to jumpstart your ISMS. Secure your assets with cutting-edge controls &
                                        policies.
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
                                <div className='col-span-12 mb-10 lg:mb-0 lg:col-span-6 lg:pl-8 order-1 lg:order-2'>
                                    <GatsbyImage
                                        image={data.isoHero.childImageSharp.gatsbyImageData}
                                        alt='Why is ISO 27001'
                                        className='mx-auto'
                                    />
                                </div>
                            </Row>
                        </Section>
                    </div>
                    <div className='pb-8'>
                        <ScrollButton to='start' />
                    </div>
                </Container>
            </div>
            <Container id='start'>
                <Section>
                    <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                        <Row>
                            <div className='col-span-12 text-center py-16'>
                                <h2 className='font-semibold font-montserrat text-primary text-3xl lg:text-5xl'>
                                    Why is ISO 27001 important?
                                </h2>
                                <p className='text-base lg:text-xl leading-relaxed max-w-5xl mx-auto mt-8'>
                                    <strong>ISO/IEC 27001:2013</strong> is the golden international standard when it
                                    comes to information security. Part of the <strong>ISO/IEC 27000 family</strong>, it
                                    helps organizations protect their assets such as employee information, user data,
                                    and intellectual property. Being <strong>ISO 27001 compliant</strong> gives you and
                                    your customers the confidence to run and expand your business.
                                </p>
                            </div>
                        </Row>
                    </div>
                </Section>
                <Section>
                    <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none' id='iso-compliant'>
                        <h2 className='font-semibold font-montserrat text-primary text-2xl lg:text-4xl mb-8 text-center'>
                            Becoming ISO 27001 Compliant
                        </h2>
                        <Row>
                            <StepCard
                                order={1}
                                groups={[
                                    {
                                        main: 'Either you decide to start/improve your cloud security program or a client requires compliant vendors'
                                    }
                                ]}
                            />
                            <StepCard
                                order={2}
                                groups={[
                                    {
                                        main: 'Assemble a team of 2 to 20 people, depending on the size of your organization, responsible for the entire process. This might include your CSO, CISO, compliance officers, security engineers and researchers, and software architects.'
                                    }
                                ]}
                            />
                            <StepCard
                                order={3}
                                groups={[
                                    {
                                        main: 'Optionally, contact a third-party company specialized in ISO 27001 compliance.'
                                    },
                                    {
                                        main: 'Understand the standard',
                                        list: [
                                            <>
                                                Clauses 4 to 10 - they describe the requirements of the standard. The
                                                result will be a set of policies that will form the{' '}
                                                <strong>information security management system (ISMS)</strong>.
                                            </>,
                                            <>
                                                <strong>Annex A</strong> - a comprehensive list of control objectives
                                                and information security controls intended to help you reduce the risk
                                                as much as possible.
                                            </>
                                        ]
                                    }
                                ]}
                            />
                            <StepCard
                                order={4}
                                groups={[
                                    {
                                        main: 'Identify the scope of the ISMS taking into consideration',
                                        list: [
                                            "the organization's objectives regarding risk management",
                                            'the requirements of the involved parties',
                                            'the asset inventory - might include legal documents, user data, cloud resources, and physical equipment.'
                                        ]
                                    }
                                ]}
                            />
                            <StepCard
                                order={5}
                                groups={[
                                    {
                                        main: 'Define and apply the information security risk mitigation treatment',
                                        list: [
                                            'Annex A controls provide a holistic but general approach. You are still responsible for researching and implementing actual procedures to secure your assets',
                                            'This is a critical point for organizations running in the cloud',
                                            <>
                                                You document the controls (both inclusions and exclusions) in the{' '}
                                                <strong>Statement of Applicability</strong> (SoA). This is an essential
                                                document for the ISMS and it is one of the first points of interest for
                                                the auditor.
                                            </>
                                        ]
                                    }
                                ]}
                            />
                            <StepCard
                                order={6}
                                groups={[
                                    {
                                        main: 'Establish and implement the policies forming the ISMS',
                                        list: ['You can start with a set of pre-defined policies']
                                    },
                                    { main: 'Inform and train every employee' },
                                    {
                                        main: 'Perform an internal audit',
                                        list: ['Can be conducted by members of the organization or by consulting firms']
                                    }
                                ]}
                            />
                            <StepCard
                                order={7}
                                groups={[
                                    {
                                        main: 'Perform the actual audit',
                                        list: [
                                            'The auditor will review your documents starting with the scope document, statement of applicability, and various policies such as the human resource security and data protection policies',
                                            'Once the auditor determines that your ISMS meets the ISO 27001 requirements, you proceed to stage 2. At this point, the auditor will check your controls to determine their effectiveness within your organization'
                                        ]
                                    }
                                ]}
                            />
                            <StepCard
                                order={8}
                                groups={[
                                    {
                                        main: 'Continuous compliance - the point of the security standard is not to pass the audit but to improve the cybersecurity of your information assets',
                                        list: [
                                            'Periodically review your policies (designated owners and management)',
                                            'Keep your asset inventory up to date and ensure business continuity'
                                        ]
                                    }
                                ]}
                            />
                        </Row>
                    </div>
                </Section>
                <Section>
                    <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                        <Row style={{ alignItems: 'center' }}>
                            <div className='col-span-12 lg:col-span-6 order-2 lg:order-1 lg:pr-8'>
                                <h2 className='font-semibold font-montserrat text-primary text-2xl lg:text-4xl'>
                                    Asset Inventory
                                </h2>
                                <p className='text-base lg:text-lg leading-relaxed mt-4 lg:mt-8'>
                                    Keep track of all your cloud computing assets such as virtual machines, cloud
                                    storage buckets, and IAM users. Cyscale allows you to connect all your cloud
                                    accounts from cloud service providers (AWS, Google Cloud, Azure, and Alibaba), in a
                                    read-only mode.
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-6 order-1 lg:order-2 pb-4 lg:pb-0'>
                                <GatsbyImage
                                    image={data.assetInventory.childImageSharp.gatsbyImageData}
                                    alt='Asset Inventory'
                                    className='shadow-lg mx-auto w-auto h-auto'
                                />
                            </div>
                        </Row>
                    </div>
                </Section>
                <Section>
                    <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                        <Row style={{ alignItems: 'center' }}>
                            <div className='col-span-12 lg:col-span-6 pb-4 lg:pb-0'>
                                <GatsbyImage
                                    image={data.controls.childImageSharp.gatsbyImageData}
                                    alt='A list of Security Controls implemented by Cyscale'
                                    className='shadow-lg  mx-auto w-auto h-auto'
                                />
                            </div>
                            <div className='col-span-12 lg:col-span-6 lg:pl-8'>
                                <h2 className='font-semibold font-montserrat text-primary text-2xl lg:text-4xl'>
                                    Annex A Controls and beyond
                                </h2>
                                <p className='text-base lg:text-lg leading-relaxed  mt-4 lg:mt-8'>
                                    Continuously keep your cloud infrastructure and your sensitive data secure by
                                    following industry best practices to prevent vulnerabilities, such as CIS benchmarks
                                    and well-architected frameworks, all neatly mapped to ISO 27001. You can establish
                                    the statement of applicability for your cloud assets in minutes instead of weeks.
                                </p>
                            </div>
                        </Row>
                    </div>
                </Section>
                <Section>
                    <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                        <Row style={{ alignItems: 'center' }}>
                            <div className='col-span-12 lg:col-span-6 order-2 lg:order-1 lg:pr-8'>
                                <h2 className='font-semibold font-montserrat text-primary text-2xl lg:text-4xl '>
                                    Out of the box Policies
                                </h2>
                                <p className='text-base lg:text-lg leading-relaxed  mt-4 lg:mt-8'>
                                    Cyscale provides you with a set of battle-tested security policies to jumpstart your
                                    ISMS. They are applicable to all your assets such as employee information,
                                    intelectual property, and physical equipment, besides cloud assets. They help you
                                    improve your security posture and prevent security incidents.
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-6 order-1 lg:order-2 pb-4 lg:pb-0'>
                                <GatsbyImage
                                    image={data.policies.childImageSharp.gatsbyImageData}
                                    alt='A list of different out-of-the-box policies and standards'
                                    className='shadow-lg mx-auto w-auto h-auto'
                                />
                            </div>
                        </Row>
                    </div>
                </Section>
                <Section>
                    <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                        <Row style={{ alignItems: 'center' }}>
                            <div className='col-span-12 lg:col-span-6 pb-4 lg:pb-0'>
                                <GatsbyImage
                                    image={data.actionablePolicies.childImageSharp.gatsbyImageData}
                                    alt='A rich policy content with data gathered inline'
                                    className='shadow-lg mx-auto w-auto h-auto'
                                />
                            </div>
                            <div className='col-span-12 lg:col-span-6 lg:pl-8'>
                                <h2 className='font-semibold font-montserrat text-primary text-2xl lg:text-4xl'>
                                    Actionable Policies
                                </h2>
                                <p className='text-base lg:text-lg leading-relaxed  mt-4 lg:mt-8'>
                                    Cyscale enables you to link procedures to actual technical verifications and
                                    security controls. You know at any moment the exact compliance status of your assets
                                    right inside the policy that describes how they are secured. In other words, inline
                                    evidence collection. Moreover, you can automate compliance checks to streamline the
                                    process of obtaining the ISO 27001 certification. We also support GDPR, HIPAA, and
                                    other regulatory frameworks.
                                </p>
                            </div>
                        </Row>
                    </div>
                </Section>
            </Container>
            <div className='gradientBGCSPM pt-60px pb-60px'>
                <GetStarted
                    icon={getStartedICon}
                    btnText='Start your free trial'
                    btnLink={'/free-trial'}
                    description='Achieve true continuous compliance for ISO 27001'
                />
            </div>
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

export default CloudCompliance;
