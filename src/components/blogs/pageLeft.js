import React from 'react';
import { Link } from 'gatsby';

const PageLeft = ({ data, feature }) => {

    return (
        <Link to={'/blog/' + data.permalink}>
            <div className='w-full  md:w-195px lg:w-282px xl:w-376px mb-16px shadow-md'>
                <div
                    className='w-full customimgmain customimgmain bg-no-repeat h-200px bg-grey3 bg-contain bg-center'
                    style={{ backgroundImage: 'url(' + data.featuredimage.publicURL + ')' }}
                    alt='imge'
                />
                <div className='bg-white p-15px'>
                    <h6 className='text-13px '>Category: {data.category}</h6>
                    <div>

                        <h3 title={data.title} className='text-blue text-24px leading-24px mt-3px'>

                            {feature === true ? data.title : data.title?.slice(0, 28) + "..."}


                        </h3>
                        <h6 className='text-13px mt-8px'>{data.date?.split('T')?.[0]}</h6>
                        <p title={data.description} className='text-16px leading-24px mt-8px'>
                            {feature === true ? data.description : data.description?.slice(0, 120) + "..."}
                        </p>
                    </div>
                    <div className='flex justify-end mt-8px'>
                        <span className='text-12px text-blue font-bold '>read</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PageLeft;
