import React from 'react'
import classes from './partnership.module.css'
import Svg from '../../assets/svg/product/productSvg'

const Partnership=()=>(
    <section className={classes.partnership}>
        <div className={classes.partnership__header}>
            <h4>Company that trust us</h4>
        </div>
        <div className={classes.partnership__content}>
            <Svg/>
            <Svg/>
            <Svg/>
        </div>
    </section>
)

export default Partnership