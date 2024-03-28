import { useState, useEffect } from 'react';

const useHSFormLoaded = () => {
    const [loadingForm, setLoadingForm] = useState(true);

    useEffect(() => {
        const hubspotHandler = (event) => {
            if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
                setLoadingForm(false);
            }
        };

        window.addEventListener('message', hubspotHandler);

        return () => {
            window.removeEventListener('message', hubspotHandler);
        };
    }, []);

    return { loadingForm };
};

export default useHSFormLoaded;
