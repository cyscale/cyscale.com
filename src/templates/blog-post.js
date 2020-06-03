import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

const Root = styled.div``

export const BlogPostTemplate = ({ content, contentComponent, description, tags, title }) => {
    const PostContent = contentComponent || Content

    return (
        <Root>
            <Container>
                <Row>
                    <Col>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <PostContent content={content} />
                        {tags && tags.length ? (
                            <div style={{ marginTop: `4rem` }}>
                                <h4>Tags</h4>
                                <ul className='taglist'>
                                    {tags.map((tag) => (
                                        <li key={tag + `tag`}>
                                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </Col>
                </Row>
            </Container>
        </Root>
    )
}

BlogPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
            />
        </Layout>
    )
}

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default BlogPost

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
            }
        }
    }
`
