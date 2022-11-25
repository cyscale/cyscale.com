import { useEffect } from 'react';

const useLoadHSMeetingsScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
        script.type = 'text/javascript';
        document.body.appendChild(script);

        return () => document.body.removeChild(script);
    }, []);
};

export default useLoadHSMeetingsScript;
