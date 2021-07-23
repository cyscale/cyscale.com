import React from 'react'
import Slider from "react-slick";
 
const CSPMtestamonials = ({sectionName, data}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
      };
    return (
        <div className="block w-full">
        <div className="max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <div>
                <Slider {...settings}>
                {data.map((content, index) => (
                 <div key = {index}>
                        <div className="flex-none md:flex space-x-0 md:space-x-4 lg:space-x-4 xl:space-x-4 2xl:space-x-4 md:items-center">
                        <div className="w-full lg:w-2/4">
                           <div className="flex flex-row md:flex-col">
                           {!!content.image && (
                                <img src={content.image} className="w-52 md:w-20 h-auto mb-1 order-2 md:order-1 transform rotate-180 md:rotate-0" alt={content.title} />
                            )}
                            <h2 className="text-blue text-34px leading-10 max-w-274px order-1 md:order-2 new-line">{content.title}</h2>
                           </div>
                            
                    </div>
                    <div className="w-full lg:w-2/4">
                        <p className={`text-14px text-black leading-6 new-line ${!!sectionName && sectionName === "dataSecurityTest"?(""):("italic")} ${!!content.image && ("mt-12")}`}>{content.description}</p>
                            <small className="block text-12px uppercase leading-4 mt-32px text-grey2 opacity-60 font-roboto">
                                    <strong>{content.author}</strong><br />{content.designation}
                                </small>
                        </div>
                    </div>
                 </div>
                ))}
                    </Slider>
                </div>           
        </div>
    </div>
    )
}

export default CSPMtestamonials
