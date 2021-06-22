import React from 'react';
import Marge from './marge';
import TopNav from '../layout/topNav';

const Index = () => {
    return (
        <>
            <div className={`w-full BLogPage bg-lightGrey2 bg-contain bg-no-repeat`}>
                <TopNav />
            </div>

            <div className="max-w-1366px mx-auto  pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px ">
                <Marge />
            </div>

        </>
    );
};

export default Index;
