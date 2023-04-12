import React from 'react';
import { css } from 'twin.macro';

const buttonStyle = css`
    padding-top: 0.938rem;
    padding-bottom: 0.938rem;
    display: none;

    @media (min-width: 641px) {
        display: inline-block;
    }
`;

const LightDarkButton = ({ text }) => {
    return (
        <button
            className='blackBorder mx-auto md:mx-0 font-medium rounded text-black uppercase text-center px-8 no-underline transition-all duration-300 hover:border-black hover:bg-black hover:text-white blackBorder hover:no-underline font-hind'
            css={buttonStyle}
        >
            {text}
        </button>
    );
};

export default LightDarkButton;
