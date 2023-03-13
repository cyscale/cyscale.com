import React from 'react';
import Layout from '../components/layout/CleanLayout';
import Page from '../components/pages/Page';
import CustomPagesStyles from '../components/pages/CustomPagesStyles';

const PagesTemplate = ({ pageContext, location }) => {
    const { alldata } = pageContext;

    return (
        <Layout
            location={location}
            pageName={alldata.frontmatter.pageName}
            title={alldata.frontmatter.title}
            description={alldata.frontmatter.description}
        >
            <CustomPagesStyles />
            <Page data={alldata.frontmatter} />
        </Layout>
    );
};

export default PagesTemplate;
