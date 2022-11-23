import React, { useEffect } from 'react';
import NewCookiesCampaignsLayout from '../components/campaigns/NewCookiesCampaignsLayout';

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
            <div className='bg-hero-campaigns-iam-security'>
                <div className='container max-w-7xl m-auto px-4 lg:px-8 pt-24 lg:pt-32 xl:pt-16'>
                    <h1 className='text-blue text-center text-3xl lg:text-5xl font-bold font-montserrat mt-20 lg:mt-0'>
                        Request Demo
                    </h1>
                    <p className='my-8 text-center font-medium text-sm lg:text-base font-montserrat'>
                        We are happy to schedule a product demo with you. <br /> Just fill out the form{' '}
                        <span className='inline lg:hidden'>below</span> and we will be in touch shortly.
                    </p>
                </div>
                <div className='lg:px-8 pb-8 lg:pb-12'>
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
