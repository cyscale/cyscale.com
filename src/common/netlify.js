import CMS from 'netlify-cms-app';
import React from 'react';
import Article from '../components/blog-one/article';
import '../styles/global.css'

const BlogPreview = ({ entry }) => (
    <Article
        title={entry.getIn(['data', 'title'])}
        imageUrl={entry.getIn(['data', 'featuredimage'])}
        body={entry.getIn(['data', 'body'])}
        date={entry.getIn(['data', 'date']).toLocaleDateString()}
        authors={entry.getIn(['data', 'authors'])}
        category={entry.getIn(['data', 'category'])}
    />
);

CMS.registerPreviewTemplate('blog', BlogPreview);
