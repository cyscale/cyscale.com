import React, { useEffect } from 'react';
import { css } from 'twin.macro';
import GradientCard from './GradientCard';
import CISCOIcon from '../../assets/images/ciso-icon.svg';
import ShieldSettingsIcon from '../../assets/images/shield-settings-icon.svg';
import ShieldCloudIcon from '../../assets/images/shield-cloud-icon.svg';
import { Container } from '../atoms/Containers';
import AOS from 'aos';

const GradientCardsSection = () => {
    useEffect(() => {
        AOS.init({
            disable: function () {
                const windowWidth = document.documentElement.clientWidth;
                return windowWidth < 1280;
            }
        });
    }, []);

    return (
        <Container className='mb-16 lg:mb-24'>
            <div
                className='grid grid-cols-12 gap-x-5 mt-12'
                css={css`
                    overflow: hidden;
                `}
            >
                <div className='col-span-12 lg:col-span-4' data-aos='fade-right'>
                    <GradientCard
                        icon={CISCOIcon}
                        title={'CISO'}
                        text={
                            'Keep technological risk in check for the organization, track cloud security posture and remediation activities and generate reports for business stakeholders.'
                        }
                        link={'/products/cloud-security-posture-management/'}
                    />
                </div>
                <div className='col-span-12 lg:col-span-4' data-aos='fade-up'>
                    <GradientCard
                        icon={ShieldSettingsIcon}
                        title={'CLOUD INFRASTRUCTURE'}
                        text={
                            'Get visibility on the security posture of your multi-cloud environments from high-level to detail and ensure the productivity of your cloud team.'
                        }
                        link={'/products/cloud-security-posture-management/'}
                    />
                </div>
                <div className='col-span-12 lg:col-span-4' data-aos='fade-left'>
                    <GradientCard
                        icon={ShieldCloudIcon}
                        title={'CLOUD SECURITY'}
                        text={
                            'Identify the highest security risk with the help of our Security Knowledge Graph™ technology, capturing relationships between cloud resources, identities, and data.'
                        }
                        link={'/products/security-knowledge-graph/'}
                    />
                </div>
            </div>
        </Container>
    );
};

export default GradientCardsSection;
