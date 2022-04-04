import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import data from '../careers/data';
import { find } from 'lodash';

export default function Author({ author }) {
    const _author = find(data, ({ name }) => name === author) || author;

    return (
        <div>
            {typeof _author === 'string' ? (
                <span className='text-sm text-black'>
                    By <strong>{_author}</strong>
                </span>
            ) : (
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='h-7 w-7 mr-2 rounded-full border-digital border overflow-hidden'>
                            {_author.photo}
                        </div>
                        <span className='text-xs text-black'>
                            By <strong>{_author.name}</strong>
                        </span>
                    </div>
                    <a
                        href={_author.linkedin}
                        className='text-sm flex hover:text-primary mt-1 text-neutral-600'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <FaLinkedin className='text-lg' />
                    </a>
                </div>
            )}
        </div>
    );
}
