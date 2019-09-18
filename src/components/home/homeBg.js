import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Home from './home'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => {
  const {imexbg}=useStaticQuery(graphql`
  query {
    imexbg: file(relativePath: { eq: "home-bg.JPG" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)
const imexBgGradient=[imexbg.childImageSharp.fluid,`linear-gradient(0deg, rgba(247,247,247,0.95) 0%, rgba(247,247,247,0.98) 71%, rgba(120,120,120,1) 100%);`]

       return (
        <BackgroundImage
          Tag={`section`}
          id={`test`}
          className={className}
          fluid={imexBgGradient}
        >
          <Home/>
        </BackgroundImage>
      )
    }

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  height:100vh;
  // filter:blur(8px);
  z-index:1;
`

export default StyledBackgroundSection
