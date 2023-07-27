import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import classnames from 'classnames';
const baseUrl = 'https://cyscale.com/blog/';

export default function Share({ title, permalink, blog, mobile }) {
    const platforms = {
        linkedin: {
            name: 'LinkedIn',
            shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl + permalink}`,
            icon: <FaLinkedin size={mobile ? 24 : 16} />
        },
        twitter: {
            name: 'Twitter',
            shareUrl: `https://twitter.com/share?text=${title}: &url=${baseUrl + permalink}&via=cyscale`,
            icon: <FaTwitter size={mobile ? 24 : 16} />
        }
    };

    return (
        <div
            className={classnames('flex justify-between', {
                'ml-0': blog,
                'ml-2': !blog
            })}
        >
            {Object.values(platforms).map(({ name, shareUrl, icon }) => (
                <a
                    href={shareUrl}
                    className={`py-3 ${blog ? 'px-0' : mobile ? 'px-3' : 'px-2'}`}
                    title={`Share on ${name}`}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(shareUrl, 'newwindow', 'width=720,height=720');
                    }}
                    key={name}
                >
                    {React.cloneElement(icon, { className: 'hover:text-primary  transition-all' })}
                </a>
            ))}
        </div>
    );
}
