import React from "react"
import { graphql, Link } from "gatsby"
export const Home = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="/posts">
        <h2>Go to Digital Garden</h2>
      </Link>
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
