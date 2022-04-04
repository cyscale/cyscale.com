import React, { useState, useEffect, useCallback } from 'react';
import BlogCard from './BlogCard';
import PageRight from './pageRight';
import { useStaticQuery, graphql } from 'gatsby';
// import { globalHistory } from '@reach/router';

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

    return { posts, featuredPost };
};

function Marge() {
    const [allPosts, setAllPosts] = useState([]);
    const [filter, setFilter] = useState('All');
    const [featuredPost, setFeaturedPost] = useState(null);
    // const activeAuthor = globalHistory?.location.search?.split('=')[1];

    const data = useStaticQuery(graphql`
        query HeaderQuery {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            ) {
                nodes {
                    frontmatter {
                        authors
                        categories
                        description
                        date
                        featuredimage {
                            publicURL
                        }
                        permalink
                        featuredpost
                        templateKey
                        title
                        tags
                    }
                }
            }
        }
    `);

    const nodes = data?.allMarkdownRemark?.nodes;

    useEffect(() => {
        const { posts, featuredPost } = getFeaturedAndPosts(nodes);
        setAllPosts(posts);
        setFeaturedPost(featuredPost);
    }, [nodes]);

    const filterCategory = useCallback(
        (name) => {
            setFilter(name);
            const { posts, featuredPost } = getFeaturedAndPosts(nodes);
            
            if (name === 'All') {
                setAllPosts(posts);
            } else {
                setAllPosts([...posts, featuredPost].filter((data) => data.frontmatter.categories[0] === name));
            }
        },
        [nodes]
    );

    return (
        <div>
            <div className='relative max-w-3xl mx-auto pt-12 lg:pt-6'>
                <div className='flex flex-wrap justify-left'>
                    {featuredPost && filter === 'All' && (
                        <div className='w-full p-2 pt-0 lg:p-6 lg:pt-0'>
                            <BlogCard fullWidth={true} data={featuredPost.frontmatter} feature={true} />
                        </div>
                    )}
                    {allPosts.map((curItem, index) => (
                        <div key={index} className='block w-full p-2 lg:p-6 md:w-1/2'>
                            <BlogCard data={curItem.frontmatter} />
                        </div>
                    ))}
                </div>
                <PageRight filterCategory={filterCategory} appliedFilter={filter} data={nodes} />
            </div>
        </div>
    );
}

export default Marge;
