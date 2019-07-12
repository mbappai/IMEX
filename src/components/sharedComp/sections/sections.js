import React from 'react'
import HeaderComp from './headerComp/headerComp'
import BodyComp from './bodyComp/bodyComp'
import classes from './sections.module.css'

const section=props=>{

    const sectionStyles= props.sectionStyles? props.sectionStyles: classes.section
    return(
        <section id={props.sectionId} className={sectionStyles}>
            <HeaderComp headerStyles={props.headerStyles}>{props.headerNode}</HeaderComp>
            <BodyComp bodyStyles={props.bodyStyles}>{props.bodyNode}</BodyComp>
        </section>
    )
}



export default section