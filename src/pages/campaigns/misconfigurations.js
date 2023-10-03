import React from 'react';
import { Container, Row } from '../../components/atoms/Containers';
import { graphql, Link, useStaticQuery } from 'gatsby';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import ScrollButtonStartups from '../../components/ScrollButton/ScrollButtonStartups';
import { GatsbyImage } from 'gatsby-plugin-image';
import AnimatedNavbarLayout from '../../components/campaigns/AnimatedNavbarLayout';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import { css } from 'twin.macro';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import { MisconfigurationsTopArticles } from '../../common/links';

const subtitle = css`
    font-size: 1.625rem;
    line-height: 2rem;
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const Misconfigurations = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query MisconfigurationsCampaignQuery {
            inventoryCSPM: file(relativePath: { eq: "inventory-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            alertsCSPM: file(relativePath: { eq: "alerts-cspm.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            policiesCSPM: file(relativePath: { eq: "policies-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
        }
    `);

    return (
        <AnimatedNavbarLayout
            formId={'8543c2b4-5f8e-4df7-9305-aa991806e01f'}
            formTargetId={'#request-demo'}
            location={location}
            title={'Identify and Fix Cloud Misconfigurations Automatically | Cyscale'}
            description={
                'Improve your cloud security posture in minutes. Detect and eliminate critical misconfigurations, policy violations, and mistakes.'
            }
            pageName={'MisconfigurationsCampaign'}
            noIndex={true}
        >
            <div className='bg-hero-campaigns-iam-security pb-8 pt-32 lg:pt-40 xl:pt-12'>
                <Container>
                    <div>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 '>
                                <div className='lg:mt-4 pt-2 md:pt-8 lg:pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1 className='text-center lg:text-left text-blue text-3xl md:text-4xl lg:text-5xl leading-normal mb-8 font-montserrat font-semibold'>
                                        Identify and Fix Cloud Misconfigurations
                                    </h1>
                                    <p className='text-center sm:text-left text-base lg:text-lg leading-relaxed text-gray font-semibold max-w-md mx-auto lg:mx-0'>
                                        Automatically improve your cloud security posture. Scan, monitor, and remediate
                                        across AWS, Microsoft Azure, Google Cloud, Alibaba Cloud.
                                    </p>
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
                                    <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0 font-montserrat'>
                                        Request a live demo
                                    </h2>
                                    {loadingForm && <LoaderContainer minHeight={450} />}
                                    <div
                                        style={{ minHeight: 450 }}
                                        id='request-demo'
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
            <Container className='mt-0 md:mt-12 lg:mt-0'>
                <div className='pb-8 lg:pt-32 lg:pb-16' id='start'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.inventoryCSPM.childImageSharp.gatsbyImageData}
                                    alt='Inventory view with assets and risk information'
                                    className='shadow-lg'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat'
                                    css={subtitle}
                                >
                                    Prevent misconfigurations & mistakes
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                    A single misconfiguration can have a devastating impact on your cloud security.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Cyscale automatically detects misconfigured services across identity, compute,
                                    storage, networking, container services, managed Kubernetes, and many more.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Get step-by-step remediation guidelines for any finding, so that you can act fast to
                                    reduce your attack surface and prevent incidents.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.inventoryCSPM.childImageSharp.gatsbyImageData}
                                    alt='Inventory view with assets and risk information'
                                    className='shadow-lg'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pb-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat'
                                    css={subtitle}
                                >
                                    Cut through
                                    <br /> the noise
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                    Don't waste time chasing false positives. Get contextual alerts when your cloud
                                    assets drift away from established security and compliance standards.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Instead of overwhelming list-based management, Cyscale's Security Knowledge Graph™
                                    makes precise correlations between all your cloud assets and data repositories to
                                    automatically pinpoint critical security improvements.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.alertsCSPM.childImageSharp.gatsbyImageData}
                                    alt='Alerts view'
                                    className='shadow-lg'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.policiesCSPM.childImageSharp.gatsbyImageData}
                                    alt=' Policies view with compliance score'
                                    className='shadow-lg'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat'
                                    css={subtitle}
                                >
                                    Out-of-the-box actionable policies and standards
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                    In-app security standards and organizational security policy templates for CIS Cloud
                                    Benchmarks, ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST, and many more help your
                                    team with internal or external audits.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Automated and continuous assessment of your cloud compliance, with custom Controls
                                    that tap into our Security Knowledge Graph to deliver the security and compliance
                                    checks that matter most to your organization.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.policiesCSPM.childImageSharp.gatsbyImageData}
                                    alt=' Policies view with compliance score'
                                    className='shadow-lg'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-gradient-to-b from-selago to-white relative z-10' id='confidence'>
                <img
                    src={corner}
                    width={300}
                    className='hidden lg:block absolute top-0 right-0 m-0 z-20'
                    alt=''
                    loading='lazy'
                />
                <Container>
                    <div className='py-8 md:py-12 lg:py-20'>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-2xl mb-20'>
                            <h2 className='font-bold text-primary border-title-partly font-montserrat' css={subtitle}>
                                Automate cloud misconfiguration
                                <br />
                                checks and eliminate manual work
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Analyze cloud misconfigurations</strong>
                                        <br />
                                        Analyze misconfigurations against the most popular industry and regulatory
                                        frameworks, including a wide range of CIS control benchmarks, ISO 27001, and SOC
                                        2.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Ensure security and compliance</strong>
                                        <br />
                                        Prove alignment with the highest industry standards, enforce policies
                                        consistently across cloud providers and scale compliance efforts without
                                        overhead.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>400+ unique configuration controls</strong>
                                        <br />
                                        Unique and customizable controls, including authentication, data protection,
                                        logging and monitoring, network configurations, system integrity, and more.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Prioritize misconfiguration risk</strong>
                                        <br />
                                        Contextual prioritization and remediation through our Security Knowledge Graph,
                                        which surfaces crucial issues based on the correlation of insights from a deep
                                        understanding of all your interlinked assets.
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='md:pt-12 pb-12 md:pb-24'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' loading='lazy' />
                        <h2 className='text-center px-2 mt-4 mb-2 font-montserrat font-bold text-lg lg:text-2xl'>
                            Get peace of mind with automated cloud security
                        </h2>
                        <div className='mt-10 w-auto inline-block'>
                            <Link
                                css={css`
                                    padding: 0.625rem 2.5rem;
                                `}
                                className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind'
                                to='/request-demo/'
                            >
                                BOOK YOUR DEMO
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
            <LinksAndWhitepaper
                topArticles={MisconfigurationsTopArticles}
                data={data}
                title={'Misconfigurations'}
                titleCard={'The Complete Guide<br class="hidden lg:block" /> to Cloud Storage Misconfigurations'}
                textCard={
                    'This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data security breaches and the importance of a secure cloud storage infrastructure.'
                }
                linkCard={'/whitepaper/cloud-storage-misconfigurations/'}
                misconfigurationWhitepaper={true}
            />
        </AnimatedNavbarLayout>
    );
};

export default Misconfigurations;
