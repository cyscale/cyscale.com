import React from "react";
import Slider from "react-slick";
import Sectionheader from "../layout/sectionheader";

const Performance = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="performance">
      <div className="max-w-1366px mx-auto pt-40px pb-67px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <Slider {...settings}>
          {data.map((content, index) => (
            <div key={index}>
              <div className="pl-45px pr-45px xl:pl-0 xl:pr-0">
                <Sectionheader
                  headingText={content.title}
                  description={content.description}
                  pageName="dataSecurity"
                />
              </div>
              <img src={content.image} className="mx-auto" alt={content.title} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Performance;
