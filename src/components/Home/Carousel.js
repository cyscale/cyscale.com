import React, { forwardRef } from 'react';
import { css } from 'twin.macro';
import Post from '../new-blog/Post';
import { graphql, useStaticQuery } from 'gatsby';
import { map } from 'lodash';

const Carousel = forwardRef((props, ref) => {
    const data = useStaticQuery(graphql`
        query PostsPreviewHomeQuery {
            allMarkdownRemark(
                limit: 6
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            authors
                            categories
                            description
                            date
                            featuredimage {
                                publicURL
                                childImageSharp {
                                    gatsbyImageData(width: 820, layout: CONSTRAINED)
                                }
                            }
                            permalink
                            featuredpost
                            title
                        }
                    }
                }
            }
        }
    `);
    const posts = data?.allMarkdownRemark?.edges;

    return (
        <>
            <div
                className='absolute mt-4 lg:mt-0 z-10'
                css={css`
                    max-width: calc(100% - 1.25rem);
                    @media (min-width: 1024px) and (max-width: 1280px) {
                        max-width: calc(100vw - (((100vw - 80rem) / 2) + ((80rem / 12) * 4) + 3.6rem));
                    }
                    @media (min-width: 1280px) {
                        max-width: calc(100vw - (((100vw - 80rem) / 2) + ((80rem / 12) * 4) + 1.6rem));
                    }
                `}
            >
                <div
                    ref={ref}
                    className='flex flex-nowrap gap-5 overflow-x-scroll scrollbar-hide z-10'
                    css={css`
                        scroll-behavior: smooth;
                    `}
                >
                    {map(posts, ({ node }, index) => {
                        return (
                            <div className='py-4' key={index}>
                                <div className='w-72 lg:w-96 m-2 rounded-lg shadow-lg'>
                                    <Post {...node.frontmatter} homepage={true} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
});

export default Carousel;
