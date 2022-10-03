import React from 'react';
import Layout from '../layout/CleanLayout';
import { Container, Row, Section } from '../atoms/Containers';
import Chip from '../atoms/Chip';
import { map, takeRight } from 'lodash';
import FeaturedPost from './FeaturedPost';
import Post from './Post';
import { Link } from 'gatsby';
import { usePagination, DOTS } from '../../hooks/usePagination';

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

    console.log(paginationRange);

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
                        <div className="flex justify-between">
                            {!isFirst && (
                                <Link
                                    to={prevPagePath}
                                    rel='prev'
                                    className='bg-white mx-2 p-3 rounded-md text-grey2 shadow-md'
                                >
                                    &larr;
                                </Link>
                            )}
                            {paginationRange.map((pageNumber) => {
                                if (pageNumber === DOTS) {
                                    return <p>&#8230;</p>;
                                }

                                return (
                                    <Link
                                        key={pageNumber + 1}
                                        to={getPageNumberPath(pageNumber - 1)}
                                        className={`${
                                            currentPage === pageNumber ? 'bg-selago' : 'bg-white'
                                        } mx-2 p-3 rounded-md shadow-md`}
                                    >
                                        {pageNumber}
                                    </Link>
                                );
                            })}
                            {!isLast && (
                                <Link to={nextPagePath} rel='next' className='bg-white mx-2 p-3 rounded-md shadow-md'>
                                    &rarr;
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
