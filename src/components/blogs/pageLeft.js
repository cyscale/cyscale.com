import React from 'react'
import { Link } from "gatsby";

const pageLeft = ({ images, title, description, time, read }) => {
    return (
        <>
            <div className="w-full md:w-195px lg:w-282px xl:w-376px mb-16px shadow-md">
                <img className="w-full" src={images} alt="imge" />
                <div className="bg-white p-15px">
                    <h6 className="text-13px ">{time}</h6>
                    <div>
                        <h3 className="text-blue text-24px leading-24px mt-3px">{title}</h3>
                        <p className="text-16px leading-24px mt-6px">{description}</p>
                    </div>
                    <div className="flex justify-content-end">
                        <Link className="text-12px text-blue font-bold" to="../blog/detail">{read}</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default pageLeft
