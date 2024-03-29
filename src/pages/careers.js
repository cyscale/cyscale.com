import React from 'react';
import { Container, Row, Section } from '../components/atoms/Containers';
import Layout from '../components/layout/CleanLayout';
import Stocks from '../assets/images/stocks.inline.svg';
import PersonalDayOff from '../assets/images/personal-day-off.inline.svg';
import HomeWork from '../assets/images/home-work.inline.svg';
import Certification from '../assets/images/certification.inline.svg';
import Heart from '../assets/images/heart.inline.svg';
import DaysOff from '../assets/images/day-off.inline.svg';
import Slider from 'react-slick';
import Arrow from '../components/slick/Arrow';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import Apply from '../components/careers/apply-form';
import employee from '../components/careers/data';
import { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
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
    { title: 'Shares', description: 'from the employee stock options plan (ESOP) ', icon: <Stocks /> },
    { title: 'Private medical insurance', description: '', icon: <Heart /> },
    { title: 'Days off', description: 'a minimum of 25 days annual leave', icon: <DaysOff /> },
    { title: 'Trainings/certifications allowance', description: 'up to 1000 EUR / year', icon: <Certification /> },
    { title: 'Home office setup', description: 'equipment + expenses (up to 50 EUR / month)', icon: <HomeWork /> },
    { title: 'Personal days off', description: 'up to 3 days / year', icon: <PersonalDayOff /> }
];

const Careers = ({ location }) => {
    const data = useStaticQuery(graphql`
        query JobsQuery {
            allMarkdownRemark(
                sort: { frontmatter: { date: DESC } }
                filter: { frontmatter: { templateKey: { eq: "career-page" }, disabled: { eq: false } } }
            ) {
                nodes {
                    frontmatter {
                        date
                        description
                        permalink
                        templateKey
                        title
                        experience
                        department
                        location
                    }
                }
            }
            careersHero: file(relativePath: { eq: "careers-hero-image.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 400, layout: CONSTRAINED)
                }
            }
        }
    `);
    let jobs = data.allMarkdownRemark.nodes.map(({ frontmatter }) => frontmatter);
    return (
        <Layout
            location={location}
            pageName='careers'
            title='Careers - Cyscale'
            description='Together, we can make the world a safer place!'
        >
            <div className='bg-lightGrey'>
                <Container>
                    <div className='pt-20 max-w-lg mx-auto lg:mx-0 lg:max-w-none'>
                        <Section>
                            <Row>
                                <div className='col-span-12 lg:col-span-6 order-2 lg:order-1'>
                                    <h1 className='font-semibold font-montserrat lg:max-w-md text-3xl lg:text-4xl leading-relaxed text-primary'>
                                        Building a new product is fun.
                                        <br /> Creating a new category? Stunning.
                                    </h1>
                                    <ScrollLink
                                        smooth={true}
                                        duration={500}
                                        to='open-positions'
                                        css={css`
                                            padding: 0.625rem 2.5rem;
                                        `}
                                        className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] mt-12 font-medium rounded text-white uppercase text-center no-underline hover:no-underline inline-block font-hind cursor-pointer'
                                    >
                                        See open positions
                                    </ScrollLink>
                                </div>
                                <div className='col-span-12 mb-10 lg:mb-0 lg:col-span-6 lg:pl-8 order-1 lg:order-2'>
                                    <GatsbyImage
                                        image={data.careersHero.childImageSharp.gatsbyImageData}
                                        alt='We are hiring'
                                        className='mx-auto max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg 2xl:max-w-xl'
                                    />
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
                            <div className='lg:col-span-5 col-span-12'>
                                <h2 className='font-semibold font-montserrat text-blue text-4xl leading-normal md:max-w-xs sectionTitle'>
                                    Our Mission
                                </h2>
                                <p className='max-w-lg lg:max-w-md mt-8 leading-relaxed'>
                                    To help companies of all sizes start, improve and maintain their{' '}
                                    <strong>Cloud Security Program</strong>, based on expert know-how and industry best
                                    practices. <strong>Reducing the risk of security breaches</strong> when migrating or
                                    developing solutions in the cloud should be a continuous priority, and we make sure
                                    this task is not an overwhelming one.
                                </p>
                                <ScrollLink
                                    smooth={true}
                                    duration={500}
                                    to='open-positions'
                                    className='bg-white mx-auto md:mx-0 font-medium rounded text-blue uppercase text-center no-underline transition-all duration-100 hover:no-underline font-hind mt-12 cursor-pointer'
                                    css={css`
                                        padding: 0.625rem 2.5rem;
                                        display: none;
                                        border: thin solid #0f26aa;

                                        &:hover {
                                            background-color: #e5edfa;
                                            border: thin solid #0f26aa;
                                        }

                                        @media (min-width: 641px) {
                                            display: inline-block;
                                        }
                                    `}
                                >
                                    See open positions
                                </ScrollLink>
                            </div>
                            <div className='mt-12 lg:mt-0 lg:col-span-7 col-span-12 leading-relaxed'>
                                <h2 className='font-semibold font-montserrat text-blue text-4xl leading-normal md:max-w-xs sectionTitle'>
                                    Our Values
                                </h2>
                                <p className='max-w-lg lg:max-w-xl mt-8'>
                                    In everything we do at Cyscale, we are guided by our commitment to:
                                    <ul>
                                        <li>
                                            <strong>Openness</strong> - in the way we talk to each other, our customers,
                                            and our investors
                                        </li>
                                        <li>
                                            <strong>Transparency</strong> - the ground for true collaboration
                                        </li>
                                        <li>
                                            <strong>Hard work</strong> - we know that being talented is only half of the
                                            story
                                        </li>
                                        <li>
                                            <strong>Learning</strong> - we embrace the challenges we face each day and
                                            strive for continuous improvement
                                        </li>
                                        <li>
                                            <strong>Perseverance</strong> - no matter if the times are good or bad, our
                                            vision is our north star
                                        </li>
                                    </ul>
                                    We're here for the long run, which means we care deeply about our work environment,
                                    our partnerships, the communities we're part of and our customers' success.
                                </p>
                            </div>
                        </Row>
                    </div>
                </Section>
            </Container>
            <Section id='benefits'>
                <Container>
                    <h2 className='font-semibold font-montserrat text-blue text-4xl text-center mx-auto  mb-4 leading-normal md:max-w-lg'>
                        Not your average benefits
                    </h2>
                </Container>
                <div className='gradientBG py-8'>
                    <Container>
                        <div className='max-w-lg mx-auto lg:mx-0 lg:max-w-none text-white'>
                            <Row>
                                {benefits.map(({ title, description, icon }) => (
                                    <div className='col-span-12 lg:col-span-6 my-6'>
                                        <div className='flex items-center'>
                                            {React.cloneElement(icon, {
                                                className: 'w-16 h-16 md:w-20 md:h-20',
                                                alt: 'decoration'
                                            })}
                                            <div className='ml-8'>
                                                <h3 className='font-semibold  text-normal md:text-xl lg:text-2xl'>
                                                    {title}
                                                </h3>
                                                <p className='text-sm md:text-normal lg:text-lg'>{description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Row>
                        </div>
                    </Container>
                </div>
            </Section>
            <Section>
                <Container>
                    <h2 className='font-semibold font-montserrat text-blue text-center mx-auto mb-12 max-w-sm text-3xl leading-normal sectionTitle'>
                        Words from the inside
                    </h2>
                </Container>
                <div className='max-w-xl mx-auto lg:max-w-5xl xl:max-w-none xl:mx-0 px-6'>
                    <Slider {...settings}>
                        {employee
                            .filter(({ quote }) => Boolean(quote))
                            .sort((a, b) => b.order - a.order)
                            .map(({ name, position, photo, quote }, key) => (
                                <div className='p-2 mb-2'>
                                    <div className='p-3 md:p-6 shadow-lg rounded-lg bg-white relative overflow-hidden'>
                                        <div className='h-56 pr-0 md:pr-20 text-sm flex flex-col'>
                                            <quote>"{quote}"</quote>
                                            <strong className='block mt-auto'>{name}</strong>
                                            <span className='block'>{position}</span>
                                        </div>
                                        <div className='flex flex-col items-center absolute -right-20 -bottom-64 md:-right-16 md:-bottom-52'>
                                            <div className='grad mb-2 w-20 h-20 rounded-full'>
                                                {photo &&
                                                    React.cloneElement(photo, {
                                                        className:
                                                            'w-20 h-20 rounded-full overflow-hidden relative z-10',
                                                        alt: `${name} - ${position}`
                                                    })}
                                            </div>
                                            <div className='bg-gradient-primary w-64 h-64 rounded-full'></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        <div className='p-2 mb-2'>
                            <div className='p-3 md:p-6 shadow-lg rounded-lg bg-white relative overflow-hidden'>
                                <div className='h-56 pr-0 flex flex-col'>
                                    <p className='text-2xl font-bold mt-4 mb-4'>Think you've got what it takes?</p>
                                    <p className='text-normal'>
                                        If so, check out our open positions below. We'd love to have you onboard.
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
                                <div className='hidden md:flex flex-col items-center absolute -right-16 -bottom-52'>
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
                        <h2 className='font-semibold font-montserrat text-blue text-center mx-auto mb-12 max-w-sm text-4xl leading-normal'>
                            Open positions
                        </h2>
                        <div className='max-w-3xl mx-auto'>
                            <div className='flex text-sm text-gray px-4 py-3'>
                                <div className='w-12/12 md:w-5/12 pr-2'>Job Title</div>
                                <div className='w-2/12 pr-2 hidden md:block'>Location</div>
                                <div className='w-2/12 pr-2 hidden md:block'>Employment</div>
                                <div className='w-2/12 pr-2 hidden md:block'>Department</div>
                                <div className='w-1/12 hidden md:block '></div>
                            </div>
                            {jobs.map(({ title, experience, location, department, permalink }, index) => (
                                <Link
                                    to={`/careers/${permalink}/`}
                                    className='flex items-center text-sm text-gray bg-white shadow-md rounded-md mb-4 leading-relaxed  px-4 py-3 hover:bg-lightGreyEEE transition-colors'
                                    key={index}
                                >
                                    <span className='w-12/12 md:w-5/12 pr-2 overflow-ellipsis'>
                                        <strong>{title}</strong>
                                    </span>
                                    <span className='w-2/12 pr-2 hidden md:block'>{location}</span>
                                    <span className='w-2/12 pr-2 hidden md:block'>{experience}</span>
                                    <span className='w-2/12 pr-2 hidden md:block'>{department}</span>
                                    <span className='w-1/12 hidden md:block'>
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
            <Section id='join-us'>
                <Container>
                    <h6 className='font-semibold font-montserrat text-blue text-4xl mx-auto mb-8 w-full max-w-md leading-normal new-line'>
                        Join us
                    </h6>
                    <div className='max-w-md mx-auto'>
                        <Apply dispaly='column' jobs={jobs.map(({ title }) => title)} jobTitle={jobs[0].title} />
                    </div>
                </Container>
            </Section>
        </Layout>
    );
};

export default Careers;
