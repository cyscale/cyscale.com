import React from 'react';
import { Row } from '../atoms/Containers';
import Card from './Card';
import CSPMIcon from '../../assets/images/cspm-cnapp-icon.svg';
import VisibilityIcon from '../../assets/images/visibility-cnapp-icon.svg';
import ComplianceIcon from '../../assets/images/compliance-cnapp-icon.svg';
import CIEMIcon from '../../assets/images/ciem-cnapp-icon.svg';
import DataSecurityIcon from '../../assets/images/data-security-cnapp-icon.svg';
import KubernetesIcon from '../../assets/images/kubernetes-cnapp-icon.svg';

const CardsSections = () => {
    return (
        <div className='container max-w-7xl m-auto px-4 lg:px-8'>
            <Row className='mt-12 gap-0 lg:gap-8'>
                <Card
                    icon={CSPMIcon}
                    title={'CSPM'}
                    text={
                        'Continuous visibility over complex cloud environments to identify misconfigurations and vulnerabilities. Agentless automated scanning and guided remediation across multiple cloud service providers including AWS, Microsoft Azure, Google Cloud, and Alibaba Cloud.'
                    }
                    link={'/products/cloud-security-posture-management/'}
                    cardHeight={72}
                    cardHeightLg={72}
                />
                <Card
                    icon={VisibilityIcon}
                    title={'Contextual Analysis'}
                    text={
                        'Automated analysis and correlation of vulnerabilities in instances, containers and serverless, along with cloud misconfigurations and vulnerabilities across workloads and access control helps security teams prioritize remediation.'
                    }
                    link={'/products/security-knowledge-graph/'}
                    cardHeight={72}
                    cardHeightLg={72}
                />
                <Card
                    icon={ComplianceIcon}
                    title={'Compliance and Governance'}
                    text={
                        'In-app security standards and organizational security policy templates for CIS Cloud Benchmarks, ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST, and many more help your team with internal or external audits.'
                    }
                    link={'/use-cases/cloud-compliance-and-auditing/'}
                    cardHeight={72}
                    cardHeightLg={72}
                />
            </Row>
            <Row className='mt-8 lg:mt-16 gap-0 lg:gap-8'>
                <Card
                    icon={CIEMIcon}
                    title={'CIEM'}
                    text={
                        'A powerful Identity Dashboard to help you understand how effective your access controls are. Effectively monitor user permissions and privilege access for a robust cloud security posture. Onboard your Okta account for full visibility on cloud SSO users.'
                    }
                    link={'/products/ciem/'}
                    cardHeight={72}
                    cardHeightLg={72}
                />
                <Card
                    icon={DataSecurityIcon}
                    title={'Data Security'}
                    text={
                        'Protect sensitive data and keep track of your organization’s data security posture with an inventory of cloud data stores, complete with their security analysis.'
                    }
                    link={'/use-cases/cloud-data-security/'}
                    cardHeight={64}
                    cardHeightLg={72}
                />
                <Card
                    icon={KubernetesIcon}
                    title={'Container and Kubernetes Security\n'}
                    text={
                        'Secure cloud native applications with contextual security analysis of vulnerabilities, misconfigurations, networking and access. Know where container images are running, and get a complete inventory for your Kubernetes clusters, either managed or unmanaged.'
                    }
                    link={'/use-cases/kubernetes-security-platform/'}
                    cardHeight={64}
                    cardHeightLg={72}
                />
            </Row>
        </div>
    );
};

export default CardsSections;
