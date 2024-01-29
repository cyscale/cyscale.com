import { useState, useEffect } from 'react';

const useHSFormLoaded = () => {
    const [loadingForm, setLoadingForm] = useState(true);

    const hubspotHandler = (event) => {
        if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
            setLoadingForm(false);
        }
    };

    useEffect(() => {
        window.addEventListener('message', hubspotHandler);

        return () => {
            window.removeEventListener('message', hubspotHandler);
        };
    }, [hubspotHandler]);

    return { loadingForm };
};

export default useHSFormLoaded;
