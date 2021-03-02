import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Template = ({ data }) => {
  const title = data.mdx.frontmatter.title
  const date = data.mdx.frontmatter.date
  const status = data.mdx.frontmatter.status

  const body = data.mdx.body
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <h3 style={{ textAlign: "center", color: "darkgray" }}>{date}</h3>
      <h3 style={{ textAlign: "center", color: "darkgray" }}>{status}</h3>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      body
      frontmatter {
        title
        date
        status
      }
    }
  }
`

export default Template
