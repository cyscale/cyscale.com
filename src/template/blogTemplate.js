import React from 'react';
import Layout from '../components/layout/CleanLayout';
import PostContent from '../components/new-blog/PostContent';

const BlogDetail = ({ pageContext, location }) => {
    const { alldata, suggestions } = pageContext;
    const { frontmatter: data, rawMarkdownBody } = alldata;
    console.log(data);
    return (
        <div className='pt-28'>
            <Layout
                location={location}
                pageName='blog-detail'
                title={data.seoTitle || data.title}
                banner={data.featuredimage.publicURL}
                description={data.seoDescription || data.description}
                blogDetails={{ author: data.authors, date: data.date }}
            >
                <PostContent
                    data={{ ...data, rawMarkdownBody }}
                    suggestions={suggestions}
                    pageUri={location?.pathname}
                    pageName={data?.title}
                    tableOfContents={data?.tableOfContents}
                />
            </Layout>
        </div>
    );
};
export default BlogDetail;
