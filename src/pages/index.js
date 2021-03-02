import React from "react"
import { graphql } from "gatsby"
export const Home = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
export default Home
