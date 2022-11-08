import { useState, useEffect } from 'react';

const isBrowser = () => typeof window !== 'undefined';

const useScreenOrientation = () => {
    const [orientation, setOrientation] = useState((isBrowser() && window.screen.orientation.type) || null);

    useEffect(() => {
        const handleOrientationChange = () => setOrientation(window.screen.orientation.type);

        window.addEventListener('orientationchange', handleOrientationChange);
        return () => window.removeEventListener('orientationchange', handleOrientationChange);
    }, []);

    return orientation;
};

export default useScreenOrientation;
