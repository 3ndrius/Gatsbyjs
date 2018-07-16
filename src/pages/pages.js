import React from "react"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>My WordPress Blog</h1>
      <h4>Page</h4>
      {data.allWordpressPage.edges.map(({ node}, index) => (
        <div key={index}>
          <h1>{node.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: node.slug }} />
        
        </div>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query Myquery2{
    allWordpressPage {
      edges {
        node {
          id
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
  `