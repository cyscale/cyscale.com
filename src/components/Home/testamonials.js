import React from 'react'
import image1 from '../../assets/images/elemente-vectoriale-04.png';
 
const testamonials = () => {
    return (
        <div className="block w-full bg-lightGrey pt-116px pb-116px">
        <div className="max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
           <div className="flex-none md:flex space-x-0  md:space-x-4 lg:space-x-4 xl:space-x-4 2xl:space-x-4">
                <div className="w-full lg:w-2/4">
                <img src={image1} className="w-20 sm:w-40 block lg:inline lg:w-40 float-right lg:float-left" alt="Cyscale keeps our infrastructure compliant and drift free" />
                    <h2 className="text-blue text-24px lg:text-34px leading-9 lg:pl-60">Cyscale keeps <br />our infrastructure compliant and drift free
                        <small className="text-12px leading-4 mt-32px text-grey2 opacity-60 hidden sm:block">
                            <strong>Ovidiu Pop</strong><br />SYMBOLD STUDIO
                        </small>
                    </h2>
                    
               </div>
               <div className="w-full lg:w-2/4">
                   <p className="italic text-14px text-black leading-6 pt-20 sm:pt-0">“Cyscale continuously monitors for changes that might cause compliance violations or weaken our security, then alerts our staff so we can fix things before they cause any real problems. 
                       <br /><br />We have reduced the number of accidental changes, and completely eliminated changes which were not made through our Infrastructure as Code solution.”</p>
               </div>
           </div>
        </div>
    </div>
    )
}

export default testamonials
