import React from 'react';
import Layout from '../components/layout/CleanLayout';
import PostContent from '../components/new-blog/PostContent';

const BlodDetail = ({ pageContext, location }) => {
    const { alldata, suggestions } = pageContext;
    const { frontmatter: data, rawMarkdownBody } = alldata;

    return (
        <div className='bg-blog-post pt-28'>
            <Layout
                location={location}
                pageName='blog-detail'
                title={data.seoTitle || data.title}
                description={data.seoDescription || data.description}
                banner={data.featuredimage.publicURL}
            >
                <PostContent data={{ ...data, rawMarkdownBody }} suggestions={suggestions} />
            </Layout>
        </div>
    );
};
export default BlodDetail;
