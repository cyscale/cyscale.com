import React from 'react';
import { Link } from 'gatsby';
import PostMeta from './PostMeta';
import Author from './Author';

export default function Post({ authors, categories, date, permalink, title, featuredimage }) {
    const imageRef = React.useRef();
    const imageHeight = imageRef?.current.clientHeight;
    return (
        <Link to={`/blog/${permalink}/`} className='rounded-xl bg-white block overflow-hidden group h-full'>
            <div className='bigger-box-image' ref={imageRef}>
                <img src={featuredimage.publicURL} alt={title} />
            </div>
            <div className='p-5 shadow-inner' style={{ height: `calc(100% - ${imageHeight || 300}px)` }}>
                <PostMeta date={date} categories={categories} />
                <h2 className='text-xl my-4 leading-tight group-hover:text-primary transition-all'>{title}</h2>
                <div className='mt-auto'>
                    <Author author={authors} />
                </div>
            </div>
        </Link>
    );
}
