import { useState, useEffect, useCallback } from 'react';

const useHSFormLoaded = () => {
    const [loadingForm, setLoadingForm] = useState(true);

    const hubspotHandler = useCallback(
        (event) => {
            if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
                setLoadingForm(!loadingForm);
            }
        },
        [loadingForm]
    );

    useEffect(() => {
        window.addEventListener('message', hubspotHandler);

        return () => {
            window.removeEventListener('message', hubspotHandler);
        };
    }, [hubspotHandler]);

    return { loadingForm };
};

export default useHSFormLoaded;
