import React from 'react';
import { borderBottomItemNavStyle } from '../../style/index';
import { solutions } from '../../nav';
import { Link } from 'gatsby';

import { sectionTitleColorStyle } from '../../style';
import useMediaQuery from '../../../../hooks/useMediaQuery';

const SolutionsMobile = () => {
    const isTablet = useMediaQuery('(min-width: 640px)');

    return (
        <div className='bg-white'>
            {solutions.map((solution, key) => {
                return (
                    <div
                        className={`py-4 px-8 ${key === solutions.length - 1 && !isTablet ? 'pb-60' : ''} `}
                        key={key}
                        css={borderBottomItemNavStyle}
                    >
                        <div className='flex mb-1'>
                            <img src={solution.icon} alt='' />
                            <h1 className='text-base pl-2 uppercase' css={sectionTitleColorStyle}>
                                {solution.title}
                            </h1>
                        </div>
                        {solution.links.map((item, key) => {
                            return (
                                <Link to={item.link} className='text-base pt-4 block' key={key}>
                                    {item.text}
                                </Link>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default SolutionsMobile;
