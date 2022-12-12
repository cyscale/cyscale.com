import React, { useEffect, useState } from 'react';
import AnimatedNavbarLayout from '../components/campaigns/AnimatedNavbarLayout';
import { css } from 'twin.macro';
import useHSMeetingsLoaded from '../hooks/useHSMeetingsLoaded';
import classnames from 'classnames';
import useLoadHSMeetingsScript from '../hooks/useLoadHSMeetingsScript';
import { heroHeight } from '../assets/css/styles';

const ContactUs = ({ location }) => {
    const { pathname } = location;
    const { loadingMeetings } = useHSMeetingsLoaded();
    const [meetingBookSucceeded, setMeetingBookSucceeded] = useState(false);

    useLoadHSMeetingsScript();

    const hubspotHandler = (event) => {
        if (event.data.meetingBookSucceeded) {
            setMeetingBookSucceeded(!meetingBookSucceeded);
        }
    };

    useEffect(() => {
        window.addEventListener('message', hubspotHandler);

        return () => {
            window.removeEventListener('message', hubspotHandler);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <AnimatedNavbarLayout
            location={location}
            pageName='RequestDemo'
            title='Request Demo - Cyscale'
            description='We are happy to schedule a product demo with you.'
            pathname={pathname}
        >
            <div className='bg-hero-campaigns-iam-security pb-8' css={heroHeight}>
                <div className='container max-w-7xl m-auto px-4 lg:px-8 pt-24 lg:pt-32 xl:pt-16'>
                    <h1
                        className={classnames({
                            'text-blue text-center text-3xl lg:text-5xl font-bold font-montserrat mt-12 sm:mt-20 lg:mt-0': true,
                            'mb-12': meetingBookSucceeded
                        })}
                    >
                        Request Demo
                    </h1>
                    {!meetingBookSucceeded && (
                        <p className='my-4 text-center font-medium text-sm lg:text-base font-montserrat'>
                            We are happy to schedule a product demo with you.
                            <br /> Use the calendar below to select an appropriate time slot.
                        </p>
                    )}
                </div>
                <div
                    className='lg:px-8'
                    css={css`
                        height: 43rem;
                    `}
                >
                    <div
                        className={classnames({ hidden: loadingMeetings, 'meetings-iframe-container': true })}
                        data-src='https://meetings.hubspot.com/virginia-mitea/demo-for-cyscale-cloud-platform?embed=true'
                    ></div>
                </div>
            </div>
        </AnimatedNavbarLayout>
    );
};

export default ContactUs;
