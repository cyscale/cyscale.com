import React from 'react';
import { Link } from 'gatsby';
import PostMeta from './PostMeta';
import Author from './Author';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

export default function Post({ authors, categories, date, permalink, title, featuredimage }) {
    const linkRef = React.useRef();

    return (
        <div
            role='link'
            tabIndex={0}
            onClick={() => linkRef.current.click()}
            onKeyDown={(e) => (e.code === 13 || e.code === 32) && linkRef.current.click()}
            className='rounded-xl bg-white block overflow-hidden group h-full cursor-pointer'
        >
            <div className='relative overflow-hidden' style={{ paddingBottom: '56.2%' }}>
                <div className='absolute top-0 left-0'>
                    <Img image={featuredimage?.childImageSharp?.gatsbyImageData} alt={title} />
                </div>
            </div>
            <div className='p-5 shadow-inner'>
                <PostMeta date={date} categories={categories} />
                <Link ref={linkRef} to={`/blog/${permalink}/`}>
                    <h2 className='text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16'>
                        {title}
                    </h2>
                </Link>
                <div className='mt-auto'>
                    <Author author={authors} />
                </div>
            </div>
        </div>
    );
}
