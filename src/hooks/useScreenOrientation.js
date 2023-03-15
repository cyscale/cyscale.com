import { useState, useEffect } from 'react';
import { getOrientation, isIPhone, isSafari } from '../common/utils';

const isBrowser = () => typeof window !== 'undefined';

const useScreenOrientation = () => {
    const [orientation, setOrientation] = useState(
        isSafari || isIPhone() ? getOrientation() : (isBrowser() && window.screen.orientation.type) || null
    );

    useEffect(() => {
        const handleOrientationChange = () =>
            setOrientation(isSafari || isIPhone() ? getOrientation() : window.screen.orientation.type);

        window.addEventListener('orientationchange', handleOrientationChange);
        return () => window.removeEventListener('orientationchange', handleOrientationChange);
    }, []);

    return orientation;
};

export default useScreenOrientation;
