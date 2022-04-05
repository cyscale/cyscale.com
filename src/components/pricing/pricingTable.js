import React from 'react';
import Check from '../../assets/images/blue-check.svg';
import Line from '../../assets/images/dash-line.svg';
import { useAppLink } from '../../common/links';

const Hero = () => {
    const appLink = useAppLink();

    return (
        <>
            <div>
                <div className='max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                    <div className='mt-153px mb-78px pricingTable'>
                        <div className='block w-full'>
                            <table className='w-full table max-w-1366px mx-auto'>
                                <thead>
                                    <tr>
                                        <th className='h-gradientBG xl:w-1/4'>
                                            <div className=' pr-22px pl-22px pt-24px pb-24px'>
                                                <h2 className='font-semibold  text-20px xl:text-34px text-white font-proximaBold'>
                                                    Features
                                                </h2>
                                            </div>
                                        </th>
                                        <th className='bg-white  xl:w-1/4'>
                                            <div className='pr-22px pl-17px pt-24px pb-24px'>
                                                <div className='flex flex-col'>
                                                    <h2 className='font-semibold  text-20px xl:text-34px mb-43px text-black font-proximaBold'>
                                                        Basic
                                                    </h2>
                                                    <p className='text-15px text-black leading-normal'>
                                                        -<br />A rich Inventory to provide visibility into your cloud
                                                        environments.
                                                    </p>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href={appLink}
                                                        className='blackBorder w-full block mt-75px text-15px font-normal rounded text-black uppercase text-center pt-18px pb-18px pl-49px pr-49px no-underline transition-all duration-300 hover:border-black hover:bg-black hover:text-white blackBorder'
                                                    >
                                                        GET IT FREE
                                                    </a>
                                                </div>
                                            </div>
                                        </th>
                                        <th className='bg-white businessCol xl:w-1/4 shadow-lg drop-shadow-lg'>
                                            <div className='pr-22px pl-17px pt-24px pb-24px innerShadow'>
                                                <div className='flex flex-col'>
                                                    <h2 className='font-semibold  text-20px xl:text-34px mb-43px text-black font-proximaBold'>
                                                        Business
                                                    </h2>
                                                    <p className='text-15px text-black leading-normal'>
                                                        -<br />
                                                        Essential tools to ensure your cloud environments stay
                                                        protected.
                                                    </p>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href={appLink}
                                                        className='gradientBgBtn w-full block mt-75px text-15px font-normal rounded text-white uppercase text-center pt-19px pb-19px pl-49px pr-49px no-underline'
                                                    >
                                                        START FREE TRIAL
                                                    </a>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            Visibility
                                        </td>
                                        <td className='text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            2
                                        </td>
                                        <td className='shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            Unlimited
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            Inventory
                                        </td>
                                        <td className='text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            Up to 100 assets
                                        </td>
                                        <td className='shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Check} className='w-22px mx-auto' alt='check icon' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            Out-of-the-box Rules & Policies
                                        </td>
                                        <td className='text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            5 included
                                        </td>
                                        <td className='shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Check} className='w-22px mx-auto' alt='check icon' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            Compliance Standards
                                        </td>
                                        <td className='text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            3 included
                                        </td>
                                        <td className='shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Check} className='w-22px mx-auto' alt='check icon' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            Evidence collection
                                        </td>
                                        <td className='text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Check} className='w-22px mx-auto' alt='check icon' />
                                        </td>
                                        <td className='shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Check} className='w-22px mx-auto' alt='check icon' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            Security Dashboard
                                        </td>
                                        <td className='text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Check} className='w-22px mx-auto' alt='check icon' />
                                        </td>
                                        <td className='shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Check} className='w-22px mx-auto' alt='check icon' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            Visual policy editor
                                        </td>
                                        <td className='text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Line} className='w-22px mx-auto' alt='line icon' />
                                        </td>
                                        <td className='shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Check} className='w-22px mx-auto' alt='check icon' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            Graph View
                                        </td>
                                        <td className='text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Line} className='w-22px mx-auto' alt='line icon' />
                                        </td>
                                        <td className='shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Check} className='w-22px mx-auto' alt='check icon' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            Alerts
                                        </td>
                                        <td className='text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Line} className='w-22px mx-auto' alt='line icon' />
                                        </td>
                                        <td className='shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Check} className='w-22px mx-auto' alt='check icon' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            PDF Reports
                                        </td>
                                        <td className='text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Line} className='w-22px mx-auto' alt='line icon' />
                                        </td>
                                        <td className='shadow-lg drop-shadow-lg text-center text-15px text-black font-normal pt-16px pb-16px pl-24px pr-24px'>
                                            <img src={Check} className='w-22px mx-auto' alt='check icon' />
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
