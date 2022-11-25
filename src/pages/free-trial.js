import React, { useEffect } from 'react';
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
                            <div className='col-span-12 lg:col-span-6 '>
                                <div className='max-w-lg mx-auto lg:mx-0'>
                                    <h1 className='font-semibold text-5xl text-blue mb-12'>Start Free Trial</h1>
                                    <p className='text-base leading-relaxed max-w-md'>
                                        Cyscale is an agentless CSPM solution that helps your organization map, secure
                                        and monitor cloud assets across multiple providers.
                                    </p>
                                    <div className='flex mt-6 items-center'>
                                        <img src={ManFreeTrial} alt='' />{' '}
                                        <h4 className='ml-2 text-xl font-montserrat font-semibold'>
                                            1x1 with Cloud Security expert
                                        </h4>
                                    </div>
                                    <div className='flex mt-2 items-center'>
                                        <img src={TimerFreeTrial} alt='' />{' '}
                                        <h4 className='ml-2 text-xl font-montserrat font-semibold'>
                                            Deploy and onboard in 15 minutes
                                        </h4>
                                    </div>
                                    <div className='flex mt-2 items-center'>
                                        <img src={CloudFreeTrail} alt='' />{' '}
                                        <h4 className='ml-2 text-xl font-montserrat font-semibold'>
                                            Get immediate visibility & reporting
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div
                                    className='bg-white rounded-lg mt-6 lg:mt-0 lg:rounded-xl shadow-lg  pt-6 pb-0 px-4 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                        backdropFilter: 'blur(5px)'
                                    }}
                                >
                                    <h2 className='font-bold text-xl lg:text-2xl leading-normal mb-1 font-montserrat'>
                                        Start Your Cyscale Free Trial
                                    </h2>
                                    <p className='font-montserrat font-medium mb-2'>
                                        Get started today, no credit card required.
                                    </p>
                                    {loadingForm && <LoaderContainer minHeight={355} />}
                                    <div
                                        style={{ minHeight: 355 }}
                                        id='free-trial-form'
                                        className={classnames({ hidden: loadingForm })}
                                    />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </Section>
            </div>
        </AnimatedNavbarLayout>
    );
};

export default FreeTrial;
