import React from 'react';
import { Helmet } from 'react-helmet';

import HomeOg from '../../assets/images/homepage-og.png';
import CspmOg from '../../assets/images/cspm-og.png';
import SkgOG from '../../assets/images/graph-og.png';
import DataOg from '../../assets/images/data-security-og.png';
import RemoteOg from '../../assets/images/remote-work-og.png';
import ComplianceOg from '../../assets/images/compliance-auditing-og.png';
import MisconfigurationsOg from '../../assets/images/Misconfigurations-og.png';
import CareersOg from '../../assets/images/careers-og.png';
import AboutUsOg from '../../assets/images/about-us-og.png';
import StartupsOg from '../../assets/images/startups-og.png';
import MisconfigurationsWhitepaperOg from '../../assets/images/misconfigurations-whitepaper-og.png';
import { useStaticQuery, graphql } from 'gatsby';

const defaultOg = {
    HomePage: HomeOg,
    CSPMPage: CspmOg,
    SKGPage: SkgOG,
    dataSecurity: DataOg,
    RemoteWork: RemoteOg,
    ComplianceAuditing: ComplianceOg,
    MisconfigurationsPage: MisconfigurationsOg,
    careers: CareersOg,
    aboutUs: AboutUsOg,
    Startups: StartupsOg,
    CloudStorageMisconfigurations: MisconfigurationsWhitepaperOg
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
            <title>{pageName === 'blog-detail' ? `${title} - Cyscale` : title}</title>
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
        </Helmet>
    );
};

export default Seo;
