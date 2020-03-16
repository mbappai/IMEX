// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// const path= require('path')
// const fs = require("fs-extra")


// // exports.onPostBuild = () => {
// //   console.log("Copying locales")
// //   fs.copySync(
// //     path.join(__dirname, "src/i18n/locales"),
// //     path.join(__dirname, "/public/i18n/locales")
// //   )
// // }


// exports.createPages=({graphql,actions})=>{
//     const {createPage}=actions

//     const ServicePage= path.resolve('./src/templates/service-page')
    
//     return new Promise((resolve,reject)=>{
//         graphql(`
//         {
//             allContentfulServices{
//                 edges{
//                     node{
//                         id
//                         slug
//                       }
//                 }   
//               }
//         }
//     `).then(results=>{
//         if(results.error){
//             reject(results.error)
//         }
//         //create project pages

//         services= results.data.allContentfulWorkspace.edges

//         // I want to create a path with this format.
//         //slug/

//         services.forEach(space=>{
//             createPage({
//                 path:`${space.node.slug}`,
//                 component:ServicePage ,
//                 context:{
//                     slug:space.node.slug,
//                     id:space.node.id
//                 } 
//             })
//         })

    
//     }) .then(resolve)
//     }) }

