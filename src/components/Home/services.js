import React from 'react';

const services = ({ headingText, description, data, sectionName }) => {
    return (
        <div id={`${!!sectionName && sectionName === "CSPMServices" ? ("") : ("start")}`} className="max-w-1366px m-auto pt-67px pb-67px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {!!sectionName && sectionName === "CSPMServices" ? (
                    <>

                        <div className="hidden md:block"></div>
                        <div>
                            <h2 className="text-blue text-34px leading-10 md:max-w-xs sectionTitle">{headingText}</h2>

                        </div>
                    </>

                ) : (

                    <>
                        <div>
                            <h2 className="text-blue text-34px leading-10 md:max-w-xs sectionTitle">{headingText}</h2>

                        </div>
                        <div className="hidden md:block"></div>
                        <div>
                            <p className="text-block text-16px leading-7 new-line">
                                {description}
                            </p>
                        </div>
                    </>
                )}
            </div>
            <div className={`grid grid-cols-1 gap-6 mt-20 lg:mt-40 lg:grid-cols-3 ${!!sectionName && sectionName === "CSPMServices" ? ("md:grid-cols-2") : ("")}`}>
                {data.map((content, index) => (
                    <div key={index} className="relative">
                        {!!content.img && (
                            <div className="block">
                                <img src={content.img} className="h-42px" alt={content.title} />
                            </div>

                        )}

                        <div className={`block ${!!sectionName && sectionName === "CSPMServices" ? ("mb-45px") : ("mt-45px")}`}>
                            <h3 className={`text-green leading-6 ${!!sectionName && sectionName === "CSPMServices" ? ("text-20px") : ("text-24px")}`}>{content.title}</h3>
                            <div className={`block ${!!sectionName && sectionName === "CSPMServices" ? ("mt-30px") : ("mt-45px pb-45px")}`}>
                                <p className="text-16px text-black leading-6 new-line">{content.description1}</p>
                            </div>
                        </div>
                        {!!content.linkText && (
                            <div className="block absolute bottom-0 left-0">
                                <a href={content.linkURL} className="uppercase text-blue underline text-16px hover:no-underline hover:text-red font-medium">{content.linkText}</a>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default services
