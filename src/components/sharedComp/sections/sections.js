import React from 'react'
import HeaderComp from './headerComp/headerComp'
import BodyComp from './bodyComp/bodyComp'

const section=props=>{
    return(
        <section id={props.sectionId} className={props.sectionStyles}>
            <HeaderComp headerStyles={props.headerStyles}>{props.headerNode}</HeaderComp>
            <BodyComp bodyStyles={props.bodyStyles}>{props.bodyNode}</BodyComp>
        </section>
    )
}

const defaultStyle={
    display: "flex",
    height: "80vh",
    widht: "100vw"
}

export default section