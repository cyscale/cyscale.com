import { graphql } from 'gatsby'
import { map } from 'lodash'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'

import Content, { HTMLContent } from '../components/Content'
import Divider from '../components/Divider'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import theme from '../utils/theme'

const Founder = styled.div`
    text-align: center;
    & img {
        border-radius: 50%;
        object-fit: center;
    }

    & h3 {
        margin-bottom: 0;
    }

    & small {
        display: block;
        margin-bottom: ${theme.spacing(1)};
    }
`

const Strength = styled.div`
    text-align: center;

    & h3 {
        margin-bottom: 0;
    }
`

export function AboutPageTemplate({ title, founders, strengths, content, component }) {
    const PageContent = component || Content

    return (
        <Container>
            <Divider spacing={2} />
            <Row component='section'>
                <Col>
                    <PageContent content={content} />
                </Col>
            </Row>
            <Divider spacing={6} />
            <Row component='section'>
                {map(strengths, ({ title, description, image }, key) => (
                    <Col md={3} sm={6} xs={6} key={key}>
                        <Strength>
                            <PreviewCompatibleImage imageInfo={image} />
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </Strength>
                        <Divider spacing={2} />
                    </Col>
                ))}
            </Row>
            <Divider spacing={6} />
            <Row component='section'>
                {map(founders, ({ name, position, image, about }, key) => (
                    <Col md={3} sm={6} xs={6} key={key}>
                        <Founder>
                            <PreviewCompatibleImage imageInfo={image} />
                            <h3>{name}</h3>
                            <small>{position}</small>
                            <p>{about}</p>
                            <Divider spacing={2} />
                        </Founder>
                    </Col>
                ))}
            </Row>

            <Divider spacing={4} />
        </Container>
    )
}

function AboutPage({ data }) {
    const { markdownRemark: post } = data
    const { founders, strengths, title } = post.frontmatter

    return (
        <Layout title={title}>
            <AboutPageTemplate
                title={title}
                founders={founders}
                content={post.html}
                strengths={strengths}
                component={HTMLContent}
            />
        </Layout>
    )
}

export default AboutPage

export const aboutPageQuery = graphql`
    query AboutPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                founders {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 256, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    name
                    position
                    about
                }
                strengths {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 250, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    title
                    description
                }
            }
        }
    }
`
