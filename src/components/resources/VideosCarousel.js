import React from 'react';
import VideoCyscale from '../campaigns/cspm-solutin/CyscaleVideo';
import PlayButton from './PlayButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';
import { CSSTransition } from 'react-transition-group';

const cardBorder = css`
    border: 1px solid #f0f1f2;
`;

const VideosCarousel = ({ slides }) => {
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
                            <div
                                onClick={() => {
                                    slide.setModal(!slides.modal);
                                }}
                                onKeyPress={() => {}}
                                tabIndex='0'
                                role='button'
                                className='hover:underline w-72'
                            >
                                {' '}
                                <GatsbyImage
                                    image={slide.image}
                                    alt={slide.alt}
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>{slide.text}</p>
                            </div>
                            {slide.modal && <div className='modal-overlay'></div>}
                            <CSSTransition in={slide.modal} timeout={300} classNames='video' unmountOnExit>
                                <VideoCyscale setModal={slide.setModal} videoUrl={slide.videoUrl} />
                            </CSSTransition>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default VideosCarousel;
