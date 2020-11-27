import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'

import Content, { HTMLContent } from '../components/Content'
import Divider from '../components/Divider'
import Layout from '../components/Layout'

const Root = styled.div``

export const CareerPageTemplate = ({ content, contentComponent, description, title }) => {
    const CareerContent = contentComponent || Content

    return (
        <Root>
            <Container>
                <Row>
                    <Col>
                        <h1>{title}</h1>
                        <CareerContent content={content} />
                        <Divider spacing={2} />
                    </Col>
                </Row>
            </Container>
        </Root>
    )
}

CareerPageTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
}

const CareerPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout title={post.frontmatter.title}>
            <CareerPageTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                title={post.frontmatter.title}
            />
        </Layout>
    )
}

CareerPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default CareerPage

export const pageQuery = graphql`
    query CareerPageByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
            }
        }
    }
`
