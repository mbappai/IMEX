import React from 'react'
import classes from './header.module.css'

const Header=()=>(
    <header className={classes.header}>
          <div className={classes.header__logo}>log</div>
          <ul className={classes.header__nav}>
          <li><a href="">Products</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          </ul>
        </header>
)

export default Header