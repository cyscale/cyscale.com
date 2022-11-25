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

const heroHeigt = css`
    @media (min-width: 45rem) and (max-width: 80rem) {
        min-height: calc(100vh - 11.5rem);
    }

    @media (min-width: 80rem) {
        min-height: calc(100vh - 18.75rem);
    }
`;

const Playground = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();
    const [showSectionForm, setShowSection] = useState(true);
    const hubspotHandler = (event) => {
        if (
            event.data.type === 'hsFormCallback' &&
            event.data.eventName === 'onFormSubmitted' &&
            event.data.id === '7a731caa-e393-44a1-a205-4080e4e3ab6f'
        ) {
            setShowSection(!showSectionForm);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId: '7a731caa-e393-44a1-a205-4080e4e3ab6f',
                    target: '#playground-form'
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
            pageName='Playground'
            title='Playground - Cyscale Cloud Platform'
            description='Playground - Cyscale Cloud Platform'
        >
            <Helmet>
                <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <div className='bg-hero-campaigns-iam-security' css={heroHeigt}>
                <Section>
                    <Container>
                        {showSectionForm && (
                            <Row>
                                <div className='col-span-12 lg:col-span-6 '>
                                    {
                                        <div className='max-w-lg mx-auto lg:mx-0'>
                                            <h1 className='font-semibold text-5xl text-blue mb-12'>Playground</h1>
                                            <p className='text-base leading-relaxed max-w-md'>
                                                We are happy to send you the connection details for the Cyscale
                                                Playground Account. Just fill out the form and we will be in touch
                                                shortly.
                                            </p>
                                        </div>
                                    }
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <div
                                        className='bg-white rounded-lg mt-6 lg:mt-0 lg:rounded-xl shadow-lg  pt-6 pb-0 px-4 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                            backdropFilter: 'blur(5px)'
                                        }}
                                    >
                                        <h2 className='font-bold text-xl lg:text-2xl leading-normal mb-2 font-montserrat'>
                                            Try it out
                                        </h2>
                                        {loadingForm && <LoaderContainer minHeight={355} />}
                                        <div
                                            style={{ minHeight: 355 }}
                                            id='playground-form'
                                            className={classnames({ hidden: loadingForm })}
                                        />
                                    </div>
                                </div>
                            </Row>
                        )}
                    </Container>
                </Section>
            </div>
        </AnimatedNavbarLayout>
    );
};

export default Playground;
