import { graphql } from 'gatsby'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-grid-system'

import Content, { HTMLContent } from '../components/Content'
import Divider from '../components/Divider'
import Layout from '../components/Layout'

export function SupportPageTemplate({ title, content, component }) {
    const PageContent = component || Content

    return (
        <Container>
            <Divider spacing={2} />
            <Row component='section' justify='center'>
                <Col>
                    <PageContent className='content' content={content} />
                </Col>
            </Row>
            <Divider spacing={2} />
            <Row>
                <Col id='support-form'></Col>
            </Row>
            <Divider spacing={2} />
        </Container>
    )
}

function SupportPage({ data }) {
    const { markdownRemark: post } = data
    const { title } = post.frontmatter

    useEffect(() => {
        if (window.hbspt) {
            window.hbspt.forms.create({
                portalId: '5413427',
                formId: 'a997dea1-e2fe-4642-b529-7a20649f471c',
                target: '#support-form',
            })
        }
    }, [])

    return (
        <Layout>
            <SupportPageTemplate title={title} content={post.html} component={HTMLContent} />
        </Layout>
    )
}

export default SupportPage

export const supportPageQuery = graphql`
    query SupportPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`
