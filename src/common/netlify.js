import CMS from 'netlify-cms-app';
import React from 'react';
import PostContent from '../components/new-blog/PostContent';
import '../styles/global.css';
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

CMS.registerEditorComponent({
    label: 'Image',
    id: 'image',
    fromBlock: (match) =>
        match && {
            image: match[1],
            alt: match[2],
            title: match[3],
            classes: match[4],
            width: match[5],
            height: match[6]
        },
    toBlock: function ({ image, alt, title, classes, width, height }, getAsset, fields) {
        return `<img src="${image || ''}" alt="${alt || ''}" title="${title || ''}" class="${
            classes || ''
        }" style="width:${width / 16 || 'auto'}${width >= 1 ? 'rem' : ''};height:${height / 16 || 'auto'}${
            height >= 1 ? 'rem' : ''
        };"/>`;
    },
    toPreview: ({ image, alt, title, classes, width, height }, getAsset, fields) => {
        return `<img src="${image}" alt="${alt}" title="${title}" class="${classes}" style="width:${width};height:${height};"/>`;
    },
    pattern: /^<img src="(.*?)" alt="(.*?)" title="(.*?)" class="(.*?)" style="width:(.*?);height:(.*?);"\/>$/s,
    fields: [
        {
            label: 'Picture',
            name: 'image',
            widget: 'image',
            media_library: {
                allow_multiple: true
            }
        },
        {
            label: 'Alt Text',
            name: 'alt'
        },
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'select',
            multiple: true,
            default: [' blog-image-shadow '],
            options: [
                ' blog-image-shadow ',
                ' rounded-sm ',
                ' rounded ',
                ' rounded-md ',
                ' rounded-lg ',
                ' rounded-2xl ',
                ' rounded-3xl ',
                ' rounded-full ',
                ' shadow-lg ',
                ' shadow-xl ',
                ' shadow-2xl '
            ]
        },
        {
            label: 'Title',
            name: 'title'
        },
        {
            label: 'Width (px)',
            name: 'width',
            widget: 'number',
            value_type: 'int',
            min: 1
        },
        {
            label: 'Height (px)',
            name: 'height',
            widget: 'number',
            value_type: 'int',
            min: 1
        }
    ]
});

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

CMS.registerEditorComponent({
    label: 'H1 Hero',
    id: 'headingOneHero',
    fromBlock: (match) =>
        match && {
            classes: match[1],
            texth1: match[2]
        },
    toBlock: function ({ classes, texth1 }, getAsset, fields) {
        return `<h1 data-cms='heading-one' class="${classes || ''}">${texth1 || ''}</h1>`;
    },
    toPreview: ({ classes, texth1 }, getAsset, fields) => {
        return `<h1 data-cms='heading-one' class="${classes}">${texth1}</h1>`;
    },
    pattern: /^<h1 data-cms='heading-one' class="(.*?)">(.*?)<\/h1>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'string',
            hint: 'text-blue, text-red, text-xl, text-2xl, text-3xl, text-4xl, text-5xl'
        },
        {
            label: 'Text H1',
            name: 'texth1',
            widget: 'string'
        }
    ]
});

CMS.registerEditorComponent({
    label: 'H1',
    id: 'headingOne',
    fromBlock: (match) =>
        match && {
            classes: match[1],
            texth1: match[2]
        },
    toBlock: function ({ classes, texth1 }, getAsset, fields) {
        return `<h1 class="${classes || ''}">${texth1 || ''}</h1>`;
    },
    toPreview: ({ classes, texth1 }, getAsset, fields) => {
        return `<h1 class="${classes}">${texth1}</h1>`;
    },
    pattern: /^<h1 class="(.*?)">(.*?)<\/h1>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'string',
            hint: 'text-blue, text-red, text-xl, text-2xl, text-3xl, text-4xl, text-5xl'
        },
        {
            label: 'Text H1',
            name: 'texth1',
            widget: 'string'
        }
    ]
});

CMS.registerEditorComponent({
    label: 'H2 Subtitle',
    id: 'headingTwoSubtitle',
    fromBlock: (match) =>
        match && {
            classes: match[1],
            texth2: match[2]
        },
    toBlock: function ({ classes, texth2 }, getAsset, fields) {
        return `<h2 data-cms='heading-two-subtitle' class="titleSection border-title-partly ${classes || ''}">${
            texth2 || ''
        }</h2>`;
    },
    toPreview: ({ classes, texth2 }, getAsset, fields) => {
        return `<h2 data-cms='heading-two-subtitle' class="titleSection border-title-partly ${classes}">${texth2}</h2>`;
    },
    pattern: /^<h2 data-cms='heading-two-subtitle' class="titleSection border-title-partly (.*?)">(.*?)<\/h2>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'string',
            hint: 'text-blue, text-red, text-xl, text-2xl, text-3xl, text-4xl, text-5xl'
        },
        {
            label: 'Text H2',
            name: 'texth2',
            widget: 'string'
        }
    ]
});

CMS.registerEditorComponent({
    label: 'P',
    id: 'paragraph',
    fromBlock: (match) =>
        match && {
            classes: match[1],
            textp: match[2]
        },
    toBlock: function ({ classes, textp }, getAsset, fields) {
        return `<p data-cms='paragraph' class="${classes || ''}">${textp || ''}</p>`;
    },
    toPreview: ({ classes, textp }, getAsset, fields) => {
        return `<p data-cms='paragraph' class="${classes}">${textp}</p>`;
    },
    pattern: /^<p data-cms='paragraph' class="(.*?)">(.*?)<\/p>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'string',
            hint: 'text-blue, text-red, text-xl, text-2xl, text-3xl, text-4xl, text-5xl'
        },
        {
            label: 'Text p',
            name: 'textp',
            widget: 'string'
        }
    ]
});

CMS.registerEditorComponent({
    label: 'H1 CTA',
    id: 'headingOneCta',
    fromBlock: (match) =>
        match && {
            classes: match[1],
            texth1: match[2]
        },
    toBlock: function ({ classes, texth1 }, getAsset, fields) {
        return `<h1 data-cms='heading-one-cta' class="${classes || ''}">${texth1 || ''}</h1>`;
    },
    toPreview: ({ classes, texth1 }, getAsset, fields) => {
        return `<h1 data-cms='heading-one-cta' class="${classes}">${texth1}</h1>`;
    },
    pattern: /^<h1 data-cms='heading-one-cta' class="(.*?)">(.*?)<\/h1>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'string',
            hint: 'text-blue, text-red, text-xl, text-2xl, text-3xl, text-4xl, text-5xl'
        },
        {
            label: 'Text H1',
            name: 'texth1',
            widget: 'string'
        }
    ]
});

CMS.registerEditorComponent({
    label: 'Break line',
    id: 'breakline',
    fromBlock: (match) =>
        match && {
            classes: match[1]
        },
    toBlock: function ({ classes }, getAsset, fields) {
        return `<br class="${classes || ''}" />`;
    },
    toPreview: ({ classes }, getAsset, fields) => {
        return `<br class="${classes}" />`;
    },
    pattern: /^<br class="(.*?)"\/>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'string',
            hint: 'text-blue, text-red, text-xl, text-2xl, text-3xl, text-4xl, text-5xl'
        }
    ]
});
