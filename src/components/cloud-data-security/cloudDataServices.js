import React from 'react';
import { Link } from 'gatsby';
import { css } from 'twin.macro';

const Services = ({ data, bannerBtn1Text, bannerBtn1Link }) => {
    return (
        <div className='bg-lightGrey2'>
            <div className='max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16 xl:gap-32 border-t border-b border-white border-solid pt-50px pb-50px'>
                    {data.map((content, index) => (
                        <div key={index}>
                            {React.cloneElement(content.icon, { alt: content.title, className: 'h-16' })}
                            <p className='text-16px text-black new-line leading-normal mt-24px'>
                                <strong className='block w-auto'>{content.title}</strong>
                                {content.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-55px pb-41px w-full flex justify-center'>
                <Link
                    to={bannerBtn1Link}
                    css={css`
                        padding: 0.625rem 2.5rem;
                    `}
                    className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind'
                >
                    {bannerBtn1Text}
                </Link>
            </div>
        </div>
    );
};

export default Services;
