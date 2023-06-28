import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';

const CaseStudiesCarousel = ({ slides }) => {
    return (
        <div
            className='absolute mt-4 lg:mt-0 z-10'
            css={css`
                max-width: calc(100% + 0.9rem);
            `}
        >
            <div className='flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10'>
                {slides.map((slide, index) => {
                    return (
                        <div className='py-4' key={index}>
                            {slide.text !== 'RequestDemo' ? (
                                <Link to={slide.link} className='w-72 m-2 block'>
                                    <GatsbyImage image={slide.image} alt={slide.alt} className='rounded-md' />
                                    <p className='mt-2 font-hind text-base group-hover:underline'>{slide.text}</p>
                                </Link>
                            ) : (
                                <Link to={slide.link} className='w-72 m-2 block relative'>
                                    <GatsbyImage image={slide.image} alt={slide.alt} className='rounded-md' />
                                    <p
                                        className='font-hind text-base text-blue text-center w-72'
                                        css={css`
                                            position: absolute;
                                            top: 50%;
                                            left: 50%;
                                            transform: translate(-50%, -50%);
                                        `}
                                    >
                                        {slide.cardText}
                                    </p>
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CaseStudiesCarousel;
