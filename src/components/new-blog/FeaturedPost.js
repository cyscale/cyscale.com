import React from 'react';
import { Link } from 'gatsby';
import { Row } from '../atoms/Containers';
import Author from './Author';
import PostMeta from './PostMeta';

export default function FeaturedPost({ authors, categories, date, permalink, title, featuredimage }) {
    return (
        <Link to={`/blog/${permalink}/`} className='rounded-xl bg-white block overflow-hidden group'>
            <Row>
                <div style={{ minHeight: 400 }} className='col-span-4 p-5 flex flex-col justify-between shadow-inner'>
                    <PostMeta date={date} categories={categories} />
                    <h2 className='text-3xl leading-tight group-hover:text-primary transition-all'>{title}</h2>
                    <Author author={authors} />
                </div>
                <div className='col-span-8'>
                    <img src={featuredimage.publicURL} alt={title} />
                </div>
            </Row>
        </Link>
    );
}
