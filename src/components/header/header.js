import React from 'react'
import classes from './header.module.css'
import LogoSvg from '../sharedComp/logo/logo'

const Header=(props)=>(
    <header className={classes.header}>
          <div className={classes.header__logo}><LogoSvg width='50%' height='90%'/></div>
          <div className={classes.header__hamburger}><button onClick={props.showSideBar}>Hamburger</button></div>
          <ul className={classes.header__nav}>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
        </header>
)

export default Header