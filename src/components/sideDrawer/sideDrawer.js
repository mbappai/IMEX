import React from 'react'
import classes from './sideDrawer.module.css'
import CancelButton from '../controls/cancelButton/cancel'
import {Link} from 'gatsby'


const sideDrawer=(props)=>(
    <div className={classes.sideDrawer} onClick={props.hideDrawer}>
        <div className={classes.sideDrawer_button}><CancelButton onclick={props.hideDrawer}/></div>
        <ul className={classes.sideDrawer_nav}>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact-us">Contact</Link></li>
          </ul>
    </div>
)

export default sideDrawer