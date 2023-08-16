import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Row, Container } from '../atoms/Containers';
import { formatDate } from '../../common/utils';
import arrowRightBLue from '../../assets/images/arrow-right-blue.svg';
import { GatsbyImage } from 'gatsby-plugin-image';

const CategoryPostsPreview = ({ category, id }) => {
    const data = useStaticQuery(graphql`
        query CategoryPostsPreviewQuery {
            whitepaperCover: file(relativePath: { eq: "whitepaper-cover-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 160, height: 227, layout: FIXED)
                }
            }
            allMarkdownRemark(
                limit: 5
                sort: { frontmatter: { date: DESC } }
                filter: { frontmatter: { templateKey: { eq: "blog-post" }, categories: { in: "CSPM" } } }
            ) {
                nodes {
                    frontmatter {
                        date
                        title
                        permalink
                    }
                }
            }
        }
    `);

    const {
        allMarkdownRemark: { nodes }
    } = data;
    return (
        <div className='bg-lightGrey py-12' id={id}>
            <Container>
                <Row>
                    <div className='col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-lg'>
                        <h2 className='font-bold text-xl md:max-w-xs mb-8 font-montserrat'>
                            Get your latest dose of News and Insights about
                            <strong> {category}</strong>
                        </h2>
                        {nodes &&
                            nodes.map((content, index) => {
                                const { permalink, title, date } = content.frontmatter;
                                return (
                                    <>
                                        <Link
                                            className='text-base block mb-4 hover:text-primary transition-all latest-dose'
                                            key={index}
                                            to={`/blog/${permalink}/`}
                                        >
                                            <div className='flex m-'>
                                                <img src={arrowRightBLue} alt='' height={20} width={20} />
                                                <strong className='ml-1 font-montserrat'>{title}</strong>
                                            </div>
                                            <span className='opacity-60 ml-6'>{formatDate(date)}</span>
                                        </Link>
                                    </>
                                );
                            })}
                    </div>
                    <div className='col-span-12 lg:col-span-6 py-12'>
                        <div
                            className='mt-6 lg:mt-0 rounded-xl py-8 max-w-lg lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative px-6'
                            style={{
                                backgroundImage:
                                    'linear-gradient(to bottom, #4a85eb, #326fe3, #1b58d8, #073fcc, #0623be)'
                            }}
                        >
                            <Row>
                                <div className='col-span-12 lg:col-span-6'>
                                    <div className='flex flex-col justify-between h-full'>
                                        <div>
                                            <p className='text-white mb-2'>Whitepaper</p>
                                            <h1 className='text-white text-xl mb-2'>
                                                The Complete Guide to Cloud Storage Misconfigurations
                                            </h1>
                                        </div>
                                        <p className='text-white text-sm font-thin mb-2'>
                                            This guide helps CIOs, CISOs and security staff to understand the risk &
                                            dangers of data security breaches and the importance of a secure cloud
                                            storage infrastructure.
                                        </p>
                                        <Link
                                            className='text-white text-lg underline'
                                            to={'/whitepaper/cloud-storage-misconfigurations/'}
                                        >
                                            Download Whitepaper
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-span-6 hidden lg:flex lg:justify-end'>
                                    <GatsbyImage
                                        alt='White paper Cover'
                                        className='rounded-md'
                                        image={data.whitepaperCover.childImageSharp.gatsbyImageData}
                                    />
                                </div>
                            </Row>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default CategoryPostsPreview;
