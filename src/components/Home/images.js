import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function withImageData(WrappedComponent) {
    return props => (
        <StaticQuery
            query={graphql`
                query ImagesQuery {
                    cyscaleSecurityKnowledgeGraph: file(relativePath: { eq: "cyscale-security-knowledge-graph.png" }) {
                        childImageSharp {
                            fixed(width: 600, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    cloudNativeDigitalAssetsInventory: file(
                        relativePath: { eq: "cloud-native-digital-assets-inventory.png" }
                    ) {
                        childImageSharp {
                            fixed(width: 600, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    remoteWorkWftCompliance: file(relativePath: { eq: "remote-work-wft-compliance.png" }) {
                        childImageSharp {
                            fixed(width: 600, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    automatedEvidenceCollectionDataGathering: file(
                        relativePath: { eq: "automated-evidence-collection-data-gathering.png" }
                    ) {
                        childImageSharp {
                            fixed(width: 600, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    iso27001ComplianceAudit: file(relativePath: { eq: "iso-27001-compliance-audit.png" }) {
                        childImageSharp {
                            fixed(height: 75, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    aicpaSoc2ComplianceAudit: file(relativePath: { eq: "aicpa-soc2-compliance-audit.png" }) {
                        childImageSharp {
                            fixed(height: 75, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    cisBenchmarksCloudCompliance: file(relativePath: { eq: "cis-benchmarks-cloud-compliance.png" }) {
                        childImageSharp {
                            fixed(height: 75, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    euEuropeanGdprCompliance: file(relativePath: { eq: "eu-european-gdpr-compliance.png" }) {
                        childImageSharp {
                            fixed(height: 75, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    usHipaaHealthInsurancePortabilityAccountabilityAct: file(
                        relativePath: { eq: "us-hipaa-health-insurance-portability-accountability-act.png" }
                    ) {
                        childImageSharp {
                            fixed(height: 75, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    pciDssCompliance: file(relativePath: { eq: "pci-dss-compliance.png" }) {
                        childImageSharp {
                            fixed(height: 75, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    nistCompliance: file(relativePath: { eq: "nist-compliance.png" }) {
                        childImageSharp {
                            fixed(height: 75, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    iso27001ComplianceAuditSmall: file(relativePath: { eq: "iso-27001-compliance-audit.png" }) {
                        childImageSharp {
                            fixed(height: 45, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    aicpaSoc2ComplianceAuditSmall: file(relativePath: { eq: "aicpa-soc2-compliance-audit.png" }) {
                        childImageSharp {
                            fixed(height: 45, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    cisBenchmarksCloudComplianceSmall: file(
                        relativePath: { eq: "cis-benchmarks-cloud-compliance.png" }
                    ) {
                        childImageSharp {
                            fixed(height: 45, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    euEuropeanGdprComplianceSmall: file(relativePath: { eq: "eu-european-gdpr-compliance.png" }) {
                        childImageSharp {
                            fixed(height: 45, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    usHipaaHealthInsurancePortabilityAccountabilityActSmall: file(
                        relativePath: { eq: "us-hipaa-health-insurance-portability-accountability-act.png" }
                    ) {
                        childImageSharp {
                            fixed(height: 45, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    pciDssComplianceSmall: file(relativePath: { eq: "pci-dss-compliance.png" }) {
                        childImageSharp {
                            fixed(height: 45, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    nistComplianceSmall: file(relativePath: { eq: "nist-compliance.png" }) {
                        childImageSharp {
                            fixed(height: 45, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    docker: file(relativePath: { eq: "integration-docker-container-registry-security-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    oracle: file(
                        relativePath: { eq: "integration-oracle-cloud-infrastructure-oci-security-logo.png" }
                    ) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    snyk: file(relativePath: { eq: "integration-snyk-source-code-vulnerability-management-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    teams: file(relativePath: { eq: "notifications-collaboration-communication-microsoft-teams.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    aws: file(relativePath: { eq: "integration-amazon-web-services-aws-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    github: file(relativePath: { eq: "integration-github-source-code-security-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    gitlab: file(
                        relativePath: { eq: "integration-gitlab-source-code-intellectual-property-protection-logo.png" }
                    ) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    kubernetes: file(relativePath: { eq: "integration-kubernetes-cluster-k8s-security-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    azure: file(relativePath: { eq: "integration-microsoft-azure-cloud-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    gcp: file(relativePath: { eq: "integration-google-cloud-platform-gcp-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    alibaba: file(relativePath: { eq: "integration-alibaba-aliyun-cloud-security-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    slack: file(relativePath: { eq: "notifications-collaboration-slack.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    jamf: file(relativePath: { eq: "integration-jamf-enterprise-endpoint-management-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    snowflake: file(relativePath: { eq: "integration-snowflake-cloud-data-security-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    veracode: file(relativePath: { eq: "integration-veracode-appsec-vulnerability-security-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    jira: file(relativePath: { eq: "integration-jira-confluence-atlassian-remote-work-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    crowdstrike: file(relativePath: { eq: "integration-crowdstrike-cloud-endpoint-protection-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    jumpcloud: file(relativePath: { eq: "integration-jumpcloud-cloud-identity-provider-security-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    tenable: file(relativePath: { eq: "integration-tenable-cloud-vulnerability-management-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    okta: file(relativePath: { eq: "integration-okta-cloud-identity-provider-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    vmware: file(relativePath: { eq: "integration-vmware-cloud-aws-gcp-azure-security.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    gsuite: file(relativePath: { eq: "integration-g-suite-google-workspaces-cloud-identity-security-logo.png" }) {
                        childImageSharp {
                            fixed(width: 110, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                }
            `}
            render={data => <WrappedComponent {...props} imageData={data} />}
        />
    );
}

export const SecurityKnowledgeGraph = withImageData(props => (
    <Img fixed={props.imageData.cyscaleSecurityKnowledgeGraph.childImageSharp.fixed} alt='Security Knowledge Graph™' />
));
export const CloudNative = withImageData(props => (
    <Img
        fixed={props.imageData.cloudNativeDigitalAssetsInventory.childImageSharp.fixed}
        alt='Real-time cloud inventor'
    />
));
export const RemoteWorkWft = withImageData(props => (
    <Img fixed={props.imageData.remoteWorkWftCompliance.childImageSharp.fixed} alt='Remote work compliance' />
));
export const DataGathering = withImageData(props => (
    <Img
        fixed={props.imageData.automatedEvidenceCollectionDataGathering.childImageSharp.fixed}
        alt='Automated evidence collection'
    />
));

export const ISO27001 = withImageData(props => (
    <Img fixed={props.imageData.iso27001ComplianceAudit.childImageSharp.fixed} alt='ISO 27001 Compliance Audit' />
));
export const AicpaSoc2 = withImageData(props => (
    <Img fixed={props.imageData.aicpaSoc2ComplianceAudit.childImageSharp.fixed} alt='AICPA SOC 2 Compliance Audit' />
));
export const CisBenchmarks = withImageData(props => (
    <Img
        fixed={props.imageData.cisBenchmarksCloudCompliance.childImageSharp.fixed}
        alt='CIS Benchmarks Cloud Compliance'
    />
));
export const EuEuropeanGdpr = withImageData(props => (
    <Img fixed={props.imageData.euEuropeanGdprCompliance.childImageSharp.fixed} alt='EU European GDPR Compliance' />
));
export const USHipaa = withImageData(props => (
    <Img
        fixed={props.imageData.usHipaaHealthInsurancePortabilityAccountabilityAct.childImageSharp.fixed}
        alt='US HIPAA health Insurance Portability Accountability Act'
    />
));
export const PciDss = withImageData(props => (
    <Img
        fixed={props.imageData.pciDssCompliance.childImageSharp.fixed}
        alt='PCI DSS Payment Card Industry Data Security Standard'
    />
));
export const Nist = withImageData(props => (
    <Img
        fixed={props.imageData.nistCompliance.childImageSharp.fixed}
        alt='NIST National Institute of Standards and Technology'
    />
));
export const ISO27001Small = withImageData(props => (
    <Img fixed={props.imageData.iso27001ComplianceAuditSmall.childImageSharp.fixed} alt='ISO 27001 Compliance Audit' />
));
export const AicpaSoc2Small = withImageData(props => (
    <Img
        fixed={props.imageData.aicpaSoc2ComplianceAuditSmall.childImageSharp.fixed}
        alt='AICPA SOC 2 Compliance Audit'
    />
));
export const CisBenchmarksSmall = withImageData(props => (
    <Img
        fixed={props.imageData.cisBenchmarksCloudComplianceSmall.childImageSharp.fixed}
        alt='CIS Benchmarks Cloud Compliance'
    />
));
export const EuEuropeanGdprSmall = withImageData(props => (
    <Img
        fixed={props.imageData.euEuropeanGdprComplianceSmall.childImageSharp.fixed}
        alt='EU European GDPR Compliance'
    />
));
export const USHipaaSmall = withImageData(props => (
    <Img
        fixed={props.imageData.usHipaaHealthInsurancePortabilityAccountabilityActSmall.childImageSharp.fixed}
        alt='US HIPAA health Insurance Portability Accountability Act'
    />
));
export const PciDssSmall = withImageData(props => (
    <Img
        fixed={props.imageData.pciDssComplianceSmall.childImageSharp.fixed}
        alt='PCI DSS Payment Card Industry Data Security Standard'
    />
));
export const NistSmall = withImageData(props => (
    <Img
        fixed={props.imageData.nistComplianceSmall.childImageSharp.fixed}
        alt='NIST National Institute of Standards and Technology'
    />
));
export const Docker = withImageData(props => (
    <Img
        fixed={props.imageData.docker.childImageSharp.fixed}
        alt='Integration Docker Container'
    />
));
export const Oracle = withImageData(props => (
    <Img
        fixed={props.imageData.oracle.childImageSharp.fixed}
        alt='Integration Oracle Cloud Infrastructure OCI Security'
    />
));
export const Snyk = withImageData(props => (
    <Img
        fixed={props.imageData.snyk.childImageSharp.fixed}
        alt='Integration Snyk Source Code Vulnerability Management'
    />
));
export const Teams = withImageData(props => (
    <Img
        fixed={props.imageData.teams.childImageSharp.fixed}
        alt='Notifications and Collaboration Microsoft Teams'
    />
));
export const AWS = withImageData(props => (
    <Img
        fixed={props.imageData.aws.childImageSharp.fixed}
        alt='Amazon Web Services (AWS)'
    />
));
export const Github = withImageData(props => (
    <Img
        fixed={props.imageData.github.childImageSharp.fixed}
        alt='Github Source Code'
    />
));
export const Gitlab = withImageData(props => (
    <Img
        fixed={props.imageData.gitlab.childImageSharp.fixed}
        alt='Gitlab Source Code'
    />
));
export const Kubernetes = withImageData(props => (
    <Img
        fixed={props.imageData.kubernetes.childImageSharp.fixed}
        alt='Kubernetes Cluster (k8s)'
    />
));
export const Azure = withImageData(props => (
    <Img
        fixed={props.imageData.azure.childImageSharp.fixed}
        alt='Microsoft Azure Cloud'
    />
));
export const GCP = withImageData(props => (
    <Img
        fixed={props.imageData.gcp.childImageSharp.fixed}
        alt='Google Cloud Platform (GCP)'
    />
));
export const Alibaba = withImageData(props => (
    <Img
        fixed={props.imageData.alibaba.childImageSharp.fixed}
        alt='Alibaba Aliyun'
    />
));
export const Slack = withImageData(props => (
    <Img
        fixed={props.imageData.slack.childImageSharp.fixed}
        alt='Notifications and Collaboration Slack'
    />
));
export const Jamf = withImageData(props => (
    <Img
        fixed={props.imageData.jamf.childImageSharp.fixed}
        alt='Jamf Enterprise Endpoint Management'
    />
));
export const Snowflake = withImageData(props => (
    <Img
        fixed={props.imageData.snowflake.childImageSharp.fixed}
        alt='Snowflake Cloud Data Security'
    />
));
export const Veracode = withImageData(props => (
    <Img
        fixed={props.imageData.veracode.childImageSharp.fixed}
        alt='Veracode Appsec Vulnerability'
    />
));
export const Jira = withImageData(props => (
    <Img
        fixed={props.imageData.jira.childImageSharp.fixed}
        alt='Jira Confluence Atlassian Remote Work'
    />
));
export const Crowdstrike = withImageData(props => (
    <Img
        fixed={props.imageData.crowdstrike.childImageSharp.fixed}
        alt='Crowdstrike Cloud Endpoint Protection'
    />
));
export const Jumpcloud = withImageData(props => (
    <Img
        fixed={props.imageData.jumpcloud.childImageSharp.fixed}
        alt='Jumpcloud Identity Provider'
    />
));
export const Tenable = withImageData(props => (
    <Img
        fixed={props.imageData.tenable.childImageSharp.fixed}
        alt='Tenable Vulnerability Management'
    />
));
export const Okta = withImageData(props => (
    <Img
        fixed={props.imageData.okta.childImageSharp.fixed}
        alt='Okta Cloud Identity'
    />
));
export const Vmware = withImageData(props => (
    <Img
        fixed={props.imageData.vmware.childImageSharp.fixed}
        alt='Vmware'
    />
));
export const Gsuite = withImageData(props => (
    <Img
        fixed={props.imageData.gsuite.childImageSharp.fixed}
        alt='Google Workspaces'
    />
));
