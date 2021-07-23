import React from 'react';
import { Link } from 'gatsby';
import CyscaleTeam from '../../assets/images/Cyscale-Team.png';

const Team = () => {
    return (
        <>
            <div className='block w-full'>
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-1 mt-1'>
                    <div className='bg-lightGrey'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front flex flex-wrap h-full content-center'>
                                    <p className=' w-full text-center text-black font-bold text-20px pt-10px pb-10px pr-10px pl-10px'>
                                        Ovidiu Cical, Founder & CEO
                                    </p>
                                </div>
                                <div className='flip-card-back'>
                                    <div className='flex flex-wrap h-full content-center text-left'>
                                        <div>
                                            <div className='flex flex-col flex-wrap text-16px leading-6 text-white'>
                                                <p className='block w-full'>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='font-bold underline'
                                                        href='https://www.linkedin.com/in/ovidiucical/'
                                                    >
                                                        Ovidiu Cical, Founder & CEO
                                                    </a>
                                                </p>
                                                <p className='block w-full mt-40px'>
                                                    Ovidiu wears many hats, from CEO to Innovation Officer or
                                                    Spokesperson. He is a Certified Professional Cloud Architect with a
                                                    solid background in software development focused on Information
                                                    Security, Innovation and Product Strategy. By constantly speaking at
                                                    different industry-leading conferences, he is actively involved in
                                                    creating awareness regarding the importance of data protection,
                                                    cloud security and compliance.
                                                    <br />
                                                    He is also the Chapter Leader for the OWASP foundation (non-profit
                                                    organization working to improve software security).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-lightGrey'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front flex flex-wrap h-full content-center'>
                                    <p className=' w-full text-center text-black font-bold text-20px pt-10px pb-10px pr-10px pl-10px'>
                                        Manuela Ticudean, COO
                                    </p>
                                </div>
                                <div className='flip-card-back'>
                                    <div className='flex flex-wrap h-full content-center text-left'>
                                        <div>
                                            <div className='flex flex-col flex-wrap text-16px leading-6 text-white'>
                                                <p className='block w-full'>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='font-bold underline'
                                                        href='https://www.linkedin.com/in/manuela-ticudean-88a01b81/'
                                                    >
                                                        Manuela Ticudean, Co-Founder, PM
                                                    </a>
                                                </p>

                                                <p className='block w-full mt-40px'>
                                                    Manuela is our Product Manager, she is always working with her team
                                                    in researching and developing innovating new features to help our
                                                    customers. She has so far accumulated over 15 years of experience in
                                                    software development, start-up culture, software teams built from
                                                    the ground-up, cross-cultural communication and effective project
                                                    management in fast-paced, agile environments.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-lightGrey'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front flex flex-wrap h-full content-center'>
                                    <p className=' w-full text-center text-black font-bold text-20px pt-10px pb-10px pr-10px pl-10px'>
                                        Andrei Milaș, CTO
                                    </p>
                                </div>
                                <div className='flip-card-back'>
                                    <div className='flex flex-wrap h-full content-center text-left'>
                                        <div>
                                            <div className='flex flex-col flex-wrap text-16px leading-6 text-white'>
                                                <p className='block w-full'>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='font-bold underline'
                                                        href='https://www.linkedin.com/in/andrei-milas-8a86154b/'
                                                    >
                                                        Andrei Milaș, Co-Founder, CTO
                                                    </a>
                                                </p>
                                                <p className='block w-full mt-40px'>
                                                    Andrei is coming from a strong technical background, and acts as our
                                                    CTO. With a bachelor’s degree and master's studies in Computer
                                                    Science for the Technical University of Cluj-Napoca, and more than
                                                    10 years of experience as a Software Security Engineer, he knows the
                                                    ecosystem and is driven by innovation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-1 mt-1'>
                    <div className='bg-lightGrey xl:col-span-2'>
                        <div className='flip-card lg:h-full'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front flex flex-wrap h-full content-end'>
                                    <img src={CyscaleTeam} className='lg:h-full w-auto' alt='Cyscale Team' />
                                    <p className='to-hide absolute left-0 -bottom-2 w-full text-center text-black font-bold text-20px pt-10px pb-10px pr-10px pl-10px'>
                                        Cyscale Team
                                    </p>
                                </div>
                                <div className='flip-card-back'>
                                    <div className='flex flex-wrap h-full content-center text-left'>
                                        <div>
                                            <div className='flex flex-col flex-wrap text-16px leading-6 text-white'>
                                                <p className='block w-full'>Cyscale Team</p>
                                                <p className='block w-full mt-40px'>
                                                    We take great pride in being part of an industry that serves and
                                                    does good for humanity. We believe that Cybersecurity is a right
                                                    just like any other right and that everybody should have access and
                                                    possess the means to protect what they value in both their offline
                                                    or online life. Cyscale's Team is focused on protecting all of your
                                                    digital assets and most sensitive data, making sure you remain
                                                    compliant and secure. We are the creators of the OWASP Data Security
                                                    Top 10, the most respected guide for protecting sensitive data in
                                                    the cloud.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-lightGrey'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front flex flex-wrap h-full content-center'>
                                    <p className=' w-full text-center text-black font-bold text-20px pt-10px pb-10px pr-10px pl-10px'>
                                        Gabriel Ceicoschi, Design & UI
                                    </p>
                                </div>
                                <div className='flip-card-back'>
                                    <div className='flex flex-wrap h-full content-center text-left'>
                                        <div>
                                            <div className='flex flex-col flex-wrap text-16px leading-6 text-white'>
                                                <p className='block w-full'>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='font-bold underline'
                                                        href='https://www.linkedin.com/in/gceico/'
                                                    >
                                                        Gabriel Ceicoschi, Design & UI, Front-End
                                                    </a>
                                                </p>
                                                <p className='block w-full mt-40px'>
                                                    Gabriel is our Graphic Designer.
                                                    <br />
                                                    He started as a front-end developer eager to explore new
                                                    technologies and discovers his passions for design. With a keen eye
                                                    for details he oversees delivering the best User Experience to our
                                                    customers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-1 mt-1'>
                    <div className='bg-lightGrey'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front flex flex-wrap h-full content-center'>
                                    <p className=' w-full text-center text-black font-bold text-20px pt-10px pb-10px pr-10px pl-10px'>
                                        Virginia Mitea, Sales & BD
                                    </p>
                                </div>
                                <div className='flip-card-back'>
                                    <div className='flex flex-wrap h-full content-center text-left'>
                                        <div>
                                            <div className='flex flex-col flex-wrap text-16px leading-6 text-white'>
                                                <p className='block w-full'>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='font-bold underline'
                                                        href='https://www.linkedin.com/in/virginia-mitea-0688aab2/'
                                                    >
                                                        Virginia Mitea, Sales & BD
                                                    </a>
                                                </p>
                                                <p className='block w-full mt-40px'>
                                                    Virginia is our Sales and Business Development Manager.
                                                    <br />
                                                    With a vast experience in sales of IT services and solutions,
                                                    Virginia is always thinking in a customer-oriented way. Her role is
                                                    to identify new opportunities for campaigns, services, new
                                                    distribution channels, and strategic approaches that will lead to
                                                    healthy and steady grow of our customer base.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-2 bg-lightGrey'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front lastCol flex flex-wrap h-full content-end'>
                                    <p className='to-hide absolute left-0 -bottom-2 w-full text-center text-black font-bold text-20px pt-10px pb-10px pr-10px pl-10px'>
                                        Let's build the future of cyber security together!
                                    </p>
                                </div>
                                <div className='flip-card-back'>
                                    <div className='flex flex-wrap h-full content-center text-left'>
                                        <div>
                                            <div className='flex flex-col flex-wrap text-16px leading-6 text-white'>
                                                <p className='block w-full'>
                                                    Let's build the future of cyber security together!
                                                </p>
                                                <p className='block w-full mt-40px'>
                                                    We set on a journey to define new and innovative ways of helping
                                                    companies secure their apps and data in the cloud, but also to
                                                    understand their digital universe. Check our open positions if you
                                                    want to join our team. We'll work and have lots of fun while making
                                                    an impact in the world!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-1366px mx-auto mt-24 mb-24 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                    <h2 className='text-blue text-34px leading-8 text-center new-line'>Join the team</h2>
                    <div className='mt-12 w-full flex justify-center text-center'>
                        <Link
                            to='/careers'
                            className='gradientBgBtn md:min-w-232px sm:min-w-232px lg:min-w-232px xl:min-w-232px 2xl:min-w-232px text-16px font-medium rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline'
                        >
                            See our open positions
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;
