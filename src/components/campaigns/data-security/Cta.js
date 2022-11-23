import React from 'react';
import { Container } from '../../atoms/Containers';
import cloudIcon from '../../../assets/images/white-cloud-icon.svg';
import { animateScroll } from 'react-scroll';
import { css } from 'twin.macro';
import { sectionTitleSize } from './DataManagementSection';

const ctaHeight = css`
    height: 34.75rem;

    @media (max-width: 1280px) {
        height: auto;
    }
`;

const Cta = () => {
    return (
        <div className='gradientBGCSPM'>
            <Container>
                <div className='py-12 lg:py-32' css={ctaHeight}>
                    <div className='flex flex-col items-center'>
                        <img src={cloudIcon} alt='Cloud Icon' />
                        <h2
                            className='text-center px-2 mb-4 text-white font-montserrat font-bold'
                            css={sectionTitleSize}
                        >
                            Prioritize Data Security with Cyscale
                        </h2>
                        <p className='text-white text-center text-base font-medium mb-4'>
                            Sign up for a custom demo to see how we close
                            <br /> security gaps and help you move to the cloud.
                        </p>
                        <div className='mt-6 w-auto inline-block'>
                            <button
                                className='w-full block text-base font-medium rounded text-blue bg-white uppercase text-center py-3 px-4 hover:no-underline no-underline'
                                onClick={() => animateScroll.scrollToTop()}
                            >
                                Request a Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Cta;
