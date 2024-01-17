import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';
import classNames from 'classnames';
import { FaLinkedin } from 'react-icons/fa';

const AuthorSection = ({ author, authorPage }) => {
    const data = useStaticQuery(graphql`
        query AuthorSectionQuery {
            ovidiu: file(relativePath: { eq: "ovidiu.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            manuela: file(relativePath: { eq: "manuela.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            andrei: file(relativePath: { eq: "andrei-s.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            sabrina: file(relativePath: { eq: "sabrina.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "authors" } } }) {
                edges {
                    node {
                        frontmatter {
                            name
                            position
                            linkedin
                            description
                            slug
                        }
                    }
                }
            }
        }
    `);

    const markdownAuthor = data.allMarkdownRemark.edges.find((edge) => edge.node.frontmatter.name === author)?.node
        .frontmatter;

    const authorImageMap = {
        'ovidiu-cical': data.ovidiu,
        'manuela-ticudean': data.manuela,
        'andrei-stefanie': data.andrei,
        'sabrina-lupsan': data.sabrina
    };

    const matchedAuthor = {
        ...markdownAuthor,
        imageData: authorImageMap[markdownAuthor?.slug]?.childImageSharp.gatsbyImageData
    };

    if (author === 'Virginia Mitea') {
        return null;
    }

    return (
        <>
            {matchedAuthor && (
                <div className={classNames({ 'bg-zircon rounded-2xl p-4': true, 'mt-6': !authorPage })}>
                    <div className='grid grid-cols-12 gap-x-6'>
                        <div className='col-span-12 md:col-span-2'>
                            <div className='flex justify-center'>
                                <Link to={`/blog/${matchedAuthor.slug}/`}>
                                    <GatsbyImage
                                        image={matchedAuthor.imageData}
                                        className='rounded-full border-digital border'
                                        imgStyle={{ borderRadius: '50%' }}
                                        css={css`
                                            height: 100px;
                                        `}
                                        alt=''
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-10 mt-8 md:mt-0'>
                            <div className='flex justify-center md:justify-start'>
                                <Link
                                    className={classNames({
                                        'font-montserrat text-2xl font-bold': true,
                                        underline: !authorPage
                                    })}
                                    to={`/blog/${matchedAuthor.slug}/`}
                                >
                                    {matchedAuthor.name}
                                </Link>
                                <a
                                    href={matchedAuthor.linkedin}
                                    className='flex text-sm text-black sm:text-white hover:underline ml-1'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <FaLinkedin size={30} color={'#079BEE'} />
                                </a>
                            </div>
                            <p className='font-montserrat text-lg text-center md:text-left'>{matchedAuthor.position}</p>
                            <p className='mt-6 font-hind font-base'>{matchedAuthor.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AuthorSection;
