import React from 'react'
import classes from './pricing.module.css'


const Pricing =()=>(
    <section id='pricing' className={classes.pricing}>
        <div className={classes.pricing__header}>
            <h2>Find the package that works best for you</h2>
            <p>We are trying our very best to see that everyones needs gets catered for.</p>
        </div>
        <div className={classes.pricing__content}>
            <article className={classes.pricing__content__item}>
            <header className={classes.content__item__header}>
                <h4>Bronze</h4>
            </header>
            <div className={classes.content__item__body}>
                <p className={classes.content__item__body__label}>order ranges</p>
                <p className={classes.content__item__body__price}>$1000 - $3000</p>
                <p className={classes.content__item__body__perk}>factory inspection is optional for <span className={classes.perksPrice}>$200</span></p>
            </div>
            <footer className={classes.content__item__footer}>
                <p className={classes.content__item__footer__label}>fee</p>
                <p className={classes.content__item__footer__price}>$70</p>
            </footer>
            </article>
            <article className={classes.pricing__content__item}>
            <header className={classes.content__item__header}>
                <h4>Bronze</h4>
            </header>
            <div className={classes.content__item__body}>
                <p className={classes.content__item__body__label}>order ranges</p>
                <p className={classes.content__item__body__price}>$1000 - $3000</p>
                <p className={classes.content__item__body__perk}>factory inspection is optional for <span className={classes.perksPrice}>$200</span></p>
            </div>
            <footer className={classes.content__item__footer}>
                <p className={classes.content__item__footer__label}>fee</p>
                <p className={classes.content__item__footer__price}>$70</p>
            </footer>
            </article>
            <article className={classes.pricing__content__item}>
            <header className={classes.content__item__header}>
                <h4>Bronze</h4>
            </header>
            <div className={classes.content__item__body}>
                <p className={classes.content__item__body__label}>order ranges</p>
                <p className={classes.content__item__body__price}>$1000 - $3000</p>
                <p className={classes.content__item__body__perk}>factory inspection is optional for <span className={classes.perksPrice}>$200</span></p>
            </div>
            <footer className={classes.content__item__footer}>
                <p className={classes.content__item__footer__label}>fee</p>
                <p className={classes.content__item__footer__price}>$70</p>
            </footer>
            </article>
            <article className={classes.pricing__content__item}>
            <header className={classes.content__item__header}>
                <h4>Bronze</h4>
            </header>
            <div className={classes.content__item__body}>
                <p className={classes.content__item__body__label}>order ranges</p>
                <p className={classes.content__item__body__price}>$1000 - $3000</p>
                <p className={classes.content__item__body__perk}>factory inspection is optional for <span className={classes.perksPrice}>$200</span></p>
            </div>
            <footer className={classes.content__item__footer}>
                <p className={classes.content__item__footer__label}>fee</p>
                <p className={classes.content__item__footer__price}>$70</p>
            </footer>
            </article>
        </div>
    </section>
)

export default Pricing