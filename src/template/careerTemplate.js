import React from 'react';
import Layout from '../components/layout/CleanLayout';
import Details from '../components/careers/job-details.js';

const CareerTemplate = ({ pageContext, location }) => {
    const { alldata } = pageContext;
    const { frontmatter: data } = alldata;
    return (
        <Layout
            location={location}
            pageName='jobDetails'
            title={data.seoTitle || data.title}
            description={data.seoDescription || data.description}
        >
            <Details data={alldata} />
        </Layout>
    );
};
export default CareerTemplate;
