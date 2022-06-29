import React, { useState } from 'react';
import Sectionheader from '../layout/sectionheader'


const Offer = ({ headingText, description, data, poster, id }) => {
    const [tabActive, setTabActive] = useState(0);
    return (
        <>

            <div className="max-w-1366px m-auto pt-67px pb-67px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px"
             id={id}
            >

                < Sectionheader
                    headingText={headingText}
                    description={description}
                />
            </div>
            <div id="powerCloud" className="block xl:pr-86px relative offer-container">
                <div className="sm:bg-lightGrey pt-0px sm:pt-61px pb-0px sm:pb-61px rounded-r-xl">
                    <div className="max-w-1366px m-auto pl-0px pr-0px sm:pl-20px sm:pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-120px xl:pr-80px 2xl:pl-120px 2xl:pr-80px">
                        <div className="grid grid-cols-1 xl:grid-cols-2">
                            <div>
                                {data.map((content, index) => (
                                    <div role="button" tabIndex={index} key={index} onKeyDown={() => setTabActive(index)} onMouseOver={() => setTabActive(index)} onFocus={() => setTabActive(index)} onClick={() => setTabActive(index)} className={`no-underline offerLink block cursor-pointer ${index === 0 && tabActive === 0 && ("active")} ${index === tabActive && ("active")}`}>
                                        <div className="offerBox transition-all duration-300 relative block pt-54px pb-35px lg:pr-28 text-16px text-black">
                                            <p className="mb-35px"><strong>{content.title}</strong></p>
                                            <p>{content.description1}</p>
                                            <div className="mt-24px w-full md:w-auto sm:w-auto lg:w-auto xl:w-auto 2xl:w-auto">
                                                <a href={content.bntLink} className="uppercase text-blue underline text-16px hover:no-underline hover:text-red font-medium">{content.btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="hidden md:inline-block">
                                <div className="offer-right-banner xl:absolute right-0 w-full xl:max-w-734px pr-20 pl-20 pb-20 pt-52">
                                    {data.map((tabBody, index) => (
                                        <div key={index} className={`${index === 0 && tabActive === 0 ? ("block") : ("")} ${index === tabActive ? ("block") : ("hidden")}`}>
                                            <p className="text-white font-proximaBold text-80px mt-10 mb-10 uppercase leading-none">{tabBody.tabBodyTitle}</p>
                                            {React.cloneElement(tabBody.tabBodyImage)}
                                            {/* <img src={tabBody.tabBodyImage} alt={tabBody.tabBodyTitle} className="w-full h-auto mt-20" /> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offer
