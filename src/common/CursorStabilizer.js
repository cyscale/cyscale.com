import { useEffect } from 'react';

const CursorStabilizer = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
          div[data-slate-editor] {
            -webkit-user-modify: read-write !important;
          }
    `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return null;
};

export default CursorStabilizer;
