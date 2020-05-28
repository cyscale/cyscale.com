// Gatsby supports TypeScript natively!
import '../utils/reset.css'

import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Providers from '../components/providers'
import SEO from '../components/seo'

export default function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const { gcp, aws, azure, oracle, hero } = data
  const providers = { gcp, aws, azure, oracle }

  return (
    <Layout location={location} title={siteTitle} hero={hero}>
      <SEO title="All posts" />
      <Providers providers={providers} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    hero: file(absolutePath: { regex: "/mockup.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gcp: file(absolutePath: { regex: "/gcp.png/" }) {
      childImageSharp {
        fluid(
          maxHeight: 64
          duotone: { highlight: "#09235E", shadow: "#051233" }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aws: file(absolutePath: { regex: "/aws.png/" }) {
      childImageSharp {
        fluid(
          maxHeight: 64
          duotone: { highlight: "#09235E", shadow: "#051233" }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    azure: file(absolutePath: { regex: "/azure.png/" }) {
      childImageSharp {
        fluid(
          maxHeight: 64
          duotone: { highlight: "#09235E", shadow: "#051233" }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    oracle: file(absolutePath: { regex: "/oracle.png/" }) {
      childImageSharp {
        fluid(maxHeight: 64) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
