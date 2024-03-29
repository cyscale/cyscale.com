import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/CleanLayout';
import { Helmet } from 'react-helmet';

import { Container, Row, Section } from '../components/atoms/Containers';
import { Address } from '../components/contact/Address';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../components/Loader/LoaderContainer/LoaderContainer';

const ContactUs = ({ location }) => {
    const [showFormMessage, setShowFormMessage] = useState(true);

    const { loadingForm } = useHSFormLoaded();

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
        // eslint-disable-next-line
    }, []);

    return (
        <Layout
            location={location}
            pageName='ContactUs'
            title='Contact us - Cyscale'
            description='We are always happy to assist with more information about us or our product which covers cloud security, kubernetes security and hybrid multi-cloud environments.'
        >
            <Helmet>
                <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /contact-us
            </div>
            <div className='hidden' data-title>
                Contact us - Cyscale
            </div>
            <div className='hidden' data-description>
                We are always happy to assist with more information about us or our product which covers cloud security,
                kubernetes security and hybrid multi-cloud environments.
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div className='bg-lightGreyEEE'>
                <Container>
                    <Section>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 order-2 lg:order-1'>
                                <div className='mt-16 pt-12 lg:pt-24 max-w-lg mx-auto lg:mx-0 bg-pricing'>
                                    <h1 className='font-semibold font-montserrat text-4xl lg:text-6xl text-blue mb-12 lg:mb-32 hidden lg:block'>
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
                                <div
                                    className={classnames({
                                        'rounded-lg mt-6 lg:mt-0 lg:rounded-xl lg:pt-6 pb-0 px-0 lg:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative': true,
                                        'lg:bg-white lg:shadow-lg': showFormMessage
                                    })}
                                >
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
                                    {loadingForm && <LoaderContainer minHeight={540} />}
                                    {showFormMessage && (
                                        <div
                                            style={{ minHeight: 540 }}
                                            id='contact-form'
                                            className={classnames({ hidden: loadingForm })}
                                        />
                                    )}
                                    {!showFormMessage && (
                                        <div style={{ minHeight: 645 }} className='flex justify-center items-center'>
                                            <h1 className='text-blue text-2xl sm:text-4xl font-semibold text-center pb-40'>
                                                Thanks for contacting us, <br className='block sm:hidden' /> we will be
                                                in touch soon!
                                            </h1>
                                        </div>
                                    )}
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
