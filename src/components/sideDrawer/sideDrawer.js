import React from 'react'
import classes from './sideDrawer.module.css'


const sideDrawer=(props)=>(
    <div className={classes.sideDrawer} onClick={props.hideDrawer}>
        <div className={classes.sideDrawer_button}><button onClick={props.hideDrawer}>X</button></div>
        <ul className={classes.sideDrawer_nav}>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
    </div>
)

export default sideDrawer