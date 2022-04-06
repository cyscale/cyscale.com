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
            categories: entry.getIn(['data', 'categories'])
        }}
    />
);

CMS.registerPreviewTemplate('blog', BlogPreview);
