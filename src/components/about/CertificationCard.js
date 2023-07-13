import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';

const CertificationCard = ({ imageData, titleSm, titleLg, company, classes }) => (
    <div className={`col-span-12 sm:col-span-6 lg:col-span-4 sm:mx-auto ${classes}`}>
        <div className='grid grid-cols-5 sm:grid-cols-3 gap-0 sm:gap-4 items-start sm:items-center'>
            <GatsbyImage
                className='col-span-1'
                alt=''
                image={imageData}
                css={css`
                    @media (max-width: 639px) {
                        width: 3.125rem;
                        margin: 0 auto;
                    }
                    width: 6.25rem;
                `}
            />
            <div className='text-left col-span-4 sm:col-span-2'>
                <p className='font-montserrat text-sm sm:text-lg font-bold hidden sm:block'>{titleLg}</p>
                <p className='font-hind text-xs sm:text-base hidden sm:block'>{company}</p>
                <p className='font-montserrat text-sm font-bold block sm:hidden'>{titleSm}</p>
                <p className='font-hind text-xs block sm:hidden'>{company}</p>
            </div>
        </div>
    </div>
);

export default CertificationCard;
