import React from 'react';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import { Container, Row } from '../atoms/Containers';

const CloudComplianceSection = () => {
    return (
        <div className='bg-gradient-to-b from-selago to-white relative z-10' id='confidence'>
            <img src={corner} width={300} className='hidden md:block absolute top-0 right-0 m-0 z-20' alt='' />
            <Container>
                <div className='py-8 md:py-12 lg:py-20'>
                    <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-sm mb-20'>
                        <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly font-montserrat'>
                            100% Confidence with <br /> your Cloud Compliance
                        </h2>
                    </div>
                    <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                        <Row className='lg:gap-20'>
                            <div className='col-span-12 lg:col-span-6'>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    <strong className='montserrat-font'>Meet industry regulations</strong>
                                    <br />
                                    Protect sensitive data and comply with strict industry regulations in your
                                    organisation. Cyscale automatically runs all critical compliance checks and finds
                                    data at-risk.
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    <strong className='montserrat-font'>PCI-DSS, SOC 2, GDPR, and more</strong>
                                    <br />
                                    Cyscale offers a wide range of benchmarks and frameworks, including: CIS, ISO27001,
                                    PCI-DSS, NIST, SOC 2, GDPR.
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    <strong className='montserrat-font'>Built-in compliance templates</strong>
                                    <br />
                                    You can either use policy templates as a basis for your custom policies, or create
                                    them from scratch.
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <p className='leading-normal text-base text-gray mb-6'>
                                    <strong className='montserrat-font'>500+ out-of-the-box security controls</strong>
                                    <br />
                                    Onboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box
                                    security controls.
                                </p>
                            </div>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CloudComplianceSection;
