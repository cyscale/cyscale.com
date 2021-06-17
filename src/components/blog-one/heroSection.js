import React from 'react'
import { Link } from "gatsby";
import Linked from '../../assets/images/linkedin.svg';
import twitter from '../../assets/images/twitter.svg';
import faceBook from '../../assets/images/facebook.svg';

const heroSection = () => {
    return (
        <>

            <Link to="/" className="gradientBgBtn dual max-w-282px sm:w-282px md:w-282px lg:w-282px xl:w-282px 2xl:w-282px m-auto block mt-75px text-15px font-normal rounded text-white uppercase text-center pt-19px pb-19px pl-49px pr-49px no-underline">START FREE TRIAL</Link>

            <div className="max-w-588px m-auto ">
                <h3 className="text-14px mt-60px mb-30px">Thank you!</h3>
                <hr className="bg-black mb-2" />
                <div className="flex justify-between  lg:justify-start">
                    <h3 className="text-14px mt-3px">Interesting? Share it</h3>

                    <div className="w-80px lg:mt-20px xl:mt-20px ml-10px 2xl:mt-20px ml-10px">
                        <div className="flex justify-center">
                            <img className="w-13px h-13px" src={Linked} alt="" />
                            <img className="w-16px h-13px mx-13px" src={twitter} alt="" />
                            <img className="w-13px h-13px" src={faceBook} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default heroSection
