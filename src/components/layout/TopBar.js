import React, { useEffect, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { css } from 'twin.macro';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const TopBar = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    const data = useStaticQuery(graphql`
        query TopBarQuery {
            markdownRemark(frontmatter: { slug: { eq: "top-bar" } }) {
                frontmatter {
                    enabled
                    content
                }
            }
        }
    `);

    const renderLink = ({ href, children, ...props }) => {
        const isInternal = href && !href.startsWith('http') && !href.startsWith('https');

        return isInternal ? (
            <Link to={href} {...props}>
                {children}
            </Link>
        ) : (
            <a href={href} target='_blank' rel='noopener noreferrer' {...props}>
                {children}
            </a>
        );
    };

    const { enabled, content } = data.markdownRemark.frontmatter;



    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setIsAtTop(position === 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!enabled || !isAtTop) {
        return null;
    }

    return (
        <div
            className='bg-blue hidden lg:block'
            css={css`
                & a {
                    text-decoration: underline;
                    font-weight: 500;
                    font-size: 1rem;
                }
                & p {
                    text-align: center;
                    font-weight: 500;
                    font-size: 1rem;
                }
            `}
        >
            <div className='container max-w-7xl px-8 py-2 relative min-h-9 text-white flex font-hind items-center justify-center'>
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        a: renderLink
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default TopBar;
