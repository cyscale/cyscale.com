import React from 'react';
import { Link } from 'gatsby';

export default function RemoteWorkContent() {
    return (
        <div className='container text-center pt-40 pb-40'>
            <p className="text-gray text-lg">
                Coming soon! In the mean time, please visit our <Link className="text-blue underline" to='/'>homepage.</Link>
            </p>
        </div>
    );
}
