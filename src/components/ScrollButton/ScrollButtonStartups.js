import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import upsideDownTriangle from '../../assets/images/upside-down-triangle.svg';

export default function ScrollButtonStartups({ to, pageName, btnText }) {
    return (
        <>
            <ScrollLink
                className='scroll-button-startups cursor-pointer'
                to={to}
                smooth={true}
                duration={500}
            >
          <span>
            <img src={upsideDownTriangle} alt='down arrow icon' className='mx-auto' height={15} width={15}
                 style={{ marginRight: '0.375rem', marginTop: '0.563rem' }} />
          </span>
            </ScrollLink>
        </>
    );
}