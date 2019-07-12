import React from 'react';


const headerComp=props=>(
    <div className={props.headerStyles}>
        {props.children}
    </div>
)

   
//need to set a default styling in the component.

export default headerComp