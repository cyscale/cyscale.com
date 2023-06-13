import { useState, useEffect, useRef } from 'react';

const useStickyElement = () => {
    const [isTop, setIsTop] = useState(true);
    const parentRef = useRef(null);
    const stickyRef = useRef(null);

    useEffect(() => {
        const scrollListener = () => {
            if (parentRef.current && stickyRef.current) {
                const parentRect = parentRef.current.getBoundingClientRect();
                const stickyRect = stickyRef.current.getBoundingClientRect();
                setIsTop(stickyRect.top <= parentRect.top);
            }
        };

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);

    return { isTop, parentRef, stickyRef };
};

export default useStickyElement;
