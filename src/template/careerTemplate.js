import React from 'react';
import Layout from '../components/layout/layout.js';
import Details from '../components/careers/job-details.js';

const CareerTemplate = ({ pageContext }) => {
    const { alldata } = pageContext;
    return (
        <Layout
            pageName='jobDetails'
            bannerTitle={alldata.frontmatter.title}
            description={alldata.frontmatter.title}
            title='Careers - Cyscale Power Cloud Platform'
            bannerBtn1Link={!alldata.frontmatter.disabled ? '/' : false}
            bannerBtn1Text={!alldata.frontmatter.disabled ? 'Apply' : false}
        >
            <Details data={alldata} />
        </Layout>
    );
};
export default CareerTemplate;
