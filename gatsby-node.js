// const _ = require(`lodash`);
// const Promise = require(`bluebird`);
// const path = require(`path`);
// const slash = require(`slash`);

// const queryAll = require(`./src/queries/queryAll.js`);

// const pageQuery = `
// {
//   allWordpressPage {
//     edges {
//       node {
//         id
//         slug
//         status
//         template
//       }
//     }
//   }
// }
// `

// const postsQuery = `
// {
//   allWordpressPost {
//     edges {
//       node {
//         id
//         slug
//         status
//         template
//         format
//       }
//     }
//   }
// }
// `


// exports.createPages = ({ graphql, boundActionCreators }) => {
//     const { createPage } = boundActionCreators;


//     return new Promise((resolve, reject) => {

//         // Pages
//         graphql(queryAll)
//             .then(result => {
//                 if (result.errors) {
//                     console.log(result.errors);
//                     reject(result.errors);
//                 }

//                 const pageTemplate = path.resolve("./src/templates/page.js");

//                 _.each(result.data.allWordpressPage.edges, edge => {
//                     createPage({
//                         path: `/${edge.node.slug}/`,
//                         component: slash(pageTemplate),
//                         context: {
//                             id: edge.node.id,
//                         },
//                     });
//                 });
//             })

//             .then(() => {
//                 graphql(queryAll)
//                     .then(result => {
//                         if (result.errors) {
//                             console.log(result.errors);
//                             reject(result.errors);
//                         }
//                         const postTemplate = path.resolve("./src/templates/post.js");

//                         _.each(result.data.allWordpressPost.edges, edge => {
//                             createPage({
//                                 path: `/post/${edge.node.slug}/`,
//                                 component: slash(postTemplate),
//                                 context: {
//                                     id: edge.node.id,
//                                 },
//                             });
//                         });
//                         resolve();
//                     });
//             });
//         // ==== END POSTS ====
//     });
// };

const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const queryAll = require(`./src/queries/queryAll.js`)
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        // Templates
        const pageTemplate = path.resolve("./src/templates/page.js");
        const postTemplate = path.resolve("./src/templates/post.js");

        resolve(
            graphql(queryAll).then(result => {
                if (result.errors) reject(result.errors)

                // Pages detail
                const pages = result.data.allWordpressPage.edges

                pages.forEach(edge => {
                    createPage({
                        path: `/${edge.node.slug}/`,
                        component: slash(pageTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    })
                })

                // Posts detail
                const posts = result.data.allWordpressPost.edges

                createPaginatedPages({
                    edges: result.data.posts.edges,
                    createPage: createPage,
                    pageTemplate: "scr/templates/posts.js",
                    pageLength: 6,
                    pathPrefix:"posts"
                })

                posts.forEach(edge => {
                    createPage({
                        path: `/post/${edge.node.slug}/`,
                        component: slash(postTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    });
                })

            })
        )
    });
};