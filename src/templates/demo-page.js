import { graphql } from 'gatsby'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-grid-system'

import Content, { HTMLContent } from '../components/Content'
import Divider from '../components/Divider'
import Layout from '../components/Layout'

export function DemoPageTemplate({ title, content, component }) {
    const PageContent = component || Content

    return (
        <Container>
            <Divider spacing={2} />
            <Row component='section' justify='center'>
                <Col>
                    <PageContent  content={content} />
                </Col>
            </Row>
            <Divider spacing={2} />
            <Row>
                <Col id='demo-form'></Col>
            </Row>
            <Divider spacing={2} />
        </Container>
    )
}

function DemoPage({ data }) {
    const { markdownRemark: post } = data
    const { title } = post.frontmatter

    useEffect(() => {
        if (window.hbspt) {
            window.hbspt.forms.create({
                portalId: '5413427',
                formId: 'bd7a419b-e37b-436d-8725-cbd25efd6122',
                target: '#demo-form',
            })
        }
    }, [])

    return (
        <Layout title={title}>
            <DemoPageTemplate title={title} content={post.html} component={HTMLContent} />
        </Layout>
    )
}

export default DemoPage

export const demoPageQuery = graphql`
    query DemoPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`
