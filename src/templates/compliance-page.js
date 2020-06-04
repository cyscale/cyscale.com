import { graphql } from 'gatsby'
import React from 'react'
import { Container } from 'react-grid-system'

import Content, { HTMLContent } from '../components/Content'
import Divider from '../components/Divider'
import Hero from '../components/Hero'
import Layout from '../components/Layout'



export function CompliancePageTemplate({ image, title, cta, component, content, heading, subheading }) {
    const PageContent = component || Content

    return (
        <>
            <Hero cta={cta} image={image} title={title} heading={heading} subheading={subheading} />
            <Container name='content'>
                <Divider spacing={2} />
                    <PageContent content={content} />
                <Divider spacing={2} />
            </Container>
        </>
    )
}

export default function CompliancePage({ data }) {
    const { markdownRemark: post } = data
    const { image, title, heading, cta, subheading } = post.frontmatter

    return (
        <Layout>
            <CompliancePageTemplate
                cta={cta}
                image={image}
                title={title}
                heading={heading}
                subheading={subheading}
                content={post.html}
                component={HTMLContent}
            />
        </Layout>
    )
}

export const pageQuery = graphql`
    query CompliancePage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 720, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                cta {
                    label
                    link
                }
                heading
                subheading
            }
        }
    }
`
