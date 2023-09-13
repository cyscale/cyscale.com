import React, { useEffect } from 'react';
import { css } from 'twin.macro';
import { Container } from '../atoms/Containers';
import { GatsbyImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
import CyscaleBird from '../../assets/images/cyscale-bird-homepage.svg';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import LoaderContainer from '../Loader/LoaderContainer/LoaderContainer';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';

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

    const { loadingForm } = useHSFormLoaded();

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms?.create({
                    portalId: '5413427',
                    formId: 'c2d8e2e6-6edb-43d2-9052-350e7f00d1f6',
                    target: '#meeting-form'
                });
            }
        }, 600);
    }, []);

    return (
        <div
            className='relative py-16'
            css={css`
                background-color: #f5f9ff;
                @media (min-width: 1280px) {
                    height: 55.25rem;
                }
            `}
        >
            <Helmet>
                <script charSet='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
            </Helmet>
            <Container className='my-16'>
                <div className='grid grid-cols-12 lg:gap-x-2 xl:gap-x-0'>
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl'>
                        <p className='font-montserrat text-base font-bold' css={sectionSubtitleColor}>
                            GET IN TOUCH
                        </p>{' '}
                        <h2
                            className='font-montserrat text-blue font-bold mt-3'
                            css={[
                                titleSection,
                                css`
                                    font-size: 1.9375rem;
                                `
                            ]}
                        >
                            Enterprise-grade cloud security, <br className="hidden sm:block" /> without enterprise-grade pricing
                        </h2>
                        <p className='text-base font-hind mt-5' css={sectionTextColor}>
                            Leave your details and we'll get back to you today.
                            <br />
                            Or if you already have a preferred time,{' '}
                            <Link to='/request-demo/' className='underline font-bold'>
                                book directly into our calendar.
                            </Link>
                        </p>
                        <GatsbyImage
                            image={data.manuelaOvidiuBarry.childImageSharp.gatsbyImageData}
                            className='mt-6'
                            alt='Manuela, Ovidiu and Barry from support'
                        />
                    </div>
                    <div className='col-span-12 lg:col-span-6'>
                        <div className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 pt-12 pb-0 px-8 md:px-12 mx-auto relative bg-white max-w-xl'>
                            {loadingForm && <LoaderContainer minHeight={515} />}
                            <div
                                style={{ minHeight: 515 }}
                                id='meeting-form'
                                className={classnames('pb-4', { hidden: loadingForm })}
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <img
                src={CyscaleBird}
                className='absolute hidden xl:block'
                alt=''
                css={css`
                    width: 20rem;
                    left: -1rem;
                    bottom: 11rem;
                `}
            />
        </div>
    );
};

export default CalendarSection;
