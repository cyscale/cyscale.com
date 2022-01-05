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
import { useStaticQuery, graphql } from 'gatsby';

const defaultOg = {
    HomePage: HomeOg,
    CSPMPage: CspmOg,
    SKGPage: SkgOG,
    dataSecurity: DataOg,
    RemoteWork: RemoteOg,
    ComplianceAuditing: ComplianceOg
};

const Seo = ({ title, description, pageName, banner, location }) => {
    let ogImage = banner;
    if (!banner) {
        ogImage = pageName && defaultOg[pageName] ? defaultOg[pageName] : defaultOg['HomePage'];
    }

    const data = useStaticQuery(graphql`
        query SEO {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                }
            }
        }
    `);
    const siteUrl = data.site.siteMetadata.siteUrl;

    return (
        <Helmet>
            <html lang='en' />
            <title>{title}</title>
            <meta name='theme-color' content='#fff' />
            <meta property='image' content={siteUrl + ogImage} />
            <meta property='og:title' content={title} />
            {location && <meta property='og:url' content={location.href} />}
            <meta property='og:image' content={siteUrl + ogImage} />
            <meta name='description' content={description} />
            <meta name='og:description' content={description} />
            <meta property='og:type' content={pageName !== 'blog-detail' ? 'website' : 'article'} />

            <meta name='twitter:card' content='summary_large_image' />
            <meta property='twitter:domain' content='cyscale.com' />
            {location && <meta property='twitter:url' content={location.href} />}
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={siteUrl + ogImage} />

            <link rel='apple-touch-icon' sizes='180x180' href={icon180} />
            <link rel='icon' type='image/png' href={icon128} sizes='128x128' />
            <link rel='icon' type='image/png' href={icon64} sizes='64x64' />
            <link rel='icon' type='image/png' href={icon32} sizes='32x32' />
            <link rel='icon' type='image/png' href={icon16} sizes='16x16' />
        </Helmet>
    );
};

export default Seo;
