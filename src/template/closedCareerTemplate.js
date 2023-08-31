import React from 'react';
import Layout from '../components/layout/CleanLayout';
import { heroHeight } from '../assets/css/styles';
import { Row } from '../components/atoms/Containers';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';
import { hoverButtonColorStyle, widthFitStyle } from '../components/layout/style';
import RightArrow from '../components/sharedComponent/RightArrow';

const ClosedCareerTemplate = ({ pageContext, location }) => {
    const { alldata } = pageContext;
    const { frontmatter: data } = alldata;
    const image = useStaticQuery(graphql`
        query ClosedCareersQuery {
            closedCareerLarge: file(relativePath: { eq: "closed-career.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='jobDetails'
            title={`${data.seoTitle || data.title} - Cyscale`}
            description={data.seoDescription || data.description}
            noIndex={true}
        >
            <div className='bg-lightGrey2' css={heroHeight}>
                <div className='pt-24 lg:pt-32'>
                    <Row>
                        <div
                            className='col-span-12 lg:col-span-6'
                            css={css`
                                padding-left: 2rem;
                                @media (min-width: 1284px) {
                                    padding-left: calc(((100vw - 80rem) / 2) + 2rem);
                                }
                            `}
                        >
                            <h1 className='font-montserrat font-bold mt-20 text-blue text-3xl pr-8 sm:pr-0'>
                                Job no longer available
                            </h1>
                            <p className='font-montserrat text-lg mt-12'>
                                This position was successfully filled.
                                <br /> Thank you for your interest!
                            </p>
                            <Link
                                className='bg-blue text-white py-2 px-4 rounded cursor-pointer mt-6 lg:mt-20 font-medium flex mb-16'
                                to='/careers/#open-positions'
                                css={[hoverButtonColorStyle, widthFitStyle]}
                            >
                                <RightArrow fillColor={'white'} marginTop='0.2rem' />

                                <span className='text-md ml-2'>View available jobs</span>
                            </Link>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <GatsbyImage image={image.closedCareerLarge.childImageSharp.gatsbyImageData} alt='' />
                        </div>
                    </Row>
                </div>
            </div>
        </Layout>
    );
};
export default ClosedCareerTemplate;
