import React, { useState } from 'react';
import Sectionheader from '../layout/sectionheader';
import left from '../../assets/images/f-slider-left-arrow.svg';
import right from '../../assets/images/f-slider-right-arrow.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Fproducts = ({ sectionTitle, data, id }) => {
    const [tabIndex, setTabIndex] = useState(0);

    function shiftTabPrev() {
        if (tabIndex === 1) {
            setTabIndex(0);
        } else if (tabIndex === 2) {
            setTabIndex(1);
        } else if (tabIndex === 0) {
            setTabIndex(2);
        }
    }
    function shiftTabNext() {
        if (tabIndex === 0) {
            setTabIndex(1);
        } else if (tabIndex === 1) {
            setTabIndex(2);
        } else if (tabIndex === 2) {
            setTabIndex(0);
        }
    }

    return (
        <>
            <div className='block w-full bg-white pt-12' id={id}>
                <div className='max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                    <h2 className='font-semibold  text-blue text-30px md:text-60px mt-25px mb-25px md:mt-50px md:mb-50px font-montserrat'>
                        {sectionTitle}
                    </h2>
                </div>
            </div>
            <div className='block featuredProducts overflow-hidden w-full pb-12 bg-white featureTabs'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        {data.map((content, index) => (
                            <Tab key={index}>
                                <span className='font-montserrat'>{content.tabTitle}</span>
                            </Tab>
                        ))}
                    </TabList>
                    {data.map((content, index) => (
                        <TabPanel forceRender={true} key={index}>
                            <div className='max-w-1366px relative m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                                <div className='mt-32 mb-16'>
                                    <Sectionheader
                                        headingText={content.sectionTitle}
                                        description={content.sectionDescription}
                                        pageName='CSPMPage'
                                    />
                                </div>
                                <div className='featureSlider justify-evenly flex items-center'>
                                    <div className='flex-initial'>
                                        <button
                                            type='button'
                                            aria-label='left'
                                            className='outline-none focus:outline-none'
                                            tabIndex={index}
                                            onKeyDown={shiftTabPrev}
                                            onClick={shiftTabPrev}
                                        >
                                            <img
                                                src={left}
                                                className='m-auto cursor-pointer'
                                                alt='left icon'
                                                loading='lazy'
                                            />
                                        </button>
                                    </div>
                                    <div style={{ width: '100%', maxWidth: 960 }}>
                                        <div className='max-w-5xl m-auto'>
                                            {React.cloneElement(content.featureImage)}
                                        </div>
                                    </div>
                                    <div className='flex-initial'>
                                        <button
                                            type='button'
                                            aria-label='right'
                                            className='outline-none focus:outline-none'
                                            tabIndex={index}
                                            onKeyDown={shiftTabNext}
                                            onClick={shiftTabNext}
                                        >
                                            <img
                                                src={right}
                                                className='m-auto cursor-pointer'
                                                alt='right icon'
                                                loading='lazy'
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
                <div className='flex space-x-8 mt-45px justify-center pagination'>
                    <button
                        type='button'
                        aria-label='0'
                        tabIndex='-1'
                        onKeyDown={() => setTabIndex(0)}
                        onClick={() => setTabIndex(0)}
                        className={`outline-none ${tabIndex === 0 && 'active'}`}
                    ></button>
                    <button
                        type='button'
                        aria-label='1'
                        tabIndex='-2'
                        onKeyDown={() => setTabIndex(1)}
                        onClick={() => setTabIndex(1)}
                        className={`outline-none ${tabIndex === 1 && 'active'}`}
                    ></button>
                    <button
                        type='button'
                        aria-label='2'
                        tabIndex='-3'
                        onKeyDown={() => setTabIndex(2)}
                        onClick={() => setTabIndex(2)}
                        className={`outline-none ${tabIndex === 2 && 'active'}`}
                    ></button>
                </div>
            </div>
        </>
    );
};

export default Fproducts;
