import { useCallback, useEffect } from 'react';

const useKeyPress = (targetKey, ref, fn) => {
    const downHandler = useCallback(
        ({ key }) => {
            if (key === 'Escape' && key === targetKey) {
                ref.current.pause();
                fn(false);
            }
        },
        [targetKey, ref, fn]
    );

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, [downHandler]);
};

export default useKeyPress;
