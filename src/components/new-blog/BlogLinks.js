import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import LatestCategoryArticles from './LatestCategoryArticles';
const BlogLinks = ({ categories }) => {
    const data = useStaticQuery(graphql`
        query BlogLinksQuery {
            cloudSecurity: allMarkdownRemark(
                filter: {
                    frontmatter: {
                        templateKey: { eq: "top-articles-category-based" }
                        category: { eq: "Cloud Security" }
                    }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                edges {
                    node {
                        frontmatter {
                            category
                        }
                        fields {
                            relatedPostsPermalink {
                                title
                                permalink
                            }
                        }
                    }
                }
            }
            compliance: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "top-articles-category-based" }, category: { eq: "Compliance" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                edges {
                    node {
                        frontmatter {
                            category
                        }
                        fields {
                            relatedPostsPermalink {
                                title
                                permalink
                            }
                        }
                    }
                }
            }
            news: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "top-articles-category-based" }, category: { eq: "News" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                edges {
                    node {
                        frontmatter {
                            category
                        }
                        fields {
                            relatedPostsPermalink {
                                title
                                permalink
                            }
                        }
                    }
                }
            }
            product: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "top-articles-category-based" }, category: { eq: "Product" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                edges {
                    node {
                        frontmatter {
                            category
                        }
                        fields {
                            relatedPostsPermalink {
                                title
                                permalink
                            }
                        }
                    }
                }
            }
            iam: allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "top-articles-category-based" }, category: { eq: "IAM" } } }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                edges {
                    node {
                        frontmatter {
                            category
                        }
                        fields {
                            relatedPostsPermalink {
                                title
                                permalink
                            }
                        }
                    }
                }
            }
            cspm: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "top-articles-category-based" }, category: { eq: "CSPM" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                edges {
                    node {
                        frontmatter {
                            category
                        }
                        fields {
                            relatedPostsPermalink {
                                title
                                permalink
                            }
                        }
                    }
                }
            }
            cnapp: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "top-articles-category-based" }, category: { eq: "CNAPP" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                edges {
                    node {
                        frontmatter {
                            category
                        }
                        fields {
                            relatedPostsPermalink {
                                title
                                permalink
                            }
                        }
                    }
                }
            }
            cloudNativeSecurity: allMarkdownRemark(
                filter: {
                    frontmatter: {
                        templateKey: { eq: "top-articles-category-based" }
                        category: { eq: "Cloud Native Security" }
                    }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                edges {
                    node {
                        frontmatter {
                            category
                        }
                        fields {
                            relatedPostsPermalink {
                                title
                                permalink
                            }
                        }
                    }
                }
            }
            misconfigurations: allMarkdownRemark(
                filter: {
                    frontmatter: {
                        templateKey: { eq: "top-articles-category-based" }
                        category: { eq: "Misconfigurations" }
                    }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                edges {
                    node {
                        frontmatter {
                            category
                        }
                        fields {
                            relatedPostsPermalink {
                                title
                                permalink
                            }
                        }
                    }
                }
            }
            encryption: allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "top-articles-category-based" }, category: { eq: "Encryption" } }
                }
                sort: { frontmatter: { date: DESC } }
                limit: 5
            ) {
                edges {
                    node {
                        frontmatter {
                            category
                        }
                        fields {
                            relatedPostsPermalink {
                                title
                                permalink
                            }
                        }
                    }
                }
            }
        }
    `);

    console.log(data);

    return (
        <>
            {categories[0] === 'Cloud Security' && (
                <LatestCategoryArticles
                    category={categories[0]}
                    latestArticles={data.cloudSecurity.edges[0].node.fields.relatedPostsPermalink}
                />
            )}
            {categories[0] === 'Compliance' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.compliance.edges[0].node.fields.relatedPostsPermalink} />
            )}
            {categories[0] === 'News' && <LatestCategoryArticles category={categories[0]} latestArticles={data.news.edges[0].node.fields.relatedPostsPermalink} />}
            {categories[0] === 'Product' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.product.edges[0].node.fields.relatedPostsPermalink} />
            )}
            {categories[0] === 'IAM' && <LatestCategoryArticles category={categories[0]} latestArticles={data.iam.edges[0].node.fields.relatedPostsPermalink} />}
            {categories[0] === 'CSPM' && <LatestCategoryArticles category={categories[0]} latestArticles={data.cspm.edges[0].node.fields.relatedPostsPermalink} />}
            {categories[0] === 'CNAPP' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.cnapp.edges[0].node.fields.relatedPostsPermalink} />
            )}
            {categories[0] === 'Cloud Native Security' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.cloudNativeSecurity.edges[0].node.fields.relatedPostsPermalink} />
            )}
            {categories[0] === 'Misconfigurations' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.misconfigurations.edges[0].node.fields.relatedPostsPermalink} />
            )}
            {categories[0] === 'Encryption' && (
                <LatestCategoryArticles category={categories[0]} latestArticles={data.encryption.edges[0].node.fields.relatedPostsPermalink} />
            )}
        </>
    );
};

export default BlogLinks;
