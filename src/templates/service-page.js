import React from "react"
import classes from "./service-page.module.css"
import { graphql} from "gatsby"

import Footer from "../components/footer/footer"

const ServicePage = ({ data }) => {
  const serviceData = data.services

  return (
    <section className={classes.container}>
      <header className={classes.header}>
        {/* <h2 className={classes.header-title}>{serviceData.title}</h2> */}
      </header>
      <main className={classes.body}></main>
      <Footer />
    </section>
  )
}

export default ServicePage

export const query = graphql`
  query($slug: String!) {
    services: contentfulServices(slug: { eq: $slug }) {
      id
      title
      preview
      subTitle
    }
  }
`
