import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
const ParaGraphs = ({ data }) => {
    const preview = data?.frontmatter?.featuredimage?.publicURL;
    return (
        <>
            <div>
                <div className='max-w-2xl m-auto relative blog-reset'>
                    {preview && (
                        <img
                            className='mb-8'
                            src={data?.frontmatter?.featuredimage?.publicURL}
                            alt={data?.frontmatter?.title}
                        />
                    )}
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data && data?.rawMarkdownBody}</ReactMarkdown>
                    <div className='absolute flex lg:block -top-4 left-0 lg:top-0 lg:-left-40'>
                        <span className='text-xs text-grey2  block mr-2'>
                            Published <strong>{data?.frontmatter?.date?.split('T')?.[0]}</strong>
                        </span>
                        <span className='text-xs text-grey2 block mr-2'>
                            By <strong>{data?.frontmatter?.authors}</strong>
                        </span>
                        <span className='text-xs text-grey2 block'>
                            Category <strong>{data?.frontmatter?.category}</strong>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParaGraphs;
