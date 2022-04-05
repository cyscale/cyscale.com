import React from 'react';
import { Link } from 'gatsby';
import { Row } from '../atoms/Containers';
import Author from './Author';
import PostMeta from './PostMeta';

export default function FeaturedPost({ authors, categories, date, permalink, title, featuredimage }) {
    const linkRef = React.useRef();

    return (
        <div
            role='link'
            tabIndex={0}
            onClick={() => linkRef.current.click()}
            onKeyDown={(e) => (e.code === 13 || e.code === 32) && linkRef.current.click()}
            className='rounded-xl bg-white block overflow-hidden group cursor-pointer'
        >
            <Row>
                <div className='col-span-4 p-5 flex flex-col justify-between shadow-inner min-h-72 lg:min-h-100'>
                    <PostMeta date={date} categories={categories} />
                    <Link to={`/blog/${permalink}/`} ref={linkRef}>
                        <h2 className='text-xl lg:text-3xl leading-tight font-medium group-hover:text-primary transition-all'>
                            {title}
                        </h2>
                    </Link>
                    <Author author={authors} />
                </div>
                <div className='col-span-8'>
                    <img src={featuredimage.publicURL} alt={title} />
                </div>
            </Row>
        </div>
    );
}
