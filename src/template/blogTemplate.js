import React from 'react';
import Layout from '../components/layout/layout.js';
import BlogOne from '../components/blog-one';
// import heroBG from '../assets/images/privacy&blog-bg.svg';
import heroBG from '../assets/images/blog-hero.jpeg';

const BlodDetail = ({ pageContext }) => {
    const { alldata, suggestions } = pageContext;

    return (
        <div className='BLogPager'>
            <Layout
                heroBG={heroBG}
                pageName='blog-detail'
                description={alldata?.frontmatter?.description}
                blogDataTitle={alldata?.frontmatter?.title}
                banner={alldata?.frontmatter?.featuredimage?.publicURL}
                title={alldata?.frontmatter?.title}
            >
                <BlogOne data={alldata} suggestions={suggestions} />
            </Layout>
        </div>
    );
};
export default BlodDetail;
