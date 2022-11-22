import React from 'react';
import { Container } from '../../atoms/Containers';
import DataClassificationIcon from '../../../assets/images/data-classification-policy.svg';
import DataLabelingIcon from '../../../assets/images/data-labeling-icon.svg';
import DataWhereaboutsIcon from '../../../assets/images/data-whereabouts-icon.svg';
import DataSecurityIcon from '../../../assets/images/data-security-icon.svg';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';

const dashboardMarginTop = css`
    margin-top: 8.5rem;

    @media (max-width: 1024px) {
        margin: 2rem 0 2rem 0;
    }
`;

const DataSecurityProgram = ({ data }) => {
    return (
        <Container>
            <div className='py-8 lg:py-32' id='start'>
                <div className='sm:grid sm:grid-cols-12 sm:gap-8'>
                    <div className='col-span-12 lg:col-span-6'>
                        <div className='mx-auto lg:mx-0 max-w-md sm:max-w-xl lg:max-w-sm'>
                            <h2 className='text-2xl lg:text-3xl font-bold text-primary leading-normal montserrat-font'>
                                Pillars of a healthy <br /> Data Security Program
                            </h2>
                        </div>
                        <div className='grid grid-cols-12 gap-6 mt-16 mx-auto lg:mx-0 max-w-md sm:max-w-xl'>
                            <div className='col-span-12 lg:col-span-6'>
                                <img src={DataClassificationIcon} alt='' width={30} height={30} />
                                <h4 className='text-lg font-semibold montserrat-font mt-2'>
                                    Data classification policy
                                </h4>
                                <p className='text-sm font-medium montserrat-font mt-2'>
                                    Maintain your Data Classification policy using Cyscale’s policy engine. You can
                                    either use provided templates and customize them to your needs, or create your own
                                    policy and procedures from scratch.{' '}
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <img src={DataLabelingIcon} alt='' width={30} height={30} />
                                <h4 className='text-lg font-semibold montserrat-font mt-2'>Data labeling</h4>
                                <p className='text-sm font-medium montserrat-font mt-2'>
                                    Use Cyscale controls to detect untagged cloud assets. Attach controls directly to
                                    your Data Classification policy, so that you’re able to track compliance score.
                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-6 mt-6 mx-auto lg:mx-0  max-w-md sm:max-w-xl'>
                            <div className='col-span-12 lg:col-span-6'>
                                <img src={DataWhereaboutsIcon} alt='' width={30} height={30} />
                                <h4 className='text-lg font-semibold montserrat-font mt-2'>Data whereabouts</h4>
                                <p className='text-sm font-medium montserrat-font mt-2'>
                                    A data security dashboard provides a focused overview of all the data stores across
                                    your multi-cloud environments, helping you keep track of the location of your most
                                    important data.
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                {' '}
                                <img src={DataSecurityIcon} alt='' width={30} height={30} />
                                <h4 className='text-lg font-semibold montserrat-font mt-2'>Data security</h4>
                                <p className='text-sm font-medium montserrat-font mt-2'>
                                    Use dashboards and controls for data security concerns: encryption, key hygiene,
                                    publicly accessible data stores, as well as issues that are specific to object
                                    containers, databases, disks and message queues.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                        <div className='mx-auto max-w-md lg:mx-0 max-w-md sm:max-w-xl lg:max-w-2xl'>
                            <GatsbyImage
                                image={data.dashboard.childImageSharp.gatsbyImageData}
                                css={dashboardMarginTop}
                                alt='Data Security View'
                                className='shadow-lg rounded-lg'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DataSecurityProgram;
