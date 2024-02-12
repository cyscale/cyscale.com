import React from 'react';
import { css } from 'twin.macro';
import checkMarkIcon from '../../assets/images/check-mark.svg';

const ServiceHighlight = ({ children }) => {
    return (
        <p
            className='py-2 rounded font-medium font-montserrat flex items-start mt-4 mx-auto lg:mx-0'
            css={css`
                width: fit-content;
            `}
        >
            <img src={checkMarkIcon} alt='' className='mt-0.5' />
            <span className='text-md ml-2'>{children}</span>
        </p>
    );
};

export default ServiceHighlight;
