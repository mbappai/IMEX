import React from 'react'
import classes from './service.module.css'

const Services= ()=>(
    <section id='services' className={classes.services}>
     <h2>What are we Offering?</h2>
    <div className={classes.services_content}>
        <article className={classes.services_content__article} >
            <h3>Shipping</h3>
            <p>Secure Imex manages the entire delivery process from the
            manufacturer in China to your door-step. We take care
            of all the paperwork as well, so you don’t have to go 
            through that stress. We do full container load (FCL)
            shipment and groupie using reliable China shipping
            lines.</p>
            
        </article>
        <article className={classes.services_content__article} >
            <h3>Product Development</h3>
            <p>Secure Imex manages the entire delivery process from the
            manufacturer in China to your door-step. We take care
            of all the paperwork as well, so you don’t have to go 
            through that stress. We do full container load (FCL)
            shipment and groupie using reliable China shipping
            lines.</p>
            
        </article>
        <article className={classes.services_content__article} >
            <h3>Factory Inspection</h3>
            <p>Secure Imex manages the entire delivery process from the
            manufacturer in China to your door-step. We take care
            of all the paperwork as well, so you don’t have to go 
            through that stress. We do full container load (FCL)
            shipment and groupie using reliable China shipping
            lines.</p>
            
        </article>
        <article className={classes.services_content__article} >
            <h3>Product Sourcing</h3>
            <p>Secure Imex manages the entire delivery process from the
            manufacturer in China to your door-step. We take care
            of all the paperwork as well, so you don’t have to go 
            through that stress. We do full container load (FCL)
            shipment and groupie using reliable China shipping
            lines.</p>
            
        </article>
    </div>
    </section>
)

export default Services