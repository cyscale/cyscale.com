import React from 'react';
import { Row, Container } from '../atoms/Containers';
import PostAuthor from './PostAuthor';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Categories from './Categories';
import Post from './Post';
import { map, filter, slice } from 'lodash';
import Share from '../Share/Share';
import { useAppLink } from '../../common/links';
import { Link as ScrollLink } from 'react-scroll';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

export default function PostContent({ data, suggestions, preview = false }) {
    const appLink = useAppLink();
    return (
        <div>
            <div className='container max-w-4xl m-auto px-8 '>
                <div className='py-10  border-b border-lightGrey2 lg:border-0'>
                    <Row>
                        <div className='col-span-12 lg:col-span-6 flex flex-col justify-between'>
                            {data.categories && (
                                <div>
                                    <Categories categories={data.categories} />
                                </div>
                            )}
                            <h1 className='text-2xl my-4 font-medium'>{data.title}</h1>
                            {data.authors && <PostAuthor preview={preview} date={data.date} author={data.authors} />}
                        </div>
                        <div className='mt-8 lg:mt-0 col-span-12 lg:col-span-6'>
                            {!preview ? (
                                <Img
                                    image={data.featuredimage.childImageSharp.gatsbyImageData}
                                    className='rounded-lg overflow-hidden shadow-md'
                                    alt={data.title}
                                />
                            ) : (
                                <img src={data.featuredimage.publicURL} className='rounded-lg' alt={data.title} />
                            )}
                        </div>
                    </Row>
                </div>
                <div className='blog-reset'>
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        linkTarget='_blank'
                        components={{
                            toc({ node, className, children, ...props }) {
                                return (
                                    <ScrollLink className={className} {...props} smooth={true} duration={500}>
                                        {children}
                                    </ScrollLink>
                                );
                            },
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <div style={{ fontSize: '0.875rem' }}>
                                        <SyntaxHighlighter
                                            children={String(children).replace(/\n$/, '')}
                                            language={match[1]}
                                            PreTag='div'
                                            {...props}
                                        />
                                    </div>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            }
                        }}
                    >
                        {data.rawMarkdownBody}
                    </ReactMarkdown>
                </div>

                {!preview && (
                    <>
                        <a
                            target='_blank'
                            href={appLink}
                            rel='noopener noreferrer'
                            className='block bg-gradient-secondary cursor-pointer max-w-xs mx-auto  my-16 text-base rounded text-white uppercase text-center py-5 no-underline hover:opacity-90 transition-all'
                        >
                            START FREE TRIAL
                        </a>
                        <div className='mx-auto'>
                            <hr className='bg-black mb-0' />
                            <div className='flex justify-between items-center '>
                                <p className='text-sm mt-2'>Interesting? Share it</p>
                                <div className='mt-2'>
                                    <Share
                                        title={data?.title}
                                        permalink={data?.permalink}
                                        description={data?.description}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            {!preview && suggestions && (
                <div className='bg-lightGrey2 mt-12 py-12'>
                    <Container>
                        <Row className='gap-4 lg:gap-8'>
                            {map(
                                slice(
                                    filter(suggestions, ({ node }) => node.frontmatter.permalink !== data.permalink),
                                    0,
                                    3
                                ),
                                (post, key) => (
                                    <div className='col-span-12 md:col-span-6 lg:col-span-4' key={key}>
                                        {post?.node && <Post {...post.node.frontmatter} />}
                                    </div>
                                )
                            )}
                        </Row>
                    </Container>
                </div>
            )}
        </div>
    );
}
