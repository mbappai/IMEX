import React from 'react'
import Svg from '../../assets/svg/product/productSvg'
import classes from './footer.module.css'

const footer=()=>(
    <section className={classes.footer}>
        <div className={classes.footer__header}>
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
        <div className={classes.footer__content}> <a href="#awesome">Terms and Conditons.</a></div>
    </section>
)

export default footer