import React from 'react';
import Layout from '../components/layout/layout.js';
import Details from '../components/careers/job-details.js';

const CareerTemplate = ({ pageContext }) => {
    const { alldata } = pageContext;

    return (
        <Layout
            bannerTitle={alldata.frontmatter.title}
            bannerBtn1Text='Apply'
            bannerBtn1Link='/'
            pageName='jobDetails'
            title="Careers - Cyscale Power Cloud Platform"
            description={alldata.frontmatter.title}
        >
            <Details data={alldata} />
        </Layout>
    );
};
export default CareerTemplate;
