import React from 'react';


const headerComp=props=>(
    <div className={props.headerStyles}>
        {props.children}
    </div>
)

const defaultStyle={
    width: "80%",
    display:"flex",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    height: "70%"
}
   
//need to set a default styling in the component.

export default headerComp