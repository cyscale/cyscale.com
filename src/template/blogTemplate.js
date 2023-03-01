import React from 'react';
import Layout from '../components/layout/CleanLayout';
import PostContent from '../components/new-blog/PostContent';

const BlogDetail = ({ pageContext, location }) => {
    const { alldata, suggestions, whitepaperCover, blueBird, compliceToolbox } = pageContext;
    const { frontmatter: data, rawMarkdownBody } = alldata;
    console.log(data);
    return (
        <div className='bg-blog-post pt-28'>
            <Layout
                location={location}
                pageName='blog-detail'
                title={data.seoTitle || data.title}
                banner={data.featuredimage.publicURL}
                description={data.seoDescription || data.description}
            >
                <PostContent
                    data={{ ...data, rawMarkdownBody }}
                    suggestions={suggestions}
                    pageUri={location?.pathname}
                    pageName={data?.title}
                    dataWhitepaper={whitepaperCover?.data}
                    dataBlueBird={blueBird?.data}
                    dataCompliceToolbox={compliceToolbox?.data}
                />
            </Layout>
        </div>
    );
};
export default BlogDetail;
