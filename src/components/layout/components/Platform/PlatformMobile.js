import React from 'react';
import { borderBottomItemNav } from '../MobileNavigation';
import { platform } from '../../nav';
import { Link } from 'gatsby';
import { descriptionColorStyle } from '../../style';

const PlatformMobile = () => {
    return (
        <div className='bg-white'>
            {platform.map((item, key) => {
                return (
                    <div className='py-4 px-8' key={key} css={borderBottomItemNav}>
                        <Link to={item.link}>
                            <div className='flex'>
                                <img src={item.icon} alt='' />
                                <span className='text-black text-base sm:text-2xl font-medium ml-2'>{item.title}</span>
                            </div>
                            <p css={descriptionColorStyle} className='text-sm sm:text-base ml-7'>
                                {item.mobileDescription}
                            </p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default PlatformMobile;
