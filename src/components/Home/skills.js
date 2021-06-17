import React from "react";
import { Link } from "gatsby"

const Skills = ({data, btnText, btnLink}) => {   
    return (
        <>
           <div className="bg-white block skills">
                <div className="max-w-1366px m-auto pb-86px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {data.map((content, index) => (
                       <div className="itemBox" key={index}>
                            <Link to={content.linkURL} className="block h-full w-full no-underline pt-20px pb-20px pl-30px pr-30px">
                                <p className="title xl:max-w-120px leading-7 font-semibold text-black text-24px">{content.title}</p>
                                <p className="description text-14px leading-6 text-black hidden sm:block">{content.description}</p>
                                <p className="date text-black text-14px mb-0">{content.date}</p>
                            </Link>
                        </div>
                     ))}
                        
                    </div>
                    <div className="block w-full mt-50px text-center">
                        <div className="mt-24px mx-auto w-auto">
                            <Link to={btnLink} className="gradientBgBtn min-w-232px text-16px font-medium rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline">{btnText}</Link>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Skills
