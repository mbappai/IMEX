// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
const path= require('path')
const fs = require("fs-extra")


exports.createPages=({graphql,actions})=>{
    const {createPage}=actions

    const ServicePage= path.resolve('./src/templates/service-page.js');
    
    return new Promise((resolve,reject)=>{
        graphql(`
        {
            allContentfulServices{
                edges{
                    node{
                        id
                        slug
                      }
                }   
              }
        }
    `).then(results=>{
        if(results.error){
            reject(results.error)
        }
        //create project pages

        services= results.data.allContentfulServices.edges

        // I want to create a path with this format.
        //slug/

        services.forEach(service=>{
            createPage({
                path:`${service.node.slug}`,
                component:ServicePage,
                context:{
                    slug:service.node.slug,
                    id:service.node.id
                } 
            })
        })

    
    }) .then(resolve)
    }) }

