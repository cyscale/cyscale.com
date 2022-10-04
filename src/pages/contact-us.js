import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/CleanLayout';
import { Helmet } from 'react-helmet';

import { Container, Row, Section } from '../components/atoms/Containers';
import { Address } from '../components/contact/Address';

const ContactUs = ({ location }) => {
    const [showFormMessage, setShowFormMessage] = useState(true);

    const hubspotHandler = (event) => {
        if (
            event.data.type === 'hsFormCallback' &&
            event.data.eventName === 'onFormSubmitted' &&
            event.data.id === 'c29fe5d0-179d-4bff-a8ac-36790a48a6c2'
        ) {
            setShowFormMessage(!showFormMessage);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId: 'c29fe5d0-179d-4bff-a8ac-36790a48a6c2',
                    target: '#contact-form'
                });
            }
        }, 600);

        window.addEventListener('message', hubspotHandler);

        return () => {
            window.removeEventListener('message', hubspotHandler);
        };
    }, []);

    return (
        <Layout
            location={location}
            pageName='ContactUs'
            title='Contact us - Cyscale Cloud Platform'
            description='We are always happy to assist with more information about us or our product which covers cloud security, kubernetes security and hybrid multi-cloud environments.'
        >
            <Helmet>
                <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <div className='bg-lightGreyEEE'>
                <Container>
                    <Section>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 order-2 lg:order-1'>
                                <div className='mt-16 pt-12 lg:pt-24 max-w-lg mx-auto lg:mx-0 bg-pricing'>
                                    <h1 className='font-semibold text-4xl lg:text-6xl text-blue mb-12 lg:mb-32 hidden lg:block'>
                                        Contact
                                    </h1>
                                    <p className='leading-normal text-gray font-bold mb-8'>
                                        For support, email us at{' '}
                                        <a
                                            href='mailto:support@cyscale.com'
                                            className='text-blue underline hover:no-underline hover:text-red font-medium'
                                        >
                                            support@cyscale.com
                                        </a>
                                    </p>
                                    <Address />
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 order-1 lg:order-2'>
                                <div className='lg:bg-white rounded-lg mt-6 lg:mt-0 lg:rounded-xl lg:shadow-lg  lg:pt-6 pb-0 px-0 lg:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'>
                                    {showFormMessage && (
                                        <div>
                                            {' '}
                                            <h2 className='font-semibold text-4xl lg:text-2xl leading-normal text-primary mb-1'>
                                                How can we help you?
                                            </h2>
                                            <p className='text-base text-gray leading-normal mt-4 mb-4'>
                                                We are always happy to assist with more information about us or our
                                                product. Just fill out the form below and we will get back to you.{' '}
                                            </p>
                                        </div>
                                    )}
                                    <div style={{ minHeight: 510 }} id='contact-form' />
                                </div>
                            </div>
                        </Row>
                    </Section>
                </Container>
            </div>
        </Layout>
    );
};

export default ContactUs;
