import React, { useRef } from 'react';
import FocusLock from 'react-focus-lock';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import useOnClickOutside from '../../hooks/useOutsideClick';
import GrayCloseButton from '../../assets/images/grayCloseModal.svg';
import useKeyPressStorylane from '../../hooks/useKeyPressStorylane';

const StorylaneModal = ({ setModal, src }) => {
    const modalRef = useRef(null);

    useOnClickOutside(modalRef, () => setModal(false));
    useLockBodyScroll();
    useKeyPressStorylane('Escape', modalRef, setModal);

    return (
        <div
            className='w-screen h-screen fixed top-0 left-0 right-0 bottom-0 cursor-default object-contain'
            style={{ zIndex: 102 }}
        >
            <FocusLock>
                <div className='flex justify-center items-center' style={{ height: '100vh' }}>
                    <div ref={modalRef}>
                        <button
                            type='button'
                            className='top-6 right-6 inline-block absolute cursor-pointer z-40'
                            onClick={() => setModal(false)}
                            tabIndex='0'
                        >
                            <img src={GrayCloseButton} alt='Close' width={15} height={15} />
                        </button>
                        <iframe
                            className='sl-demo'
                            src={src}
                            name='sl-embed'
                            allow='fullscreen; camera; microphone'
                            style={{
                                width: '90vw',
                                height: '100vh',
                                border: 'none'
                            }}
                            title='Cyscale'
                        ></iframe>
                    </div>
                </div>
            </FocusLock>
        </div>
    );
};

export default StorylaneModal;
