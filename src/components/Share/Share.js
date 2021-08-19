import React from 'react';
import linked from '../../assets/images/linkedin.svg';
import twitter from '../../assets/images/twitter.svg';
import faceBook from '../../assets/images/facebook.svg';
import { map } from 'lodash';

const baseUrl = 'https://cyscale.com/blog/';

export default function Share({ title, description, permalink }) {
    const platforms = {
        twitter: {
            name: 'Twitter',
            shareUrl: `https://twitter.com/share?text=${title}: &url=${baseUrl + permalink}&via=cyscale`,
            icon: twitter
        },
        linkedin: {
            name: 'LinkedIn',
            shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl + permalink}`,
            icon: linked
        }
    };

    return (
        <div className='flex justify-between' style={{ width: 48 }}>
        {map(platforms, ({ name, shareUrl, icon }, key) => (
            <a
                href={shareUrl}
                title={`Share on ${name}`}
                onClick={e => {
                    e.preventDefault();
                    window.open(shareUrl, 'newwindow', 'width=720,height=720');
                }}
            >
                <img className='w-16px h-13px' src={icon} alt={name} />
            </a>
        ))}
    </div>
    );
}
