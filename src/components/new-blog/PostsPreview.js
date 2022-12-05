import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Post from './Post';
import { Row, Container } from '../atoms/Containers';
import { map } from 'lodash';
import classNames from 'classnames';

const PostsPreview = ({ bg }) => {
    const data = useStaticQuery(graphql`
        query PostsPreviewQuery {
            allMarkdownRemark(
                limit: 3
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            authors
                            categories
                            description
                            date
                            featuredimage {
                                publicURL
                                childImageSharp {
                                    gatsbyImageData(width: 820, layout: CONSTRAINED)
                                }
                            }
                            permalink
                            featuredpost
                            title
                        }
                    }
                }
            }
        }
    `);
    const posts = data?.allMarkdownRemark?.edges;

    return (
        <div
            className={classNames({
                'mt-0 py-12': true,
                'bg-lightGrey ': bg !== 'transparent',
                'bg-transparent': bg === 'transparent'
            })}
        >
            <Container>
                <Row className='gap-4 lg:gap-8'>
                    {map(posts, ({ node }, index) => {
                        return (
                            <div key={index} className='col-span-12 md:col-span-6 lg:col-span-4'>
                                <Post {...node.frontmatter} />
                            </div>
                        );
                    })}
                </Row>
                <div className='block w-full mt-50px text-center'>
                    <div className='mt-6 mx-auto w-auto flex justify-center'>
                        <Link
                            to='/blog/'
                            className='gradientBgBtn max-w-md text-base font-medium rounded text-white uppercase text-center py-5 px-12 no-underline'
                        >
                            Read more about cloud security
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PostsPreview;
