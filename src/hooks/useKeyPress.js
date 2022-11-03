import { useEffect } from 'react';

const useKeyPress = (targetKey, ref, fn) => {
    function downHandler({ key }) {
        if (key === 'Escape' && key === targetKey) {
            ref.current.pause();
            fn(false);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, []);
};

export default useKeyPress;
