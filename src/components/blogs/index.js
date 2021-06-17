import React from 'react';
import Marge from './marge';
import TopNav from '../layout/topNav';
import Hero from "../pricing/hero";

const Index = () => {
    return (
        <>
            <div className={`w-full BLogPage bg-lightGrey2 bg-contain bg-no-repeat`}>
                <TopNav />
                {/* <div className="header-section relative md:right-47px lg:right-173px xl:right-265px max-w-588px sm:w-588px  md:w-588px  lg:w-588px xl:w-588px 2xl:w-588px  m-auto">


                    <div className="bg-gradient-to-r w-260px from-blue to-red h-8px ml-40px lg:ml-78px"></div>
                </div> */}
            </div>

            <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px mt-100px">
                <Marge />
            </div>

        </>
    );
};

export default Index;
