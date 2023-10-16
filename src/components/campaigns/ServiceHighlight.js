import React from 'react';
import { css } from 'twin.macro';
import RightArrow from '../sharedComponent/RightArrow';

const ServiceHighlight = ({ children }) => {
    return (
        <p
            className='bg-white py-2 px-4 rounded font-medium font-montserrat flex mt-4 mx-auto lg:mx-0'
            css={css`
                width: fit-content;
                color: #0f26aa;
            `}
        >
            <RightArrow fillColor={'#0F26AA'} marginTop='0.2rem' />
            <span className='text-md ml-2'>{children}</span>
        </p>
    );
};

export default ServiceHighlight;
