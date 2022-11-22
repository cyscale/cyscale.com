import React from 'react';
import corner from '../../../assets/images/corner-campaigns-iam-security.svg';
import { Container, Row, Section } from '../../atoms/Containers';
import WarningIcon from '../../../assets/images/warning-icon.svg';
import { css } from 'twin.macro';

const backgroundSection = css`
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    border-radius: 8px;
    line-height: 19.5px;
`;

const DataSecurityList = () => {
    return (
        <div className='bg-gradient-to-b from-selago to-white relative z-10'>
            <img src={corner} width={300} className='hidden md:block absolute top-0 right-0 m-0' alt='' />
            <Container>
                <Section>
                    <div className='max-w-md mx-auto sm:max-w-xl lg:mx-0 lg:max-w-sm mb-20'>
                        <h2 className='text-2xl lg:text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                            Stay in the know for:
                        </h2>
                    </div>

                    <Row className='lg:gap-6'>
                        <div className='col-span-12 lg:col-span-4'>
                            <div
                                className='font-semibold text-base mt-6 mb-10 lg:my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                css={backgroundSection}
                            >
                                <img src={WarningIcon} alt='' className='mr-2' />
                                Unencrypted data stores
                            </div>
                            <div
                                className='font-semibold text-base mb-10 lg:my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                css={backgroundSection}
                            >
                                <img src={WarningIcon} alt='' className='mr-2' />
                                Permissive access policies for keys
                            </div>
                            <div
                                className='font-semibold text-base my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                css={backgroundSection}
                            >
                                <img src={WarningIcon} alt='' className='mr-2' />
                                Poor key rotation
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-4'>
                            <div
                                className='font-semibold text-base lg:mt-6 mb-10 lg:mb-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                css={backgroundSection}
                            >
                                <img src={WarningIcon} alt='' className='mr-2' />
                                Databases with a public IP address
                            </div>
                            <div
                                className='font-semibold text-base mb-10 lg:my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                css={backgroundSection}
                            >
                                <img src={WarningIcon} alt='' className='mr-2' />
                                Keys exposed through vulnerable VMs
                            </div>
                            <div
                                className='font-semibold text-base my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                css={backgroundSection}
                            >
                                <img src={WarningIcon} alt='' className='mr-2' />
                                Data stores accessible from VMs with open management ports
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-4'>
                            <div
                                className='font-semibold text-base lg:mt-6 mb-10 lg:mb-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                css={backgroundSection}
                            >
                                <img src={WarningIcon} alt='' className='mr-2' />
                                Publicly accessible object containers
                            </div>
                            <div
                                className='font-semibold text-base mb-10 lg:my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                css={backgroundSection}
                            >
                                <img src={WarningIcon} alt='' className='mr-2' />
                                Publicly accessible databases
                            </div>
                            <div
                                className='font-semibold text-base my-6 p-2 flex items-center font-montserrat max-w-md sm:max-w-xl lg:max-w-sm mx-auto'
                                css={backgroundSection}
                            >
                                <img src={WarningIcon} alt='' className='mr-2' />
                                Publicly accessible disks
                            </div>
                        </div>
                    </Row>
                </Section>
            </Container>
        </div>
    );
};

export default DataSecurityList;
