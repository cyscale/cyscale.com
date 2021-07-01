import React from "react";

export default function Services({ title, data }) {
  return (
    <div className="max-w-1366px m-auto mb-16 lg:mb-20 mt-16 lg:mt-20 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
      <p className="text-base font-bold leading-6 mb-12">{title}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-24">
        {data.map((content, index) => (
          <div key={index}>
            <div className="flex lg:flex-col items-start flex-row flex-nowrap space-x-6 lg:space-x-0 lg:space-y-6">
              <img
                src={content.icon}
                alt={content.description}
                className="flex-shrink-0 w-19px h-auto mt-5px"
              />
              <p className="text-base font-bold leading-6">{content.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
