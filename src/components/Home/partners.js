import React from 'react';
import Slider from 'react-slick';
import {
    Docker,
    AWS,
    GCP,
    Azure,
    Snyk,
    Oracle,
    Github,
    Gitlab,
    Kubernetes,
    Teams,
    Snowflake,
    Okta,
    Alibaba,
    Slack,
    Jamf,
    Veracode,
    Jira,
    Crowdstrike,
    Jumpcloud,
    Tenable,
    Vmware,
    Gsuite
} from './images';

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
                    rows: 3
                }
            }
        ]
    };
    return (
        <>
            <div className='bg-lightGrey block'>
                <div className='partneres max-w-1366px m-auto pt-67px pb-67px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                    <div>
                        <Slider {...settings}>
                            <div>
                                <Docker />
                            </div>
                            <div>
                                <Oracle />
                            </div>
                            <div>
                                <Github />
                            </div>
                            <div>
                                <Gitlab />
                            </div>
                            <div>
                                <Kubernetes />
                            </div>
                            <div>
                                <Snyk />
                            </div>
                            <div>
                                <AWS />
                            </div>
                            <div>
                                <Azure />
                            </div>
                            <div>
                                <GCP />
                            </div>
                            <div>
                                <Teams />
                            </div>
                            <div>
                                <Alibaba />
                            </div>
                            <div>
                                <Slack />
                            </div>
                            <div>
                                <Jamf />
                            </div>
                            <div>
                                <Snowflake />
                            </div>
                            <div>
                                <Veracode />
                            </div>
                            <div>
                                <Jira />
                            </div>
                            <div>
                                <Crowdstrike />
                            </div>
                            <div>
                                <Jumpcloud />
                            </div>
                            <div>
                                <Tenable />
                            </div>
                            <div>
                                <Okta />
                            </div>
                            <div>
                                <Vmware />
                            </div>
                            <div>
                                <Gsuite />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Partners;
