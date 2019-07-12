import React from 'react'
import classes from './productDisplay.module.css'

const display=(props)=>{
    
    const [product]=props.data
    return(
    <div className={classes.display}>
      <div onClick={props.onClick} className={classes.display_header__button}>X</div>
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

