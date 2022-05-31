import React from 'react';
import Description from './description';
import Apply from './apply-form';
import ScrollButton from '../ScrollButton/ScrollButton';
import { Container } from '../atoms/Containers';

const Details = ({ data, jobs }) => {
    return (
        <>
            <div className='bg-lightGreyEEE pt-48 pb-8'>
                <Container>
                    <h1 className='text-primary text-5xl font-semibold mb-20'>{data.frontmatter.title}</h1>
                    {!data.frontmatter.disabled && (
                        <div className='max-w-xs'>
                            <ScrollButton pageName='jobDetails' btnText='Apply' to='applyForm' />
                        </div>
                    )}
                </Container>
            </div>
            <Container>
                <div className='py-12 lg:py-16'>
                    <Description data={data} />
                </div>
                <div className='py-12 lg:py-16'>
                    {!data.frontmatter.disabled ? (
                        <Apply jobTitle={data.frontmatter.title} jobs={jobs} />
                    ) : (
                        <div className='mb-12'></div>
                    )}
                </div>
            </Container>
        </>
    );
};

export default Details;
