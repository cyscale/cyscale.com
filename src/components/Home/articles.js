import React from 'react';
import BlogCard from '../blogs/BlogCard';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Articles = ({ btnText, btnLink }) => {
    const data = useStaticQuery(graphql`
        query HeaderQuery1ss {
            allMarkdownRemark(
                limit: 3
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            ) {
                nodes {
                    frontmatter {
                        authors
                        category
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
    const {
        allMarkdownRemark: { nodes }
    } = data;
    return (
        <>
            <div className='bg-white block'>
                <div className='max-w-1366px m-auto pb-86px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                    <div className='flex flex-wrap justify-left'>
                        {nodes &&
                            nodes.map((content, index) => {
                                return (
                                    <div key={index} className='block w-full p-2 lg:p-4 lg:w-1/2 xl:w-1/3'>
                                        <BlogCard data={content.frontmatter} />
                                    </div>
                                );
                            })}
                    </div>
                    <div className='block w-full mt-50px text-center'>
                        <div className='mt-24px mx-auto w-auto flex justify-center'>
                            <Link
                                to={btnLink}
                                className='gradientBgBtn min-w-232px text-16px font-medium rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline'
                            >
                                {btnText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Articles;
