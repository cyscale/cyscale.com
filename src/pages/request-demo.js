import React, { useEffect } from 'react';
import Layout from '../components/layout/CleanLayout';
import { Helmet } from 'react-helmet';

import { Container, Row, Section } from '../components/atoms/Containers';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import loading from '../assets/images/loading-spinner.svg';
import classnames from 'classnames';

const ContactUs = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId: 'dfe719f8-2cc3-4731-8add-f23036fa2c9f',
                    target: '#demo-form'
                });
            }
        }, 600);
    }, []);
    return (
        <Layout
            location={location}
            pageName='RequestDemo'
            title='Request Demo - Cyscale Cloud Platform'
            description='We are happy to schedule a product demo with you.'
        >
            <Helmet>
                <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <div className='bg-lightGreyEEE lg:py-24'>
                <Container>
                    <Section>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 '>
                                <div className='mt-16 pt-12 lg:pt-24 max-w-lg mx-auto lg:mx-0 bg-pricing'>
                                    <h1 className='font-semibold text-4xl lg:text-6xl mb-6 text-blue'> Request Demo</h1>
                                    <p className='text-lg lg:text-2xl mb-12'>
                                        We are happy to schedule a product demo with you. Just fill out the form{' '}
                                        <span className='inline lg:hidden'>below</span> and we will be in touch shortly.
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 '>
                                <div className='lg:bg-white rounded-lg mt-6 lg:mt-0 lg:rounded-xl lg:shadow-lg  lg:pt-12 pb-0 px-0 lg:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'>
                                    {loadingForm && (
                                        <div className='flex justify-center items-center' style={{ minHeight: 465 }}>
                                            <img src={loading} alt='' />
                                        </div>
                                    )}
                                    <div
                                        style={{ minHeight: 465 }}
                                        id='demo-form'
                                        className={classnames({ hidden: loadingForm })}
                                    />
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
