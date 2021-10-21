import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import TopNav from '../layout/topNav';
import Hero from './hero';
import featureImage from '../../assets/images/undraw_Investing_re_bov7.svg';

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
                    <Hero
                        title={`Let's make it win-win`}
                        description={`We don't want Cyscale to be just another expense on your balance sheet.
                        Let's talk about your team, about your products, and about your challenges and come up with a pricing scheme that ultimately brings a positive ROI and helps you move faster`}
                        fimage={featureImage}
                    />

                    <div className='mt-55px w-full flex justify-center'>
                        <div id='contact-form' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
