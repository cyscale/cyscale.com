import React from 'react';
import Layout from '../components/layout/layout.js';
import BlogOne from '../components/blog-one'
import heroBG from '../assets/images/privacy&blog-bg.svg'


const BlodDetail = ({ pageContext }) => {
    const { alldata } = pageContext;
    return (<div className="BLogPager">
        <Layout
            pageName="blog-detail"
            heroBG={heroBG}
            blogDataTitle={alldata?.frontmatter.title}
            title="Cloud and Data Security Blog - Cyscale Power Cloud Platform"
            description={alldata?.frontmatter.title}
        >
            <BlogOne data={alldata} />
        </Layout>
    </div>)
};
export default BlodDetail;