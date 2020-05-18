import React from 'react'

import {Link} from 'gatsby'

import classes from './footer.module.css'
import InstaLogo from '../sharedComp/instagram/instaSvg'
import LogoSvg from '../sharedComp/logo/logo'
import Linkedin from '../sharedComp/linkedin/linkedin'
import Facebook from '../sharedComp/facebook/facebooks'

const footer=()=>(
    <section className={classes.footer}>
        <div className={classes.footerContent}>
        <section className={classes.footer_logo}>
        <div className={classes.footer_logo_content}>
          <div className={classes.logoContainer}>
            <LogoSvg />
          </div>
        <div className={classes.logoNameContainer}>
        <h2 className={classes.logoName}>Secure Imex Agency</h2>
        </div>
        </div>
        </section>
        <div className={classes.bottom}>
        <section className={classes.footer_socials}>
        <header className={classes.footer_socials__header}>
        <h3>Socials</h3>
        </header>
        <div className={classes.footer_socials__content}>
        <InstaLogo/>
        <Facebook/>
        <Linkedin/>
        </div>
        </section>
        <section className={classes.footer_navigations}> 
        <header className={classes.footer_navigations__header}>
        <h3 className={classes.navigationHeader}>Navigations</h3>
        </header>
        <div className={classes.footer_navigations__content}>
        <ul >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#expertise">Expertise</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#pricing">Pricing</Link></li>
            <li><Link to="/#testimony">Testimony</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
        </ul>
        </div>
        
        </section>
        </div>
        
        <section className={classes.footer_terms}>
        <Link style={{color:'white', marginBottom:'20px',textDecoration:'none', fontWeight:'700',fontSize:'14px'}} to='/terms' >Terms and condition</Link>
            <p>2019<span role='img'> ©</span>Copyright,Secureimex.All rights reserved.</p>
            
            </section>
            </div>
    </section>
)

export default footer