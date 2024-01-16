import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';
import classNames from 'classnames';

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
                                        css={css`
                                            height: 100px;
                                        `}
                                        alt=''
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-10 mt-8 md:mt-0'>
                            <h3>
                                <Link
                                    className='font-montserrat text-2xl font-bold hover:underline'
                                    to={`/blog/${matchedAuthor.slug}/`}
                                >
                                    {matchedAuthor.name}{' '}
                                </Link>
                            </h3>
                            <p className='font-montserrat text-lg'>{matchedAuthor.position}</p>
                            <p className='mt-6 font-hind font-base'>{matchedAuthor.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AuthorSection;
