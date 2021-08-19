import React from 'react';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

const ParaGraphs = ({ data }) => {
    const preview = data?.frontmatter?.featuredimage?.publicURL;
    return (
        <>
            <div>
                <div className='relative lg:absolute xl:absolute 2xl:absolute  top-50 left-51 mb-30px'>
                    <span className='text-xs text-grey2  block'>Published <strong>{data?.frontmatter?.date?.split('T')?.[0]}</strong></span>
                    <span className='text-xs text-grey2 block'>By <strong>{data?.frontmatter?.authors}</strong></span>
                </div>
                <div className='max-w-588px m-auto relative blog-reset'>
                    {preview && (
                        <img className='mb-8' src={data?.frontmatter?.featuredimage?.publicURL} alt={data?.frontmatter?.title} />
                    )}
                    <ReactMarkdown skipHtml={true}>{data && data?.rawMarkdownBody}</ReactMarkdown>
                </div>
            </div>
        </>
    );
};

export default ParaGraphs;
