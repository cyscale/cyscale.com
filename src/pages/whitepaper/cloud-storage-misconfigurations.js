import React, { useEffect } from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Helmet } from 'react-helmet';
import { Container, Row } from '../../components/atoms/Containers';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';

const CloudStorageMisconfigurations = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId: '5d2cef5a-dfcb-446c-977b-12b9e4cf138c',
                    target: '#storage-misconfigurations-form'
                });
            }
        }, 600);
    }, []);

    return (
        <>
            <Layout
                location={location}
                pageName='CloudStorageMisconfigurations'
                title='[White Paper] The Complete Guide to Cloud Storage Misconfigurations - Cyscale'
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
                                        <h1 className='text-left text-blue text-2xl sm:text-4xl leading-normal sm:leading-normal mb-8 sm:mb-10 md:mb-12 lg:mb-16 font-montserrat'>
                                            <strong>The Complete Guide</strong> to Cloud{' '}
                                            <br className='hidden lg:block' /> Storage Misconfigurations
                                        </h1>
                                        <p className='text-left text-base leading-normal mb-14 sm:mb-8 text-gray'>
                                            This guide helps CIOs, CISOs and security staff to understand the risk &
                                            dangers of data security breaches and the importance of a secure cloud
                                            storage infrastructure.
                                        </p>
                                        <div>
                                            <h2 className='text-left text-base leading-normal mb-2 text-gray'>
                                                <strong>Download the whitepaper and learn more about:</strong>
                                            </h2>
                                            <ul className='text-base ml-8 list-disc text-gray'>
                                                <li>Cloud data storage breaches</li>
                                                <li>Assets at risk</li>
                                                <li>Cloud storage misconfigurations</li>
                                                <li>How to fix misconfigurations</li>
                                                <li>Go beyond, with compliance</li>
                                            </ul>
                                        </div>
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
                                            id='storage-misconfigurations-form'
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

export default CloudStorageMisconfigurations;
