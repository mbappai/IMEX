import React from 'react';


const bodyComp=props=>(
    <div className={props.bodyStyles}>
        {props.children}
    </div>
)
   
//need to set a default styling in the component.

export default bodyComp