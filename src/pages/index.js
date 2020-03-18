import React from "react"
// import { Link } from "gatsby"

import Home from "../components/home/homeBg"
import Services from "../components/services/services"
import Products from "../components/products/products"
import Pricing from "../components/pricing/pricing"
// import Testimony from '../components/testimony/testimony'
import About from "../components/About/about"
import Footer from "../components/footer/footer"
import "../components/global.css"
import Testimony from "../components/testimony/testimony"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

// import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  // <SEO title="Home" />
  const services = data.services.edges
  const testimonies = data.testimonies.edges
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="Description" content={data.site.siteMetadata.description} />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <main>
        <Home />
        <Services data={services} />
        <Products />
        <Pricing />
        <About
          nakudu={data.nakudu.childImageSharp.fluid}
          ms={data.ms.childImageSharp.fluid}
        />
        <Testimony data={testimonies} />
        {/* <Contact /> */}
        <Footer />
      </main>
    </div>
  )
}

export const query = graphql`
  {
    services: allContentfulServices {
      edges {
        node {
          id
          title
          preview
          subTitle
          slug
        }
      }
    }
    testimonies: allContentfulTestimonies {
      edges {
        node {
          author
          body {
            body
          }
          companyName
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
    ms: file(relativePath: { eq: "ms.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nakudu: file(relativePath: { eq: "nakudu.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
