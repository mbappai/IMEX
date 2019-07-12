import React from "react"
// import { Link } from "gatsby"


import Home from '../components/home/homeBg'
import Services from '../components/services/services'
import Products from '../components/products/products'
import Pricing from '../components/pricing/pricing'
// import Testimony from '../components/testimony/testimony'
import About from '../components/About/about'
import Contact from '../components/Contact/contact'
import Footer from '../components/footer/footer'
import '../components/global.css'

// import SEO from "../components/seo"

const IndexPage = () => (

    // <SEO title="Home" />
   <main>
     <Home/>
     <Services/>
      <Products/>
      <Pricing/>
      <About/>
      {/* <Partnership/> */}
      <Contact/>
      <Footer/>
   </main>
)

export default IndexPage
