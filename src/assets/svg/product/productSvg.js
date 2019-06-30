import React from 'react'


const Svg=({styles,children})=>(
    <>
    <svg width='80px'  height='100px' viewBox="0 0 121 121">
    <circle  data-name="Ellipse 5"   cx="60.5" cy="60.5" r="60.5"/>
 </svg>
 <svg style={{...styles}}   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.322 62.555">
 {children}
</svg>
</>
)

export default Svg


