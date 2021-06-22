import React from 'react';
import ReactMarkdown from "react-markdown"



const ParaGraphs = ({ data }) => {
    return (
        <>
            <div>
                <div className="relative lg:absolute xl:absolute 2xl:absolute  top-50 left-51 mb-30px">
                    <h2 className="text-12px">{data?.frontmatter?.date?.split('T')?.[0]}</h2>
                    <h2 className="text-12px">by: {data?.frontmatter?.authors}</h2>
                </div>
                <div className="max-w-588px m-auto relative ">
                    <ReactMarkdown skipHtml={true}>
                        {data && data?.rawMarkdownBody}
                    </ReactMarkdown>
                    
                </div>
            </div>
        </>
    );
};

export default ParaGraphs;
