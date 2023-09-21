import React, { useEffect } from 'react';
import { Container, Row } from '../components/atoms/Containers';
import Layout from '../components/layout/CleanLayout';
import HeroPricing from '../assets/images/hero-pricing.png';
import checkMarkIcon from '../assets/images/check-mark-icon.svg';
import { css } from 'twin.macro';
import { Link as GatsbyLink } from 'gatsby';
import VisibilityIcon from '../assets/images/visibility-icon-pricing.svg';
import SecurityIcon from '../assets/images/security-icon-pricing.svg';
import ComplianceIcon from '../assets/images/compliance-icon-pricing.svg';
import { Link, Element } from 'react-scroll';
import classnames from 'classnames';

import { hoverButtonColorStyle } from '../components/layout/style';
import PricingCheck from '../assets/images/princing-check.svg';
import CaseStudiesSection from '../components/Home/CaseStudiesSection';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import { Helmet } from 'react-helmet';
import LoaderContainer from '../components/Loader/LoaderContainer/LoaderContainer';
import CyscaleBird from '../assets/images/cyscale-bird-homepage.svg';

const customFontSize = css`
    font-size: 1.75rem;

    @media (max-width: 1024px) {
        font-size: 1.625rem;
    }
`;

const heroBackground = css`
    background-image: url(${HeroPricing});
    background-size: 100% 100%;
`;

const featuresTitleFontSize = css`
    font-size: 2.125rem;
    line-height: 2.75rem;

    @media (max-width: 768px) {
        font-size: 1.375rem;
        line-height: 1.676rem;
    }
`;

const widthFeatureIcon = css`
    width: 3.25rem;
`;

const linkFontSize = css`
    @media (max-width: 1024px) {
        font-size: 0.98rem;
    }
`;

const PricingPage = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms?.create({
                    portalId: '5413427',
                    formId: 'c2d8e2e6-6edb-43d2-9052-350e7f00d1f6',
                    target: '#meeting-form'
                });
            }
        }, 600);
    }, []);

    return (
        <Layout
            location={location}
            pageName='Pricing'
            title='Cyscale | Pricing | Simple Cloud Security '
            description='Enterprise-grade cloud security, without enterprise-grade pricing. Cloud security designed for startups.'
        >
            <Helmet>
                <script charSet='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /pricing/
            </div>
            <div className='hidden' data-title>
                Cyscale | Pricing | Simple Cloud Security
            </div>
            <div className='hidden' data-description>
                Enterprise-grade cloud security, without enterprise-grade pricing. Cloud security designed for startups.
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div className='md:pt-16' css={heroBackground}>
                <div className='pt-24 pb-12 sm:pb-24 lg:py-32'>
                    <Container>
                        <h1 className='text-center text-blue text-4xl lg:text-5xl font-montserrat font-bold'>
                            Effective and affordable
                            <br /> cloud security
                        </h1>
                        <h4 className='text-center font-semibold font-montserrat text-base lg:text-lg mt-8'>
                            Enterprise-grade cloud security, without enterprise-grade pricing
                        </h4>
                        <Row className='mt-8 md:mt-16 lg:max-w-5xl mx-auto'>
                            <div className='col-span-12 lg:col-span-4'>
                                <div className='h-72 w-auto bg-white rounded-lg p-4 max-w-lg mx-auto lg:mx-0'>
                                    <div className='flex items-center justify-between'>
                                        <Link
                                            to='meetings-calendar'
                                            smooth={true}
                                            duration={500}
                                            className='cursor-pointer'
                                        >
                                            <h2
                                                className='text-blue font-montserrat font-bold mt-3'
                                                css={css`
                                                    font-size: 1.125rem;
                                                `}
                                            >
                                                Pro
                                            </h2>
                                        </Link>
                                        <p
                                            className='text-blue py-2 px-3 rounded-md font-bold font-hind text-xs mt-3'
                                            css={css`
                                                background-color: #d8deff;
                                            `}
                                        >
                                            fits most SaaS companies
                                        </p>
                                    </div>
                                    <p className='text-base font-hind font-medium mt-3'>
                                        <span className='font-montserrat text-2xl font-bold'>$700</span> / month, billed
                                        annually
                                    </p>
                                    <div className='flex'>
                                        <img src={PricingCheck} alt='' className='mt-1.5' />
                                        <p
                                            className='font-hind text-base mt-2 ml-2'
                                            css={css`
                                                color: #818791;
                                            `}
                                        >
                                            Full access to the platform
                                        </p>
                                    </div>{' '}
                                    <div className='flex relative'>
                                        <img src={PricingCheck} alt='' className='mt-1.5' />
                                        <p
                                            className='font-hind text-base mt-2 ml-2'
                                            css={css`
                                                color: #818791;
                                            `}
                                        >
                                            Up to 1000 assets
                                        </p>
                                    </div>
                                    <div className='mt-63px'>
                                        <Link
                                            to='meetings-calendar'
                                            smooth={true}
                                            duration={500}
                                            className='bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] py-3 px-7 rounded-md text-white text-sm font-bold cursor-pointer'
                                            css={css`
                                                background-color: #d8deff;
                                            `}
                                        >
                                            GET STARTED
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-4'>
                                <div className='h-72 w-auto bg-white rounded-lg p-4 max-w-lg mx-auto lg:mx-0'>
                                    <div className='flex items-center justify-between'>
                                        <Link
                                            to='meetings-calendar'
                                            smooth={true}
                                            duration={500}
                                            className='cursor-pointer'
                                        >
                                            <h2
                                                className='text-blue font-montserrat font-bold mt-3'
                                                css={css`
                                                    font-size: 1.125rem;
                                                `}
                                            >
                                                Scale
                                            </h2>
                                        </Link>
                                    </div>
                                    <p className='text-base font-hind font-medium mt-4'>
                                        <span className='font-montserrat text-2xl font-bold'>$2,000</span> / month,
                                        billed annually
                                    </p>
                                    <p
                                        className='font-hind text-base mt-2'
                                        css={css`
                                            color: #818791;
                                        `}
                                    >
                                        Scale your company
                                    </p>
                                    <div className='flex'>
                                        <img src={PricingCheck} alt='' className='mt-1.5' />
                                        <p
                                            className='font-hind text-base mt-2 ml-2'
                                            css={css`
                                                color: #818791;
                                            `}
                                        >
                                            Full access to the platform
                                        </p>
                                    </div>{' '}
                                    <div className='flex'>
                                        <img src={PricingCheck} alt='' className='mt-1.5' />
                                        <p
                                            className='font-hind text-base mt-2 ml-2'
                                            css={css`
                                                color: #818791;
                                            `}
                                        >
                                            Up to 5000 assets
                                        </p>
                                    </div>
                                    <div className='mt-8'>
                                        <Link
                                            to='meetings-calendar'
                                            smooth={true}
                                            duration={500}
                                            className='bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] py-3 px-7 rounded-md text-white text-sm font-bold cursor-pointer'
                                            css={css`
                                                background-color: #d8deff;
                                            `}
                                        >
                                            GET STARTED
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-4'>
                                <div className='h-72 w-auto bg-white rounded-lg p-4 max-w-lg mx-auto lg:mx-0'>
                                    <div className='flex items-center justify-between'>
                                        <Link
                                            to='meetings-calendar'
                                            smooth={true}
                                            duration={500}
                                            className='cursor-pointer'
                                        >
                                            <h2
                                                className='text-blue font-montserrat font-bold mt-3'
                                                css={css`
                                                    font-size: 1.125rem;
                                                `}
                                            >
                                                Enterprise
                                            </h2>
                                        </Link>
                                    </div>
                                    <div className='flex mt-4'>
                                        <img src={PricingCheck} alt='' className='mt-1.5' />
                                        <p
                                            className='font-hind text-base mt-2 ml-2'
                                            css={css`
                                                color: #818791;
                                            `}
                                        >
                                            Custom plan
                                        </p>
                                    </div>{' '}
                                    <div className='flex'>
                                        <img src={PricingCheck} alt='' className='mt-1.5' />
                                        <p
                                            className='font-hind text-base mt-2 ml-2'
                                            css={css`
                                                color: #818791;
                                            `}
                                        >
                                            1-on-1 onboarding
                                        </p>
                                    </div>{' '}
                                    <div className='flex items-start'>
                                        <img src={PricingCheck} alt='' className='mt-2.5' />
                                        <p
                                            className='font-hind text-base mt-2 ml-2'
                                            css={css`
                                                color: #818791;
                                            `}
                                        >
                                            Group training and best practices tips for your team
                                        </p>
                                    </div>
                                    <div className='mt-10 sm:mt-14 lg:mt-10'>
                                        <Link
                                            to='meetings-calendar'
                                            smooth={true}
                                            duration={500}
                                            className='py-3 px-7 rounded-md text-sm font-bold cursor-pointer'
                                            css={css`
                                                background-color: #d8deff;
                                                color: #0f26aa;
                                                &:hover {
                                                    background-color: #0f26aa;
                                                    color: white;
                                                }
                                            `}
                                        >
                                            CONTACT US
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Row>
                        <div className='mt-8 md:mt-16'>
                            <p className='text-base font-montserrat font-medium text-center'>
                                Not sure how many assets you want to protect?
                            </p>{' '}
                            <p className='text-base font-montserrat font-medium text-center'>
                                We can help you work that out on our discovery call.
                            </p>{' '}
                            <p className='text-base font-montserrat text-blue font-medium text-center mt-4'>
                                <GatsbyLink to='/free-trial/' className='hover:underline'>
                                    Or you can find out in minutes with the full access free trial.
                                </GatsbyLink>
                            </p>
                        </div>
                        <div className='flex justify-center mt-8'>
                            <Link
                                to='meetings-calendar'
                                smooth={true}
                                duration={500}
                                className='bg-blue text-white font-medium rounded font-hind text-base cursor-pointer'
                                css={[
                                    hoverButtonColorStyle,
                                    css`
                                        padding: 0.625rem 2.5rem;
                                    `
                                ]}
                            >
                                GET STARTED
                            </Link>
                        </div>
                    </Container>
                </div>
            </div>
            <div className='py-24'>
                <h1 className='text-center text-blue font-montserrat' css={featuresTitleFontSize}>
                    <strong> Unlike other solutions, we don't charge for features.</strong> <br />
                    Get full access to the platform on every plan.
                </h1>
                <Container>
                    <Row className='mt-16 gap-0 lg:gap-5'>
                        <div className='col-span-12 lg:col-span-4 mx-auto max-w-lg lg:mx-0'>
                            <img src={VisibilityIcon} alt='' css={widthFeatureIcon} />
                            <h2 className='font-montserrat font-bold mt-3' css={customFontSize}>
                                Visibility
                            </h2>
                            <p className='text-base font-mediun font-montserrat mt-4'>
                                Continuous and automated visibility over your multi-cloud environments. Each cloud asset
                                is a node in the Security Knowledge Graph.
                            </p>
                            <div className='flex mt-8 items-start'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/use-cases/cloud-data-security/'}
                                >
                                    Multi-cloud support (AWS, Google Cloud, Azure, Alibaba Cloud)
                                </GatsbyLink>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <p className='ml-2 text-sm'>Integrations (AWS SSO, Okta, Github, Azure AD)</p>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />
                                <p className='ml-2 text-sm'>Asset Inventory</p>
                            </div>
                            <div className='flex mt-2 items-start'>
                                <img src={checkMarkIcon} alt='' />
                                <p className='ml-2 text-sm'>Powerful dashboards</p>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />
                                <p className='ml-2 text-sm'>Graph diagrams</p>
                            </div>{' '}
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />
                                <p className='ml-2 text-sm'>Context / Contextual visibility</p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-4 mx-auto max-w-lg lg:mx-0 mt-8 lg:mt-0'>
                            <img src={SecurityIcon} alt='' css={widthFeatureIcon} />
                            <h2 className='font-montserrat font-bold mt-3' css={customFontSize}>
                                Security
                            </h2>
                            <p className='text-base font-mediun font-montserrat mt-4'>
                                Comprehensive analysis of your cloud security posture, leaving no vulnerability or
                                misconfiguration undetected.
                            </p>
                            <div className='flex mt-8 items-start'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/use-cases/cloud-misconfigurations/'}
                                >
                                    Misconfigurations (Detection & Remediation)
                                </GatsbyLink>
                            </div>
                            <div className='flex mt-2 items-start'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <p className='ml-2 text-sm'>400+ security controls (including contextual analysis)</p>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />
                                <p className='ml-2 text-sm'>Custom controls</p>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />
                                <p className='ml-2 text-sm'>Alerts & Notifications</p>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/products/security-knowledge-graph/'}
                                >
                                    Security Knowledge Graph
                                </GatsbyLink>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />
                                <p className='ml-2 text-sm'>Configurable risk rules</p>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />
                                <p className='ml-2 text-sm'>Automated prioritization</p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-4 mx-auto max-w-lg lg:mx-0 mt-8 lg:mt-0'>
                            <img src={ComplianceIcon} alt='' css={widthFeatureIcon} />
                            <h2 className='font-montserrat font-bold mt-3' css={customFontSize}>
                                Compliance
                            </h2>
                            <p className='text-base font-mediun font-montserrat mt-4'>
                                Technical controls automatically mapped to your organization’s policies and procedures
                                so you are immediatley notified of compliance gaps.
                            </p>
                            <div className='flex mt-8'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/use-cases/cloud-compliance-and-auditing/'}
                                >
                                    Policy templates
                                </GatsbyLink>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/use-cases/cloud-compliance-and-auditing/'}
                                >
                                    Policy Editor
                                </GatsbyLink>
                            </div>
                            <div className='flex mt-2 items-start'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/use-cases/cloud-compliance-and-auditing/'}
                                >
                                    Standards (CIS Cloud Benchmarks, ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST, and
                                    many more)
                                </GatsbyLink>
                            </div>
                            <div className='flex mt-2 items-start'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/use-cases/cloud-compliance-and-auditing/'}
                                >
                                    Inline evidence collection (based on security controls)
                                </GatsbyLink>
                            </div>
                        </div>
                    </Row>
                    <h4 className='text-center lg:text-lg mt-24 font-montserrat font-semibold' css={linkFontSize}>
                        Full technical specifications and documentation{' '}
                        <a
                            href='https://docs.cyscale.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue hover:underline font-montserrat font-semibold'
                        >
                            available here
                        </a>
                    </h4>
                </Container>
            </div>
            <div
                className='py-24 flex flex-col items-center'
                css={css`
                    background-image: linear-gradient(90deg, #0f26aa -1.79%, #ff4a56 165.6%);
                `}
            >
                <h2 className='text-white font-bold font-montserrat' css={customFontSize}>
                    Schedule a Demo
                </h2>
                <p className='text-white mt-8 text-center'>
                    Still unsure? We know cloud security can be complex,
                    <br className='hidden sm:block' /> but in just 20 minutes we can show you that it doesn't have to
                    be!
                </p>
                <GatsbyLink
                    to={'/request-demo/'}
                    className='bg-white text-base font-medium rounded mt-8 hover:bg-transparent font-hind'
                    css={css`
                        padding: 0.625rem 2.5rem;
                        border: thin solid #ffffff;
                        color: #0f26aa;

                        &:hover {
                            color: #ffffff;
                        }
                    `}
                >
                    BOOK A DEMO
                </GatsbyLink>
            </div>
            <div
                css={css`
                    background-color: #f5f9ff;
                `}
            >
                <Container>
                    <CaseStudiesSection disableAnimation={true} />
                </Container>
            </div>
            <div
                css={css`
                    background-color: #f5f9ff;
                `}
            >
                <Element name='meetings-calendar' />
                <div
                    className='relative pb-16'
                    css={css`
                        background-color: #f5f9ff;
                        @media (min-width: 1280px) {
                            height: 55.25rem;
                        }
                    `}
                >
                    <Container className='mb-16'>
                        <h1 className='text-blue text-center text-3xl lg:text-5xl font-bold font-montserrat'>
                            Let's talk
                        </h1>
                        <p className='my-8 text-center font-medium text-sm lg:text-base font-montserrat'>
                            Get peace of mind with cloud security that doesn't hold you back!
                        </p>
                        <div className='mt-12'>
                            <div className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 pt-12 pb-0 px-8 md:px-12 mx-auto relative bg-white max-w-xl'>
                                {loadingForm && <LoaderContainer minHeight={515} />}
                                <div
                                    style={{ minHeight: 515 }}
                                    id='meeting-form'
                                    className={classnames('pb-4', { hidden: loadingForm })}
                                />
                            </div>
                        </div>
                    </Container>
                    <img
                        src={CyscaleBird}
                        className='absolute hidden xl:block'
                        alt=''
                        css={css`
                            width: 20rem;
                            left: -1rem;
                            bottom: 9.5rem;
                        `}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default PricingPage;
