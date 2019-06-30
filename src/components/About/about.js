import React from 'react'
import classes from './about.module.css'

const about=()=>(
    <section className={classes.about}>
        <div className={classes.about__header}>
            <h2>Who are we exactly?</h2>
            <h4>Our Mision</h4>
            <p>As a result of the high number of fraud cases in Nigeria, we are dedicated
to establish a safe and secure platform for Nigerians to buy goods from
China. Furthermore, help businesses achieve their individual goals 
of cutting cost and sourcing quality products.</p>
        </div>
        <div className={classes.about__content}>
        <h4>The team.</h4>
        <section className={classes.about__content__cards}>
            <article className={classes.about__content__card}>
                <figure className={classes.about__content__card__figure}><img src="../../assets/pic3.jpg" alt="ceo"/></figure>
                <h5>Usman Nakudu</h5>
                <p>Founder, CEO</p>
            </article>
            <article className={classes.about__content__card}>
                <figure className={classes.about__content__card__figure}><img src="../../assets/pic2.jpg" alt="coo"/></figure>
                <h5>Jamboree</h5>
                <p>Co-Founder, COO</p>
            </article>
        </section>
        </div>
    </section>
)

export default about