import { useLayoutEffect } from 'react';

const useLockBodyScroll = () => {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body);

        document.body.style.position = 'fixed';
        document.body.style.overflowY = 'scroll';
        document.body.style.width = '100%';

        return () => (document.body.style = originalStyle);
    }, []);
};

export default useLockBodyScroll;
