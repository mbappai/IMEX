import React from 'react'
import classes from './cancel.module.css'

const cancel=(props)=>(
    <div onClick={props.onclick} className={classes.cancel}>
        <div></div>
        <div></div>
    </div>
)

export default cancel