import React from 'react';
import { Link } from 'gatsby';
import IconDownload from '../../icons/icon-download-cloud.svg';
import {
    caretMenuSelegoStyle,
    fontNavLinkStyle,
    hoverButtonColorStyle,
    montserratFontStyle,
    widthFitStyle
} from '../../style';
import { resources } from '../../nav';
import arrowRight from '../../icons/icon-right-navigation.svg';
import { css } from 'twin.macro';
import { isAnimatedNavbarPage } from '../../../../common/utils';

const caretResources = (isAnimatedNavbarPage) => css`
    :before {
        ${caretMenuSelegoStyle};
        left: ${isAnimatedNavbarPage ? '27.5rem' : '49.5rem'};
    }
`;

const Resources = ({ pathname, activeLinks, setActiveLinks }) => {
    return (
        <div
            className='max-w-3xl grid grid-cols-2 gap-6 ml-auto justify-end shadow-2xl bg-white'
            css={caretResources(isAnimatedNavbarPage(pathname))}
            onMouseEnter={() => setActiveLinks({ ...activeLinks, resources: true })}
            onMouseLeave={() => setActiveLinks({ ...activeLinks, resources: false })}
            tabIndex='-1'
            onClick={() => {}}
            onKeyPress={() => {}}
            role='presentation'
        >
            <div className='bg-selago p-6'>
                <h1 css={montserratFontStyle} className='text-2xl font-semibold mb-6'>
                    Cloud Storage Misconfigurations
                </h1>
                <p className='mb-4'>Build and maintain a strong Security Program from the start.</p>
                <Link
                    className='bg-blue text-white py-2 px-4 rounded cursor-pointer mb-22 font-medium flex'
                    to='/whitepaper/cloud-storage-misconfigurations/'
                    css={[hoverButtonColorStyle, widthFitStyle]}
                >
                    <img src={arrowRight} className='w-5 inline-block' alt='' />
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
                            <Link
                                className='p-2 hover:font-medium block'
                                to={resource.link}
                                css={fontNavLinkStyle}
                                activeClassName='active'
                            >
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
