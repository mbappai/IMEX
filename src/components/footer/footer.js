import React from 'react'
import classes from './footer.module.css'
import InstaLogo from '../sharedComp/instagram/instaSvg'
import LogoSvg from '../sharedComp/logo/logo'

const footer=()=>(
    <section className={classes.footer}>
        <section className={classes.footer_logo}>
        <div className={classes.footer_logo_content}>
        <LogoSvg width='30%' height='50%'/>
        <h2>Secure Imex Agency</h2>
        </div>
        </section>
        <section className={classes.footer_socials}>
        <header className={classes.footer_socials__header}>
        <h3>Socials</h3>
        </header>
        <div className={classes.footer_socials__content}>
        {/* <InstaLogo/> */}
        <a href="">Instagram</a>
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
        <section className={classes.footer_terms}><p>Terms and condition</p></section>
        {/* <div className={classes.footer__header}>
        <section className={classes.footer__header__logo}><Svg/></section>
        <section className={classes.footer__header__socials}>
        <h4>Socials</h4>
        <div><p>facebook and instagram</p></div>
        </section>
        <section className={classes.footer__header__navigations}>
        <div className={classes.footer__header__navigations__container}>
        <h4>Navigations</h4>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimony">Testimony</a></li>
            <li><a href="#partnership">Partnership</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
        </div>
       
        </section>
        </div>
        <div className={classes.footer__content}> <a href="#awesome">Terms and Conditons.</a></div> */}
    </section>
)

export default footer