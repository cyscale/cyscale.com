import React from 'react';
import { Container } from '../atoms/Containers';
import { css } from 'twin.macro';
import { Link } from 'gatsby';
import ArrowRight from '../../assets/images/arrow-right-white.svg';
import { GatsbyImage } from 'gatsby-plugin-image';

const topArticles = [
    {
        text: 'PCI-DSS Compliance in the Cloud',
        link: '/blog/pci-dss-compliance-in-cloud/'
    },
    {
        text: 'NIST Compliance in the Cloud',
        link: '/blog/nist-compliance-in-the-cloud/'
    },
    {
        text: 'HIPAA Compliance in the Cloud',
        link: '/blog/hipaa-compliance-in-cloud/'
    }
];

const compliancePages = [
    {
        text: 'Cloud Security Compliance',
        link: '/use-cases/cloud-compliance-and-auditing/'
    },
    {
        text: 'SOC Cloud Security',
        link: '/use-cases/soc-2/'
    },
    {
        text: 'ISO 27001 Cloud Security',
        link: '/use-cases/iso-27001-compliance/'
    },
    {
        text: 'PCI Cloud Compliance',
        link: '/use-cases/pci-dss/'
    },
    {
        text: 'NIST Cloud Compliance',
        link: '/use-cases/nist-compliance/'
    }
];

export const ArticleLink = ({ text, link }) => {
    return (
        <Link to={link} className='text-base font-medium font-montserrat inline-block mt-4'>
            {text}
        </Link>
    );
};

export const PageLink = ({ text, link }) => {
    return (
        <Link to={link} className='flex mt-4'>
            <img src={ArrowRight} alt='' width={24} />
            <span className='text-base text-white font-montserrat font-bold ml-3'>{text}</span>
        </Link>
    );
};

const ComplianceLinks = ({ dataBlueBird }) => {
    return (
        <Container>
            <div className='my-24 grid grid-cols-12  md:gap-10'>
                <div className='col-span-12 lg:col-span-4 px-4 sm:px-0 sm:mx-auto lg:mx-0 max-w-xs sm:max-w-lg lg:max-w-lg '>
                    <p
                        className='text-base font-bold font-montserrat'
                        css={css`
                            color: #38aff1;
                        `}
                    >
                        TOP ARTICLES
                    </p>
                    <h2
                        className='font-bold font-montserrat'
                        css={css`
                            font-size: 2rem;
                        `}
                    >
                        Compliance
                    </h2>
                    <div className='flex flex-col'>
                        {' '}
                        <Link
                            to='/blog/AWS-SOC-2-Compliance-Checklist-A-Detailed-Guide/'
                            className='text-base font-medium font-montserrat inline-block mt-4'
                        >
                            AWS SOC 2 Compliance Checklist:
                            <br className='hidden lg:block' /> A Detailed Guide
                        </Link>{' '}
                        <Link
                            to='/blog/cloud-security-and-compliance/'
                            className='text-base font-medium font-montserrat inline-block mt-4'
                        >
                            Cloud Security and Compliance: A <br className='hidden lg:block' /> Guide for Your Cloud
                            Infrastructure
                        </Link>{' '}
                        {topArticles.map(({ text, link }) => (
                            <ArticleLink text={text} link={link} />
                        ))}
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-8 sm:max-w-lg md:max-w-lg lg:max-w-4xl mx-auto lg:mx-0'>
                    <div
                        className='mt-6 lg:mt-0 rounded-xl py-6 relative flex'
                        style={{
                            backgroundImage: 'linear-gradient(to bottom, #4a85eb, #326fe3, #1b58d8, #073fcc, #0623be)'
                        }}
                    >
                        <div className='pl-8 pr-8 xl:pr-0 lg:max-w-md'>
                            <h2
                                className='text-white font-bold font-montserrat'
                                css={css`
                                    font-size: 2rem;
                                `}
                            >
                                Our Compliance toolbox
                            </h2>
                            <p className='text-base text-white'>
                                Check out our compliance platform for cloud-native and cloud-first organizations:
                            </p>
                            {compliancePages.map(({ text, link }) => (
                                <PageLink text={text} link={link} />
                            ))}
                        </div>

                        <div className='hidden lg:block'>
                            <GatsbyImage
                                alt=''
                                image={dataBlueBird.blueBird.childImageSharp.gatsbyImageData}
                                className='absolute bottom-0 right-0'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ComplianceLinks;
