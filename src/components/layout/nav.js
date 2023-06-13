import UseCases from './icons/icon-usecases.svg';
import Cloud from './icons/icon-cloud.svg';
import Graph from './icons/icon-graph.svg';
import Shield from './icons/icon-shield.svg';
import CNAPPIcon from './icons/cnapp-icon.svg';

const platform = [
    {
        icon: CNAPPIcon,
        title: 'CNAPP',
        description: 'Ensure security and compliance with our all-in-one solution for multi-cloud environments.',
        mobileDescription: 'Ensure security and compliance with our all-in-one solution for multi-cloud environments.',
        link: '/products/cnapp/'
    },
    {
        icon: Cloud,
        title: 'Cloud Security Posture Management',
        description:
            'Enable teams to continuously detect, prevent misconfigurations and control threats and ensure compliance for your cloud assets.',
        mobileDescription: 'Enable teams to continuously detect, prevent misconfigurations, control threats.',
        link: '/products/cloud-security-posture-management/'
    },
    {
        icon: Graph,
        title: 'Security Knowledge Graph',
        description: 'Cross-cloud context-aware automation for your security and compliance program.',
        mobileDescription: 'Cross-cloud context-aware automation for your security and compliance program.',
        link: '/products/security-knowledge-graph/'
    },
    {
        icon: Shield,
        title: 'Cloud Compliance Platform',
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
                link: '/use-cases/remote-work-security/',
                text: 'Remote Work'
            },
            {
                link: '/use-cases/cloud-data-security/',
                text: 'Multi-Cloud Data Security'
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
        description: 'Integrations with multiple cloud providers',
        icon: Cloud,
        links: [
            {
                link: '/use-cases/aws-cloud-security/',
                text: 'AWS Cloud Security'
            },
            {
                link: '/use-cases/azure-cloud-security/',
                text: 'Azure Cloud Security'
            },
            {
                link: '/use-cases/gcp-cloud-security/',
                text: 'Google Cloud Security'
            }
        ]
    }
];
const resources = [
    {
        text: 'Case Studies',
        link: '/case-studies/bays-consulting/'
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
        text: 'Support',
        link: 'https://docs.cyscale.com/',
        external: true
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
        link: '/contact-us',
        text: 'Contact us'
    }
];

const navigation = { platform, solutions, resources, company };

export { platform, solutions, resources, company, navigation };
