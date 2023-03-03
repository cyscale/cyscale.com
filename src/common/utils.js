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