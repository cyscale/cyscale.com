export const formatDate = (date) => new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date(date));

export const isAnimatedNavbarPage = (pathname) => {
    return (
        pathname.includes('campaigns') ||
        pathname.includes('request-demo') ||
        pathname.includes('playground') ||
        pathname.includes('free-trial')
    );
};

export const requestDemoButtonPage = (pageName) => {
    return ['HomePage', 'CSPMPage', 'SKGPage', 'ComplianceAuditing', 'MisconfigurationsPage', 'RemoteWork'].includes(
        pageName
    );
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
