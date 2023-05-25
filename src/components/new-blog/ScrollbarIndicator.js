import React, { useEffect, useState } from 'react';
import { css } from 'twin.macro';

const progressBar = css`
    position: fixed;
    top: 0;
    left: 0;
    height: 0.25rem;
    background: linear-gradient(90deg, #0f26aa 11.63%, #ff4a56 95.75%);
    width: 0;
    z-index: 99;
`;

const ScrollIndicator = React.forwardRef((props, ref) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const calculateScrollDistance = () => {
        const elementTop = ref.current.getBoundingClientRect().top;
        const elementHeight = ref.current.clientHeight;
        const viewportHeight = window.innerHeight;

        let scrolled;
        if (elementTop > viewportHeight) {
            scrolled = 0;
        } else if (elementTop + elementHeight < 0) {
            scrolled = 100;
        } else {
            const elementScroll = elementTop < 0 ? -elementTop : 0;
            scrolled = (elementScroll / elementHeight) * 100;
        }
        setScrollProgress(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', calculateScrollDistance);

        return () => {
            window.removeEventListener('scroll', calculateScrollDistance);
        };
        //eslint-disable-next-line
    }, []);

    return (
        <div
            css={[
                progressBar,
                css`
                    width: ${scrollProgress}%;
                `
            ]}
        ></div>
    );
});

export default ScrollIndicator;
