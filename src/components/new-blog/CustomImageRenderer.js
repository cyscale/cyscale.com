import React, { useState } from 'react';
import { css } from 'twin.macro';
import useMediaQuery from '../../hooks/useMediaQuery';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import useKeyPressStorylane from '../../hooks/useKeyPressStorylane';
import WhiteCloseButton from '../../assets/images/white-close-icon.svg';

const ImageModal = ({ src, alt, toggleModal }) => {
    useLockBodyScroll();
    useKeyPressStorylane('Escape', null, toggleModal);
    const handleImageClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div
            css={css`
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            `}
            onClick={toggleModal}
            onKeyPress={() => {}}
            tabIndex="0"
            role='presentation'
        >
            <button type='button' className='top-5 right-10 inline-block absolute cursor-pointer z-40' tabIndex='0'>
                <img src={WhiteCloseButton} alt='toggle menu' width={15} height={15} />
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
                    onClick={handleImageClick}
                    css={css`
                        scale: 0.95;
                    `}
                />
            </div>
        </div>
    );
};

const CustomImageRenderer = ({ src, alt, id, images, ...rest }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1280px)');
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const isClickable = images.some((image) => {
        return image.src === src;
    });

    return (
        <>
            {isClickable && isDesktop ? (
                <img
                    src={src}
                    alt={alt}
                    {...rest}
                    css={css`
                        cursor: pointer;
                    `}
                    onKeyPress={() => {}}
                    tabIndex="0"
                    role='presentation'
                    onClick={toggleModal}
                />
            ) : (
                <img src={src} alt={alt} id={id} {...rest} />
            )}
            {isModalOpen && isDesktop && <ImageModal src={src} alt={alt} toggleModal={toggleModal} />}
        </>
    );
};

export default CustomImageRenderer;
