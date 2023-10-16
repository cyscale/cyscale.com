import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { css } from 'twin.macro';
import ScrollDownIcon from '../../assets/images/scroll-down-icon.svg';

const ScrollDown = () => {
    return (
        <div className='pt-8 hidden sm:block'>
            <p className='text-center font-montserrat text-base cursor-pointer'>
                <ScrollLink to={'start'} smooth={true} duration={500}>
                    Scroll down
                </ScrollLink>
            </p>
            <ScrollLink
                className='cursor-pointer'
                to={'start'}
                smooth={true}
                duration={500}
                css={css`
                    width: 50px;
                    height: 50px;
                    display: block;
                    margin: auto;
                `}
            >
                <span>
                    <img src={ScrollDownIcon} alt='down arrow icon' className='mx-auto mt-2' height={20} width={20} />
                </span>
            </ScrollLink>
        </div>
    );
};

export default ScrollDown;
