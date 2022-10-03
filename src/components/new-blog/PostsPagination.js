import React from 'react';
import Layout from '../layout/CleanLayout';
import { Container, Row, Section } from '../atoms/Containers';
import Chip from '../atoms/Chip';
import { map, takeRight } from 'lodash';
import FeaturedPost from './FeaturedPost';
import Post from './Post';
import { Link } from 'gatsby';

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
    numPages
}) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;

    const { posts, featuredPost } = getFeaturedAndPosts(
        data.allMarkdownRemark.edges.map((edge) => edge.node),
        isFirst
    );

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
                        <div>
                            {!isFirst && (
                                <Link
                                    to={prevPagePath}
                                    rel='prev'
                                    className='bg-white mx-2 p-3 rounded-md text-grey2 shadow-md'
                                >
                                    &larr;
                                </Link>
                            )}
                            {Array.from({ length: numPages }, (_, i) => {
                                return (
                                    <Link
                                        key={i + 1}
                                        to={getPageNumberPath(i)}
                                        className={`${
                                            currentPage === i + 1 ? 'bg-selago' : 'bg-white'
                                        } mx-2 p-3 rounded-md shadow-md`}
                                    >
                                        {i + 1}
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
