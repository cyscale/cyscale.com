import React from 'react';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import { graphql, useStaticQuery } from 'gatsby';
import AnimatedNavbarLayout from '../../components/campaigns/AnimatedNavbarLayout';
import { Container, Row } from '../../components/atoms/Containers';
import gcpLogo from '../../assets/images/google-cloud-campaigns-iam-security.svg';
import awsLogo from '../../assets/images/aws-campaigns-iam-security.svg';
import azureLogo from '../../assets/images/azure-campaigns-iam-security.svg';
import alibabaLogo from '../../assets/images/alibaba-campaigns-iam-security.svg';
import oktaLogo from '../../assets/images/okta-campaigns-iam-security.svg';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';
import classnames from 'classnames';
import loadable from '@loadable/component';
import DataClassificationIcon from '../../assets/images/data-classification-policy.svg';
import DataLabelingIcon from '../../assets/images/data-labeling-icon.svg';
import DataWhereaboutsIcon from '../../assets/images/data-whereabouts-icon.svg';
import DataSecurityIcon from '../../assets/images/data-security-icon.svg';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';
import ScrollDown from '../../components/ScrollButton/ScrollDown';
import TourVideo from '../../components/video/TourVideo';

const DataSecurityList = loadable(() => import('../../components/campaigns/data-security/DataSecurityList'));
const DataManagementSection = loadable(() => import('../../components/campaigns/data-security/DataManagementSection'));
const DataProtectionSection = loadable(() => import('../../components/campaigns/data-security/DataProtectionSection'));
const Cta = loadable(() => import('../../components/campaigns/data-security/Cta'));

const dashboardMarginTop = css`
    margin-top: 8.5rem;

    @media (max-width: 1024px) {
        margin: 2rem 0 2rem 0;
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
        <AnimatedNavbarLayout
            formId={'5258bbe9-2f49-4225-b803-c83cfce8921c'}
            formTargetId={'#request-data-security-demo'}
            location={location}
            title={'Cloud Data Security - Securing Data Stored in the Cloud | Cyscale'}
            description={
                "Keep tabs on your fast-growing cloud inventory with automated data discovery and classification, compliance scans on autopilot and a fully auditable evidence trail. And that's just a taste!"
            }
            pageName={'DataSecurityCampaign'}
            noIndex={true}
        >
            <div className='bg-hero-campaigns-iam-security pt-32 lg:pt-40 xl:pt-12'>
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
                    <div className='pb-16 sm:pb-0 lg:pt-4'>
                        <ScrollDown />
                    </div>
                </Container>
            </div>
            <TourVideo />
            <Container>
                <div className='pb-8 lg:pt-32 lg:pb-32' id='start'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-8'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-md sm:max-w-xl lg:max-w-sm'>
                                <h2 className='text-2xl lg:text-3xl font-bold text-primary leading-normal montserrat-font'>
                                    Pillars of a healthy <br /> Data Security Program
                                </h2>
                            </div>
                            <div className='grid grid-cols-12 gap-6 mt-16 mx-auto lg:mx-0 max-w-md sm:max-w-xl'>
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
                            <div className='grid grid-cols-12 gap-6 mt-6 mx-auto lg:mx-0  max-w-md sm:max-w-xl'>
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
            <DataSecurityList data={data} />
            <DataManagementSection data={data} />
            <DataProtectionSection data={data} />
            <Cta />
        </AnimatedNavbarLayout>
    );
};

export default DataSecurity;
