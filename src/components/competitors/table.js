import React from 'react';
import { css } from 'twin.macro';
import CyscaleCheck from '../../assets/images/check-cyscale-icon.svg';
import GreyCheck from '../../assets/images/check-grey-icon.svg';

const border = css`
    border-bottom: 1px solid #bed0e7;
`;

export const CapabilityCheckRow = ({ capability, cyscaleStatus }) => {
    return (
        <div className='grid grid-cols-12'>
            <div className='hidden lg:block lg:col-span-4 min-h-32 ' css={border}>
                <div className='flex items-center'>
                    <p className='font-montserrat font-bold text-lg pl-4 py-6 text-blueZodiac'>{capability}</p>
                </div>
            </div>
            <div className='col-span-9 lg:col-span-4 min-h-32 block lg:hidden'>
                <p className='font-montserrat font-bold text-lg pl-3 lg:pl-4 py-6 text-blueZodiac block lg:hidden'>
                    {capability}
                </p>
            </div>
            <div
                className='col-span-9 lg:col-span-4 min-h-32 lg:bg-white flex flex-col lg:flex-row lg:items-center pb-2 lg:pb-0'
                css={border}
            >
                <div className='flex pl-3 pr-3 lg:pr-4 lg:pl-4 py-6 bg-white rounded-md w-full'>
                    <img src={CyscaleCheck} alt='' />
                    <p className='font-montserrat pl-4'>{cyscaleStatus}</p>
                </div>
            </div>
            <div className='col-span-3 lg:col-span-4 min-h-32 flex items-center' css={border}>
                <div className='pl-6 lg:pl-8 py-6 w-full'>
                    <img src={GreyCheck} alt='' className='mb-2 lg:mb-0' />
                </div>
            </div>
        </div>
    );
};

export const FeatureComparisonRow = ({ feature, cyscaleFeatureDetail, wizFeatureDetail }) => {
    return (
        <div className='grid grid-cols-12'>
            <div className='hidden lg:block lg:col-span-4 min-h-32' css={border}>
                <div className='flex items-center'>
                    <p className='font-montserrat font-bold text-lg pl-4 py-6 text-blueZodiac'>{feature}</p>
                </div>
            </div>
            <div className='col-span-8 lg:col-span-4 min-h-32 block lg:hidden'>
                <p className='font-montserrat font-bold text-lg pl-3 lg:pl-4 py-6 text-blueZodiac block lg:hidden'>{feature}</p>
            </div>
            <div
                className='col-span-8 lg:col-span-4 min-h-32 lg:bg-white flex flex-col lg:flex-row lg:items-center pb-2 lg:pb-0'
                css={border}
            >
                <div className='flex pl-3 pr-3 lg:pr-4 lg:pl-4 py-6 bg-white rounded-md w-full'>
                    <p className='font-montserrat font-bold text-base text-blueZodiac'>{cyscaleFeatureDetail}</p>
                </div>
            </div>
            <div className='col-span-4 lg:col-span-4 min-h-32 flex items-center pb-2 lg:pb-0' css={border}>
                <div className='pl-2 lg:pl-4 w-full'>
                    <p className='font-montserrat text-base'>{wizFeatureDetail}</p>
                </div>
            </div>
        </div>
    );
};
