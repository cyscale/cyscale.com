import React from 'react';
import { Link } from 'gatsby';
import PostsPreview from '../new-blog/PostsPreview';

const ThankYou = () => {
    return (
        <div className='col-span-12'>
            <h1 className='text-center text-xl lg:text-4xl text-blue font-montserrat font-bold py-8 lg:py-10'>
                Thanks for contacting us, we will be in touch soon!
            </h1>
            <h2 className='text-center text-base lg:text-lg font-montserrat font-bold my-4'>
                Discover more about our product:
            </h2>
            <p className='text-center'>
                {' '}
                <Link
                    className='text-base lg:text-lg underline font-montserrat'
                    to={'/products/cloud-security-posture-management/'}
                >
                    Cloud Security Posture Management
                </Link>
            </p>{' '}
            <p className='text-center mt-1'>
                {' '}
                <Link
                    className='text-base lg:text-lg underline font-montserrat'
                    to={'/products/cloud-security-posture-management/'}
                >
                    Security Knowledge Graph
                </Link>
            </p>{' '}
            <p className='text-center pb-12 mt-1'>
                {' '}
                <Link
                    className='text-base lg:text-lg underline font-montserrat'
                    to={'/products/cloud-security-posture-management/'}
                >
                    Compliance & Auditing{' '}
                </Link>
            </p>
            <PostsPreview bg='transparent' />
        </div>
    );
};

export default ThankYou;
