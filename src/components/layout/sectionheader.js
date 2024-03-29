import React from 'react';
import headerImage from '../../assets/images/remote-work-heading-image.png';
import classNames from 'classnames';

const Sectionheader = ({ headingText, description, subText, pageName, section }) => {
    return (
        <>
            <div
                className={`grid grid-cols-1 ${
                    pageName === 'aboutUs' || pageName === 'dataSecurity' || pageName === 'cloudCompliance'
                        ? 'lg:grid-cols-2'
                        : 'lg:grid-cols-3'
                } ${!!pageName && pageName === 'CSPMPage' ? 'gap-4 lg:gap-x-52' : 'gap-4'} ${
                    !!pageName && pageName === 'RemoteWork' ? 'items-center' : null
                }`}
            >
                <div>
                    <h2
                        className={`font-semibold text-blue text-34px leading-normal ${
                            pageName === 'dataSecurity'
                                ? 'lg:max-w-md'
                                : pageName === 'cloudCompliance'
                                ? null
                                : 'lg:max-w-sm'
                        } ${
                            !!section && section === 'complianceAutoUpdates' ? 'lg:pr-32' : null
                        } font-montserrat sectionTitle new-line`}
                    >
                        {headingText}
                    </h2>
                    {!!subText && <p className='text-black text-16px mt-12 lg:mt-32 capitalize'>{subText}</p>}
                    {!!section && section === 'complianceGovern' && (
                        <img
                            src={headerImage}
                            alt='Govern all cloud entities from a single dashboard'
                            className='w-auto h-auto mt-8 mx-auto lg:mx-0'
                            loading='lazy'
                        />
                    )}
                </div>
                <div
                    className={`${
                        pageName === 'CSPMPage' || pageName === 'cloudCompliance'
                            ? 'hidden'
                            : pageName === 'aboutUs' || pageName === 'dataSecurity'
                            ? 'hidden'
                            : 'hidden lg:block'
                    }`}
                ></div>
                {!!description && (
                    <div className={`${!!pageName && pageName === 'CSPMPage' ? 'lg:col-span-2' : ''}`}>
                        <p
                            className={classNames({
                                'text-block text-16px leading-normal new-line mt-8': true,
                                'pb-6 sm:pb-0': section === 'complianceGovern'
                            })}
                        >
                            {description}
                        </p>
                        {headingText === 'Reveal & curb hidden costs' && (
                            <ul className='text-16px list-disc ml-30px'>
                                <li className='mt-30px'>
                                    identify and delete unused or forgotten cloud resources that generate costly
                                    invoices from cloud providers
                                </li>
                                <li className='mt-30px'>
                                    spend significantly less time managing and integrating assets
                                </li>
                                <li className='mt-30px'>scale without having to make new hires</li>
                                <li className='mt-30px'>avoid fines for data breaches and lack of compliance.</li>
                            </ul>
                        )}
                    </div>
                )}
                {pageName === 'RemoteWork' && (
                    <div className='hidden lg:inline-flex'>
                        <img
                            src={headerImage}
                            loading='lazy'
                            alt='Use the Cyscale Cloud Platform to'
                            className='w-auto h-auto ml-auto'
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Sectionheader;
