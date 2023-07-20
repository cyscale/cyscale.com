import React from 'react';
import { css } from 'twin.macro';
import { Link } from 'gatsby';
import { Container } from '../atoms/Containers';
import { ArticleLink, PageLink } from './ComplianceLinks';
import { GatsbyImage } from 'gatsby-plugin-image';

export const topArticles = [
    {
        text: 'CNAPP: A mix of CSPM & CWPP',
        link: '/blog/cnapp-a-mix-of-cspm-cwpp/'
    },
    {
        text: 'CSPM: A Comprehensive Guide',
        link: '/blog/cloud-security-posture-management-cspm-guide/'
    },
    {
        text: 'What to Look for in a CSPM?',
        link: '/blog/what-to-look-for-in-a-cspm/'
    }
];

export const cspmPages = [
    {
        text: 'CSPM Tool',
        link: '/products/cloud-security-posture-management/'
    },
    {
        text: 'Cloud Data Security',
        link: '/use-cases/cloud-data-security/'
    },
    {
        text: 'Google Cloud Security',
        link: '/use-cases/gcp-cloud-security/'
    },
    {
        text: 'AWS Security & Compliance',
        link: '/use-cases/aws-cloud-security/'
    },
    {
        text: 'IAM Cloud Security',
        link: '/use-cases/iam-security/'
    },
    {
        text: 'Prevent Cloud Misconfiguration',
        link: '/use-cases/cloud-misconfigurations/'
    }
];

const CSPMLinks = ({ dataBlueBird }) => {
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
                        CSPM
                    </h2>
                    <div className='flex flex-col'>
                        {' '}
                        {topArticles.map(({ text, link }, index) => (
                            <ArticleLink text={text} link={link} key={index} />
                        ))}
                        <Link
                            to='/blog/cspm-visibility-compliance-security/'
                            className='text-base font-medium font-montserrat inline-block mt-4 hover:underline'
                        >
                            What is a CSPM and <br className='hidden lg:block' /> why should you consider using one?
                        </Link>
                        <Link
                            to='/blog/understanding-cspm-an-essential-guide/'
                            className='text-base font-medium font-montserrat inline-block mt-4 hover:underline'
                        >
                            Understanding Cloud Security Posture Management (CSPM): <br className='block sm:hidden' /> An Essential Guide
                        </Link>
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
                                Cloud Security
                            </h2>
                            <p className='text-base text-white'>
                                Ensure security and compliance with our all-in-one solution for multi-cloud
                                environments.
                            </p>
                            {cspmPages.map(({ text, link }, index) => (
                                <PageLink text={text} link={link} key={index} />
                            ))}
                        </div>

                        <div className='hidden lg:block absolute bottom-0 right-0'>
                            <GatsbyImage alt='' image={dataBlueBird.blueBird.childImageSharp.gatsbyImageData} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CSPMLinks;
