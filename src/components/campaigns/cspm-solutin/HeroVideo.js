import React, { useState } from 'react';
import PlayButton from '../../../assets/images/play-icon.png';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CSSTransition } from 'react-transition-group';
import VideoCyscale from './CyscaleVideo';
import styled from '@emotion/styled';

const PlayIcon = styled.img`
    top: 4.5rem;
    left: 8.5rem;
    transform: ${({ isHover }) => (isHover ? 'scale(2)' : 'scale(1.75)')};
`;

const HeroVideo = ({ data, modal, setModal }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <div style={{ marginTop: '1.4rem' }} className='flex justify-center lg:justify-start'>
                <div
                    className='cursor-pointer relative'
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    onClick={() => setModal(!modal)}
                >
                    <PlayIcon
                        src={PlayButton}
                        onMouseEnter={() => setIsHover(true)}
                        onClick={() => setModal(!modal)}
                        className='w-10 inline-block absolute cursor-pointer z-10'
                        alt=''
                        isHover={isHover}
                    />
                    <GatsbyImage
                        image={data.dash.childImageSharp.gatsbyImageData}
                        alt='Dashboard view'
                        className='shadow-xl'
                    />
                </div>
            </div>
            {modal && <div className='modal-overlay'></div>}
            <CSSTransition in={modal} timeout={300} classNames='video' unmountOnExit>
                <VideoCyscale setModal={setModal} />
            </CSSTransition>
        </>
    );
};

export default HeroVideo;
