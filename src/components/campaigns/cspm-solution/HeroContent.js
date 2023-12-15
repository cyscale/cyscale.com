import React from 'react';
import gcpLogo from '../../../assets/images/google-cloud-campaigns-iam-security.svg';
import awsLogo from '../../../assets/images/aws-campaigns-iam-security.svg';
import azureLogo from '../../../assets/images/azure-campaigns-iam-security.svg';
import alibabaLogo from '../../../assets/images/alibaba-campaigns-iam-security.svg';
import oktaLogo from '../../../assets/images/okta-campaigns-iam-security.svg';

const HeroContent = () => {
    return (
        <div className='max-w-xl mx-auto lg:mx-0'>
            <h1 className='text-center sm:text-left text-blue text-3xl lg:leading-normal mb-8 montserrat-font'>
                Comprehensive <br className='block sm:hidden' /> <strong>CSPM solution</strong>
            </h1>
            <p className='text-center sm:text-left text-base lg:text-lg leading-relaxed text-gray'>
                Streamline posture management for multi-cloud environments, enable teams to continuously detect, prevent
                misconfigurations and control threats and ensure compliance for your cloud assets.
            </p>
            <ul className='list-disc pl-8 mb-8'>
                <li className='text-base lg:text-lg text-gray'>A comprehensive Asset Inventory and Asset Management</li>
                <li className='text-base lg:text-lg text-gray'>
                    Continuous Security and Compliance for AWS, Azure, GCP & more
                </li>
                <li className='text-base lg:text-lg text-gray'>
                    Automatic remediations by learning your cloud infrastructure
                </li>
                <li className='text-base lg:text-lg text-gray'>Detect change and eliminate misconfigurations </li>
            </ul>
            <div className='flex flex-row max-w-md sm:max-w-xl justify-between flex-wrap space-y-6 lg:space-y-0 lg:space-x-1 px-18 sm:px-0 mx-auto'>
                <img style={{ marginTop: '0' }} className='mx-auto sm:mx-0' src={gcpLogo} alt='' />
                <img style={{ marginTop: '0' }} className='mx-auto sm:mx-0' src={awsLogo} alt='' />
                <img style={{ marginTop: '0' }} className='mx-auto sm:mx-0' src={azureLogo} alt='' />
                <img style={{ marginTop: '0' }} className='mx-auto sm:mx-0 hidden sm:block' src={alibabaLogo} alt='' />
                <img style={{ marginTop: '0' }} className='mx-auto sm:mx-0 hidden sm:block' src={oktaLogo} alt='' />
            </div>
            <div className='flex flex-row max-w-xs justify-evenly flex-wrap space-y-6 px-18 sm:px-0 mx-auto  block sm:hidden'>
                <img style={{ marginTop: '0' }} className='' src={alibabaLogo} alt='' />
                <img style={{ marginTop: '0' }} className='' src={oktaLogo} alt='' />
            </div>
        </div>
    );
};

export default HeroContent;
