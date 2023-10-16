import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const IntegrationsIcons = () => {
    const data = useStaticQuery(graphql`
        query IntegrationsQuery {
            aws: file(relativePath: { eq: "aws-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 40, layout: CONSTRAINED)
                }
            }
            azure: file(relativePath: { eq: "azure-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 40, layout: CONSTRAINED)
                }
            }
            gc: file(relativePath: { eq: "gc-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 40, layout: CONSTRAINED)
                }
            }
            alibaba: file(relativePath: { eq: "alibaba-cloud-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 40, layout: CONSTRAINED)
                }
            }
            okta: file(relativePath: { eq: "okta-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 55, layout: CONSTRAINED)
                }
            }
            googleCloud: file(relativePath: { eq: "google-cloud-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 33, layout: CONSTRAINED)
                }
            }
            azureAD: file(relativePath: { eq: "azure-ad-icon-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 34, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <>
            <GatsbyImage alt='' image={data.aws.childImageSharp.gatsbyImageData} />
            <GatsbyImage alt='' image={data.azure.childImageSharp.gatsbyImageData} />
            <GatsbyImage alt='' image={data.gc.childImageSharp.gatsbyImageData} />
            <GatsbyImage alt='' image={data.alibaba.childImageSharp.gatsbyImageData} />{' '}
            <GatsbyImage alt='' image={data.okta.childImageSharp.gatsbyImageData} />
            <GatsbyImage alt='' image={data.googleCloud.childImageSharp.gatsbyImageData} />
            <GatsbyImage alt='' image={data.azureAD.childImageSharp.gatsbyImageData} />
        </>
    );
};

export default IntegrationsIcons;
