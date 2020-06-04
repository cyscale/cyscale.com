import { graphql } from 'gatsby'
import { get } from 'lodash'
import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Sections from '../components/Sections'

export function IndexPageTemplate({ image, title, sections, providers, production, heading, subheading, description }) {
    return (
        <>
            <Hero
                image={image}
                title={title}
                heading={heading}
                providers={providers}
                production={production}
                subheading={subheading}
                description={description}
            />
            <div name='content'>
                <Sections sections={sections} />
            </div>
        </>
    )
}

export default function IndexPage({ data }) {
    const { image, title, sections, heading, subheading, production, providers, description } = get(
        data,
        'markdownRemark.frontmatter'
    )

    return (
        <Layout>
            <IndexPageTemplate
                image={image}
                title={title}
                heading={heading}
                sections={sections}
                providers={providers}
                production={production}
                subheading={subheading}
                description={description}
            />
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
                        fluid(maxWidth: 720, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                subheading
                providers {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 720, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    name
                    production
                }
                sections {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 720, quality: 100) {
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
