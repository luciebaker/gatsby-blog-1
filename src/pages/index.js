import React from "react"
import { graphql, Link } from "gatsby"

// styled components

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Lucie's Blog" />
    <div>
    <h1>Latest on the Blog</h1>
    <h4>{data.allMarkdownRemark.totalCount}</h4>
    {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTitle>
          </BlogLink> 
          <p>{node.excerpt}</p>
        </div>
    ))}
    </div>
  </Layout>
)

export const query = graphql`
query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        id
        frontmatter {
          title
          date
          description
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`
