import React from "react";


const Features = ({title, bottomDescripton, data}) => {
  return (
    <>
      <div>
        <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
          <p className="text-black text-16px mt-73px mb-73px">
            <strong>{title}</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 border-t border-b border-solid border-borderGrey">
          {data.map((content, index) => (
                <div key = {index} className="pt-50px pb-50px">
                <div>
                    <img src={content.icon} alt={content.description} className="h-31px" />
                </div>
                <p className="mt-20px text-black text-16px leading-6">
                    {content.description}
                </p>
                </div>
             ))}
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-62px">
              <p className="mt-20px text-black text-16px leading-6">{bottomDescripton}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
