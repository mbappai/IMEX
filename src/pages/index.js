import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Home from '../components/home/home'
import Services from '../components/services/services'

import SEO from "../components/seo"

const IndexPage = () => (

    // <SEO title="Home" />
   <main>
     <Home/>
     <Services/>
   </main>
)

export default IndexPage
