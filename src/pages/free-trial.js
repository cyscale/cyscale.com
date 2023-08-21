import React from 'react';
import { Row } from '../components/atoms/Containers';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../components/Loader/LoaderContainer/LoaderContainer';
import AnimatedNavbarLayout from '../components/campaigns/AnimatedNavbarLayout';
import ManFreeTrial from '../assets/images/man-free-trial.svg';
import CloudFreeTrail from '../assets/images/cloud-free-trial.svg';
import TimerFreeTrial from '../assets/images/timer-free-trial.svg';
import useHSFormDisplayAndSubmit from '../hooks/useHSFormDisplayAndSubmit';
import ThankYou from '../components/thank-you/ThankYou';
import { heroHeight } from '../assets/css/styles';

const FreeTrial = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();
    const { formSubmitted } = useHSFormDisplayAndSubmit({
        formId: 'abd54fce-98b1-41ca-b21a-c375b100edb4',
        target: '#free-trial-form'
    });

    return (
        <AnimatedNavbarLayout
            location={location}
            pageName='FreeTrial'
            title='Start Free Trial - Cyscale'
            description='Cyscale is an agentless CSPM solution that helps your organization map, secure and monitor cloud assets across multiple providers.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /free-trial/
            </div>
            <div className='hidden' data-title>
                Start Free Trial - Cyscale
            </div>
            <div className='hidden' data-description>
                Cyscale is an agentless CSPM solution that helps your organization map, secure and monitor cloud assets
                across multiple providers.
            </div>
            <div className='hidden' data-category>
                website
            </div>
            <div className='bg-hero-campaigns-iam-security' css={heroHeight}>
                <div className='py-28 lg:py-32'>
                    <div className='container max-w-7xl m-auto px-8'>
                        <Row>
                            {!formSubmitted && (
                                <div className='col-span-12 lg:col-span-6 '>
                                    {
                                        <div className='max-w-lg lg:max-w-xl mx-auto lg:mx-0'>
                                            <h2 className='text-3xl lg:text-5xl text-left text-blue font-bold mt-8 lg:mt-0 font-montserrat'>
                                                Start Free Trial
                                            </h2>
                                            <p className='text-lg text-left text-base font-medium max-w-md lg:max-w-xl mt-8 font-montserrat'>
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
                                                    access to the platform.
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
                                                    Onboarding a connector in the Cyscale platform is quick and easy.
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
                            {!formSubmitted ? (
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
                            ) : (
                                <ThankYou />
                            )}
                        </Row>
                    </div>
                </div>
            </div>
        </AnimatedNavbarLayout>
    );
};

export default FreeTrial;
