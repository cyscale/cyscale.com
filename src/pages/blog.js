import React from 'react';
import Layout from '../components/layout/layout.js';
import Blogs from '../components/blogs';


const Index = () => (
    <Layout
        pageName="blog"
    >
        <Blogs />
    </Layout>
);
export default Index;