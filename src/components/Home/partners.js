import React  from "react";
import Slider from "react-slick";
import image1 from '../../assets/images/big_docker.svg'
import image2 from '../../assets/images/big_oracle.png'
import image3 from '../../assets/images/github.svg'
import image4 from '../../assets/images/gitlab.svg'
import image5 from '../../assets/images/Kubernetes_logo_without_wordmark.svg'
import image6 from '../../assets/images/snyk.png'
import image7 from '../../assets/images/svg_aws.svg'
import image8 from '../../assets/images/svg_azure.svg'
import image9 from '../../assets/images/svg_gcp.svg'
import image10 from '../../assets/images/teams.png'

const Partners = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                rows: 3,
            }
            }
        ]
      };
    return (
        <>
           <div className="bg-lightGrey block">
                <div className="partneres max-w-1366px m-auto pt-67px pb-67px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
                    <div>
                    <Slider {...settings}>
                    <div>
                        <img src={image1} className="m-auto h-106px w-auto transition-all duration-300" alt="" />
                    </div>
                    <div>
                        <img src={image2} className="m-auto h-106px w-auto transition-all duration-300"  alt="" />
                    </div>
                    <div>
                        <img src={image3} className="m-auto h-106px w-auto transition-all duration-300"  alt="" />
                    </div>
                    <div>
                        <img src={image4} className="m-auto h-106px w-auto transition-all duration-300"  alt="" />
                    </div>
                    <div>
                        <img src={image5} className="m-auto h-106px w-auto transition-all duration-300"  alt="" />
                    </div>
                    <div>
                        <img src={image6} className="m-auto h-106px w-auto transition-all duration-300" alt="" />
                    </div>
                    <div>
                        <img src={image7} className="m-auto h-106px w-auto transition-all duration-300"  alt="" />
                    </div>
                    <div>
                        <img src={image8} className="m-auto h-106px w-auto transition-all duration-300"  alt="" />
                    </div>
                    <div>
                        <img src={image9} className="m-auto h-106px w-auto transition-all duration-300"  alt="" />
                    </div>
                    <div>
                        <img src={image10} className="m-auto h-106px w-auto transition-all duration-300"  alt="" />
                    </div>
                    </Slider>
                </div>
                </div>
           </div>
        </>
    )
}

export default Partners
