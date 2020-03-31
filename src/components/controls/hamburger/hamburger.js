import React from 'react'
import classes from './hamburger.module.css'
import Hamburger from '../../sharedComp/hamburger/hamburger'

const HamburgerMenu=(props)=>(
    <div onClick={props.onclick} className={classes.hamburger}>
        <Hamburger/>
    </div>
)

export default HamburgerMenu