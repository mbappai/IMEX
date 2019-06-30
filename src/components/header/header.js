import React from 'react'
import classes from './header.module.css'

const Header=()=>(
    <header className={classes.header}>
          <div className={classes.header__logo}>log</div>
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