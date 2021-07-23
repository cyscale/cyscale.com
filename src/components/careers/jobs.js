import React from 'react';
import { Link } from 'gatsby';
import ViewIcon from '../../assets/images/eye.svg';
import Stack from '../../assets/images/full-stack-engineer.svg';
import Pen from '../../assets/images/UX-UI.svg';
import Display from '../../assets/images/project-manager.svg';

const Jobs = ({ data }) => {
    const icons = { display: Display, pen: Pen, stack: Stack };
    return (
        <div>
            <div className='max-w-1366px jobs mx-auto mt-158px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                <div className='block w-full'>
                    <h3 className='text-blue text-34px leading-8 md:max-w-sm new-line mb-50px'>Open positions</h3>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-7'>
                    {data.map(({ frontmatter }, index) => {
                        const { title, icon, permalink } = frontmatter;
                        return (
                            <div className='card-container hover:shadow-lg transition-all duration-300' key={index}>
                                <Link
                                    to={`/careers/${permalink}`}
                                    className='block w-full card pt-25px pb-25px pl-25px pr-25px bg-no-repeat'
                                    style={{ backgroundImage: `url(${icons[icon]})  ` }}
                                >
                                    <h4 className='text-24px font-bold lg:w-64 leading-6 new-line uppercase'>
                                        {title}
                                    </h4>
                                    <div className='mt-44'>
                                        <p className='new-line text-14px leading-5 text-formInputColor hover:text-black transition-all duration-300'>
                                            <img src={ViewIcon} className='w-24px' alt='see job description' />
                                            <span className='block pr-128px md:pr-200px '>see job description</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Jobs;
