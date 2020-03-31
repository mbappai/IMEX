import React from "react"
import { graphql } from "gatsby"

import Footer from "../components/footer/footer"
import classes from "../page-styles/terms.module.css"
import Layout from '../components/Layout/layout'
import PageHeader from '../components/pageHeader/pageHeader'



const Terms = ({ data }) => {

const termsMarkDown=data.terms.termsMd.childMarkdownRemark
  return (
    <Layout>
      <PageHeader title='Terms & Conditions'/>
 <section>
  
      <div className={classes.body}  dangerouslySetInnerHTML={{ __html: termsMarkDown.html }}></div>
    </section>
    </Layout>
   
  )
}
export default Terms

export const query = graphql`
  {
    terms: contentfulTerms {
      termsMd {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
