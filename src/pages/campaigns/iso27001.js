import React, { useEffect } from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Seo from '../../components/Seo';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo.svg';
import capex from '../../assets/images/capex.svg';
import quali from '../../assets/images/quali.svg';
import salesflare from '../../assets/images/salesflare.svg';
import youscale from '../../assets/images/youscale.svg';
import zitec from '../../assets/images/zitec.svg';
import avatar from '../../assets/images/avatar.png';
import inventoryMock from '../../assets/images/optimize-costs-reveal-analyze-cloud-budget-spendings.png';
import controlMock from '../../assets/images/maintain-3rd-party-data-image.png';
import policiesMock from '../../assets/images/Security-Controls-and-Policies.png';
import richPolicyMock from '../../assets/images/remote-work-wft-compliance.png';
import getStartedICon from '../../assets/images/getStartedIconCPSM.svg';
import GetStarted from '../../components/Home/getstarted';
import { Link as ScrollLink } from 'react-scroll';
import { Helmet } from 'react-helmet';
import arrow from '../../assets/images/arrow.svg'

export default function Iso27001() {
    useEffect(() => {
        setTimeout(() => {
            if (typeof window !== 'undefined' && window['hbspt']) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId: 'aa6ef10b-be0a-4959-be34-1f00fb1cac4b',
                    target: '#request-demo'
                });
            }
        }, 600);
    }, []);
    return (
        <>
            <Seo
                title='ISO 27001 Compliance for cloud'
                description="'ISO/IEC 27001:2013 is the golden standard when it comes to information security. Part of the ISO 27000 family, it helps organizations protect their assets such as employee information, user data, and intellectual property."
                pageName='ISO27001Campaign'
            />
            <Helmet>
                <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js' />
            </Helmet>
            <header id='head' className='bg-lightGrey py-6'>
                <Container>
                    <Link to='/' className='inline-flex'>
                        <img className='block ' src={logo} alt='CYSCALE' />
                    </Link>
                </Container>
            </header>
            <main>
                <section>
                    <div className='bg-primary py-16'>
                        <Container>
                            <Row>
                                <div className='col-span-12 lg:col-span-5 text-white'>
                                    <div className='max-w-lg mx-auto lg:ml-0 lg:mr-auto'>
                                        <h1 className='text-3xl lg:text-5xl leading-normal mb-10'>
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
                                    <div className='bg-white rounded-xl shadow-lg  pb-0 py-8 px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'>
                                        <img src={arrow} className="absolute left-0 top-0 mt-4 -ml-8" width={70} />
                                        <h2 className='text-4xl leading-normal text-primary mb-6'>
                                            Request a live demo
                                        </h2>
                                        <div id='request-demo'style={{ minHeight: 400 }}>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </div>
                    <div className='bg-grey1 py-8'>
                        <Container>
                            <div className='flex justify-between items-center'>
                                <div className='px-2'>
                                    <img src={zitec} className='h-10' alt='zitec' />
                                </div>
                                <div className='px-2'>
                                    <img src={capex} className='h-8' alt='major league baseball' />
                                </div>
                                <div className='px-2'>
                                    <img src={youscale} className='h-10' alt='youscale' />
                                </div>

                                <div className='px-2'>
                                    <img src={quali} className='h-8' alt='quali' />
                                </div>
                                <div className='px-2'>
                                    <img src={salesflare} className='h-10' alt='salesflare' />
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>
                <section>
                    <div className='bg-lightGrey pt-16'>
                        <Container>
                            <Row>
                                <div className='col-span-12 md:col-span-4'>
                                    <h2 className='text-primary text-3xl '>
                                        Cyscale makes it easy to holistically view your security posture and maintain
                                        awareness of it.
                                    </h2>
                                </div>
                                <div className='my-8 md:my-0 col-span-12 md:col-span-3'>
                                    <img src={avatar} alt='Ovidiu Pop Avatar' />
                                </div>
                                <div className='pb-16 md:pb-0 col-span-12 md:col-span-5'>
                                    <p className='italic'>
                                        <q>
                                            With just a few clicks, I can register my AWS environment and get a
                                            comprehensive inventory of all the resources we have, then evaluate all of
                                            those resources.
                                            <br />
                                            <br />
                                            Then, as an added bonus, the ongoing evaluation of our environment helps me
                                            understand if we’ve had configuration drift.
                                        </q>
                                    </p>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </section>
                <Container>
                    <Section>
                        <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                            <Row style={{ alignItems: 'center' }}>
                                <div className='col-span-12 lg:col-span-6 order-2 lg:order-1 lg:pr-8'>
                                    <h2 className='text-primary text-2xl lg:text-4xl'>Asset Inventory</h2>
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
                                    <h2 className='text-primary text-2xl lg:text-4xl'>Annex A Controls and beyond</h2>
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
                                    <h2 className='text-primary text-2xl lg:text-4xl'>Out of the box Policies</h2>
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
                                    <h2 className='text-primary text-2xl lg:text-4xl'>Actionable Policies</h2>
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
            <footer className=' bg-gray  bg-footer-texture'>
                <Container>
                    <div className='flex-col md:flex-row flex justify-between py-20 max-w-3xl mx-auto'>
                        <div className='order-10 md:order-1'>
                            <small className='text-white text-sm'>
                                Cyscale &copy; 2018 - 2021. All rights reserved.
                            </small>
                        </div>
                        <div className='order-1'>
                            <a
                                href='/policies/terms-of-use'
                                className='font-light text-white no-underline hover:underline text-sm'
                            >
                                Terms of use
                            </a>
                        </div>
                        <div className='order-1'>
                            <a
                                href='/policies/security-policy'
                                className='font-light text-white no-underline hover:underline text-sm'
                            >
                                Security Policy
                            </a>
                        </div>
                        <div className='order-1'>
                            <a
                                href='/policies/privacy-policy'
                                className='font-light text-white no-underline hover:underline text-sm'
                            >
                                Privacy Policy{' '}
                            </a>
                        </div>
                        <div className='order-1'>
                            <a
                                href='https://status.cyscale.com'
                                rel='noopener noreferrer'
                                target='_blank'
                                className='font-light text-white no-underline hover:underline text-sm'
                            >
                                Status
                            </a>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
}
