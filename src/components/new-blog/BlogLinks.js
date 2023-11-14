import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import LatestCategoryArticles from './LatestCategoryArticles';
const BlogLinks = ({ categories }) => {
    const data = useStaticQuery(graphql`
        query JustLinksQuery {
            cloudSecurity: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "blog-post" } }
                    fields: { firstCategory: { eq: "Cloud Security" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                nodes {
                    frontmatter {
                        permalink
                        title
                    }
                }
            }
            compliance: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "blog-post" } }
                    fields: { firstCategory: { eq: "Compliance" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                nodes {
                    frontmatter {
                        permalink
                        title
                    }
                }
            }
            news: allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "blog-post" } }, fields: { firstCategory: { eq: "News" } } }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                nodes {
                    frontmatter {
                        permalink
                        title
                    }
                }
            }
            product: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "blog-post" } }
                    fields: { firstCategory: { eq: "Product" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                nodes {
                    frontmatter {
                        permalink
                        title
                    }
                }
            }
            iam: allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "blog-post" } }, fields: { firstCategory: { eq: "IAM" } } }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                nodes {
                    frontmatter {
                        permalink
                        title
                    }
                }
            }
            cspm: allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "blog-post" } }, fields: { firstCategory: { eq: "CSPM" } } }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                nodes {
                    frontmatter {
                        permalink
                        title
                    }
                }
            }
            cnapp: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "blog-post" } }
                    fields: { firstCategory: { eq: "CNAPP" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                nodes {
                    frontmatter {
                        permalink
                        title
                    }
                }
            }
            cloudNativeSecurity: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "blog-post" } }
                    fields: { firstCategory: { eq: "Cloud Native Security" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                nodes {
                    frontmatter {
                        permalink
                        title
                    }
                }
            }
            misconfigurations: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "blog-post" } }
                    fields: { firstCategory: { eq: "Misconfigurations" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                nodes {
                    frontmatter {
                        permalink
                        title
                    }
                }
            }
            encryption: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "blog-post" } }
                    fields: { firstCategory: { eq: "Encryption" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                nodes {
                    frontmatter {
                        permalink
                        title
                    }
                }
            }
        }
    `);

    return (
        <>
            {categories[0] === 'Cloud Security' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.cloudSecurity} />
            )}
            {categories[0] === 'Compliance' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.compliance} />
            )}
            {categories[0] === 'News' && <LatestCategoryArticles category={categories[0]} latestArticles={data.news} />}
            {categories[0] === 'Product' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.product} />
            )}
            {categories[0] === 'IAM' && <LatestCategoryArticles category={categories[0]} latestArticles={data.iam} />}
            {categories[0] === 'CSPM' && <LatestCategoryArticles category={categories[0]} latestArticles={data.cspm} />}
            {categories[0] === 'CNAPP' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.cnapp} />
            )}
            {categories[0] === 'Cloud Native Security' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.cloudNativeSecurity} />
            )}
            {categories[0] === 'Misconfigurations' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.misconfigurations} />
            )}
            {categories[0] === 'Encryption' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.encryption} />
            )}
        </>
    );
};

export default BlogLinks;
