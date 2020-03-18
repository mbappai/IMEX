import React from 'react'
import classes from './header.module.css'
import LogoSvg from '../sharedComp/logo/logo'
import Hamburger from '../controls/hamburger/hamburger'
import {Link} from 'gatsby'

const Header=(props)=>(
    <header className={classes.header}>
          <div className={classes.header__logo}><LogoSvg width='60%' height='90%'/></div>
          <div className={classes.header__hamburger}><Hamburger onclick={props.showSideBar}/></div>
          <ul className={classes.header__nav}>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact-us">Contact</Link></li>
          </ul>
        </header>
)

export default Header