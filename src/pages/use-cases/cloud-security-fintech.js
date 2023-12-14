import React from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Container, Row } from '../../components/atoms/Containers';
import { css } from 'twin.macro';
import ServiceHighlight from '../../components/campaigns/ServiceHighlight';
import ScrollDown from '../../components/ScrollButton/ScrollDown';
import { GatsbyImage } from 'gatsby-plugin-image';
import EncryptIcon from '../../assets/images/encrypt-icon-fintech.svg';
import OnlineBanking from '../../assets/images/online-banking-icon.svg';
import IdentityFintech from '../../assets/images/identity-icon-fintech.svg';
import { graphql, Link, useStaticQuery } from 'gatsby';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import TourVideo from '../../components/video/TourVideo';

const subtitle = css`
    font-size: 1.625rem;
    line-height: 2rem;
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const titleSection = css`
    font-size: 2rem;
`;

const sectionSubtitleColor = css`
    color: #38aff1;
`;

const CloudSecurityFintechUC = ({ location }) => {
    const data = useStaticQuery(graphql`
        query FintechUseCaseQuery {
            heroImage: file(relativePath: { eq: "hero-image-fintech.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            continuosProtection: file(relativePath: { eq: "continuos-protection-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            graph: file(relativePath: { eq: "graph-misconfiguration.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            cards: file(relativePath: { eq: "cards-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            smartFintech: file(relativePath: { eq: "smart-fintech-home.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            alex: file(relativePath: { eq: "alex-cociu.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 70, layout: FIXED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='FintechUseCase'
            title='Cloud security and compliance for fintech | Cyscale'
            description='Automated cloud security for financial services, digital banks, and blockchain operators to meet complex regulatory requirements and ensure data protection.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /use-cases/cloud-security-fintech
            </div>
            <div className='hidden' data-title>
                Cloud security and compliance for fintech | Cyscale
            </div>
            <div className='hidden' data-description>
                Automated cloud security for financial services, digital banks, and blockchain operators to meet complex
                regulatory requirements and ensure data protection.
            </div>
            <div className='hidden' data-category>
                solutions
            </div>
            <div className='bg-zircon sm:pb-0 pt-32 lg:pt-40 xl:pt-32 relative'>
                <Container>
                    <Row>
                        <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                            <div className='lg:mt-4 pt-2 lg:pt-4 max-w-2xl mx-auto lg:mx-0'>
                                <h1
                                    className='text-center lg:text-left mb-8 font-montserrat font-bold'
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
                                    Cloud security and <br /> compliance for{' '}
                                    <span
                                        css={css`
                                            background-image: linear-gradient(89deg, #0f26aa 54.38%, #ff4a56 75.89%);
                                            color: transparent;
                                            -webkit-background-clip: text;
                                            background-clip: text;
                                            display: inline-block;
                                            padding: 2px 5px;
                                        `}
                                    >
                                        fintech
                                    </span>
                                </h1>
                                <p
                                    className='text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-hind'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    Automated cloud security controls enable financial services organizations, digital
                                    banks, and blockchain operators to meet complex regulatory requirements and ensure
                                    data protection.
                                </p>
                                <div className='max-w-lg sm:max-w-xl mx-auto lg:mx-0'>
                                    <p className='font-hind text-base mt-8 text-center lg:text-left font-bold'>
                                        Get a demo and see Cyscale in action:
                                    </p>
                                    <ServiceHighlight
                                        cssCheckMark={css`
                                            @media (max-width: 639px) {
                                                margin-top: -1.5rem;
                                            }
                                        `}
                                    >
                                        <span className='font-bold'> Automated visibility of cloud inventory</span>:
                                        Monitor assets 24/7
                                    </ServiceHighlight>
                                    <ServiceHighlight
                                        cssCheckMark={css`
                                            @media (max-width: 639px) {
                                                margin-top: -1.5rem;
                                            }
                                            @media (max-width: 375px) {
                                                margin-top: -2.9rem;
                                            }
                                        `}
                                    >
                                        <span className='font-bold'>Identity and Access Management</span>: Take control
                                        of permissions
                                    </ServiceHighlight>
                                    <ServiceHighlight
                                        cssCheckMark={css`
                                            @media (max-width: 540px) {
                                                margin-top: -1.5rem;
                                            }
                                        `}
                                    >
                                        <span className='font-bold'>Compliance and Governance</span>: Keep regulators
                                        satisfied
                                    </ServiceHighlight>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 lg:flex lg:justify-end'>
                            <div className='lg:mt-16 pt-4 max-w-lg mx-auto lg:mx-0'>
                                <GatsbyImage image={data.heroImage.childImageSharp.gatsbyImageData} alt='' />
                            </div>
                        </div>
                    </Row>
                    <div className='pb-16 sm:pb-0'>
                        <ScrollDown />
                    </div>
                </Container>
            </div>
            <TourVideo />
            <Container>
                <div className='pb-8 lg:pt-32 lg:pb-16' id='start'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.continuosProtection.childImageSharp.gatsbyImageData}
                                    alt='Screenshots from cloud security platform'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                <img src={EncryptIcon} alt='' className='lg:mt-12' />
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                    css={subtitle}
                                >
                                    Infrastructure security
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Fintechs need a high level of visibility over cloud inventory to ensure separation
                                    between production and non-production environments.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Cyscale automatically detects public-facing resources and misconfigured services
                                    across identity, compute, storage, networking, container services, managed
                                    Kubernetes, and many more.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 my-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.continuosProtection.childImageSharp.gatsbyImageData}
                                    alt='Screenshots from cloud security platform'
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
                                <img src={OnlineBanking} alt='' className='lg:mt-6' />
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                    css={subtitle}
                                >
                                    Compliance and Governance
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    In-app security standards and organizational security policy templates help you
                                    breeze through internal or external audits. Regulatory compliance frameworks
                                    supported: PCI-DSS, PSD2, DORA. GDPR for data privacy. SOC 2 to reassure your
                                    customers, and many more.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.cards.childImageSharp.gatsbyImageData}
                                    alt='Screenshots from cloud security platform'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-8 lg:pt-16 lg:pb-32'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.graph.childImageSharp.gatsbyImageData}
                                    alt='Graph with alert and control details'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg lg:pl-16'>
                                <img src={IdentityFintech} alt='' className='lg:mt-12' />
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat mt-2'
                                    css={subtitle}
                                >
                                    Identity and Access Management
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    All financial regulations have strict requirements specific to IAM. Access reviews
                                    at regular intervals are mandatory. Unused accounts must be properly deactivated.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Cyscale delivers a powerful Identity Dashboard to help you understand how effective
                                    your access controls are. Effectively monitor user permissions and privilege access
                                    for a robust cloud security posture. Onboard your Okta account for full visibility
                                    on cloud SSO users.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 my-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.graph.childImageSharp.gatsbyImageData}
                                    alt='Graph with alert and control details'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div
                className='pt-24 pb-24 lg:pt-32 lg:pb-32'
                css={css`
                    background: linear-gradient(0deg, #fff 7.02%, #e4edfc 100%), #e4edfc;
                `}
            >
                <Container>
                    <div>
                        <div className='grid grid-cols-12 gap-x-5'>
                            <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 lg:mt-8'>
                                <Link to='/case-studies/smart-fintech/'>
                                    <GatsbyImage
                                        image={data.smartFintech.childImageSharp.gatsbyImageData}
                                        className='max-w-xl'
                                        alt='Mobile Payment Smart Fintech'
                                    />
                                </Link>
                            </div>
                            <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl mt-8 lg:mt-0'>
                                <p className='font-montserrat text-base font-bold mt-4' css={sectionSubtitleColor}>
                                    CASE STUDY
                                </p>
                                <Link to='/case-studies/smart-fintech/'>
                                    <h2
                                        className='font-montserrat text-blue font-bold mt-2 hover:underline'
                                        css={titleSection}
                                    >
                                        Smart Fintech uses Cyscale to gain IAM visibility and ensure cloud security and
                                        compliance
                                    </h2>
                                </Link>
                                <p className='mt-3 text-base font-hind font-normal'>
                                    “The platform helps me with IAM visibility a lot: I can understand who has access
                                    and why. When a person leaves the company, I can detect if their permissions remain
                                    hanging.”
                                </p>
                                <div className='flex mt-3 px-2'>
                                    <GatsbyImage image={data.alex.childImageSharp.gatsbyImageData} alt={'Alex Cociu'} />
                                    <div className='ml-4 mt-1'>
                                        <p className='font-hind text-base font-bold'>Alex Cociu</p>
                                        <p className='font-hind text-base'>
                                            Risk and Compliance Officer at
                                            <br className='block md:hidden' /> Smart Fintech
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='md:pt-12 pb-32'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' loading='lazy' />
                        <h2 className='text-center px-2 mt-4 mb-2 font-montserrat font-bold text-lg lg:text-2xl'>
                            Simple and effective cloud security for fintech companies
                        </h2>
                        <div className='mt-10 w-auto inline-block'>
                            <Link
                                to='/request-demo/'
                                css={css`
                                    padding: 0.625rem 2.5rem;
                                `}
                                className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind cursor-pointer'
                            >
                                BOOK YOUR DEMO
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default CloudSecurityFintechUC;
