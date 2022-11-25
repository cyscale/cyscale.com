import React from 'react';
import AnimatedNavbarLayout from '../components/campaigns/AnimatedNavbarLayout';
import { css } from 'twin.macro';
import useHSMeetingsLoaded from '../hooks/useHSMeetingsLoaded';
import classnames from 'classnames';
import useLoadHSMeetingsScript from '../hooks/useLoadHSMeetingsScript';

const heroHeigt = css`
    @media (min-width: 45rem) and (max-width: 80rem) {
        min-height: calc(100vh - 11.5rem);
    }

    @media (min-width: 80rem) {
        min-height: calc(100vh - 18.75rem);
    }
`;

const ContactUs = ({ location }) => {
    const { loadingMeetings } = useHSMeetingsLoaded();

    useLoadHSMeetingsScript();

    return (
        <AnimatedNavbarLayout
            location={location}
            pageName='RequestDemo'
            title='Request Demo - Cyscale Cloud Platform'
            description='We are happy to schedule a product demo with you.'
        >
            <div className='bg-hero-campaigns-iam-security pb-8' css={heroHeigt}>
                <div className='container max-w-7xl m-auto px-4 lg:px-8 pt-24 lg:pt-32 xl:pt-16'>
                    <h1 className='text-blue text-center text-3xl lg:text-5xl font-bold font-montserrat mt-12 sm:mt-20 lg:mt-0'>
                        Request Demo
                    </h1>
                    <p className='my-4 text-center font-medium text-sm lg:text-base font-montserrat'>
                        We are happy to schedule a product demo with you.
                        <br /> Use the calendar below to select an appropriate time slot.
                    </p>
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
