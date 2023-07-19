import React from 'react';
import { css } from 'twin.macro';
import { Container } from '../atoms/Containers';
import { GatsbyImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
import CyscaleBird from '../../assets/images/cyscale-bird-homepage.svg';
import useHSMeetingsLoaded from '../../hooks/useHSMeetingsLoaded';
import useLoadHSMeetingsScript from '../../hooks/useLoadHSMeetingsScript';
import { graphql, useStaticQuery } from 'gatsby';

const sectionSubtitleColor = css`
    color: #38aff1;
`;

const sectionTextColor = css`
    color: #0d1d3d;
`;

const titleSection = css`
    font-size: 2rem;
`;

const CalendarSection = () => {
    const data = useStaticQuery(graphql`
        query CalendarSectionuery {
            manuelaOvidiuBarry: file(relativePath: { eq: "manuela-ovidiu-barry.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 180, layout: CONSTRAINED)
                }
            }
        }
    `);

    const { loadingMeetings } = useHSMeetingsLoaded();

    useLoadHSMeetingsScript();

    return (
        <div
            className='relative py-0 lg:py-16'
            css={css`
                @media (min-width: 1280px) {
                    height: 55.25rem;
                }
            `}
        >
            <Container className='my-16'>
                <div className='grid grid-cols-12 lg:gap-x-2 xl:gap-x-0'>
                    <div className='col-span-12 lg:col-span-4 mx-auto lg:mx-0 max-w-xl lg:max-w-lg '>
                        <p className='font-montserrat text-base font-bold' css={sectionSubtitleColor}>
                            GET IN TOUCH
                        </p>{' '}
                        <h2 className='font-montserrat text-blue font-bold mt-3' css={titleSection}>
                            Request Demo
                        </h2>
                        <p className='text-base font-hind mt-5' css={sectionTextColor}>
                            We are happy to schedule a product demo with you.
                            <br />
                            Use the calendar to select an appropriate time slot.
                        </p>{' '}
                        <GatsbyImage
                            image={data.manuelaOvidiuBarry.childImageSharp.gatsbyImageData}
                            className='mt-6'
                            alt='Manuela, Ovidiu and Barry from support'
                        />
                    </div>
                    <div className='col-span-12 lg:col-span-8 mx-auto lg:mx-0 max-w-7xl'>
                        <div
                            className={classnames({
                                hidden: loadingMeetings,
                                'meetings-iframe-container': true
                            })}
                            data-src='https://meetings.hubspot.com/barry-lyne/cyscale-cloud-platform-demo?embed=true'
                        ></div>
                    </div>
                </div>
            </Container>
            <img
                src={CyscaleBird}
                className='absolute hidden xl:block'
                alt=''
                css={css`
                    width: 25rem;
                    left: -1rem;
                    bottom: 7.3rem;
                `}
            />
        </div>
    );
};

export default CalendarSection;
