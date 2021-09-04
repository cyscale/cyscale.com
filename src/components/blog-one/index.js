import React from 'react';
import BlogCard from '../blogs/BlogCard';
import { useStaticQuery, graphql } from 'gatsby';
import ParaGraphs from './paragraphs';
import HeroSection from './heroSection';

const Index = ({ data, location }) => {
    const dataCards = useStaticQuery(graphql`
        query HeaderQuery1 {
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
                        featuredpost
                        featuredimage {
                            publicURL
                        }
                        permalink
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
    } = dataCards;
    return (
        <>
            <div className='max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px mt-87px'>
                <ParaGraphs data={data} />
            </div>
            <div className='max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px mt-87px'>
                <HeroSection data={data} />
            </div>
            <div className='w-full max-w-2xl lg:max-w-5xl mx-auto pt-8'>
                <div className='flex flex-wrap justify-left'>
                    {nodes.map((curItem, key) => (
                        <div key={key} className='block w-full p-2 lg:p-4 lg:w-1/2 xl:w-1/3'>
                            <BlogCard  data={curItem.frontmatter} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Index;
