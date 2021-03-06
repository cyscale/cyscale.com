module.exports = {
    siteMetadata: {
        company: 'Cyscale',
        title: `Cyscale Power Cloud Platform`,
        description: `Cyscale Power Cloud Platform supports all major providers: Amazon Web Services, Microsoft Azure, Google Cloud (soon Oracle and IBM Cloud).`,
        social: {
            twitter: `cyscale`,
            linkedin: `cyscale`,
            facebook: `cyscale`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-145426770-1',
                head: true,
                anonymize: true,
            },
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: 'pixel id here',
            },
        },
        `gatsby-plugin-offline`,
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: false,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'images',
            },
        },
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
                src: '//js.hsforms.net/forms/shell.js',
            },
        },
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
                src: '//js.hs-scripts.com/5413427.js',
            },
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
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1140,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        'gatsby-plugin-netlify',
    ],
}
