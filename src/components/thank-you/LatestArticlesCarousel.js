import React from 'react';
import { map } from 'lodash';
import { graphql, useStaticQuery } from 'gatsby';
import HomePost from '../new-blog/PostHome';
import { css } from 'twin.macro';

const LatestArticlesCarousel = ({ duration, maxWidthModifier = 1 }) => {
    const data = useStaticQuery(graphql`
        query PostsPreviewQuery {
            allMarkdownRemark(
                limit: 3
                sort: { frontmatter: { date: DESC } }
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

    return (
        <div
            className='absolute mt-4 lg:mt-0 z-10'
            css={css`
                max-width: calc(100% + ${maxWidthModifier}rem);
            `}
        >
            <div className='flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10'>
                {map(data?.allMarkdownRemark?.edges, ({ node }, index) => {
                    return (
                        <div className='py-4' key={index}>
                            <div className='w-72 lg:w-96 m-2 rounded-lg shadow-lg'>
                                <HomePost {...node.frontmatter} duration={duration} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LatestArticlesCarousel;
