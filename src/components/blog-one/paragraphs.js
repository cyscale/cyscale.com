import React from 'react';
import Article from './article';

const ParaGraphs = ({ data }) => (
    <Article
        title={data?.frontmatter?.title}
        imageUrl={data?.frontmatter?.featuredimage?.publicURL}
        body={data?.rawMarkdownBody}
        date={new Date(data?.frontmatter?.date?.split('T')?.[0]).toLocaleDateString()}
        authors={data?.frontmatter?.authors}
        category={data?.frontmatter?.category}
    />
);

export default ParaGraphs;
