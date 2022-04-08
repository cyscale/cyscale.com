import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
const baseUrl = 'https://cyscale.com/blog/';

export default function Share({ title, permalink }) {
    const platforms = {
        twitter: {
            name: 'Twitter',
            shareUrl: `https://twitter.com/share?text=${title}: &url=${baseUrl + permalink}&via=cyscale`,
            icon: <FaTwitter />
        },
        linkedin: {
            name: 'LinkedIn',
            shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl + permalink}`,
            icon: <FaLinkedin />
        }
    };

    return (
        <div className='flex justify-between' >
            {Object.values(platforms).map(({ name, shareUrl, icon }) => (
                <a
                    href={shareUrl}
                    className='p-3'
                    title={`Share on ${name}`}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(shareUrl, 'newwindow', 'width=720,height=720');
                    }}
                    key={name}
                >
                    {React.cloneElement(icon, {className:'hover:text-primary  transition-all'})}
                </a>
            ))}
        </div>
    );
}
