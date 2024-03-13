import React from 'react';
import { css } from 'twin.macro';

const Tooltip = ({ tooltipText, isVisible, position = 'left' }) => {
    return (
        <span
            css={css`
                display: ${isVisible ? 'block' : 'none'};
                width: 12.5rem;
                border-radius: 0.375rem;
                padding: 0.313rem;
                position: absolute;
                top: 100%;
                ${position === 'left' ? 'left: 50%;' : 'right: 400%;'}
                transform: ${position === 'left' ? 'translateX(-50%)' : 'translateX(50%)'};
                opacity: ${isVisible ? 1 : 0};
                transition: opacity 0.5s linear;
                z-index: 101;
            `}
            className='text-sm text-white bg-black font-hind'
        >
            {tooltipText}
        </span>
    );
};

export default Tooltip;
