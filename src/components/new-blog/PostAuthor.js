import React from 'react';
import data from '../careers/data';
import { find } from 'lodash';
export default function PostAuthor({ author, date, preview = false }) {
    const _author = find(data, ({ name }) => name === author) || author;

    if (preview) {
        return (
            <div>
                <span className='text-sm text-black  h-7 block py-1'>
                    By <strong>{typeof _author === 'string' ? _author : _author.name}</strong>
                    <br />
                    <span className='text-sm text-black text-opacity-70'>{new Date(date).toLocaleDateString()}</span>
                </span>
            </div>
        );
    }
    return (
        <div>
            {typeof _author === 'string' ? (
                <span className='text-sm text-black  h-7 block py-1'>
                    By <strong>{_author}</strong>
                    <br />
                    <span className='text-sm text-black text-opacity-70'>{new Date(date).toLocaleDateString()}</span>
                </span>
            ) : (
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='h-10 w-10 mr-2 rounded-full border-digital border overflow-hidden'>
                            {_author.photo}
                        </div>
                        <span className='text-sm text-black '>
                            By <strong>{_author.name}</strong>
                            <br />
                            <span className='text-sm text-black text-opacity-70'>
                                {new Date(date).toLocaleDateString()}
                            </span>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
