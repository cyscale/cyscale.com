import React from 'react';
import { Row, Container } from '../components/atoms/Containers';
import Layout from '../components/layout/CleanLayout';
import PostAuthor from '../components/new-blog/PostAuthor';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Categories from '../components/new-blog/Categories';
import Post from '../components/new-blog/Post';
import { map } from 'lodash';
import { useAppLink } from '../common/links';
import Share from '../components/Share/Share';

const BlodDetail = ({ pageContext, location }) => {
    const appLink = useAppLink();
    const { alldata, suggestions } = pageContext;
    const { frontmatter: data, rawMarkdownBody } = alldata;

    return (
        <div className='bg-blog-post pt-28'>
            <Layout
                location={location}
                pageName='blog-detail'
                title={data.title}
                description={data.description}
                banner={data.featuredimage.publicURL}
            >
                <div className='container max-w-3xl m-auto px-8 '>
                    <div className='py-10  border-b border-lightGrey2 lg:border-0'>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 flex flex-col justify-between'>
                                <div>
                                    <Categories categories={data.categories} />
                                </div>
                                <h1 className='text-2xl my-4'>{data.title}</h1>
                                <PostAuthor date={data.date} author={data.authors} />
                            </div>
                            <div className='mt-8 lg:mt-0 col-span-12 lg:col-span-6'>
                                <img className='rounded-lg' src={data.featuredimage.publicURL} alt={data.title} />
                            </div>
                        </Row>
                    </div>
                    <div className='blog-reset'>
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            linkTarget='_blank'
                            components={{
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
                            {rawMarkdownBody}
                        </ReactMarkdown>
                    </div>
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
                                    title={data?.frontmatter?.title}
                                    permalink={data?.frontmatter?.permalink}
                                    description={data?.frontmatter?.description}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-lightGrey2 mt-12 py-12'>
                    <Container>
                        <Row className='gap-8'>
                            {map(suggestions, (post, key) => (
                                <div className='col-span-12 md:col-span-6 lg:col-span-4' key={key}>
                                    {post?.node && <Post {...post.node.frontmatter} />}
                                </div>
                            ))}
                        </Row>
                    </Container>
                </div>
            </Layout>
        </div>
    );
};
export default BlodDetail;
