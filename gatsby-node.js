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

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;

    for(let i=0; i< redirects.length; i++){
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
                                date
                                featuredpost
                                templateKey
                                permalink
                                title
                                tags
                                location
                                workType
                                employmentType
                                experience
                                skills
                                disabled
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

        posts.forEach((edge) => {
            const node = edge.node;

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
