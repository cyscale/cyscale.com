import React from 'react';
import { resources } from '../../nav';
import { Link } from 'gatsby';

const ResourcesMobile = () => {
    return (
        <div className='bg-white pb-48'>
            {resources.map((item, key) => {
                return item.external ? (
                    <div className='py-2 px-8' key={key}>
                        <a href={item.link} className='text-base pt-4 block' key={key}>
                            {item.text}
                        </a>
                    </div>
                ) : (
                    <div className='py-2 px-8' key={key}>
                        <Link to={item.link} className='text-base pt-4 block' key={key}>
                            {item.text}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default ResourcesMobile;
