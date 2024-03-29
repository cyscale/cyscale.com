import React from 'react';
import { css } from 'twin.macro';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ArrowRight from '../../assets/images/arrow-right-white.svg';

const Carousel = () => {
    const data = useStaticQuery(graphql`
        query carouselQuery {
            csm: file(relativePath: { eq: "csm-resources.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            cc: file(relativePath: { eq: "cc-resources.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            ebook: file(relativePath: { eq: "ebook-resources.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
        }
    `);
    const slides = [
        {
            image: data.csm.childImageSharp.gatsbyImageData,
            alt: 'Cloud Storage Misconfigurations',
            text: 'Cloud Storage Misconfigurations',
            link: '/whitepaper/cloud-storage-misconfigurations/'
        },
        {
            image: data.cc.childImageSharp.gatsbyImageData,
            alt: 'Cloud Compliance in 2023 An In-depth Guide',
            text: 'Cloud Compliance in 2023 An In-depth Guide',
            link: '/whitepaper/the-complete-guide-to-cloud-compliance/'
        },
        {
            image: data.ebook.childImageSharp.gatsbyImageData,
            alt: 'Data Security in the Cloud A Comprehensive Guide',
            text: 'Data Security in the Cloud A Comprehensive Guide',
            link: 'https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKcdzdjs3ubIU5XI1ozY9QJ9YF2yD%2BsoZJAk2vNcR0qYhDoYVmmHNu5VA5Avb9E7Sr%2BRbNjqakYxt0DJ%2B1qbaeIfqdLwOEW0Tl%2FYSlNPTCQfjQ%3D&webInteractiveContentId=127064433808&portalId=5413427'
        }
    ];

    return (
        <>
            <div
                className='absolute mt-4 lg:mt-0 z-10'
                css={css`
                    max-width: calc(100% - 0.25rem);
                `}
            >
                <div className='flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10'>
                    {slides.map((slide, index) => {
                        if (slide.text === 'Data Security in the Cloud A Comprehensive Guide') {
                            return (
                                <div className='py-4' key={index}>
                                    <a href={slide.link} className='w-48 m-2 block'>
                                        <GatsbyImage image={slide.image} alt={slide.alt} />
                                        <p className='mt-2 text-white font-hind text-base group-hover:underline'>
                                            {slide.text}
                                        </p>
                                        <div className='flex mt-1'>
                                            <img src={ArrowRight} alt='' width={15} />
                                            <p className='font-montserrat text-xs text-white font-bold ml-2 group-hover:underline'>
                                                Download
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            );
                        } else {
                            return (
                                <div className='py-4' key={index}>
                                    <Link to={slide.link} className='w-48 m-2 block'>
                                        <GatsbyImage image={slide.image} alt={slide.alt} />
                                        <p className='mt-2 text-white font-hind text-base group-hover:underline'>
                                            {slide.text}
                                        </p>
                                        <div className='flex mt-1'>
                                            <img src={ArrowRight} alt='' width={15} />
                                            <p className='font-montserrat text-xs text-white font-bold ml-2 group-hover:underline'>
                                                Download
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
};

export default Carousel;
