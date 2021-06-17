import './style.scss';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function ScrollButton({ to }) {
    return (
        <ScrollLink className='scroll-button' to={to} smooth={true} duration={500}>
            <span></span>
        </ScrollLink>
    );
}
