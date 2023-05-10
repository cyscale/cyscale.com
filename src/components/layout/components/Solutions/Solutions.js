import React from 'react';
import { Link } from 'gatsby';
import IconCyscaleShield from '../../icons/icon-cyscale-shield.svg';
import {
    caretMenuWhiteStyle,
    fontNavLinkStyle,
    hoverButtonColorStyle,
    montserratFontStyle,
    paddingLeftStyle,
    sectionTitleColorStyle,
    widthFitStyle
} from '../../style';
import { solutions } from '../../nav';
import { css } from 'twin.macro';
import RightArrow from '../../../sharedComponent/RightArrow';
import { isAnimatedNavbarPage } from '../../../../common/utils';

const descriptionMaxWidth = css`
    max-width: 13.25rem;
`;

const caretSolutions = (isAnimatedNavbarPage) => css`
    :before {
        ${caretMenuWhiteStyle};
        left: ${isAnimatedNavbarPage ? '32rem' : '31.7rem'};
    }
`;

const Solutions = ({pathname, activeLinks, setActiveLinks }) => {
    return (
        <div
            className='w-full grid grid-cols-12 gap-2 ml-auto shadow-2xl bg-white'
            style={{ width: '76rem' }}
            css={caretSolutions(isAnimatedNavbarPage(pathname))}
            onMouseEnter={() => setActiveLinks({ ...activeLinks, solutions: true })}
            onMouseLeave={() => setActiveLinks({ ...activeLinks, solutions: false })}
            tabIndex='-1'
            onClick={() => {}}
            onKeyPress={() => {}}
            role='presentation'
        >
            <div className='col-span-3 bg-selago p-6'>
                <h1 css={montserratFontStyle} className='text-2xl font-semibold mb-6'>
                    Startups Program
                </h1>
                <p className='mb-4'>Build and maintain a strong Security Program from the start.</p>
                <Link
                    className='bg-blue text-white py-2 px-4 rounded cursor-pointer mb-22 font-medium flex'
                    to='/security-for-startups-program/'
                    css={[hoverButtonColorStyle, widthFitStyle]}
                >
                    <RightArrow fillColor={'white'} marginTop='0.2rem' />
                    <span className='text-md ml-2'>Submit Your Application</span>
                </Link>
                <div className='mt-32'>
                    <img src={IconCyscaleShield} alt='' />
                </div>
            </div>
            <div className='col-span-9'>
                <div className='p-6 grid grid-cols-12 gap-2'>
                    {solutions.map((solution, key) => {
                        return (
                            <div className='col-span-4' key={key}>
                                <img src={solution.icon} className='mb-1' alt='' css={paddingLeftStyle} />
                                <p
                                    className='mb-2 text-base font-light uppercase'
                                    css={[sectionTitleColorStyle, paddingLeftStyle]}
                                >
                                    {solution.title}
                                </p>
                                <p
                                    className='text-sm mb-4 text-grey2 max-w-xs'
                                    css={[descriptionMaxWidth, paddingLeftStyle]}
                                >
                                    {solution.description}
                                </p>
                                {solution.links.map((link, key) => {
                                    return (
                                        <div className='mb-2' key={key}>
                                            <Link
                                                className='p-2 hover:font-medium block'
                                                to={link.link}
                                                css={fontNavLinkStyle}
                                                activeClassName='active'
                                            >
                                                {link.text}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Solutions;
