const striptags = require('striptags');
const MarkdownIt = require('markdown-it');

const myQuery = `
    query {
      searches: allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              templateKey
              title
              description
              permalink
              categoryPath
              path
              sections
              hero {
                heroBackground
                heroImageAlt
                heroTitle
                customComponents
                heroMarkdown
              }
              textImageRow {
                rowStartGridCols
                rowEndGridCols
                rowImagePosition
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
            rawMarkdownBody
          }
        }
      }
    }
`;

const queries = [
    {
        query: myQuery,
        queryVariables: {},
        transformer: ({ data }) => {
            const CMSPages = data.searches.edges
                .filter(({ node }) => node.frontmatter.templateKey === 'pages')
                .map(({ node }) => {
                    let content = '';

                    node.frontmatter.sections.forEach((item) => {
                        if (item === 'hero') {
                            content += node.frontmatter.hero.heroTitle;
                            content += node.frontmatter.hero.heroMarkdown;
                        }

                        if (item === 'textImageRow') {
                            node.frontmatter.textImageRow.forEach((textImageRow) => {
                                content += textImageRow.rowSubtitle;
                            });
                        }

                        if (item === 'secondTextImageRow') {
                            node.frontmatter.secondTextImageRow.forEach((secondTextImageRow) => {
                                content += secondTextImageRow.rowSubtitle;
                                content += secondTextImageRow.rowMarkdown;
                            });
                        }

                        if (item === 'featuresSection') {
                            node.frontmatter.featuresSection.forEach((featuresSection) => {
                                content += featuresSection.featureTitle;
                                content += featuresSection.featureText;
                            });
                        }

                        if (item === 'ctaSection') {
                            content += node.frontmatter.ctaSection.ctaMarkdown;
                        }
                    });

                    return {
                        objectID: node.id,
                        title: node.frontmatter.title,
                        templateKey: node.frontmatter.templateKey,
                        description: node.frontmatter.description,
                        permalink: `/${node.frontmatter.categoryPath}/${node.frontmatter.path}`,
                        content: striptags(new MarkdownIt().render(striptags(content))),
                        category: 'website'
                    };
                });

            const blogs = data.searches.edges
                .filter(
                    ({ node }) =>
                        node.frontmatter.templateKey === 'blog-post' ||
                        node.frontmatter.templateKey === 'hardcoded-pages'
                )
                .map(({ node }) => {
                    return {
                        objectID: node.id,
                        title: node.frontmatter.title,
                        templateKey: node.frontmatter.templateKey,
                        description: node.frontmatter.description,
                        permalink:
                            node.frontmatter.templateKey === 'blog-post'
                                ? /blog/ + node.frontmatter.permalink
                                : node.frontmatter.permalink,
                        content: striptags(new MarkdownIt().render(striptags(node.rawMarkdownBody))),
                        category: node.frontmatter.templateKey === 'blog-post' ? 'blog' : 'website'
                    };
                });
            return [...blogs, ...CMSPages];
        }
    }
];

module.exports = {
    siteMetadata: {
        title: 'Cyscale',
        siteUrl: 'https://cyscale.com/',
        description:
            'Map all your cloud assets across providers in under 5 mins. Optimize costs, ensure cloud security, and prove compliance with the scalable Cyscale CSPM.'
    },
    plugins: [
        `gatsby-plugin-image`,
        'gatsby-plugin-sass',
        'gatsby-plugin-postcss',
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-meta-redirect`,
        'gatsby-plugin-remove-serviceworker',
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://cyscale.com/',
                sitemap: 'https://cyscale.com/sitemap-index.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: { excludes: ['/campaigns/**'], output: '/' }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/
                }
            }
        },
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            strategy: 'cdn',
                            family: 'Roboto',
                            fontDisplay: 'swap',
                            variants: ['400', '500', '600', '700']
                        },
                        {
                            strategy: 'cdn',
                            fontDisplay: 'swap',
                            family: 'Roboto Mono',
                            variants: ['400', '500', '600', '700']
                        },
                        {
                            strategy: 'cdn',
                            fontDisplay: 'swap',
                            family: 'Montserrat',
                            variants: ['400', '500', '600', '700']
                        },
                        {
                            strategy: 'cdn',
                            family: 'Hind',
                            fontDisplay: 'swap',
                            variants: ['400', '500', '600', '700']
                        }
                    ]
                },
                useMinify: true,
                usePreload: true,
                usePreconnect: true
            }
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://cyscale.com/`,
                stripQueryString: true
            }
        },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
                id: 'GTM-K6LKHQH'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/assets/images`,
                name: 'images'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/markdown`,
                name: 'markdown'
            }
        },

        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    quality: 100,
                    placeholder: `none`
                }
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            staticFolderName: 'static',
                            include: ['featuredimage', 'hero.heroImage', 'textImageRow', 'secondTextImageRow']
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1080
                        }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/common/netlify.js`
            }
        },
        {
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: `appId`,
                apiKey: `apiKey`,
                indexName: `indexName`,
                queries,
                chunkSize: 10000,
                concurrentQueries: true,
                dryRun: false,
                continueOnFailure: false,
                algoliasearchOptions: undefined
            }
        }
    ]
};
