import { withPrefix } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import HomeOg from '../../images/homepage-og.jpg';
import CspmOg from '../../images/cspm-og.jpg';
import SkgOG from '../../images/graph-og.jpg';
import DataOg from '../../images/data-security-og.jpg';
import RemoteOg from '../../images/remote-work-og.jpg';
import ComplianceOg from '../../images/compliance-auditing-og.jpg';
const ogImages = {
    HomePage: HomeOg,
    CSPMPage: CspmOg,
    SKGPage: SkgOG,
    dataSecurity: DataOg,
    RemoteWork: RemoteOg,
    ComplianceAuditing: ComplianceOg
};

const SEO = ({ title, description, pageName, location }) => {
    const ogImage = pageName && ogImages[pageName] ? ogImages[pageName] : ogImages['HomePage'];
    return (
        <Helmet>
            <html lang='en' />
            <title>{title}</title>
            <meta property='og:title' content={title} />
            <meta name='description' content={description} />
            <meta name='og:description' content={description} />

            <meta name='theme-color' content='#fff' />
            <meta property='og:type' content='business.business' />
            <meta property='og:url' content='https://cyscale.com' />

            <meta property='og:image' content={ogImage} />
        </Helmet>
    );
};

export default SEO;
