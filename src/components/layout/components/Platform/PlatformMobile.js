import React from 'react';
import { platform } from '../../nav';
import { Link } from 'gatsby';
import { descriptionColorStyle, borderBottomItemNavStyle } from '../../style';

const PlatformMobile = () => {
    return (
        <div className='bg-white pb-48'>
            {platform.map((item, key) => {
                return (
                    <div className='py-4 px-8' key={key} css={borderBottomItemNavStyle}>
                        <Link to={item.link}>
                            <div className='flex'>
                                <img src={item.icon} alt='' />
                                <span className='text-black text-base font-medium ml-2'>{item.title}</span>
                            </div>
                            <p css={descriptionColorStyle} className='text-sm ml-7'>
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
