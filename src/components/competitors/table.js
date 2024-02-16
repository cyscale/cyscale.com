import React from 'react';
import { css } from 'twin.macro';
import CyscaleCheck from '../../assets/images/check-cyscale-icon.svg';
import GreyCheck from '../../assets/images/check-grey-icon.svg';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import { Link } from 'gatsby';

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
                <p className='font-montserrat font-bold text-lg pl-3 lg:pl-4 py-6 text-blueZodiac block lg:hidden'>
                    {feature}
                </p>
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

export const CTARow = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='hidden lg:block lg:col-span-4 h-12'></div>
            <div className='col-span-12 lg:col-span-4 rounded-b-md bg-white pt-8 pb-20'>
                <div className='flex flex-col items-center'>
                    <img src={cloudIcon} alt='' loading='lazy' className='mx-auto' />
                    <p className='text-center px-2 font-montserrat font-bold text-lg lg:text-2xl'>See for yourself</p>
                    <div className='mt-5 w-auto inline-block mx-auto'>
                        <Link
                            css={css`
                                padding: 0.625rem 2.5rem;
                            `}
                            className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind uppercase'
                            to='/request-demo/'
                        >
                            Book A Demo
                        </Link>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block lg: lg:col-span-4 h-12'></div>
        </div>
    );
};
