import React from 'react';
import Layout from '../layout/CleanLayout';
import { Container, Row, Section } from '../atoms/Containers';
import Chip from '../atoms/Chip';
import { map, takeRight } from 'lodash';
import FeaturedPost from './FeaturedPost';
import Post from './Post';
import { Link } from 'gatsby';
import { usePagination, DOTS } from '../../hooks/usePagination';
import { css } from 'twin.macro';
import Back from '../../assets/images/back-pagination.svg';
import Forward from '../../assets/images/forward-pagination.svg';
import classnames from 'classnames';

const activePage = css`
    height: 2.5rem;
    width: 2.5rem;
`;

const getFeaturedAndPosts = (nodes, isFirst) => {
    const posts = [];
    let featuredPost = null;

    nodes?.map((item) => {
        if (item?.frontmatter?.featuredpost === true && featuredPost === null) {
            featuredPost = item;
        } else {
            posts.push(item);
        }
        return null;
    });
    if (!featuredPost) {
        featuredPost = posts[0];
        delete posts[0];
    }

    if (isFirst) {
        return { posts, featuredPost };
    }

    return { posts: nodes };
};

const PostsPagination = ({
    data,
    seoTitle,
    seoDescription,
    location,
    categoriesList,
    category,
    prevPagePath,
    nextPagePath,
    currentPage,
    getPageNumberPath,
    numPages,
    limit
}) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const totalCount = numPages * limit;
    const siblingCount = 1;
    const pageSize = limit;

    const { posts, featuredPost } = getFeaturedAndPosts(
        data.allMarkdownRemark.edges.map((edge) => edge.node),
        isFirst
    );

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    return (
        <div className='bg-lightGrey2'>
            <Layout title={seoTitle} description={seoDescription} pageName='blog' location={location}>
                <Container>
                    <Section>
                        <h1 className='text-3xl font-medium mb-4'>Welcome to the Cyscale blog</h1>
                        <div className='overflow-x-auto py-2 -mx-8 md:mx-0 pl-8 md:pl-0 hide-scrollbar max-w-screen'>
                            <Chip className='mr-2' to={`/blog/`} active={category === 'All'}>
                                All
                            </Chip>
                            {map(categoriesList, (item) => (
                                <Chip
                                    className='mr-2 last:mr-0'
                                    active={category === item}
                                    to={`/blog/${item.toLowerCase()}/`}
                                    key={item}
                                >
                                    {item}
                                </Chip>
                            ))}
                        </div>
                        <Row className='mt-8 gap-4 lg:gap-8'>
                            {isFirst && (
                                <div className='col-span-12' id='what in the world are you talking about?'>
                                    <div className='hidden md:block'>
                                        {posts && <FeaturedPost {...featuredPost.frontmatter} />}
                                    </div>
                                    <div className='block md:hidden'>
                                        {featuredPost && <Post {...featuredPost.frontmatter} />}
                                    </div>
                                </div>
                            )}
                            {isFirst && (
                                <div className='col-span-12 md:col-span-6'>
                                    {posts[0] && <Post {...posts[0].frontmatter} />}
                                </div>
                            )}
                            {isFirst && (
                                <div className='col-span-12 md:col-span-6'>
                                    {posts[1] && <Post {...posts[1].frontmatter} />}
                                </div>
                            )}
                            {map(takeRight(posts, isFirst ? posts.length - 2 : posts.length + 1), (post, key) => (
                                <div className='col-span-12 md:col-span-6 lg:col-span-4' key={key}>
                                    {post && <Post {...post.frontmatter} />}
                                </div>
                            ))}
                        </Row>
                    </Section>
                </Container>
                {numPages >= 2 && (
                    <div className='flex justify-center mb-20'>
                        <div className='flex justify-between'>
                            {!isFirst && (
                                <Link
                                    to={prevPagePath}
                                    rel='prev'
                                    className='bg-transparent text-grey2 flex justify-center items-center bg-transparent rounded-md hover:bg-grey3'
                                    css={activePage}
                                >
                                    <img src={Back} alt='' />
                                </Link>
                            )}
                            {paginationRange.map((pageNumber) => {
                                if (pageNumber === DOTS) {
                                    return (
                                        <a className='flex items-center mx-0.5 sm:mx-2' key={pageNumber + 1}>
                                            <span>&bull;&bull;&bull;</span>
                                        </a>
                                    );
                                }

                                return (
                                    <Link
                                        key={pageNumber + 1}
                                        to={getPageNumberPath(pageNumber - 1)}
                                        className={classnames('flex justify-center items-center mx-0.5 sm:mx-2', {
                                            'bg-white rounded-md': currentPage === pageNumber,
                                            'bg-transparent rounded-md hover:bg-grey3': currentPage !== pageNumber
                                        })}
                                        css={activePage}
                                    >
                                        <span>{pageNumber}</span>
                                    </Link>
                                );
                            })}
                            {!isLast && (
                                <Link
                                    to={nextPagePath}
                                    rel='next'
                                    className='bg-transparent flex justify-center items-center bg-transparent rounded-md hover:bg-grey3'
                                    css={activePage}
                                >
                                    <img src={Forward} alt='' />
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </Layout>
        </div>
    );
};

export default PostsPagination;
