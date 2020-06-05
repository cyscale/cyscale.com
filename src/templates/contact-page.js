import { graphql } from 'gatsby'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-grid-system'

import Content, { HTMLContent } from '../components/Content'
import Divider from '../components/Divider'
import Layout from '../components/Layout'

export function ContactPageTemplate({ title, content, component }) {
    const PageContent = component || Content

    return (
        <Container>
            <Divider spacing={2} />
            <Row component='section' justify='center'>
                <Col>
                    <PageContent content={content} />
                </Col>
            </Row>
            <Divider spacing={2} />
            <Row>
                <Col id='contact-form'></Col>
            </Row>
            <Divider spacing={2} />
        </Container>
    )
}

function ContactPage({ data }) {
    const { markdownRemark: post } = data
    const { title } = post.frontmatter

    useEffect(() => {
        if (window.hbspt) {
            window.hbspt.forms.create({
                portalId: '5413427',
                formId: 'c29fe5d0-179d-4bff-a8ac-36790a48a6c2',
                target: '#contact-form',
            })
        }
    }, [])

    return (
        <Layout title={title}>
            <ContactPageTemplate title={title} content={post.html} component={HTMLContent} />
        </Layout>
    )
}

export default ContactPage

export const ContactPageQuery = graphql`
    query ContactPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`
