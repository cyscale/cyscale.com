import React from 'react';
// import images from '../../images/price-table-header-bg.svg';
// import logo from '../../images/banner-arrow-down.svg';

function blogCard({ images, title, description, time, ButtonLogo }) {
    return (
        <>
            <div className=" customcardwidth">
                <img className="w-full mr-27px " src={images} alt="imge" />
                <div className="p-23px  bg-aboutBorder">
                    <div>
                        <h3 className="text-24px leading-24px pr-135px mb-24px">{title}</h3>
                        <p className="text-16px leading-24px pr-0px mb-24px">{description}</p>
                    </div>
                    <div className="flex justify-between">
                        <h4>{time}</h4>
                        <img className="transform rotate-90 " src={ButtonLogo} alt="logo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default blogCard
