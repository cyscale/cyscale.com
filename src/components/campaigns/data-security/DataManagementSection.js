import React from 'react';
import { Container } from '../../atoms/Containers';
import CheckMarkIcon from '../../../assets/images/check-mark-icon.svg';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';

export const sectionTitleSize = css`
    font-size: 1.75rem;

    @media (max-width: 1280px) {
        font-size: 1.5rem;
    }
`;

const DataManagementSection = ({ data }) => {
    return (
        <Container>
            <div className='pb-8 lg:py-16'>
                <div className='sm:grid sm:grid-cols-12 xl:gap-28'>
                    <div className='col-span-12 lg:col-span-6'>
                        <div className='mx-auto lg:mx-0 max-w-md sm:max-w-xl lg:max-w-md xl:max-w-2xl'>
                            <h2
                                className='font-bold text-primary leading-normal border-title-partly font-montserrat'
                                css={sectionTitleSize}
                            >
                                Out-of-the-box Data Management
                                <br /> Policy, with procedures for:
                            </h2>
                            <div className='leading-normal text-base text-gray py-2 flex mt-8'>
                                <img src={CheckMarkIcon} alt='' className='mr-2' /> Data Lifecycle Management
                            </div>
                            <div className='leading-normal text-base text-gray py-2 flex'>
                                <img src={CheckMarkIcon} alt='' className='mr-2' /> Data Classification
                            </div>
                            <div className='leading-normal text-base text-gray py-2 flex'>
                                <img src={CheckMarkIcon} alt='' className='mr-2' /> Data Handling
                            </div>
                            <div className='leading-normal text-base text-gray py-2 flex'>
                                <img src={CheckMarkIcon} alt='' className='mr-2' /> Data Deletion
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mt-8 lg:mt-0'>
                        <div className='mx-auto lg:mx-0 max-w-md sm:max-w-xl lg:max-w-md xl:max-w-2xl shadow-lg rounded-lg'>
                            <GatsbyImage
                                image={data.policyManagement.childImageSharp.gatsbyImageData}
                                alt='Data Security Policies View'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DataManagementSection;
