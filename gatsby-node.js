const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const convertReactFilesToMD = require('./convertReactToMd');
const webpack = require(`webpack`);

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        plugins: [
            new webpack.IgnorePlugin({
                resourceRegExp: /^netlify-identity-widget$/
            })
        ]
    });
};

exports.onPreInit = async () => {
    await convertReactFilesToMD();
};

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
        toPath: '/security-for-startups-program/'
    },
    {
        fromPath: '/blog/AWS-SOC%202-Compliance-Checklist-A-Detailed-Guide',
        toPath: '/blog/AWS-SOC-2-Compliance-Checklist-A-Detailed-Guide/'
    },
    {
        fromPath: '/blog/cspm-visibility-compliance-security',
        toPath: '/blog/understanding-cspm-an-essential-guide/'
    }
];

function findNodeByTitle(title, getNodes) {
    const allMarkdownNodes = getNodes().filter((node) => node.internal.type === 'MarkdownRemark');

    for (const markdownNode of allMarkdownNodes) {
        if (markdownNode.frontmatter.title === title) {
            return markdownNode;
        }
    }

    return null;
}

exports.onCreateNode = ({ node, getNode, getNodes, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });

        createNodeField({
            node,
            name: `slug`,
            value: slug
        });

        if (node.frontmatter.templateKey === 'top-articles-category-based' && node.frontmatter.relatedBlogPost) {
            const relatedPostsPermalink = node.frontmatter.relatedBlogPost.map((relatedPost) => {
                const relatedNode = findNodeByTitle(relatedPost.blogPost, getNodes);
                return relatedNode
                    ? { title: relatedNode.frontmatter.title, permalink: relatedNode.frontmatter.permalink }
                    : null;
            });

            createNodeField({
                node,
                name: `relatedPostsPermalink`,
                value: relatedPostsPermalink
            });
        }
    }
};

const postsByCategory = {};
const postsByAuthor = {};
const postsPerPage = 9;

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
    const closedCareerTemplate = path.resolve(`src/template/closedCareerTemplate.js`);
    const blogAllPostsTemplate = path.resolve(`src/template/blogAllPostsTemplate.js`);
    const pagesTemplate = path.resolve(`src/template/pagesTemplate.js`);

    await graphql(`
        query loadClosedCareersQuery {
            allMarkdownRemark(
                sort: { frontmatter: { date: DESC } }
                filter: { frontmatter: { templateKey: { eq: "career-page" }, disabled: { eq: true } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            seoTitle
                            description
                            seoDescription
                            permalink
                        }
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
                component: closedCareerTemplate,
                context: {
                    alldata: node,
                    jobs: posts.map(({ node }) => node.frontmatter.title)
                }
            });
        });
    });

    await graphql(`
        query loadCareersQuery {
            allMarkdownRemark(
                sort: { frontmatter: { date: DESC } }
                filter: { frontmatter: { templateKey: { eq: "career-page" }, disabled: { eq: false } } }
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

    await graphql(`
        query loadPostsQuery {
            allMarkdownRemark(
                sort: { frontmatter: { date: DESC } }
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
                            tableOfContents
                        }
                        rawMarkdownBody
                    }
                }
            }
        }
    `).then(async (result) => {
        if (result.errors) throw result.errors;

        const allPosts = [];
        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach((edge) => {
            const node = edge.node;
            const author = node.frontmatter.authors;
            allPosts.push(edge.node);
            // Get all distinct categories
            node.frontmatter.categories.forEach((category) => {
                if (!postsByCategory[category]) {
                    postsByCategory[category] = [node];
                } else {
                    postsByCategory[category].push(node);
                }
            });

            if (author) {
                if (!postsByAuthor[author]) {
                    postsByAuthor[author] = [node];
                } else {
                    postsByAuthor[author].push(node);
                }
            }

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

        const categoriesWithPosts = Object.keys(postsByCategory);
        const numPages = Math.ceil(allPosts.length / postsPerPage);
        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
                component: blogAllPostsTemplate,
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1,
                    category: 'All',
                    seoTitle: i === 0 ? 'Blog - Cyscale' : `Blog Page ${i + 1} - Cyscale`,
                    seoDescription: 'Cloud and Data Security Blog',
                    categoriesList: categoriesWithPosts,
                    heading: 'All you need to know about protecting SaaS apps and data in the cloud'
                }
            });
        });
    });

    await graphql(`
        query loadCategoriesQuery {
            allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "category" } } }) {
                edges {
                    node {
                        frontmatter {
                            name
                            slug
                            seoTitle
                            seoDescription
                            heading
                            disabled
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) throw result.errors;

        const categories = result.data.allMarkdownRemark.edges;
        const categoriesWithPosts = Object.keys(postsByCategory);
        categories.forEach((edge) => {
            const node = edge.node;

            if (!node.frontmatter.disabled) {
                // Create category pages
                const numPages = Math.ceil(postsByCategory[node.frontmatter.name]?.length / postsPerPage);
                Array.from({ length: numPages }).forEach((_, i) => {
                    createPage({
                        path:
                            i === 0
                                ? `/blog/${node.frontmatter.slug.toLowerCase()}/`
                                : `/blog/${node.frontmatter.slug.toLowerCase()}/${i + 1}`,
                        component: path.resolve(`src/template/blogCategoriesTemplate.js`),
                        context: {
                            limit: postsPerPage,
                            skip: i * postsPerPage,
                            numPages,
                            currentPage: i + 1,
                            category: node.frontmatter.name,
                            seoTitle: node.frontmatter.seoTitle,
                            seoDescription: node.frontmatter.seoDescription,
                            heading: node.frontmatter.heading,
                            categoriesList: categoriesWithPosts,
                            categorySlug: node.frontmatter.name.toLowerCase().split(' ').join('-')
                        }
                    });
                });
            }
        });
    });

    await graphql(`
        query loadAuthorsQuery {
            allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "authors" } } }) {
                edges {
                    node {
                        frontmatter {
                            name
                            position
                            linkedin
                            description
                            slug
                            metaTitle
                            metaDescription
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            throw result.errors;
        }

        const authors = result.data.allMarkdownRemark.edges;

        authors.forEach((edge) => {
            const node = edge.node;

            if (!node.frontmatter.disabled) {
                const numPages = Math.ceil(postsByAuthor[node.frontmatter.name]?.length / postsPerPage);
                Array.from({ length: numPages }).forEach((_, i) => {
                    createPage({
                        path:
                            i === 0
                                ? `/blog/${node.frontmatter.slug.toLowerCase()}/`
                                : `/blog/${node.frontmatter.slug.toLowerCase()}/${i + 1}`,
                        component: path.resolve(`src/template/authorPageTemplate.js`),
                        context: {
                            limit: postsPerPage,
                            skip: i * postsPerPage,
                            numPages,
                            currentPage: i + 1,
                            authors: node.frontmatter.name,
                            seoTitle: node.frontmatter.metaTitle,
                            seoDescription: node.frontmatter.metaDescription,
                            authorSlug: node.frontmatter.slug
                        }
                    });
                });
            }
        });
    });

    await graphql(`
        query Pages {
            allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "pages" } } }) {
                edges {
                    node {
                        frontmatter {
                            pageName
                            path
                            title
                            description
                            categoryPath
                            sections
                            hero {
                                heroBackground
                                heroImage {
                                    publicURL
                                    childImageSharp {
                                        gatsbyImageData(width: 1920, layout: CONSTRAINED)
                                    }
                                }
                                heroImageAlt
                                heroTitle
                                customComponents
                                heroMarkdown
                            }
                            textImageRow {
                                rowStartGridCols
                                rowEndGridCols
                                rowImagePosition
                                rowImage {
                                    publicURL
                                    childImageSharp {
                                        gatsbyImageData(width: 1920, layout: CONSTRAINED)
                                    }
                                }
                                rowAlt
                                rowSubtitle
                                customComponents
                                rowMarkdown
                                rowBackground
                            }
                            secondTextImageRow {
                                rowStartGridCols
                                rowEndGridCols
                                rowImagePosition
                                rowImage {
                                    publicURL
                                    childImageSharp {
                                        gatsbyImageData(width: 1920, layout: CONSTRAINED)
                                    }
                                }
                                rowAlt
                                rowSubtitle
                                customComponents
                                rowMarkdown
                                rowBackground
                            }
                            featuresSection {
                                featureTitle
                                featureText
                            }
                            ctaSection {
                                ctaMarkdown
                            }
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            reporter.panicOnBuild(`There was an error loading your pages`, result.errors);
            return;
        }

        const pages = result.data.allMarkdownRemark.edges;

        if (pages.length > 0) {
            pages.forEach((edge) => {
                const node = edge.node;

                createPage({
                    path: `/${node.frontmatter.categoryPath}/${node.frontmatter.path}/`,
                    component: pagesTemplate,
                    context: {
                        alldata: node
                    }
                });
            });
        }
    });
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    createTypes(`
    type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        rawMarkdownBody: String
    }
    
    type Frontmatter {
        templateKey: String
        pageName: String   
        path: String
        title: String
        description: String
        categoryPath: String
        sections: [String]
        hero: Hero
        textImageRow: [TextImageRow]
        secondTextImageRow: [TextImageRow]
        featuresSection: [FeaturesSection]
        ctaSection: CTA
        authors: String
        categories: [String]
        title: String
        description: String
        seoDescription: String
        date: Date @dateformat
        permalink: String
        featuredimage: File @fileByRelativePath
        featuredpost: Boolean
        tableOfContents: Boolean
    }
    
    type Hero {
        heroBackground: String
        heroImage: File @fileByRelativePath
        heroImageAlt: String
        heroTitle: String
        customComponents: Boolean
        heroMarkdown: String
    }
    
     type TextImageRow {
        rowStartGridCols: String
        rowEndGridCols: String
        rowImagePosition: String
        rowImage: File @fileByRelativePath
        rowAlt: String
        rowSubtitle: String
        customComponents: Boolean
        rowMarkdown: String
        rowBackground: String
    }
    
    type FeaturesSection {
        featureTitle: String
        featureText: String
    }
    
    type CTA {
        ctaMarkdown: String
    }
  `);
};
