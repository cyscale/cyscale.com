import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import TopNav from '../layout/topNav';
import FeatureImage from '../../assets/images/undraw_Investing_re_bov7.inline.svg';
import { Row, Container, Section } from '../atoms/Containers';

const Index = () => {
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
        <>
            <Helmet>
                <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <div>
                <div className={`w-full pb-20px ContactUs bg-lightGrey2 bg-contain bg-no-repeat`}>
                    <TopNav />

                    <Section>
                        <Container>
                            <Row className='items-center'>
                                <div className='col-span-12 order-2 lg:order-1 lg:col-span-6'>
                                    <h1 className='font-semibold  text-30px md:text-30px xl:text-60px xl:w-96 new-line text-blue font-proximaBold mb-26px'>
                                        Let's make it win-win
                                    </h1>
                                    <p className='text-16px leading-normal text-black mb-0'>
                                        We don't want Cyscale to be just another expense on your balance sheet. Let's
                                        talk about your team, about your products, and about your challenges and come up
                                        with a pricing scheme that ultimately brings a positive ROI and helps you move
                                        faster
                                    </p>
                                </div>

                                <div className='col-span-12 order-1 lg:order-2 lg:col-span-5 flex justify-center'>
                                    <FeatureImage className='max-w-lg' />
                                </div>
                            </Row>
                        </Container>
                    </Section>

                    <div className='mt-55px w-full flex justify-center'>
                        <div id='contact-form' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
