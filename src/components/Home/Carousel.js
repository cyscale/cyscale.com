import React, { forwardRef, useState } from 'react';
import { css } from 'twin.macro';
import { graphql, useStaticQuery } from 'gatsby';
import { map } from 'lodash';
import HomePost from '../new-blog/PostHome';

const Carousel = forwardRef((props, ref) => {
    const data = useStaticQuery(graphql`
        query PostsPreviewHomeQuery {
            allMarkdownRemark(
                limit: 6
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
    const posts = data?.allMarkdownRemark?.edges;

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    const [startTime, setStartTime] = useState(null);
    const [duration, setDuration] = useState(0);

    const handleMouseDown = (e) => {
        setStartTime(new Date().getTime());

        setIsDragging(true);
        setStartX(e.pageX - ref.current.offsetLeft);
        setScrollLeft(ref.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - ref.current.offsetLeft;
        const walk = x - startX;
        ref.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = (e) => {
        setIsDragging(false);

        if (startTime) {
            const endTime = new Date().getTime();
            setDuration(endTime - startTime);
            setStartTime(null);
        }
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

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
                        max-width: calc(100vw - (((100vw - 80rem) / 2) + ((80rem / 12) * 4) + 1.7rem));
                    }
                `}
            >
                <div
                    ref={ref}
                    className='flex flex-nowrap gap-5 overflow-x-scroll scrollbar-hide z-10'
                    css={css`
                        scroll-behavior: ${isDragging ? 'auto' : 'smooth'};
                    `}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onKeyPress={() => {}}
                    role='presentation'
                >
                    {map(posts, ({ node }, index) => {
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
        </>
    );
});

export default Carousel;
