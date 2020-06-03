import { Link, useStaticQuery } from 'gatsby'
import { map } from 'lodash'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'

import Divider from '../../components/Divider'
import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import theme from '../../utils/theme'

const Post = styled(Link)`
    display: block;
    padding: ${theme.spacing(2)};
    color: ${theme.palette.black70};
    border: 1px solid ${theme.palette.black10};
    border-radius: ${theme.radius};

    &:hover {
        opacity: 0.8;
        transition: opacity 0.1s ease-in;
    }

    & h3 {
        margin: 0;
    }

    & small {
        display: block;
        margin-bottom: ${theme.spacing(1)};
    }
`

export default function BlogIndexPage() {
    const data = useStaticQuery(graphql`
        query BlogIndex {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            ) {
                edges {
                    node {
                        excerpt(pruneLength: 400)
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            templateKey
                            date(formatString: "MMMM DD, YYYY")
                            featuredpost
                            featuredimage {
                                childImageSharp {
                                    fluid(maxWidth: 120, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const { edges: posts } = data.allMarkdownRemark

    return (
        <Layout>
            <Container>
                <Divider spacing={2} />
                <Row>
                    {map(posts, ({ node }) => {
                        const { frontmatter, excerpt, fields } = node
                        const { title, date, featuredimage } = frontmatter
                        const { slug } = fields
                        return (
                            <Col md={4}>
                                <Post to={slug}>
                                  <PreviewCompatibleImage imageInfo={featuredimage}/>
                                    <h3>{title}</h3>
                                    <small>{date}</small>
                                    <p>{excerpt}</p>
                                </Post>
                            </Col>
                        )
                    })}
                </Row>
                <Divider spacing={8} />
            </Container>
        </Layout>
    )
}
