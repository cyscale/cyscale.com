import { useTrackingCode } from 'react-hubspot-tracking-code-hook';

export default function useHubspotEvents({ location, pageName }) {
    const { setPathPageView, setIdentity, setContentType } = useTrackingCode();

    const userEmail = localStorage.getItem('user-email');
    if (userEmail) {
        setIdentity(userEmail);
    }

    const contentType = pageName === 'blog-detail' ? 'blog-post' : 'standard-page';
    setContentType(contentType);
    setPathPageView(location.pathname);
}
