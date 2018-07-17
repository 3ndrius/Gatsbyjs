import React from "react"
import Link from 'gatsby-link'
export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }, index) => (
        <div key={index}>
          
          <Link to={`post/${node.slug}`}>
          <h1>{node.title}</h1>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          
        </div>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query Myquery{
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`