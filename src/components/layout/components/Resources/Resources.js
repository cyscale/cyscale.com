import React from 'react';
import { Link } from 'gatsby';
import IconDownload from '../../../../assets/images/icon-download-cloud.svg';
import { fontNavLinkStyle, montserratFontStyle } from '../../style';
import { resources } from '../../nav';

const Resources = () => {
    return (
        <div className='max-w-3xl grid grid-cols-2 gap-6 ml-auto justify-end mb-16 shadow-2xl bg-white'>
            <div className='bg-selago p-6'>
                <h1 css={montserratFontStyle} className='text-2xl font-semibold mb-6'>
                    Cloud Storage Misconfigurations
                </h1>
                <p className='mb-4'>Build and maintain a strong Security Program from the start.</p>
                <Link
                    className='bg-blue text-white py-2 px-4 rounded cursor-pointer mb-22 font-medium'
                    to='/whitepaper/cloud-storage-misconfigurations/'
                >
                    <span className='text-xl'>></span>
                    <span className='text-md ml-2'>Get the Whitepaper</span>
                </Link>
                <div className='flex mt-12'>
                    <img src={IconDownload} alt='' />
                    <Link className='ml-2 font-medium' to='/resources/cyscale-cloud-data-security-datasheet.pdf'>
                        Download Data Sheet
                    </Link>
                </div>
            </div>
            <div className='p-6'>
                {resources.map((resource, key) => {
                    return resource.external ? (
                        <div className='mb-2' key={key}>
                            <a className='p-2 hover:font-medium block' href={resource.link} css={fontNavLinkStyle}>
                                {resource.text}
                            </a>
                        </div>
                    ) : (
                        <div className='mb-2' key={key}>
                            <Link className='p-2 hover:font-medium block' to={resource.link} css={fontNavLinkStyle}>
                                {resource.text}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Resources;
