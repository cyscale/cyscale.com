import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Row, Container } from '../atoms/Containers';

const CategoryPostsPreview = ({ category }) => {
    const data = useStaticQuery(graphql`
        query CategoryPostsPreviewQuery {
            allMarkdownRemark(
                limit: 5
                sort: { fields: frontmatter___date, order: DESC }
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
        <div className='bg-lightGrey py-12'>
            <Container>
                <Row>
                    <div className='col-span-12 md:col-span-6'>
                        <h2 className='font-semibold  text-xl md:max-w-xs mb-8'>
                            Get your latest dose of News and Insights about
                            <strong> {category}</strong>
                        </h2>
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        {nodes &&
                            nodes.map((content, index) => {
                                const { permalink, title, date } = content.frontmatter;
                                return (
                                    <Link
                                        className='text-base block mb-4 hover:text-primary transition-all'
                                        key={index}
                                        to={`/blog/${permalink}/`}
                                    >
                                        <strong>{title}</strong>
                                        <br />
                                        <span className='opacity-60'>{new Date(date).toLocaleDateString()}</span>
                                    </Link>
                                );
                            })}
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default CategoryPostsPreview;
