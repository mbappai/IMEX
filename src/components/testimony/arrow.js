import React from 'react'
import classes from './testimony.module.css'

const arrow =({styles,clickFunction,gliph})=> {
    
    
    return(

    <div onClick={clickFunction}
     className={styles}>
    {gliph}
    </div>
)
}

export default arrow