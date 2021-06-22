import React from 'react';

const CSPMgetStarted = ({title, description, btnText, btnLink}) => {
    return (
        <div className="block w-full pt-200px pb-200px">
            <div className="max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
                <div className="grid grid-cols-1">
                                        
                    <div>
                        <div className="block w-full text-white text-24px leading-8">
                            <h3 className="new-line uppercase lg:w-96">{title}</h3>
                           <p className="mb-54px">{description}</p>
                            <a href={btnLink} className="inline-block min-w-289px text-16px font-medium rounded bg-white text-black uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline transition-all duration-300 border border-black hover:border-black border-solid hover:bg-black hover:text-white blackBorder">
                                {btnText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CSPMgetStarted
