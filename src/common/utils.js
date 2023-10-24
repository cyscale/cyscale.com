import React from 'react';

export const formatDate = (date) => new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date(date));

export const isAnimatedNavbarPage = (pathname) => {
    return (
        pathname.includes('campaigns') ||
        pathname.includes('playground') ||
        pathname.includes('free-trial')
    );
};

export const isPlaygroundBlogPage = (pathname) => pathname.includes('/blog/playground-announcement');

export const requestDemoButtonPage = (pageName) => {
    return ['HomePage', 'CSPMPage', 'SKGPage', 'ComplianceAuditing'].includes(pageName);
};

export const hasZirconBgColordHero = (pageName) => {
    return ['MisconfigurationsCampaign', 'IAMCampaign', 'FintechCampaign'].includes(pageName);
};

const orientationMap = {
    90: 'landscape-primary',
    '-90': 'landscape-secondary',
    0: 'portrait-primary',
    180: 'portrait-secondary'
};

const getMql = () => {
    if (typeof window.matchMedia != 'function') {
        return {};
    }
    return window.matchMedia('(orientation: landscape)');
};

export const getOrientation = () =>
    window.screen.msOrientation ||
    window.screen.mozOrientation ||
    orientationMap[window.orientation + ''] ||
    (getMql().matches ? 'landscape-primary' : 'portrait-primary');

export const isIPhone = () => {
    return (
        ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
            typeof window !== 'undefined' && navigator.platform
        ) ||
        (typeof window !== 'undefined' && navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    );
};

export const isSafari = /^((?!chrome|android).)*safari/i.test(typeof window !== 'undefined' && navigator.userAgent);

export const createSlug = (str) => {
    if (typeof str !== 'string') {
        return typeof str === 'symbol' ? Symbol.keyFor(str) : 'fallback-slug';
    }

    let slug = str.replace(/[^A-Za-z0-9]+/g, '-').toLowerCase();
    if (slug.endsWith('-')) {
        slug = slug.slice(0, -1);
    }

    return slug;
};

export const headingRenderer = (props) => {
    const slug = createSlug(props.children[0]);
    return React.createElement(`h${props.level}`, { id: slug }, props.children);
};

export const getTextContent = (node) => {
    if (node.type === 'text') {
        return node.value;
    }
    if (node.children) {
        return node.children.map(getTextContent).join('');
    }
    return '';
};
