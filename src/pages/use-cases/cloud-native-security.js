import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../../components/layout/CleanLayout';
import { Container, Row, Section } from '../../components/atoms/Containers';
import GradientButton from '../../components/buttons/GradientButton';
import LightDarkButton from '../../components/buttons/LightDarkButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import CSPMIcon from '../../assets/images/cspm-cnapp-icon.svg';
import VisibilityIcon from '../../assets/images/visibility-cnapp-icon.svg';
import ComplianceIcon from '../../assets/images/compliance-cnapp-icon.svg';
import DataSecurityIcon from '../../assets/images/data-security-cnapp-icon.svg';
import CIEMIcon from '../../assets/images/ciem-cnapp-icon.svg';
import CWPPIcon from '../../assets/images/cwpp-cnapp-icon.svg';
import ContainerSecurityIcon from '../../assets/images/container-security-cnapp-icon.svg';
import KubernetesIcon from '../../assets/images/kubernetes-cnapp-icon.svg';
import { css } from 'twin.macro';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import LearnMoreLink from '../../components/use-cases/LearnMoreLink';
import { LearnMoreSection, cardBackgroundColor } from '../../assets/css/styles';

const heroTitleFontSize = css`
    @media (max-width: 768px) {
        font-size: 1.75rem;
    }
    font-size: 3rem;
`;

const titleSectionFont = css`
    font-size: 1.625rem;
    line-height: 2rem;
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const CloudNativeSecurity = ({ location }) => {
    const data = useStaticQuery(graphql`
        query CloudNativeSecurityQuery {
            dataSecurity: file(relativePath: { eq: "data-security-cns.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            inventory: file(relativePath: { eq: "inventory-cnapp.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            cloudIcons: file(relativePath: { eq: "cloud-icons-cns.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='CloudNativePage'
            title='Powerful Cloud Native Security Platform - Cyscale'
            description='Protect your entire stack, from virtual machines to serverless environments, in any cloud environment. Our powerful platform provides advanced security features, giving you maximum cloud-native security and peace of mind to confidently accelerate innovation.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /use-cases/cloud-native-security
            </div>
            <div className='hidden' data-title>
                Powerful Cloud Native Security Platform - Cyscale
            </div>
            <div className='hidden' data-description>
                Protect your entire stack, from virtual machines to serverless environments, in any cloud environment.
                Our powerful platform provides advanced security features, giving you maximum cloud-native security and
                peace of mind to confidently accelerate innovation.
            </div>
            <div className='hidden' data-category>
                solutions
            </div>
            <div className='bg-cns pt-8'>
                <Container>
                    <div className='py-16 md:py-24 lg:pt-24 lg:pb-16'>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                                <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1
                                        className='text-left text-blue leading-normal lg:leading-normal mb-16 font-montserrat font-bold'
                                        css={heroTitleFontSize}
                                    >
                                        Powerful
                                        <br /> Cloud Native
                                        <br /> Security Platform
                                    </h1>
                                    <p className='text-left text-base lg:text-lg mb-8 leading-relaxed font-bold font-hind'>
                                        Secure Your Cloud Infrastructure with Our Advanced Security Platform
                                    </p>
                                    <p className='text-left text-base lg:text-lg mb-2 leading-relaxed font-hind'>
                                        Protect your entire stack, from virtual machines to serverless environments, in
                                        any cloud environment. Our powerful platform provides advanced security
                                        features, giving you maximum cloud-native security and peace of mind to
                                        confidently accelerate innovation.
                                    </p>
                                    <div className='flex mt-8 justify-start'>
                                        <Link to='/free-trial/'>
                                            <GradientButton text='Start Free Trial' />
                                        </Link>
                                        <Link to='/request-demo/' className='ml-4'>
                                            <LightDarkButton text={'Request Demo'} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='lg:mt-16 pt-4 max-w-lg lg:max-w-md mx-auto lg:mx-0 lg:ml-auto'>
                                    <GatsbyImage
                                        image={data.cloudIcons.childImageSharp.gatsbyImageData}
                                        alt='Inventory graph-view with violated standards and policies'
                                    />
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
                                    className='font-bold text-primary leading-normal border-title-partly font-montserrat'
                                    css={titleSectionFont}
                                >
                                    Key Components to
                                    <br className='hidden lg:block' /> Build a Resilient Cloud
                                    <br className='hidden lg:block' /> Security Plan
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 lg:mt-0 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.dataSecurity.childImageSharp.gatsbyImageData}
                                    alt='Dashboard view'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <Row className='mt-12 gap-0 lg:gap-8'>
                    <div
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 h-80 sm:h-64 lg:h-96 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            <img src={CSPMIcon} alt='' />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3'>CSPM</h2>
                            <p className='text-sm mt-4 text-gray font-hind'>
                                Secure multi-cloud environments with Cloud Security Posture Management. Continuous
                                monitoring and remediation across AWS, Azure, Google Cloud, Alibaba Cloud. Automate and
                                streamline cloud security management, ensure compliance, and protect sensitive data.
                            </p>
                        </div>
                        <LearnMoreSection>
                            <LearnMoreLink link='/products/cloud-security-posture-management/' />
                        </LearnMoreSection>
                    </div>
                    <div
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 h-80 sm:h-64 lg:h-96 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            <img src={VisibilityIcon} alt='' />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3'>Contextual Analysis</h2>
                            <p className='text-sm mt-4 text-gray font-hind'>
                                Automatically correlate misconfigurations across compute, storage, and identity assets,
                                determining their real impact on data security. Gain insights to prioritize and
                                streamline remediation efforts, ultimately reducing your organization's exposure to
                                cyber threats and vulnerabilities.
                            </p>
                        </div>
                        <LearnMoreSection>
                            <LearnMoreLink link='/products/security-knowledge-graph/' />
                        </LearnMoreSection>
                    </div>
                    <div
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 h-80 sm:h-64 lg:h-96 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            <img src={ComplianceIcon} alt='' height={40} width={40} />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3'>
                                Identity and Access Management
                            </h2>
                            <p className='text-sm mt-4 text-gray font-hind'>
                                Implement strong identity and access management controls to ensure that only authorized
                                users can access your cloud-native infrastructure and applications. Use multi-factor
                                authentication and role-based access controls to minimize the risk of unauthorized
                                access.
                            </p>
                        </div>
                        <LearnMoreSection>
                            <LearnMoreLink link='/use-cases/iam-security/' />
                        </LearnMoreSection>
                    </div>
                    <div
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 h-96 sm:h-64 lg:h-96 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            {' '}
                            <img src={DataSecurityIcon} alt='' />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3'>
                                Cloud-Native Application Security (CNAPP)
                            </h2>
                            <p className='text-sm mt-4 text-gray font-hind'>
                                Automate prevention, detection, and response across the entire cloud-native application
                                lifecycle to enhance security. Ensure secure supply chain, cloud infrastructure, and
                                running workloads, regardless of deployment location. Provide end-to-end security
                                coverage, enabling DevOps teams to build and deploy secure cloud-native applications at
                                scale.
                            </p>
                        </div>
                        <LearnMoreSection>
                            <LearnMoreLink link='/products/cnapp/' />
                        </LearnMoreSection>
                    </div>
                </Row>
                <Row className='mt-8 lg:mt-16 mb-16 gap-0 lg:gap-8'>
                    <div
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 h-80 sm:h-64 lg:h-80  flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            {' '}
                            <img src={CIEMIcon} alt='' />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3'>CIEM</h2>
                            <p className='text-sm mt-4 text-gray font-hind'>
                                Easily review access and track users, access levels, and permissions, including IAM
                                asset misconfigurations. Gain insights into identities and permissions in complex
                                multi-cloud environments, ensuring secure and compliant access management.
                            </p>
                        </div>
                        <LearnMoreSection>
                            <LearnMoreLink link='/use-cases/iam-security/' />
                        </LearnMoreSection>
                    </div>
                    <div
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 h-80 sm:h-64 lg:h-80 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            <img src={CWPPIcon} alt='' />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3'>CWPP</h2>
                            <p className='text-sm mt-4 text-gray font-hind'>
                                Enhance your workload security with Cloud Workload Protection Platform. Perform
                                contextual analysis of cloud misconfigurations and vulnerabilities across instances,
                                images, containers, and serverless functions. Ensure complete visibility into your
                                entire app stack, across any cloud environment for better security management.
                            </p>
                        </div>
                    </div>
                    <div
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 h-80 sm:h-64 lg:h-80 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            <img src={ContainerSecurityIcon} alt='' height={40} width={40} />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3'>Container Security</h2>
                            <p className='text-sm mt-4 text-gray font-hind'>
                                Ensure the security of your container-based apps and cloud infrastructure with Container
                                Security solutions. Gain complete visibility over where containers are running in the
                                cloud and perform a contextual analysis of vulnerabilities, misconfigurations,
                                networking, and access.
                            </p>
                        </div>
                    </div>
                    <div
                        className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 h-80 sm:h-64 lg:h-80 flex flex-col justify-between p-4 rounded-md'
                        css={cardBackgroundColor}
                    >
                        <div>
                            <img src={KubernetesIcon} alt='' height={40} width={40} />
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3'>Kubernetes Security</h2>
                            <p className='text-sm mt-4 text-gray font-hind'>
                                Secure your Kubernetes clusters, managed or unmanaged, with complete inventory and
                                continuous scanning for vulnerabilities in cluster components and container images.
                                Detect and remediate potential threats to ensure secure Kubernetes environments for your
                                organization.
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
                                        className='text-primary border-title-partly font-montserrat'
                                        css={titleSectionFont}
                                    >
                                        <span className='font-bold'>Real-time Cloud Security</span>
                                        <br className='block lg:hidden xl:block' /> with Contextual Analysis{' '}
                                    </h2>
                                </div>
                                <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                    <p className='text-base text-gray pt-12 pb-2 font-hind'>
                                        Our Cloud-Native Application Protection Platform provides real-time security
                                        with automated contextual analysis, giving you complete visibility and control
                                        over your cloud environment. By analyzing cloud configuration, workload, and
                                        identity, it identifies the most critical attack vectors that pose a threat to
                                        your business, rather than overwhelming you with numerous alerts for
                                        vulnerabilities, permissions, and exposed services.
                                    </p>
                                    <p className='text-base text-gray py-2 font-hind'>
                                        With our security tools, you can prioritize and address the most significant
                                        security risks, ensuring application security and the integrity of your cloud
                                        infrastructure. Automations enable continuous scanning for vulnerabilities,
                                        misconfigurations, and threats across your entire cloud ecosystem.
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
            <Container id='automate-compliance'>
                <Section>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-5'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <h2
                                    className='font-semibold font-montserrat text-primary leading-normal border-title-partly'
                                    css={titleSectionFont}
                                >
                                    Integrate with all major
                                    <br className='block lg:hidden' /> Cloud Providers
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-12  mt-8 sm:mt-0 sm:px-3 lg:col-span-7'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-full'>
                                <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                    <strong>
                                        We support all major cloud providers from Amazon Web Services to Microsoft
                                        Azure, Google Cloud, Oracle Cloud, and IBM Cloud
                                    </strong>
                                    . You can also use Cyscale for your cloud-native security needs (VMs, network,
                                    serverless, databases, apps) for vulnerability and threat management, cloud
                                    inventory, secure cloud extension, and as a compliance and cost-reduction solution.
                                </p>
                                <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                    With our vulnerability and threat management tools, you can identify and mitigate
                                    security risks before they can be exploited. Our cloud inventory feature provides
                                    complete visibility into your cloud environment, while our secure cloud extension
                                    allows you to securely connect to remote environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>
            </Container>
            <div className='bg-gradient-to-b from-selago to-white relative z-10' id='confidence'>
                <img src={corner} width={300} className='hidden md:block absolute top-0 right-0 m-0 z-20' alt='' />
                <Container>
                    <div className='py-8 md:py-12 lg:py-20'>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-md mb-20'>
                            <h2
                                className='font-bold text-primary leading-normal border-title-partly montserrat-font'
                                css={titleSectionFont}
                            >
                                100% Confidence with <br /> your Cloud Compliance
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Meet industry regulations</strong>
                                        <br />
                                        Protect sensitive data and comply with strict industry regulations in your
                                        organisation. Cyscale automatically runs all critical compliance checks and
                                        finds data at-risk across multiple cloud service providers.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>PCI-DSS, SOC 2, GDPR, and more</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including: CIS,
                                        ISO27001, PCI-DSS, NIST,
                                        <br className='hidden lg:block' /> SOC 2, GDPR.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Built-in compliance templates</strong>
                                        <br />
                                        You can either use policy templates as a basis for your custom policies, or
                                        create them from scratch.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6 font-hind'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong className='font-montserrat'>
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
                <div className='md:pt-12 pb-44'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' />
                        <h1 className='text-center px-2 mt-4 mb-2 font-montserrat font-bold text-lg lg:text-2xl'>
                            Elevate your Cloud Native Security game with CNAPP{' '}
                        </h1>
                        <p className='font-hind text-base sm:text-lg lg:text-xl'>
                            Strenghten your cloud security practices
                        </p>
                        <div className='mt-10 w-auto inline-block'>
                            <Link
                                className='gradientBgBtn w-full block text-sm font-medium rounded text-white text-center py-4 px-12 hover:no-underline no-underline font-hind`'
                                to='/request-demo/'
                            >
                                REQUEST LIVE DEMO
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default CloudNativeSecurity;
