import { graphql, Link, useStaticQuery } from 'gatsby'
import { map } from 'lodash'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'

import Divider from '../../components/Divider'
import Layout from '../../components/Layout'
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

export default function PoliciesIndexPage() {
    const data = useStaticQuery(graphql`
        query PoliciesIndex {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: { frontmatter: { templateKey: { eq: "policy-page" } } }
            ) {
                edges {
                    node {
                        excerpt(pruneLength: 200)
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            templateKey
                            date(formatString: "DD MMM, YYYY")
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
                        const { title, date } = frontmatter
                        const { slug } = fields
                        return (
                            <Col md={4}>
                                <Post to={slug}>
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
