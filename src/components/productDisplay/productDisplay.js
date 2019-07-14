import React from 'react'
import classes from './productDisplay.module.css'
import CancelButton from '../controls/cancelButton/cancel'

const display=(props)=>{
    
    const [product]=props.data
    return(
    <div className={classes.display}>
      <div className={classes.display_button}><CancelButton onclick={props.onClick}/></div>
    <header className={classes.display_header}>
        <h3>{product.heading}</h3>
    </header>
    <div className={classes.display_description}>
        <p>{product.description}
        </p>
    </div>
    <ul className={classes.display_list}>
        {product.list.map(product=>(<li>{product}</li>))}
    </ul>
    </div>
)}

export default display

