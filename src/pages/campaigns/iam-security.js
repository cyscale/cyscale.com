import React from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import { graphql, useStaticQuery } from 'gatsby';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import { GatsbyImage } from 'gatsby-plugin-image';
import gcpLogo from '../../assets/images/google-cloud-campaigns-iam-security.svg';
import awsLogo from '../../assets/images/aws-campaigns-iam-security.svg';
import azureLogo from '../../assets/images/azure-campaigns-iam-security.svg';
import alibabaLogo from '../../assets/images/alibaba-campaigns-iam-security.svg';
import oktaLogo from '../../assets/images/okta-campaigns-iam-security.svg';
import { animateScroll } from 'react-scroll';
import AnimatedNavbarLayout from '../../components/campaigns/AnimatedNavbarLayout';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';
import HeroImage from '../../assets/images/bg-image-misconfigurations-campaigns.svg';
import { css } from 'twin.macro';
import ScrollDown from '../../components/ScrollButton/ScrollDown';
import ServiceHighlight from '../../components/campaigns/ServiceHighlight';

const IamSecurity = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query IAMSecurityCampaignQuery {
            usersList: file(relativePath: { eq: "identity-campaigns-users-list-iam-security.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            identityCampaigns: file(relativePath: { eq: "identity-campaigns-iam-security.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <AnimatedNavbarLayout
            formId={'0f6ac136-20fa-4420-95a4-da1ff837f635'}
            formTargetId={'#iamsecurity-campaign-form'}
            location={location}
            title={'Identity and Access Management Security for Cloud | Cyscale'}
            description={'Identity and Access Management Security for Cloud'}
            pageName={'IAMCampaign'}
            noIndex={true}
        >
            <div className='bg-zircon pb-8 pt-32 lg:pt-40 xl:pt-12 relative'>
                <Container>
                    <Row>
                        <div className='col-span-12 lg:col-span-6 '>
                            <div className='lg:mt-4 pt-2 md:pt-8 lg:pt-4 max-w-2xl mx-auto lg:mx-0'>
                                <h1
                                    className='text-center lg:text-left text-blue mb-8 font-montserrat font-bold'
                                    css={css`
                                        font-size: 2rem;
                                        @media (min-width: 1024px) {
                                            &:after {
                                                content: '';
                                                display: block;
                                                width: 40%;
                                                height: 6px;
                                                margin-top: 16px;
                                                background-image: linear-gradient(to right, #0f26aa, #ff4a56);
                                            }
                                        }
                                    `}
                                >
                                    Identity and Access
                                    <br /> Management <br /> Security for Cloud
                                </h1>
                                <p className='font-hind text-center lg:text-left text-base lg:text-lg mb-4 leading-relaxed text-gray'>
                                    Continuous multi-cloud monitoring for identity and access management (IAM)
                                    misconfigurations across all your cloud assets to meet strict IAM compliance
                                    directives and improve your cloud security posture. Full integration with Okta.
                                </p>
                                <ServiceHighlight>
                                    Take control of your cloud identities and permissions.
                                </ServiceHighlight>
                                <div className='flex flex-row max-w-md sm:max-w-lg justify-between flex-wrap space-y-6 lg:space-y-0 lg:space-x-1 px-18 sm:px-0 mx-auto mt-4'>
                                    <img style={{ marginTop: '0' }} className='mx-auto sm:mx-0' src={gcpLogo} alt='' />
                                    <img style={{ marginTop: '0' }} className='mx-auto sm:mx-0' src={awsLogo} alt='' />
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
                                css={css`
                                    background-color: rgba(255, 255, 255, 0.6);
                                    backdrop-filter: blur(5px);
                                    z-index: 1;
                                `}
                            >
                                <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0 montserrat-font'>
                                    Book a live demo
                                </h2>
                                {loadingForm && <LoaderContainer minHeight={435} />}
                                <div
                                    style={{ minHeight: 435 }}
                                    id='iamsecurity-campaign-form'
                                    className={classnames('pb-4', { hidden: loadingForm })}
                                />
                            </div>
                        </div>
                    </Row>
                    <ScrollDown />
                </Container>
                <div className='absolute bottom-0 right-0 '>
                    <div className='hidden lg:block lg:max-w-2xl'>
                        <img src={HeroImage} alt='' />
                    </div>
                </div>
            </div>
            <Container>
                <Section id='start'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.usersList.childImageSharp.gatsbyImageData}
                                    className='shadow-2xl'
                                    alt=''
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                <h2 className='text-3xl font-bold text-primary leading-normal border-title font-montserrat'>
                                    Understand access
                                    <br /> configuration
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='text-base leading-normal my-12 text-gray font-montserrat'>
                                    <strong>
                                        Effectively manage user permissions and enforce privilege access for a robust
                                        cloud security posture.
                                    </strong>
                                </p>
                                <ul className='list-disc ml-4 text-gray font-hind'>
                                    <li className='mb-4'>
                                        A powerful Identity Dashboard helping you understand how access is provisioned
                                        in your organization on a per-person basis
                                    </li>
                                    <li className='mb-4'>
                                        Identity provider integration: Onboard your Okta account into Cyscale and get
                                        full visibility on cloud SSO users and provisioning
                                    </li>
                                    <li className='mb-4'>
                                        User access misconfigurations are highlighted so that you can detect and
                                        mitigate risk
                                    </li>
                                    <li className='mb-4'>
                                        Easy filtering for: inactive users, highly privileged or high-risk users, and
                                        others
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>
            </Container>
            <Container>
                <Section>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm'>
                                <h2 className='text-3xl font-bold text-primary leading-normal border-title font-montserrat'>
                                    Deep dive into
                                    <br /> User assets
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray my-12 font-montserrat'>
                                    <strong>
                                        An optimized page for user assets helps you visualize and understand:
                                    </strong>
                                </p>
                                <ul className='list-disc ml-4 text-gray font-hind'>
                                    <li className='mb-2'>Access (groups and permissions)</li>
                                    <li className='mb-2'>Risk</li>
                                    <li className='mb-2'>Policy violations</li>
                                    <li className='mb-2'>User-related alerts</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.identityCampaigns.childImageSharp.gatsbyImageData}
                                    className='shadow-2xl'
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </Section>
            </Container>
            <div className='bg-blue-gradient' id='confidence' style={{ position: 'relative', zIndex: 1 }}>
                <img
                    src={corner}
                    style={{ position: 'absolute', top: 0, right: 0, margin: 0, zIndex: -1 }}
                    width={300}
                    className='hidden md:block'
                    alt=''
                />
                <Container>
                    <Section>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-sm mb-20'>
                            <h2 className='text-3xl font-bold text-primary leading-normal border-title font-montserrat'>
                                100% Confidence with your IAM Compliance
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal font-hind text-base text-gray mb-6'>
                                        <strong className='font-montserrat'>Meet industry regulations</strong>
                                        <br />
                                        Protect sensitive data and comply with strict industry in your Financial
                                        organisation. Cyscale automatically runs all critical compliance checks and
                                        finds data at-risk.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal font-hind text-base text-gray mb-6'>
                                        <strong className='font-montserrat'>PCI-DSS, SOC 2, GDPR, and more</strong>
                                        <br />
                                        Cyscale supports a wide range of CIS control benchmarks, including: CIS,
                                        ISO27001, PCI-DSS, NIST, SOC2, GDPR.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal font-hind text-base text-gray mb-6'>
                                        <strong className='font-montserrat'>
                                            500+ out-of-the-box security controls
                                        </strong>
                                        <br />
                                        Onboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box
                                        security controls and policies.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal font-hind text-base text-gray mb-6'>
                                        <strong className='font-montserrat'>Prioritize misconfiguration risk</strong>
                                        <br />
                                        With our Security Knowledge Graph™, we surface crucial issues based on deep
                                        understanding of all your interlinked assets - rather than a mishmash of
                                        unrelated assets.
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
                        <h1 className='text-center px-2 mt-4 mb-2 font-montserrat'>
                            Scan, monitor and prioritize cloud IAM risk
                        </h1>
                        <div className='mt-10 w-auto inline-block'>
                            <button
                                className='gradientBgBtn w-full block text-base font-medium rounded text-white uppercase text-center py-4 px-12 hover:no-underline no-underline font-hind'
                                onClick={() => animateScroll.scrollToTop()}
                            >
                                Request Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </AnimatedNavbarLayout>
    );
};

export default IamSecurity;
