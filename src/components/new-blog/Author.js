import React from 'react';
import data from '../careers/data';
import { find } from 'lodash';
import Share from '../Share/Share';
import { Link } from 'gatsby';
export default function Author({ author, permalink, title }) {
    const _author = find(data, ({ name }) => name === author) || author;

    const authorLinkMap = {
        'Ovidiu Cical': 'ovidiu-cical',
        'Manuela Țicudean': 'manuela-ticudean',
        'Andrei Ștefănie': 'andrei-stefanie',
        'Sabrina Lupșan': 'sabrina-lupsan'
    };

    return (
        <div>
            {typeof _author === 'string' ? (
                <span className='text-xs text-black  h-7 block py-1'>
                    By <strong>{_author}</strong>
                </span>
            ) : (
                <div className='flex justify-between items-center'>
                    <Link
                        className='flex items-center z-20'
                        to={`/blog/${authorLinkMap[_author.name]}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='h-7 w-7 mr-2 rounded-full border-digital border'>
                            {React.cloneElement(_author.photo, {
                                ..._author.photo.props,
                                className: 'rounded-full overflow-hidden relative z-10',
                                alt: 'Author image'
                            })}
                        </div>
                        <span className='text-xs text-black font-montserrat hover:underline'>
                            By <strong>{_author.name}</strong>
                        </span>
                    </Link>
                    <Share title={title} permalink={permalink} />
                </div>
            )}
        </div>
    );
}
