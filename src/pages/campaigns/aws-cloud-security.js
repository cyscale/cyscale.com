import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import arrow from '../../assets/images/arrow.svg';
import cloudIcon from '../../assets/images/cloud-icon-for-cspm.svg';
import { Container, Row } from '../../components/atoms/Containers';
import useHubSpot from '../../components/campaigns/useHubSpot';
import MisconfigurationTabs from '../../components/cloud-security-posture-management/MisconfigurationTabs';
import CookiesCampaignsLayout from '../../components/campaigns/CookiesCampaignsLayout';

const AWSCloudSecurity = ({ location }) => {
    useHubSpot({ formId: 'e2610c67-1db7-4443-b551-784a12a3da64', target: '#request-aws-demo' });

    return (
        <CookiesCampaignsLayout
            location={location}
            title={' AWS Cloud Security and compliance'}
            description={'Map, secure, and monitor your AWS assets in minutes.'}
            pageName={'AWSCloudSecurityCampaign'}
        >
            <section>
                <div className='bg-gradient-secondary py-8'>
                    <Container>
                        <Row className='items-center'>
                            <div className='col-span-12 lg:col-span-5 text-white'>
                                <div className='max-w-lg mx-auto lg:ml-0 lg:mr-auto'>
                                    <h1 style={{ lineHeight: 1.5 }} className='text-3xl lg:text-5xl mb-10'>
                                        AWS Cloud Security and Compliance
                                    </h1>
                                    <p className='mb-6 text-xl'>Map, secure, and monitor your AWS assets in minutes</p>
                                    <ul className='list-disc pl-3 ml-4'>
                                        <li className='mb-2 text-lg'>
                                            Have a simple view of all your assets across all regions and accounts
                                        </li>
                                        <li className='mb-2 text-lg'>
                                            Detect, understand the impact of, and remediate infrastructure
                                            misconfigurations
                                        </li>
                                        <li className='mb-2 text-lg'>
                                            Stay compliant with CIS benchmarks, industry standards, and your internal
                                            policies
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-7'>
                                <div className='bg-white rounded-xl shadow-lg  pt-4 pb-0 px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'>
                                    <img
                                        src={arrow}
                                        className='absolute left-0 top-0 -mt-1 -ml-8'
                                        width={70}
                                        alt='arrow'
                                    />
                                    <h2 className='font-semibold  text-2xl leading-normal text-primary mb-1'>
                                        Request a live demo
                                    </h2>
                                    <div id='request-aws-demo' style={{ minHeight: 450 }}></div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </section>
            <MisconfigurationTabs sectionTitle='' />
            <div className='bg-gradient-footer pt-60px pb-60px'>
                <Container>
                    <div className='mx-auto max-w-md text-center py-20'>
                        <img className='mx-auto mb-12 w-32' src={cloudIcon} alt='decoration' />
                        <h3 className='font-semibold  text-white text-xl uppercase mb-12'>Secure your AWS Assets</h3>

                        <ScrollLink
                            className='bg-white text-black font-medium transition-all cursor-pointer duration-300 border uppercase border-black py-5 px-16 rounded inline-block hover:bg-black hover:text-white'
                            smooth={true}
                            duration={500}
                            to='head'
                        >
                            Request Live Demo
                        </ScrollLink>
                    </div>
                </Container>
            </div>
        </CookiesCampaignsLayout>
    );
};

export default AWSCloudSecurity;
