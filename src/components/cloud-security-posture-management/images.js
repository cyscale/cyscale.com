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
                    identityCSPM: file(
                        relativePath: { eq: "identity-cspm.png" }
                    ) {
                        childImageSharp {
                            gatsbyImageData(width: 1080, layout: CONSTRAINED)
                        }
                    }
                    optimizeWorkflow: file(relativePath: { eq: "optimize-workflow-operations-single-dashboard.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1080, layout: CONSTRAINED)
                        }
                    }
                    inventoryGroupedAssets: file(
                        relativePath: { eq: "inventory-grouped-assets.png" }
                    ) {
                        childImageSharp {
                            gatsbyImageData(width: 1080, layout: CONSTRAINED)
                        }
                    }
                    dataSecurityCSPM: file(
                        relativePath: { eq: "data-security-cspm.png" }
                    ) {
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
export const DetectPreventMisconfigurations = withImageData((props) => (
    <Img
        image={props.imageData.policiesCSPM.childImageSharp.gatsbyImageData}
        alt='Detect and Prevent Misconfigurations'
    />
));
export const CutNoise = withImageData((props) => (
    <Img image={props.imageData.inventoryCSPM.childImageSharp.gatsbyImageData} alt='Cut Noise with Single Source Of Truth' />
));
export const AutomateCompliance = withImageData((props) => (
    <Img
        image={props.imageData.identityCSPM.childImageSharp.gatsbyImageData}
        alt='Automate Compliance As Code IAC Continuous Assessment'
    />
));
export const OptimizeWorkflow = withImageData((props) => (
    <Img
        image={props.imageData.optimizeWorkflow.childImageSharp.gatsbyImageData}
        alt='Optimize Workflow Operations Single Dashboard'
    />
));
export const OptimizeCosts = withImageData((props) => (
    <Img
        image={props.imageData.inventoryGroupedAssets.childImageSharp.gatsbyImageData}
        alt='Optimize Costs Reveal and Analyze Cloud Budget and Spendings'
    />
));
export const EliminateSecurityGaps = withImageData((props) => (
    <Img
        image={props.imageData.dataSecurityCSPM.childImageSharp.gatsbyImageData}
        alt='Eliminate Security Gaps Compliance Cloud Security'
    />
));
