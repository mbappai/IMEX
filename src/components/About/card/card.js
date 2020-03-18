import React from 'react'
import classes from './card.module.css'

const Card=({role,name,bioText,img})=>{
    return(
        <article className={classes.container}>
            <figure className={classes.imageContainer}>
                <img src="" alt="founder"/>
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
        </article>
    )
}

export default Card