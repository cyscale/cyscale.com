import React from 'react';

import facebook from '../../assets/images/facebook.svg';
import linkedin from '../../assets/images/linkedin.svg';
import twitter from '../../assets/images/twitter.svg';
export function Address() {
    return (
        <div>
            <p className='leading-normal text-gray font-bold mb-4'>&copy; {new Date().getFullYear()} Cyscale Limited</p>
            <p className='leading-relaxed text-gray font-normal mb-2 text-sm'>
                Registered in England and Wales
                <br />
                Company number: 13695269
                <br />
                The Broadgate Tower, 20 Primrose Street, London, EC2A 2RS
                <br />
            </p>
            <a
                href='https://www.google.com/maps/place/Cyscale/@51.5209922,-0.0811234,17z'
                className='uppercase text-blue underline hover:no-underline hover:text-red font-medium text-sm'
            >
                View map
            </a>
            <div className='mt-16'>
                <div className='flex space-x-4 justify-start items-center'>
                    <a href='https://www.linkedin.com/company/cyscale'>
                        <img width={20} height={20} src={linkedin} alt='linkedin' />
                    </a>
                    <a href='https://www.twitter.com/cyscale'>
                        <img width={20} height={20} src={twitter} alt='twitter' />
                    </a>
                    <a href='https://www.facebook.com/cyscale'>
                        <img width={20} height={20} src={facebook} alt='facebook' />
                    </a>
                </div>
            </div>
        </div>
    );
}
