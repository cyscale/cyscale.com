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
                            include: ['featuredimage']
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
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Montserrat:400,500,600,700`,
                ],
                display: 'swap'
            }
        }
    ]
};
