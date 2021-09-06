import React from 'react';
import BlogCard from '../blogs/BlogCard';
import ParaGraphs from './paragraphs';
import HeroSection from './heroSection';
import { map } from 'lodash-es';

const Index = ({ data, suggestions, location }) => {
    const permalink = data?.frontmatter?.permalink;

    const suggestedPosts = [];
    map(suggestions, ({ node }) => {
        if (suggestedPosts.length < 3 && node?.frontmatter?.permalink !== permalink) {
            suggestedPosts.push(node);
        }
    });
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
                    {suggestedPosts.map((curItem, key) => (
                        <div key={key} className='block w-full p-2 lg:p-4 lg:w-1/2 xl:w-1/3'>
                            <BlogCard data={curItem.frontmatter} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Index;
