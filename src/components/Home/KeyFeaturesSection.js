import React, { useEffect } from 'react';
import { Container } from '../atoms/Containers';
import { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const sectionSubtitleColor = css`
    color: #38aff1;
`;

const featureTitle = css`
    font-size: 1.35rem;
`;

const featureStyle = css`
    background-image: linear-gradient(#e4edfc, #fff);
    height: 32rem;
    @media screen and (min-width: 440px) and (max-width: 1023px) {
        height: 45rem !important;
    }
    @media screen and (min-width: 1024px) {
        height: 32rem;
    }
`;

const titleSection = css`
    font-size: 2rem;
`;

const KeyFeaturesSection = () => {
    const data = useStaticQuery(graphql`
        query KeyFeaturesSectionQuery {
            dashboard: file(relativePath: { eq: "dashboard-home.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            assetInventory: file(relativePath: { eq: "asset-inventory.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            cardIntegrations: file(relativePath: { eq: "card-integrations-home.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            cardMisconfiguration: file(relativePath: { eq: "card-misconfiguration-home.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            cardStandards: file(relativePath: { eq: "card-standards-home.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <Container className='my-16 lg:my-32'>
            <div className='grid grid-cols-12 gap-x-5'>
                <div className='col-span-12 lg:col-span-8 mx-auto lg:mx-0 max-w-2xl'>
                    <p className='uppercase font-montserrat font-bold' css={sectionSubtitleColor}>
                        CYSCALE KEY FEATURES
                    </p>
                    <h2 className='font-montserrat text-blue font-bold mt-3' css={titleSection}>
                        Protect your business with Cyscale
                    </h2>
                </div>
            </div>

            <div
                className='grid grid-cols-12 gap-x-5 mt-12'
                css={css`
                    overflow: hidden;
                `}
            >
                <div className='col-span-12 lg:col-span-6'>
                    <div
                        className='mt-6 lg:mt-0 rounded-xl pt-12 px-9 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative'
                        css={featureStyle}
                    >
                        <h3 className='font-montserrat font-bold' css={featureTitle}>
                            Complete Cloud Security Platform <br /> with Powerful Analytics & Dashboards
                        </h3>
                        <p className='font-hind text-base font-normal mt-4'>
                            Cloud security posture management with identity and data centric views.
                        </p>
                        <GatsbyImage
                            image={data.dashboard.childImageSharp.gatsbyImageData}
                            alt='Dashboard'
                            className='mt-4'
                        />
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-3'>
                    <div
                        className='mt-6 lg:mt-0 rounded-xl pt-12 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative mb-20 lg:mb-0'
                        css={featureStyle}
                    >
                        <h3 className='font-montserrat font-bold px-10' css={featureTitle}>
                            Cloud Asset <br />
                            Inventory
                        </h3>
                        <p className='font-hind text-base font-normal mt-4 px-10'>Unlimited protected assets.</p>
                        <GatsbyImage
                            image={data.assetInventory.childImageSharp.gatsbyImageData}
                            alt='Asset inventory'
                            className='mt-5 lg:px-10 lg:px-2'
                            css={css`
                                @media screen and (min-width: 440px) and (max-width: 1023px) {
                                    height: 44.5rem;
                                }
                                @media screen and (min-width: 1024px) and (max-width: 1060px) {
                                    height: 18rem;
                                }
                                @media screen and (min-width: 1061px) {
                                    height: 22.75rem;
                                }
                            `}
                        />
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-3 mt-12 lg:mt-0'>
                    <div
                        className='mt-6 lg:mt-0 rounded-xl pt-12 px-12 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative'
                        css={css`
                            background-image: linear-gradient(#e4edfc, #fff);
                            height: 34rem;
                            @media screen and (min-width: 380px) and (max-width: 440px) {
                                height: 40rem !important;
                            }
                            @media screen and (min-width: 441px) and (max-width: 525px) {
                                height: 44rem !important;
                            }
                            @media screen and (min-width: 526px) and (max-width: 1023px) {
                                height: 52rem !important;
                            }
                            @media screen and (min-width: 1024px) {
                                height: 32rem;
                            }
                        `}
                    >
                        <h3 className='font-montserrat font-bold' css={featureTitle}>
                            Integrations
                        </h3>
                        <p className='font-hind text-base font-normal mt-4'>
                            Amazon Web Services, Google Cloud, Microsoft Azure, Alibaba Cloud, Okta, Github and more...
                        </p>
                        <GatsbyImage
                            image={data.cardIntegrations.childImageSharp.gatsbyImageData}
                            alt='Integrations'
                            className='mt-8'
                        />
                    </div>
                </div>
            </div>
            <div
                className='grid grid-cols-12 gap-x-5 mt-24'
                css={css`
                    overflow: hidden;
                `}
            >
                <div className='col-span-12 lg:col-span-3'>
                    <div
                        className='mt-6 lg:mt-0 rounded-xl pt-8 pb-72 sm:pb-0 px-8 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-72 bg-black'
                        css={css`
                            @media screen and (min-width: 1023px) and (max-width: 1072px) {
                                padding-left: 1.2rem;
                                padding-right: 1.2rem;
                            }
                            @media screen and (min-width: 440px) and (max-width: 1023px) {
                                height: 24rem;
                            }
                        `}
                    >
                        <h3 className='font-montserrat font-bold text-white' css={featureTitle}>
                            Contextual misconfiguration analysis
                        </h3>
                        <GatsbyImage
                            image={data.cardMisconfiguration.childImageSharp.gatsbyImageData}
                            alt='Misconfiguration'
                            className='mt-2'
                        />
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-3'>
                    <div
                        className='mt-6 lg:mt-0 rounded-xl pt-8 px-8 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-40 lg:h-72'
                        css={css`
                            background-image: linear-gradient(to bottom, #e7474b, #ee3d53, #f3305b, #f92065, #fd0070);
                        `}
                    >
                        <h3 className='font-montserrat font-bold text-white' css={featureTitle}>
                            Alerts and remediation instructions
                        </h3>
                        <p className='text-base text-white mt-1 font-hind'>to detect cloud security drifts</p>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-6'>
                    <div
                        className='mt-6 lg:mt-0 rounded-xl pt-8 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative h-72'
                        css={css`
                            background-image: linear-gradient(to bottom, #4a85eb, #326fe3, #1b58d8, #073fcc, #0623be);
                        `}
                    >
                        <h3 className='font-montserrat font-bold text-white px-8' css={featureTitle}>
                            Built-in frameworks for ISO27001, <br /> PCI-DSS, SOC2, GDPR, and others
                        </h3>
                        <GatsbyImage
                            image={data.cardStandards.childImageSharp.gatsbyImageData}
                            alt='Standards'
                            className='mt-6'
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default KeyFeaturesSection;
