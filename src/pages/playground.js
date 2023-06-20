import React from 'react';
import { Helmet } from 'react-helmet';
import { Row } from '../components/atoms/Containers';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../components/Loader/LoaderContainer/LoaderContainer';
import AnimatedNavbarLayout from '../components/campaigns/AnimatedNavbarLayout';
import useHSFormDisplayAndSubmit from '../hooks/useHSFormDisplayAndSubmit';
import ThankYou from '../components/thank-you/ThankYou';
import { heroHeight } from '../assets/css/styles';
import arrowRight from '../assets/images/right-arrow-blue.svg';
import { css } from 'twin.macro';

const Playground = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();
    const { formSubmitted } = useHSFormDisplayAndSubmit({
        formId: '7a731caa-e393-44a1-a205-4080e4e3ab6f',
        target: '#playground-form'
    });

    return (
        <AnimatedNavbarLayout
            location={location}
            pageName='Playground'
            title='Playground Account Access - Cyscale'
            description='Get access to a playground account, fully featured and populated with data.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /playground
            </div>
            <div className='hidden' data-title>
                Playground Account Access - Cyscale
            </div>
            <div className='hidden' data-description>
                Get access to a playground account, fully featured and populated with data.
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
                                                Get access to the Playground Account
                                            </h2>
                                            <p className='text-left text-base font-medium max-w-md lg:max-w-xl mt-8 font-montserrat'>
                                                We are happy to send you the connection details for the Cyscale
                                                Playground Account. Fill out the form and we will be in touch shortly.
                                            </p>
                                            <p className='text-left text-base font-medium max-w-md font-montserrat'></p>{' '}
                                            <div>
                                                <p className='text-base font-bold max-w-md font-montserrat mt-8'>
                                                    The Playground Account is fully featured:{' '}
                                                </p>
                                                <div className='flex mt-2'>
                                                    <img src={arrowRight} alt='' />{' '}
                                                    <p className='ml-2 text-sm'>Asset inventory</p>
                                                </div>
                                                <div className='flex mt-2'>
                                                    <img src={arrowRight} alt='' />{' '}
                                                    <p className='ml-2 text-sm'>Security assessment</p>
                                                </div>
                                                <div className='flex mt-2'>
                                                    <img src={arrowRight} alt='' />{' '}
                                                    <p className='ml-2 text-sm'>Compliance score</p>
                                                </div>
                                                <div className='flex mt-2'>
                                                    <p
                                                        className='text-sm'
                                                        css={css`
                                                            margin-left: 1.6rem;
                                                        `}
                                                    >
                                                        and many more...
                                                    </p>
                                                </div>
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
                                        <h2 className='font-bold text-xl lg:text-2xl leading-normal mb-2 font-montserrat'>
                                            Request Access
                                        </h2>
                                        {loadingForm && <LoaderContainer minHeight={355} />}
                                        <div
                                            style={{ minHeight: 355 }}
                                            id='playground-form'
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

export default Playground;
