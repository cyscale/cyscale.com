import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { css } from 'twin.macro';
import useScrollTrigger from '../scrollTrigger';
import { ctaTransition } from '../../assets/css/styles';
import classnames from 'classnames';
import { createSlug } from '../../common/utils';

const TOC = ({ markdown }) => {
    const trigger = useScrollTrigger();
    const [activeId, setActiveId] = useState('');
    const [toc, setToc] = useState([]);

    useEffect(() => {
        let headings = [];

        for (const match of markdown.matchAll(/(#{1,6})\s(.+?)(?=\n|$)/g)) {
            const depth = match[1].length;
            const value = match[2].trim();
            const slug = createSlug(value);

            const words = value.replace(/\u00A0/g, '').split(' ');
            const type = `h${depth}`;
            const level = parseInt(type.charAt(1));

            headings.push({
                slug,
                indent: level > 2 ? (level - 2) * 20 : 0,
                displayText: words.slice(0, 6).join(' ') + (words.length > 6 ? '...' : '')
            });
        }

        setToc(headings);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px' }
        );

        const targets = document.querySelectorAll('h1, h2, h3');
        targets.forEach((target) => observer.observe(target));

        return () => {
            targets.forEach((target) => observer.unobserve(target));
        };
        //eslint-disable-next-line
    }, []);

    return (
        <div
            className={classnames({
                'hidden xl:block sticky h-full': true,
                'top-0': trigger,
                'top-28': !trigger
            })}
            css={[
                css`
                    width: 20rem;
                `,
                ctaTransition
            ]}
        >
            <p
                className='font-montserrat text-xs font-semibold pr-2 mb-2'
                css={css`
                    margin-top: ${!trigger ? '2.5rem' : '0.938rem'};
                `}
            >
                CONTENTS
            </p>
            {toc.map((heading, index) => (
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
            ))}
        </div>
    );
};

export default TOC;
