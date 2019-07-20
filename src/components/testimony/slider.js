import React from 'react'
import classes from './testimony.module.css'

const slider = (props)=>(
    <div className={classes.slider}>
        <blockquote><span>" </span>{props.testimony.testimony}<span> "</span></blockquote>
        <p>{props.testimony.company}</p>
    </div>
)

export default slider