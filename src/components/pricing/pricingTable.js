import React from "react";
import { Link } from "gatsby";
import Check  from "../../assets/images/blue-check.svg"
import Line from "../../assets/images/dash-line.svg"

const Hero = () => {  
  
  return (
    <>
        <div>
            <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
             <div className="mt-153px mb-78px pricingTable">                  
                    <div className="block w-full">
                            <table className="w-full table">
                                <thead>
                                    <tr>
                                        <th className="h-gradientBG xl:w-1/4">
                                            <div className=" pr-22px pl-22px pt-24px pb-24px">
                                                <h2 className="text-20px xl:text-34px text-white font-proximaBold">Features</h2>
                                            </div>
                                        </th>
                                        <th className="bg-white  xl:w-1/4">
                                            <div className="pr-22px pl-17px pt-24px pb-24px">
                                                <div className="flex flex-col">
                                                        <h2 className="text-20px xl:text-34px mb-43px text-black font-proximaBold">Community</h2>
                                                        <p className="text-15px text-black leading-6">-<br />
                                                            A rich Inventory to provide
                                                            visibility into your cloud environments.
                                                        </p>
                                                        <Link to="#" className="blackBorder w-full block mt-75px text-15px font-normal rounded text-black uppercase text-center pt-18px pb-18px pl-49px pr-49px no-underline transition-all duration-300 hover:border-black hover:bg-black hover:text-white blackBorder">GET IT FREE</Link>
                                                        
                                                </div>
                                            </div>
                                        </th>
                                        <th className="bg-white businessCol xl:w-1/4 shadow-lg drop-shadow-lg">
                                            <div className="pr-22px pl-17px pt-24px pb-24px innerShadow">
                                                <div className="flex flex-col">
                                                        <h2 className="text-20px xl:text-34px mb-43px text-black font-proximaBold">Business</h2>
                                                        <p className="text-15px text-black leading-6">-<br />
                                                            Essential tools to ensure your
                                                            cloud environments stay protected.
                                                        </p>
                                                        <Link to="#" className="gradientBgBtn w-full block mt-75px text-15px font-normal rounded text-white uppercase text-center pt-19px pb-19px pl-49px pr-49px no-underline">START FREE TRIAL</Link>
                                                        
                                                </div>
                                            </div>
                                        </th>
                                        <th className="bg-white  xl:w-1/4">
                                            <div className=" pr-22px pl-17px pt-24px pb-24px">
                                                <div className="flex flex-col">
                                                        <h2 className="text-20px xl:text-34px mb-43px text-black font-proximaBold">Pro</h2>
                                                        <p className="text-15px text-black leading-6">-<br />
                                                        Advanced management of security posture for your cloud environments.
                                                        </p>
                                                        <Link to="/contact-us" className="blackBorder w-full block mt-75px text-15px font-normal rounded text-black uppercase text-center pt-18px pb-18px pl-49px pr-49px no-underline transition-all duration-300 hover:border-black hover:bg-black hover:text-white blackBorder">Contact Us</Link>
                                                        
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">Visibility</td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">Inventory</td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">Out-of-the-box Rules & Policies</td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            Limited
                                        </td>
                                        <td className="shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">Monitoring & Alerting</td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Line} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">Educational Portal - Knowledge Base</td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Line} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">Support Included</td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Line} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            Email Only
                                        </td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">Integration with CI/CD DevSecOps</td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Line} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Line} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">Custom Policies & Standards</td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Line} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Line} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">Automatic Remediation, self-healing</td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Line} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Line} className="w-22px mx-auto" alt="" />
                                        </td>
                                        <td className="text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px">
                                            <img src={Check} className="w-22px mx-auto" alt="" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
               </div>
            </div> 
          
        </div>
    </>
  );
};

export default Hero;
