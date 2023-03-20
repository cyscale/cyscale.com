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
                            gatsbyImageData(width: 1920, layout: CONSTRAINED)
                        }
                    }
                    inventoryCSPM: file(relativePath: { eq: "inventory-cspm.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1920, layout: CONSTRAINED)
                        }
                    }
                    alertsCSPM: file(relativePath: { eq: "alerts-cspm.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1920, layout: CONSTRAINED)
                        }
                    }
                    inventoryGroupedAssets: file(relativePath: { eq: "inventory-grouped-assets.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1920, layout: CONSTRAINED)
                        }
                    }
                    inventoryGraph: file(relativePath: { eq: "inventory-graph-cspm.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1920, layout: CONSTRAINED)
                        }
                    }
                    dashboardCSPM: file(relativePath: { eq: "dashboard-cspm.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1920, layout: CONSTRAINED)
                        }
                    }
                }
            `}
            render={(data) => <WrappedComponent {...props} imageData={data} />}
        />
    );
}
export const Policies = withImageData((props) => (
    <Img
        image={props.imageData.policiesCSPM.childImageSharp.gatsbyImageData}
        alt=' Policies view with compliance score'
    />
));
export const Inventory = withImageData((props) => (
    <Img
        image={props.imageData.inventoryCSPM.childImageSharp.gatsbyImageData}
        alt='Inventory view with assets and risk information'
    />
));
export const Alerts = withImageData((props) => (
    <Img image={props.imageData.alertsCSPM.childImageSharp.gatsbyImageData} alt='Alerts view' />
));
export const InventoryGraph = withImageData((props) => (
    <Img image={props.imageData.inventoryGraph.childImageSharp.gatsbyImageData} alt='Graph view' />
));
export const InventoryGroupedAssets = withImageData((props) => (
    <Img
        image={props.imageData.inventoryGroupedAssets.childImageSharp.gatsbyImageData}
        alt='Inventory view with assets and risk information'
    />
));
export const Dashboard = withImageData((props) => (
    <Img
        image={props.imageData.dashboardCSPM.childImageSharp.gatsbyImageData}
        alt='Dashboard view with multi-cloud environments'
    />
));
