import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Home from './home'
import classes from './home.module.css'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "home-bg.JPG" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
          >
          {/* <h1>Hello my name is mujeex</h1> */}
          <Home/>
          </BackgroundImage>
       )
     }
     }
    />
)

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
