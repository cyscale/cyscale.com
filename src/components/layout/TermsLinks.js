import React from 'react';
import { Link } from 'gatsby';

const TermsLinks = ({ arrLinks }) => {
    return (
        <>
            {arrLinks.map((item, key) => {
                if (item.external) {
                    return (
                        <a
                            href={item.link}
                            key={key}
                            className='hover:underline text-xs'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {item.text}
                        </a>
                    );
                } else {
                    return (
                        <Link to={item.link} key={key} className='hover:underline text-xs'>
                            {item.text}
                        </Link>
                    );
                }
            })}
        </>
    );
};

export default TermsLinks;
