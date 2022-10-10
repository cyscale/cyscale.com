import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Section } from '../components/atoms/Containers';
import Layout from '../components/layout/CleanLayout';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../components/Loader/LoaderContainer/LoaderContainer';

const PricingPage = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

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
    }, []);
    return (
        <Layout
            location={location}
            pageName='Pricing'
            title='Pricing - Cyscale Cloud Platform'
            description="Pay fair for security experts' advice and guidance. Quantifiable ROI for cloud data security and compliance. Reduce cloud costs and consumption."
        >
            <Helmet>
                <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <div className='bg-lightGrey2 pt-16'>
                <Section>
                    <Container>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 '>
                                <div className='lg:mt-16 pt-24 max-w-lg mx-auto lg:mx-0 bg-pricing'>
                                    <h1 className='font-semibold text-5xl lg:text-6xl text-blue mb-16'>
                                        Let's make it <br />
                                        win-win
                                    </h1>
                                    <p className='text-base leading-relaxed text-gray'>
                                        We don't want Cyscale to be just another expense on your balance sheet. Let's
                                        talk about your team, about your products, and about your challenges and come up
                                        with a pricing scheme that ultimately brings a positive ROI and helps you move
                                        faster.
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='bg-white rounded-lg mt-6 lg:mt-0 lg:rounded-xl shadow-lg  pt-6 pb-0 px-4 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'>
                                    <h2 className='font-semibold text-xl lg:text-2xl leading-normal text-primary mb-1'>
                                        Contact Sales
                                    </h2>
                                    {loadingForm && (
                                        <LoaderContainer minHeight={510} />
                                    )}
                                    <div
                                        style={{ minHeight: 510 }}
                                        id='contact-form'
                                        className={classnames({ hidden: loadingForm })}
                                    />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </Section>
            </div>
        </Layout>
    );
};

export default PricingPage;
