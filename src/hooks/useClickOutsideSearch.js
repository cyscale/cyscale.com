import { useEffect } from 'react';

const useClickOutsideSearch = (ref, state, setState) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setState(false);
            }
        };

        if (state) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        //eslint-disable-next-line
    }, [state, setState]);
};

export { useClickOutsideSearch };
