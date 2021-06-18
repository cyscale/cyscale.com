import React from "react";
import { Link } from "gatsby";
import ViewIcon from "../../images/eye.svg";

const Jobs = ({data}) => {
  return (
    <div>
      <div className="max-w-1366px jobs mx-auto mt-120px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
        {data.map((content, index) => (
               <div key = {index} className="bg-white card pt-25px pb-25px pl-25px pr-25px hover:shadow-lg transition-all duration-300 bg-no-repeat" style={{backgroundImage: `url(${content.icon})  `}}>          
               <h3 className="text-24px text-black font-bold leading-6 new-line uppercase">{content.jobTitle}</h3>
               <div className="mt-44">
                 <Link
                   to={content.jobLink}
                   className="new-line text-14px leading-5 text-formInputColor hover:text-black transition-all duration-300"
                 >
                   <img src={ViewIcon} className="w-24px" alt="" />
                   <span className="block pr-128px md:pr-200px">{content.linkText}</span>
                 </Link>
               </div>
             </div>
              ))}
         
        </div>
      </div>
    </div>
  );
};

export default Jobs;
