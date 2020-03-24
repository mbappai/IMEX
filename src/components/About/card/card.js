import React from 'react'
import classes from './card.module.css'
import Img from "gatsby-image"

const Card=({role,name,bioText,imgSrc,imgAlt})=>{
    return(
        <article className={classes.container}>
            <div className={classes.cardContents}>
            <figure className={classes.imageContainer}>
                <Img className={classes.image} fluid={imgSrc} alt={imgAlt}/>
            </figure>
            <aside className={classes.details}>
                <div className={classes.detailsHeader}>
                    <p className={classes.role}>{role}</p>
                    <p className={classes.name}>{name}</p>
                </div>
                <div className={classes.bio}>
    <p className={classes.bioText}>{bioText}</p>
                </div>
                <div className={classes.socials}></div>
            </aside>
            </div>
           
        </article>
    )
}

export default Card