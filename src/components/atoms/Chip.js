import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

export default function Chip({ children, active, className, ...rest }) {
    return (
        <Link
            className={classNames(
                'px-4 py-2 rounded-full bg-white bg-opacity-50 text-black text-opacity-70 text-sm',
                'hover:bg-opacity-100 hover:text-opacity-100 transition-all',
                { 'bg-opacity-100 text-opacity-100 text-primary': active },
                className
            )}
            {...rest}
        >
            {children}
        </Link>
    );
}
