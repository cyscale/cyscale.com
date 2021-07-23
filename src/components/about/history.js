import React from "react";
import LogoSymbol from '../../assets/images/cyscale-logo-symbols.svg'

const History = () => {  
  
  return (
    <>
        <div className="overflow-x-hidden">
            <div className={`max-w-1366px mx-auto mt-91px xl:mt-184px pt-67px pb-67px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-6 xl:border-t-8 xl:border-aboutBorder relative aboutHistory">
                    <div className="border-t-8 border-aboutBorder xl:border-none">
                        <div className="-mt-10">
                            <img src={LogoSymbol} className="w-37px" alt="cyscale-logo-symbols" />
                            <span className="block w-36px h-36px rounded-full bg-white border-8 border-aboutBorder"></span>
                        </div>
                        <p className="text-black1 text-16px mt-28px"><strong>2018:</strong></p>
                        <p className="text-16px text-grey2 mt-32px new-line">Cyscale Systems is created  </p>
                    </div>
                    <div className="border-t-8 border-aboutBorder xl:border-none">
                        <div className="-mt-10 xl:-mt-64px">
                            <img src={LogoSymbol} className="w-37px xl:mb-24px" alt="cyscale-logo-symbols" />
                            <span className="block w-36px h-36px rounded-full bg-white border-8 border-aboutBorder"></span>
                        </div>
                        <p className="text-black1 text-16px mt-28px"><strong>2019:</strong></p>
                        <p className="text-16px text-grey2 mt-32px new-line">We started development for our CSPM solution: Cyscale Power Cloud Platform  </p>
                    </div>
                    <div className="border-t-8 border-aboutBorder xl:border-none">
                        <div className="-mt-10 xl:-mt-83px">
                            <img src={LogoSymbol} className="w-37px xl:mb-42px" alt="cyscale-logo-symbols" />
                            <span className="block w-36px h-36px rounded-full bg-white border-8 border-aboutBorder"></span>
                        </div>
                        <p className="text-black1 text-16px mt-28px"><strong>2020:</strong></p>
                        <p className="text-16px text-grey2 mt-32px new-line">Cyscale was named “The Best Technology Startup in 2020” in the InnovX accelerator program<br />- The European Union awarded the company with the Seal of Excellence for innovation in cloud security.<br />-We set the record on Seedblink by raising 350,000 Euro (~$430k) in just 4 hours</p>
                    </div>
                    <div className="border-t-8 border-aboutBorder xl:border-none">
                        <div className="-mt-10 xl:-mt-124px">
                            <img src={LogoSymbol} className="w-37px xl:mb-82px" alt="cyscale-logo-symbols" />
                            <span className="block w-36px h-36px rounded-full bg-white border-8 border-aboutBorder"></span>
                        </div>
                        <p className="text-black1 text-16px mt-28px"><strong>2021:</strong></p>
                        <p className="text-16px text-grey2 mt-32px">Cyscale Power Cloud Platform empowers Security teams around the world, to take the correct approach and implement a strong Cloud Security Program. </p>
                    </div>
                </div>
            </div> 
          
        </div>
    </>
  );
};

export default History
