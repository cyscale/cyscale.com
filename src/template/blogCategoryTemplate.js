import React from 'react';
import Layout from '../components/layout/CleanLayout';
import { Section, Container, Row } from '../components/atoms/Containers';
import { map, takeRight } from 'lodash';
import Chip from '../components/atoms/Chip';
import FeaturedPost from '../components/new-blog/FeaturedPost';
import Post from '../components/new-blog/Post';
import { graphql, Link } from 'gatsby';

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

const BlogList = ({ pageContext, location, data }) => {
    const { category, categoriesList, seoTitle, seoDescription } = pageContext;
    console.log(data)
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPagePath =
        currentPage - 1 === 1 || currentPage - 1 === 0 ? '/blog/' : '/blog/' + (currentPage - 1).toString();
    const nextPagePath = '/blog/' + (currentPage + 1).toString();
    const getPageNumberPath = (currentIndex) => {
        if (currentIndex === 0) {
            return '/blog';
        }

        return '/blog/' + (currentIndex + 1);
    };

    let { posts, featuredPost } = getFeaturedAndPosts(
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
            </Layout>
        </div>
    );
};
export default BlogList;

export const query = graphql`
    query BlogsQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { order: DESC, fields: frontmatter___date }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    frontmatter {
                        authors
                        categories
                        title
                        seoTitle
                        description
                        seoDescription
                        date
                        featuredpost
                        permalink
                        featuredimage {
                            publicURL
                            childImageSharp {
                                gatsbyImageData(width: 820, layout: CONSTRAINED)
                            }
                        }
                    }
                    rawMarkdownBody
                }
            }
        }
    }
`;
