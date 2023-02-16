import React from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Container, Row } from '../../components/atoms/Containers';
import { graphql, Link, useStaticQuery } from 'gatsby';
import GradientButton from '../../components/buttons/GradientButton';
import LightDarkButton from '../../components/buttons/LightDarkButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';

import DataSecurityIcon from '../../assets/images/data-security-cnapp-icon.svg';
import ContainerSecurityIcon from '../../assets/images/container-security-cnapp-icon.svg';
import KubernetesIcon from '../../assets/images/kubernetes-cnapp-icon.svg';
import ComplianceIcon from '../../assets/images/compliance-cnapp-icon.svg';
import AutomationIcon from '../../assets/images/automation-cnapp-icon.svg';
import VisibilityIcon from '../../assets/images/visibility-cnapp-icon.svg';
import headerImage from '../../assets/images/remote-work-heading-image.png';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import cloudIcon from '../../assets/images/cloud-icon.svg';

const titleSection = css`
    font-size: 1.75rem;
    line-height: 2.188rem;
`;

const heroTitleFontSize = css`
    @media (max-width: 768px) {
        font-size: 1.75rem;
    }
    font-size: 2rem;
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
        }
    `);

    return (
        <Layout
            location={location}
            pageName='CNAPP'
            title='CNAPP: Cloud-Native Application Security and Compliance Solution - Cyscale'
            description='Protect your cloud-native applications with CNAPP. Ensure security and compliance with our all-in-one solution for multi-cloud environments. Start today!'
        >
            <div className='bg-cnapp pt-8'>
                <Container>
                    <div className='py-16 md:py-24 lg:pt-24 lg:pb-16'>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                                <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1
                                        className='text-left text-blue leading-normal lg:leading-normal mb-16 font-montserrat font-bold'
                                        css={heroTitleFontSize}
                                    >
                                        CNAPP: Robust <br /> Cloud-Native Application Protection Platform
                                    </h1>
                                    <p className='text-left text-base lg:text-lg mb-8 leading-relaxed font-bold'>
                                        Achieve true cloud-native transformation with Cyscale.
                                    </p>
                                    <p className='text-left text-base lg:text-lg mb-2 leading-relaxed'>
                                        Get maximum cloud native security with our ultimate CNAPP solution. 
                                        Protect your entire stack, VMs, containers, and serverless, on 
                                        any cloud environment and confidently accelerate innovation.

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
                <div className='py-8 md:py-12 lg:py-20'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-md'>
                                <h2
                                    className='font-bold text-primary leading-normal border-title-partly font-montserrat lg:mt-3'
                                    css={titleSection}
                                >
                                    Unlock the power of our CNAPP platform with its <br /> key features
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
                <Row className='mt-16 gap-0 lg:gap-8'>
                    <div className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0'>
                        <img src={DataSecurityIcon} alt='' />
                        <h2 className='font-montserrat text-base font-bold text-blue mt-3'>
                            CSPM
                        </h2>
                        <p className='text-sm mt-4 text-gray'>
                            Gain continuous visibility and comprehensive Cloud Security Posture Management over multi-cloud environments to identify misconfigurations, ultimately securing your cloud from data breaches and leaks. Scan, monitor, and remediate across AWS, Azure, Google Cloud, Alibaba Cloud to ensure the best security for your cloud infrastructure.
                        </p>
                    </div>
                    <div className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0'>
                        <img src={VisibilityIcon} alt='' />
                        <h2 className='font-montserrat text-base font-bold text-blue mt-3'>Contextual Analysis</h2>
                        <p className='text-sm mt-4 text-gray'>
                            Cloud asset misconfigurations are analyzed in context, automatically correlating issues 
                            that affect compute, data storage and identity assets, determining their real impact on 
                            data security and helping you prioritize remediation efforts in the most effective way.

                        </p>
                    </div>
                    <div className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0 mt-8 lg:mt-0'>
                        <img src={ComplianceIcon} alt='' height={40} width={40} />
                        <h2 className='font-montserrat text-base font-bold text-blue mt-3'>Compliance and Governance</h2>
                        <p className='text-sm mt-4 text-gray'>
                            Enable your organization to adhere to industry and regulatory standards, such as PCI-DSS, HIPAA, SOC 2 and many others. 
                            Auditing and reporting capabilities will help with internal and external audits.
                        </p>
                    </div>
                    <div className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0 mt-8 lg:mt-0'>
                        <img src={ComplianceIcon} alt='' />
                        <h2 className='font-montserrat text-base font-bold text-blue mt-3'>
                            Data Security
                        </h2>
                        <p className='text-sm mt-4 text-gray'>
                            Keep track of your organization's security posture with Cyscale's inventory of cloud data stores and their contextual security analysis tools. Using these security tools, you can protect your most important data assets, avoid breaches, and be prepared for audits.
                        </p>
                    </div>
                </Row>
                <Row className='my-16 gap-0 lg:gap-8'>
                    <div className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0'>
                        <img src={DataSecurityIcon} alt='' />
                        <h2 className='font-montserrat text-base font-bold text-blue mt-3'>
                            CIEM
                        </h2>
                        <p className='text-sm mt-4 text-gray'>
                            Easily perform access reviews and keep track of users, access levels, effective permissions, as well as IAM asset misconfigurations. 
                            Understand identities and permissions even in the most complex multi-cloud environments.
                        </p>
                    </div>
                    <div className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0'>
                        <img src={VisibilityIcon} alt='' />
                        <h2 className='font-montserrat text-base font-bold text-blue mt-3'>CWPP</h2>
                        <p className='text-sm mt-4 text-gray'>
                            A contextual analysis of cloud misconfigurations and vulnerabilities in instances, images, 
                            containers and functions helps security teams guard your entire application stack on any cloud environment.
                        </p>
                    </div>
                    <div className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0 mt-8 lg:mt-0'>
                        <img src={ContainerSecurityIcon} alt='' height={40} width={40} />
                        <h2 className='font-montserrat text-base font-bold text-blue mt-3'>Container Security</h2>
                        <p className='text-sm mt-4 text-gray'>
                            Get visibility over container-based applications and corresponding cloud infrastructure. Know where containers are running in the cloud, 
                            complete with a contextual analysis of vulnerabilities, misconfigurations, networking and access.
                        </p>
                    </div>
                    <div className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0 mt-8 lg:mt-0'>
                        <img src={KubernetesIcon} alt='' height={40} width={40} />
                        <h2 className='font-montserrat text-base font-bold text-blue mt-3'>
                            Kubernetes Security
                        </h2>
                        <p className='text-sm mt-4 text-gray'>
                            A complete inventory for your Kubernetes clusters, either managed or unmanaged, and continuous scanning 
                            for vulnerabilities in the cluster components and container images that are used.
                        </p>
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
                                        css={titleSection}
                                    >
                                        <span className='font-bold'>Real-time Cloud Security</span>
                                        <br /> with Contextual Analysis{' '}
                                    </h2>
                                </div>
                                <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                    <p className='text-base text-gray pt-12 pb-2'>
                                        Our CNAPP platform is designed to give you complete visibility and control over
                                        your cloud environment. By analyzing cloud configuration, workload, and
                                        identity, it identifies the most critical attack vectors that pose a threat to
                                        your business, rather than overwhelming you with numerous alerts for
                                        vulnerabilities, permissions, and exposed services.
                                    </p>
                                    <p className='text-base text-gray py-2'>
                                        With our platform, you can prioritize and address the most significant risks,
                                        ensuring the security and integrity of your cloud infrastructure and
                                        applications.
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
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div className='col-span-1'>
                            <h2
                                className='font-semibold font-montserrat text-blue leading-normal lg:max-w-sm null sectionTitle new-line max-w-xl mx-auto'
                                css={titleSection}
                            >
                                Align teams & tasks
                                <span className='block w-full font-normal'>
                                    Govern all cloud entities from a single dashboard
                                </span>
                            </h2>
                            <p className='leading-normal text-base max-w-xl mx-auto my-12 block lg:hidden'>
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
                            <p className='max-w-xl text-base mx-auto leading-normal mb-12 block lg:hidden'>
                                Implement, manage, and monitor security policies and controls for single cloud and 
                                multi-cloud environments through reliable automation.
                            </p>
                            <p className='leading-normal text-base max-w-xl mx-auto block lg:hidden'>
                                Demonstrate compliance for multiple projects with read-only dashboard access or reports
                                (CSV, PDF) you can share with internal stakeholders, prospects, or customers.
                            </p>
                            <img
                                src={headerImage}
                                alt='Govern all cloud entities from a single dashboard'
                                className='w-auto h-auto mt-8 mx-auto lg:mx-0'
                            />
                        </div>
                        <div className='col-span-2 hidden lg:block'>
                            <p className='leading-normal text-base max-w-xl lg:max-w-2xl mx-auto mb-24'>
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
                            <p className='max-w-xl lg:max-w-2xl text-base mx-auto leading-normal mb-24'>
                                Implement, manage, and monitor security policies and controls for single cloud
                                <br className='hidden lg:block' />
                                and multi-cloud environments through reliable automation.
                            </p>
                            <p className='max-w-xl lg:max-w-2xl text-base mx-auto leading-normal'>
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
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-sm mb-20'>
                            <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                100% Confidence with <br /> your Cloud Compliance
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong className='montserrat-font'>Meet industry regulations</strong>
                                        <br />
                                        Protect sensitive data and comply with strict industry regulations in your
                                        organisation. Cyscale automatically runs all critical compliance checks and
                                        finds data at-risk.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong className='montserrat-font'>PCI-DSS, SOC 2, GDPR, and more</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including: CIS,
                                        ISO27001, PCI-DSS, NIST, SOC 2, GDPR.
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
                                        security controls.
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='md:pt-12 pb-24'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' />
                        <h1 className='text-center px-2 mt-4 mb-2 montserrat-font font-semibold'>
                            Elevate your cloud security game with CNAPP{' '}
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

export default CNAPP;
