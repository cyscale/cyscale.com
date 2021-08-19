import React from 'react';
import { Link } from 'gatsby';
import Share from '../Share/Share';

const maxTitle = 48;
const maxDescription = 128;

const PageLeft = ({ data, feature }) => {
    let title = data.title?.slice(0, maxTitle);
    let description = data.description?.slice(0, maxDescription);

    if (feature) {
        title = data.title;
        description = data.description;
    } else {
        if (data.title?.length > maxTitle) {
            title += '...';
        }
        if (!feature && data.description?.length > maxDescription) {
            description += '...';
        }
    }

    return (
        <Link to={'/blog/' + data.permalink}>
            <div className='w-full  md:w-195px lg:w-282px xl:w-376px mb-16px shadow-md'>
                <div
                    className='w-full customimgmain customimgmain bg-no-repeat h-200px bg-grey3 bg-cover bg-left-center'
                    style={{ backgroundImage: 'url(' + data.featuredimage.publicURL + ')', }}
                    alt={data.title}
                />
                <div className='bg-white p-4'>
                    <span className='text-xs block'>
                        Category: <strong>{data.category}</strong>
                    </span>
                    <div>
                        <h3 title={data.title} className='text-blue text-24px leading-24px mt-11px'>
                            {title}
                        </h3>
                        <span className='text-xs mt-2 block bold text-grey2'>
                            <strong>{data.authors} </strong> · <strong>{data.date?.split('T')?.[0]}</strong>
                        </span>
                        <p title={data.description} className='text-base leading-24px mt-2'>
                            {description}
                        </p>
                    </div>
                    <div className='flex justify-between align-content-center mt-13px mb-7px'>
                        <div className='w-80px flex justify-between'>
                            <Share title={data?.title} permalink={data?.permalink} description={data?.description} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PageLeft;
