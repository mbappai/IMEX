import React from 'react'
import classes from './testimony.module.css'

const testimony=()=>(
    <section className={classes.testimony}>
        <div className={classes.testimony__header}>
        <h4>What people are saying about us</h4>
        </div>
        <div className={classes.testimony__content}>
            An awesome carousel will be placed here
        </div>
    </section>
)

export default testimony