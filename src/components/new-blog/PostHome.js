import React from 'react';
import { Link } from 'gatsby';
import PostMeta from './PostMeta';
import Author from './Author';
import { GatsbyImage as Img } from 'gatsby-plugin-image';
import { css } from 'twin.macro';

export default function HomePost({
    authors,
    categories,
    date,
    permalink,
    title,
    description,
    featuredimage,
    duration
}) {
    const linkRef = React.useRef();

    return (
        <div
            role='link'
            tabIndex={0}
            onClick={() => (duration > 150 ? null : linkRef.current.click())}
            onKeyDown={(e) => (e.code === 13 || e.code === 32) && linkRef.current.click()}
            className='rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer'
            draggable={false}
            style={{
                userSelect: 'none',
                WebkitUserSelect: 'none' /* Safari */,
                MozUserSelect: 'none' /* Firefox */,
                msUserSelect: 'none'
            }}
        >
            {featuredimage && (
                <div className='relative overflow-hidden' style={{ paddingBottom: '56.2%' }}>
                    <div className='absolute top-0 left-0'>
                        <Img
                            image={featuredimage?.childImageSharp?.gatsbyImageData}
                            alt={title}
                            imgStyle={{
                                borderTopLeftRadius: '0.75rem',
                                borderTopRightRadius: '0.75rem'
                            }}
                            draggable={false}
                        />
                    </div>
                </div>
            )}
            <div
                className='p-5 flex flex-col'
                css={css`
                    height: 14rem;
                `}
            >
                <PostMeta date={date} categories={categories} />
                <Link ref={linkRef} to={`/blog/${permalink}/`} draggable={false}></Link>
                <h2 className='text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16'>
                    {title}
                </h2>
                <div className='mt-auto'>
                    <Author author={authors} title={title} description={description} permalink={permalink} />
                </div>
            </div>
        </div>
    );
}
