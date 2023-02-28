import React from 'react';
import Hero from './Hero';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import { Container, Row } from '../atoms/Containers';
import { Link } from 'gatsby';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';

const Page = ({ data }) => {
    return (
        <div>
            <Hero
                heroBackground={data.hero.heroBackground}
                heroImage={data.hero.heroImage.childImageSharp.gatsbyImageData}
                heroImageAlt={data.hero.heroImageAlt}
                markdown={data.hero.heroMarkdown}
            />
            {data?.sectionsList?.map((section, index) => {
                if (section.imagePosition === 'left') {
                    return (
                        <LeftSection
                            key={index}
                            subtitle={section.listSectionSubtitle}
                            image={section.listSectionImage.childImageSharp.gatsbyImageData}
                            alt={section.listSectionAlt}
                            markdown={section.listSectionMarkdown}
                        />
                    );
                }
                if (section.imagePosition === 'right') {
                    return (
                        <RightSection
                            key={index}
                            subtitle={section.listSectionSubtitle}
                            image={section.listSectionImage.childImageSharp.gatsbyImageData}
                            alt={section.listSectionAlt}
                            markdown={section.listSectionMarkdown}
                        />
                    );
                }
                return null;
            })}
            <div className='bg-gradient-to-b from-selago to-white relative z-10' id='confidence'>
                <img src={corner} width={300} className='hidden md:block absolute top-0 right-0 m-0 z-20' alt='' />
                <Container>
                    <div className='py-8 md:py-12 lg:py-20'>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-sm mb-20'>
                            <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly font-montserrat'>
                                100% Confidence with <br /> your Cloud Compliance
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong className='montserrat-font'>Meet industry regulations</strong>
                                        <br />
                                        Protect sensitive data and comply with strict industry regulations in your
                                        organisation. Cyscale automatically runs all critical compliance checks and
                                        finds data at-risk.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong className='montserrat-font'>PCI-DSS, SOC 2, GDPR, and more</strong>
                                        <br />
                                        Cyscale offers a wide range of benchmarks and frameworks, including: CIS,
                                        ISO27001, PCI-DSS, NIST, SOC 2, GDPR.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong className='montserrat-font'>Built-in compliance templates</strong>
                                        <br />
                                        You can either use policy templates as a basis for your custom policies, or
                                        create them from scratch.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6'>
                                        <strong className='montserrat-font'>
                                            500+ out-of-the-box security controls
                                        </strong>
                                        <br />
                                        Onboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box
                                        security controls.
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='md:pt-12 pb-24'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' />
                        <h1 className='text-center px-2 mt-4 mb-2 font-montserrat font-semibold'>
                            NIST COMPLIANCE AND CLOUD SECURITY
                        </h1>
                        <p>Start seeing value & saving money in minutes</p>
                        <div className='mt-10 w-auto inline-block'>
                            <Link
                                className='gradientBgBtn w-full block text-sm font-medium rounded text-white text-center py-4 px-12 hover:no-underline no-underline'
                                to='/request-demo'
                            >
                                Request Live Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Page;
