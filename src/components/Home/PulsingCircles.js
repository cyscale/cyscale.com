import React, { useState, useEffect } from 'react';
import tw, { css } from 'twin.macro';
import Tooltip from './Tooltip';
import { debounce } from 'lodash';

const Circle = tw.div`rounded-full absolute`;

const PulsingCircles = ({ tooltipText, position, wrapperStyle, useDebounce = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    const debouncedSetIsHovered = debounce(setIsHovered, 150);

    const handleHoverChange = (hoverState) => {
        if (useDebounce) {
            debouncedSetIsHovered(hoverState);
        } else {
            setIsHovered(hoverState);
        }
    };

    useEffect(() => {
        return () => {
            debouncedSetIsHovered.cancel();
        };
    }, [debouncedSetIsHovered]);

    return (
        <div
            css={wrapperStyle}
            onMouseEnter={() => handleHoverChange(true)}
            onMouseLeave={() => handleHoverChange(false)}
        >
            <div className='relative flex items-center justify-center w-6 h-6'>
                <Circle
                    css={[
                        tw`w-5 h-5 hover:w-6 hover:h-6 bg-blue cursor-pointer`,
                        css`
                            z-index: 100;
                        `
                    ]}
                />
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
        </div>
    );
};

export default React.memo(PulsingCircles);
