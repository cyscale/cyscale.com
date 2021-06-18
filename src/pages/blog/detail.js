import React from 'react';
import Layout from '../../components/layout/layout.js';
import BlogOne from '../../components/blog-one'
import heroBG from '../../images/privacy&blog-bg.svg'

const BlodDetail = ({ bannerTitle }) => (
    <div className="BLogPager">
        <Layout
            pageName="blog-detail"
            heroBG={heroBG}
            bannerTitle={bannerTitle}
        >
            <BlogOne />
        </Layout>
    </div>
);
export default BlodDetail;