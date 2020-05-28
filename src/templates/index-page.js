import { graphql } from 'gatsby'
import { get } from 'lodash'
import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Sections from '../components/Sections'

export function IndexPageTemplate({ data }) {
    const { image, title, sections, heading, subheading, description } = get(data, 'markdownRemark.frontmatter')
    return (
        <>
            <Hero image={image} title={title} heading={heading} subheading={subheading} description={description} />
            <main>
                <Sections data={sections} />
            </main>
        </>
    )
}

export default function IndexPage(props) {
    return (
        <Layout>
            <IndexPageTemplate {...props} />
        </Layout>
    )
}

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                subheading
                sections {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 2048, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    title
                    text
                    cta {
                        label
                        link
                    }
                }
            }
        }
    }
`
