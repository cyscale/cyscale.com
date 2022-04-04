import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Post from '../new-blog/Post';
import { Row, Container } from '../atoms/Containers';

const Articles = ({ btnText, btnLink }) => {
    const data = useStaticQuery(graphql`
        query HeaderQuery1ss {
            allMarkdownRemark(
                limit: 3
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            ) {
                nodes {
                    frontmatter {
                        authors
                        categories
                        description
                        date
                        featuredimage {
                            publicURL
                        }
                        permalink
                        featuredpost
                        templateKey
                        title
                        tags
                    }
                }
            }
        }
    `);
    const {
        allMarkdownRemark: { nodes }
    } = data;
    return (
        <div className='bg-lightGrey mt-0 py-12'>
            <Container>
                <Row className='gap-8'>
                    {nodes &&
                        nodes.map((content, index) => {
                            return (
                                <div key={index} className='col-span-12 md:col-span-6 lg:col-span-4'>
                                    <Post {...content.frontmatter} />
                                </div>
                            );
                        })}
                </Row>

                <div className='block w-full mt-50px text-center'>
                    <div className='mt-24px mx-auto w-auto flex justify-center'>
                        <Link
                            to={btnLink}
                            className='gradientBgBtn min-w-232px text-16px font-medium rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline'
                        >
                            {btnText}
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Articles;
