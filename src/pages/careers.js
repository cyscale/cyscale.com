import React from 'react';
import { Container, Row, Section } from '../components/atoms/Containers';
import Layout from '../components/layout/CleanLayout';
import hire from '../assets/images/hire.svg';
import stocks from '../assets/images/stocks.svg';
import gabriel from '../assets/images/gabriel.jpg';
import personalDayOff from '../assets/images/personal-day-off.svg';
import homeWork from '../assets/images/home-work.svg';
import certification from '../assets/images/certification.svg';
import heart from '../assets/images/heart.svg';
import daysOff from '../assets/images/day-off.svg';
import Slider from 'react-slick';
import Arrow from '../components/slick/Arrow';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import ContactForm from '../components/careers/contactForm';

const settings = {
    speed: 500,
    dots: false,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: <Arrow />,
    nextArrow: <Arrow direction='right' />,
    responsive: [
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 1536,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const benefits = [
    { title: 'Shares', description: 'from the employee stock options plan (ESOP) ', icon: stocks },
    { title: 'Private medical insurance', description: '', icon: heart },
    { title: 'Days off', description: 'a minimum of 25 days annual leave', icon: daysOff },
    { title: 'Trainings/certifications allowance', description: 'up to 1000 EUR / year', icon: certification },
    { title: 'Home office setup', description: 'equipment + expenses (up to 50 EUR / month)', icon: homeWork },
    { title: 'Personal days off', description: 'up to 3 days / year', icon: personalDayOff }
];

const employee = [
    {
        photo: gabriel,
        name: 'Ovidiu Cical',
        position: 'Founder & CEO',
        quote: 'Ovidiu wears many hats, from CEO to Innovation Officer or Spokesperson. He is a Certified Professional Cloud Architect with a solid background in software development focused on Information Security, Innovation and Product Strategy.'
    },
    {
        photo: gabriel,
        name: 'Ovidiu Cical',
        position: 'Founder & CEO',
        quote: 'Ovidiu wears many hats, from CEO to Innovation Officer or Spokesperson. He is a Certified Professional Cloud Architect with a solid background in software development focused on Information Security, Innovation and Product Strategy.'
    },
    {
        photo: gabriel,
        name: 'Ovidiu Cical',
        position: 'Founder & CEO',
        quote: 'Ovidiu wears many hats, from CEO to Innovation Officer or Spokesperson. He is a Certified Professional Cloud Architect with a solid background in software development focused on Information Security, Innovation and Product Strategy.'
    },
    {
        photo: gabriel,
        name: 'Ovidiu Cical',
        position: 'Founder & CEO',
        quote: 'Ovidiu wears many hats, from CEO to Innovation Officer or Spokesperson. He is a Certified Professional Cloud Architect with a solid background in software development focused on Information Security, Innovation and Product Strategy.'
    }
];

const Index = () => {
    const data = useStaticQuery(graphql`
        query JobsQuery {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { templateKey: { eq: "career-page" }, disabled: { eq: false } } }
            ) {
                nodes {
                    frontmatter {
                        date
                        description
                        permalink
                        icon
                        templateKey
                        title
                        experience
                        location
                    }
                }
            }
        }
    `);
    let jobs = data.allMarkdownRemark.nodes.map(({ frontmatter }) => frontmatter);
    console.log(jobs);
    return (
        <Layout
            pageName='careers'
            title='Careers - Cyscale Power Cloud Platform'
            description='Together, we can make the world a safer place!'
        >
            <div className='bg-lightGrey'>
                <Container>
                    <div className='pt-20 max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                        <Section>
                            <Row>
                                <div className='col-span-12 lg:col-span-6 order-2 lg:order-1'>
                                    <h1 className='text-4xl lg:text-6xl leading-large text-primary'>
                                        Join the
                                        <br /> Cyscale Team
                                    </h1>
                                    <ScrollLink
                                        smooth={true}
                                        duration={500}
                                        to='open-positions'
                                        className='bg-gradient-to-r from-blue to-red hover:from-red hover:to-blue cursor-pointer lg:max-w-xs block font-medium rounded text-white uppercase text-center py-5 px-12 mt-16 no-underline hover:no-underline '
                                    >
                                        See open positions
                                    </ScrollLink>
                                </div>
                                <div className='col-span-12 mb-10 lg:mb-0 lg:col-span-6 lg:pl-8 order-1 lg:order-2'>
                                    <img src={hire} alt='We are hiring' className='mx-auto w-auto h-auto' />
                                </div>
                            </Row>
                        </Section>
                    </div>
                </Container>
            </div>
            <Container>
                <Section>
                    <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                        <Row>
                            <div className='lg:col-span-6 col-span-12'>
                                <h2 className='text-blue text-4xl leading-10 md:max-w-xs sectionTitle'>Our Mission</h2>
                                <p className='max-w-lg mt-8'>
                                    To help companies of all sizes to start, improve and maintain their{' '}
                                    <strong>Cloud Security Program</strong> based on the industry best practices, to
                                    ensure continuous security and compliance.{' '}
                                    <strong>Reducing the risk of security breaches</strong> when migrating or developing
                                    solutions in the cloud should be a continues priority and responsibility, and we can
                                    make sure that this task will not be overwhelming for you.
                                </p>
                            </div>
                            <div className='mt-12 lg:mt-0 lg:col-span-6 col-span-12'>
                                <h2 className='text-blue text-4xl leading-10 md:max-w-xs sectionTitle'>Our Values</h2>
                                <p className='max-w-lg mt-8'>
                                    Our culture is built on the principles of autonomy, flexibility and trust, fostering
                                    a diverse, inclusive and supportive work environment that enables our people to push
                                    the boundaries of what’s possible.
                                </p>
                            </div>
                        </Row>
                        <ScrollLink
                            smooth={true}
                            duration={500}
                            to='open-positions'
                            className='mt-8  cursor-pointer block w-52 mx-auto text-sm text-black uppercase py-4 px-8 border-black border rounded-md hover:bg-black hover:text-white transition'
                        >
                            See open positions
                        </ScrollLink>
                    </div>
                </Section>
            </Container>
            <div className='gradientBG'>
                <Container>
                    <Section>
                        <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none text-white'>
                            <Row>
                                {benefits.map(({ title, description, icon }) => (
                                    <div className='col-span-12 lg:col-span-6 my-6'>
                                        <div className='flex items-center'>
                                            <img src={icon} alt='' width={80} height={80} />
                                            <div className='ml-8'>
                                                <h3 className='text-xl lg:text-2xl'>{title}</h3>
                                                <p className='text-normal lg:text-lg'>{description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Row>
                        </div>
                    </Section>
                </Container>
            </div>
            <Section>
                <Container>
                    <h2 className='text-blue text-center mx-auto mb-12 max-w-sm text-4xl leading-10 sectionTitle'>
                        Words from the inside
                    </h2>
                </Container>
                <div className='max-w-xl mx-auto lg:max-w-5xl xl:max-w-none xl:mx-0 px-6'>
                    <Slider {...settings}>
                        {employee.map(({ name, position, photo, quote }) => (
                            <div className='p-2 mb-2'>
                                <div className='p-6 shadow-lg rounded-lg bg-white relative overflow-hidden'>
                                    <div className='h-56 pr-20 text-sm flex flex-col'>
                                        <quote>"{quote}"</quote>
                                        <strong className='block mt-auto'>{name}</strong>
                                        <span className='block'>{position}</span>
                                    </div>
                                    <div className='flex flex-col items-center absolute -right-16 -bottom-52'>
                                        <div className='grad mb-2 w-20 h-20 rounded-full overflow-hidden bg-gradient-primary'>
                                            <img src={photo} alt={name} className='w-20 h-20 rounded-full' />
                                        </div>
                                        <div className='bg-gradient-primary w-64 h-64 rounded-full'></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='p-2 mb-2'>
                            <div className='p-6 shadow-lg rounded-lg bg-white relative overflow-hidden'>
                                <div className='h-56 pr-16 flex flex-col'>
                                    <p className='text-2xl font-bold mt-4 mb-4'>Think you’ve got what it takes?</p>
                                    <p className='text-normal'>
                                        If so, check out our open positions below. We’d love to have you onboard.
                                    </p>
                                    <ScrollLink
                                        smooth={true}
                                        duration={500}
                                        to='open-positions'
                                        className='bg-gradient-to-r from-blue to-red hover:from-red hover:to-blue cursor-pointer block font-normal rounded text-white uppercase text-center py-3 px-4 w-48 mt-auto no-underline'
                                    >
                                        See open positions
                                    </ScrollLink>
                                </div>
                                <div className='flex flex-col items-center absolute -right-16 -bottom-52'>
                                    <div className='grad mb-2 w-20 h-20 rounded-full overflow-hidden bg-gradient-primary'></div>
                                    <div className='bg-gradient-primary w-64 h-64 rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Section>
            <Section id='open-positions'>
                <Container>
                    <div className='bg-image-jobs'>
                        <h2 className='text-blue text-center mx-auto mb-12 max-w-sm text-5xl leading-10'>
                            Open positions
                        </h2>
                        <div className='max-w-xl mx-auto'>
                            <div className='flex text-sm text-gray px-4 py-3'>
                                <div className='w-5/12'>Job Title</div>
                                <div className='w-2/12'>Location</div>
                                <div className='w-3/12'>Experience</div>
                                <div className='w-2/12'></div>
                            </div>
                            {jobs.map(({ title, experience, location, permalink }) => (
                                <Link
                                    to={`/careers/${permalink}/`}
                                    className='flex text-sm text-gray shadow-md rounded-md mb-4 leading-relaxed  px-4 py-3 hover:bg-lightGreyEEE transition-colors'
                                >
                                    <span className='w-5/12'>
                                        <strong>{title}</strong>
                                    </span>
                                    <span className='w-2/12'>{location}</span>
                                    <span className='w-3/12'>{experience}</span>
                                    <span className='w-2/12'>
                                        <span className='bg-primary text-white text-xm px-3 py-1 w-14 block ml-auto leading-tight rounded-sm'>
                                            Apply
                                        </span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
            <ContactForm />
        </Layout>
    );
};

export default Index;
