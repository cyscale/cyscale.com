import React from 'react';
import { Link } from 'gatsby';

const PrivacyAndCookieInfo = () => {
    return (
        <>
            <p className='text-black'>
                This website <strong>stores cookies on your computer</strong>. These cookies are used to collect
                information about how you interact with our website and allow us to remember you. We use this
                information <strong>in order to improve and customize your browsing experience</strong> and for{' '}
                <strong>analytics and metrics about our visitors</strong> both on this website and other media.
            </p>
            <p className='text-black mt-4 sm:mt-2 md:mt-4'>
                {' '}
                To find out more about the cookies we use, see our
                <Link className='text-primary' to='/policies/privacy-policy/'>
                    <strong> Privacy Policy.</strong>
                </Link>
            </p>
        </>
    );
};

export default PrivacyAndCookieInfo;
