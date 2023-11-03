import React from 'react';
import { css } from 'twin.macro';
import checkMarkIcon from '../../assets/images/check-mark-icon-blue.svg';

const ServiceHighlight = ({ children, cssCheckMark }) => {
    return (
        <p
            className='bg-white py-2 px-4 rounded font-medium font-montserrat flex mt-4 mx-auto lg:mx-0'
            css={css`
                width: fit-content;
                color: #0f26aa;
            `}
        >
            <img src={checkMarkIcon} css={cssCheckMark} alt='' />
            <span className='text-md ml-2'>{children}</span>
        </p>
    );
};

export default ServiceHighlight;
