import { Link } from 'gatsby';
import React from 'react';
import road from '../assets/images/hit-the-road.svg';
import Footer from '../components/layout/footer';
import TopNav from '../components/layout/topNav';
import Seo from '../components/Seo';
const NotFoundPage = () => (
    <>
        <TopNav pageName='404' scrollable={false} />
        <Seo title='Cyscale | Not found' description='Not found page' pageName='404' />
        <div className='text-center height-screen pt-20 pb-32 max-w-xl mx-auto'>
            <h1 className='m-0 font-bold text-9xl'>404</h1>
            <p className='text-lg'>
                You just hit the <strong>404 Route</strong> that doesn't exist... Go
                <Link className='text-blue' to='/'>
                    <strong> Home </strong>
                </Link>
                instead.
            </p>
            <div className='border-t border-grey3 mt-10 mb-10' />
            <img className='max-w-md lg:max-w-xl mx-auto mt-6' src={road} alt="" />
        </div>
        <Footer />
    </>
);

export default NotFoundPage;
