import React from 'react';

const GradientButton = ({text}) => {
    return (
        <button className='bg-gradient-to-r mx-auto md:mx-0 from-blue to-red block font-medium rounded text-white uppercase text-center py-4 px-8 mt-8 no-underline hover:no-underline max-w-sm lg:inline-block'>
            {text}
        </button>
    );
};

export default GradientButton;
