import React from 'react';
import Description from './description';
import Apply from './apply-form';
import ScrollButton from '../ScrollButton/ScrollButton';
import { Container } from '../atoms/Containers';

const Details = ({ data }) => {
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
            <Description data={data} />
            {!data.frontmatter.disabled ? <Apply data={data} /> : <div className='mb-12'></div>}
        </>
    );
};

export default Details;
