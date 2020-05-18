import React from 'react'
import classes from './service.module.css'
import Section from '../sharedComp/sections/sections'
import { Link} from "gatsby";

const Services= ({data})=>(
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
        {data.map(({node})=>{
            return(
                <article key={node.id} className={classes.services_content__article} >
                <h4 className={classes.title}>{node.title.toUpperCase()}</h4>
               <p className={classes.subTitle}>{node.subTitle}</p>
                <p className={classes.preview}>{node.preview.preview}</p>
                <Link className={classes.link} to={`${node.slug}`}>learn more</Link>
            </article>
            )
        })}
       
    </>
    }
    />
   
)

export default Services