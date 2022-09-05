import React from 'react';
import { borderBottomItemNav } from './HomeMobile';
import navigation from '../NewNavigation/NavItems/navigation.json';
import { Link } from 'gatsby';
import { css } from 'twin.macro';

const descriptionColor = css`
    color: #606060;
`;

const PlatformMobile = () => {
    return (
        <div className='bg-white'>
            {navigation.platform.map((item, key) => {
                return (
                    <div className='py-4 px-8' key={key} css={borderBottomItemNav}>
                        <Link to={item.link}>
                            <div className='flex'>
                                <img src={item.icon} />
                                <span className='text-black text-base font-medium ml-2'>{item.title}</span>
                            </div>
                            <p css={descriptionColor} className='text-sm ml-7'>
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
