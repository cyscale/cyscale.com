import React from 'react';
import { css } from 'twin.macro';

const buttonStyle = css`
    padding: 0.625rem 2.5rem;
    display: none;
    border: thin solid #ffffff;

    &:hover {
        background-color: #e5edfa;
        border: thin solid #0f26aa;
    }

    @media (min-width: 641px) {
        display: inline-block;
    }
`;

const LightDarkButton = ({ text }) => {
    return (
        <button
            className='bg-white mx-auto md:mx-0 font-medium rounded text-blue uppercase text-center no-underline transition-all duration-100 hover:no-underline font-hind'
            css={buttonStyle}
        >
            {text}
        </button>
    );
};

export default LightDarkButton;
