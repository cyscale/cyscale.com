import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

function withImageData(WrappedComponent) {
    return (props) => (
        <StaticQuery
            query={graphql`
                query CSPMImagesQuery {
                    policiesCSPM: file(relativePath: { eq: "policies-cspm.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1080, layout: CONSTRAINED)
                        }
                    }
                    inventoryCSPM: file(relativePath: { eq: "inventory-cspm.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1080, layout: CONSTRAINED)
                        }
                    }
                    identityCSPM: file(relativePath: { eq: "identity-cspm.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1080, layout: CONSTRAINED)
                        }
                    }
                    inventoryGroupedAssets: file(relativePath: { eq: "inventory-grouped-assets.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1080, layout: CONSTRAINED)
                        }
                    }
                    inventoryGraph: file(relativePath: { eq: "inventory-graph-cspm.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1080, layout: CONSTRAINED)
                        }
                    }
                    dataSecurityCSPM: file(relativePath: { eq: "data-security-cspm.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1080, layout: CONSTRAINED)
                        }
                    }
                }
            `}
            render={(data) => <WrappedComponent {...props} imageData={data} />}
        />
    );
}
export const Policies = withImageData((props) => (
    <Img image={props.imageData.policiesCSPM.childImageSharp.gatsbyImageData} alt='' />
));
export const Inventory = withImageData((props) => (
    <Img image={props.imageData.inventoryCSPM.childImageSharp.gatsbyImageData} alt='' />
));
export const Identity = withImageData((props) => (
    <Img image={props.imageData.identityCSPM.childImageSharp.gatsbyImageData} alt='' />
));
export const InventoryGraph = withImageData((props) => (
    <Img image={props.imageData.inventoryGraph.childImageSharp.gatsbyImageData} alt='' />
));
export const InventoryGroupedAssets = withImageData((props) => (
    <Img image={props.imageData.inventoryGroupedAssets.childImageSharp.gatsbyImageData} alt='' />
));
export const DataSecurity = withImageData((props) => (
    <Img image={props.imageData.dataSecurityCSPM.childImageSharp.gatsbyImageData} alt='' />
));
