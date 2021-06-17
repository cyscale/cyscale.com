import React from 'react';

const Sectionheader = ({headingText, description, subText, pageName}) => {
    return (
        <>
         <div className={`grid grid-cols-1 ${pageName === "aboutUs" || pageName === "dataSecurity"?("md:grid-cols-2"):("md:grid-cols-3")} ${!!pageName && pageName === "CSPMPage"?("gap-4 md:gap-x-52"):("gap-4")}`}>
                    <div>
                        <h2 className={`text-blue text-34px leading-8 ${pageName === "dataSecurity"?(""):("md:max-w-sm")} sectionTitle new-line`}>{headingText}</h2>
                        {!!subText && (                                       
                            <p className="text-black text-16px mt-12 md:mt-32 capitalize">{subText}</p> 
                        )}
                    </div>
                    <div className={`${!!pageName && pageName === "CSPMPage"?("hidden"):(
                        pageName === "aboutUs" || pageName === "dataSecurity"?("hidden"):("hidden md:block")                       
                        
                        )}`}></div>
                    {!!description && (                                       
                        <div className={`${!!pageName && pageName === "CSPMPage" && ("col-span-2")}`}>
                            <p className="text-block text-16px leading-7 new-line">
                            {description}
                            </p>
                            {headingText === "Reveal & curb hidden costs" && (
                                <ul className="text-16px list-disc ml-30px">
                                    <li className="mt-30px">identify and delete unused or forgotten cloud resources that generate costly invoices from cloud providers</li>
                                    <li className="mt-30px">spend significantly less time managing and integrating assets</li>
                                    <li className="mt-30px">scale without having to make new hires</li>
                                    <li className="mt-30px">avoid fines for data breaches and lack of compliance.</li>
                                </ul>
                            )}                            
                        </div>
                    )}
                    
                </div>
        </>
    )
}

export default Sectionheader
