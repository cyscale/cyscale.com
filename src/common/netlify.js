import CMS from 'netlify-cms-app';
import './netlify-widgets'
import React from 'react';
import PostContent from '../components/new-blog/PostContent';
import '../styles/netify-preview.css';
import CSSInjector from './CSSInjector';
import Hero from '../components/pages/Hero';
import RightSection from '../components/pages/RightSection';
import LeftSection from '../components/pages/LeftSection';
import CloudComplianceSection from '../components/pages/CloudComplianceSection';
import Cta from '../components/pages/Cta';
import AlignTeams from '../components/pages/AlignTeams';
import Features from '../components/pages/Features';
import CustomPagesStyles from '../components/pages/CustomPagesStyles';

const BlogPreview = ({ entry }) => (
    <PostContent
        preview={true}
        data={{
            title: entry.getIn(['data', 'title']),
            featuredimage: { publicURL: entry.getIn(['data', 'featuredimage']) },
            rawMarkdownBody: entry.getIn(['data', 'body']),
            date: entry.getIn(['data', 'date']),
            authors: entry.getIn(['data', 'authors']),
            categories: entry.getIn(['data', 'categories']).toArray()
        }}
    />
);

CMS.registerPreviewTemplate('blog', BlogPreview);

const PagesPreview = ({ entry }) => {
    return (
        <CSSInjector>
            <CustomPagesStyles />
            {entry
                .getIn(['data', 'sections'])
                ?.toJS()
                .map((item) => {
                    if (item === 'hero') {
                        return (
                            <Hero
                                heroBackground={entry.getIn(['data', 'hero'])?.toJS()?.heroBackground}
                                heroImage={entry.getIn(['data', 'hero'])?.toJS()?.heroImage}
                                heroImageAlt={entry.getIn(['data', 'hero'])?.toJS()?.heroImageAlt}
                                title={entry.getIn(['data', 'hero'])?.toJS()?.heroTitle}
                                customComponents={entry.getIn(['data', 'hero'])?.toJS()?.customComponents}
                                markdown={entry.getIn(['data', 'hero'])?.toJS()?.heroMarkdown}
                                preview={true}
                            />
                        );
                    }
                    if (item === 'textImageRow') {
                        return entry
                            .getIn(['data', 'textImageRow'])
                            ?.toJS()
                            ?.map((section, index) => {
                                if (section?.rowImagePosition === 'left') {
                                    return (
                                        <LeftSection
                                            key={index}
                                            rowStartGridCols={section.rowStartGridCols}
                                            rowEndGridCols={section.rowEndGridCols}
                                            subtitle={section.rowSubtitle}
                                            image={section.rowImage}
                                            alt={section.rowAlt}
                                            customComponents={section.customComponents}
                                            markdown={section.rowMarkdown}
                                            backgroundColor={section.rowBackground}
                                            preview={true}
                                        />
                                    );
                                }
                                if (section?.rowImagePosition === 'right') {
                                    return (
                                        <RightSection
                                            key={index}
                                            rowStartGridCols={section.rowStartGridCols}
                                            rowEndGridCols={section.rowEndGridCols}
                                            subtitle={section.rowSubtitle}
                                            image={section.rowImage}
                                            alt={section.rowAlt}
                                            customComponents={section.customComponents}
                                            markdown={section.rowMarkdown}
                                            backgroundColor={section.rowBackground}
                                            preview={true}
                                        />
                                    );
                                }
                                return null;
                            });
                    }
                    if (item === 'secondTextImageRow') {
                        return entry
                            .getIn(['data', 'secondTextImageRow'])
                            ?.toJS()
                            ?.map((section, index) => {
                                if (section?.rowImagePosition === 'left') {
                                    return (
                                        <LeftSection
                                            key={index}
                                            rowStartGridCols={section.rowStartGridCols}
                                            rowEndGridCols={section.rowEndGridCols}
                                            subtitle={section.rowSubtitle}
                                            image={section.rowImage}
                                            alt={section.rowAlt}
                                            customComponents={section.customComponents}
                                            markdown={section.rowMarkdown}
                                            backgroundColor={section.rowBackground}
                                            preview={true}
                                        />
                                    );
                                }
                                if (section?.rowImagePosition === 'right') {
                                    return (
                                        <RightSection
                                            key={index}
                                            rowStartGridCols={section.rowStartGridCols}
                                            rowEndGridCols={section.rowEndGridCols}
                                            subtitle={section.rowSubtitle}
                                            image={section.rowImage}
                                            alt={section.rowAlt}
                                            customComponents={section.customComponents}
                                            markdown={section.rowMarkdown}
                                            backgroundColor={section.rowBackground}
                                            preview={true}
                                        />
                                    );
                                }
                                return null;
                            });
                    }
                    if (item === 'featuresSection') {
                        return <Features features={entry.getIn(['data', 'featuresSection'])?.toJS()} />;
                    }
                    if (item === 'alignTeamsSection') {
                        return <AlignTeams />;
                    }
                    if (item === 'cloudComplianceSection') {
                        return <CloudComplianceSection />;
                    }
                    if (item === 'ctaSection') {
                        return <Cta markdown={entry.getIn(['data', 'ctaSection'])?.toJS()?.ctaMarkdown} />;
                    }
                    return null;
                })}
        </CSSInjector>
    );
};

CMS.registerPreviewTemplate('pages', PagesPreview);

