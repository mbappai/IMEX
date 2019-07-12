import React from 'react';
import classes from './textfield.module.css'



const input=props=>{
//   const inputClasses=[classes.inputElement]
//  if(!props.isValid&&props.touched){inputClasses.push(classes.inValid)}
//  if(props.isValid&&props.touched){inputClasses.push(classes.valid)}
 
    return(
      <input required valid={props.isValid} className={classes.input} type="text" name={props.name} placeholder={props.placeholder} onChange={props.onChangedHandler}/>
    )
}


export default input