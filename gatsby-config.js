module.exports = {
    siteMetadata: {
        title: 'Cyscale',
        siteUrl: 'https://cyscale.com/',
        description:
            'Map all your cloud assets across providers in under 5 mins. Optimize costs, ensure cloud security, and prove compliance with the scalable Cyscale CSPM.'
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-postcss',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-remove-serviceworker',
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://cyscale.com/',
                sitemap: 'https://cyscale.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/', }]
            }
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                develop: true,
                printRejected: true,
                ignore: [
                    'slick-carousel/slick/slick.css',
                    'react-tabs/style/react-tabs.css',
                    'slick-carousel/slick/slick-theme.css'
                ],
                purgeOnly: ['bootstrap/']
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
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'images'
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads'
                        }
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048
                        }
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static'
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-hotjar`,
            options: {
                sv: 6,
                id: 2375755,
                includeInDevelopment: false
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                head: true,
                trackingId: 'UA-145426770-1'
            }
        },
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
                src: '//js.hsforms.net/forms/shell.js'
            }
        },
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
                src: '//js.hs-scripts.com/5413427.js'
            }
        },
        {
            resolve: 'gatsby-plugin-netlify-cms'
        }
    ]
};
