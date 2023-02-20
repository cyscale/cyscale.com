import CMS from 'netlify-cms-app';
import React from 'react';
import PostContent from '../components/new-blog/PostContent';
import '../styles/global.css';
import CSSInjector from './CSSInjector';
import Hero from '../components/pages/Hero';
import RightSection from '../components/pages/RightSection';
import LeftSection from '../components/pages/LeftSection';

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
        }" style="width:${width / 16 || 'auto'}${width ? 'rem' : ''};height:${height / 16 || 'auto'}${
            height ? 'rem' : ''
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
    const sections = entry
        .getIn(['data', 'sections'])
        ?.toJS()
        .reduce(
            // eslint-disable-next-line
            (acc, curr) => ((acc[curr] = true), acc),
            {}
        );

    return (
        <CSSInjector>
            {sections['hero'] && (
                <Hero
                    heroBackground={entry.getIn(['data', 'hero'])?.toJS()?.heroBackground}
                    heroImage={entry.getIn(['data', 'hero'])?.toJS()?.heroImage}
                    heroImageAlt={entry.getIn(['data', 'hero'])?.toJS()?.heroImageAlt}
                    markdown={entry.getIn(['data', 'hero'])?.toJS()?.heroMarkdown}
                    preview={true}
                />
            )}
            {sections['rightSection'] && (
                <RightSection
                    subtitle={entry.getIn(['data', 'rightSection'])?.toJS()?.rightSectionSubtitle}
                    image={entry.getIn(['data', 'rightSection'])?.toJS()?.rightSectionImage}
                    alt={entry.getIn(['data', 'rightSection'])?.toJS()?.rightSectionImageAlt}
                    markdown={entry.getIn(['data', 'rightSection'])?.toJS()?.rightMarkdown}
                    preview={true}
                />
            )}
            {sections['leftSection'] && (
                <LeftSection
                    image={entry.getIn(['data', 'leftSection'])?.toJS()?.leftSectionImage}
                    alt={entry.getIn(['data', 'leftSection'])?.toJS()?.leftSectionImageAlt}
                    subtitle={entry.getIn(['data', 'leftSection'])?.toJS()?.leftSectionSubtitle}
                    markdown={entry.getIn(['data', 'leftSection'])?.toJS()?.leftMarkdown}
                    preview={true}
                ></LeftSection>
            )}
        </CSSInjector>
    );
};

CMS.registerPreviewTemplate('pages', PagesPreview);

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
            widget: 'select',
            multiple: true,
            options: [' text-blue ', ' text-red ', ' text-xl ', ' text-2xl ', ' text-3xl ', ' text-4xl ', ' text-5xl ']
        },
        {
            label: 'Text H1',
            name: 'texth1',
            widget: 'string'
        }
    ]
});

CMS.registerEditorComponent({
    label: 'H1 Hero',
    id: 'headingOneHero',
    fromBlock: (match) =>
        match && {
            classes: match[1],
            texth1: match[2]
        },
    toBlock: function ({ classes, texth1 }, getAsset, fields) {
        return `<h1 class="text-left text-blue text-4xl lg:text-5xl leading-normal lg:leading-normal mb-16 font-montserrat ${
            classes || ''
        }">${texth1 || ''}</h1>`;
    },
    toPreview: ({ classes, texth1 }, getAsset, fields) => {
        return `<h1 class="text-left text-blue text-4xl lg:text-5xl leading-normal lg:leading-normal mb-16 font-montserrat ${classes}">${texth1}</h1>`;
    },
    pattern:
        /^<h1 class="text-left text-blue text-4xl lg:text-5xl leading-normal lg:leading-normal mb-16 font-montserrat (.*?)">(.*?)<\/h1>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'select',
            multiple: true,
            options: [' text-blue ', ' text-red ', ' text-xl ', ' text-2xl ', ' text-3xl ', ' text-4xl ', ' text-5xl ']
        },
        {
            label: 'Text H1',
            name: 'texth1',
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
        return `<p class="text-base ${classes || ''}">${textp || ''}</p>`;
    },
    toPreview: ({ classes, textp }, getAsset, fields) => {
        return `<p class="text-base ${classes}">${textp}</p>`;
    },
    pattern: /^<p class="text-base (.*?)">(.*?)<\/p>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'select',
            multiple: true,
            options: [
                ' text-left ',
                ' text-base ',
                ' lg:text-lg ',
                ' leading-relaxed ',
                ' leading-normal ',
                ' font-montserrat ',
                ' mt-8 ',
                ' mt-4 ',
                ' text-gray ',
                ' font-semibold ',
                ' mb-8 ',
                ' mb-2 '
            ]
        },
        {
            label: 'Text p',
            name: 'textp',
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
            texth1: match[2]
        },
    toBlock: function ({ classes, texth1 }, getAsset, fields) {
        return `<h2 class="titleSection font-bold text-primary leading-normal border-title-partly font-montserrat lg:mt-3 ${
            classes || ''
        }">${texth1 || ''}</h2>`;
    },
    toPreview: ({ classes, texth1 }, getAsset, fields) => {
        return `<h2 class="titleSection font-bold text-primary leading-normal border-title-partly font-montserrat lg:mt-3 ${classes}">${texth1}</h2>`;
    },
    pattern:
        /^<h2 class="titleSection font-bold text-primary leading-normal border-title-partly font-montserrat lg:mt-3 (.*?)">(.*?)<\/h2>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'select',
            multiple: true,
            options: [' text-blue ', ' text-red ', ' text-xl ', ' text-2xl ', ' text-3xl ', ' text-4xl ', ' text-5xl ']
        },
        {
            label: 'Text H2',
            name: 'texth2',
            widget: 'string'
        }
    ]
});
