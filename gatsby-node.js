const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve(`src/template/blogTemplate.js`);
    const careerTemplate = path.resolve(`src/template/careerTemplate.js`);

    return graphql(
        `
            query loadPagesQuery {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                authors
                                category
                                description
                                icon
                                date
                                featuredpost
                                templateKey
                                permalink
                                title
                                tags
                                featuredimage {
                                    publicURL
                                }
                            }
                            rawMarkdownBody
                        }
                    }
                }
            }
        `
    ).then((result) => {
        if (result.errors) {
            throw result.errors;
        }
        const posts = result.data.allMarkdownRemark.edges;

        const blogs = posts.filter((edge) => edge.node.frontmatter.templateKey === 'blog-post');

        posts.map((edge, index) => {
            const node = edge.node;

            if (node.frontmatter.hidden === true) {
                return;
            }

            switch (node.frontmatter.templateKey) {
                case 'blog-post':
                    createPage({
                        // Path for this page — required
                        path: '/blog/' + node.frontmatter.permalink,
                        component: blogTemplate,
                        context: {
                            alldata: node,
                            suggestions: [blogs[0], blogs[1], blogs[2], blogs[4]]
                        }
                    });
                    break;
                case 'career-page':
                    createPage({
                        // Path for this page — required
                        path: '/careers/' + node.frontmatter.permalink,
                        component: careerTemplate,
                        context: {
                            alldata: node
                        }
                    });
                    break;
                default:
                    break;
            }
        });
    });
};
