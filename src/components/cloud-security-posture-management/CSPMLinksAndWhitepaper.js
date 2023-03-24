import React from 'react';
import { css } from 'twin.macro';
import { ArticleLink, PageLink } from '../new-blog/ComplianceLinks';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container } from '../atoms/Containers';
import { topArticles } from '../new-blog/CSPMLinks';

const cardTitle = css`
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    font-size: 1.75rem;
    line-height: 2rem;
`;

const CSPMLinksAndWhitepaper = () => {
    const data = useStaticQuery(graphql`
        query CSPMLinksAndWhitepaperQuery {
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
        }
    `);

    return (
        <Container>
            <div className='my-24 grid grid-cols-12 md:gap-10'>
                <div className='col-span-12 lg:col-span-4 px-4 sm:px-0 sm:mx-auto lg:mx-0 max-w-xs sm:max-w-lg lg:max-w-lg '>
                    <p
                        className='text-base font-bold font-montserrat'
                        css={css`
                            color: #38aff1;
                        `}
                    >
                        RECOMMENDED ARTICLES
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
                            className='text-base font-medium font-montserrat inline-block mt-4'
                        >
                            What is a CSPM and <br className='hidden lg:block' /> why should you consider using one?
                        </Link>{' '}
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-8 sm:max-w-lg md:max-w-lg lg:max-w-4xl mx-auto lg:mx-0'>
                    <div
                        className='mt-6 lg:mt-0 rounded-xl py-10 relative flex'
                        style={{
                            backgroundImage: 'linear-gradient(to bottom, #4a85eb, #326fe3, #1b58d8, #073fcc, #0623be)'
                        }}
                    >
                        <div className='pl-8 pr-8 xl:pr-0 lg:max-w-md'>
                            <h2 className='text-white font-bold font-montserrat' css={cardTitle}>
                                The Complete Guide <br className='hidden lg:block' /> to Cloud Storage Misconfigurations
                            </h2>
                            <p className='text-base text-white mt-4'>
                                This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data
                                security breaches and the importance of a secure cloud storage infrastructure.
                            </p>

                            <div className='mt-12'>
                                <PageLink
                                    text='Download Whitepaper'
                                    link='/whitepaper/cloud-storage-misconfigurations/'
                                />
                            </div>
                        </div>

                        <div className='hidden lg:block absolute bottom-0 right-0'>
                            <GatsbyImage alt='' image={data.card.childImageSharp.gatsbyImageData} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CSPMLinksAndWhitepaper;
