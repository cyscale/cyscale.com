import React from 'react';
import linked from '../../assets/images/linkedin.svg';
import twitter from '../../assets/images/twitter.svg';
import faceBook from '../../assets/images/facebook.svg';
import { Location } from '@reach/router';
import { TwitterShareButton, LinkedinShareButton, FacebookShareButton } from 'react-share';

export default function Share({title, description}) {
    return (
        <Location>
            {({ location }) => {
                const url = 'https://cyscale.com' + location.pathname
                return (
                    <div className='flex justify-between' style={{width: 80}}>
                        <LinkedinShareButton url={url} title={title}>
                            <img className='w-13px h-13px' src={linked} alt='linkedin' />
                        </LinkedinShareButton>
                        <TwitterShareButton url={url} title={title}>
                            <img className='w-16px h-13px' src={twitter} alt='twitter' />
                        </TwitterShareButton>
                        <FacebookShareButton url={url} quote={title}>
                            <img className='w-13px h-13px' src={faceBook} alt='facebook' />
                        </FacebookShareButton>
                    </div>
                );
            }}
        </Location>
    );
}
