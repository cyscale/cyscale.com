import React from 'react';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import { graphql, useStaticQuery } from 'gatsby';
import NewCookiesCampaignsLayout from '../../components/campaigns/NewCookiesCampaignsLayout';
import { Container, Row, Section } from '../../components/atoms/Containers';
import gcpLogo from '../../assets/images/google-cloud-campaigns-iam-security.svg';
import awsLogo from '../../assets/images/aws-campaigns-iam-security.svg';
import azureLogo from '../../assets/images/azure-campaigns-iam-security.svg';
import alibabaLogo from '../../assets/images/alibaba-campaigns-iam-security.svg';
import oktaLogo from '../../assets/images/okta-campaigns-iam-security.svg';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';
import classnames from 'classnames';
import ScrollButtonStartups from '../../components/ScrollButton/ScrollButtonStartups';
import { GatsbyImage } from 'gatsby-plugin-image';
import cloudIcon from '../../assets/images/white-cloud-icon.svg';
import { animateScroll } from 'react-scroll';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import DataClassificationIcon from '../../assets/images/data-classification-policy.svg';
import DataLabelingIcon from '../../assets/images/data-labeling-icon.svg';
import DataWhereaboutsIcon from '../../assets/images/data-whereabouts-icon.svg';
import DataSecurityIcon from '../../assets/images/data-security-icon.svg';
import WarningIcon from '../../assets/images/warning-icon.svg';
import CheckMarkIcon from '../../assets/images/check-mark-icon.svg';
import { css } from 'twin.macro';

const dashboardMarginTop = css`
    margin-top: 8.5rem;

    @media (max-width: 1024px) {
        margin: 2rem 0 2rem 0;
    }
`;

const backgroundSection = css`
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    border-radius: 8px;
    line-height: 19.5px;
`;

const sectionTitleSize = css`
    font-size: 1.75rem;

    @media (max-width: 1280px) {
        font-size: 1.5rem;
    }
`;

const ctaHeight = css`
    height: 34.75rem;

    @media (max-width: 1280px) {
        height: auto;
    }
`;

const DataSecurity = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query DataSecurityCampaignQuery {
            dashboard: file(relativePath: { eq: "security-dashboard.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            policyManagement: file(relativePath: { eq: "data-management-policy.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            policies: file(relativePath: { eq: "data-protection-policy.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <NewCookiesCampaignsLayout
            formId={'5258bbe9-2f49-4225-b803-c83cfce8921c'}
            formTargetId={'#request-data-security-demo'}
            location={location}
            title={'Comprehensive CSPM solution'}
            description={
                'Streamline posture management for multi-cloud environments, enable teams to continuously detect, prevent misconfigurations and control threats and ensure compliance for your cloud assets.'
            }
            pageName={'DataSecurityCampaign'}
        >
            <div className='bg-hero-campaigns-iam-security pb-8 pt-32 lg:pt-40 xl:pt-12'>
                <Container>
                    <div>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 '>
                                <div className='lg:mt-4 pt-2 md:pt-8 lg:pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1 className='text-center sm:text-left text-blue text-3xl md:text-4xl lg:text-5xl lg:leading-normal mb-8 montserrat-font font-semibold'>
                                        Multi-cloud <br /> Data Security <br className='hidden lg:block' /> for
                                        resilient cloud environments
                                    </h1>
                                    <p className='text-center sm:text-left text-base lg:text-lg leading-relaxed text-gray mt-16'>
                                        Keep track of your organization’s data security posture with Cyscale’s inventory
                                        of cloud data stores and a contextual security analysis. Protect your most
                                        important data assets, avoid breaches and be prepared for audits.
                                    </p>
                                    <div className='flex flex-row max-w-md sm:max-w-xl justify-between flex-wrap space-y-6 lg:space-y-0 lg:space-x-1 px-18 sm:px-0 mx-auto mt-4 lg:mt-32'>
                                        <img
                                            style={{ marginTop: '0' }}
                                            className='mx-auto sm:mx-0'
                                            src={gcpLogo}
                                            alt=''
                                        />
                                        <img
                                            style={{ marginTop: '0' }}
                                            className='mx-auto sm:mx-0'
                                            src={awsLogo}
                                            alt=''
                                        />
                                        <img
                                            style={{ marginTop: '0' }}
                                            className='mx-auto sm:mx-0'
                                            src={azureLogo}
                                            alt=''
                                        />
                                        <img
                                            style={{ marginTop: '0' }}
                                            className='mx-auto sm:mx-0 hidden sm:block'
                                            src={alibabaLogo}
                                            alt=''
                                        />
                                        <img
                                            style={{ marginTop: '0' }}
                                            className='mx-auto sm:mx-0 hidden sm:block'
                                            src={oktaLogo}
                                            alt=''
                                        />
                                    </div>
                                    <div className='flex flex-row max-w-xs justify-evenly flex-wrap space-y-6 px-18 sm:px-0 mx-auto  block sm:hidden'>
                                        <img style={{ marginTop: '0' }} className='' src={alibabaLogo} alt='' />
                                        <img style={{ marginTop: '0' }} className='' src={oktaLogo} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6' id='apply-now'>
                                <div
                                    className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 lg:pt-12 pb-0 px-8 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                        backdropFilter: 'blur(5px)'
                                    }}
                                >
                                    <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0 montserrat-font'>
                                        Request a live demo
                                    </h2>
                                    {loadingForm && <LoaderContainer minHeight={450} />}
                                    <div
                                        style={{ minHeight: 450 }}
                                        id='request-data-security-demo'
                                        className={classnames('pb-4', { hidden: loadingForm })}
                                    />
                                </div>
                            </div>
                        </Row>
                    </div>
                    <div className='py-16 hidden sm:block '>
                        <ScrollButtonStartups to='start' />
                    </div>
                </Container>
            </div>
            <Container>
                <div className='py-8 lg:py-32' id='start'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-8'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-md sm:max-w-xl lg:max-w-sm'>
                                <h2 className='text-2xl lg:text-3xl font-bold text-primary leading-normal montserrat-font'>
                                    Pillars of a healthy <br /> Data Security Program
                                </h2>
                            </div>
                            <div className='sm:grid sm:grid-cols-12 sm:gap-6 mt-16 mx-auto lg:mx-0 max-w-md sm:max-w-xl'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <img src={DataClassificationIcon} alt='' width={30} height={30} />
                                    <h4 className='text-lg font-semibold montserrat-font mt-2'>
                                        Data classification policy
                                    </h4>
                                    <p className='text-sm font-medium montserrat-font mt-2'>
                                        Maintain your Data Classification policy using Cyscale’s policy engine. You can
                                        either use provided templates and customize them to your needs, or create your
                                        own policy and procedures from scratch.{' '}
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <img src={DataLabelingIcon} alt='' width={30} height={30} />
                                    <h4 className='text-lg font-semibold montserrat-font mt-2'>Data labeling</h4>
                                    <p className='text-sm font-medium montserrat-font mt-2'>
                                        Use Cyscale controls to detect untagged cloud assets. Attach controls directly
                                        to your Data Classification policy, so that you’re able to track compliance
                                        score.
                                    </p>
                                </div>
                            </div>
                            <div className='sm:grid sm:grid-cols-12 sm:gap-6 mt-8 mx-auto lg:mx-0  max-w-md sm:max-w-xl'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <img src={DataWhereaboutsIcon} alt='' width={30} height={30} />
                                    <h4 className='text-lg font-semibold montserrat-font mt-2'>Data whereabouts</h4>
                                    <p className='text-sm font-medium montserrat-font mt-2'>
                                        A data security dashboard provides a focused overview of all the data stores
                                        across your multi-cloud environments, helping you keep track of the location of
                                        your most important data.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    {' '}
                                    <img src={DataSecurityIcon} alt='' width={30} height={30} />
                                    <h4 className='text-lg font-semibold montserrat-font mt-2'>Data security</h4>
                                    <p className='text-sm font-medium montserrat-font mt-2'>
                                        Use dashboards and controls for data security concerns: encryption, key hygiene,
                                        publicly accessible data stores, as well as issues that are specific to object
                                        containers, databases, disks and message queues.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto max-w-md lg:mx-0 max-w-md sm:max-w-xl lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.dashboard.childImageSharp.gatsbyImageData}
                                    css={dashboardMarginTop}
                                    alt='Data Security View'
                                    className='shadow-lg rounded-lg'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-gradient-to-b from-selago to-white relative z-10'>
                <img src={corner} width={300} className='hidden md:block absolute top-0 right-0 m-0' alt='' />
                <Container>
                    <Section>
                        <div className='max-w-md mx-auto sm:max-w-xl lg:mx-0 lg:max-w-sm mb-20'>
                            <h2 className='text-2xl lg:text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                Stay in the know for:
                            </h2>
                        </div>

                        <Row className='lg:gap-6'>
                            <div className='col-span-12 lg:col-span-4'>
                                <div
                                    className='font-semibold text-base my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                    css={backgroundSection}
                                >
                                    <img src={WarningIcon} alt='' className='mr-2' />
                                    Unencrypted data stores
                                </div>
                                <div
                                    className='font-semibold text-base my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                    css={backgroundSection}
                                >
                                    <img src={WarningIcon} alt='' className='mr-2' />
                                    Permissive access policies for keys
                                </div>
                                <div
                                    className='font-semibold text-base my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                    css={backgroundSection}
                                >
                                    <img src={WarningIcon} alt='' className='mr-2' />
                                    Poor key rotation
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-4'>
                                <div
                                    className='font-semibold text-base lg:mt-6 mb-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                    css={backgroundSection}
                                >
                                    <img src={WarningIcon} alt='' className='mr-2' />
                                    Databases with a public IP address
                                </div>
                                <div
                                    className='font-semibold text-base my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                    css={backgroundSection}
                                >
                                    <img src={WarningIcon} alt='' className='mr-2' />
                                    Keys exposed through vulnerable VMs
                                </div>
                                <div
                                    className='font-semibold text-base my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                    css={backgroundSection}
                                >
                                    <img src={WarningIcon} alt='' className='mr-2' />
                                    Data stores accessible from VMs with open management ports
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-4'>
                                <div
                                    className='font-semibold text-base lg:mt-6 mb-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                    css={backgroundSection}
                                >
                                    <img src={WarningIcon} alt='' className='mr-2' />
                                    Publicly accessible object containers
                                </div>
                                <div
                                    className='font-semibold text-base my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                    css={backgroundSection}
                                >
                                    <img src={WarningIcon} alt='' className='mr-2' />
                                    Publicly accessible databases
                                </div>
                                <div
                                    className='font-semibold text-base my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                    css={backgroundSection}
                                >
                                    <img src={WarningIcon} alt='' className='mr-2' />
                                    Publicly accessible disks
                                </div>
                            </div>
                        </Row>
                    </Section>
                </Container>
            </div>

            <Container>
                <div className='pb-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 xl:gap-28'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-md sm:max-w-xl lg:max-w-md xl:max-w-2xl'>
                                <h2
                                    className='font-bold text-primary leading-normal border-title-partly font-montserrat'
                                    css={sectionTitleSize}
                                >
                                    Out-of-the-box Data Management
                                    <br /> Policy, with procedures for:
                                </h2>
                                <div className='leading-normal text-base text-gray py-2 flex mt-8'>
                                    <img src={CheckMarkIcon} alt='' className='mr-2' /> Data Lifecycle Management
                                </div>
                                <div className='leading-normal text-base text-gray py-2 flex'>
                                    <img src={CheckMarkIcon} alt='' className='mr-2' /> Data Classification
                                </div>
                                <div className='leading-normal text-base text-gray py-2 flex'>
                                    <img src={CheckMarkIcon} alt='' className='mr-2' /> Data Handling
                                </div>
                                <div className='leading-normal text-base text-gray py-2 flex'>
                                    <img src={CheckMarkIcon} alt='' className='mr-2' /> Data Deletion
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 lg:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-md sm:max-w-xl lg:max-w-md xl:max-w-2xl shadow-lg rounded-lg'>
                                <GatsbyImage
                                    image={data.policyManagement.childImageSharp.gatsbyImageData}
                                    alt='Data Security Policies View'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className='mt-0 md:mt-12 lg:mt-0'>
                <div className='pb-8 lg:pt-32 lg:pb-16'>
                    <div className='sm:grid sm:grid-cols-12 xl:gap-28'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-0 lg:max-w-md xl:max-w-2xl shadow-lg rounded-xl'>
                                <GatsbyImage
                                    image={data.policies.childImageSharp.gatsbyImageData}
                                    alt='Dashboard view'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-md sm:max-w-xl lg:max-w-md xl:max-w-2xl'>
                                <h2
                                    className='font-bold text-primary leading-normal border-title-partly montserrat-font'
                                    css={sectionTitleSize}
                                >
                                    Out-of-the-box Data Protection
                                    <br /> Policy with technical controls for:
                                </h2>
                                <div className='leading-normal text-base text-gray py-2 flex mt-8'>
                                    <img src={CheckMarkIcon} alt='' className='mr-2' /> Data encryption
                                </div>
                                <div className='leading-normal text-base text-gray py-2 flex'>
                                    <img src={CheckMarkIcon} alt='' className='mr-2' /> Data protection at rest
                                </div>
                                <div className='leading-normal text-base text-gray py-2 flex'>
                                    <img src={CheckMarkIcon} alt='' className='mr-2' /> Data protection in transit
                                </div>
                                <div className='leading-normal text-base text-gray py-2 flex'>
                                    <img src={CheckMarkIcon} alt='' className='mr-2' /> Data access
                                </div>{' '}
                                <div className='leading-normal text-base text-gray py-2 flex'>
                                    <img src={CheckMarkIcon} alt='' className='mr-2' /> Data monitoring
                                </div>
                                <p className='mt-12'>
                                    Use them, or create your own policies to ensure data security within your
                                    organization!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 py-12 block lg:hidden'>
                        <div className='mx-auto max-w-md sm:max-w-xl shadow-lg rounded-xl'>
                            <GatsbyImage image={data.policies.childImageSharp.gatsbyImageData} alt='Dashboard view' />
                        </div>
                    </div>
                </div>
            </Container>

            <div className='gradientBGCSPM'>
                <Container>
                    <div className='py-12 lg:py-32' css={ctaHeight}>
                        <div className='flex flex-col items-center'>
                            <img src={cloudIcon} alt='Cloud Icon' />
                            <h2
                                className='text-center px-2 mb-4 text-white font-montserrat font-bold'
                                css={sectionTitleSize}
                            >
                                Prioritize Data Security with Cyscale
                            </h2>
                            <p className='text-white text-center text-base font-medium mb-4'>
                                Sign up for a custom demo to see how we close
                                <br /> security gaps and help you move to the cloud.
                            </p>
                            <div className='mt-6 w-auto inline-block'>
                                <button
                                    className='w-full block text-base font-medium rounded text-blue bg-white uppercase text-center py-3 px-4 hover:no-underline no-underline'
                                    onClick={() => animateScroll.scrollToTop()}
                                >
                                    Request a Live Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </NewCookiesCampaignsLayout>
    );
};

export default DataSecurity;
