import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';
import { CSSTransition } from 'react-transition-group';
import VideoCyscale from '../campaigns/cspm-solution/CyscaleVideo';

const VideoFullTour = ({ image, videoUrl }) => {
    const [modal, setModal] = useState(false);

    return (
        <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
            <div
                onClick={() => {
                    setModal(!modal);
                }}
                onKeyPress={() => {}}
                tabIndex='0'
                role='button'
            >
                <GatsbyImage
                    image={image.childImageSharp.gatsbyImageData}
                    css={css`
                        &:hover {
                            scale: 1.025;
                        }
                    `}
                    className='rounded-xl'
                    alt='Video Thumbnail'
                />
            </div>
            {modal && <div className='modal-overlay'></div>}
            <CSSTransition in={modal} timeout={300} classNames='video' unmountOnExit>
                <VideoCyscale setModal={setModal} videoUrl={videoUrl} greyCloseButton />
            </CSSTransition>
        </div>
    );
};

export default VideoFullTour;
