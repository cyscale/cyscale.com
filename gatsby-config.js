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
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-remove-serviceworker',
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://cyscale.com/',
                sitemap: 'https://cyscale.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: { exclude: ['/campaigns/**'] }
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
                path: `${__dirname}/src/assets/images`,
                name: 'images'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
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
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://cyscale.com/`,
                stripQueryString: true
            }
        },
        // {
        //     resolve: `gatsby-plugin-gdpr-cookies`,
        //     options: {
        //         googleTagManager: {
        //             trackingId: 'GTM-K6LKHQH',
        //             cookieName: 'CookieConsent'
        //         }
        //     }
        // },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
                id: 'GTM-K6LKHQH'
            }
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/common/netlify.js`
            }
        },
        `gatsby-plugin-meta-redirect`
    ]
};
