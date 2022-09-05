import React from 'react';
import { borderBottomItemNav } from './HomeMobile';
import navigation from '../NavItems/navigation.json';
import { Link } from 'gatsby';

import { sectionTitleColor } from '../NewNavigation';
import useMediaQuery from '../useMediaQuery';

const SolutionsMobile = () => {
    const isTablet = useMediaQuery('(min-width: 640px)');

    return (
        <div className='bg-white'>
            {navigation.solutions.map((solution, key) => {
                return (
                    <div
                        className={`py-4 px-8 ${key === navigation.solutions.length - 1 && !isTablet ? 'pb-60' : ''} `}
                        key={key}
                        css={borderBottomItemNav}
                    >
                        <div className='flex mb-1'>
                            <img src={solution.icon} alt='' />
                            <h1 className='text-base sm:text-2xl pl-2 uppercase' css={sectionTitleColor}>
                                {solution.title}
                            </h1>
                        </div>
                        {solution.links.map((item, key) => {
                            return (
                                <Link to={item.link} className='text-base sm:text-2xl pt-4 block' key={key}>
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
