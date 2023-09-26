import React from 'react';
import Layout from '../../components/layout/CleanLayout';
import { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql,  useStaticQuery } from 'gatsby';
import FurtherReading from '../../components/landing-pages/FurtherReading';

const BuyersGuide = ({ location }) => {
    const data = useStaticQuery(graphql`
        query BuyersGuide {
            cover: file(relativePath: { eq: "buyers-guide-cover.jpg" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='BuyersGuide'
            title='The Buyer’s Guide: Cloud Security Solutions for Startups'
            description={`The Buyer’s Guide: Cloud Security Solutions for Startups`}
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
                                The Buyer’s Guide:
                                <br /> Cloud Security Solutions for Startups
                            </h1>
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
                        Cloud security is a critical consideration, there’s no denying that. From your intellectual
                        property and software services you sell, to sensitive data on customers and users, any threat
                        can put your reputation on the line.
                    </p>
                    <p className='font-hind font-base mt-6'>
                        While public cloud resources are key enablers of business, they come with the adoption of a
                        shared responsibility model that makes it difficult to define your security perimeter. This
                        makes securing your apps and data in the cloud a complex and confusing process. But it doesn’t
                        have to be. Good cloud security is achievable for any business, regardless of size, and it
                        shouldn’t take all your time and resources to get it right.
                    </p>
                    <p className='font-hind font-base mt-6'>
                        This essential guide looks at the various offerings from cloud service providers,
                        enterprise-grade solutions, and so-called free tools to help you decide on which cloud security
                        solutions are the best fit for your business.
                    </p>
                    <div className='mt-4 mb-12'>
                        <div
                            className='hs-cta-embed hs-cta-simple-placeholder hs-cta-embed-136438852760'
                            style={{ maxWidth: '100%', maxHeight: '100%', width: '210px', height: '42.390625px' }}
                            data-hubspot-wrapper-cta-id='136438852760'
                        >
                            <a
                                href='https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKn3OMHIDYQAbR6KVxVtgMQ%2Fdc5%2FR3oUJO8MnIAdwgjdDHGk7lVmmWDgXVjh9T%2B7lmgJ2w4NS23c%2FVo8YATras7cWVg%2FFZdJbLC4K%2FpKkyiybxAKjlNzhgmtnLnKRIJr7H0pPvlIl%2FnJAe%2Fy6nQ4sbXhQpFWF7x6iFyRTBBwskmIfHpbIs3ewMa1Ykm1JESBTGveP%2FHUGNSdioTHao9QsJKnoH0hDmyPWmxN%2B%2BMAo%2F%2Bq4tSBe60QxX7nkzLQXAwDEIA7ywwXwkssrDqI574lVtSulag%2B2dlX9kjHoY%3D&webInteractiveContentId=136438852760&portalId=5413427'
                                target='_blank'
                                rel='noopener noreferrer'
                                crossOrigin='anonymous'
                            >
                                <img
                                    alt='Download'
                                    loading='lazy'
                                    src='https://no-cache.hubspot.com/cta/default/5413427/interactive-136438852760.png'
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

export default BuyersGuide;
