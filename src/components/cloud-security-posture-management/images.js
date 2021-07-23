import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function withImageData(WrappedComponent) {
    return props => (
        <StaticQuery
            query={graphql`
                query CSPMImagesQuery {
                    detectMisconfigurations: file(relativePath: { eq: "detect-prevent-misconfigurations.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1080, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    cutNoise: file(relativePath: { eq: "cut-noise-asset-drift-source-of-truth.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1080, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    automateCompliance: file(relativePath: { eq: "automate-compliance-as-code-iac-continuous-assessment.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1080, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    optimizeWorkflow: file(relativePath: { eq: "optimize-workflow-operations-single-dashboard.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1080, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    optimizeCosts: file(relativePath: { eq: "optimize-costs-reveal-analyze-cloud-budget-spendings.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1080, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    eliminateSecurityGaps: file(relativePath: { eq: "eliminate-security-gaps-compliance-cloud-security.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1080, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                }
            `}
            render={data => <WrappedComponent {...props} imageData={data} />}
        />
    );
}
export const DetectPreventMisconfigurations = withImageData(props => (
    <Img fluid={props.imageData.detectMisconfigurations.childImageSharp.fluid} alt='Detect and Prevent Misconfigurations' />
));
export const CutNoise = withImageData(props => (
    <Img fluid={props.imageData.cutNoise.childImageSharp.fluid} alt='Cut Noise with Single Source Of Truth' />
));
export const AutomateCompliance = withImageData(props => (
    <Img fluid={props.imageData.automateCompliance.childImageSharp.fluid} alt='Automate Compliance As Code IAC Continuous Assessment' />
));
export const OptimizeWorkflow = withImageData(props => (
    <Img fluid={props.imageData.optimizeWorkflow.childImageSharp.fluid} alt='Optimize Workflow Operations Single Dashboard' />
));
export const OptimizeCosts = withImageData(props => (
    <Img fluid={props.imageData.optimizeCosts.childImageSharp.fluid} alt='Optimize Costs Reveal and Analyze Cloud Budget and Spendings' />
));
export const EliminateSecurityGaps = withImageData(props => (
    <Img fluid={props.imageData.eliminateSecurityGaps.childImageSharp.fluid} alt='Eliminate Security Gaps Compliance Cloud Security' />
));