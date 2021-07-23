import React from "react";

const Hero = ({ title, description, fimage, description2, pageName }) => {

  return (
    <>
      <div>
        <div className={`max-w-1366px mx-auto ${!!pageName && pageName === "aboutUs" ? ("pt-64") : ("pt-72")} pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px`}>
          <div className={`grid ${!!pageName && pageName === "aboutUs" ? ("md:grid-cols-3 lg:grid-cols-4 gap-4") : ("grid-cols-2 gap-6")} items-end`}>
            <div className={`${!!pageName && pageName === "aboutUs" ? ("md:col-span-2 lg:col-span-3") : ("")}`}>
              <h1 className="text-30px md:text-30px xl:text-60px xl:w-96 new-line text-blue font-proximaBold mb-26px">{title}</h1>
              {!!pageName && pageName === "aboutUs" ? (
                <div className="grid grid-col-1 xl:grid-cols-2 gap-6">
                  <div>
                    <p className="text-16px leading-6 text-black mb-0">{description}</p>
                  </div>
                  <div>
                    <p className="text-16px leading-6 text-black mb-0">{description2}</p>
                  </div>
                </div>
              ) : (
                <p className="text-16px leading-6 text-black mb-0">{description}</p>
              )}
            </div>
            <div className="ml-auto">
              <img src={fimage} alt={title} className="w-auto" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
