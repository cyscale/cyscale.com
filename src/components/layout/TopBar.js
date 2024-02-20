import React, { useContext, useEffect, useRef } from 'react';
import closeIcon from '../../assets/images/white-close-icon.svg';
import TopBarContext from '../../context/TopBarContext';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { css } from 'twin.macro';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const TopBar = () => {
    const { topBar, setTopBar, setTopBarHeight } = useContext(TopBarContext);
    const ref = useRef(null);
    const data = useStaticQuery(graphql`
        query TopBarQuery {
            markdownRemark(frontmatter: { slug: { eq: "top-bar" } }) {
                frontmatter {
                    templateKey
                    enabled
                    slug
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
        if (ref.current) {
            setTopBarHeight(ref.current.offsetHeight);
        } else {
            setTopBarHeight(0);
        }
    }, [setTopBarHeight]);

    if (!topBar || !enabled) {
        return null;
    }

    return (
        <div
            ref={ref}
            className='bg-blue hidden lg:block'
            css={css`
                & a {
                    text-decoration: underline;
                }
                & p {
                    text-align: center;
                }
            `}
        >
            <div className='container max-w-7xl px-8 py-2 relative min-h-9 text-white flex font-montserrat items-center justify-center'>
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        a: renderLink
                    }}
                >
                    {content}
                </ReactMarkdown>
                <div
                    className='absolute right-10 top-0 bottom-0 flex items-center justify-end cursor-pointer ml-4 lg:ml-8'
                    onClick={() => {
                        setTopBar(false);
                    }}
                    tabIndex='0'
                    role='button'
                    aria-label='Close Top Bar'
                    onKeyDown={() => {}}
                >
                    <img
                        src={closeIcon}
                        alt=''
                        css={css`
                            height: 0.85rem;
                            width: 0.85rem;
                            transition: transform 0.2s ease-in-out;
                            &:hover {
                                transform: rotate(90deg);
                            }
                        `}
                        className='block'
                    />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
