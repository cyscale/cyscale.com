import React from 'react';
import tw from 'twin.macro';
import { css } from 'twin.macro';

const GradientButton = ({ text, alignLeft }) => {
    return (
        <button
            css={[
                !alignLeft && tw`mx-auto`,
                css`
                    padding: 0.625rem 2.5rem;
                `
            ]}
            className='bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind'
        >
            {text}
        </button>
    );
};

export default GradientButton;
