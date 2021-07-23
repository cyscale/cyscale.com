import React from 'react';
import PageLeft from '../blogs/pageLeft';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Skills = ({ btnText, btnLink }) => {
    const data = useStaticQuery(graphql`
        query HeaderQuery1ss {
            allMarkdownRemark(
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
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                        {nodes &&
                            nodes.map((content, index) => {
                                return (
                                    <PageLeft
                                        key={index}
                                        data={content.frontmatter}
                                    />
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

export default Skills;
