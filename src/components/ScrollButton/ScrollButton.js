import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import downDoubleArrow from '../../assets/images/banner-arrow-down.svg';

export default function ScrollButton({ to }) {
    return (
        <ScrollLink className='scroll-button cursor-pointer' to={to} smooth={true} duration={500}>
            <span><img src={downDoubleArrow} alt="" className="mx-auto" /></span>
        </ScrollLink>
    );
}
