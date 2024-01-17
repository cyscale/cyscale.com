import React from 'react';
import data from '../careers/data';
import { find } from 'lodash';
import { formatDate } from '../../common/utils';
import { Link } from 'gatsby';

export default function PostAuthor({ author, date, preview = false }) {
    const _author = find(data, ({ name }) => name === author) || author;

    const authorUrls = {
        'Ovidiu Cical': { link: '/blog/ovidiu-cical', position: 'CEO & Founder at Cyscale' },
        'Manuela Țicudean': { link: '/blog/manuela-ticudean', position: 'CPO and Co-founder at Cyscale' },
        'Andrei Ștefănie': { link: '/blog/andrei-stefanie', position: 'Product Engineer at Cyscale' },
        'Sabrina Lupșan': { link: '/blog/sabrina-lupsan', position: 'Cloud Security Analyst at Cyscale' }
    };

    if (preview) {
        return (
            <div>
                <span className='text-sm text-black  h-7 block py-1 font-montserrat'>
                    By <strong>{typeof _author === 'string' ? _author : _author.name}</strong>
                    <br />
                    <span className='text-sm text-black text-opacity-70'>{formatDate(date)}</span>
                </span>
            </div>
        );
    }
    return (
        <div>
            {typeof _author === 'string' ? (
                <span className='text-sm text-black  h-7 block py-1 font-montserrat'>
                    By <strong>{_author}</strong>
                    <br />
                    <span className='text-sm text-black text-opacity-70'>{formatDate(date)}</span>
                </span>
            ) : (
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='h-14 w-14 mr-2 rounded-full border-digital border overflow-hidden hover:scale-[1.05]'>
                            <Link to={authorUrls[author].link}>
                                {React.cloneElement(_author.photo, {
                                    ..._author.photo.props,
                                    className: 'rounded-full overflow-hidden relative z-10'
                                })}
                            </Link>
                        </div>
                        <span className='text-sm text-black font-montserrat'>
                            By{' '}
                            <Link to={authorUrls[author].link} className='underline font-montserrat'>
                                <strong>{_author.name}</strong>
                            </Link>
                            <br />
                            <span className='text-sm text-black text-opacity-70 font-montserrat'>
                                {authorUrls[author].position}
                            </span>
                            <br />
                            <span className='text-sm text-black text-opacity-70 font-montserrat'>
                                {formatDate(date)}
                            </span>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
