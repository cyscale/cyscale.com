import { useEffect } from 'react';
import { useTrackingCode } from 'react-hubspot-tracking-code-hook';

export default function useHubspotEvents({ location, pageName }) {
    const { setPathPageView, setIdentity, setContentType } = useTrackingCode();

    useEffect(() => {
        const userEmail = localStorage.getItem('user-email');
        if (userEmail) {
            setIdentity(userEmail);
        }

        if (location.pathname) {
            const contentType = pageName === 'blog-detail' ? 'blog-post' : 'standard-page';
            setContentType(contentType);
            setPathPageView(location.pathname);
        }
    }, [setPathPageView, setIdentity, setContentType, pageName, location]);
}
