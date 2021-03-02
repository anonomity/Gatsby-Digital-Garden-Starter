import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export const Posts = ({ data }) => {
  const { edges } = data.allMdx

  return (
    <div>
      <h1>My Garden</h1>

      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <Link
            key={frontmatter.title}
            to={frontmatter.path}
            style={{ textDecoration: "none" }}
          >
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {frontmatter.title} {frontmatter.status}
              </p>

              <p style={{ color: "#ccc", textAlign: "center" }}>
                {frontmatter.date}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
  return <h1>Hello </h1>
}

export const query = graphql`
  query MdxQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            path
            status
            title
            date
          }
        }
      }
    }
  }
`
export default Posts
