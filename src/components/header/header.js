import React from 'react'
import classes from './header.module.css'
import LogoSvg from '../sharedComp/logo/logo'
import Hamburger from '../controls/hamburger/hamburger'
import {Link} from 'gatsby'

const Header=(props)=>(
    <header className={classes.header}>
          <div className={classes.header__logo}><LogoSvg /></div>
          <div className={classes.header__hamburger}><Hamburger onclick={props.showSideBar}/></div>
          <ul className={classes.header__nav}>
          <li><Link className={classes.linkStyle} to="/#services">Services</Link></li>
          <li><Link className={classes.linkStyle} to="/#expertise">Expertise</Link></li>
          <li><Link className={classes.linkStyle} to="/#pricing">Pricing</Link></li>
          <li><Link activeClassName={classes.activeLink} className={classes.linkStyle}  to="/about">About</Link></li>
          <li><Link activeClassName={classes.activeLink} className={classes.linkStyle} to="/contact-us">Contact</Link></li>
          </ul>
        </header>
)

export default Header