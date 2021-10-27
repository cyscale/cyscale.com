import React from 'react';
import BlogCard from '../blogs/BlogCard';
import ParaGraphs from './paragraphs';
import HeroSection from './heroSection';

const Index = ({ data, suggestions, location }) => {
    const permalink = data?.frontmatter?.permalink;

    const suggestedPosts = [];
    suggestions?.map(({ node }) => {
        if (suggestedPosts.length < 3 && node?.frontmatter?.permalink !== permalink) {
            suggestedPosts.push(node);
        }
        return null;
    });
    return (
        <>
            <div className='max-w-3xl mx-auto px-12 mt-10'>
                <ParaGraphs data={data} />
            </div>
            <div className='max-w-3xl mx-auto px-12 mt-10'>
                <HeroSection data={data} />
            </div>
            <div className='w-full max-w-3xl lg:max-w-5xl mx-auto pt-8'>
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
