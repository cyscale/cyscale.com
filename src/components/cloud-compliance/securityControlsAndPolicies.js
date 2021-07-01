import React from "react";
import SecurityControlsandPolicies_image from "../../assets/images/Security-Controls-and-Policies.svg"

export default function SecurityControlsandPolicies() {
  
  return (
    <div className="max-w-1366px m-auto py-12 lg:py-16 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="md:-mt-16">
                <ul className="list-none text-base text-black">
                    <li className="mb-7 font-bold">Asset Management (Inventory)</li>
                    <li className="mb-7 font-bold">Data Management</li>
                    <li className="mb-7 font-bold">Breach Investigation and Notification</li>
                    <li className="mb-7 font-bold">Business Continuity and Disaster Recovery </li>
                    <li className="mb-7 font-bold">Data Protection</li>
                    <li className="mb-7 font-bold">Change Management</li>
                    <li className="mb-7 font-bold">Identity and Access Management</li>
                    <li className="mb-7 font-bold">Human Resources Security</li>
                    <li className="mb-7 font-bold">Remote Working</li>
                    <li className="mb-7 font-bold">Secure Software Development Lifecycle (SDLC)</li>
                    <li className="mb-7 font-bold">Security Architecture and Design</li>
                    <li className="mb-7 font-bold">Third-Party Vendors and Due Diligence, and more.  </li>
                </ul>
            </div>
            <div> 
                <img src={SecurityControlsandPolicies_image} className="w-full max-w-full" alt="Minimize overlap between cloud compliance and security " />
                <p className="text-lg leading-6 text-black mt-7">Pool your expertise and take advantage of the full control and transparency Cyscale gives you over your multi-cloud environment.</p>
            </div>
        </div>
    </div>
  );
}
