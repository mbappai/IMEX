import React from 'react'
import classes from './service.module.css'
import Section from '../sharedComp/sections/sections'

const Services= ()=>(
    <Section
    sectionId='services'
    sectionStyles={classes.services}
    headerStyles={classes.services_header}
    bodyStyles={classes.services_content}
    headerNode={  
        <>  
    <h2>What are we Offering?</h2>
    </>
    }
    bodyNode={
        <>
        <article className={classes.services_content__article} >
            <h4>Product Sourcing</h4>
            <p>Finding a product in China that will meet your quality and price expectations
                can be a daunting task. Secure Imex helps you find capable, honest and reliable chinese manufacturers
                delivering quality products at competitive prices. We take the worry out of the process, so you don't have to, giving
                you the time to take care of other more important things and all for a minimal percentage fee.
            </p>
        </article>

        <article className={classes.services_content__article} >
            <h4>Product Development</h4>
            <p>China has the world's most sophisticated production industries, making it the best
                place to design and develop good quality products at competitive prices. Our team
                helps source qualified factories, guarantees that your design requirements are met
                , and manage the entire process including product sample development, OEM branding and 
                packaging, creating product instruction manuals and delivery to your door-step.
            </p>
            
        </article>
        <article className={classes.services_content__article} >
            <h4>Factory Inspection</h4>
            <p>At Secure Imex. ensuring product quality is one of our top priorities. We offer pre-shipment inspections to ensure 
                that the product specifications have been met, the product labeling is done to your requirement and the packaging
                is up to standard.
            </p> 
        </article>

        <article className={classes.services_content__article} >
            <h4>Shipping</h4>
            <p>Secure Imex manages the entire delivery process from the
            manufacturer in China to your door-step. We take care
            of all the paperwork as well, so you don’t have to go 
            through that stress. We do full container load (FCL)
            shipment and groupage using reliable shipping
            lines.</p>
        </article>
    </>
    }
    />
   
)

export default Services