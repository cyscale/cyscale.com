import { useCallback, useEffect } from 'react';

const useKeyPressStorylane = (targetKey, ref, fn) => {
    const downHandler = useCallback(
        ({ key }) => {
            if (key === 'Escape' && key === targetKey) {
                fn(false);
            }
        },
        [targetKey, fn]
    );

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, [downHandler]);
};

export default useKeyPressStorylane;
