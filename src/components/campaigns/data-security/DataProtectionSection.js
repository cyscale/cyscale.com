import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import CheckMarkIcon from '../../../assets/images/check-mark-icon.svg';
import { Container } from '../../atoms/Containers';
import { sectionTitleSize } from './DataManagementSection';

const DataProtectionSection = ({ data }) => {
    return (
        <Container className='mt-0 md:mt-12 lg:mt-0'>
            <div className='pb-8 lg:pt-32 lg:pb-16'>
                <div className='sm:grid sm:grid-cols-12 xl:gap-28'>
                    <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                        <div className='mx-0 lg:max-w-md xl:max-w-2xl shadow-lg rounded-xl'>
                            <GatsbyImage image={data.policies.childImageSharp.gatsbyImageData} alt='Dashboard view' />
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                        <div className='mx-auto lg:mx-0 max-w-md sm:max-w-xl lg:max-w-md xl:max-w-2xl'>
                            <h2
                                className='font-bold text-primary leading-normal border-title-partly montserrat-font'
                                css={sectionTitleSize}
                            >
                                Out-of-the-box Data Protection
                                <br /> Policy with technical controls for:
                            </h2>
                            <div className='leading-normal text-base text-gray py-2 flex mt-8'>
                                <img src={CheckMarkIcon} alt='' className='mr-2' /> Data encryption
                            </div>
                            <div className='leading-normal text-base text-gray py-2 flex'>
                                <img src={CheckMarkIcon} alt='' className='mr-2' /> Data protection at rest
                            </div>
                            <div className='leading-normal text-base text-gray py-2 flex'>
                                <img src={CheckMarkIcon} alt='' className='mr-2' /> Data protection in transit
                            </div>
                            <div className='leading-normal text-base text-gray py-2 flex'>
                                <img src={CheckMarkIcon} alt='' className='mr-2' /> Data access
                            </div>{' '}
                            <div className='leading-normal text-base text-gray py-2 flex'>
                                <img src={CheckMarkIcon} alt='' className='mr-2' /> Data monitoring
                            </div>
                            <p className='mt-12'>
                                Use them, or create your own policies to ensure data security within your organization!
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 py-12 block lg:hidden'>
                    <div className='mx-auto max-w-md sm:max-w-xl shadow-lg rounded-xl'>
                        <GatsbyImage image={data.policies.childImageSharp.gatsbyImageData} alt='Dashboard view' />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DataProtectionSection;
