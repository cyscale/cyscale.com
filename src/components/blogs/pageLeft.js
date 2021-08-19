import React from 'react';
import { Link } from 'gatsby';
import Share from '../Share/Share';

const PageLeft = ({ data, feature }) => {
    return (
        <Link to={'/blog/' + data.permalink}>
            <div className='w-full  md:w-195px lg:w-282px xl:w-376px mb-16px shadow-md'>
                <div
                    className='w-full customimgmain customimgmain bg-no-repeat h-200px bg-grey3 bg-contain bg-center'
                    style={{ backgroundImage: 'url(' + data.featuredimage.publicURL + ')' }}
                    alt={data.title}
                />
                <div className='bg-white p-15px'>
                    <h3 className='text-13px '>Category: {data.category}</h3>
                    <div>
                        <h3 title={data.title} className='text-blue text-24px leading-24px mt-11px'>
                            {feature === true ? data.title : data.title?.slice(0, 28) + '...'}
                        </h3>
                        <h5 className='text-13px mt-11px'>{data.date?.split('T')?.[0]}</h5>
                        <h6 className='text-13px mt-11px'> by:{data.authors}</h6>
                        <p title={data.description} className='text-16px leading-24px mt-8px'>
                            {feature === true ? data.description : data.description?.slice(0, 120) + '...'}
                        </p>
                    </div>
                    <div className='flex justify-between align-content-center mt-13px mb-7px'>
                        <div className='w-80px flex justify-between'>
                            <Share title={data?.title} permalink={data?.permalink} description={data?.description} />
                        </div>
                        <span className='text-12px text-blue font-bold '>read</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PageLeft;
