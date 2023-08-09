import React, { useEffect, useState } from 'react';
import { css } from 'twin.macro';
import { Container } from '../atoms/Containers';
import CaseStudyCarousel from '../cloud-security-posture-management/Carousel';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import RightArrow from '../sharedComponent/RightArrow';
import AOS from 'aos';

const sectionSubtitleColor = css`
    color: #38aff1;
`;

const titleSection = css`
    font-size: 2rem;
`;

const CaseStudiesSection = () => {
    const data = useStaticQuery(graphql`
        query CaseStudiesSectionQuery {
            smartFintech: file(relativePath: { eq: "smart-fintech-home.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            alex: file(relativePath: { eq: "alex-cociu.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 70, layout: FIXED)
                }
            }
            james: file(relativePath: { eq: "james-hawkes-home.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 70, layout: FIXED)
                }
            }
            bays: file(relativePath: { eq: "bays-home.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            medicalDevicesCompany: file(relativePath: { eq: "medical-devices-company-carousel.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            quotes: file(relativePath: { eq: "quotes.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 55, layout: CONSTRAINED)
                }
            }
        }
    `);

    const [isHover, setIsHover] = useState(false);
    const [autoSlide, setAutoSlide] = useState(true);

    useEffect(() => {
        AOS.init({
            disable: function () {
                const windowWidth = document.documentElement.clientWidth;
                return windowWidth < 1280;
            }
        });
    }, []);

    const slides = [
        {
            image: data.bays.childImageSharp.gatsbyImageData,
            alt: 'Cover Bays Consulting',
            title: '“It’s been great at identifying blind spots”: Bays Consulting achieves 50% productivity gain with Cyscale',
            quote: '“Exceptionally helpful when doing access reviews; I’m using the platform monthly and it simply automates my work!”',
            employee: 'James Hawkes',
            employeeImage: data.james.childImageSharp.gatsbyImageData,
            position: (
                <>
                    Head of Delivery at
                    <br className='block md:hidden' /> Bays Consulting
                </>
            ),
            link: '/case-studies/bays-consulting/'
        },
        {
            image: data.smartFintech.childImageSharp.gatsbyImageData,
            alt: 'Mobile Payment Smart Fintech',
            title: 'Smart Fintech uses Cyscale to gain IAM visibility and ensure cloud security and compliance',
            quote: '“The platform helps me with IAM visibility a lot: I can understand who has access and why. When a person leaves the company, I can detect if their permissions remain hanging.”',
            employee: 'Alex Cociu',
            employeeImage: data.alex.childImageSharp.gatsbyImageData,
            position: (
                <>
                    Risk and Compliance Officer at
                    <br className='block md:hidden' /> Smart Fintech
                </>
            ),
            link: '/case-studies/smart-fintech'
        },
        {
            image: data.medicalDevicesCompany.childImageSharp.gatsbyImageData,
            alt: 'Securely Migrating a Medical Devices Leader from On-premises to the Cloudy',
            title: 'Good Medicine: Securely Migrating a Medical Devices Leader from On-premises to the Cloud',
            quote: 'Migrating a complex on-premises infrastructure to the public cloud without specialist resources is no easy feat. But this medical devices manufacturer was able to breathe easy and adapt their technical expertise to the new environment while keeping security at the forefront of the migration.',
            link: '/case-studies/cloud-migration'
        }
    ];

    return (
        <div
            className='pt-24 pb-24 lg:pt-32 lg:pb-32'
            css={css`
                background-color: #f5f9ff;
            `}
        >
            <Container>
                <CaseStudyCarousel autoSlide={autoSlide} setAutoSlide={setAutoSlide}>
                    {slides.map((s, index) => {
                        return (
                            <div
                                className='grid grid-cols-12 gap-x-5'
                                css={css`
                                    overflow: hidden;
                                `}
                                onMouseEnter={() => setAutoSlide(false)}
                                onMouseLeave={() => setAutoSlide(true)}
                            >
                                <div
                                    className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 lg:mt-8'
                                    data-aos='fade-right'
                                >
                                    <Link to={s.link}>
                                        <GatsbyImage image={s.image} className='max-w-xl' alt={s.alt} />
                                    </Link>
                                </div>
                                <div
                                    className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl mt-8 lg:mt-0'
                                    data-aos='fade-left'
                                >
                                    <p className='font-montserrat text-base font-bold mt-4' css={sectionSubtitleColor}>
                                        CASE STUDY
                                    </p>
                                    <Link to={s.link}>
                                        {' '}
                                        <h2
                                            className='font-montserrat text-blue font-bold mt-2 hover:underline'
                                            css={titleSection}
                                        >
                                            {s.title}
                                        </h2>
                                    </Link>
                                    <p className='mt-3 text-base font-hind font-normal'>{s.quote}</p>
                                    <div className='flex mt-3 px-2'>
                                        <GatsbyImage image={s.employeeImage} alt={s.employee} />
                                        <div className='ml-4 mt-1'>
                                            <p className='font-hind text-base font-bold'>{s.employee}</p>
                                            <p className='font-hind text-base'>{s.position}</p>
                                        </div>
                                    </div>
                                    <Link
                                        to={s.link}
                                        onMouseEnter={() => setIsHover(true)}
                                        onMouseLeave={() => setIsHover(false)}
                                        className='font-hind text-base font-bold mt-6 hover:underline block'
                                        css={css`
                                            color: #0f26aa;
                                            &:hover {
                                                color: #0b175a;
                                            }
                                        `}
                                    >
                                        <RightArrow fillColor={isHover ? '#0b175a' : '#0F26AA'} marginTop={'-0.1rem'} />
                                        Read the case study
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </CaseStudyCarousel>
            </Container>
        </div>
    );
};

export default CaseStudiesSection;
