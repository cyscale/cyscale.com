import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link as ScrollLink } from 'react-scroll';
import alibaba from '../../assets/images/alibabacloud-icon.svg';
import arrow from '../../assets/images/arrow.svg';
import getStartedICon from '../../assets/images/getStartedIconCPSM.svg';
import logo from '../../assets/images/logo.svg';
import controlMock from '../../assets/images/maintain-3rd-party-data-image.png';
import inventoryMock from '../../assets/images/optimize-costs-reveal-analyze-cloud-budget-spendings.png';
import richPolicyMock from '../../assets/images/remote-work-wft-compliance.png';
import policiesMock from '../../assets/images/Security-Controls-and-Policies.png';
import aws from '../../assets/images/svg_aws_white.svg';
import azure from '../../assets/images/svg_azure.svg';
import gcp from '../../assets/images/svg_gcp.svg';
import { Container, Row, Section } from '../../components/atoms/Containers';
import CampaignsFooter from '../../components/campaigns/footer';
import useHubSpot from '../../components/campaigns/useHubSpot';
import GetStarted from '../../components/Home/getstarted';
import Seo from '../../components/Seo';
import GlobalContext from '../../context/GlobalContext';

const Iso27001 = ({ location }) => {
    useHubSpot({ formId: 'aa6ef10b-be0a-4959-be34-1f00fb1cac4b', target: '#request-demo' });

    return (
        <GlobalContext.Provider value={{ location }}>
            <Seo
                title='ISO 27001 Compliance for cloud'
                description="'ISO/IEC 27001:2013 is the golden standard when it comes to information security. Part of the ISO 27000 family, it helps organizations protect their assets such as employee information, user data, and intellectual property."
                pageName='ISO27001Campaign'
                location={location}
            />
            <Helmet>
                <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js' />
                <meta name='robots' content='noindex' />
                <meta name='robots' content='nofollow' />
            </Helmet>
            <header id='head' className='bg-lightGrey pt-3 pb-2'>
                <Container>
                    <Link to='/' className='inline-flex'>
                        <img className='block h-10'  src={logo} alt='Cyscale' />
                    </Link>
                </Container>
            </header>
            <main>
                <section>
                    <div className='bg-primary py-8'>
                        <Container>
                            <Row className='items-center'>
                                <div className='col-span-12 lg:col-span-5 text-white'>
                                    <div className='max-w-lg mx-auto lg:ml-0 lg:mr-auto'>
                                        <h1 className='font-semibold  text-3xl lg:text-5xl leading-normal mb-10'>
                                            ISO 27001
                                            <br /> Compliance for Cloud
                                        </h1>
                                        <p className='mb-6'>
                                            Prepare your ISMS, secure digital assets with cutting-edge controls, connect
                                            policies & procedures to actual evidence.
                                        </p>
                                        <ul className='list-disc pl-4'>
                                            <li className='mb-6'>
                                                <strong>Asset Inventory</strong>: Connect all your cloud accounts from
                                                AWS, GCP, Azure, and Alibaba, in a read-only mode.
                                            </li>
                                            <li className='mb-6'>
                                                <strong>Out-of-the-box Policies</strong>: A set of battle-tested
                                                policies to jumpstart your ISMS
                                            </li>
                                            <li className='mb-6'>
                                                <strong>Annex A Controls and beyond</strong>: CIS benchmarks and
                                                well-architected frameworks, all neatly mapped to ISO 27001.
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
                                        <div id='request-demo' style={{ minHeight: 510 }}></div>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </div>
                    <div className='bg-grey1 py-4'>
                        <Container>
                            <div className='flex justify-between items-center'>
                                <div className='px-3'>
                                    <img src={aws} className='h-12' alt='AWS' />
                                </div>
                                <div className='px-3'>
                                    <img src={azure} className='h-12' alt='Azure' />
                                </div>
                                <div className='px-3'>
                                    <img src={gcp} className='h-12' alt='GCP' />
                                </div>

                                <div className='px-3'>
                                    <img src={alibaba} className='h-12' alt='Alibaba' />
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>
                <Container>
                    <Section>
                        <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                            <Row style={{ alignItems: 'center' }}>
                                <div className='col-span-12 lg:col-span-6 order-2 lg:order-1 lg:pr-8'>
                                    <h2 className='font-semibold  text-primary text-2xl lg:text-4xl'>Asset Inventory</h2>
                                    <p className='text-base lg:text-lg leading-relaxed mt-4 lg:mt-8'>
                                        Keep track of all your cloud assets such as virtual machines, storage buckets,
                                        and IAM users. Cyscale allows you to connect all your cloud accounts from AWS,
                                        GCP, Azure, and Alibaba, in a read-only mode.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6 order-1 lg:order-2 pb-4 lg:pb-0'>
                                    <img src={inventoryMock} alt='Asset Inventory' className='mx-auto w-auto h-auto' />
                                </div>
                            </Row>
                        </div>
                    </Section>
                    <Section>
                        <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                            <Row style={{ alignItems: 'center' }}>
                                <div className='col-span-12 lg:col-span-6 pb-4 lg:pb-0'>
                                    <img
                                        src={controlMock}
                                        alt='A list of Security Controls implemented by Cyscale'
                                        className='mx-auto w-auto h-auto'
                                    />
                                </div>
                                <div className='col-span-12 lg:col-span-6 lg:pl-8'>
                                    <h2 className='font-semibold  text-primary text-2xl lg:text-4xl'>Annex A Controls and beyond</h2>
                                    <p className='text-base lg:text-lg leading-relaxed  mt-4 lg:mt-8'>
                                        Continuously keep your systems and your data secure by following industry best
                                        practices such as CIS benchmarks and well-architected frameworks, all neatly
                                        mapped to ISO 27001. You can establish the statement of applicability for your
                                        cloud assets in minutes instead of weeks.
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </Section>
                    <Section>
                        <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                            <Row style={{ alignItems: 'center' }}>
                                <div className='col-span-12 lg:col-span-6 order-2 lg:order-1 lg:pr-8'>
                                    <h2 className='font-semibold  text-primary text-2xl lg:text-4xl'>Out of the box Policies</h2>
                                    <p className='text-base lg:text-lg leading-relaxed  mt-4 lg:mt-8'>
                                        Cyscale provides you with a set of battle-tested policies to jumpstart your
                                        ISMS. They are applicable to all your assets such as employee information,
                                        intelectual property, and physical equipment, besides cloud assets.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6 order-1 lg:order-2 pb-4 lg:pb-0'>
                                    <img
                                        src={policiesMock}
                                        className='mx-auto w-auto h-auto'
                                        alt='A list of different out-of-the-box policies and standards'
                                    />
                                </div>
                            </Row>
                        </div>
                    </Section>
                    <Section>
                        <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                            <Row style={{ alignItems: 'center' }}>
                                <div className='col-span-12 lg:col-span-6 pb-4 lg:pb-0'>
                                    <img
                                        src={richPolicyMock}
                                        className='mx-auto w-auto h-auto'
                                        alt='A rich policy content with data gathered inline'
                                    />
                                </div>
                                <div className='col-span-12 lg:col-span-6 lg:pl-8'>
                                    <h2 className='font-semibold  text-primary text-2xl lg:text-4xl'>Actionable Policies</h2>
                                    <p className='text-base lg:text-lg leading-relaxed  mt-4 lg:mt-8'>
                                        Cyscale enables you to link procedures to actual technical verifications and
                                        controls. You know at any moment the exact compliance status of your assets
                                        right inside the policy that describes how they are secured. In other words,
                                        inline evidence collection.
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </Section>
                </Container>
                <div className='gradientBGCSPM pt-60px pb-60px'>
                    <GetStarted
                        icon={getStartedICon}
                        btnComponent={
                            <ScrollLink smooth={true} duration={500} to='head'>
                                Request Live Demo
                            </ScrollLink>
                        }
                        description='Achieve true continuous compliance for ISO 27001'
                    />
                </div>
            </main>
            <CampaignsFooter />
        </GlobalContext.Provider>
    );
};

export default Iso27001;
