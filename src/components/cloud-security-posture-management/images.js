import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

function withImageData(WrappedComponent) {
    return (props) => (
        <StaticQuery
            query={graphql`
                query CSPMImagesQuery {
                    detectMisconfigurations: file(relativePath: { eq: "detect-prevent-misconfigurations.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1080, layout: CONSTRAINED)
                        }
                    }
                    cutNoise: file(relativePath: { eq: "cut-noise-asset-drift-source-of-truth.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1080, layout: CONSTRAINED)
                        }
                    }
                    automateCompliance: file(
                        relativePath: { eq: "automate-compliance-as-code-iac-continuous-assessment.png" }
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
                    optimizeCosts: file(
                        relativePath: { eq: "optimize-costs-reveal-analyze-cloud-budget-spendings.png" }
                    ) {
                        childImageSharp {
                            gatsbyImageData(width: 1080, layout: CONSTRAINED)
                        }
                    }
                    eliminateSecurityGaps: file(
                        relativePath: { eq: "eliminate-security-gaps-compliance-cloud-security.png" }
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
        image={props.imageData.detectMisconfigurations.childImageSharp.gatsbyImageData}
        alt='Detect and Prevent Misconfigurations'
    />
));
export const CutNoise = withImageData((props) => (
    <Img image={props.imageData.cutNoise.childImageSharp.gatsbyImageData} alt='Cut Noise with Single Source Of Truth' />
));
export const AutomateCompliance = withImageData((props) => (
    <Img
        image={props.imageData.automateCompliance.childImageSharp.gatsbyImageData}
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
        image={props.imageData.optimizeCosts.childImageSharp.gatsbyImageData}
        alt='Optimize Costs Reveal and Analyze Cloud Budget and Spendings'
    />
));
export const EliminateSecurityGaps = withImageData((props) => (
    <Img
        image={props.imageData.eliminateSecurityGaps.childImageSharp.gatsbyImageData}
        alt='Eliminate Security Gaps Compliance Cloud Security'
    />
));
