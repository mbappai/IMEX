import React from 'react'
import classes from './pricing.module.css'
import Section from '../sharedComp/sections/sections'


const Pricing =({data})=>{

    const sortedData=data.sort(function(a,b){
        return a.node.order-b.node.order;
    });

return(
    
   <section className={classes.pricing}>

<header className={classes.pricing_header}>
         <h2 className={classes.sectionTitle}>PRICING.</h2>
         <div className={classes.pricing__header__paragraph}>
        <p className={classes.sectionSubTitle}>Find the packages that works best for you.</p>
         </div>
         </header>
         <div className={classes.pricing_content}>
         {sortedData.map(({node})=>(
            <article className={classes.pricing__content__item}>
            <header className={classes.content__item__header}>
                <h4 className={classes.priceHeaderText}>{node.type}</h4>
            </header>
            <div className={classes.priceContainer}>
                <p className={classes.price}>{node.fee}</p>
            </div>
            <div className={classes.content__item__body}>
                <p className={classes.content__item__body__label}>order ranges</p>
                <p className={classes.content__item__body__price}>{node.range}</p>
                <p className={classes.content__item__body__perk}>{node.perk.perk}</p>
            </div>

            </article>
        ))}
         </div>
       
    
    </section>
)}

export default Pricing