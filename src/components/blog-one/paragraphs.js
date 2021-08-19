import React from 'react';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

const ParaGraphs = ({ data }) => {
    const preview = data?.frontmatter?.featuredimage?.publicURL;
    return (
        <>
            <div>
                <div className='relative lg:absolute xl:absolute 2xl:absolute  top-50 left-51 mb-30px'>
                    <span className='text-xs font-bold block'>{data?.frontmatter?.date?.split('T')?.[0]}</span>
                    <span className='text-xs font-bold text-grey2 block'>by: {data?.frontmatter?.authors}</span>
                </div>
                <div className='max-w-588px m-auto relative blog-reset'>
                    {preview && (
                        <img className="mb-8" src={data?.frontmatter?.featuredimage?.publicURL} alt={data?.frontmatter?.title} />
                    )}
                    <ReactMarkdown skipHtml={true}>{data && data?.rawMarkdownBody}</ReactMarkdown>
                </div>
            </div>
        </>
    );
};

export default ParaGraphs;
