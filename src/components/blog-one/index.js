import React, { useState } from 'react';
import BlogCard from './blogCard';
import { blogData } from './blogData';
import ParaGraphs from './paragraphs';
import HeroSection from './heroSection';

const Index = () => {
    const [item, setItem] = useState(blogData);
    return (
        <>
            <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px mt-87px">
                <ParaGraphs />
            </div>
            <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px mt-87px">
                <HeroSection />
            </div>
            <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px mt-87px">
                <div className="flex flex-wrap justify-between">
                    {item.map((curItem) => (
                        <BlogCard key={curItem.id} {...curItem} />
                    ))}
                </div>
            </div>
        </>
    );
};
export default Index;
