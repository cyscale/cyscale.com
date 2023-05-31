import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { css } from 'twin.macro';

const TOC = ({ toc, activeId }) => {
    return toc.map((heading, index) => {
        return (
            <div
                key={index}
                className='font-montserrat text-xs font-semibold px-2 py-2 hover:text-blue'
                css={css`
                    padding-left: calc(${(heading.indent + 8) / 16}rem);
                    color: ${activeId === heading.slug ? '#0f26aa' : 'inherit'};
                    font-weight: ${activeId === heading.slug && activeId !== '' ? '700' : '500'};
                    border-left: 0.063rem solid ${activeId === heading.slug ? '#0f26aa' : 'rgba(0, 0, 0, 0.1)'};
                    &:hover {
                        border-left: 0.063rem solid #0f26aa;
                    }
                `}
            >
                <ScrollLink
                    className='cursor-pointer'
                    to={`${heading.slug}`}
                    smooth={true}
                    duration={500}
                    offset={-100}
                >
                    {heading.displayText}
                </ScrollLink>
            </div>
        );
    });
};

export default TOC;
