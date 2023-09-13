import React from 'react';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import { Link as ScrollLink } from 'react-scroll';
import { Container } from '../atoms/Containers';
import { css } from 'twin.macro';

const CallToAction = () => {
    return (
        <Container>
            <div className='md:pt-12 pb-36 sm:pb-52'>
                <div className='flex h-48 flex-col items-center'>
                    <img src={cloudIcon} alt='' />
                    <h3 className='text-center text-lg lg:text-2xl px-2 mt-4 mb-2 font-montserrat font-bold'>
                        Contextual security for the cloud-native stack
                    </h3>
                    <p className='font-hind text-base sm:text-lg lg:text-xl'>Time to value in less than 10 minutes</p>
                    <div className='mt-10 w-auto inline-block'>
                        <ScrollLink
                            className='gradientBgBtn w-full block text-sm font-medium rounded text-white text-center hover:no-underline no-underline cursor-pointer uppercase font-hind'
                            css={css`
                                padding: 0.625rem 2.5rem;
                            `}
                            to='meetings-calendar'
                            smooth={true}
                            duration={500}
                        >
                            Book a Demo
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CallToAction;
