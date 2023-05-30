import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import {
    caretMenuSelegoStyle,
    fontNavLinkStyle,
    hoverButtonColorStyle,
    montserratFontStyle,
    widthFitStyle
} from '../../style';
import { resources } from '../../nav';
import { css } from 'twin.macro';
import { isAnimatedNavbarPage, isPlaygroundBlogPage } from '../../../../common/utils';
import { GatsbyImage } from 'gatsby-plugin-image';
import RightArrow from '../../../sharedComponent/RightArrow';

const caretResources = (isAnimatedNavbarPage) => css`
    :before {
        ${caretMenuSelegoStyle};
        left: ${isAnimatedNavbarPage ? '34.8rem' : '47.5rem'};
    }
`;

const hrStyle = css`
    border-top: 1px solid #c4d6f2;
    width: 9.625rem;
`;

const Resources = ({ pathname, activeLinks, setActiveLinks }) => {
    const [isHover, setIsHover] = useState(false);
    const data = useStaticQuery(graphql`
        query ResourcesQuery {
            whitepapers: file(relativePath: { eq: "compliance-whitepaper.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <div
            className='w-full grid grid-cols-12 gap-6 ml-auto justify-end shadow-2xl bg-white'
            style={{ width: '63rem' }}
            css={caretResources(isAnimatedNavbarPage(pathname) && !isPlaygroundBlogPage(pathname))}
            onMouseEnter={() => setActiveLinks({ ...activeLinks, resources: true })}
            onMouseLeave={() => setActiveLinks({ ...activeLinks, resources: false })}
            tabIndex='-1'
            onClick={() => {}}
            onKeyPress={() => {}}
            role='presentation'
        >
            <div className='bg-selago py-6 pl-6 pr-12 col-span-8'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-6'>
                        <h1 css={montserratFontStyle} className='text-2xl font-semibold mb-6'>
                            Get our latest <br /> Whitepapers
                        </h1>
                        <p className='mb-6'>
                            Understand the risk & dangers of data security breaches and the importance <br /> of a
                            secure cloud storage infrastructure.
                        </p>
                        <Link
                            className='bg-blue text-white py-2 px-4 rounded cursor-pointer mb-22 font-medium flex'
                            to='/whitepaper/the-complete-guide-to-cloud-compliance/'
                            css={[hoverButtonColorStyle, widthFitStyle]}
                        >
                            <RightArrow fillColor={'white'} marginTop='0.2rem' />

                            <span className='text-md ml-2'>Cloud Compliance in 2023</span>
                        </Link>
                        <Link
                            className='bg-white py-2 px-4 rounded cursor-pointer mb-22 font-medium flex mt-4'
                            to='/whitepaper/cloud-storage-misconfigurations/'
                            css={[
                                hoverButtonColorStyle,
                                widthFitStyle,
                                css`
                                    color: #0f26aa;
                                    &:hover {
                                        color: white;
                                    }
                                `
                            ]}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        >
                            {' '}
                            <RightArrow fillColor={isHover ? 'white' : '#0F26AA'} marginTop='0.2rem' />
                            <span className='text-md ml-2'>Cloud Storage Misconfigurations</span>
                        </Link>
                    </div>
                    <div className='col-start-8 col-end-13 pt-9 pb-4'>
                        <GatsbyImage image={data.whitepapers.childImageSharp.gatsbyImageData} alt='Whitepapers' />
                    </div>
                </div>
            </div>
            <div className='px-6 pb-6 pt-6 col-span-4'>
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
                <div className='pl-3 mt-4'>
                    <hr css={hrStyle} />
                </div>
                <div className='py-2 mt-4'>
                    <Link
                        className='p-2 hover:font-medium block'
                        to='/resources/cyscale-cloud-data-security-datasheet.pdf'
                        css={fontNavLinkStyle}
                    >
                        <span>Download Data Sheet</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Resources;