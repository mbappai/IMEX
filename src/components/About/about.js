import React from 'react'
import classes from './about.module.css'
// import Image from '../image'
import Img from 'gatsby-image'

import Section from '../sharedComp/sections/sections'


const about=({ms,nakudu})=>(
    <Section
    sectionId='about'
    sectionStyles={classes.about}
    headerStyles={classes.about__header}
    bodyStyles={classes.about__content}
    headerNode={
        <>
     <h2>Who are we exactly?</h2>
        </>
    }
    bodyNode={
        <>
         
        <section className={classes.about__content}>
        <div className={classes.about__content_mission}>
        <h4>Our Mission</h4>
            <div className={classes.about__content_missionParagraph}>
            <p> We are dedicated
to establish a safe and secure platform for Nigerians to buy goods from
China. Furthermore, help businesses achieve their individual goals 
of cutting cost and sourcing quality products.</p>
            </div>
        </div>
       
        
        <section className={classes.about__content__cardsContainer}>
        <header className={classes.about__content__cards_header}>
        <h4>Meet The Founders.</h4>
        </header>
        <div className={classes.about__content__cards}>
        <article className={classes.about__content__card}>
                <figure className={classes.about__content__card__figure}><Img fluid={ms} alt='Picture of Muhammad Founder'/></figure>
                <div className={classes.about__content__card__figure__labels}>
                <h5>Mohammed Sani</h5>
                {/* <p>Founder</p> */}
                </div>
            </article>
            <article className={classes.about__content__card}>
                <figure className={classes.about__content__card__figure}><Img  fluid={nakudu} alt='Picture of Usman the Co-founder'/></figure>
                <div className={classes.about__content__card__figure__labels}>
                <h5>Usman Nakudu</h5>
                {/* <p>Co-Founder</p> */}
                </div>
            </article>
        </div>
           
        </section>
        </section>
        </>

    }
    />
    
)



export default about