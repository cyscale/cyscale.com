import React from 'react';
import { Helmet } from 'react-helmet';

import HomeOg from '../../assets/images/homepage-og.jpg';
import CspmOg from '../../assets/images/cspm-og.jpg';
import SkgOG from '../../assets/images/graph-og.jpg';
import DataOg from '../../assets/images/data-security-og.jpg';
import RemoteOg from '../../assets/images/remote-work-og.jpg';
import ComplianceOg from '../../assets/images/compliance-auditing-og.jpg';
import icon128 from '../../assets/images/favicon-128.png';
import icon180 from '../../assets/images/favicon-180.png';
import icon64 from '../../assets/images/favicon-64.png';
import icon32 from '../../assets/images/favicon-32.png';
import icon16 from '../../assets/images/favicon-16.png';

const ogImages = {
    HomePage: HomeOg,
    CSPMPage: CspmOg,
    SKGPage: SkgOG,
    dataSecurity: DataOg,
    RemoteWork: RemoteOg,
    ComplianceAuditing: ComplianceOg
};

const Seo = ({ title, description, pageName, location }) => {
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

            <link rel='apple-touch-icon' sizes='180x180' href={icon180} />
            <link rel='icon' type='image/png' href={icon128} sizes='128x128' />
            <link rel='icon' type='image/png' href={icon64} sizes='64x64' />
            <link rel='icon' type='image/png' href={icon32} sizes='32x32' />
            <link rel='icon' type='image/png' href={icon16} sizes='16x16' />
        </Helmet>
    );
};

export default Seo;
