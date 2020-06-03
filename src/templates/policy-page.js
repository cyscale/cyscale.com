import PropTypes from 'prop-types'
import React from 'react'
import { Container } from 'react-grid-system'

import Content, { HTMLContent } from '../components/Content'
import Divider from '../components/Divider'
import Layout from '../components/Layout'

export function PolicyPageTemplate({ title, content, component }) {
    const PageContent = component || Content
    return (
        <Container>
            <Divider spacing={2} />
            <PageContent className='content' content={content} />
            <Divider spacing={2} />
        </Container>
    )
}

function PolicyPage({ data }) {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <PolicyPageTemplate component={HTMLContent} title={post.frontmatter.title} content={post.html} />
        </Layout>
    )
}

PolicyPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}
export default PolicyPage

export const pageQuery = graphql`
    query PolicyPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
            }
        }
    }
`
