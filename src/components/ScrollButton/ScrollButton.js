import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import downDoubleArrow from '../../assets/images/banner-arrow-down.svg';
import { css } from 'twin.macro';

export default function ScrollButton({ to, pageName, btnText }) {
    return (
        <>
            {!!pageName && pageName === 'jobDetails' ? (
                <ScrollLink className='mt-24px w-full sm:w-auto' to={to} smooth={true} duration={500}>
                    <button
                        type='button'
                        css={css`
                            padding: 0.625rem 2.5rem;
                        `}
                        className='gradientBgBtn w-full sm:min-w-232px block text-16px font-medium rounded text-white uppercase text-center hover:no-underline no-underline'
                    >
                        {btnText}
                    </button>
                </ScrollLink>
            ) : (
                <ScrollLink className='scroll-button pulse cursor-pointer' to={to} smooth={true} duration={500}>
                    <span>
                        <img src={downDoubleArrow} alt='down arrow icon' className='mx-auto' />
                    </span>
                </ScrollLink>
            )}
        </>
    );
}
