import React from 'react';
import Layout from '../components/layout/CleanLayout';
import Page from '../components/pages/Page';

const PagesTemplate = ({ pageContext, location }) => {
    const { alldata } = pageContext;

    return (
        <Layout
            location={location}
            pageName={alldata.frontmatter.pageName}
            title={alldata.frontmatter.title}
            description={alldata.frontmatter.description}
        >
            <Page data={alldata.frontmatter} />
        </Layout>
    );
};

export default PagesTemplate;
