import React from 'react';
import { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container } from '../atoms/Containers';
import { graphql, Link, useStaticQuery } from 'gatsby';
import LatestArticlesCarousel from '../thank-you/LatestArticlesCarousel';
import PostsPreview from './PostsPreview';
import ArrowRight from '../../assets/images/arrow-right-white.svg';

const pages = [
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

export const ArticleLink = ({ text, link }) => {
    return (
        <Link to={link} className='text-base font-medium font-montserrat inline-block mt-4 hover:underline'>
            {text}
        </Link>
    );
};

export const PageLink = ({ text, link }) => {
    return (
        <Link to={link} className='flex mt-4'>
            <img src={ArrowRight} alt='' width={24} loading='lazy' />
            <span className='text-base text-white font-montserrat font-bold ml-3 hover:underline'>{text}</span>
        </Link>
    );
};

const LatestCategoryArticles = ({ category, latestArticles }) => {
    const data = useStaticQuery(graphql`
        query LatestCategoryQuery {
            toolbox: file(relativePath: { eq: "compliance-toolbox-blog.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 366, layout: FIXED)
                }
            }
        }
    `);

    return (
        <>
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
                            className='font-bold font-montserrat text-blue'
                            css={css`
                                font-size: 2rem;
                            `}
                        >
                            {category}
                        </h2>
                        <div className='flex flex-col'>
                            {latestArticles.map((item, index) => (
                                <ArticleLink
                                    text={item.title}
                                    link={`/blog/${item.permalink}`}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-8 sm:max-w-lg md:max-w-lg lg:max-w-4xl mx-auto lg:mx-0'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl flex'
                            css={css`
                                background-image: linear-gradient(
                                    to bottom,
                                    #4a85eb,
                                    #326fe3,
                                    #1b58d8,
                                    #073fcc,
                                    #0623be
                                );
                            `}
                        >
                            <div className='pl-8 pr-8 xl:pr-0 py-6 lg:max-w-md'>
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
                                {pages.map(({ text, link }, index) => (
                                    <PageLink text={text} link={link} key={index} />
                                ))}
                            </div>
                            <div
                                className='hidden lg:block relative'
                                css={css`
                                    width: 22.875rem;
                                `}
                            >
                                <div className='absolute bottom-0 right-0'>
                                    <GatsbyImage alt='' image={data.toolbox.childImageSharp.gatsbyImageData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div
                css={css`
                    background-color: #f5f9ff;
                `}
            >
                <div className='container max-w-7xl m-auto px-4 lg:px-8'>
                    <p
                        className='font-base font-montserrat font-bold pt-16'
                        css={css`
                            color: #38aff1;
                        `}
                    >
                        LATEST ARTICLES
                    </p>
                    <h3
                        className='font-bold font-montserrat text-blue'
                        css={css`
                            font-size: 2rem;
                        `}
                    >
                        What we’re up to
                    </h3>
                    <div className='hidden lg:block pt-6 pb-24'>
                        <PostsPreview bg='transparent' blog />
                    </div>
                </div>
            </div>
            <div
                className='block lg:hidden'
                css={css`
                    padding-bottom: 32rem;
                    background-color: #f5f9ff;
                `}
            >
                <div
                    className='relative'
                    css={css`
                        background-color: red;
                    `}
                >
                    <LatestArticlesCarousel maxWidthModifier={0} />
                </div>
            </div>
        </>
    );
};

export default LatestCategoryArticles;
