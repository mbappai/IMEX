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
const imexBgGradient=[imexbg.childImageSharp.fluid,`linear-gradient(rgba(220, 15, 15, 0.73), rgba(4, 243, 67, 0.73))`]

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
  z-index:1
`

export default StyledBackgroundSection
