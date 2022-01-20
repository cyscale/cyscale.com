import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Article = ({ title, imageUrl, body, date, authors, category }) => (
    <>
        <div>
            <div className='max-w-2xl m-auto relative blog-reset'>
                {imageUrl && <img className='mb-8' src={imageUrl} alt={title} />}
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
                    {body}
                </ReactMarkdown>
                <div className='absolute flex lg:block -top-4 left-0 lg:top-0 lg:-left-40'>
                    <span className='text-xs text-grey2  block mr-2'>
                        Published <strong>{date}</strong>
                    </span>
                    <span className='text-xs text-grey2 block mr-2'>
                        By <strong>{authors}</strong>
                    </span>
                    <span className='text-xs text-grey2 block'>
                        Category <strong>{category}</strong>
                    </span>
                </div>
            </div>
        </div>
    </>
);

export default Article;
