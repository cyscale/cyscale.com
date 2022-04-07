import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import data from '../careers/data';
import { find } from 'lodash';

export default function Author({ author }) {
    const _author = find(data, ({ name }) => name === author) || author;

    return (
        <div>
            {typeof _author === 'string' ? (
                <span className='text-xs text-black  h-7 block py-1'>
                    By <strong>{_author}</strong>
                </span>
            ) : (
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='h-7 w-7 mr-2 rounded-full border-digital border overflow-hidden'>
                            {React.cloneElement(_author.photo, { ..._author.photo.props, className: 'rounded-full overflow-hidden' })}
                        </div>
                        <span className='text-xs text-black'>
                            By <strong>{_author.name}</strong>
                        </span>
                    </div>
                    {_author.linkedin && (
                        <a
                            href={_author.linkedin}
                            onClick={(e) => e.stopPropagation()}
                            className='text-xs flex hover:text-primary mt-1 text-neutral-600'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <FaLinkedin className='text-lg' />
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}
