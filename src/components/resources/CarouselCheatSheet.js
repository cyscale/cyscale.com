import React from 'react';
import { css } from 'twin.macro';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ArrowRight from '../../assets/images/arrow-right-white.svg';

const CarouselCheatSheet = () => {
    const data = useStaticQuery(graphql`
        query carouselCheatSheetQuery {
            awsCheatSheet: file(relativePath: { eq: "aws-cheat-sheet.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            azureCheatSheet: file(relativePath: { eq: "azure-cheat-sheet.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            googleCheatSheet: file(relativePath: { eq: "google-cloud-cheat-sheet.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
        }
    `);
    const slides = [
        {
            image: data.awsCheatSheet.childImageSharp.gatsbyImageData,
            alt: 'AWS Cloud Security Cheat Sheet',
            text: (
                <>
                    AWS Cloud Security
                    <br /> Cheat Sheet
                </>
            ),
            link: '/resources/aws-cloud-security-cheat-sheet.pdf'
        },
        {
            image: data.azureCheatSheet.childImageSharp.gatsbyImageData,
            alt: 'Azure Cloud Security Cheat Sheet',
            text: (
                <>
                    Azure Cloud Security
                    <br /> Cheat Sheet
                </>
            ),
            link: '/resources/azure-cloud-security-cheat-sheet.pdf'
        },
        {
            image: data.googleCheatSheet.childImageSharp.gatsbyImageData,
            alt: 'Google Cloud Security Cheat Sheet',
            text: (
                <>
                    Google Cloud Security
                    <br /> Cheat Sheet
                </>
            ),
            link: '/resources/google-cloud-security-cheat-sheet.pdf'
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
                        return (
                            <div className='py-4' key={index}>
                                <Link to={slide.link} className='w-48 m-2 block'>
                                    <GatsbyImage image={slide.image} alt={slide.alt} className='rounded' />
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
                    })}
                </div>
            </div>
        </>
    );
};

export default CarouselCheatSheet;
