import React from 'react';
import Loader from '../Loader';

const LoaderContainer = ({ minHeight }) => {
    return (
        <div className='flex justify-center items-center' style={{ minHeight: minHeight }}>
            <Loader />
        </div>
    );
};

export default LoaderContainer;
