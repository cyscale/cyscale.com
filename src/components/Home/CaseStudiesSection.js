import React, { useEffect, useState } from 'react';
import { css } from 'twin.macro';
import { Container } from '../atoms/Containers';
import CaseStudyCarousel from '../cloud-security-posture-management/Carousel';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import RightArrow from '../sharedComponent/RightArrow';
import sal from 'sal.js';

const sectionSubtitleColor = css`
    color: #38aff1;
`;

const titleSection = css`
    font-size: 2rem;
`;

const CaseStudiesSection = ({
    disableAnimation,
    subtitle = 'Trusted by companies worldwide',
    backgroundColor = '#f5f9ff'
}) => {
    const [curr, setCurr] = useState(0);
    const data = useStaticQuery(graphql`
        query CaseStudiesSectionQuery {
            smartFintech: file(relativePath: { eq: "smart-fintech-home.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 720, layout: CONSTRAINED)
                }
            }
            cds: file(relativePath: { eq: "cds-case-study.png" }) {
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
            quotes: file(relativePath: { eq: "quotes.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 55, layout: CONSTRAINED)
                }
            }
        }
    `);

    const [isHover, setIsHover] = useState(false);
    const [autoSlide, setAutoSlide] = useState(true);

    const slides = [
        {
            image: data.cds.childImageSharp.gatsbyImageData,
            alt: 'Data security in a multi-cloud environment',
            title: (
                <>
                    Data security in a <br className="hidden lg:block" /> multi-cloud environment
                </>
            ),
            quote: 'This US-based data intelligence platform was experiencing strong growth, resulting in significantly more customer data being stored in the cloud. As the company approached the 400-employee mark and began to feel more pressure on its cybersecurity team, the time came to sunset in-house tools developed on open-source offerings and deploy a solution that would make it easier to maintain a strong security posture over a sprawling multi-cloud estate.',
            employee: null,
            employeeImage: null,
            position: null,
            link: '/case-studies/cloud-data-security/'
        },
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
            link: '/case-studies/smart-fintech/'
        }
    ];

    useEffect(() => {
        sal({
            once: false
        });
    }, []);

    return (
        <div
            className='pt-24 pb-24 lg:pt-32 lg:pb-32'
            css={css`
                background: ${backgroundColor};
            `}
        >
            <Container>
                <h2
                    className='text-center text-blue font-montserrat font-bold pb-12'
                    css={css`
                        font-size: 1.75rem;

                        @media (max-width: 1024px) {
                            font-size: 1.625rem;
                        }
                    `}
                >
                    {subtitle}
                </h2>

                <CaseStudyCarousel autoSlide={autoSlide} setAutoSlide={setAutoSlide} curr={curr} setCurr={setCurr}>
                    {slides.map((s, index) => {
                        return (
                            <div
                                key={index}
                                className='grid grid-cols-12 gap-x-5'
                                css={css`
                                    overflow: hidden;
                                `}
                                onMouseEnter={() => setAutoSlide(false)}
                                onMouseLeave={() => setAutoSlide(true)}
                                role='button'
                                tabIndex={curr === index ? 0 : -1}
                                onClick={() => {}}
                                onKeyDown={() => {}}
                            >
                                <div
                                    className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 lg:mt-8'
                                    data-sal={!disableAnimation ? 'slide-right' : 'undefined'}
                                >
                                    <Link to={s.link} tabIndex={curr === index ? 0 : -1}>
                                        <GatsbyImage image={s.image} className='max-w-xl' alt={s.alt} />
                                    </Link>
                                </div>
                                <div
                                    className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl mt-8 lg:mt-0'
                                    data-sal={!disableAnimation ? 'slide-left' : 'undefined'}
                                >
                                    <p className='font-montserrat text-base font-bold mt-4' css={sectionSubtitleColor}>
                                        CASE STUDY
                                    </p>
                                    <Link to={s.link} tabIndex={curr === index ? 0 : -1}>
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
                                        tabIndex={curr === index ? 0 : -1}
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
