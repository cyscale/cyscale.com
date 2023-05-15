import React from 'react';
import Layout from '../components/layout/CleanLayout';
import BgHero from '../assets/images/sitemap-bg.png';
import { Container, Row } from '../components/atoms/Containers';
import { css } from 'twin.macro';
import { Link } from 'gatsby';
import ArrowRight from '../assets/images/black-arrow-right.svg';

const heroBackground = css`
    @media (max-width: 1024px) {
        height: 25rem;
        background-image: linear-gradient(#eeeeee, #e4edfc);
    }

    height: 30rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 75% 35%;
    background-image: url(${BgHero});

    @media (min-width: 1560px) {
        height: 35rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 80% 100%;
        background-image: url(${BgHero});
    }

    @media (min-width: 2561px) {
        height: 45rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 80% 100%;
        background-image: url(${BgHero});
    }
`;

const Subtitle = ({ text }) => <h2 className='font-montserrat font-bold text-xl'>{text}</h2>;

const SitemapLink = ({ text, link, flexItemsPosition, marginTop }) => (
    <div className={`flex mt-4 ${flexItemsPosition}`}>
        <img src={ArrowRight} alt='' width={15} />
        {/*<img src={RightArrow} width='15' alt='' />*/}
        <Link to={link} className={`font-montserrat text-base ml-1 hover:underline ${marginTop}`}>
            {text}
        </Link>
    </div>
);

const Sitemap = ({ location }) => {
    return (
        <Layout
            location={location}
            pageName='`Sitemap`'
            title='Sitemap - Cyscale'
            description='Our sitemap helps you easily access our diverse range of resources, including product use cases, thought leadership content, and valuable insights on cloud data security.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /sitemap
            </div>
            <div className='hidden' data-title>
                Sitemap - Cyscale
            </div>
            <div className='hidden' data-description>
                Our sitemap helps you easily access our diverse range of resources, including product use cases, thought
                leadership content, and valuable insights on cloud data security.
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div css={heroBackground} className='pt-8'>
                <div className='py-16 lg:pt-24 lg:pb-16'>
                    <Container>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 order-last lg:order-first'>
                                <div className='lg:mt-4 pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1
                                        className='text-left text-blue leading-normal lg:leading-normal mb-16 font-montserrat font-bold'
                                        css={css`
                                            font-size: 3.25rem;
                                        `}
                                    >
                                        Sitemap
                                    </h1>
                                    <p className='text-left text-base lg:text-lg mb-8 leading-relaxed font-hind'>
                                        Our sitemap helps you easily access our diverse range of resources, including
                                        product use cases, thought leadership content, and valuable insights on cloud
                                        data security.
                                    </p>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
            <Container>
                <div className='pt-20 pb-10 lg:pt-32 lg:pb-16'>
                    <div className='grid grid-cols-12 gap-x-6'>
                        <div className='col-span-12 lg:col-span-7'>
                            <div className='max-w-lg mx-auto lg:mx-0'>
                                <Subtitle text='Platform' />
                                <SitemapLink text='CNAPP Security' link='/products/cnapp/' />
                                <SitemapLink text='CSPM Tool' link='/products/cloud-security-posture-management/' />
                                <SitemapLink
                                    text='Security Knowledge Graph'
                                    link='/products/security-knowledge-graph/'
                                />
                                <SitemapLink
                                    text='Cloud Security Compliance'
                                    link='/use-cases/cloud-compliance-and-auditing/'
                                />
                                <SitemapLink
                                    text='Cloud Native Security Platform'
                                    link='/use-cases/cloud-native-security/'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-5 mt-16 lg:mt-0'>
                            <div className='max-w-lg mx-auto lg:mx-0'>
                                <Subtitle text='Use cases' />
                                <SitemapLink
                                    text='Automated Detection of Cloud Misconfigurations'
                                    link='/use-cases/cloud-misconfigurations/'
                                    flexItemsPosition='items-start'
                                    marginTop='-m-1'
                                />
                                <SitemapLink text='IAM Cloud Security' link='/use-cases/iam-security/' />
                                <SitemapLink
                                    text='Remote Work Cloud Security'
                                    link='/use-cases/remote-work-security/'
                                />
                                <SitemapLink text='Multi-Cloud Data Security' link='/use-cases/cloud-data-security/' />
                                <SitemapLink text='Container Security' link='/use-cases/container-security/' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='my-10 lg:my-16'>
                    <div className='grid grid-cols-12 gap-x-6'>
                        <div className='col-span-12 lg:col-span-7'>
                            <div className='max-w-lg mx-auto lg:mx-0'>
                                <Subtitle text='Compliance' />
                                <SitemapLink text='ISO 27001 Cloud Security' link='/use-cases/iso-27001-compliance/' />
                                <SitemapLink text='PCI Cloud Compliance' link='/use-cases/pci-dss/' />
                                <SitemapLink text='SOC 2 Cloud Security' link='/use-cases/soc-2/' />
                                <SitemapLink text='NIST Cloud Compliance' link='/use-cases/nist-compliance/' />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-5 mt-16 lg:mt-0 mb-10 lg:mb-0'>
                            <div className='max-w-lg mx-auto lg:mx-0'>
                                <Subtitle text='Environments' />
                                <SitemapLink
                                    text='AWS Cloud Security and Compliance'
                                    link='/use-cases/aws-cloud-security/'
                                    flexItemsPosition='items-start'
                                    marginTop='-m-1'
                                />
                                <SitemapLink
                                    text='Azure Cloud Security and Compliance'
                                    link='/use-cases/azure-cloud-security/'
                                    flexItemsPosition='items-start'
                                    marginTop='-m-1'
                                />
                                <SitemapLink
                                    text='Google Cloud Security and Compliance'
                                    link='/use-cases/gcp-cloud-security/'
                                    flexItemsPosition='items-start'
                                    marginTop='-m-1'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='mt-10 mb-20 lg:my-32'>
                    <div className='grid grid-cols-12 gap-x-6'>
                        <div className='col-span-12 lg:col-span-7'>
                            <div className='max-w-lg mx-auto lg:mx-0'>
                                <Subtitle text='Whitepapers' />
                                <SitemapLink
                                    text='The In-Depth Guide to Cloud Compliance in 2023'
                                    link='/whitepaper/the-complete-guide-to-cloud-compliance/'
                                    flexItemsPosition='items-start'
                                    marginTop='-m-1'
                                />
                                <SitemapLink
                                    text='The Complete Guide to Cloud Storage Misconfigurations'
                                    link='/whitepaper/cloud-storage-misconfigurations/'
                                    flexItemsPosition='items-start'
                                    marginTop='-m-1'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-5 mt-16 lg:mt-0'>
                            <div className='max-w-lg mx-auto lg:mx-0'>
                                <Subtitle text='Top Blog Articles' />
                                <SitemapLink
                                    text='Cloud-Native Security: A Comprehensive Guide to Securing Your Technology Stack'
                                    link='/blog/cloud-native-security-guide/'
                                    flexItemsPosition='items-start'
                                    marginTop='-m-1'
                                />
                                <SitemapLink
                                    text='Cloud Security and Compliance: A Guide for Your Cloud Infrastructure'
                                    link='/blog/cloud-security-and-compliance'
                                    flexItemsPosition='items-start'
                                    marginTop='-m-1'
                                />
                                <SitemapLink
                                    text='Bridging the Gap Between ISO 27001 and Cloud-Native Systems'
                                    link='/blog/implementing-iso-27001-for-cloud-native-systems/'
                                    flexItemsPosition='items-start'
                                    marginTop='-m-1'
                                />
                                <SitemapLink
                                    text='CNAPP: The Key to Secure Cloud-Native Applications'
                                    link='/blog/cnapp-secure-native-applications/'
                                    flexItemsPosition='items-start'
                                    marginTop='-m-1'
                                />
                                <SitemapLink
                                    text='Securing IAM - Best Practices Recommended by AWS, Azure, and GCP'
                                    link='/blog/iam-best-practices-from-aws-azure-gcp/'
                                    flexItemsPosition='items-start'
                                    marginTop='-m-1'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Sitemap;
