import React from 'react';
import { Link } from 'gatsby';
import PostMeta from './PostMeta';
import Author from './Author';

export default function Post({ authors, categories, date, permalink, title, featuredimage }) {
    const linkRef = React.useRef();

    return (
        <div
            onClick={() => linkRef.current.click()}
            className='rounded-xl bg-white block overflow-hidden group h-full cursor-pointer'
        >
            <div className='bigger-box-image'>
                <img src={featuredimage.publicURL} alt={title} />
            </div>
            <div className='p-5 shadow-inner'>
                <PostMeta date={date} categories={categories} />
                <Link ref={linkRef} to={`/blog/${permalink}/`}>
                    <h2 className='text-lg my-4 leading-tight group-hover:text-primary transition-all h-16'>{title}</h2>
                </Link>
                <div className='mt-auto'>
                    <Author author={authors} />
                </div>
            </div>
        </div>
    );
}
