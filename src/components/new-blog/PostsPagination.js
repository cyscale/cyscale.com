import React from 'react';
import Layout from '../layout/CleanLayout';
import { Container, Row } from '../atoms/Containers';
import Chip from '../atoms/Chip';
import { map, takeRight } from 'lodash';
import FeaturedPost from './FeaturedPost';
import Post from './Post';
import Pagination from './Pagination';
import { formatCategoryToSlug } from '../../common/utils';
import AuthorSection from './AuthorSection';
import classNames from 'classnames';

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
    heading,
    prevPagePath,
    nextPagePath,
    currentPage,
    getPageNumberPath,
    numPages,
    limit,
    author
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
                {author && (
                    <div className='bg-zircon pt-24 lg:pt32 pb-10'>
                        <div className='mx-auto max-w-4xl'>
                            <AuthorSection author={author} authorPage />
                        </div>
                    </div>
                )}
                <Container>
                    <div className={classNames({ 'pb-24 lg:pb-32': true, 'pt-24 lg:pt-32': !author })}>
                        {!author && <h1 className='text-3xl font-medium mb-4'>{heading}</h1>}
                        {!author && (
                            <div className='overflow-x-auto py-2 -mx-8 md:mx-0 pl-8 md:pl-0 hide-scrollbar max-w-screen'>
                                <Chip className='mr-2' to={`/blog/`} active={category === 'All'}>
                                    All
                                </Chip>
                                {map(categoriesList, (item) => (
                                    <Chip
                                        className='mr-2 last:mr-0'
                                        active={category === item}
                                        to={`/blog/${formatCategoryToSlug(item)}/`}
                                        key={item}
                                    >
                                        {item}
                                    </Chip>
                                ))}
                            </div>
                        )}
                        <Row className='mt-8 gap-4 lg:gap-8'>
                            {isFirst && (
                                <div className='col-span-12'>
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
                    </div>
                </Container>
                <Pagination
                    numPages={numPages}
                    currentPage={currentPage}
                    limit={limit}
                    prevPagePath={prevPagePath}
                    nextPagePath={nextPagePath}
                    getPageNumberPath={getPageNumberPath}
                    isFirst={isFirst}
                    isLast={isLast}
                />
            </Layout>
        </div>
    );
};

export default PostsPagination;
