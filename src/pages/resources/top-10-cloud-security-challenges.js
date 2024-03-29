import React from 'react';
import Layout from '../../components/layout/CleanLayout';
import { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import FurtherReading from '../../components/landing-pages/FurtherReading';

const TopTenCloudSecurityChallenges = ({ location }) => {
    const data = useStaticQuery(graphql`
        query TopChallenges {
            cover: file(relativePath: { eq: "top-ten-cloud-security-challenges-cover.jpg" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='TopChallenges'
            title='Top 10 Cloud Security Challenges for SaaS Startups'
            description={`Top 10 Cloud Security Challenges for SaaS Startups`}
            noIndex={true}
        >
            <div className='container max-w-7xl pt-28 sm:pt-32 mx-auto xl:flex xl:pl-12 xl:pr-16'>
                <div className='max-w-4xl mx-auto xl:mx-0 px-8'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 lg:col-span-6'>
                            <h1
                                className='font-montserrat font-bold mt-2 text-left'
                                css={css`
                                    font-size: 1.5rem;
                                    @media screen and (min-width: 1024px) {
                                        font-size: 1.75rem;
                                    }
                                `}
                            >
                                Top 10 Cloud Security <br />
                                Challenges for SaaS Startups
                            </h1>
                            <p className='text-base font-hind mt-2'>
                                Threats, Vulnerabilities, and Solutions for Startups in 2023
                            </p>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <GatsbyImage
                                image={data.cover.childImageSharp.gatsbyImageData}
                                alt='Cover'
                                className='rounded-md'
                            />
                        </div>
                    </div>
                    <p className='font-hind font-base mt-6'>
                        2023 marks a critical year for cloud security following a global shift towards remote work,
                        digital transformation, and increasingly complex cloud environments.
                    </p>
                    <p className='font-hind font-base mt-6'>
                        With tens of thousands of new SaaS builders exploding across every industry, protecting
                        sensitive data and ensuring compliance has become paramount for professionals like CTOs,
                        Solutions Architects, CISOs, Cloud Security Researchers, DevOps Engineers, and others in the
                        technology space tasked with ensuring transformative technologies remain secure.
                    </p>
                    <p className='font-hind font-base mt-6'>
                        In this comprehensive guide, we will explore the top 10 cloud security challenges faced by cloud
                        native organizations and present a roadmap for creating a robust cloud security strategy, with
                        real-life examples, actionable solutions, and insights to aid your journey towards a secure
                        cloud.
                    </p>
                    <div className='mt-4 mb-12'>
                        <div
                            className='hs-cta-embed hs-cta-simple-placeholder hs-cta-embed-136440984941'
                            style={{ maxWidth: '100%', maxHeight: '100%', width: '210px', height: '42.390625px' }}
                            data-hubspot-wrapper-cta-id='136440984941'
                        >
                            <a
                                href='https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLIFK%2BIOAUnq4yw8SvESJidT1Pwq3c55dwLgsr%2FkscDM7UOQEJlPWKB8wafdmed1eBQGxg50DEmnaUVNFTMDp2UOkXlscD791sZ8323oTxUiWgXqsCZQg8FJn%2Fm3Jl0qfVF0%2BQPMckCPYj5B1lJ7WOnoFD7DqnN4I%2BiKA9bDPqXV91p5%2B8QhwC2%2FjYTlL5OZ4bVk0kyoiGzsCHbjdhMn4rDdqYw2EovncX0syID1XbArMCaDGq5r%2Bk28qXsaW6Qs6nKos2mSKqMxnt248fK%2FP8vr2lo%3D&webInteractiveContentId=136440984941&portalId=5413427'
                                target='_blank'
                                rel='noopener noreferrer'
                                crossOrigin='anonymous'
                            >
                                <img
                                    alt='Download'
                                    loading='lazy'
                                    src='https://no-cache.hubspot.com/cta/default/5413427/interactive-136440984941.png'
                                    style={{ height: '100%', width: '100%', objectFit: 'fill' }}
                                    onError={() => (this.style.display = 'none')}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <FurtherReading />
            </div>
        </Layout>
    );
};

export default TopTenCloudSecurityChallenges;
