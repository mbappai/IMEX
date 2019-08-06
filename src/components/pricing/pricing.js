import React from 'react'
import classes from './pricing.module.css'
import Section from '../sharedComp/sections/sections'


const Pricing =()=>(
    
    <Section
    sectionId='pricing' 
    sectionStyles={classes.pricing}
    headerStyles={classes.pricing__header}
    bodyStyles={classes.pricing__content}
    headerNode={<>
    <h2>Find the package that works for you</h2>
    <p>We are trying our very best to see that everyone's budget gets catered for.</p>
</>}
    bodyNode={
        <>
        <article className={classes.pricing__content__item}>
        <header className={classes.content__item__header}>
            <h4>Bronze</h4>
        </header>
        <div className={classes.content__item__body}>
            <p className={classes.content__item__body__label}>order ranges</p>
            <p className={classes.content__item__body__price}>$1500 - $2499</p>
            <p className={classes.content__item__body__perk}>factory inspection is optional for <span className={classes.perksPrice}>$200</span></p>
        </div>
        <footer className={classes.content__item__footer}>
            <p className={classes.content__item__footer__label}>fee</p>
            <p className={classes.content__item__footer__price}>10%</p>
        </footer>
        </article>
        <article className={classes.pricing__content__item}>
        <header className={classes.content__item__header}>
            <h4>Silver</h4>
        </header>
        <div className={classes.content__item__body}>
            <p className={classes.content__item__body__label}>order ranges</p>
            <p className={classes.content__item__body__price}>$2500 - $3499</p>
            <p className={classes.content__item__body__perk}>factory inspection is optional for <span className={classes.perksPrice}>$200</span></p>
        </div>
        <footer className={classes.content__item__footer}>
            <p className={classes.content__item__footer__label}>fee</p>
            <p className={classes.content__item__footer__price}>7%</p>
        </footer>
        </article>
        <article className={classes.pricing__content__item}>
        <header className={classes.content__item__header}>
            <h4>Gold</h4>
        </header>
        <div className={classes.content__item__body}>
            <p className={classes.content__item__body__label}>order ranges</p>
            <p className={classes.content__item__body__price}>$3500 - $9,999</p>
            <p className={classes.content__item__body__perk}>factory inspection is optional for <span className={classes.perksPrice}>$200</span></p>
        </div>
        <footer className={classes.content__item__footer}>
            <p className={classes.content__item__footer__label}>fee</p>
            <p className={classes.content__item__footer__price}>5%</p>
        </footer>
        </article>
        <article className={classes.pricing__content__item}>
        <header className={classes.content__item__header}>
            <h4>Platinum</h4>
        </header>
        <div className={classes.content__item__body}>
            <p className={classes.content__item__body__label}>order ranges</p>
            <p className={classes.content__item__body__price}>$10,000 <span className={classes.small}> and above</span></p>
            <p className={classes.content__item__body__perk}>factory inspection is <span className={classes.perksPrice}>FREE</span></p>
        </div>
        <footer className={classes.content__item__footer}>
            <p className={classes.content__item__footer__label}>fee</p>
            <p className={classes.content__item__footer__price}>5%</p>
        </footer>
        </article>
        </>
    }
    />
    
    
)

export default Pricing