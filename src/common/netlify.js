import CMS from 'netlify-cms-app';
import React from 'react';
import PostContent from '../components/new-blog/PostContent';
import '../styles/global.css';

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
            classes: match[4]
        },
    toBlock: function ({ image, alt, title, classes }, getAsset, fields) {
        return `<img src="${image || ''}" alt="${alt || ''}" title="${title || ''}" class="${classes || ''}"/>`;
    },
    toPreview: ({ image, alt, title, classes }, getAsset, fields) => {
        return `<img src="${image}" alt="${alt}" title="${title}" class="${classes}"/>`;
    },
    pattern: /^<img src="(.*?)" alt="(.*?)" title="(.*?)" class="(.*?)"\/>$/s,
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
            default: [' shadows '],
            options: [
                ' shadows ',
                ' rounded-sm ',
                ' rounded ',
                ' rounded-md ',
                ' rounded-lg ',
                ' rounded-2xl ',
                ' rounded-3xl ',
                ' rounded-full '
            ]
        },
        {
            label: 'Title',
            name: 'title'
        }
    ]
});
