import React, { useEffect } from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Helmet } from 'react-helmet';
import { Container, Row } from '../../components/atoms/Containers';
import { useAppLink } from '../../common/links';

const CloudStorageMisconfigurations = ({ location }) => {
    const appLink = useAppLink({ location });

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

    return <>
        <Layout
            location={location}
            pageName='Cloud Storage Misconfiguration'
            title='Cloud Storage Misconfiguration'
            description='Cloud Storage Misconfiguration'
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
                                    <h1 className='text-center sm:text-left text-blue title-cs-misconfiguration mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
                                        <strong>The Complete Guide</strong> to Cloud <br
                                        className='hidden lg:block' /> Storage Misconfigurations
                                    </h1>
                                    <p className='text-center sm:text-left text-xl leading-normal mb-14 sm:mb-8 text-gray'>
                                        This guide helps CIOS, CIS and security staff to understand the risk & dangers
                                        of data security breaches and importance of a secure cloud storage
                                        infrastructure.
                                    </p>
                                    <div>
                                        <p className='text-left text-xl sm:text-2xl leading-normal mb-2 text-gray'>
                                            <strong>Download the whitepaper and learn more about:</strong></p>
                                        <ul className='text-lg sm:text-xl ml-2'>
                                            <li className='font-medium sm:font-bold'>&bull; Cloud data storage breaches</li>
                                            <li className='font-medium sm:font-bold'>&bull; Assets at risk</li>
                                            <li className='font-medium sm:font-bold'>&bull; Cloud storage misconfigurations</li>
                                            <li className='font-medium sm:font-bold'>&bull; How to fix misconfigurations</li>
                                            <li className='font-medium sm:font-bold'>&bull; Go beyond, with compliance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6' id='apply-now'>
                                <div
                                    className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 lg:pt-12 pb-0 px-8 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(5px)' }}
                                >
                                    <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0'>
                                        Get the White Paper
                                    </h2>
                                    <div style={{ minHeight: 365 }} id='storage-misconfigurations-form'
                                         className='pb-4' />
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
        </Layout>
    </>;
};

export default CloudStorageMisconfigurations;