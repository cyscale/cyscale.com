import React, { useState, useEffect, useRef } from 'react';
import rightArrow from '../../assets/images/right-arrow-cspm.svg';
import leftArrow from '../../assets/images/left-arrow-cspm.svg';
import { css } from 'twin.macro';

const hoverEffect = css`
    &:hover {
        transform: scale(1.2);
    }
`;

const Carousel = ({ children: slides, autoSlide = true, autoSlideInterval = 2500, setAutoSlide }) => {
    const [curr, setCurr] = useState(0);
    const swipeRef = useRef();
    const touchStart = useRef(0);
    const touchEnd = useRef(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    //eslint-disable-next-line
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    const handleTouchStart = (e) => {
        touchStart.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEnd.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStart.current - touchEnd.current > 75) {
            next();
        }

        if (touchStart.current - touchEnd.current < -75) {
            prev();
        }
    };

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
        //eslint-disable-next-line
    }, [autoSlide, autoSlideInterval, next]);

    return (
        <div
            className='overflow-hidden relative pb-10'
            css={css`
                width: 100%;
            `}
            ref={swipeRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
                <button onClick={prev} onMouseEnter={() => setAutoSlide(false)} onMouseLeave={() => setAutoSlide(true)}>
                    <img src={leftArrow} alt='' css={hoverEffect} />
                </button>
                <button
                    onClick={next}
                    className='ml-2'
                    onMouseEnter={() => setAutoSlide(false)}
                    onMouseLeave={() => setAutoSlide(true)}
                >
                    <img src={rightArrow} alt='' css={hoverEffect} />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
