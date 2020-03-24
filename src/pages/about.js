import React from "react"
import {graphql} from 'gatsby'

import Card from "../components/About/card/card"
import classes from "../page-styles/about.module.css"
import Layout from "../components/Layout/layout"
import PageHeader from "../components/pageHeader/pageHeader"

const About = ({data}) => {
  const team=data.team.edges;
  return (
    <Layout>
      <PageHeader hideBackArrow={true }title="About Us" subtitle="" />
      <section className={classes.about__content}>
        <div className={classes.about__content_mission}>
          <h4 className={classes.missionHeader}>Our Mission</h4>
          <div className={classes.about__content_missionParagraph}>
            <p className={classes.missionText}>
              {" "}
              We are dedicated to establish a safe and secure platform for
              Nigerians to buy goods from China. Furthermore, help businesses
              achieve their individual goals of cutting cost and sourcing
              quality products.
            </p>
          </div>
        </div>

        <section className={classes.about__content__cardsContainer}>
          <header className={classes.about__content__cards_header}>
            <h4 className={classes.teamHeader}>Meet The Team.</h4>
          </header>
          <div className={classes.about__content__cards}>
            {team.map(({node})=>(
                <Card
                name={node.name}
                role={node.companyRole}
                bioText={node.bio.bio}
                imgSrc={node.profPic.fluid}
                imgAlt={node.profPic.description}
                />
            ))}
    
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default About

export const query=graphql`
{
  team:allContentfulTeam{
    edges{
      node{
        bio {
          bio
        }
        name
        companyRole
        profPic{
          description
          fluid {
              ...GatsbyContentfulFluid
          }
        }
    
      }
    }
  }
}

`
