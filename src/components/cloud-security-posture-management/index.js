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
import {
    DetectPreventMisconfigurations,
    CutNoise,
    AutomateCompliance,
    OptimizeCosts,
    EliminateSecurityGaps
} from './images';
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
            description: `See complaianc with regulatory standards and policies at a glance \n\nUpto 1-year data retention \n\nData Exports (CSV)`
        }
    ];
    const dataFeaturedProducts = [
        {
            tabTitle: 'Prevent misconfigurations, mismanagement and mistakes',
            sectionTitle: 'Prevent misconfigurations & mistakes',
            sectionDescription: `Cyscale automatically detects and reports violations of security controls and compliance risks. \n\nIt’s much easier to keep your cloud assets in check with ongoing change monitoring that bridges cloud providers. \n\nSingle out misconfigured services and see how failed security controls impact compliance from a single, unified view. Plus, you get reliable remediation guidelines in the same place.`,
            featureImage: <DetectPreventMisconfigurations />
        },
        {
            tabTitle: 'Cut through the noise with targeted alerts',
            sectionTitle: 'Cut through the noise',
            sectionDescription: [
                'Get relevant alerts when your cloud assets drift away from established security and compliance standards.\n\nMake Cyscale your single source of truth for CSPM and never miss an important security event. \n\nMove beyond bulky, list-based management. Cyscale’s',
                ' ',
                <a
                    href='/products/security-knowledge-graph'
                    key='1asd'
                    className='text-blue underline text-16px hover:no-underline hover:text-red'
                >
                    Security Knowledge Graph™
                </a>,
                ' ',
                'makes precise correlations between all your cloud assets and data repositories to automatically pinpoint critical security improvements.'
            ],
            featureImage: <CutNoise />
        },
        {
            tabTitle: 'Automate compliance checks & security controls audits',
            sectionTitle: 'Automate compliance checks',
            sectionDescription: [
                'Use Cyscale for',
                ' ',
                <a
                    href='/use-cases/cloud-compliance-and-auditing'
                    key='1as4d'
                    className='text-blue underline text-16px hover:no-underline hover:text-red'
                >
                    governance automation
                </a>,
                ' across cloud providers and internal teams to ensure consistent security and compliance.\n\nWe keep your clouds under continuous assessment and provide in-app security consultancy so you make the most of your time and effort.\n\n',
                <strong>Coming soon: </strong>,
                'create custom Controls that tap into our Security Knowledge Graph™ and automate the security and compliance checks that matter the most for your organization.'
            ],
            featureImage: <AutomateCompliance />
        }
    ];
    const dataAdditionalBenefits = [
        {
            tabTitle: 'Reduce friction across your entire workflow',
            sectionTitle: 'Reduce workflow friction',
            sectionDescription: `Forget the hassle of multiple logins into various cloud accounts, with different dashboards and
      features. Get all your cloud assets under one roof and group them in just a few clicks. \n\nWith Cyscale you get comprehensive, agentless CSPM, compliance and data protection
      capabilities for your entire cloud inventory – serverless, databases and apps included.`,
            featureImage: <OptimizeCosts />
        },
        {
            tabTitle: 'Reveal and reduce hidden costs',
            sectionTitle: 'Reveal & curb hidden costs',
            sectionDescription: [
                'Keep your cloud infrastructure on track and on budget with Cyscale.\n\nWith a ',
                <a
                    href='/products/security-knowledge-graph'
                    className=' text-blue underline text-16px hover:no-underline hover:text-red'
                    key='1as4d'
                >
                    full map of your cloud inventory
                </a>,
                ' and a deep understanding of your cloud attack surface, you can reduce overhead in multiple areas:\n'
            ],
            featureImage: <OptimizeCosts />
        },
        {
            tabTitle: 'Fill in the security gaps left by cloud service providers',
            sectionTitle: 'Close security gaps',
            sectionDescription: [
                'Get the visibility you need to fill in security gaps left by cloud service providers.\n\n',
                <a
                    href='/use-cases/cloud-data-security'
                    className='text-blue underline text-16px hover:no-underline hover:text-red'
                    key='1as4d'
                >
                    Discover and classify data repositories
                </a>,
                ' ',
                'across multi-cloud environments. Bring databases, cloud and network storage, data lakes, code and IP repositories on the same platform for comprehensive asset inventory and management.\n\nFollow reliable hardening steps our ',
                <a
                    href='/products/security-knowledge-graph'
                    className='text-blue underline text-16px hover:no-underline hover:text-red'
                    key='123e'
                >
                    Security Knowledge Graph™
                </a>,
                ' ',
                'provides based on deep contextual correlations between all your cloud assets to keep data security issues under control.'
            ],
            featureImage: <EliminateSecurityGaps />
        }
    ];
 
    const dataService = [
        {
            title: 'Data discovery',
            description1: 'Keep an accurate and up-to-date map of your entire cloud inventory across multiple providers'
        },
        {
            title: 'Real-time contextual analysis',
            description1: 'Use the Security Knowledge Graph™ to enrich visibility with risk-related information'
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
                ' into SIEM or other cybersecurity tools '
            ]
        },
        {
            title: 'Powerful policy engine',
            description1:
                'Easily import or create your own set of policies, procedures and controls and deploy them for your entire cloud infrastructure'
        },
        {
            title: 'Security & compliance telemetry',
            description1:
                'Track every change in security and compliance setup automatically, with zero cross-cloud manual work'
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
                'The Cyscale Power Cloud Platform is fully managed and agentless, so all you have to do is put it to work'
        }
    ];
    return (
        <>
            <Onboarding data={dataOnboarding} />
            <Fproducts sectionTitle='Unpack The Platform' data={dataFeaturedProducts} />
            <div className='gradientBGCSPM'>
                <GetStarted
                    description='Discover the most flexible pricing in the cloud security industry'
                    btnText='SEE PRICING OPTIONS'
                    btnLink='/pricing'
                    icon={getStartedICon}
                />
            </div>
            <div className='additionalBenefits'>
                <Fproducts sectionTitle='Optimize your operations' data={dataAdditionalBenefits} />
            </div>
           
            <div className='block w-full CSPMServices'>
                <Services
                    headingText='The Cyscale Power Cloud Platform packs all the CSPM features you need'
                    sectionName='CSPMServices'
                    data={dataService}
                />
            </div>
            <div className='gradientBGCSPM-2'>
                <CSPMgetStarted
                    title={`AGENTLESS, MULTI-CLOUD, PAINLESS CSPM`}
                    description='Start seeing value & saving money in minutes'
                    btnText='TRY CYSCALE FOR FREE'
                    btnLink='https://app.cyscale.com'
                    ExternalLink
                />
            </div>
           
        </>
    );
};

export default Index;
