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
import loadable from '@loadable/component';

const DataSecurityProgram = loadable(() => import('../../components/campaigns/data-security/DataSecurityProgram'));
const DataSecurityList = loadable(() => import('../../components/campaigns/data-security/DataSecurityList'));
const DataManagementSection = loadable(() => import('../../components/campaigns/data-security/DataManagementSection'));
const DataProtectionSection = loadable(() => import('../../components/campaigns/data-security/DataProtectionSection'));
const Cta = loadable(() => import('../../components/campaigns/data-security/Cta'));

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
            title={'Cloud Data Security - Securing Data Stored in the Cloud | Cyscale'}
            description={
                "Keep tabs on your fast-growing cloud inventory with automated data discovery and classification, compliance scans on autopilot and a fully auditable evidence trail. And that's just a taste!"
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
            <DataSecurityProgram data={data} />
            <DataSecurityList data={data} />
            <DataManagementSection data={data} />
            <DataProtectionSection data={data} />
            <Cta />
        </NewCookiesCampaignsLayout>
    );
};

export default DataSecurity;
