import React from 'react';
import { Container } from '../atoms/Containers';
import { css } from 'twin.macro';
import { ArticleLink, PageLink } from '../new-blog/ComplianceLinks';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const cardTitle = css`
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    font-size: 1.75rem;
    line-height: 2rem;
`;

const LinksAndWhitepaper = ({ topArticles, data, title, titleCard, textCard, linkCard }) => {
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
                        {title}
                    </h2>
                    <div className='flex flex-col'>
                        {' '}
                        {topArticles.map(({ text, link, children }, index) => {
                            if (children) {
                                return (
                                    <Link
                                        to={link}
                                        className='text-base font-medium font-montserrat inline-block mt-4'
                                        key={index}
                                        dangerouslySetInnerHTML={{ __html: text }}
                                    />
                                );
                            }
                            return <ArticleLink text={text} link={link} key={index} />;
                        })}
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
                            <h2
                                className='text-white font-bold font-montserrat relative z-10'
                                css={cardTitle}
                                dangerouslySetInnerHTML={{ __html: titleCard }}
                            />
                            <p
                                className='text-base text-white mt-4 relative z-10'
                                dangerouslySetInnerHTML={{ __html: textCard }}
                                css={css`
                                    @media screen and (min-width: 1024px) and (max-width: 1080px) {
                                        max-width: 20rem;
                                    }
                                `}
                            />

                            <div className='mt-12'>
                                <PageLink text='Download Whitepaper' link={linkCard} />
                            </div>
                        </div>

                        <div className='hidden lg:block absolute bottom-0 right-0'>
                            <GatsbyImage image={data.card.childImageSharp.gatsbyImageData} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LinksAndWhitepaper;
