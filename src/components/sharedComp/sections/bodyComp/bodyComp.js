import React from 'react';


const bodyComp=props=>(
    <div className={props.bodyStyles}>
        {props.children}
    </div>
)
   
const defaultStyle={
    display: 'flex',
    width: '80%',
    backgroundColor: 'red'
}
//need to set a default styling in the component.

export default bodyComp