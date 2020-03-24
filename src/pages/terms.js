import React from "react"
import { graphql } from "gatsby"

import Footer from "../components/footer/footer"
import classes from "../page-styles/terms.module.css"



const Terms = ({ data }) => {

const termsMarkDown=data.terms.termsMd.termsMd
  return (
    <section>
      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <h2 className={classes.header_title}>Terms and Condition</h2>
        </div>
      </header>

      <div className={classes.body}>{termsMarkDown}</div>
      <Footer />
    </section>
  )
}
export default Terms

export const query = graphql`
  {
    terms: contentfulTerms {
      termsMd {
        termsMd
      }
    }
  }
`
