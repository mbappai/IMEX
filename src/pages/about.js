import React from 'react'
import Card from '../components/About/card/card'
import classes from '../page-styles/about.module.css'
import Layout from '../components/Layout/layout'

const About= ()=>{
    return(
        <Layout>
        <header className={classes.header}>
            <div className={classes.headerContainer}>
            <h2 className={classes.header_title}>About Us</h2>
        <p className={classes.header_subTitle}>
          We are always happy to here from our dedicated clients and any
          interested individual interested in patronizing the work that we do.
        </p>
            </div>
       
      </header>
        <section className={classes.about__content}>
        <div className={classes.about__content_mission}>
        <h4 className={classes.missionHeader}>Our Mission</h4>
            <div className={classes.about__content_missionParagraph}>
            <p className={classes.missionText}> We are dedicated
to establish a safe and secure platform for Nigerians to buy goods from
China. Furthermore, help businesses achieve their individual goals 
of cutting cost and sourcing quality products.</p>
            </div>
        </div>
       
        
        <section className={classes.about__content__cardsContainer}>
        <header className={classes.about__content__cards_header}>
        <h4 className={classes.teamHeader}>Meet The Team.</h4>
        </header>
        <div className={classes.about__content__cards}>
            <Card
            name='Muhammad Sani'
            role='Founder,CEO'
            bioText='It became our absolute dream to see that most of our clients get the best of the best services because we offer nothing less over here and we will keep on doing our best to see that everythihgworks in the clients favor with little or no error at tll.'
            />
             <Card
            name='Muhammad Sani'
            role='Founder,CEO'
            bioText='It became our absolute dream to see that most of our clients get the best of the best services because we offer nothing less over here and we will keep on doing our best to see that everythihgworks in the clients favor with little or no error at tll.'
            />
        
        </div>
           
        </section>
        </section>
        </Layout>
    )
}

export default About