import React, { useState, useEffect } from 'react';
import rightArrow from '../../assets/images/right-arrow-cspm.svg';
import leftArrow from '../../assets/images/left-arrow-cspm.svg';
import { css } from 'twin.macro';

const Carousel = ({ children: slides, autoSlide = true, autoSlideInterval = 2500 }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    //eslint-disable-next-line
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, next]);

    return (
        <div
            className='overflow-hidden relative pb-10'
            css={css`
                width: 100%;
            `}
        >
            <div
                className='flex transition-transform ease-out duration-500'
                css={css`
                    transform: translateX(-${curr * (100 / slides.length)}%);
                    width: ${slides.length * 100}%;
                `}
            >
                {slides.map((slide, index) => (
                    <div key={index} style={{ width: `${100 / slides.length}%` }}>
                        {slide}
                    </div>
                ))}
            </div>
            <div className='absolute -bottom-2 right-0'>
                <button onClick={prev} className=''>
                    <img src={leftArrow} alt='' />
                </button>
                <button onClick={next} className='ml-2'>
                    <img src={rightArrow} alt='' />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
