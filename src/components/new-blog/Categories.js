import { Link } from 'gatsby';
import React from 'react';
import { map } from 'lodash';
export default function Categories({ categories }) {
    return (
        <>
            {map(categories, (item, key) => (
                <Link
                    to={`/blog/${item.toLowerCase()}/`}
                    className='uppercase text-xs text-black text-opacity-70 mr-1 hover:text-primary hover:text-opacity-100 transition-all'
                    key={key}
                >
                    {item}
                </Link>
            ))}
        </>
    );
}
