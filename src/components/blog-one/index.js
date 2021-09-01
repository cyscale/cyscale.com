import React from 'react';
import PageLeft from '../blogs/pageLeft';
import { useStaticQuery, graphql } from 'gatsby';
import ParaGraphs from './paragraphs';
import HeroSection from './heroSection';

const Index = ({ data, location }) => {
    const dataCards = useStaticQuery(graphql`
        query HeaderQuery1 {
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
            <div className='max-w-3xl mx-auto pt-8'>
                <div className='flex flex-wrap justify-evenly'>
                    {nodes.map((curItem, key) => (
                        <PageLeft key={key} data={curItem.frontmatter} />
                    ))}
                </div>
            </div>
        </>
    );
};
export default Index;
