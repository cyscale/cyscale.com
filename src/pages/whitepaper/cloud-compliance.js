import React, { useEffect } from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Helmet } from 'react-helmet';
import { Container, Row } from '../../components/atoms/Containers';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';

const CloudCompliance = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId: '3a35898d-9962-4b6a-9fc0-90ebd3362875',
                    target: '#cloud-compliance-form'
                });
            }
        }, 600);
    }, []);

    return (
        <>
            <Layout
                location={location}
                pageName='CloudComplianceWhitepaper'
                title='[White Paper] The Complete Guide to Cloud Compliance in 2023 - Cyscale'
                description='This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data security breaches and the importance of a secure cloud storage infrastructure.'
            >
                <Helmet>
                    <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
                </Helmet>
                <div className='bg-storage-misconfigurations pt-8'>
                    <Container>
                        <div className='pt-16 pb-24 lg:py-40'>
                            <Row>
                                <div className='col-span-12 lg:col-span-6 '>
                                    <div className='pt-1 max-w-lg lg:max-w-xl mx-auto lg:mx-0'>
                                        <h1 className='text-center sm:text-left text-blue title-cs-misconfiguration mb-8 sm:mb-10 md:mb-12 lg:mb-16 font-montserrat'>
                                            <strong>The In-Depth Guide</strong> to Cloud{' '}
                                            <br className='hidden lg:block' /> Compliance in 2023
                                        </h1>
                                        <div>
                                            <h2 className='text-left text-xl sm:text-2xl leading-normal mb-2 text-gray'>
                                                <strong>
                                                    This whitepaper helps you answer the following questions:
                                                </strong>
                                            </h2>
                                            <ul className='text-lg sm:text-xl ml-8 list-disc text-gray'>
                                                <li>Why is compliance important?</li>
                                                <li>
                                                    What standards exist on the market, and who are they destined for?
                                                </li>
                                                <li>How do you achieve compliance?</li>
                                            </ul>
                                        </div>
                                        <p className='text-left text-xl leading-normal mt-14 sm:mb-8 text-gray'>
                                            Download the whitepaper to read about ISO 27001, SOC 2, PCI-DSS, GDPR,
                                            HIPAA.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-span-12 lg:col-span-6' id='apply-now'>
                                    <div
                                        className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 lg:pt-12 pb-0 px-8 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                            backdropFilter: 'blur(5px)'
                                        }}
                                    >
                                        <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0'>
                                            Get the Whitepaper
                                        </h2>
                                        {loadingForm && <LoaderContainer minHeight={365} />}
                                        <div
                                            style={{ minHeight: 365 }}
                                            id='cloud-compliance-form'
                                            className={classnames('pb-4', { hidden: loadingForm })}
                                        />
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Container>
                </div>
            </Layout>
        </>
    );
};

export default CloudCompliance;
