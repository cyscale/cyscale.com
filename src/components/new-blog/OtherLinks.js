import React from 'react';
import { Container } from '../atoms/Containers';
import { css } from 'twin.macro';
import { ArticleLink, PageLink } from './ComplianceLinks';
import { Link } from 'gatsby';
import { cspmPages } from './CSPMLinks';
import { GatsbyImage } from 'gatsby-plugin-image';

const topArticles = [
    {
        text: 'CNAPP: A mix of CSPM & CWPP',
        link: '/blog/cnapp-a-mix-of-cspm-cwpp/'
    },
    {
        text: 'CSPM: A Comprehensive Guide',
        link: '/blog/cloud-security-posture-management-cspm-guide/'
    }
];

const OtherLinks = ({ dataBlueBird }) => {
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
                        Cloud-Native Security
                    </h2>
                    <div className='flex flex-col'>
                        {topArticles.map(({ text, link }) => (
                            <ArticleLink text={text} link={link} />
                        ))}
                        <Link
                            to='/blog/iam-services-in-aws-azure-gcp/'
                            className='text-base font-medium font-montserrat inline-block mt-4'
                        >
                            IAM Services in AWS, Azure, and GCP - A<br className='hidden lg:block' /> Cloud Industry
                            Overview
                        </Link>{' '}
                        <Link
                            to='/blog/implementing-iso-27001-for-cloud-native-systems/'
                            className='text-base font-medium font-montserrat inline-block mt-4'
                        >
                            Bridging the Gap Between ISO 27001
                            <br className='hidden lg:block' /> and Cloud-Native Systems
                        </Link>{' '}
                        <Link
                            to='/blog/iam-best-practices-from-aws-azure-gcp/'
                            className='text-base font-medium font-montserrat inline-block mt-4'
                        >
                            Securing IAM - Best Practices
                            <br className='hidden lg:block' /> Recommended by AWS, Azure, and GCP
                        </Link>{' '}
                        <Link
                            to='/blog/cloud-native-security-guide/'
                            className='text-base font-medium font-montserrat inline-block mt-4'
                        >
                            Cloud-Native Security: A Comprehensive
                            <br className='hidden lg:block' /> Guide to Securing Your Technology Stack
                        </Link>{' '}
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-8 sm:max-w-lg md:max-w-lg lg:max-w-4xl mx-auto lg:mx-0'>
                    <div
                        className='mt-6 lg:mt-4 rounded-xl py-6 relative flex'
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
                            {cspmPages.map(({ text, link }) => (
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

export default OtherLinks;
