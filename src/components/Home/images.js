import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

function withImageData(WrappedComponent) {
    return props => (
        <StaticQuery
            query={graphql`
                query ImagesQuery {
                    cyscaleSecurityKnowledgeGraph: file(relativePath: { eq: "cyscale-security-knowledge-graph.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 600, layout: CONSTRAINED)
                        }
                    }
                    cloudNativeDigitalAssetsInventory: file(
                        relativePath: { eq: "cloud-native-digital-assets-inventory.png" }
                    ) {
                        childImageSharp {
                            gatsbyImageData(width: 600, layout: CONSTRAINED)
                        }
                    }
                    remoteWorkWftCompliance: file(relativePath: { eq: "remote-work-wft-compliance.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 600, layout: CONSTRAINED)
                        }
                    }
                    automatedEvidenceCollectionDataGathering: file(
                        relativePath: { eq: "automated-evidence-collection-data-gathering.png" }
                    ) {
                        childImageSharp {
                            gatsbyImageData(width: 600, layout: CONSTRAINED)
                        }
                    }
                    iso27001ComplianceAudit: file(relativePath: { eq: "iso-27001-compliance-audit.png" }) {
                        childImageSharp {
                            gatsbyImageData(height: 75, layout: CONSTRAINED)
                        }
                    }
                    aicpaSoc2ComplianceAudit: file(relativePath: { eq: "aicpa-soc2-compliance-audit.png" }) {
                        childImageSharp {
                            gatsbyImageData(height: 75, layout: CONSTRAINED)
                        }
                    }
                    cisBenchmarksCloudCompliance: file(relativePath: { eq: "cis-benchmarks-cloud-compliance.png" }) {
                        childImageSharp {
                            gatsbyImageData(height: 75, layout: CONSTRAINED)
                        }
                    }
                    euEuropeanGdprCompliance: file(relativePath: { eq: "eu-european-gdpr-compliance.png" }) {
                        childImageSharp {
                            gatsbyImageData(height: 75, layout: CONSTRAINED)
                        }
                    }
                    usHipaaHealthInsurancePortabilityAccountabilityAct: file(
                        relativePath: { eq: "us-hipaa-health-insurance-portability-accountability-act.png" }
                    ) {
                        childImageSharp {
                            gatsbyImageData(height: 75, layout: CONSTRAINED)
                        }
                    }
                    pciDssComplianceHome: file(relativePath: { eq: "pci-dss-compliance-home.png" }) {
                        childImageSharp {
                            gatsbyImageData(height: 75, layout: CONSTRAINED)
                        }
                    }
                    nistCompliance: file(relativePath: { eq: "nist-compliance.png" }) {
                        childImageSharp {
                            gatsbyImageData(height: 75, layout: CONSTRAINED)
                        }
                    }
                    iso27001ComplianceAuditSmall: file(relativePath: { eq: "iso-27001-compliance-audit.png" }) {
                        childImageSharp {
                            gatsbyImageData(height: 45, layout: CONSTRAINED)
                        }
                    }
                    aicpaSoc2ComplianceAuditSmall: file(relativePath: { eq: "aicpa-soc2-compliance-audit.png" }) {
                        childImageSharp {
                            gatsbyImageData(height: 45, layout: CONSTRAINED)
                        }
                    }
                    cisBenchmarksCloudComplianceSmall: file(
                        relativePath: { eq: "cis-benchmarks-cloud-compliance.png" }
                    ) {
                        childImageSharp {
                            gatsbyImageData(height: 45, layout: CONSTRAINED)
                        }
                    }
                    euEuropeanGdprComplianceSmall: file(relativePath: { eq: "eu-european-gdpr-compliance.png" }) {
                        childImageSharp {
                            gatsbyImageData(height: 45, layout: CONSTRAINED)
                        }
                    }
                    usHipaaHealthInsurancePortabilityAccountabilityActSmall: file(
                        relativePath: { eq: "us-hipaa-health-insurance-portability-accountability-act.png" }
                    ) {
                        childImageSharp {
                            gatsbyImageData(height: 45, layout: CONSTRAINED)
                        }
                    }
                    pciDssComplianceSmall: file(relativePath: { eq: "pci-dss-compliance-home.png" }) {
                        childImageSharp {
                            gatsbyImageData(height: 45, layout: CONSTRAINED)
                        }
                    }
                    nistComplianceSmall: file(relativePath: { eq: "nist-compliance.png" }) {
                        childImageSharp {
                            gatsbyImageData(height: 45, layout: CONSTRAINED)
                        }
                    }
                    docker: file(relativePath: { eq: "integration-docker-container-registry-security-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    oracle: file(
                        relativePath: { eq: "integration-oracle-cloud-infrastructure-oci-security-logo.png" }
                    ) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    snyk: file(relativePath: { eq: "integration-snyk-source-code-vulnerability-management-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    teams: file(relativePath: { eq: "notifications-collaboration-communication-microsoft-teams.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    aws: file(relativePath: { eq: "integration-amazon-web-services-aws-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    github: file(relativePath: { eq: "integration-github-source-code-security-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    gitlab: file(
                        relativePath: { eq: "integration-gitlab-source-code-intellectual-property-protection-logo.png" }
                    ) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    kubernetes: file(relativePath: { eq: "integration-kubernetes-cluster-k8s-security-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    azure: file(relativePath: { eq: "integration-microsoft-azure-cloud-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    gcp: file(relativePath: { eq: "integration-google-cloud-platform-gcp-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    alibaba: file(relativePath: { eq: "integration-alibaba-aliyun-cloud-security-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    slack: file(relativePath: { eq: "notifications-collaboration-slack.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    jamf: file(relativePath: { eq: "integration-jamf-enterprise-endpoint-management-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    snowflake: file(relativePath: { eq: "integration-snowflake-cloud-data-security-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    veracode: file(relativePath: { eq: "integration-veracode-appsec-vulnerability-security-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    jira: file(relativePath: { eq: "integration-jira-confluence-atlassian-remote-work-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    crowdstrike: file(relativePath: { eq: "integration-crowdstrike-cloud-endpoint-protection-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    jumpcloud: file(relativePath: { eq: "integration-jumpcloud-cloud-identity-provider-security-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    tenable: file(relativePath: { eq: "integration-tenable-cloud-vulnerability-management-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    okta: file(relativePath: { eq: "integration-okta-cloud-identity-provider-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    vmware: file(relativePath: { eq: "integration-vmware-cloud-aws-gcp-azure-security.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                    gsuite: file(relativePath: { eq: "integration-g-suite-google-workspaces-cloud-identity-security-logo.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 100, layout: CONSTRAINED)
                        }
                    }
                }
            `}
            render={data => <WrappedComponent {...props} imageData={data} />}
        />
    );
}

export const SecurityKnowledgeGraph = withImageData(props => (
    <Img image={props.imageData.cyscaleSecurityKnowledgeGraph.childImageSharp.gatsbyImageData} alt='Security Knowledge Graph™' />
));
export const CloudNative = withImageData(props => (
    <Img
        image={props.imageData.cloudNativeDigitalAssetsInventory.childImageSharp.gatsbyImageData}
        alt='Real-time cloud inventor'
    />
));
export const RemoteWorkWft = withImageData(props => (
    <Img image={props.imageData.remoteWorkWftCompliance.childImageSharp.gatsbyImageData} alt='Remote work compliance' />
));
export const DataGathering = withImageData(props => (
    <Img
        image={props.imageData.automatedEvidenceCollectionDataGathering.childImageSharp.gatsbyImageData}
        alt='Automated evidence collection'
    />
));

export const ISO27001 = withImageData(props => (
    <Img image={props.imageData.iso27001ComplianceAudit.childImageSharp.gatsbyImageData} alt='ISO 27001 Compliance Audit' />
));
export const AicpaSoc2 = withImageData(props => (
    <Img image={props.imageData.aicpaSoc2ComplianceAudit.childImageSharp.gatsbyImageData} alt='AICPA SOC 2 Compliance Audit' />
));
export const CisBenchmarks = withImageData(props => (
    <Img
        image={props.imageData.cisBenchmarksCloudCompliance.childImageSharp.gatsbyImageData}
        alt='CIS Benchmarks Cloud Compliance'
    />
));
export const EuEuropeanGdpr = withImageData(props => (
    <Img image={props.imageData.euEuropeanGdprCompliance.childImageSharp.gatsbyImageData} alt='EU European GDPR Compliance' />
));
export const USHipaa = withImageData(props => (
    <Img
        image={props.imageData.usHipaaHealthInsurancePortabilityAccountabilityAct.childImageSharp.gatsbyImageData}
        alt='US HIPAA health Insurance Portability Accountability Act'
    />
));
export const PciDss = withImageData(props => (

    <Img
        image={props.imageData.pciDssComplianceHome.childImageSharp.gatsbyImageData}
        alt='PCI DSS Payment Card Industry Data Security Standard'
    />
));
export const Nist = withImageData(props => (
    <Img
        image={props.imageData.nistCompliance.childImageSharp.gatsbyImageData}
        alt='NIST National Institute of Standards and Technology'
    />
));
export const ISO27001Small = withImageData(props => (
    <Img image={props.imageData.iso27001ComplianceAuditSmall.childImageSharp.gatsbyImageData} alt='ISO 27001 Compliance Audit' />
));
export const AicpaSoc2Small = withImageData(props => (
    <Img
        image={props.imageData.aicpaSoc2ComplianceAuditSmall.childImageSharp.gatsbyImageData}
        alt='AICPA SOC 2 Compliance Audit'
    />
));
export const CisBenchmarksSmall = withImageData(props => (
    <Img
        image={props.imageData.cisBenchmarksCloudComplianceSmall.childImageSharp.gatsbyImageData}
        alt='CIS Benchmarks Cloud Compliance'
    />
));
export const EuEuropeanGdprSmall = withImageData(props => (
    <Img
        image={props.imageData.euEuropeanGdprComplianceSmall.childImageSharp.gatsbyImageData}
        alt='EU European GDPR Compliance'
    />
));
export const USHipaaSmall = withImageData(props => (
    <Img
        image={props.imageData.usHipaaHealthInsurancePortabilityAccountabilityActSmall.childImageSharp.gatsbyImageData}
        alt='US HIPAA health Insurance Portability Accountability Act'
    />
));
export const PciDssSmall = withImageData(props => (
    <Img
        image={props.imageData.pciDssComplianceSmall.childImageSharp.gatsbyImageData}
        alt='PCI DSS Payment Card Industry Data Security Standard'
    />
));
export const NistSmall = withImageData(props => (
    <Img
        image={props.imageData.nistComplianceSmall.childImageSharp.gatsbyImageData}
        alt='NIST National Institute of Standards and Technology'
    />
));
export const Docker = withImageData(props => (
    <Img
        image={props.imageData.docker.childImageSharp.gatsbyImageData}
        alt='Integration Docker Container'
    />
));
export const Oracle = withImageData(props => (
    <Img
        image={props.imageData.oracle.childImageSharp.gatsbyImageData}
        alt='Integration Oracle Cloud Infrastructure OCI Security'
    />
));
export const Snyk = withImageData(props => (
    <Img
        image={props.imageData.snyk.childImageSharp.gatsbyImageData}
        alt='Integration Snyk Source Code Vulnerability Management'
    />
));
export const Teams = withImageData(props => (
    <Img
        image={props.imageData.teams.childImageSharp.gatsbyImageData}
        alt='Notifications and Collaboration Microsoft Teams'
    />
));
export const Aws = withImageData(props => (
    <Img
        image={props.imageData.aws.childImageSharp.gatsbyImageData}
        alt='Amazon Web Services (AWS)'
    />
));
export const Github = withImageData(props => (
    <Img
        image={props.imageData.github.childImageSharp.gatsbyImageData}
        alt='Github Source Code'
    />
));
export const Gitlab = withImageData(props => (
    <Img
        image={props.imageData.gitlab.childImageSharp.gatsbyImageData}
        alt='Gitlab Source Code'
    />
));
export const Kubernetes = withImageData(props => (
    <Img
        image={props.imageData.kubernetes.childImageSharp.gatsbyImageData}
        alt='Kubernetes Cluster (k8s)'
    />
));
export const Azure = withImageData(props => (
    <Img
        image={props.imageData.azure.childImageSharp.gatsbyImageData}
        alt='Microsoft Azure Cloud'
    />
));
export const Gcp = withImageData(props => (
    <Img
        image={props.imageData.gcp.childImageSharp.gatsbyImageData}
        alt='Google Cloud Platform (GCP)'
    />
));
export const Alibaba = withImageData(props => (
    <Img
        image={props.imageData.alibaba.childImageSharp.gatsbyImageData}
        alt='Alibaba Aliyun'
    />
));
export const Slack = withImageData(props => (
    <Img
        image={props.imageData.slack.childImageSharp.gatsbyImageData}
        alt='Notifications and Collaboration Slack'
    />
));
export const Jamf = withImageData(props => (
    <Img
        image={props.imageData.jamf.childImageSharp.gatsbyImageData}
        alt='Jamf Enterprise Endpoint Management'
    />
));
export const Snowflake = withImageData(props => (
    <Img
        image={props.imageData.snowflake.childImageSharp.gatsbyImageData}
        alt='Snowflake Cloud Data Security'
    />
));
export const Veracode = withImageData(props => (
    <Img
        image={props.imageData.veracode.childImageSharp.gatsbyImageData}
        alt='Veracode Appsec Vulnerability'
    />
));
export const Jira = withImageData(props => (
    <Img
        image={props.imageData.jira.childImageSharp.gatsbyImageData}
        alt='Jira Confluence Atlassian Remote Work'
    />
));
export const Crowdstrike = withImageData(props => (
    <Img
        image={props.imageData.crowdstrike.childImageSharp.gatsbyImageData}
        alt='Crowdstrike Cloud Endpoint Protection'
    />
));
export const Jumpcloud = withImageData(props => (
    <Img
        image={props.imageData.jumpcloud.childImageSharp.gatsbyImageData}
        alt='Jumpcloud Identity Provider'
    />
));
export const Tenable = withImageData(props => (
    <Img
        image={props.imageData.tenable.childImageSharp.gatsbyImageData}
        alt='Tenable Vulnerability Management'
    />
));
export const Okta = withImageData(props => (
    <Img
        image={props.imageData.okta.childImageSharp.gatsbyImageData}
        alt='Okta Cloud Identity'
    />
));
export const Vmware = withImageData(props => (
    <Img
        image={props.imageData.vmware.childImageSharp.gatsbyImageData}
        alt='Vmware'
    />
));
export const Gsuite = withImageData(props => (
    <Img
        image={props.imageData.gsuite.childImageSharp.gatsbyImageData}
        alt='Google Workspaces'
    />
));
