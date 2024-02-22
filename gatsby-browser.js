import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'react-tabs/style/react-tabs.css';
import 'slick-carousel/slick/slick-theme.css';
import './src/styles/global.css';
import TopBar from './src/components/layout/TopBar';

const onRouteUpdate = ({ location }) => {
    const _hsq = (window._hsq = window._hsq || []);

    const trackPageView = () => {
        const path = location ? `${location.pathname}${location.search}${location.hash}` : undefined;
        _hsq.push(['setPath', path]);
        _hsq.push(['trackPageView']);
    };

    setTimeout(trackPageView, 32);

    return null;
};

const wrapPageElement = ({ element }) => {
    return (
        <>
            <TopBar />
            {element}
        </>
    );
};

export { onRouteUpdate, wrapPageElement };
