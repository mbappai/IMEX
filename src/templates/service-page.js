import React from "react"
import classes from "./service-page.module.css"
import { graphql } from "gatsby"

import Footer from "../components/footer/footer"

const ServicePage = ({ data }) => {
  const serviceData = data.contentfulServices

  const perksList =
    serviceData.perksListBody !== null ? (
      <ul>
        {serviceData.perksListBody.body.map(perk => {
          return <li>{perk}</li>
        })}
      </ul>
    ) : (
      ""
    )

  const perksListFooter =
    serviceData.perksFooterListBody !== null ? (
      <ul>
        {perksListFooter !== null
          ? serviceData.perksFooterListBody.body.map(perkFooter => {
              return <li>{perkFooter}</li>
            })
          : ""}
      </ul>
    ) : (
      ""
    )

  return (
    <section className={classes.container}>
      <header className={classes.header}>
        <h2 className={classes.header_title}>{serviceData.title}</h2>
      </header>
      <main className={classes.body}>
        <p className={classes.fullBody}>{serviceData.fullBody.fullBody}</p>
        <h3 className={classes.body_title}>{serviceData.perksListTitle}</h3>
        {perksList}
        <h3 className={classes.body_title}>{serviceData.perksFooterTitle}</h3>
        <p>{serviceData.perksFooterSubTitle}</p>
        {perksListFooter}
      </main>
      <Footer />
    </section>
  )
}

export default ServicePage

export const query = graphql`
  query($slug: String!) {
    contentfulServices(slug: { eq: $slug }) {
      id
      title
      perksListTitle
      perksListBody {
        body
      }
      perksFooterListBody {
        body
      }
      perksFooterTextBody
      perksFooterTitle
      perksListSubTitle
      fullBody {
        fullBody
      }
    }
  }
`
