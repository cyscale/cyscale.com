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
                    const isRequestDemo = slide.text === 'RequestDemo';
                    const linkClasses = `w-72 m-2 block ${isRequestDemo ? 'relative' : ''}`;
                    const textClasses = `font-hind text-base ${
                        isRequestDemo ? 'text-blue text-center w-72' : 'group-hover:underline mt-2'
                    }`;
                    const textCss = isRequestDemo
                        ? css`
                              position: absolute;
                              top: 50%;
                              left: 50%;
                              transform: translate(-50%, -50%);
                          `
                        : null;

                    return (
                        <div className='py-4' key={index}>
                            <Link to={slide.link} className={linkClasses}>
                                <GatsbyImage image={slide.image} alt={slide.alt} className='rounded-md' />
                                <p className={textClasses} css={textCss}>
                                    {isRequestDemo ? slide.cardText : slide.text}
                                </p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CaseStudiesCarousel;
