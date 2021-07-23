import React from "react";
import ReactMarkdown from "react-markdown"

const Description = ({data}) => {
  return (
    <div>
      <div className="max-w-1366px jobs mx-auto mt-100px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <p className="text-34px uppercase mb-50px text-blue leading-8">
          {data.title}
        </p>
        <ReactMarkdown skipHtml={true}>
          {data && data?.rawMarkdownBody}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Description;
