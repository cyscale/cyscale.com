import React from 'react';
import {
    Gapminder,
    LeaderManuela,
    LeaderOvidiu,
    Notion,
    OvidiuAndManuela,
    Seedblink,
    Seedcamp
} from '../components/about/images';
import { Container, Row, Section } from '../components/atoms/Containers';
import Layout from '../components/layout/CleanLayout';
import History from '../components/about/history';
import GetStarted from '../components/Home/getstarted';
import getStartedIcon from '../assets/images/getStartedICon.svg';
import { useAppLink } from '../common/links';
import data from '../components/careers/data';
import { Link } from 'gatsby';
const AboutUs = ({ location }) => {
    const appLink = useAppLink({ location });

    return (
        <Layout
            location={location}
            pageName='aboutUs'
            title='About us - Cyscale'
            description='Together, we draw broad industry expertise to create powerful cybersecurity solutions for our customers that automate and mitigate cloud security issues.'
        >
            <div className='bg-lightGrey'>
                <div className=' 2xl:max-w-7xl 2xl:m-auto pl-8 2xl:pr-8 pt-28'>
                    <Row>
                        <div className='col-span-12 md:col-span-6 '>
                            <div className='pr-12 xl:max-w-lg xl:ml-auto xl:mr-24 2xl:max-w-full 2xl:ml-0 2xl:mr-0'>
                                <h1 className='text-3xl lg:text-5xl leading-normal text-primary mt-2 lg:mt-12 xl:mt-24'>
                                    Our Mission
                                </h1>
                                <p className='text-base lg:text-lg pt-2 lg:pt-10 leading-relaxed'>
                                    To help companies of all sizes start, improve and maintain their Cloud Security
                                    Program based on industry best practices. Reducing the risk of security breaches
                                    when migrating or developing solutions in the cloud should be a continuous priority,
                                    and we make sure that this is not an overwhelming task.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <OvidiuAndManuela />
                        </div>
                    </Row>
                </div>
            </div>
            <Container>
                <Section>
                    <Row>
                        <div className='col-span-12'>
                            <h2 id='start' className='text-blue sm:text-3xl text-4xl leading-normal mb-6 sectionTitle'>
                                How this story started
                            </h2>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <p className='max-w-lg'>
                                As more and more companies were moving their business applications and data in the
                                cloud, many of them were lacking the knowledge or manpower required to mitigate security
                                risks associated with this accelerated cloud adoption.
                            </p>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <p className='max-w-lg'>
                                Being on the front line as cybersecurity experts, the founders (Ovidiu, Manuela and
                                Andrei) have realized the struggle faced by these companies and started working on a
                                solution to help them handle better and more efficiently their Cloud Security. And so…
                                Cyscale was born.
                            </p>
                        </div>
                    </Row>
                </Section>
            </Container>
            <div className='-mt-24 lg:mt-0 lg:pl-8 xl:pl-0'>
                <History />
            </div>
            <div className='gradientBG'>
                <GetStarted
                    description='Let us help you improve your Cloud Security Posture'
                    btnText='Try Cyscale for free and see for yourself'
                    btnLink={appLink}
                    ExternalLink
                    icon={getStartedIcon}
                    sectionName='aboutUsGetStarted'
                />
            </div>
            <div className='relative'>
                <div
                    className='bg-gray absolute bottom-0 mb-20 lg:mb-24 left-0 w-full'
                    style={{ height: 115, zIndex: -1 }}
                ></div>
                <Container>
                    <Section>
                        <Row>
                            <div className='col-span-12'>
                                <h2 className='text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>
                                    Our Leadership
                                </h2>
                            </div>
                            <div className='col-span-12 sm:col-span-2 lg:col-span-3'></div>
                            <div className='col-span-6 sm:col-span-4 lg:col-span-3'>
                                <LeaderOvidiu className='rounded-md shadow-md mb-4' />
                                <strong className='text-white'>Ovidiu Cical</strong>
                                <br />
                                <span className='text-sm text-lightGrey2'>Founder & CEO</span>
                            </div>
                            <div className='col-span-6 sm:col-span-4 lg:col-span-3'>
                                <LeaderManuela className='rounded-md shadow-md mb-4' />
                                <strong className='text-white'>Manuela Ticudean</strong>
                                <br />
                                <span className='text-sm text-lightGrey2'>Founder & COO</span>
                            </div>
                            <div className='col-span-12 sm:col-span-2 lg:col-span-3 '></div>
                        </Row>
                    </Section>
                </Container>
            </div>

            <Container className='relative'>
                <Section>
                    <h2 className='text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>Backed by</h2>
                    <div className='flex justify-center flex-wrap'>
                        <Notion />
                        <Seedcamp />
                        <Gapminder />
                        <Seedblink />
                    </div>
                </Section>
            </Container>
            <Container className='relative'>
                <Section>
                    <Row>
                        <div className='col-span-12'>
                            <h2 className='text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>Our Team</h2>
                        </div>
                        {data
                            .filter(({ leader }) => !leader)
                            .sort((a, b) => a.order - b.order)
                            .map(({ photo, name, position }) => (
                                <div className='col-span-6 md:col-span-4 lg:col-span-3'>
                                    <div className='mx-auto max-w-xs pt-4'>
                                        {React.cloneElement(photo, {
                                            ...photo.props,
                                            className: 'rounded-sm shadow-sm'
                                        })}
                                        <div className='mt-4'>
                                            <strong>{name}</strong>
                                            <br />
                                            <span className='text-sm opacity-60'>{position}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </Row>
                </Section>
            </Container>
            <Container>
                <Section>
                    <div className='pb-12'>
                        <Row>
                            <div className='col-span-12'>
                                <h2 className='text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>
                                    Join the Team
                                </h2>
                            </div>
                            <div className='col-span-12 flex justify-center'>
                                <Link
                                    to='/careers/'
                                    className='gradientBgBtn mx-auto inline-block min-w-md text-base font-medium rounded text-white uppercase text-center py-5 px-12 no-underline'
                                >
                                    See our open positions
                                </Link>
                            </div>
                        </Row>
                    </div>
                </Section>
            </Container>
        </Layout>
    );
};

export default AboutUs;
