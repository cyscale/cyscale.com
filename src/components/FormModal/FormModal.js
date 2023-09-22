import React, { useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import menuCloseCookiesModal from '../../assets/images/menuCloseCookiesModal.svg';
import { css } from 'twin.macro';
import classnames from 'classnames';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { useClickOutsideSearch as useClickOutside } from '../../hooks/useClickOutsideSearch';
import { Helmet } from 'react-helmet';
import LoaderContainer from '../Loader/LoaderContainer/LoaderContainer';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';

const FormModal = ({ formModal, setFormModal }) => {
    const ref = useRef(null);
    const { loadingForm } = useHSFormLoaded();

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms?.create({
                    portalId: '5413427',
                    formId: '8fbb1e17-23c0-40da-9540-c4be82ea0ae3',
                    target: '#register-form'
                });
            }
        }, 600);
    }, []);
    useLockBodyScroll();
    useClickOutside(ref, formModal, setFormModal);

    return (
        <div
            ref={ref}
            className='bg-transparent relative w-full sm:max-w-xl md:max-w-xl sm:rounded-lg px-2 sm:px-0'
            role='dialog'
            aria-modal='true'
            css={css`
                @media screen and (min-width: 639px) {
                    height: 29.2rem;
                    z-index: 102;
                }
            `}
        >
            <Helmet>
                <script charSet='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <FocusLock>
                <div
                    className='overflow-x-auto'
                    css={css`
                        @media screen and (max-width: 639px) {
                            height: 548px;
                        }
                    `}
                >
                    <div>
                        <div className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 pt-12 pb-0 px-8 md:px-12 mx-auto relative bg-white max-w-xl'>
                            {loadingForm && <LoaderContainer minHeight={415} />}
                            <div
                                style={{ minHeight: 415 }}
                                id='register-form'
                                className={classnames('pb-4', { hidden: loadingForm })}
                            />
                        </div>
                        <button
                            type='button'
                            className='inline-block absolute cursor-pointer'
                            onClick={() => setFormModal(!formModal)}
                            css={css`
                                top: 3rem;
                                right: 1.5rem;
                                @media (min-width: 416px) and (max-width: 650px) {
                                    right: 2rem;
                                    top: 3rem;
                                }
                                @media (min-width: 650px) and (max-width: 768px) {
                                    right: 1rem;
                                    top: 3rem;
                                }
                                @media (min-width: 760px) {
                                    right: 1.5rem;
                                    top: 3.5rem;
                                }
                                @media (min-width: 1024px) {
                                    right: 1.5rem;
                                    top: 2rem;
                                }
                            `}
                        >
                            <img src={menuCloseCookiesModal} alt='toggle menu' width={15} height={15} />
                        </button>
                    </div>
                </div>
            </FocusLock>
        </div>
    );
};

export default FormModal;
