import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const useSetCookieBanner = () => {
    const [cookiesBanner, setCookiesBanner] = useState(false);
    const [cookies] = useCookies();

    useEffect(() => {
        setCookiesBanner(true);
    }, []);

    return { cookies, cookiesBanner, setCookiesBanner };
};

export default useSetCookieBanner;
