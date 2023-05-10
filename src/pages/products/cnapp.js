import React from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Container, Row } from '../../components/atoms/Containers';
import { graphql, Link as GatsbyLink, Link, useStaticQuery } from 'gatsby';
import GradientButton from '../../components/buttons/GradientButton';
import LightDarkButton from '../../components/buttons/LightDarkButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';

import CSPMIcon from '../../assets/images/cspm-cnapp-icon.svg';
import CIEMIcon from '../../assets/images/ciem-cnapp-icon.svg';
import CWPPIcon from '../../assets/images/cwpp-cnapp-icon.svg';
import DataSecurityIcon from '../../assets/images/data-security-cnapp-icon.svg';
import ContainerSecurityIcon from '../../assets/images/container-security-cnapp-icon.svg';
import KubernetesIcon from '../../assets/images/kubernetes-cnapp-icon.svg';
import ComplianceIcon from '../../assets/images/compliance-cnapp-icon.svg';
import VisibilityIcon from '../../assets/images/visibility-cnapp-icon.svg';
import headerImage from '../../assets/images/remote-work-heading-image.png';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import cloudIcon from '../../assets/images/cloud-white-icon.svg';
import LearnMoreLink from '../../components/use-cases/LearnMoreLink';
import { heroTitleFontSize, LearnMoreSection, cardBackgroundColor } from '../../assets/css/styles';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';

//eslint-disable-next-line
export const topArticles = [
    {
        text: 'CNAPP: The Key to Secure Cloud-Native Applications',
        link: '/blog/cnapp-secure-native-applications/'
    },
    {
        text: 'CNAPP: A mix of CSPM & CWPP',
        link: '/blog/cnapp-a-mix-of-cspm-cwpp/'
    },
    {
        text: 'Cloud-Native Security: A Comprehensive Guide to Securing Your Technology Stack',
        link: '/blog/cloud-native-security-guide/'
    },
    {
        text: 'Cloud Security and Compliance:<br class="hidden lg:block"> A Guide for Your Cloud Infrastructure',
        link: '/blog/cloud-security-and-compliance/',
        children: true
    }
];

const titleSectionFont = css`
    font-size: 1.625rem;
    line-height: 2rem;
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const CNAPP = ({ location }) => {
    const data = useStaticQuery(graphql`
        query CNAPPQuery {
            dashboard: file(relativePath: { eq: "dashboard-cnapp.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            inventory: file(relativePath: { eq: "inventory-cnapp.png" }) {
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
            pageName='CNAPP'
            title='CNAPP: Cloud-Native Application Security and Compliance Solution - Cyscale'
            description='Protect your cloud-native applications with CNAPP. Ensure security and compliance with our all-in-one solution for multi-cloud environments. Start today!'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /products/cnapp
            </div>
            <div className='hidden' data-title>
                CNAPP: Cloud-Native Application Security and Compliance Solution - Cyscale
            </div>
            <div className='hidden' data-description>
                Protect your cloud-native applications with CNAPP. Ensure security and compliance with our all-in-one
                solution for multi-cloud environments. Start today!
            </div>
            <div className='hidden' data-category>
                products
            </div>
            <div className='bg-cnapp pt-8'>
                <Container>
                    <div className='py-16 md:py-24 lg:pt-24 lg:pb-16'>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                                <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1
                                        className='text-left text-blue leading-normal lg:leading-normal mb-16 font-montserrat font-bold'
                                        css={heroTitleFontSize}
                                        data-content
                                    >
                                        CNAPP: Robust <br /> Cloud-Native Application Protection Platform
                                    </h1>
                                    <p
                                        className='text-left text-base lg:text-lg mb-8 leading-relaxed font-bold font-hind'
                                        data-content
                                    >
                                        Achieve true cloud-native transformation with Cyscale.
                                    </p>
                                    <p
                                        className='text-left text-base lg:text-lg mb-2 leading-relaxed font-hind'
                                        data-content
                                    >
                                        Get maximum cloud native security with our ultimate CNAPP solution. Protect your
                                        entire stack, VMs (virtual machines), containers, and serverless, on any cloud
                                        environment and confidently accelerate innovation.
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
                        </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='pt-8 pb-8 md:pt-12 md:pb-12 lg:pt-20 pb-12'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-md'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat lg:mt-3'
                                    css={titleSectionFont}
                                    data-content
                                >
                                    Unlock the power of our CNAPP
                                    <br className='hidden sm:block lg:hidden' /> platform with its{' '}
                                    <br className='hidden lg:block' /> key features
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 lg:mt-0 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.dashboard.childImageSharp.gatsbyImageData}
                                    alt='Dashboard view'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <Row className='mt-12 gap-0 lg:gap-8'>
                    <Link
                        to='/products/cloud-security-posture-management/'
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 h-80 sm:h-64 lg:h-96 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            <img src={CSPMIcon} alt='' />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3' data-content>
                                CSPM
                            </h2>
                            <p className='text-sm mt-4 text-gray font-hind' data-content>
                                Gain continuous visibility and comprehensive Cloud Security Posture Management over
                                multi-cloud environments to identify misconfigurations, ultimately securing your cloud
                                from data breaches and leaks. Scan, monitor, and remediate across AWS, Azure, Google
                                Cloud, Alibaba Cloud to ensure the best cybersecurity for your cloud infrastructure.
                            </p>
                        </div>
                        <LearnMoreSection>
                            <LearnMoreLink link='/products/cloud-security-posture-management/' />
                        </LearnMoreSection>
                    </Link>
                    <Link
                        to='/products/security-knowledge-graph/'
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 h-80 sm:h-64 lg:h-96 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            <img src={VisibilityIcon} alt='' />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3' data-content>
                                Contextual Analysis
                            </h2>
                            <p className='text-sm mt-4 text-gray font-hind' data-content>
                                Cloud asset misconfigurations are analyzed in context, automatically correlating issues
                                that affect compute, data storage and identity assets, determining their real impact on
                                data security and helping you prioritize remediation efforts in the most effective way.
                            </p>
                        </div>
                        <LearnMoreSection>
                            <LearnMoreLink link='/products/security-knowledge-graph/' />
                        </LearnMoreSection>
                    </Link>
                    <Link
                        to='/use-cases/cloud-compliance-and-auditing/'
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 h-80 sm:h-64 lg:h-96 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            <img src={ComplianceIcon} alt='' height={40} width={40} />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3' data-content>
                                Compliance and Governance
                            </h2>
                            <p className='text-sm mt-4 text-gray font-hind' data-content>
                                Enable your organization to adhere to industry and regulatory standards, such as
                                PCI-DSS, HIPAA, SOC 2 and many others. Auditing and reporting capabilities will help
                                with internal and external audits.
                            </p>
                        </div>
                        <LearnMoreSection>
                            <LearnMoreLink link='/use-cases/cloud-compliance-and-auditing/' />
                        </LearnMoreSection>
                    </Link>
                    <Link
                        to='/use-cases/cloud-data-security/'
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 h-80 sm:h-64 lg:h-96 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            {' '}
                            <img src={DataSecurityIcon} alt='' />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3' data-content>
                                Data Security
                            </h2>
                            <p className='text-sm mt-4 text-gray font-hind' data-content>
                                Keep track of your organization's security posture with Cyscale's inventory of cloud
                                data stores and their contextual security analysis tools. Using these security tools,
                                you can protect your most important data assets, avoid breaches and be prepared for
                                audits.
                            </p>
                        </div>
                        <LearnMoreSection>
                            <LearnMoreLink link='/use-cases/cloud-data-security/' />
                        </LearnMoreSection>
                    </Link>
                </Row>
                <Row className='mt-8 lg:mt-16 mb-16 gap-0 lg:gap-8'>
                    <Link
                        to='/use-cases/iam-security/'
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 h-80 sm:h-64 lg:h-96 xl:h-80  flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            {' '}
                            <img src={CIEMIcon} alt='' />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3' data-content>
                                CIEM
                            </h2>
                            <p className='text-sm mt-4 text-gray font-hind' data-content>
                                Easily perform access reviews and keep track of users, access levels, effective
                                permissions, as well as IAM asset misconfigurations. Understand identities and
                                permissions even in the most complex multi-cloud environments with Cloud Infrastructure
                                Entitlement Management.
                            </p>
                        </div>
                        <LearnMoreSection>
                            <LearnMoreLink link='/use-cases/iam-security/' />
                        </LearnMoreSection>
                    </Link>
                    <div
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 h-80 sm:h-64 lg:h-96 xl:h-80 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            <img src={CWPPIcon} alt='' />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3' data-content>
                                CWPP
                            </h2>
                            <p className='text-sm mt-4 text-gray font-hind' data-content>
                                Cloud Workload Protection Platforms perform a contextual analysis of cloud
                                misconfigurations and vulnerabilities in instances, images, containers and serverless
                                functions and help security teams guard your entire application stack on any cloud
                                environment.
                            </p>
                        </div>
                    </div>
                    <div
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 h-80 sm:h-64 lg:h-96 xl:h-80 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            <img src={ContainerSecurityIcon} alt='' height={40} width={40} />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3' data-content>
                                Container Security
                            </h2>
                            <p className='text-sm mt-4 text-gray font-hind' data-content>
                                Get visibility over container-based apps and corresponding cloud infrastructure. Know
                                where containers are running in the cloud, complete with a contextual analysis of
                                vulnerabilities, misconfigurations, networking and access.
                            </p>
                        </div>
                    </div>
                    <div
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 h-80 sm:h-64 lg:h-96 xl:h-80 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            <img src={KubernetesIcon} alt='' height={40} width={40} />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3' data-content>
                                Kubernetes Security
                            </h2>
                            <p className='text-sm mt-4 text-gray font-hind' data-content>
                                A complete inventory for your Kubernetes clusters, either managed or unmanaged, and
                                continuous scanning for vulnerabilities in the cluster components and container images
                                that are used.
                            </p>
                        </div>
                    </div>
                </Row>
            </Container>
            <div
                css={css`
                    background-color: #f3f8ff;
                `}
            >
                <Container>
                    <div className='py-8 md:py-12 lg:py-20'>
                        <div className='sm:grid sm:grid-cols-12 sm:gap-4'>
                            <div className='col-span-12 lg:col-span-7 lg:pr-16 mt-8 sm:mt-0  hidden lg:block'>
                                <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                    <GatsbyImage
                                        image={data.inventory.childImageSharp.gatsbyImageData}
                                        alt='Inventory view'
                                        className='shadow-lg'
                                    />
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-5'>
                                <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                    <h2
                                        className=' text-primary border-title-partly font-montserrat lg:mt-3'
                                        css={titleSectionFont}
                                        data-content
                                    >
                                        <span className='font-bold'>Real-time Cloud Security</span>
                                        <br className='block lg:hidden xl:block' /> with Contextual Analysis{' '}
                                    </h2>
                                </div>
                                <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                    <p className='text-base text-gray pt-12 pb-2 font-hind' data-content>
                                        Our CNAPP (Cloud-Native Application Protection Platform) security solution is
                                        designed to give you complete visibility and control over your cloud
                                        environment. By analyzing cloud configuration, workload, and identity, it
                                        identifies the most critical attack vectors that pose a threat to your business,
                                        rather than overwhelming you with numerous alerts for vulnerabilities,
                                        permissions, and exposed services.
                                    </p>
                                    <p className='text-base text-gray py-2 font-hind' data-content>
                                        With our security platform, you can prioritize and address the most significant
                                        security risks, ensuring application security and the integrity of your cloud
                                        infrastructure.
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-7 mt-8 sm:mt-0 block lg:hidden'>
                                <div className='mx-auto max-w-xl lg:mt-8 lg:mx-0 lg:max-w-2xl'>
                                    <GatsbyImage
                                        image={data.inventory.childImageSharp.gatsbyImageData}
                                        alt='Inventory view'
                                        className='shadow-lg'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='py-16'>
                <Container id='align-entities'>
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
                        <div className='col-span-2'>
                            <h2
                                className='font-semibold font-montserrat text-blue lg:max-w-md null sectionTitle new-line max-w-xl mx-auto lg:mx-0'
                                css={titleSectionFont}
                                data-content
                            >
                                Align teams & tasks
                                <span className='block w-full font-normal'>
                                    Govern all cloud entities
                                    <br className='block lg:hidden' /> from a single dashboard
                                </span>
                            </h2>
                            <p
                                className='leading-normal text-base max-w-xl mx-auto my-12 block lg:hidden font-hind'
                                data-content
                            >
                                Consolidate all the key elements of cloud compliance in an easy-to-use dashboard.
                                Replace cloud portals with our Cloud Platform - the hub for a sweeping overview of your{' '}
                                <br className='hidden lg:block' />
                                <a
                                    href='/products/cloud-security-posture-management/'
                                    className='text-base text-blue underline hover:no-underline hover:text-red'
                                >
                                    cloud security posture
                                </a>
                                .
                            </p>
                            <p
                                className='max-w-xl text-base mx-auto leading-normal mb-12 block lg:hidden font-hind'
                                data-content
                            >
                                Implement, manage, and monitor security policies and controls for single cloud and
                                multi-cloud environments through reliable automation.
                            </p>
                            <p
                                className='leading-normal text-base max-w-xl mx-auto block lg:hidden font-hind'
                                data-content
                            >
                                Demonstrate compliance for multiple projects with read-only dashboard access or reports
                                (CSV, PDF) you can share with internal stakeholders, prospects, or customers.
                            </p>
                            <img
                                src={headerImage}
                                alt='Govern all cloud entities from a single dashboard'
                                className='w-auto h-auto mt-8 mx-auto lg:mx-0'
                            />
                        </div>
                        <div className='col-span-3 hidden lg:block'>
                            <p
                                className='leading-normal text-base max-w-xl lg:max-w-2xl mx-auto mb-24 font-hind'
                                data-content
                            >
                                Consolidate all the key elements of cloud compliance in an easy-to-use dashboard.
                                <br className='hidden lg:block' />
                                Replace cloud portals with our Cloud Platform - the hub for a sweeping overview of your{' '}
                                <br className='hidden lg:block' />
                                <a
                                    href='/products/cloud-security-posture-management/'
                                    className='text-base text-blue underline hover:no-underline hover:text-red'
                                >
                                    cloud security posture
                                </a>
                                .
                            </p>
                            <p
                                className='max-w-xl lg:max-w-2xl text-base mx-auto leading-normal mb-24 font-hind'
                                data-content
                            >
                                Implement, manage, and monitor security policies and controls for single cloud
                                <br className='hidden lg:block' />
                                and multi-cloud environments through reliable automation.
                            </p>
                            <p
                                className='max-w-xl lg:max-w-2xl text-base mx-auto leading-normal font-hind'
                                data-content
                            >
                                Demonstrate compliance for multiple projects with read-only dashboard access or
                                <br className='hidden lg:block' /> reports (CSV, PDF) you can share with internal
                                stakeholders, prospects, or customers.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='bg-gradient-to-b from-selago to-white relative z-10' id='confidence'>
                <img src={corner} width={300} className='hidden md:block absolute top-0 right-0 m-0 z-20' alt='' />
                <Container>
                    <div className='py-8 md:py-12 lg:py-20'>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-md mb-20'>
                            <h2
                                className='font-bold text-primary leading-normal border-title-partly montserrat-font'
                                css={titleSectionFont}
                                data-content
                            >
                                100% Confidence with
                                <br className='block lg:hidden' /> your Cloud Compliance
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind' data-content>
                                        <strong className='montserrat-font'>Meet industry regulations</strong>
                                        <br />
                                        Protect sensitive data and comply with strict industry regulations in your
                                        organisation. Cyscale automatically runs all critical compliance checks and
                                        finds data at-risk across multiple cloud service providers.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind' data-content>
                                        <strong className='montserrat-font'>PCI-DSS, SOC 2, GDPR, and more</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including: CIS,
                                        ISO27001, PCI-DSS, NIST,
                                        <br className='hidden lg:block' /> SOC 2, GDPR.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind' data-content>
                                        <strong className='montserrat-font'>Built-in compliance templates</strong>
                                        <br />
                                        You can either use policy templates as a basis for your custom policies, or
                                        create them from scratch.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind' data-content>
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
            <div
                css={css`
                    background-image: linear-gradient(90deg, #0f26aa -1.79%, #ff4a56 165.6%);
                `}
            >
                <Container>
                    <div className='pt-20    md:pt-28 pb-32'>
                        <div className='flex h-48 flex-col items-center'>
                            <img src={cloudIcon} alt='' />
                            <h2
                                className='text-center px-2 mt-4 mb-2 font-montserrat font-semibold text-white text-lg lg:text-2xl'
                                data-content
                            >
                                Elevate your cloud security game with CNAPP{' '}
                            </h2>
                            <p className='text-white font-hind text-base sm:text-lg lg:text-xl' data-content>
                                Start seeing value & saving money in minutes
                            </p>
                            <GatsbyLink
                                to={'/request-demo/'}
                                className='bg-white text-blue text-base font-bold rounded-md pt-3 pb-2 px-8 mt-8 hover:bg-grey3 font-hind'
                            >
                                REQUEST DEMO
                            </GatsbyLink>
                        </div>
                    </div>
                </Container>
            </div>
            <LinksAndWhitepaper
                topArticles={topArticles}
                data={data}
                title={'CNAPP'}
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

export default CNAPP;
