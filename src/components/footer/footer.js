import React from 'react'

import {Link} from 'gatsby'

import classes from './footer.module.css'
import InstaLogo from '../sharedComp/instagram/instaSvg'
import LogoSvg from '../sharedComp/logo/logo'

const footer=()=>(
    <section className={classes.footer}>
        <section className={classes.footer_logo}>
        <div className={classes.footer_logo_content}>
        <div>
        <LogoSvg width='60%' height='60%'/>
        </div>
        <div>
        <h2>Secure Imex Agency</h2>
        </div>
        </div>
        </section>
        <section className={classes.footer_socials}>
        <header className={classes.footer_socials__header}>
        <h3>Socials</h3>
        </header>
        <div className={classes.footer_socials__content}>
        <InstaLogo/>
        </div>
        </section>
        <section className={classes.footer_navigations}> 
        <header className={classes.footer_navigations__header}>
        <h3>Navigations</h3>
        </header>
        <div className={classes.footer_navigations__content}>
        <ul >
            <li><a href="#home">Home</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimony">Testimony</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
        </div>
        
        </section>
        <section className={classes.footer_terms}>
            <p>2019<span role='img'>©</span>Copyright,Secureimex. All rights reserved.</p>
            {/* <Link style={{textDecoration:'none',color:'white'}} to='/terms'>Terms and condition</Link> */}
            </section>
    </section>
)

export default footer