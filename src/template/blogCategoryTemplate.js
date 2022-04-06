import React from 'react';
import Layout from '../components/layout/CleanLayout';
import { Section, Container, Row } from '../components/atoms/Containers';
import { map, takeRight } from 'lodash';
import Chip from '../components/atoms/Chip';
import FeaturedPost from '../components/new-blog/FeaturedPost';
import Post from '../components/new-blog/Post';

const getFeaturedAndPosts = (nodes) => {
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
    return { posts, featuredPost };
};

const BlodDetail = ({ pageContext, location }) => {
    const { posts, category, categoriesList, seoTitle, seoDescription } = pageContext;
    const { posts: postsList, featuredPost } = getFeaturedAndPosts(posts);

    return (
        <div className='bg-lightGrey2'>
            <Layout title={seoTitle} description={seoDescription} pageName='blog' location={location}>
                <Container>
                    <Section>
                        <h1 className='text-3xl font-medium mb-4'>Welcome to cyscale blog</h1>
                        <div className='overflow-x-auto py-2 -mx-8 md:mx-0 pl-8 md:pl-0 hide-scrollbar'>
                            <Chip className='mr-2' to={`/blog/`} active={category === 'All'}>
                                All
                            </Chip>
                            {map(categoriesList, (item) => (
                                <Chip
                                    className='mr-2'
                                    active={category === item}
                                    to={`/blog/${item.toLowerCase()}/`}
                                    key={item}
                                >
                                    {item}
                                </Chip>
                            ))}
                        </div>
                        <Row className='mt-8 gap-8'>
                            <div className='col-span-12'>
                                <div className='hidden md:block'>
                                    {featuredPost && <FeaturedPost {...featuredPost.frontmatter} />}
                                </div>
                                <div className='block md:hidden'>
                                    {featuredPost && <Post {...featuredPost.frontmatter} />}
                                </div>
                            </div>
                            <div className='col-span-12 md:col-span-6'>
                                {postsList[0] && <Post {...postsList[0].frontmatter} />}
                            </div>
                            <div className='col-span-12 md:col-span-6'>
                                {postsList[1] && <Post {...postsList[1].frontmatter} />}
                            </div>
                            {map(takeRight(postsList, postsList.length - 2), (post, key) => (
                                <div className='col-span-12 md:col-span-6 lg:col-span-4' key={key}>
                                    {post && <Post {...post.frontmatter} />}
                                </div>
                            ))}
                        </Row>
                    </Section>
                </Container>
            </Layout>
        </div>
    );
};
export default BlodDetail;
