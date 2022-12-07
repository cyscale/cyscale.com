import React from 'react';
import {
    Gapminder,
    LeaderAndy,
    LeaderManuela,
    LeaderOvidiu,
    Notion,
    OvidiuAndManuela,
    Seedblink,
    Seedcamp
} from '../components/about/images';
import { FaLinkedin } from 'react-icons/fa';
import { Container, Row, Section } from '../components/atoms/Containers';
import Layout from '../components/layout/CleanLayout';
import History from '../components/about/history';
import GetStarted from '../components/Home/getstarted';
import getStartedIcon from '../assets/images/elemente-vectoriale-07.png';
import data from '../components/careers/data';
import { Link } from 'gatsby';

const AboutUs = ({ location }) => {
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
                                <h1 className='font-semibold  text-3xl lg:text-5xl leading-normal text-primary mt-2 lg:mt-12 xl:mt-24'>
                                    Our Mission
                                </h1>
                                <p className='text-base lg:text-lg pt-2 lg:pt-10  leading-loose'>
                                    To help companies of all sizes to start, improve and maintain their Cloud Security
                                    Program based on the industry best practices. Reducing the risk of security breaches
                                    when migrating or developing solutions in the cloud should be a constant priority
                                    and responsibility. We can ensure that this task will not be overwhelming for you.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className="max-w-xs sm:max-w-none">
                            <OvidiuAndManuela />
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
            <Container>
                <Section>
                    <Row>
                        <div className='col-span-12'>
                            <h2 id='start' className='text-blue sm:text-3xl text-4xl font-bold leading-normal mb-6 sectionTitle'>
                                How this story started
                            </h2>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <p className='max-w-lg  leading-loose'>
                                As more companies moved their business applications and data to the cloud, many
                                lacked the knowledge or human resources required to mitigate security risks associated
                                with this accelerated cloud adoption.
                            </p>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <p className='max-w-lg  leading-loose'>
                                Being on the front line as cybersecurity experts, the founders (Ovidiu, Manuela, and
                                Andrei) have realized the struggle these companies face and started working on a solution
                                to help them handle their Cloud Security better and more efficiently. And so... Cyscale
                                was born.
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
                    description='Start improving your Cloud Security Posture'
                    btnText='TRY CYSCALE FOR FREE'
                    btnLink={"/free-trial"}
                    icon={getStartedIcon}
                    sectionName='aboutUsGetStarted'
                />
            </div>
            <div className='relative'>
                <div
                    className='bg-gray absolute bottom-0 mb-20 lg:mb-24 left-0 w-full hidden sm:block'
                    style={{ height: 115, zIndex: -1 }}
                ></div>
                <Container id="leadership">
                    <Section>
                        <div className='mb-10'>
                            <h2 className='font-semibold  text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>
                                Our Leadership
                            </h2>
                        </div>
                        <Row className='max-w-4xl mx-auto md:gap-8'>
                            <div className='col-span-6 sm:col-span-4 lg:col-span-4'>
                                <LeaderOvidiu
                                    className='rounded-md shadow-md mb-4'
                                    alt='Ovidiu Cical - Founder & CEO'
                                />
                                <strong className='text-black sm:text-white'>Ovidiu Cical</strong>
                                <br />
                                <a
                                    href='https://www.linkedin.com/in/ovidiucical'
                                    className='flex text-sm text-black sm:text-white hover:underline'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <FaLinkedin className='text-sm sm:text-lg mt-1 sm:mt-0' />
                                    <span className='ml-1 sm:ml-2'>Founder & CEO</span>
                                </a>
                            </div>
                            <div className='col-span-6 sm:col-span-4 lg:col-span-4'>
                                <LeaderManuela
                                    className='rounded-md shadow-md mb-4'
                                    alt='Manuela Țicudean - Founder & COO'
                                />
                                <strong className='text-black sm:text-white'>Manuela Țicudean</strong>
                                <br />
                                <a
                                    href='https://www.linkedin.com/in/manuela-ticudean-88a01b81/'
                                    className='flex text-sm text-black sm:text-white hover:underline'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <FaLinkedin className='text-sm sm:text-lg mt-1 sm:mt-0' />
                                    <span className='ml-1 sm:ml-2'>Founder & COO</span>
                                </a>
                            </div>
                            <div className='col-span-6 sm:col-span-4 lg:col-span-4'>
                                <LeaderAndy
                                    className='rounded-md shadow-md mb-4'
                                    alt='Andy Leaver - VP Ops in Residence'
                                />
                                <strong className='text-black sm:text-white'>Andy Leaver</strong>
                                <br />
                                <a
                                    href='https://www.linkedin.com/in/aleaver/'
                                    className='flex text-sm text-black sm:text-white hover:underline'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <FaLinkedin className='text-sm sm:text-lg mt-1 sm:mt-0' />
                                    <span className='ml-1 sm:ml-2'>VP Ops in Residence</span>
                                </a>
                            </div>
                        </Row>
                    </Section>
                </Container>
            </div>

            <Container className='relative' id="backed-by">
                <Section>
                    <h2 className='font-semibold  text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>Backed by</h2>
                    <div className='flex justify-center flex-wrap'>
                        <a
                            className='text-blue'
                            href='https://www.notion.vc/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Notion />
                        </a>
                        <a className='text-blue' href='https://seedcamp.com/' target='_blank' rel='noopener noreferrer'>
                            <Seedcamp />
                        </a>
                        <a className='text-blue' href='https://gapminder.vc/' target='_blank' rel='noopener noreferrer'>
                            <Gapminder />
                        </a>
                        <a
                            className='text-blue'
                            href='https://seedblink.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Seedblink />
                        </a>
                    </div>
                </Section>
            </Container>
            <Container className='relative' id="team">
                <Section>
                    <Row className='md:gap-8'>
                        <div className='col-span-12'>
                            <h2 className='font-semibold  text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>Our Team</h2>
                        </div>
                        {data
                            .filter(({ leader, photo }) => !leader && photo)
                            .sort((a, b) => a.order - b.order)
                            .map(({ photo, name, position, linkedin }) => (
                                <div className='col-span-6 md:col-span-4 lg:col-span-3'>
                                    <div className='mx-auto max-w-xs pt-4'>
                                        {React.cloneElement(photo, {
                                            ...photo.props,
                                            alt: `${name} - ${position}`,
                                            className: 'rounded-md shadow-md'
                                        })}
                                        <div className='mt-4'>
                                            <strong>{name}</strong>
                                            <br />
                                            <a
                                                href={linkedin}
                                                className='text-sm flex hover:text-primary mt-1 text-neutral-600'
                                                rel='noopener noreferrer'
                                                target='_blank'
                                            >
                                                <FaLinkedin className='text-lg' />
                                                <span className='ml-2'>{position}</span>
                                            </a>
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
                                <h2 className='font-semibold  text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>
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
