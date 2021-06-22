import React from "react";

const Banner = ({ title, description }) => {
  return (
    <div>
      <div className="max-w-1366px mx-auto pt-72 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-32">
          <div>
            <h1 className=" text-blue text-38px sm:text-30px md:text-60px leading-40px sm:leading-60px font-semibold new-line">
              {title}
            </h1>
          </div>
          <div>
            <p className="text-16px text-black leading-6 new-line">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
