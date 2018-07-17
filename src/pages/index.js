import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage


// import React from "react"
// import Link from 'gatsby-link'
// export default ({ data }) => {
//   console.log(data)
//   return (
//     <div>
//       <h1>My WordPress Blog</h1>
//       <h4>Posts</h4>
//       {data.allWordpressPost.edges.map(({ node }) => (
//         <div>
//           <h1>{node.title}</h1>
//           <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
//           <Link to="/posts">Go back to the homepage</Link>
//         </div>
//       ))}
//     </div>
//   )
// }

// export const pageQuery = graphql`
//   query Myquery{
//     allWordpressPost(sort: { fields: [date] }) {
//       edges {
//         node {
//           title
//           excerpt
//           slug
//         }
//       }
//     }
//   }
// `