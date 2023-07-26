import React from 'react';
import { css } from 'twin.macro';

const CSPMgetStarted = ({ title, description, btnText, btnLink }) => {
    return (
        <div className='block w-full pt-200px pb-200px'>
            <div className='max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                <div className='grid grid-cols-1'>
                    <div>
                        <div className='block w-full text-white text-24px leading-normal'>
                            <h3 className='font-semibold font-montserrat new-line uppercase lg:w-96'>{title}</h3>
                            <p className='mb-54px font-montserrat'>{description}</p>
                            <a
                                href={btnLink}
                                className='bg-white text-base font-medium rounded mt-8 hover:bg-transparent font-hind'
                                css={css`
                                    padding: 0.625rem 2.5rem;
                                    border: thin solid #ffffff;
                                    color: #0f26aa;

                                    &:hover {
                                        color: #ffffff;
                                    }
                                `}
                            >
                                {btnText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CSPMgetStarted;
