import React, { useRef } from 'react';
import useLockBodyScroll from '../../../hooks/useLockBodyScroll';
import menuCloseCookiesModal from '../../../assets/images/menuCloseCookiesModal.svg';
import useKeyPress from '../../../hooks/useKeyPress';
import FocusLock from 'react-focus-lock';
import useScreenOrientation from '../../../hooks/useScreenOrientation';
import classNames from 'classnames';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useOnClickOutside from '../../../hooks/useOutsideClick';

const VideoCyscale = ({ setModal, videoUrl }) => {
    const videoRef = React.useRef(null);
    const wrapperRef = useRef(null);
    const orientation = useScreenOrientation();
    const matches = useMediaQuery('(max-height: 420px)');

    useOnClickOutside(videoRef, () => {
        if (videoRef !== null) {
            videoRef.current.pause();
        }
        setModal(false);
    });
    useLockBodyScroll();
    useKeyPress('Escape', videoRef, setModal);

    const onCloseVideo = () => {
        videoRef.current.pause();
        setModal(false);
    };

    /* eslint-disable */
    return (
        <div
            className='w-screen h-screen fixed top-0 left-0 right-0 bottom-0 cursor-default object-contain'
            style={{ zIndex: 102 }}
        >
            <FocusLock>
                <div className='flex justify-center items-center' style={{ height: '100vh' }}>
                    <div
                        ref={wrapperRef}
                        className={classNames('relative', {
                            'max-w-6xl': !(orientation === 'landscape-primary' && matches),
                            'max-w-2xl': orientation === 'landscape-primary' && matches
                        })}
                    >
                        <button
                            type='button'
                            className='top-6 right-6 inline-block absolute cursor-pointer z-40'
                            onClick={onCloseVideo}
                            tabIndex='0'
                        >
                            <img src={menuCloseCookiesModal} alt='toggle menu' width={15} height={15} />
                        </button>
                        <video width='auto' height='auto' autoPlay controls tabIndex='2' ref={videoRef}>
                            <source src={videoUrl} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </FocusLock>
        </div>
    );
};

export default VideoCyscale;
