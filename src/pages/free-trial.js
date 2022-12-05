import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Section } from '../components/atoms/Containers';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../components/Loader/LoaderContainer/LoaderContainer';
import { css } from 'twin.macro';
import AnimatedNavbarLayout from '../components/campaigns/AnimatedNavbarLayout';
import ManFreeTrial from '../assets/images/man-free-trial.svg';
import CloudFreeTrail from '../assets/images/cloud-free-trial.svg';
import TimerFreeTrial from '../assets/images/timer-free-trial.svg';
import { Link } from 'gatsby';
import PostsPreview from '../components/new-blog/PostsPreview';

const heroHeigt = css`
    @media (min-width: 45rem) and (max-width: 80rem) {
        min-height: calc(100vh - 11.5rem);
    }

    @media (min-width: 80rem) {
        min-height: calc(100vh - 18.75rem);
    }
`;

const FreeTrial = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();
    const [showSectionForm, setShowSectionForm] = useState(!true);
    const hubspotHandler = (event) => {
        if (
            event.data.type === 'hsFormCallback' &&
            event.data.eventName === 'onFormSubmitted' &&
            event.data.id === 'abd54fce-98b1-41ca-b21a-c375b100edb4'
        ) {
            setShowSectionForm(!showSectionForm);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId: 'abd54fce-98b1-41ca-b21a-c375b100edb4',
                    target: '#free-trial-form'
                });
            }
        }, 600);

        window.addEventListener('message', hubspotHandler);

        return () => {
            window.removeEventListener('message', hubspotHandler);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <AnimatedNavbarLayout
            location={location}
            pageName='FreeTrial'
            title='Free Trial - Cyscale Cloud Platform'
            description='Free Trial - Cyscale Cloud Platform'
        >
            <Helmet>
                <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <div className='bg-hero-campaigns-iam-security' css={heroHeigt}>
                <Section>
                    <Container>
                        <Row>
                            {showSectionForm && (
                                <div className='col-span-12 lg:col-span-6 '>
                                    {
                                        <div className='max-w-lg mx-auto lg:mx-0'>
                                            <h1 className='font-semibold text-3xl lg:text-5xl text-center sm:text-left text-blue mb-10'>
                                                Start Free Trial
                                            </h1>
                                            <p className='text-base leading-relaxed max-w-md'>
                                                Cyscale is an agentless platform that helps your organization map,
                                                secure and monitor cloud assets across multiple providers. The Start
                                                Free Trial process is easy and effective:
                                            </p>
                                            <div className='flex mt-6 items-center'>
                                                <img src={ManFreeTrial} alt='' />{' '}
                                                <h4 className='ml-2 text-lg font-montserrat font-semibold'>
                                                    1x1 with a Cloud Security expert{' '}
                                                </h4>
                                            </div>
                                            <div className='pl-12 max-w-md'>
                                                <p className='text-sm font-montserrat font-medium'>
                                                    An initial call with us to understand your goals and set you up with
                                                    access to the platform
                                                </p>
                                            </div>
                                            <div className='flex mt-2 items-center'>
                                                <img src={TimerFreeTrial} alt='' />{' '}
                                                <h4 className='ml-2 text-lg font-montserrat font-semibold'>
                                                    Deploy and onboard in under 15 minutes{' '}
                                                </h4>
                                            </div>
                                            <div className='pl-12 max-w-md'>
                                                <p className='text-sm font-montserrat font-medium'>
                                                    Onboarding a connector in the Cyscale platform is quick and easy
                                                </p>
                                            </div>
                                            <div className='flex mt-2 items-center'>
                                                <img src={CloudFreeTrail} alt='' />{' '}
                                                <h4 className='ml-2 text-lg font-montserrat font-semibold'>
                                                    Get immediate visibility & reporting
                                                </h4>
                                            </div>
                                            <div className='pl-12 max-w-md'>
                                                <p className='text-sm font-montserrat font-medium'>
                                                    As soon as you onboard connectors, the platform starts the security
                                                    analysis providing you with results in no time. Enjoy full access to
                                                    the platform for 14 days.
                                                </p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )}
                            {showSectionForm && (
                                <div className='col-span-12 lg:col-span-6'>
                                    <div
                                        className='bg-white rounded-lg mt-6 lg:mt-0 lg:rounded-xl shadow-lg  pt-6 pb-0 px-4 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                            backdropFilter: 'blur(5px)'
                                        }}
                                    >
                                        <h2 className='font-bold text-xl lg:text-2xl leading-normal mb-1 font-montserrat'>
                                            Request Access
                                        </h2>
                                        <p className='font-montserrat font-medium mb-2'>Start your free trial today.</p>
                                        {loadingForm && <LoaderContainer minHeight={355} />}
                                        <div
                                            style={{ minHeight: 355 }}
                                            id='free-trial-form'
                                            className={classnames({ hidden: loadingForm })}
                                        />
                                    </div>
                                </div>
                            )}
                            {!showSectionForm && (
                                <div className='col-span-12'>
                                    <h1 className='text-center text-xl lg:text-4xl text-blue font-montserrat font-bold py-8 lg:py-10'>
                                        Thanks for contacting us, we will be in touch soon!
                                    </h1>
                                    <h2 className='text-center text-base lg:text-lg font-montserrat font-bold my-4'>
                                        Discover more about our product:
                                    </h2>
                                    <p className='text-center'>
                                        {' '}
                                        <Link
                                            className='text-base lg:text-lg underline'
                                            to={'/products/cloud-security-posture-management/'}
                                        >
                                            Cloud Security Posture Management
                                        </Link>
                                    </p>{' '}
                                    <p className='text-center mt-1'>
                                        {' '}
                                        <Link
                                            className='text-base lg:text-lg underline'
                                            to={'/products/cloud-security-posture-management/'}
                                        >
                                            Security Knowledge Graph
                                        </Link>
                                    </p>{' '}
                                    <p className='text-center pb-12 mt-1'>
                                        {' '}
                                        <Link
                                            className='text-base lg:text-lg underline'
                                            to={'/products/cloud-security-posture-management/'}
                                        >
                                            Compliance & Auditing{' '}
                                        </Link>
                                    </p>
                                    <PostsPreview pageName={'FreeTrial'} />
                                </div>
                            )}
                        </Row>
                    </Container>
                </Section>
            </div>
        </AnimatedNavbarLayout>
    );
};

export default FreeTrial;
