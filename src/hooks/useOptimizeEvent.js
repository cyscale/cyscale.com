import * as React from 'react';

// https://medium.com/@pisanocaroline/optimizing-google-optimize-in-gatsby-js-e67d0a59bfa1
export default function useOptimizeEvent() {
    React.useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'optimize.activate' });
    }, []);
}
