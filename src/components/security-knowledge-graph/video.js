import React from 'react';
import ReactPlayer from 'react-player';
import graphVideoThumbnail from '../../assets/images/graph-video-thumbnail.png'
const Video = () => {
    return (
        <div className='relative' style={{ paddingTop: '56.25%' }}>
            <ReactPlayer
                width='80%'
                height='80%'
                light={graphVideoThumbnail}
                className='absolute top-0 left-1/2 transform -translate-x-1/2'
                url='https://www.youtube.com/embed/oSMbL4iWz-E'
            />
        </div>
    );
};

export default Video;
