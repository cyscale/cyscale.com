import React, { useState } from 'react';
import AnimatedNavbarLayout from '../AnimatedNavbarLayout';
import { Container, Row } from '../../atoms/Containers';
import LoaderContainer from '../../Loader/LoaderContainer/LoaderContainer';
import classnames from 'classnames';
import useHSFormLoaded from '../../../hooks/useHSFormLoaded';
import { css } from 'twin.macro';
import HeroContent from './HeroContent';
import HeroVideo from './HeroVideo';

const heroHeight = css`
    @media (min-height: 68.125rem) {
        height: calc(100vh - 18.75rem);
    }

    @media (min-height: 1180px) and (width: 820px) {
        height: calc(100vh + 14rem);
    }

    @media (min-height: 1368px) and (width: 912px) {
        height: calc(100vh + 2.75rem);
    }

    @media (min-height: 1366px) and (width: 1024px) {
        height: calc(100vh - 11rem);
    }
`;

const Variant = ({ location, data }) => {
    const { loadingForm } = useHSFormLoaded();
    const [mobileModal, setMobileModal] = useState(false);
    const [modal, setModal] = useState(false);

    return (
        <AnimatedNavbarLayout
            formId={'81943e73-3b0a-4e69-8c8d-92c747a10796'}
            formTargetId={'#request-cspm-demo'}
            location={location}
            title={'Comprehensive CSPM solution'}
            description={
                'Streamline posture management for multi-cloud environments, enable teams to continuously detect, prevent misconfigurations and control threats and ensure compliance for your cloud assets.'
            }
            pageName={'CSPMSolutionCampaign'}
        >
            <div className='bg-hero-campaigns-iam-security pb-8 pt-32 lg:pt-40 xl:pt-12' css={heroHeight}>
                <Container>
                    <Row>
                        <div className='col-span-12 block lg:hidden'>
                            <HeroContent />
                        </div>
                        <div className='col-span-12 block lg:hidden'>
                            <HeroVideo data={data} modal={mobileModal} setModal={setMobileModal} />
                        </div>
                        <div className='col-span-12 lg:col-span-6' id='apply-now'>
                            <div
                                className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 lg:pt-12 pb-0 px-8 md:px-12 max-w-lg lg:mr-0 relative mx-auto lg:mx-0'
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                    backdropFilter: 'blur(5px)'
                                }}
                            >
                                <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0 montserrat-font'>
                                    Request a live demo
                                </h2>
                                {loadingForm && <LoaderContainer minHeight={500} />}
                                <div
                                    style={{ minHeight: 500 }}
                                    id='request-cspm-demo'
                                    className={classnames('pb-4', { hidden: loadingForm })}
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='hidden lg:block'>
                                <HeroContent />
                            </div>
                            <div className='hidden lg:block'>
                                <HeroVideo data={data} modal={modal} setModal={setModal} />
                            </div>
                        </div>
                    </Row>
                    <div className='py-16 hidden sm:block '>
                        <div className='h-5'></div>
                    </div>
                </Container>
            </div>
        </AnimatedNavbarLayout>
    );
};

export default Variant;
