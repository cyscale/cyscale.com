import { useEffect } from 'react';

function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            if (Object.keys(ref.current || {}).length === Object.keys(event.target || {}).length || ref === null) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, []);
}

export default useOnClickOutside;
