const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const redirects = [
    {
        fromPath: '/blog/ISO%2027001%20certification-standard-policies-procedures',
        toPath: '/blog/ISO-27001-certification-standard-policies-procedures/'
    },
    {
        fromPath: '/blog/cloud-native-application-protection-platform-cnapp-cspm-cwpp',
        toPath: '/blog/cnapp-a-mix-of-cspm-cwpp/'
    },
    {
        fromPath: '/startups',
        toPath: '/security-for-startups-program'
    }
];

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });

        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};

const postsByCategory = {};
const postsPerPage = 3;

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
    const blogAllPostsTemplate = path.resolve(`src/template/blogAllPostsTemplate.js`);

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
                    alldata: node,
                    jobs: posts.map(({ node }) => node.frontmatter.title)
                }
            });
        });
    });

    const whitepaperCover = await graphql(`
        query WhitepaperCover {
            whitepaperCover: file(relativePath: { eq: "whitepaper-cover-blog.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 111, height: 162, layout: FIXED)
                }
            }
        }
    `);

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
                    suggestions: [posts[0], posts[1], posts[2], posts[3]],
                    whitepaperCover: whitepaperCover
                }
            });
        });

        const categoriesWithPosts = Object.keys(postsByCategory);
        const numPages = Math.ceil(allPosts.length / postsPerPage);
        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: blogAllPostsTemplate,
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1,
                    category: 'All',
                    seoTitle: 'Blog - Cyscale',
                    seoDescription: 'Cloud and Data Security Blog',
                    categoriesList: categoriesWithPosts
                }
            });
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

        const categories = result.data.allMarkdownRemark.edges;
        const categoriesWithPosts = Object.keys(postsByCategory);
        categories.forEach((edge) => {
            const node = edge.node;

            if (!node.frontmatter.disabled) {
                // Create category pages
                const numPages = Math.ceil(postsByCategory[node.frontmatter.name].length / postsPerPage);
                Array.from({ length: numPages }).forEach((_, i) => {
                    createPage({
                        path:
                            i === 0
                                ? `/blog/${node.frontmatter.name.toLowerCase()}`
                                : `/blog/${node.frontmatter.name.toLowerCase()}/${i + 1}`,
                        component: path.resolve(`src/template/blogCategoriesTemplate.js`),
                        context: {
                            limit: postsPerPage,
                            skip: i * postsPerPage,
                            numPages,
                            currentPage: i + 1,
                            category: node.frontmatter.name,
                            seoTitle: node.frontmatter.seoTitle,
                            seoDescription: node.frontmatter.seoDescription,
                            categoriesList: categoriesWithPosts
                        }
                    });
                });
            }
        });
    });
};
