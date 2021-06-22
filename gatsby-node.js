const path = require(`path`);

//doc dynamic
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
                            }
                            rawMarkdownBody
                        }
                    }
                }
            }
        `
    ).then(result => {
        if (result.errors) {
            throw result.errors;
        }
        const posts = result.data.allMarkdownRemark.edges;

        posts.map(edge => {
            const node = edge.node;
            switch (node.frontmatter.templateKey) {
                case 'blog-post':
                    createPage({
                        // Path for this page — required
                        path: '/blog/' + node.frontmatter.permalink,
                        component: blogTemplate,
                        context: {
                            alldata: node
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
