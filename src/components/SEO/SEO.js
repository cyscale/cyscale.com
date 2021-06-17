import {withPrefix} from 'gatsby'
import React from 'react'
import {Helmet} from 'react-helmet'

const ogImages = {
    HomePage: `${withPrefix('/')}img/homepage-og.jpg`,
    CSPMPage: `${withPrefix('/')}img/cspm-og.jpg`,
    SKGPage: `${withPrefix('/')}img/graph-og.jpg`,
    dataSecurity: `${withPrefix('/')}img/data-security-og.jpg`,
    RemoteWork: `${withPrefix('/')}img/remote-work-og.jpg`,
    ComplianceAuditing: `${withPrefix('/')}img/compliance-auditing-og.jpg`
};

const SEO = ({ title, description, pageName, location }) => {
    const ogImage = pageName && ogImages[pageName] ? ogImages[pageName] : ogImages['HomePage'];
    return (
        <Helmet>
            <html lang='en' />
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='og:description' content={description} />
            <meta property='og:title' content={title} />

            <meta name='theme-color' content='#fff' />
            <meta property='og:type' content='business.business' />
            <meta property='og:url' content={location && location.pathname} />

            <meta property='og:image' content={ogImage} />

            <link rel='apple-touch-icon' sizes='180x180' href={`${withPrefix('/')}img/favicon-180.png`} />
            <link rel='icon' type='image/png' href={`${withPrefix('/')}img/favicon-128.png`} sizes='128x128' />
            <link rel='icon' type='image/png' href={`${withPrefix('/')}img/favicon-64.png`} sizes='64x64' />
            <link rel='icon' type='image/png' href={`${withPrefix('/')}img/favicon-32.png`} sizes='32x32' />
            <link rel='icon' type='image/png' href={`${withPrefix('/')}img/favicon-16.png`} sizes='16x16' />
        </Helmet>
    );
};

export default SEO;
