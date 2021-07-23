import React from "react";

const Services = ({data, bannerBtn1Text, bannerBtn1Link}) => {
return(
    <div className="bg-lightGrey2">
        <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16 xl:gap-32 border-t border-b border-white border-solid pt-50px pb-50px">
            {data.map((content, index) => (
                <div key={index}>
                    <img src={content.icon} alt={content.title} className="h-68px" />
                    <p className="text-16px text-black new-line leading-6 mt-24px">
                        <strong className="block w-auto">{content.title}</strong>
                        {content.description}
                    </p>
                </div>
                ))} 
            </div>
        </div>
        <div className="mt-55px pb-41px w-full flex justify-center">
            <a target="_blank" href={bannerBtn1Link} className="gradientBgBtn md:min-w-232px sm:min-w-232px lg:min-w-232px xl:min-w-232px 2xl:min-w-232px text-16px rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline">{bannerBtn1Text}</a>
        </div>
    </div>
)
};

export default Services
