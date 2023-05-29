import React, { useState, useEffect } from 'react';
import { css } from 'twin.macro';
import { keyframes } from '@emotion/react';

const blink = keyframes`
  from, to { opacity: 1 }
  50% { opacity: 0 }
`;

const cursor = css`
    animation: ${blink} 0.9s step-end infinite;
    margin-left: 2px;
`;

const Typewriter = ({ text = '', speed = 100, delay = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        let intervalId = null;

        const type = () => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                index++;
            } else {
                clearInterval(intervalId);
                setTimeout(() => {
                    setDisplayedText('');
                    index = 0;
                    intervalId = setInterval(type, speed);
                }, delay);
            }
        };

        intervalId = setInterval(type, speed);

        return () => clearInterval(intervalId);
    }, [text, speed, delay]);

    return (
        <span>
            {displayedText}
            <span css={cursor}>|</span>
        </span>
    );
};

export default Typewriter;
