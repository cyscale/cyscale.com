import React, { useEffect, useState } from 'react';
import AnimatedNavbarLayout from '../components/campaigns/AnimatedNavbarLayout';
import { css } from 'twin.macro';
import classnames from 'classnames';
import { heroHeight } from '../assets/css/styles';
import RequestDemoModal from '../components/contact/RequestDemoModal';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import LoaderContainer from '../components/Loader/LoaderContainer/LoaderContainer';

const ModalTest = ({ location }) => {
    const [calendarModal, setCalendarModal] = useState(false);

    const { loadingForm } = useHSFormLoaded();

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms?.create({
                    portalId: '5413427',
                    formId: 'c2d8e2e6-6edb-43d2-9052-350e7f00d1f6',
                    target: '#meeting-form'
                });
            }
        }, 600);
    }, []);

    return (
        <AnimatedNavbarLayout
            location={location}
            pageName='RequestDemo'
            title='Request Demo - Cyscale'
            description='We are happy to schedule a product demo with you.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /request-demo/
            </div>
            <div className='hidden' data-title>
                Request Demo - Cyscale
            </div>
            <div className='hidden' data-description>
                We are happy to schedule a product demo with you.
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div className='bg-hero-campaigns-iam-security pb-8' css={heroHeight}>
                <div className='container max-w-7xl m-auto px-4 lg:px-8 pt-24 lg:pt-32 xl:pt-16'>
                    <h1
                        className={classnames({
                            'text-blue text-center text-3xl lg:text-5xl font-bold font-montserrat mt-12 sm:mt-20 lg:mt-0': true
                        })}
                    >
                        Request Demo
                    </h1>
                </div>
                <div className='max-w-xl mx-auto mt-12'>
                    <p className='my-4 text-center font-medium text-sm lg:text-base font-montserrat px-4 sm:px-0'>
                        Leave your details here and we'll get back to you today,
                        <br className='hidden sm:block' /> or if you have a preferred time you can{' '}
                        <span
                            className='underline cursor-pointer text-blue'
                            onClick={() => setCalendarModal(!calendarModal)}
                            onKeyDown={() => {}}
                            tabIndex='0'
                            role='button'
                        >
                            book directly into our calendar
                        </span>
                        .
                    </p>
                </div>
                <div className="px-3 sm:px-0">
                    <div className='rounded-xl shadow-lg mt-16 py-4 pt-12 pb-0 px-8 md:px-12 mx-auto relative bg-white max-w-xl'>
                        {loadingForm && <LoaderContainer minHeight={515} />}
                        <div
                            style={{ minHeight: 515 }}
                            id='meeting-form'
                            className={classnames('pb-4', { hidden: loadingForm })}
                        />
                    </div>
                </div>
            </div>
            {calendarModal && (
                <div className='w-screen h-screen fixed top-0 left-0 right-0 bottom-0' style={{ zIndex: 102 }}>
                    <div
                        className='sm:flex sm:justify-center sm:items-center'
                        css={css`
                            height: 100vh;
                            background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
                            backdrop-filter: blur(10px);
                        `}
                    >
                        <RequestDemoModal setCalendarModal={setCalendarModal} calendarModal={calendarModal} />
                    </div>
                </div>
            )}
        </AnimatedNavbarLayout>
    );
};

export default ModalTest;
