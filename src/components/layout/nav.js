import UseCases from './icons/icon-usecases.svg';
import Cloud from './icons/icon-cloud.svg';
import Graph from './icons/icon-graph.svg';
import Shield from './icons/icon-shield.svg';
import CNAPPIcon from './icons/cnapp-icon.svg';
import KubernetesIcon from './icons/k8s-icon.svg';
import AWSIcon from './icons/aws-icon.svg';
import AzureIcon from './icons/azure-icon.svg';
import GCIcon from './icons/google-cloud-icon.svg';
import OktaIcon from './icons/okta-icon.svg';

const platform = [
    {
        icon: CNAPPIcon,
        title: 'Cloud Native Application Protection (CNAPP)',
        description: 'Secure your cloud apps and data across the entire lifecycle.',
        mobileDescription: 'Secure your cloud apps and data across the entire lifecycle.',
        link: '/products/cnapp/'
    },
    {
        icon: Cloud,
        title: 'Cloud Security Posture Management (CSPM)',
        description:
            'Continuously detect vulnerabilities, prevent misconfigurations, control threats, and ensure compliance for your cloud assets.',
        mobileDescription:
            'Continuously detect vulnerabilities, prevent misconfigurations, control threats, and ensure compliance for your cloud assets.',
        link: '/products/cloud-security-posture-management/'
    },
    {
        icon: Graph,
        title: 'Cloud Infrastructure Entitlement Management (CIEM)',
        description: 'Manage security risks related to cloud identities and access.',
        mobileDescription: 'Manage security risks related to cloud identities and access.',
        link: '/products/ciem/'
    },
    {
        icon: KubernetesIcon,
        title: 'Kubernetes Security Posture Management (KSPM)',
        description: 'Protect your K8s environments with a complete security and compliance platform',
        mobileDescription: 'Protect your K8s environments with a complete security and compliance platform',
        link: '/use-cases/kubernetes-security-platform/'
    },
    {
        icon: Shield,
        title: 'Cloud Compliance',
        description: 'CIS, ISO 27001:2013, SOC 2, NIST 800, NIST CSF, PCI DSS, CCPA, GDPR, HITRUST, HIPAA.',
        mobileDescription: 'CIS, ISO 27001:2013, SOC 2, NIST 800, NIST CSF, PCI DSS, CCPA, GDPR, HITRUST, HIPAA.',
        link: '/use-cases/cloud-compliance-and-auditing/'
    }
];
const solutions = [
    {
        title: 'Use Cases',
        description: 'Support for common cloud security needs',
        icon: UseCases,
        links: [
            {
                link: '/use-cases/cloud-misconfigurations/',
                text: 'Cloud Misconfigurations'
            },
            {
                link: '/use-cases/iam-security/',
                text: 'IAM Cloud Security'
            },
            {
                link: '/use-cases/cloud-data-security/',
                text: 'Multi-Cloud Data Security'
            },
            {
                link: '/use-cases/cloud-security-fintech/',
                text: 'Fintech'
            },
            {
                link: '/use-cases/cloud-security-mssp/',
                text: 'MSSP Portal'
            }
        ]
    },
    {
        title: 'Compliance',
        description: 'Explore the different regulations covered in the platform',
        icon: Shield,
        links: [
            {
                link: '/use-cases/iso-27001-compliance/',
                text: 'ISO 27001'
            },
            {
                link: '/use-cases/pci-dss/',
                text: 'PCI DSS'
            },
            {
                link: '/use-cases/soc-2/',
                text: 'SOC 2'
            },
            {
                link: '/use-cases/nist-compliance/',
                text: 'NIST'
            }
        ]
    },
    {
        title: 'Environments',
        description: 'Integrations with multiple connectors',
        icon: Cloud,
        links: [
            {
                icon: AWSIcon,
                link: '/use-cases/aws-cloud-security/',
                text: 'AWS Cloud Security'
            },
            {
                icon: AzureIcon,
                link: '/use-cases/azure-cloud-security/',
                text: 'Azure Cloud Security'
            },
            {
                icon: GCIcon,
                link: '/use-cases/gcp-cloud-security/',
                text: 'Google Cloud Security'
            },
            {
                icon: KubernetesIcon,
                link: '/use-cases/kubernetes-security-platform/',
                text: 'Kubernetes'
            },
            {
                icon: OktaIcon,
                link: '/use-cases/okta-cyscale-integration/',
                text: 'Integration with Okta'
            }
        ]
    }
];
const resources = [
    {
        text: 'Product Tours',
        link: '/full-platform-tour/'
    },
    {
        text: 'Case Studies',
        link: '/resources/#case-studies'
    },
    {
        text: 'Blog',
        link: '/blog/'
    },
    {
        text: 'Documentation',
        link: 'https://docs.cyscale.com/',
        external: true
    },
    {
        text: 'Release Notes',
        link: 'https://headwayapp.co/cyscale-changelog/',
        external: true
    },
    {
        text: 'All Resources',
        link: '/resources/'
    }
];
const company = [
    {
        link: '/about-us/',
        text: 'About us'
    },
    {
        link: '/careers/',
        text: 'Careers'
    },
    {
        link: '/contact-us/',
        text: 'Contact us'
    }
];

const navigation = { platform, solutions, resources, company };

export { platform, solutions, resources, company, navigation };
