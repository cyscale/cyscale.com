import React from 'react';
import { Row } from '../atoms/Containers';
import Card from './Card';
import CSPMIcon from '../../assets/images/cspm-cnapp-icon.svg';
import VisibilityIcon from '../../assets/images/visibility-cnapp-icon.svg';
import ComplianceIcon from '../../assets/images/compliance-cnapp-icon.svg';
import CIEMIcon from '../../assets/images/ciem-cnapp-icon.svg';
import DataSecurityIcon from '../../assets/images/data-security-cnapp-icon.svg';
import CWPPIcon from '../../assets/images/cwpp-cnapp-icon.svg';
import ContainerSecurityIcon from '../../assets/images/container-security-cnapp-icon.svg';
import KubernetesIcon from '../../assets/images/kubernetes-cnapp-icon.svg';

const CardsSections = () => {
    return (
        <div className='container max-w-7xl m-auto px-4 lg:px-8'>
            <Row className='mt-12 gap-0 lg:gap-8'>
                <Card
                    icon={CSPMIcon}
                    title={'CSPM'}
                    text={
                        'Continuous visibility over multi-cloud environments to identify cloud misconfigurations. Scan, monitor, and remediate across multiple cloud service providers such as AWS, Microsoft Azure, Google Cloud, Alibaba Cloud.'
                    }
                    link={'/products/cloud-security-posture-management/'}
                    cardHeight={72}
                    cardHeightLg={80}
                />
                <Card
                    icon={VisibilityIcon}
                    title={'Contextual Analysis'}
                    text={
                        'Automated correlations between issues that affect cloud assets, cloud workloads and access control help to determine their real impact on data security and data protection.'
                    }
                    link={'/products/security-knowledge-graph/'}
                    cardHeight={72}
                    cardHeightLg={80}
                />
                <Card
                    icon={ComplianceIcon}
                    title={'Compliance and Governance'}
                    text={
                        'In-app security standards and organizational security policy templates provided by the Cyscale platform help your team with internal or external audits.'
                    }
                    link={'/use-cases/cloud-compliance-and-auditing/'}
                    cardHeight={72}
                    cardHeightLg={80}
                />
                <Card
                    icon={CIEMIcon}
                    title={'IAM Security'}
                    text={
                        'A powerful Identity Dashboard to help you understand how effective are your access controls. Visualize cloud privileges and permissions and easily perform access reviews to prevent data loss.'
                    }
                    link={'/use-cases/iam-security/'}
                    cardHeight={72}
                    cardHeightLg={80}
                />
            </Row>
            <Row className='mt-8 lg:mt-16 gap-0 lg:gap-8'>
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
                    icon={CWPPIcon}
                    title={'Workload Protection'}
                    text={
                        'A contextual analysis of vulnerabilities in instances, containers and serverless, along with cloud misconfigurations helps security teams prioritize remediation.'
                    }
                    cardHeight={64}
                    cardHeightLg={72}
                />
                <Card
                    icon={ContainerSecurityIcon}
                    title={'Container Security'}
                    text={
                        'Know where container images are running, complete with a contextual security analysis of vulnerabilities, misconfigurations, networking and access.'
                    }
                    cardHeight={64}
                    cardHeightLg={72}
                />
                <Card
                    icon={KubernetesIcon}
                    title={'Kubernetes Security'}
                    text={
                        'A complete inventory for your Kubernetes clusters, either managed or unmanaged, and continuous analysis of vulnerabilities in the cluster to ensure data protection.'
                    }
                    cardHeight={64}
                    cardHeightLg={72}
                />
            </Row>
        </div>
    );
};

export default CardsSections;
