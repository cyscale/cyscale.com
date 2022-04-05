import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link as ScrollLink } from 'react-scroll';
import alibaba from '../../assets/images/alibabacloud-icon.svg';
import arrow from '../../assets/images/arrow.svg';
import getStartedICon from '../../assets/images/getStartedIconCPSM.svg';
import logo from '../../assets/images/logo.svg';
import aws from '../../assets/images/svg_aws_white.svg';
import azure from '../../assets/images/svg_azure.svg';
import gcp from '../../assets/images/svg_gcp.svg';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Footer from '../../components/campaigns/footer';
import useHubSpot from '../../components/campaigns/useHubSpot';
import {
    AutomateCompliance,
    CutNoise,
    DetectPreventMisconfigurations
} from '../../components/cloud-security-posture-management/images';
import MisconfigCoverage from '../../components/cloud-security-posture-management/misconfigCoverage';
import GetStarted from '../../components/Home/getstarted';
import Seo from '../../components/Seo';
import GlobalContext from '../../context/GlobalContext';

export default function Misconfigurations({ location }) {
    useHubSpot({ formId: '8543c2b4-5f8e-4df7-9305-aa991806e01f', target: '#request-demo' });

    return (
        <GlobalContext.Provider value={{ location }}>
            <Seo
                title='Detect and Elimitate Cloud Misconfigurations'
                description='Improve your security posture in the cloud, a centralized view of all your assets and servers in one place. Detect and eliminate critical misconfigurations, policy violations, and mistakes.'
                pageName='MisconfigurationsCampaign'
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
                        <img className='block h-10' src={logo} alt='Cyscale' />
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
                                        <h1 className='font-semibold  text-3xl lg:text-4xl leading-normal mb-10'>
                                            Detect and Elimitate
                                            <br /> Cloud Misconfigurations
                                        </h1>
                                        <p className='mb-6 text-base lg:text-lg leading-relaxed'>
                                            Improve your security posture in the cloud, a centralized view of all your
                                            assets and servers in one place. Detect and eliminate critical
                                            misconfigurations, policy violations, and mistakes.
                                        </p>
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
                                    <h2 className='font-semibold  text-primary text-2xl lg:text-4xl'>
                                        Prevent misconfigurations & mistakes
                                    </h2>
                                    <p className='text-base lg:text-lg leading-relaxed mt-4 lg:mt-8'>
                                        Cyscale automatically detects and reports violations of security controls and
                                        compliance risks.
                                    </p>
                                    <p className='text-base lg:text-lg leading-relaxed mt-4 lg:mt-8'>
                                        It's much easier to keep your cloud assets in check with ongoing change
                                        monitoring that bridges cloud providers.
                                    </p>
                                    <p className='text-base lg:text-lg leading-relaxed mt-4 lg:mt-8'>
                                        Single out misconfigured services and see how failed security controls impact
                                        compliance from a single, unified view. Plus, you get reliable remediation
                                        guidelines in the same place.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6 order-1 lg:order-2 pb-4 lg:pb-0'>
                                    <DetectPreventMisconfigurations />
                                </div>
                            </Row>
                        </div>
                    </Section>
                    <Section>
                        <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                            <Row style={{ alignItems: 'center' }}>
                                <div className='col-span-12 lg:col-span-6 pb-4 lg:pb-0'>
                                    <CutNoise />
                                </div>
                                <div className='col-span-12 lg:col-span-6 lg:pl-8'>
                                    <h2 className='font-semibold  text-primary text-2xl lg:text-4xl'>Cut through the noise</h2>
                                    <p className='text-base lg:text-lg leading-relaxed mt-4 lg:mt-8'>
                                        Get relevant alerts when your cloud assets drift away from established security
                                        and compliance standards.
                                    </p>
                                    <p className='text-base lg:text-lg leading-relaxed mt-4 lg:mt-8'>
                                        Make Cyscale your single source of truth for CSPM and never miss an important
                                        security event.
                                    </p>
                                    <p className='text-base lg:text-lg leading-relaxed mt-4 lg:mt-8'>
                                        Move beyond bulky, list-based management. Cyscale's Security Knowledge Graph™
                                        makes precise correlations between all your cloud assets and data repositories
                                        to automatically pinpoint critical security improvements.
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </Section>
                    <Section>
                        <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                            <Row style={{ alignItems: 'center' }}>
                                <div className='col-span-12 lg:col-span-6 order-2 lg:order-1 lg:pr-8'>
                                    <h2 className='font-semibold  text-primary text-2xl lg:text-4xl'>Automate compliance checks</h2>
                                    <p className='text-base lg:text-lg leading-relaxed mt-4 lg:mt-8'>
                                        Use Cyscale for governance automation across cloud providers and internal teams
                                        to ensure consistent security and compliance.
                                    </p>
                                    <p className='text-base lg:text-lg leading-relaxed mt-4 lg:mt-8'>
                                        We keep your clouds under continuous assessment and provide in-app security
                                        consultancy so you make the most of your time and effort.
                                    </p>
                                    <p className='text-base lg:text-lg leading-relaxed mt-4 lg:mt-8'>
                                        Coming soon: create custom Controls that tap into our Security Knowledge Graph™
                                        and automate the security and compliance checks that matter the most for your
                                        organization.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6 order-1 lg:order-2 pb-4 lg:pb-0'>
                                    <AutomateCompliance />
                                </div>
                            </Row>
                        </div>
                    </Section>
                </Container>
                <MisconfigCoverage />
                <div className='gradientBGCSPM pt-60px pb-60px'>
                    <GetStarted
                        icon={getStartedICon}
                        btnComponent={
                            <ScrollLink smooth={true} duration={500} to='head'>
                                Request Live Demo
                            </ScrollLink>
                        }
                        description='See Cyscale in action'
                    />
                </div>
            </main>
            <Footer />
        </GlobalContext.Provider>
    );
}
