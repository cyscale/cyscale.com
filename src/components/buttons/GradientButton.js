import React from 'react';
import tw from 'twin.macro';

const GradientButton = ({ text, alignLeft }) => {
    return (
        <button
            css={[!alignLeft && tw`mx-auto`]}
            className='bg-gradient-to-r md:mx-0 from-blue to-red hover:from-red hover:to-blue block font-medium rounded text-white uppercase text-center py-4 px-8 no-underline hover:no-underline max-w-sm lg:inline-block'
        >
            {text}
        </button>
    );
};

export default GradientButton;
