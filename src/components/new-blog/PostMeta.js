import React from 'react';
import { formatDate } from '../../common/utils';
import Categories from './Categories';

export default function PostMeta({ categories, date }) {
    return (
        <div className='flex justify-between'>
            <span>
                <Categories categories={categories} />
            </span>
            <span className='text-xs text-black text-opacity-70'>{formatDate(date)}</span>
        </div>
    );
}
