import React from 'react';

const getstarted = ({description, btnText, btnLink, sectionName, icon, icon2, ExternalLink}) => {
   
    return (
        <div className="block w-full pt-40 pb-40 sm:pt-92px sm:pb-92px">
            <div className="max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
                <div className=
                    {!!sectionName && sectionName === "getStartedFooter"?("grid grid-cols-1 lg:grid-cols-2 gap-6"):("text-center")}                >
                                        
                    <div>
                        <div className={`block w-full  ${sectionName !== "aboutUsGetStarted" && (sectionName ==="RemoteWork"? null:("md:w-96"))} m-auto text-white text-24px leading-8 text-center ${!!sectionName && sectionName === "getStartedFooter"?("sm:text-left"):("")}`}>
                            {!!icon && (
                                <img src={icon} alt="icon" className={`mb-30px mx-auto ${!!sectionName && sectionName === "getStartedFooter"?("sm:m-0 h-28"):("")}`} />
                            )}
                            
                            <p className={`${sectionName === "aboutUsGetStarted" ? ("md:w-96 mx-auto"):("")} ${sectionName === "dataSecFoot"?("uppercase font-bold"):(sectionName==="cloudDataSecurity"?("font-bold"):(""))} mb-54px mt-30px sm:pr-0 sm:pl-0 new-line `}>{description}</p>
                            <a href={btnLink} target={!!ExternalLink ? ("_blank"):("_self")} className="inline-block min-w-289px text-16px font-medium rounded bg-white text-black uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline transition-all duration-300 border border-black hover:border-black border-solid hover:bg-black hover:text-white hover:no-underline blackBorder">
                                {btnText}
                            </a>
                        </div>
                    </div>
                    {!!sectionName && sectionName === "getStartedFooter"?(
                             <div>
                                <div className="block w-full md:w-96 mx-auto sm:m-auto text-white text-24px leading-8 text-center sm:text-left mt-20px sm:mt-0px">
                                    <img src={icon2} alt="icon" className={`hidden sm:block mb-30px ${!!sectionName && sectionName === "getStartedFooter"?("h-28"):("mx-auto")}`} />
                                    <p className="hidden sm:block mb-54px">Learn all the ways Cyscale can help you keep security risks in check</p>
                                    <a href="/contact-us" className="inline-block min-w-289px text-16px font-medium rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline transition-all duration-300 border border-white hover:border-black border-solid hover:bg-black hover:text-white hover:no-underline">
                                        BOOK YOUR DEMO
                                    </a>
                                </div>
                            </div>  
                        ):(
                            <></>
                        )} 
                </div>
            </div>
        </div>
    )
}

export default getstarted
