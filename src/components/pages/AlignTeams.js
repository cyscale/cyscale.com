import React from 'react';
import { Container } from '../atoms/Containers';
import { css } from 'twin.macro';
import headerImage from '../../assets/images/remote-work-heading-image.png';

const titleSection = css`
    font-size: 1.75rem;
    line-height: 2.188rem;
`;

const AlignTeams = () => {
    return (
        <div className='py-16'>
            <Container id='align-entities'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className='col-span-1'>
                        <h2
                            className='font-semibold font-montserrat text-blue leading-normal lg:max-w-sm null sectionTitle new-line max-w-xl mx-auto'
                            css={titleSection}
                        >
                            Align teams & tasks
                            <span className='block w-full font-normal'>
                                Govern all cloud entities from a single dashboard
                            </span>
                        </h2>
                        <p className='leading-normal text-base max-w-xl mx-auto my-12 block lg:hidden'>
                            Consolidate all the key elements of cloud compliance in an easy-to-use dashboard. Replace
                            cloud portals with our Cloud Platform - the hub for a sweeping overview of your{' '}
                            <br className='hidden lg:block' />
                            <a
                                href='/products/cloud-security-posture-management/'
                                className='text-base text-blue underline hover:no-underline hover:text-red'
                            >
                                cloud security posture
                            </a>
                            .
                        </p>
                        <p className='max-w-xl text-base mx-auto leading-normal mb-12 block lg:hidden'>
                            Implement, manage, and monitor security policies and controls for single cloud and
                            multi-cloud environments through reliable automation.
                        </p>
                        <p className='leading-normal text-base max-w-xl mx-auto block lg:hidden'>
                            Demonstrate compliance for multiple projects with read-only dashboard access or reports
                            (CSV, PDF) you can share with internal stakeholders, prospects, or customers.
                        </p>
                        <img
                            src={headerImage}
                            alt='Govern all cloud entities from a single dashboard'
                            className='w-auto h-auto mt-8 mx-auto lg:mx-0'
                        />
                    </div>
                    <div className='col-span-2 hidden lg:block'>
                        <p className='leading-normal text-base max-w-xl lg:max-w-2xl mx-auto mb-24'>
                            Consolidate all the key elements of cloud compliance in an easy-to-use dashboard.
                            <br className='hidden lg:block' />
                            Replace cloud portals with our Cloud Platform - the hub for a sweeping overview of your{' '}
                            <br className='hidden lg:block' />
                            <a
                                href='/products/cloud-security-posture-management/'
                                className='text-base text-blue underline hover:no-underline hover:text-red'
                            >
                                cloud security posture
                            </a>
                            .
                        </p>
                        <p className='max-w-xl lg:max-w-2xl text-base mx-auto leading-normal mb-24'>
                            Implement, manage, and monitor security policies and controls for single cloud
                            <br className='hidden lg:block' />
                            and multi-cloud environments through reliable automation.
                        </p>
                        <p className='max-w-xl lg:max-w-2xl text-base mx-auto leading-normal'>
                            Demonstrate compliance for multiple projects with read-only dashboard access or
                            <br className='hidden lg:block' /> reports (CSV, PDF) you can share with internal
                            stakeholders, prospects, or customers.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AlignTeams;
