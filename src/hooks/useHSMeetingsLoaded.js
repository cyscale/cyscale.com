import { useState, useEffect, useCallback } from 'react';

const useHSMeetingsLoaded = () => {
    const [loadingMeetings, setLoadingMeetings] = useState(true);

    const hubspotHandler = useCallback(
        (event) => {
            if (event.data === 'readyForConsentListener') {
                setLoadingMeetings(!loadingMeetings);
            }
        },
        [loadingMeetings]
    );

    useEffect(() => {
        window.addEventListener('message', hubspotHandler);

        return () => {
            window.removeEventListener('message', hubspotHandler);
        };
    }, [hubspotHandler]);

    return { loadingMeetings };
};

export default useHSMeetingsLoaded;
