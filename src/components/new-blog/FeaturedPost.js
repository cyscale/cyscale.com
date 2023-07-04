import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import PostMeta from './PostMeta';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

export default function FeaturedPost({ authors, categories, description, date, permalink, title, featuredimage }) {
    const linkRef = React.useRef();

    return (
        <div
            role='link'
            tabIndex={0}
            onClick={() => linkRef.current.click()}
            onKeyDown={(e) => (e.code === 13 || e.code === 32) && linkRef.current.click()}
            className='rounded-xl shadow-lg bg-white block overflow-hidden group cursor-pointer'
        >
            <div className='grid grid-cols-12'>
                <div className='col-span-4 p-5 flex flex-col justify-between min-h-72 lg:min-h-100'>
                    <PostMeta date={date} categories={categories} />
                    <Link to={`/blog/${permalink}/`} ref={linkRef}>
                        <h2 className='text-xl lg:text-3xl leading-tight font-medium group-hover:text-primary transition-all font-montserrat'>
                            {title}
                        </h2>
                    </Link>
                    <Author author={authors} title={title} permalink={permalink} />
                </div>
                <div className='col-span-8'>
                    <Img image={featuredimage.childImageSharp.gatsbyImageData} alt={title} />
                </div>
            </div>
        </div>
    );
}
