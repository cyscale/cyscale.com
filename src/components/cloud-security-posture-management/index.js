import React from 'react';
import Onboarding from './onboarding';
import Fproducts from './featuredProducts';
import GetStarted from '../Home/getstarted';
import Services from '../Home/services';
import CSPMgetStarted from './CSPMgetStarted';
import icon1 from '../../assets/images/onboardingIcon.svg';
import icon2 from '../../assets/images/gear.svg';
import icon3 from '../../assets/images/management.svg';
import icon4 from '../../assets/images/message.svg';
import getStartedICon from '../../assets/images/getStartedIconCPSM.svg';
import { InventoryGroupedAssets, InventoryGraph, Dashboard } from './images';
import MisconfigurationTabs from './MisconfigurationTabs';
import { Container, Section } from '../atoms/Containers';
import Faqs from './Faqs';
import CSPMLinksAndWhitepaper from './CSPMLinksAndWhitepaper';

const Index = () => {
    const dataOnboarding = [
        {
            icon: icon1,
            title: 'ONBOARDING',
            description: `Time-to-value: 5 minutes \n\nAgentless deployment \n\nNo-hassle onboarding \n\nFull map of cloud assets & security score`
        },
        {
            icon: icon2,
            title: 'CONFIGURATION',
            description: `Customize your setup in <60 mins \n\nExpand cloud infrastructure securely \n\n500+ ready to use security controls and policies`
        },
        {
            icon: icon3,
            title: 'MANAGEMENT',
            description: `Easily surface and manage cloud assets that fail security controls \n\nIn-app security consultancy & remediation steps \n\nOnboard teams in <30 mins`
        },
        {
            icon: icon4,
            title: 'REPORTING',
            description: `See compliance with regulatory standards and policies at a glance \n\nUp to 1-year data retention \n\nData Exports (CSV)`
        }
    ];

    const dataAdditionalBenefits = [
        {
            tabTitle: 'Reduce friction across your entire workflow',
            sectionTitle: 'Reduce workflow friction',
            sectionDescription: `Forget the hassle of multiple logins into various cloud accounts, with different dashboards and
      features. Get all your cloud assets under one roof and group them in just a few clicks. \n\nWith Cyscale you get comprehensive, agentless Cloud Security Posture Management (CSPM), compliance and sensitive data protection
      capabilities for your entire cloud inventory - serverless, databases and apps included.`,
            featureImage: <Dashboard />
        },
        {
            tabTitle: 'Reveal and reduce hidden costs',
            sectionTitle: 'Reveal & curb hidden costs',
            sectionDescription: [
                'Keep your cloud infrastructure on track and on budget with Cyscale.\n\nWith a ',
                <a
                    href='/products/security-knowledge-graph/'
                    className=' text-blue underline text-16px hover:no-underline hover:text-red'
                    key='1as4d'
                >
                    full map of your cloud inventory
                </a>,
                ' and a deep understanding of your cloud attack surface, you can reduce overhead in multiple areas:\n'
            ],
            featureImage: <InventoryGroupedAssets />
        },
        {
            tabTitle: 'Fill in the security gaps left by cloud service providers',
            sectionTitle: 'Close security gaps',
            sectionDescription: [
                'Get the visibility you need to fill in security gaps left by cloud service providers.\n\n',
                <a
                    href='/use-cases/cloud-data-security/'
                    className='text-blue underline text-16px hover:no-underline hover:text-red'
                    key='1as4d'
                >
                    Discover and classify data repositories
                </a>,
                ' ',
                'across multi-cloud environments. Bring databases, cloud and network storage, data lakes, code and IP repositories on the same platform for comprehensive asset inventory and management.\n\nFollow reliable hardening steps our ',
                <a
                    href='/products/security-knowledge-graph/'
                    className='text-blue underline text-16px hover:no-underline hover:text-red'
                    key='123e'
                >
                    Security Knowledge Graph™
                </a>,
                ' ',
                'provides based on deep contextual correlations between all your cloud assets to keep data security issues under control for public cloud, and multi-cloud environments.'
            ],
            featureImage: <InventoryGraph />
        }
    ];

    const dataService = [
        {
            title: 'Data discovery',
            description1:
                'Keep an accurate and up-to-date map of your entire cloud inventory across multiple providers, enabling better communication between your Security team, DevOps, and the Compliance team.'
        },
        {
            title: 'Real-time contextual analysis',
            description1: 'Use the Security Knowledge Graph™ to enrich visualization with risk-related information'
        },
        {
            title: 'API ready for CI/CD flows',
            description1: [
                'Automate compliance and security scans and feed data exports with ',
                <a
                    href='https://api-reference.cyscale.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue underline text-16px hover:no-underline hover:text-red'
                    key='1as4d'
                >
                    the Cyscale API
                </a>,
                ' into SIEM or other cybersecurity tools'
            ]
        },
        {
            title: 'Powerful policy engine',
            description1:
                'Easily import or create your own set of policies, procedures and controls and deploy them for your entire cloud infrastructure'
        },
        {
            title: 'Cloud Compliance Platform',
            description1:
                'Trim complexity from your workflow with automated evaluations for CIS Cloud Benchmarks, ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST, and many more security frameworks.'
        },
        {
            title: 'Downloadable CSV & PDF reports',
            description1: 'Report on security and compliance profiles for several projects at the same time'
        },
        {
            title: 'Audit-ready data archive',
            description1:
                'Get a fully auditable, third-party data trail with deep-dive options that stores details up to 1 year'
        },
        {
            title: 'Zero maintenance platform',
            description1:
                'The Cyscale Cloud Platform is fully managed and agentless, so all you have to do is put it to work'
        },
        {
            title: 'Cloud-Native Security',
            description1:
                'You can also use Cyscale for your cloud-native security needs (VMs, network, serverless, databases, apps) for vulnerability and threat detection, cloud inventory, secure cloud extension, and as a compliance and cost-reduction solution.'
        }
    ];
    return (
        <>
            <Onboarding data={dataOnboarding} />
            <MisconfigurationTabs id='misconfiguration-tabs' />
            <div className='gradientBGCSPM'>
                <GetStarted
                    description='Discover the most flexible pricing in the cloud security industry'
                    btnText='SEE PRICING OPTIONS'
                    btnLink='/pricing/'
                    icon={getStartedICon}
                />
            </div>
            <div className='additionalBenefits' id='additional-benefits'>
                <Fproducts sectionTitle='Optimize your operations' data={dataAdditionalBenefits} />
            </div>
            <div className='block w-full CSPMServices' id='cspm-services'>
                <Services
                    headingText='The Cyscale CSPM Solution packs all the features you need'
                    sectionName='CSPMServices'
                    data={dataService}
                />
            </div>
            <div className='bg-gray ' id='faqs'>
                <Section>
                    <Container>
                        <Faqs />
                    </Container>
                </Section>
            </div>
            <CSPMLinksAndWhitepaper />
            <div className='gradientBGCSPM-2'>
                <CSPMgetStarted
                    title={`AGENTLESS, MULTI-CLOUD, PAINLESS CSPM`}
                    description='Start seeing value & saving money in minutes'
                    btnText='TRY CYSCALE FOR FREE'
                    btnLink={'/free-trial'}
                />
            </div>
        </>
    );
};

export default Index;
