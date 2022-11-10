import React, { useState } from 'react';
import PlayButton from '../../../assets/images/play-icon.png';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CSSTransition } from 'react-transition-group';
import VideoCyscale from './CyscaleVideo';
import styled from '@emotion/styled';
import useMediaQuery from '../../../hooks/useMediaQuery';

const PlayIcon = styled.img`
    top: calc((100% / 2) - 1.25rem);
    left: calc((100% / 2) - 1.25rem);
    transform: ${({ isHover }) => (isHover ? 'scale(2.5)' : 'scale(2)')};
`;

const HeroVideo = ({ data, modal, setModal }) => {
    const [isHover, setIsHover] = useState(false);
    const matches = useMediaQuery('(min-width: 23.438rem) and (max-width: 63.938rem)');

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
                        matches={matches}
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
