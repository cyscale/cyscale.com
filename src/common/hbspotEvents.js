import { useEffect } from 'react';
import { useTrackingCode } from 'react-hubspot-tracking-code-hook';

export default function useHubspotEvents({ location, pageName }) {
    const { setPathPageView, setIdentity, setContentType } = useTrackingCode();

    useEffect(() => {
        const userEmail = localStorage.getItem('user-email');
        const contentType = pageName === 'blog-detail' ? 'blog-post' : 'standard-page';
        if (userEmail && location.pathname) {
            setIdentity(userEmail);
            setContentType(contentType);
            setPathPageView(location.pathname);
        }
    }, [setPathPageView, setIdentity, setContentType, pageName, location]);
}
