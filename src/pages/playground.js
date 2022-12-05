import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row } from '../components/atoms/Containers';
import useHSFormLoaded from '../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../components/Loader/LoaderContainer/LoaderContainer';
import { css } from 'twin.macro';
import AnimatedNavbarLayout from '../components/campaigns/AnimatedNavbarLayout';
import PostsPreview from '../components/new-blog/PostsPreview';
import { Link } from 'gatsby';
import { animateScroll } from 'react-scroll';

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
            animateScroll.scrollToTop();
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
            title='Playground Account Access'
            description='Get access to a playground account, fully featured and populated with data.'
        >
            <Helmet>
                <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <div className='bg-hero-campaigns-iam-security' css={heroHeigt}>
                <div className='py-28 lg:py-32'>
                    <div className='container max-w-7xl m-auto px-8'>
                        <Row>
                            {showSectionForm && (
                                <div className='col-span-12 lg:col-span-6 '>
                                    {
                                        <div className='max-w-lg lg:max-w-xl mx-auto lg:mx-0'>
                                            <h2 className='text-3xl lg:text-5xl text-left text-blue font-bold mt-8 lg:mt-0 font-montserrat'>
                                                Get access to the Playground Account
                                            </h2>
                                            <p className='text-lg  text-left text-base font-medium max-w-md mt-8 font-montserrat'>
                                                We are happy to send you the connection details for the Cyscale
                                                Playground Account.
                                            </p>
                                            <p className='text-lg text-left text-base font-medium max-w-md font-montserrat'>
                                                Fill out the form and we will be in touch shortly.
                                            </p>{' '}
                                            <div>
                                                <p className='text-lg text-base font-medium max-w-md font-montserrat mt-8'>
                                                    The Playground Account is fully featured:{' '}
                                                </p>
                                                <ul className='list-disc text-base font-medium font-montserrat ml-8'>
                                                    <li>Asset inventory</li>
                                                    <li>Security assessment</li>
                                                    <li>Compliance score</li>
                                                    <li>and many more...</li>
                                                </ul>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )}
                            {showSectionForm ? (
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
                                    <h2 className='text-center text-base lg:text-lg font-montserrat font-bold'>
                                        Visit our blog for the latest articles on cloud security and compliance:
                                    </h2>
                                    <PostsPreview bg={'transparent'} />
                                </div>
                            )}
                        </Row>
                    </div>
                </div>
            </div>
        </AnimatedNavbarLayout>
    );
};

export default Playground;
