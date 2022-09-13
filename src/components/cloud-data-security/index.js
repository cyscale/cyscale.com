import React from 'react';
import Banner from './banner';
import Services from './cloudDataServices';
import Support from './support';
import GetStarted from '../Home/getstarted';
import Sectionheader from '../layout/sectionheader';
import Relationship from './relationship';
import Performance from './performance';
import getStartedICon from '../../assets/images/getStartedIconCPSM.svg';
import Icon1 from '../../assets/images/Group-409.inline.svg';
import Icon2 from '../../assets/images/Group-411.inline.svg';
import Icon3 from '../../assets/images/Group-412.inline.svg';
import Icon4 from '../../assets/images/Path-270.inline.svg';
import F_Image from '../../assets/images/fImage1.svg';
import { useAppLink } from '../../common/links';
import NewTopNav from '../layout/NewTopNav';

const Index = ({ location }) => {
    const appLink = useAppLink();

    const dataServices = [
        {
            icon: <Icon1 />,
            title: `Agentless`,
            description: `no installation, just instant value`
        },
        {
            icon: <Icon2 />,
            title: `Serverless`,
            description: `cloud-native with zero performance penalty`
        },
        {
            icon: <Icon3 />,
            title: `Context-aware`,
            description: `goes beyond list-based inventories`
        },
        {
            icon: <Icon4 />,
            title: `Comprehensive`,
            description: `extensive multi-cloud range & flexibility`
        }
    ];
    const dataSupport = [
        {
            title: 'DATABASES',
            subItems: [
                ['AWS RDS'],
                ['AWS DynamoDB'],
                ['AWS Aurora'],
                ['GCP Cloud SQL'],
                ['GCP Spanner'],
                ['Azure SQL Database'],
                ['Azure CosmosDB'],
                ['Cloud-native MySQL'],
                ['Cloud-native PostgreSQL']
            ],
            viewMoreText: 'See all options',
            viewMoreLink: 'https://docs.cyscale.com'
        },
        {
            title: 'CLOUD / NETWORK  STORAGE',
            subItems: [
                ['AWS S3 Bucket'],
                ['AWS EBS'],
                ['AWS EFS'],
                ['GCP Disk'],
                ['GCP Cloud Storage'],
                ['GCP Cloud Filestore'],
                ['Azure Disk'],
                ['Azure Blob Storage'],
                ['Azure Files']
            ],
            viewMoreText: 'See all options',
            viewMoreLink: 'https://docs.cyscale.com'
        },
        {
            title: 'BIG DATA/DATA LAKES',
            subItems: [
                ['AWS Lake Formation'],
                ['AWS Redshift'],
                ['GCP BigQuery'],
                ['Azure Synapse'],
                ['Azure Data Lake Storage'],
                ['Snowflake (soon)'],
                ['Databricks (soon)'],
                ['-'],
                ['-']
            ]
        },
        {
            title: 'CODE / IP REPOSITORIES',
            subItems: [
                ['GitHub'],
                ['Gitlab'],
                ['BitBucket (soon)'],
                ['Atlassian Jira & Confluence'],
                ['AWS Code Repository'],
                ['Google Cloud Source'],
                ['Azure Repos'],
                ['-'],
                ['-']
            ]
        }
    ];
    const dataSecurityGaps = [
        {
            title: 'Financial data',
            subItems: [['Credit card numbers'], ['IBANs'], ['Balance sheets'], ['Cash flow statements ']]
        },
        {
            title: 'Medical information',
            subItems: [
                ['Electronic health records'],
                ['Medical insurance data'],
                ['Clinical trials data'],
                ['Disease registries']
            ]
        },
        {
            title: 'Intelectual property',
            subItems: [['Patents'], ['Trademarks'], ['Copyright-protected data'], ['Trade secrets']]
        },
        {
            title: 'Personally Identifiable Information',
            subItems: [['Social Security Numbers'], ['National IDs'], ["Driver's license details"], ['Home addresses']]
        }
    ];
    const dataPerformance = [
        {
            image: F_Image,
            title: `Do it all with zero performance degradation for your workloads`,
            description: `Because we use serverless technologies to categorize and inspect data repositories, we never interrupt or overload your systems. \nThe Cyscale Cloud Platform reduces your attack surface through continuous risk assessments with zero negative impact on performance. \n\nRun an efficient data security program that covers your entire range of cloud entities. Improve your flexibility, compliance and increase job satisfaction for your engineers.`
        }
    ];
    return (
        <div>
            <div className='dataSecurity w-full pb-80px bg-lightGrey2 bg-left-bottom bg-no-repeat'>
                <NewTopNav pageName='Data_Security' location={location} />
                <Banner
                    title={`Multi-cloud Data Security for resilient cloud environments`}
                    description={`Stuck playing catch-up with data security, with no breathing space for projects that move the needle? It's time for a change of pace.\n\n Give your engineers clarity and accuracy - use the Cyscale Cloud Platform to turn cloud data security into a manageable routine.\n\nKeep tabs on your fast-growing cloud inventory with automated data discovery and classification, compliance scans on autopilot and a fully auditable evidence trail. And that's just a taste!`}
                />
            </div>
            <Services bannerBtn1Text='Try Cyscale for free' bannerBtn1Link={appLink} data={dataServices} />
            <div
                className='max-w-1366px mx-auto pt-70px pb-70px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'
                id='discover'
            >
                <Sectionheader
                    headingText='Discover & map data repositories across multi-cloud environments'
                    description={`When you're growing fast, it's easy to lose track of your cloud assets. But that comes at a cost, both in terms of $$$ and compliance issues. \n\nLiquidate your data security debt with the Cyscale Cloud Platform. Bring all your entities under one roof with comprehensive asset inventory and management - as soon as you log in.\n\nExpand visibility to cover your entire cloud infrastructure, across providers and services. It's much easier to meet data security requirements when you know exactly where all your cloud assets are.`}
                    pageName='aboutUs'
                />
            </div>
            <div className='bg-lightGrey2' id='support'>
                <Support title='We support' data={dataSupport} sectionName='supportSection' />
            </div>
            <div className='max-w-1366px mx-auto pt-70px pb-70px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                <Sectionheader
                    headingText='Prioritize security-critical data repos to avoid exposure & breaches'
                    description={`With all cloud assets mapped out, IT and security teams can build a clear roadmap to protect data from external threats (unauthorized access, cyber threats, etc.) and internal risks (insider threats and human error).\n\nWe make it even easier to triage security tasks by automatically identifying which cloud assets hold critical data, who uses it and how. \n\nThe Cyscale Cloud Platform also automates the detection of policy violations and risky behavior. Avoid losing trade secrets and intellectual property that future innovation and profitability depend on.`}
                />
            </div>
            <div className='gradientBGCSPM pt-60px pb-60px'>
                <GetStarted
                    description={`Automate key data security tasks & keep your head above water`}
                    btnText='START YOUR FREE TRIAL'
                    btnLink={appLink}
                    ExternalLink
                    sectionName='cloudDataSecurity'
                    icon={getStartedICon}
                />
            </div>
            <div
                className='max-w-1366px mx-auto pt-70px pb-70px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'
                id='visualize'
            >
                <Sectionheader
                    headingText='Visualize access, permissions & relationships between your data and other digital assets'
                    pageName='dataSecurity'
                />
            </div>
            <Relationship />
            <div
                className='max-w-1366px mx-auto pt-70px pb-70px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'
                id='security-gaps'
            >
                <Sectionheader
                    headingText={`Comprehensive, blazing-fast classification that closes security gaps`}
                    description={`\n\nOur Cloud Platform gives you the visibility that goes deep into every layer of your cloud infrastructures.`}
                    pageName='dataSecurity'
                />
            </div>
            <div className='bg-white'>
                <Support data={dataSecurityGaps} sectionName='securityGaps' />
            </div>
            <Performance data={dataPerformance} id='performance' />
            <div className='gradientBGCSPM pt-65px pb-65px'>
                <GetStarted
                    description='Discover the most flexible pricing in the cloud security industry'
                    btnText='SEE PRICING OPTIONS'
                    btnLink='/pricing/'
                    icon={getStartedICon}
                />
            </div>
        </div>
    );
};

export default Index;
