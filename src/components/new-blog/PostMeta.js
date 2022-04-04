import React from 'react';
import { map } from 'lodash';

export default function PostMeta({ categories, date }) {
    return (
        <div className='flex justify-between'>
            <span>
                {map(categories, (item, key) => (
                    <span className='uppercase text-xs text-black text-opacity-70 mr-1' key={key}>
                        {item}
                    </span>
                ))}
            </span>
            <span className='text-xs text-black text-opacity-70'>{new Date(date).toLocaleDateString()}</span>
        </div>
    );
}
