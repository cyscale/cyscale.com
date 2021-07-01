import React from "react";

const Services = ({ data }) => {
  return (
    <div className="max-w-1366px m-auto mb-16 lg:mb-44 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-32">
        {data.map((content, index) => (
          <div key={index}>
            <img
              src={content.icon}
              alt={content.title}
              className="w-16 h-auto mb-6"
            />
            <p className="text-base text-black mb-7">
              <strong>{content.title}</strong>
            </p>
            {content.subItems.map((items, index2) => (
              <p key={index2} className="text-base text-black mb-4">
                {items}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
