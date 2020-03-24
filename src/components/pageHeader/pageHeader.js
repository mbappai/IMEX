import React from 'react'
import classes from './pageHeader.module.css'
import ArrowBack from '../sharedComp/arrow-back/arrow-back'

const PageHeader=(props)=>(
    <header className={classes.header}>
    <div className={classes.headerContainer}>
    {props.hideBackArrow?'': <ArrowBack/>}
    <h2 className={classes.header_title}>{props.title}</h2>
<p className={classes.header_subTitle}>
  {props.subtitle}
</p>
    </div>

</header>

)

export default PageHeader;