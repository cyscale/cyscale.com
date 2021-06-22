import React from "react";
import TopNav from '../layout/topNav'
import Hero from './hero'
import PricingTable from './pricingTable'
import feauterImage from '../../assets/images/pricing-banner-image.svg'

const Index = () => {  
  
  return (
    <>
        <div>
            <div className={`w-full pb-20px ContactUs bg-lightGrey2 bg-contain bg-no-repeat`}>
                <TopNav />  
                <Hero
                    title={`Choose\nYour Cyscale Plan`}
                    description="All of our plans are commitment-free and have a 30-day money-back guarantee."
                    fimage={feauterImage}
                /> 
                <PricingTable />
            </div>
          
        </div>
    </>
  );
};

export default Index;
