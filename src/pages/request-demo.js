import React, { useEffect } from 'react';
import NewCookiesCampaignsLayout from '../components/campaigns/NewCookiesCampaignsLayout';
import { css } from 'twin.macro';

const heroHeigt = css`
    @media (min-height: 68.125rem) {
        height: calc(100vh - 18.75rem);
    }

    @media (min-height: 64rem) and (width: 48rem) {
        height: calc(100vh + 2rem);
    }

    @media (min-height: 73.75rem) and (width: 51.25rem) {
        height: calc(100vh - 8rem);
    }

    @media (min-height: 85.5rem) and (width: 57rem) {
        height: calc(100vh + 4.75rem);
    }

    @media (min-height: 85.375rem) and (width: 64rem) {
        height: calc(100vh - 11.5rem);
    }
`;

const ContactUs = ({ location }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
        script.type = 'text/javascript';
        document.body.appendChild(script);

        return () => script.remove();
    }, []);

    return (
        <NewCookiesCampaignsLayout
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
                        className='meetings-iframe-container'
                        data-src='https://meetings.hubspot.com/virginia-mitea/demo-for-cyscale-cloud-platform?embed=true'
                    ></div>
                </div>
            </div>
        </NewCookiesCampaignsLayout>
    );
};

export default ContactUs;
