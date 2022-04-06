const path = require(`path`);

const redirects = [
    {
        fromPath: '/blog/ISO%2027001%20certification-standard-policies-procedures',
        toPath: '/blog/ISO-27001-certification-standard-policies-procedures/'
    },
    {
        fromPath: '/blog/cloud-native-application-protection-platform-cnapp-cspm-cwpp',
        toPath: '/blog/cnapp-a-mix-of-cspm-cwpp/'
    }
];

exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;

    for (let i = 0; i < redirects.length; i++) {
        createRedirect({
            fromPath: redirects[i].fromPath,
            toPath: redirects[i].toPath,
            isPermanent: true,
            redirectInBrowser: true
        });
        createRedirect({
            fromPath: redirects[i].fromPath + '/',
            toPath: redirects[i].toPath,
            isPermanent: true,
            redirectInBrowser: true
        });
    }

    const blogTemplate = path.resolve(`src/template/blogTemplate.js`);
    const careerTemplate = path.resolve(`src/template/careerTemplate.js`);
    const blogCategoryTemplate = path.resolve(`src/template/blogCategoryTemplate.js`);

    await graphql(`
        query loadCareersQuery {
            allMarkdownRemark(
                sort: { order: DESC, fields: frontmatter___date }
                filter: { frontmatter: { templateKey: { eq: "career-page" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            seoTitle
                            description
                            seoDescription
                            date
                            department
                            location
                            workType
                            permalink
                            employmentType
                            experience
                            skills
                            disabled
                        }
                        rawMarkdownBody
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) throw result.errors;

        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach((edge) => {
            const node = edge.node;
            createPage({
                // Path for this page — required
                path: '/careers/' + node.frontmatter.permalink + '/',
                component: careerTemplate,
                context: {
                    alldata: node
                }
            });
        });
    });

    await graphql(
        `
            query loadPostsQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: frontmatter___date }
                    filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
                ) {
                    edges {
                        node {
                            frontmatter {
                                authors
                                categories
                                title
                                seoTitle
                                description
                                seoDescription
                                date
                                featuredpost
                                permalink
                                featuredimage {
                                    publicURL
                                    childImageSharp {
                                        gatsbyImageData(width: 820, layout: CONSTRAINED)
                                    }
                                }
                            }
                            rawMarkdownBody
                        }
                    }
                }
            }
        `
    ).then(async (result) => {
        if (result.errors) throw result.errors;

        const allPosts = [];
        const postsByCategory = {};
        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach((edge) => {
            const node = edge.node;
            allPosts.push(edge.node);
            // Get all distinct categories
            node.frontmatter.categories.forEach((category) => {
                if (!postsByCategory[category]) {
                    postsByCategory[category] = [node];
                } else {
                    postsByCategory[category].push(node);
                }
            });

            createPage({
                // Path for this page — required
                path: '/blog/' + node.frontmatter.permalink + '/',
                component: blogTemplate,
                context: {
                    alldata: node,
                    suggestions: [posts[0], posts[1], posts[2], posts[3]]
                }
            });
        });

        await graphql(
            `
                query loadCategoriesQuery {
                    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "category" } } }) {
                        edges {
                            node {
                                frontmatter {
                                    name
                                    slug
                                    seoTitle
                                    seoDescription
                                    disabled
                                }
                            }
                        }
                    }
                }
            `
        ).then((result) => {
            if (result.errors) throw result.errors;

            const categoriesWithPosts = Object.keys(postsByCategory);
            const categories = result.data.allMarkdownRemark.edges;

            categories.forEach((edge) => {
                const node = edge.node;

                if (!node.frontmatter.disabled) {
                    // Create category pages
                    createPage({
                        path: '/blog/' + node.frontmatter.name.toLowerCase() + '/',
                        component: blogCategoryTemplate,
                        context: {
                            category: node.frontmatter.name,
                            seoTitle: node.frontmatter.seoTitle,
                            posts: postsByCategory[node.frontmatter.name],
                            seoDescription: node.frontmatter.seoDescription,
                            categoriesList: categoriesWithPosts
                        }
                    });
                }
            });

            createPage({
                path: '/blog/',
                component: blogCategoryTemplate,
                context: {
                    posts: allPosts,
                    category: 'All',
                    seoTitle: 'Blog - Cyscale',
                    seoDescription: 'Cloud and Data Security Blog',
                    categoriesList: categoriesWithPosts
                }
            });
        });
    });
};
