import React from 'react';
import { Container, Row } from '../atoms/Containers';

const Features = ({ features }) => {
    return (
        <Container>
            {' '}
            <Row className='mt-12 gap-0 lg:gap-8'>
                {features?.slice(0, 4)?.map((feature) => {
                    return (
                        <div className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 p-4 rounded-md'>
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3'>
                                {feature.featureTitle}
                            </h2>
                            <p className='text-sm mt-4 text-gray'>{feature.featureText}</p>
                        </div>
                    );
                })}
            </Row>
            <Row className='mt-8 lg:mt-16 mb-16 gap-0 lg:gap-8'>
                {features?.slice(4, 8)?.map((feature) => {
                    return (
                        <div className='col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 p-4 rounded-md'>
                            <h2 className='font-montserrat text-base font-bold text-blue mt-3'>
                                {feature.featureTitle}
                            </h2>
                            <p className='text-sm mt-4 text-gray'>{feature.featureText}</p>
                        </div>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Features;
