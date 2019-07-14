import React from 'react'
import classes from './hamburger.module.css'

const hamburger=(props)=>(
    <div onClick={props.onclick} className={classes.hamburger}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default hamburger