import React from "react";

const SecureRemoteAccess = ({
  image,
  headingFirst,
  headingSecond,
  description,
  sectionName
}) => {
  return (
    <div className={`${!!sectionName && sectionName === "cloudSecurityConfig" ? null: ("bg-lightGreyEEE")}`}>
      <div className="max-w-1366px m-auto pt-28 pb-28 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <div className="block w-full lg:w-3/5">
          <h2 className={`text-blue text-34px leading-10 ${!!sectionName && sectionName === "cloudSecurityConfig" ? ("md:max-w-md"): ("otherPages")} sectionTitle new-line`}>
            {headingFirst}
            {!!headingSecond && (
              <span className="block w-full font-normal">{headingSecond}</span>
            )}
          </h2>
        </div>
        <div className={`flex flex-col lg:flex-row space-y-12 lg:space-y-0 ${!!sectionName && sectionName === "cloudSecurityConfig" ? null: ("lg:space-x-28")} lg:mt-12`}>
          <div className={`block w-full lg:w-3/5 ${!!sectionName && sectionName === "cloudSecurityConfig" ? ("order-2 lg:pl-32"): ("order-2 lg:order-1")} mt-6 lg:mt-0`}>
            <img src={image} alt={headingFirst} className="w-auto h-auto" />
          </div>
          <div className={`block w-full lg:w-2/5 ${!!sectionName && sectionName === "cloudSecurityConfig" ? ("order-1"): ("order-1 lg:order-2")}`}>
            <p className="new-line text-base leading-6 text-black">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureRemoteAccess;
