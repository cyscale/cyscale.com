import React, { useState } from 'react';
import { css } from 'twin.macro';
import useMediaQuery from '../../hooks/useMediaQuery';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import useKeyPressStorylane from '../../hooks/useKeyPressStorylane';
import WhiteCloseButton from '../../assets/images/white-close-icon.svg';
import FocusLock from 'react-focus-lock';

const ImageModal = ({ src, alt, toggleModal }) => {
    useLockBodyScroll();
    useKeyPressStorylane('Escape', null, toggleModal);

    const handleImageClick = (event) => {
        event.stopPropagation();
    };

    return (
        <FocusLock>
            <div
                css={css`
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: black;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                `}
                onClick={toggleModal}
                role='presentation'
            >
                <button
                    className='top-5 right-10 inline-block absolute cursor-pointer z-40'
                    onClick={toggleModal}
                    aria-label='Close image modal'
                >
                    <img src={WhiteCloseButton} alt='Close modal' width={15} height={15} />
                </button>
                <div
                    css={css`
                        width: 68.75rem;
                        padding: 1rem;
                    `}
                >
                    <img
                        src={src}
                        alt={alt}
                        css={css`
                            scale: 0.95;
                            width: 100% !important;
                            padding: 0 !important;
                        `}
                        onKeyDown={() => {}}
                        onClick={handleImageClick}
                        role='presentation'
                    />
                </div>
            </div>
        </FocusLock>
    );
};

const CustomImageRenderer = ({ src, alt, id, images, ...rest }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1280px)');
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const isClickable = images.some((image) => image.src === src);

    return (
        <>
            {isClickable && isDesktop ? (
                <button
                    onClick={toggleModal}
                    aria-label='Open image modal'
                    css={css`
                        width: 100%;
                        border: none;
                        outline: none;
                    `}
                >
                    <img src={src} alt={alt} {...rest} />
                </button>
            ) : (
                <img src={src} alt={alt} id={id} {...rest} />
            )}
            {isModalOpen && isDesktop && <ImageModal src={src} alt={alt} toggleModal={toggleModal} />}
        </>
    );
};

export default CustomImageRenderer;
