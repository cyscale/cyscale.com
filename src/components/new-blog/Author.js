import React from 'react';
import data from '../careers/data';
import { find } from 'lodash';
import Share from '../Share/Share';
export default function Author({ author, permalink, title }) {
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
                        <div className='h-7 w-7 mr-2 rounded-full border-digital border'>
                            {React.cloneElement(_author.photo, {
                                ..._author.photo.props,
                                className: 'rounded-full overflow-hidden relative z-10'
                            })}
                        </div>
                        <span className='text-xs text-black'>
                            By <strong>{_author.name}</strong>
                        </span>
                    </div>
                    <Share title={title} permalink={permalink}  />
                </div>
            )}
        </div>
    );
}
