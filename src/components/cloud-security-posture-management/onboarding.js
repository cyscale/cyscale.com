import React from 'react';

const Onboarding = ({data}) => {
    return (
        <div  id="start" className="block w-full bg-lightGreyEEE pt-92px pb-92px">
            <div className="max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
                
               {data.map((content, index) => (
                    <div key={index} className="hoverBorder">
                        <div className="config-items transition-all duration-300 pr-20px h-138px">
                            <p>
                            <span className="block w-full text-6xl pt-14px pb-7px text-white font-semibold">0{index+1}</span>
                            <span className="block w-full text-xl pb-27px text-black uppercase font-semibold">{content.title}</span>
                            </p>
                        </div>
                        <div className="mt-45px mb-13px pr-20px">
                            <div className="h-25px">
                                <img src={content.icon} alt={content.title} />
                            </div>
                            <p className="text-base mt-9px text-black new-line">
                                {content.description}
                            </p>
                        </div>
                    </div>                                
                      ))}                
               </div>
            </div>
        </div>
    )
}

export default Onboarding
