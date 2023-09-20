import React from 'react';
import FocusLock from 'react-focus-lock';
import menuCloseCookiesModal from '../../assets/images/menuCloseCookiesModal.svg';
import { css } from 'twin.macro';
import classnames from 'classnames';
import useHSMeetingsLoaded from '../../hooks/useHSMeetingsLoaded';
import useLoadHSMeetingsScript from '../../hooks/useLoadHSMeetingsScript';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
const RequestDemoModal = ({ calendarModal, setCalendarModal }) => {
    const { loadingMeetings } = useHSMeetingsLoaded();

    useLoadHSMeetingsScript();

    useLockBodyScroll();

    return (
        <div
            className='bg-white sm:bg-transparent relative w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl sm:rounded-lg'
            role='dialog'
            aria-modal='true'
            css={css`
                @media screen and (min-width: 639px) {
                    height: 40rem;
                    z-index: 102;
                }
            `}
        >
            <FocusLock>
                <div
                    className='overflow-x-auto'
                    css={css`
                        height: 53.125rem;
                        @media screen and (max-width: 639px) {
                            height: 100vh;
                            background-color: white;
                        }
                    `}
                >
                    <div>
                        <div
                            className={classnames({ hidden: loadingMeetings, 'meetings-iframe-container': true })}
                            data-src='https://meetings.hubspot.com/barry-lyne/cyscale-cloud-platform-demo?embed=true'
                            css={css`
                                position: relative;
                            `}
                        >
                            {!loadingMeetings && (
                                <button
                                    type='button'
                                    className='inline-block absolute cursor-pointer'
                                    onClick={() => setCalendarModal(!calendarModal)}
                                    css={css`
                                        top: 2.5rem;
                                        right: 2rem;
                                        @media (min-width: 630px) and (max-width: 768px) {
                                            right: 7rem;
                                        }
                                        @media (min-width: 416px) and (max-width: 630px) {
                                            right: calc(((100vw - 400px) / 2) + 20px);
                                        }
                                    `}
                                >
                                    <img src={menuCloseCookiesModal} alt='toggle menu' width={15} height={15} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </FocusLock>
        </div>
    );
};

export default RequestDemoModal;
