import React, { useState } from 'react';
import tw, { css } from 'twin.macro';
import Tooltip from './Tooltip';

const Circle = tw.div`rounded-full absolute`;

const PulsingCircles = ({ tooltipText, position }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='relative group flex items-center justify-center w-6 h-6 cursor-pointer'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Circle tw='w-5 h-5 group-hover:w-6 group-hover:h-6 bg-blue z-10' />
            {[...Array(3)].map((_, index) => (
                <Circle
                    key={index}
                    css={[
                        tw`ring-2 w-7 h-7 animate-pulse`,
                        css`
                            animation: pulse ${(index + 1) * 2}s infinite ease-in-out;
                            border-color: rgba(173, 216, 230, ${(3 - index) * 0.3});
                            animation-delay: ${index * 0.5}s;
                        `
                    ]}
                />
            ))}
            <Tooltip tooltipText={tooltipText} isVisible={isHovered} position={position} />
        </div>
    );
};

export default PulsingCircles;
